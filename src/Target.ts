import { ITarget } from "./ITarget";

export class Target<T extends HTMLElement> implements ITarget<T> {
    /**
     * Target an element
     * @param target The targeted element
     */
    constructor(public readonly target: T) {}

    append(...e: (ITarget<HTMLElement> | HTMLElement)[]): this {
        e.forEach(child => this.target.append(child instanceof HTMLElement? child : child.target));
        return this;
    }

    generator(cb: () => Generator<HTMLElement | ITarget<HTMLElement>, void, unknown>): this {
        let result: IteratorResult<HTMLElement | ITarget<HTMLElement>, void>;
        let generator = cb();
        while (!(result = generator.next()).done) {
            if (!result.value) continue;
            let el = result.value instanceof HTMLElement? result.value : result.value.target;
            this.target.append(el);
        }
        return this;
    }

    with(cb: (e: T) => any): this {
        cb(this.target);
        return this;
    }
}