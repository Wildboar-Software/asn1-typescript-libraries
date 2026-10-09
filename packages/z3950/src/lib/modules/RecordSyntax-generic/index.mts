/**
 * @module
 * @description
 * ASN.1 module `RecordSyntax-generic`: Generic Record Syntax 1 (ANSI/NISO
 * Z39.50-2003, REC.3, RET.3.2, ASN1.6).
 * 
 * Object identifier `{Z39-50-recordSyntax grs-1(105)}` on arc `{Z39-50 5}`
 * (`1.2.840.10003.5.105`). The client sends that OID as the preferred record
 * syntax, or inside `compSpec`. The server applies the syntax to the abstract
 * database record produced by the schema and the element specification (§3.6,
 * §3.6.3). If the requested syntax cannot be supplied, the server uses a
 * diagnostic such as 238, 239, 227, or 1070, and does not substitute another
 * syntax when a preferred syntax was given.
 * 
 * The record is a tree of tagged elements, or several trees when the abstract
 * record has no root. Tag type 1 is tagSet-M, 2 is tagSet-G, and 3 is a local
 * tag; from 4 the schema binds the type (Appendix TAG). Variants use variant-1,
 * `{Z39-50-variantSet 1}` (`1.2.840.10003.12.1`), unless a set id or tagSet-M
 * says otherwise (Appendix VAR). Embed MARC with `ElementData` alternative
 * `ext` and the MARC format OID (REC.3.1).
 */

export type {
    ElementData,
} from "./ElementData.ta.mjs";

export {
    _decode_ElementData,
    _encode_ElementData,
} from "./ElementData.ta.mjs";

export {
    ElementMetaData,
    _root_component_type_list_1_spec_for_ElementMetaData,
    _root_component_type_list_2_spec_for_ElementMetaData,
    _extension_additions_list_spec_for_ElementMetaData,
    _decode_ElementMetaData,
    _encode_ElementMetaData,
} from "./ElementMetaData.ta.mjs";

export type {
    GenericRecord,
} from "./GenericRecord.ta.mjs";

export {
    _decode_GenericRecord,
    _encode_GenericRecord,
} from "./GenericRecord.ta.mjs";

export {
    HitVector,
    _root_component_type_list_1_spec_for_HitVector,
    _root_component_type_list_2_spec_for_HitVector,
    _extension_additions_list_spec_for_HitVector,
    _decode_HitVector,
    _encode_HitVector,
} from "./HitVector.ta.mjs";

export {
    Order,
    _root_component_type_list_1_spec_for_Order,
    _root_component_type_list_2_spec_for_Order,
    _extension_additions_list_spec_for_Order,
    _decode_Order,
    _encode_Order,
} from "./Order.ta.mjs";

export {
    TagPath_Item,
    _root_component_type_list_1_spec_for_TagPath_Item,
    _root_component_type_list_2_spec_for_TagPath_Item,
    _extension_additions_list_spec_for_TagPath_Item,
    _decode_TagPath_Item,
    _encode_TagPath_Item,
} from "./TagPath-Item.ta.mjs";

export type {
    TagPath,
} from "./TagPath.ta.mjs";

export {
    _decode_TagPath,
    _encode_TagPath,
} from "./TagPath.ta.mjs";

export {
    TaggedElement,
    _root_component_type_list_1_spec_for_TaggedElement,
    _root_component_type_list_2_spec_for_TaggedElement,
    _extension_additions_list_spec_for_TaggedElement,
    _decode_TaggedElement,
    _encode_TaggedElement,
} from "./TaggedElement.ta.mjs";

export type {
    Usage_type,
} from "./Usage-type.ta.mjs";

export {
    Usage_type_redistributable,
    redistributable,
    Usage_type_restricted,
    restricted,
    Usage_type_licensePointer,
    licensePointer,
    _decode_Usage_type,
    _encode_Usage_type,
} from "./Usage-type.ta.mjs";

export {
    Usage,
    _root_component_type_list_1_spec_for_Usage,
    _root_component_type_list_2_spec_for_Usage,
    _extension_additions_list_spec_for_Usage,
    _decode_Usage,
    _encode_Usage,
} from "./Usage.ta.mjs";

export type {
    Variant_triples_Item_value,
} from "./Variant-triples-Item-value.ta.mjs";

export {
    _decode_Variant_triples_Item_value,
    _encode_Variant_triples_Item_value,
} from "./Variant-triples-Item-value.ta.mjs";

export {
    Variant_triples_Item,
    _root_component_type_list_1_spec_for_Variant_triples_Item,
    _root_component_type_list_2_spec_for_Variant_triples_Item,
    _extension_additions_list_spec_for_Variant_triples_Item,
    _decode_Variant_triples_Item,
    _encode_Variant_triples_Item,
} from "./Variant-triples-Item.ta.mjs";

export {
    Variant,
    _root_component_type_list_1_spec_for_Variant,
    _root_component_type_list_2_spec_for_Variant,
    _extension_additions_list_spec_for_Variant,
    _decode_Variant,
    _encode_Variant,
} from "./Variant.ta.mjs";
