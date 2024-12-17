export function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto text-center px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to AI Chat</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Your intelligent assistant for coding, learning, and problem-solving
      </p>
      <div className="grid gap-6 text-muted-foreground">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="font-medium text-foreground">Smart Conversations</h3>
            <p>Get intelligent responses to your questions and coding challenges</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="font-medium text-foreground">File Support</h3>
            <p>Share images and PDFs for better context and collaboration</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 p-2 rounded-lg">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="font-medium text-foreground">Chat History</h3>
            <p>Access your previous conversations anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
}