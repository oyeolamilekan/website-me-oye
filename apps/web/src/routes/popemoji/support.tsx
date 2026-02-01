import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/popemoji/support")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Support | Popemoji",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="min-h-screen py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Popemoji Support</h1>
        <p className="text-xl text-gray-300 mb-8">
          Need help or have a suggestion? We're here for you.
        </p>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-gray-300 mb-8">
            Thank you for using <strong className="text-white">Popemoji</strong>
            ! We designed this app to be a simple, tactile escape, and we want
            to ensure your experience is as relaxing as possible.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Common Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-2">
                  How do I use the app?
                </h3>
                <p className="text-gray-300">
                  Simply tap anywhere on the screen to blast emojis. You will
                  feel a haptic vibration (tactile feedback) with every tap to
                  help you relax.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-2">
                  The haptics aren't working.
                </h3>
                <p className="text-gray-300">
                  Please ensure that "System Haptics" are enabled in your iPhone
                  Settings under <em>Sounds & Haptics</em>. Also, make sure your
                  device is not in "Low Power Mode," as this can sometimes limit
                  haptic feedback.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-cyan-400 mb-2">
                  Is my data safe?
                </h3>
                <p className="text-gray-300">
                  Yes. Popemoji does not collect, store, or share any personal
                  data or usage information. Everything happens locally on your
                  device.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-300 mb-4">
              If you encounter any bugs, have feedback, or just want to suggest
              a new emoji to add to the blast, please reach out via email:
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:johnsonoye34@gmail.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  johnsonoye34@gmail.com
                </a>
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Response Time:</strong> We
                typically respond within 24–48 hours.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
