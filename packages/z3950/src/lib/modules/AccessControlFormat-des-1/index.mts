/**
 * @module
 * @description
 * Access-control format des-1 `{Z39-50-accessControl 2}` (ANSI/NISO Z39.50-2003
 * appendix ACC, ASN1.9.2, §3.2.5).
 */
export type {
    DES_RN_Object,
} from "./DES-RN-Object.ta.mjs";

export {
    _decode_DES_RN_Object,
    _encode_DES_RN_Object,
} from "./DES-RN-Object.ta.mjs";

export {
    DRNType,
    _root_component_type_list_1_spec_for_DRNType,
    _root_component_type_list_2_spec_for_DRNType,
    _extension_additions_list_spec_for_DRNType,
    _decode_DRNType,
    _encode_DRNType,
} from "./DRNType.ta.mjs";
