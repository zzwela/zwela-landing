import { redirect } from 'next/navigation';

/** @deprecated Use /iphone — unified iOS hype + waitlist + beta signup. */
export default function IOSSetupRedirectPage() {
  redirect('/iphone');
}
