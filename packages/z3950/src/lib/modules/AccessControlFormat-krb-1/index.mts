/**
 * @module
 * @description
 * Access-control format krb-1 `{Z39-50-accessControl 3}` (ANSI/NISO Z39.50-2003
 * appendix ACC, ASN1.9.3, §3.2.5).
 */
export type {
    KRBObject,
} from "./KRBObject.ta.mjs";

export {
    _decode_KRBObject,
    _encode_KRBObject,
} from "./KRBObject.ta.mjs";

export {
    KRBRequest,
    _root_component_type_list_1_spec_for_KRBRequest,
    _root_component_type_list_2_spec_for_KRBRequest,
    _extension_additions_list_spec_for_KRBRequest,
    _decode_KRBRequest,
    _encode_KRBRequest,
} from "./KRBRequest.ta.mjs";

export {
    KRBResponse,
    _root_component_type_list_1_spec_for_KRBResponse,
    _root_component_type_list_2_spec_for_KRBResponse,
    _extension_additions_list_spec_for_KRBResponse,
    _decode_KRBResponse,
    _encode_KRBResponse,
} from "./KRBResponse.ta.mjs";
