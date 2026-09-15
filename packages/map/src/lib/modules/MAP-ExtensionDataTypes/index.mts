/**
 * @description
 *
 * ASN.1 module `MAP-ExtensionDataTypes` (clause 17.7.11). `ExtensionContainer`
 * carries private extensions defined outside this specification and PCS
 * extensions. Private extensions in ACs of version 3 or higher shall be
 * included only in this container; PCS extensions shall be included in the PCS
 * Extension Container (3GPP TS 29.002 V19.1.0 clauses 17.1.4 and 17.7.11).
 */
export * from "./ExtensionContainer.ta.mjs";
export * from "./ExtensionSet.osa.mjs";
export * from "./MAP-EXTENSION.oca.mjs";
export * from "./PCS-Extensions.ta.mjs";
export * from "./PrivateExtension.ta.mjs";
export * from "./PrivateExtensionList.ta.mjs";
export * from "./SLR-Arg-PCS-Extensions.ta.mjs";
export * from "./SLR-ArgExtensionContainer.ta.mjs";
export * from "./maxNumOfPrivateExtensions.va.mjs";
