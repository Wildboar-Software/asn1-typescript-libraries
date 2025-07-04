/* eslint-disable */
import { id_sc_subentry } from "../InformationFramework/id-sc-subentry.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import {
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/ObjectClassKind.ta.mjs";
import { subtreeSpecification } from "../InformationFramework/subtreeSpecification.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
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

/* eslint-enable */
