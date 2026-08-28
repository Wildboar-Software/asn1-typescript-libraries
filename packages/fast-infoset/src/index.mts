/**
 * Fast Infoset ASN.1 types from ITU-T Rec. X.891 (05/2005) |
 * ISO/IEC 24824-1:2005: a binary representation of a W3C XML
 * Information Set. The root type is `Document`. Vocabulary
 * tables (clauses 6 and 8) let typically-small integers replace
 * repeated strings and qualified names. Restricted alphabets
 * (clause 9) and encoding algorithms (clause 10) compact
 * numeric, date, Base64, IEEE 754, UUID, and CDATA content.
 *
 * A fast infoset document (clause 12) is an optional XML
 * declaration with `encoding='finf'`, the 16 bits
 * `1110000000000000`, a 16-bit version (this edition is 1),
 * one padding bit, then the ECN encoding of `Document`
 * (Annex A.2). MIME type `application/fastinfoset` (Annex B).
 * The generated codecs in this package use BER.
 *
 * ITU-T Rec. X.891 (05/2005)
 * <https://www.itu.int/rec/T-REC-X.891-200505-I>.
 *
 * @module
 */
export * from "./lib/modules/FastInfoset/Attribute.ta.mjs";
export * from "./lib/modules/FastInfoset/CharacterChunk.ta.mjs";
export * from "./lib/modules/FastInfoset/Comment.ta.mjs";
export * from "./lib/modules/FastInfoset/Document-additional-data-additional-datum.ta.mjs";
export * from "./lib/modules/FastInfoset/Document-children-Item.ta.mjs";
export * from "./lib/modules/FastInfoset/Document-initial-vocabulary.ta.mjs";
export * from "./lib/modules/FastInfoset/Document.ta.mjs";
export * from "./lib/modules/FastInfoset/DocumentTypeDeclaration.ta.mjs";
export * from "./lib/modules/FastInfoset/Element-children-Item.ta.mjs";
export * from "./lib/modules/FastInfoset/Element.ta.mjs";
export * from "./lib/modules/FastInfoset/EncodedCharacterString-encoding-format.ta.mjs";
export * from "./lib/modules/FastInfoset/EncodedCharacterString.ta.mjs";
export * from "./lib/modules/FastInfoset/finf-doc-no-decl.va.mjs";
export * from "./lib/modules/FastInfoset/finf-doc-opt-decl.va.mjs";
export * from "./lib/modules/FastInfoset/four-gig.va.mjs";
export * from "./lib/modules/FastInfoset/IdentifyingStringOrIndex.ta.mjs";
export * from "./lib/modules/FastInfoset/NamespaceAttribute.ta.mjs";
export * from "./lib/modules/FastInfoset/NameSurrogate.ta.mjs";
export * from "./lib/modules/FastInfoset/NonEmptyOctetString.ta.mjs";
export * from "./lib/modules/FastInfoset/NonIdentifyingStringOrIndex-literal-character-string.ta.mjs";
export * from "./lib/modules/FastInfoset/NonIdentifyingStringOrIndex.ta.mjs";
export * from "./lib/modules/FastInfoset/Notation.ta.mjs";
export * from "./lib/modules/FastInfoset/one-meg.va.mjs";
export * from "./lib/modules/FastInfoset/ProcessingInstruction.ta.mjs";
export * from "./lib/modules/FastInfoset/QualifiedNameOrIndex-literal-qualified-name.ta.mjs";
export * from "./lib/modules/FastInfoset/QualifiedNameOrIndex.ta.mjs";
export * from "./lib/modules/FastInfoset/UnexpandedEntityReference.ta.mjs";
export * from "./lib/modules/FastInfoset/UnparsedEntity.ta.mjs";
export * from "./lib/modules/FastInfoset/URI.ta.mjs";
