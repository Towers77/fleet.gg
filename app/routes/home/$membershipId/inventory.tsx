import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home/$membershipId/inventory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/home/$membershipId/inventory"!</div>
}
