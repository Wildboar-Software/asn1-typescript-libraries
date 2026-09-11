/**
 * @description
 *
 * Diverted (ECMA-269 §17.2.7 / ECMA-285 §15.2.7): the call was diverted from a
 * device. The switching function may send this only to `divertingDevice` or to
 * all monitors (capability). Payload of `cSTAEventReport`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./DivertedEvent.ta.mjs";
