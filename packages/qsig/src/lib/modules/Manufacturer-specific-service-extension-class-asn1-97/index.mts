/**
 * @module
 * @description
 *
 * Manufacturer-specific additions inside a standardised operation (ECMA-165
 * §9.2, Table 14). Each addition is identified by an object identifier. The
 * receiver acts on an extension only when it recognises that identifier;
 * otherwise it discards the extension. X.680 edition, `msi-class-asn1-97(11)`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export * from "./EXTENSION.oca.mjs";
export * from "./Extension.ta.mjs";
export * from "./Extensionset.osa.mjs";
