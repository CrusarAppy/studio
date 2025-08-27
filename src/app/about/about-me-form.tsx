"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getRewrittenBio } from './actions';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { Bot, Copy, User, Check, Loader2 } from 'lucide-react';

const initialState = {
  success: false,
  error: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          Rewrite My Bio
          <Bot className="ml-2 h-4 w-4" />
        </>
      )}
    </Button>
  );
}

export function AboutMeForm() {
  const [state, formAction] = useFormState(getRewrittenBio, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (state.data?.rewrittenStatement) {
      navigator.clipboard.writeText(state.data.rewrittenStatement);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const errors = (state.error && typeof state.error === 'object') ? state.error : {};

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="mr-2 h-5 w-5" />
            Your Details
          </CardTitle>
          <CardDescription>Provide your info and let AI work its magic.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="artistStatement">Current "About Me" Statement</Label>
              <Textarea
                id="artistStatement"
                name="artistStatement"
                placeholder="Tell us about yourself, your work, and your passion..."
                rows={5}
                required
              />
               {errors?.artistStatement && <p className="text-destructive text-sm">{errors.artistStatement._errors.join(', ')}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="portfolioDetails">Portfolio Details</Label>
              <Textarea
                id="portfolioDetails"
                name="portfolioDetails"
                placeholder="Describe your key projects, themes, and skills showcased in your portfolio..."
                rows={5}
                required
              />
               {errors?.portfolioDetails && <p className="text-destructive text-sm">{errors.portfolioDetails._errors.join(', ')}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
               <div className="space-y-2">
                <Label htmlFor="desiredTone">Desired Tone</Label>
                <Select name="desiredTone" defaultValue="professional">
                  <SelectTrigger id="desiredTone">
                    <SelectValue placeholder="Select a tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="creative">Creative</SelectItem>
                    <SelectItem value="informal">Informal</SelectItem>
                    <SelectItem value="witty">Witty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="desiredLength">Desired Length</Label>
                <Select name="desiredLength" defaultValue="medium">
                  <SelectTrigger id="desiredLength">
                    <SelectValue placeholder="Select a length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (1-2 sentences)</SelectItem>
                    <SelectItem value="medium">Medium (1 paragraph)</SelectItem>
                    <SelectItem value="long">Long (2+ paragraphs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bot className="mr-2 h-5 w-5 text-primary" />
            AI-Assisted Rewrite
          </CardTitle>
          <CardDescription>Your new bio will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/50 p-4 rounded-lg min-h-[200px] text-sm relative whitespace-pre-wrap">
            {state.data?.rewrittenStatement ? (
              <>
                <p>{state.data.rewrittenStatement}</p>
                <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={handleCopy}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </>
            ) : (
               <p className="text-muted-foreground">Your rewritten bio will be generated here once you submit the form.</p>
            )}
             {typeof state.error === 'string' && <p className="text-destructive">{state.error}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
