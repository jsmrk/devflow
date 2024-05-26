import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const PublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhook",
]);

export default clerkMiddleware((auth, request) => {
  if (!PublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
