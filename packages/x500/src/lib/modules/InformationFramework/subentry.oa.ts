/* eslint-disable */
import { id_sc_subentry } from "../InformationFramework/id-sc-subentry.va.js";
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.js";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.js";
import { subtreeSpecification } from "../InformationFramework/subtreeSpecification.oa.js";
import { top } from "../InformationFramework/top.oa.js";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export { id_sc_subentry } from "../InformationFramework/id-sc-subentry.va.js";
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
export { subtreeSpecification } from "../InformationFramework/subtreeSpecification.oa.js";
export { top } from "../InformationFramework/top.oa.js";
export { commonName } from "../SelectedAttributeTypes/commonName.oa.js";

/* START_OF_SYMBOL_DEFINITION subentry */
/**
 * @summary subentry
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * subentry OBJECT-CLASS ::= {
 *   SUBCLASS OF      {top}
 *   KIND             structural
 *   MUST CONTAIN     {commonName |
 *                     subtreeSpecification}
 *   LDAP-NAME        {"subentry"}
 *   ID               id-sc-subentry }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const subentry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [
        commonName,
        subtreeSpecification,
    ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["subentry"],
    "&id": id_sc_subentry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION subentry */

/* eslint-enable */
