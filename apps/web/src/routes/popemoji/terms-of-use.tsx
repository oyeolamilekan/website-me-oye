import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/popemoji/terms-of-use")({
  component: TermsOfUseComponent,
  head: () => ({
    meta: [
      {
        title: "Terms of Use | Popemoji",
      },
    ],
  }),
});

function TermsOfUseComponent() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">
          Terms of Use (EULA) for Popemoji
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: January 31, 2026</p>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-gray-300 mb-8">
            By downloading or using Popemoji (the "App"), these terms will
            automatically apply to you. Please read them carefully before using
            the app.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Description of Service
            </h2>
            <p className="text-gray-300">
              Popemoji is a sensory relaxation tool designed to provide visual
              emoji effects and haptic feedback. The App is provided "as is" for
              your personal, non-commercial enjoyment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Intellectual Property
            </h2>
            <p className="text-gray-300">
              The "Popemoji" name, the app's code, and the custom design
              elements are the intellectual property of the developer. You may
              not copy, modify, or attempt to extract the source code of the
              App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. User Conduct
            </h2>
            <p className="text-gray-300">
              Since Popemoji is a local, offline experience, you are free to use
              it as intended. However, you agree not to use the App in any way
              that is unlawful or harms the integrity of the software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Disclaimer of Warranties
            </h2>
            <p className="text-gray-300">
              While we aim for a relaxing experience, we do not guarantee that
              the App will be bug-free or that the haptic feedback will function
              on all devices (as it depends on your hardware settings). Use of
              the App is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-300">
              In no event shall the developer of Popemoji be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Standard Apple EULA
            </h2>
            <p className="text-gray-300">
              In addition to these terms, your use of Popemoji is also governed
              by Apple's Standard Licensed Application End User License
              Agreement (EULA), which can be found on the{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Apple App Store website
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-gray-300">
              We may update these terms from time to time. Your continued use of
              the App following any changes constitutes acceptance of those
              changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
