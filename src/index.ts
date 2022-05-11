import { Target } from "./Target";

export * from "./ITarget";
export * from "./Target";

export function create<T extends keyof HTMLElementTagNameMap>(type: T): Target<HTMLElementTagNameMap[T]> {
    return new Target(document.createElement(type));
}

export default create;
