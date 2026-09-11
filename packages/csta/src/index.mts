/**
 * @packageDocumentation
 *
 * TypeScript encodings of CSTA Phase III. Service behaviour is
 * [ECMA-269](https://ecma-international.org/publications-and-standards/standards/ecma-269/)
 * (9th ed., Dec 2011). ROSE operation codes, application tags, and
 * ASN.1 modules are
 * [ECMA-285](https://ecma-international.org/publications-and-standards/standards/ecma-285/)
 * (4th ed., Dec 2011).
 *
 * Import from a subpath (for example `@wildboar/csta/CSTA-make-call`)
 * rather than this root: the package root does not re-export every
 * module. Events are payloads of `cSTAEventReport` (local code 21),
 * not standalone operations. Negative acknowledgements use
 * `universalFailure` (local code 1) with a `UniversalFailure` CHOICE.
 *
 * Remote Operations types (`OPERATION`, `ERROR`, `Code`, `Priority`)
 * are re-exported from `@wildboar/rose` (ECMA-285 §5.2).
 */
export {};
