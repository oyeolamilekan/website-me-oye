import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/popemoji/privacy")({
  component: PrivacyComponent,
});

function PrivacyComponent() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy for Popemoji</h1>
      <p className="mb-6 text-sm text-muted-foreground">
        <strong>Last Updated: January 20, 2026</strong>
      </p>
      <div className="space-y-6">
        <p>
          At <strong>Popemoji</strong>, we believe in simple, relaxing fun
          without the need for data tracking. Your privacy is a priority, which
          is why our app is designed to be fully functional without collecting
          any information from you.
        </p>

        <section>
          <h2 className="mb-3 text-xl font-semibold">
            1. Information Collection and Use
          </h2>
          <p className="mb-2">
            <strong>
              Popemoji does not collect, store, or share any personal
              information.
            </strong>
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              We do not collect your name, email address, location, or device
              identifiers.
            </li>
            <li>
              We do not use any third-party analytics or tracking software.
            </li>
            <li>
              All interactions (tapping and haptic feedback) happen locally on
              your device and are never transmitted to a server.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">
            2. Camera, Photos, and Microphone
          </h2>
          <p>
            Popemoji does not require access to your camera, photo library, or
            microphone.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">3. Children's Privacy</h2>
          <p>
            Because we do not collect any personal information, Popemoji is safe
            for users of all ages and is compliant with the Children's Online
            Privacy Protection Act (COPPA).
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">
            4. Changes to This Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. Since we do not
            collect contact information, we encourage you to check this page
            periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact
            us at: <strong>johnsonoye34@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
