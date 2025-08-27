'use server';

import { aiAssistedBio, type AiAssistedBioInput } from '@/ai/flows/ai-assisted-bio';
import { z } from 'zod';

const formSchema = z.object({
  artistStatement: z.string().min(10, "Please provide a more detailed statement."),
  portfolioDetails: z.string().min(10, "Please provide more details about your portfolio."),
  desiredTone: z.string().optional(),
  desiredLength: z.string().optional(),
});

type FormState = {
  success: boolean;
  error: { [key: string]: any } | string | null;
  data: { rewrittenStatement: string } | null;
}

export async function getRewrittenBio(prevState: FormState, formData: FormData): Promise<FormState> {
  const data = {
    artistStatement: formData.get('artistStatement'),
    portfolioDetails: formData.get('portfolioDetails'),
    desiredTone: formData.get('desiredTone'),
    desiredLength: formData.get('desiredLength'),
  };

  const parsed = formSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: parsed.error.format(), data: null };
  }

  try {
    const result = await aiAssistedBio(parsed.data as AiAssistedBioInput);
    return { success: true, data: result, error: null };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'An unexpected error occurred. Please try again.', data: null };
  }
}
