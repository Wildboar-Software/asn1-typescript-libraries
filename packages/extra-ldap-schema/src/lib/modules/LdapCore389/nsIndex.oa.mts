/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_nsIndex } from "../LdapCore389/id-oc-nsIndex.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { nsIndexIDListScanLimit } from "./nsIndexIDListScanLimit.oa.mjs";
import { nsIndexType } from "./nsIndexType.oa.mjs";
import { nsMatchingRule } from "./nsMatchingRule.oa.mjs";
import { nsSystemIndex } from "./nsSystemIndex.oa.mjs";

/**
 * @summary nsIndex
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsIndex OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | nsSystemIndex }
 *   MAY CONTAIN               { description
 *                               | nsIndexType
 *                               | nsMatchingRule
 *                               | nsIndexIDListScanLimit }
 *   LDAP-NAME                 {"nsIndex"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-nsIndex }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nsIndex: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, nsSystemIndex] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, nsIndexType, nsMatchingRule, nsIndexIDListScanLimit] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nsIndex"],
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nsIndex /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
