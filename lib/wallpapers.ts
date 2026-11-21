export type Wallpaper = {
  id: string
  src: string
  /** Short name, used to label the picker buttons. */
  name: string
}

/** Wallpapers you can try on the phone in the hero. The first one is shown on load. */
export const heroWallpapers: Wallpaper[] = [
  { id: "bus", src: "/hero/bus.jpg", name: "Camper van at sunrise" },
  { id: "cubes", src: "/hero/cubes.jpg", name: "Colored cubes" },
  { id: "cat", src: "/hero/cat.jpg", name: "Hanging cat" },
  { id: "plane", src: "/hero/plane.jpg", name: "Biplane" },
]
