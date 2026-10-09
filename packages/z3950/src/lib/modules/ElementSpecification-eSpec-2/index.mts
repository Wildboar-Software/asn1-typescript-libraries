/**
 * @module
 * @description
 * ASN.1 module for element specification format eSpec-2 (ANSI/NISO Z39.50-2003,
 * ESP.1, RET.3.1, ASN1.13).
 * 
 * Object identifier `{Z39-50-elementSpec eSpec-2(2)}` on arc `{Z39-50 11}`
 * (`1.2.840.10003.11.2`). In version 3 the client sends it inside `compSpec`
 * (§3.6.1). An element set name, including `F` (full) and `B` (brief), is the
 * other way to select elements, and the only way on a Search or when `compSpec`
 * is omitted (§3.6.2). Version 2 allows only an element set name.
 * 
 * eSpec-2 is a compatible extension of eSpec-1 (`1.2.840.10003.11.1`): the
 * addition is `schemaId` on a tag. Servers should accept an eSpec-1 OID as
 * eSpec-2. Tag paths name elements by tag type, tag value, and occurrence, and
 * may use `wildThing` or `wildPath`. A variant request on a simple element
 * selects the form of that element (Appendix VAR).
 */

export type {
    ElementRequest_compositeElement_elementList,
} from "./ElementRequest-compositeElement-elementList.ta.mjs";

export {
    _decode_ElementRequest_compositeElement_elementList,
    _encode_ElementRequest_compositeElement_elementList,
} from "./ElementRequest-compositeElement-elementList.ta.mjs";

export {
    ElementRequest_compositeElement,
    _root_component_type_list_1_spec_for_ElementRequest_compositeElement,
    _root_component_type_list_2_spec_for_ElementRequest_compositeElement,
    _extension_additions_list_spec_for_ElementRequest_compositeElement,
    _decode_ElementRequest_compositeElement,
    _encode_ElementRequest_compositeElement,
} from "./ElementRequest-compositeElement.ta.mjs";

export type {
    ElementRequest,
} from "./ElementRequest.ta.mjs";

export {
    _decode_ElementRequest,
    _encode_ElementRequest,
} from "./ElementRequest.ta.mjs";

export {
    Espec_2,
    _root_component_type_list_1_spec_for_Espec_2,
    _root_component_type_list_2_spec_for_Espec_2,
    _extension_additions_list_spec_for_Espec_2,
    _decode_Espec_2,
    _encode_Espec_2,
} from "./Espec-2.ta.mjs";

export {
    Occurrences_values,
    _root_component_type_list_1_spec_for_Occurrences_values,
    _root_component_type_list_2_spec_for_Occurrences_values,
    _extension_additions_list_spec_for_Occurrences_values,
    _decode_Occurrences_values,
    _encode_Occurrences_values,
} from "./Occurrences-values.ta.mjs";

export type {
    Occurrences,
} from "./Occurrences.ta.mjs";

export {
    _decode_Occurrences,
    _encode_Occurrences,
} from "./Occurrences.ta.mjs";

export {
    SimpleElement,
    _root_component_type_list_1_spec_for_SimpleElement,
    _root_component_type_list_2_spec_for_SimpleElement,
    _extension_additions_list_spec_for_SimpleElement,
    _decode_SimpleElement,
    _encode_SimpleElement,
} from "./SimpleElement.ta.mjs";

export {
    TagPath_Item_specificTag,
    _root_component_type_list_1_spec_for_TagPath_Item_specificTag,
    _root_component_type_list_2_spec_for_TagPath_Item_specificTag,
    _extension_additions_list_spec_for_TagPath_Item_specificTag,
    _decode_TagPath_Item_specificTag,
    _encode_TagPath_Item_specificTag,
} from "./TagPath-Item-specificTag.ta.mjs";

export type {
    TagPath_Item,
} from "./TagPath-Item.ta.mjs";

export {
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
