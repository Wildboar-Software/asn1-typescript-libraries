/**
 * @description
 *
 * Escape registration identifier for vendor-specific services beyond
 * standardized CSTA. Completely new vendor services use Escape; private data on
 * existing services is not this type. ECMA-269 §9.4, §12.3.13; ECMA-285 §9.14.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/ ECMA-285}
 */
export * from "./EscapeRegisterID.ta.mjs";
