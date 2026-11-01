/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_admissionRate } from "../OrganizationAndGroupSchema/id-at-admissionRate.va.mjs";

/**
 * @summary admissionRate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * admissionRate ATTRIBUTE ::= {
 *     WITH SYNTAX                 BoundedPercentage
 *     EQUALITY MATCHING RULE      realMatch
 *     ORDERING MATCHING RULE      realOrderingMatch
 *     LDAP-SYNTAX                    real.&id
 *     LDAP-NAME                    {"admissionRate"}
 *     LDAP-DESC                    "Admission Rate as a Percentage of Applicants / Candidates"
 *     ID                            id-at-admissionRate
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BoundedPercentage>}
 * @implements {ATTRIBUTE<BoundedPercentage>}
 */
export
const admissionRate: ATTRIBUTE<BoundedPercentage> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_BoundedPercentage,
    },
    encoderFor: {
        "&Type": _encode_BoundedPercentage,
    },
    "&equality-match": realMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": realOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": real["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "admissionRate" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Admission Rate as a Percentage of Applicants / Candidates" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_admissionRate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
