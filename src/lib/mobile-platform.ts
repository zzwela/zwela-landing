/**
 * Best-effort mobile OS detection from the browser.
 * Not foolproof (user-agent can be spoofed; iPad may report as desktop Safari).
 */
export type MobileOs = 'ios' | 'android';

export function detectMobileOs(): MobileOs | null {
  if (typeof navigator === 'undefined') return null;

  const ua = navigator.userAgent;

  if (/android/i.test(ua)) return 'android';

  // iPhone / iPod / legacy iPad UA
  if (/iPhone|iPod|iPad/i.test(ua)) return 'ios';

  // iPadOS 13+ Safari often reports as Mac with touch
  if (
    navigator.platform === 'MacIntel' &&
    typeof navigator.maxTouchPoints === 'number' &&
    navigator.maxTouchPoints > 1
  ) {
    return 'ios';
  }

  return null;
}
