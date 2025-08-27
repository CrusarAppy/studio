'use server';

/**
 * @fileOverview Provides an AI-assisted bio rewrite service for artists.
 *
 * - aiAssistedBio - The main function to generate bio rewrites.
 * - AiAssistedBioInput - Input type for the aiAssistedBio function.
 * - AiAssistedBioOutput - Output type for the aiAssistedBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAssistedBioInputSchema = z.object({
  artistStatement: z
    .string()
    .describe('The artist\'s current \'About Me\' statement.'),
  portfolioDetails: z
    .string()
    .describe('Details about the artist\'s portfolio, including project descriptions and themes.'),
  desiredTone: z
    .string()
    .optional()
    .describe('The desired tone for the rewritten artist statement (e.g., professional, informal, creative).'),
  desiredLength: z
    .string()
    .optional()
    .describe('The desired length of the rewritten artist statement (e.g., short, medium, long).'),
});
export type AiAssistedBioInput = z.infer<typeof AiAssistedBioInputSchema>;

const AiAssistedBioOutputSchema = z.object({
  rewrittenStatement: z.string().describe('The AI-rewritten artist statement.'),
});
export type AiAssistedBioOutput = z.infer<typeof AiAssistedBioOutputSchema>;

export async function aiAssistedBio(input: AiAssistedBioInput): Promise<AiAssistedBioOutput> {
  return aiAssistedBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistedBioPrompt',
  input: {schema: AiAssistedBioInputSchema},
  output: {schema: AiAssistedBioOutputSchema},
  prompt: `You are an AI assistant that helps artists rewrite their \'About Me\' statements.

  Given the artist's current statement, portfolio details, desired tone, and desired length, generate a rewritten statement that is more effective and engaging.

  Current Artist Statement: {{{artistStatement}}}
  Portfolio Details: {{{portfolioDetails}}}
  Desired Tone: {{#if desiredTone}}{{{desiredTone}}}{{else}}No specific tone requested, create a professional tone.{{/if}}
  Desired Length: {{#if desiredLength}}{{{desiredLength}}}{{else}}No specific length requested, generate a medium-length statement.{{/if}}

  Rewrite the artist statement, focusing on improving tone, word choice, and level of detail, using the portfolio details as context to highlight the artist's strengths and style.
`,
});

const aiAssistedBioFlow = ai.defineFlow(
  {
    name: 'aiAssistedBioFlow',
    inputSchema: AiAssistedBioInputSchema,
    outputSchema: AiAssistedBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
