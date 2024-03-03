import Header from "./Header";

export default function Layout(props: { children?: any }) {
  return (
    <div class="container mx-auto">
      <Header />
      {props.children}
    </div>
  )
}
