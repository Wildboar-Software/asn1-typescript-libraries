/* eslint-disable */
import { id_sc_serviceAdminSubentry } from "../InformationFramework/id-sc-serviceAdminSubentry.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { searchRules } from "../InformationFramework/searchRules.oa.mjs";
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

/* eslint-enable */
