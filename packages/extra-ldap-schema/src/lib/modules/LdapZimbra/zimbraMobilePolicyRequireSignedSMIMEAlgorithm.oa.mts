/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
// export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraMobilePolicyRequireSignedSMIMEAlgorithm } from "../LdapZimbra/id-at-zimbraMobilePolicyRequireSignedSMIMEAlgorithm.va.mjs";
// export { id_at_zimbraMobilePolicyRequireSignedSMIMEAlgorithm } from "../LdapZimbra/id-at-zimbraMobilePolicyRequireSignedSMIMEAlgorithm.va.mjs";


/**
 * @summary zimbraMobilePolicyRequireSignedSMIMEAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMobilePolicyRequireSignedSMIMEAlgorithm ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMobilePolicyRequireSignedSMIMEAlgorithm"}
 *   LDAP-DESC                 "what required algorithm must be used when signing a message; ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyRequireSignedSMIMEAlgorithm value is set to -1"
 *   ID                        id-at-zimbraMobilePolicyRequireSignedSMIMEAlgorithm }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraMobilePolicyRequireSignedSMIMEAlgorithm: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMobilePolicyRequireSignedSMIMEAlgorithm" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "what required algorithm must be used when signing a message; ignored if zimbraFeatureMobilePolicyEnabled=FALSE or zimbraMobilePolicyRequireSignedSMIMEAlgorithm value is set to -1" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMobilePolicyRequireSignedSMIMEAlgorithm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
