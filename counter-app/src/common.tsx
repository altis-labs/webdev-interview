
// 1. enforce strict typing
// 2. this entire function may be simplified to the form seen below
// 3. always ask politely when prompting the user

export function getMessage(count: number): string {
  if (count === 0)  return "Click the button, please!"
  return `The specially calculated value, which is not representative of the number of times you have clicked the button is: ${count}`
}