/* eslint-disable */
import {
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
// export { caseIgnoreIA5Match } from "../SelectedAttributeTypes/caseIgnoreIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_zimbraVersionCheckInterval } from "../LdapZimbra/id-at-zimbraVersionCheckInterval.va.mjs";
// export { id_at_zimbraVersionCheckInterval } from "../LdapZimbra/id-at-zimbraVersionCheckInterval.va.mjs";


/**
 * @summary zimbraVersionCheckInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraVersionCheckInterval ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..32))
 *   EQUALITY MATCHING RULE    caseIgnoreIA5Match
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"zimbraVersionCheckInterval"}
 *   LDAP-DESC                 "Time interval after which Zimbra version check detects a new version. Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)."
 *   ID                        id-at-zimbraVersionCheckInterval }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const zimbraVersionCheckInterval: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseIgnoreIA5Match /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraVersionCheckInterval" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Time interval after which Zimbra version check detects a new version. Must be in valid duration format: {digits}{time-unit}. digits: 0-9, time-unit: [hmsd]|ms. h - hours, m - minutes, s - seconds, d - days, ms - milliseconds. If time unit is not specified, the default is s(seconds)." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraVersionCheckInterval /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
