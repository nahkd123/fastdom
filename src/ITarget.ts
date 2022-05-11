export interface ITarget<T extends HTMLElement> {
    target: T;

    /**
     * Append to targeted element
     * @param e HTML element or targeted element object
     */
    append(...e: (HTMLElement | ITarget<HTMLElement>)[]): this;

    /**
     * Append elements from generator function
     * @param cb The generator function that generates more elements
     */
    generator(cb: () => Generator<HTMLElement | ITarget<HTMLElement>, void, unknown>): this;

    /**
     * Apply to targeted element with callback
     * @param cb Callback
     */
    with(cb: (e: T) => any): this;
}