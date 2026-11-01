/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_admissionRateForMales } from "../OrganizationAndGroupSchema/id-at-admissionRateForMales.va.mjs";
// export { id_at_admissionRateForMales } from "../OrganizationAndGroupSchema/id-at-admissionRateForMales.va.mjs";


/**
 * @summary admissionRateForMales
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * admissionRateForMales ATTRIBUTE ::= {
 *     WITH SYNTAX                 BoundedPercentage
 *     EQUALITY MATCHING RULE      realMatch
 *     ORDERING MATCHING RULE      realOrderingMatch
 *     LDAP-SYNTAX                    real.&id
 *     LDAP-NAME                    {"admissionRateForMales"}
 *     LDAP-DESC                    "Admission Rate as a Percentage of all Male Applicants / Candidates"
 *     ID                            id-at-admissionRateForMales
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BoundedPercentage>}
 * @implements {ATTRIBUTE<BoundedPercentage>}
 */
export
const admissionRateForMales: ATTRIBUTE<BoundedPercentage> = {
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
    "&ldapName": [ "admissionRateForMales" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Admission Rate as a Percentage of all Male Applicants / Candidates" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_admissionRateForMales /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
