/* eslint-disable */
import { id_sc_serviceAdminSubentry } from "../InformationFramework/id-sc-serviceAdminSubentry.va.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { searchRules } from "../InformationFramework/searchRules.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { id_sc_serviceAdminSubentry } from "../InformationFramework/id-sc-serviceAdminSubentry.va.js";
export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
export {
    abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ObjectClassKind,
    ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */,
    ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
    _enum_for_ObjectClassKind,
} from "../InformationFramework/ObjectClassKind.ta.js";
export { searchRules } from "../InformationFramework/searchRules.oa.js";

/* START_OF_SYMBOL_DEFINITION serviceAdminSubentry */
/**
 * @summary serviceAdminSubentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * serviceAdminSubentry OBJECT-CLASS ::= {
 *   KIND          auxiliary
 *   MUST CONTAIN  {searchRules}
 *   ID            id-sc-serviceAdminSubentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const serviceAdminSubentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [searchRules] /* OBJECT_FIELD_SETTING */,
    "&id": id_sc_serviceAdminSubentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION serviceAdminSubentry */

/* eslint-enable */
