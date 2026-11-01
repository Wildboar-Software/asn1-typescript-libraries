/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_marriedMembersPercentage } from "../OrganizationAndGroupSchema/id-at-marriedMembersPercentage.va.mjs";

/**
 * @summary marriedMembersPercentage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * marriedMembersPercentage ATTRIBUTE ::= {
 *     WITH SYNTAX                 BoundedPercentage
 *     EQUALITY MATCHING RULE      realMatch
 *     ORDERING MATCHING RULE      realOrderingMatch
 *     LDAP-SYNTAX                    real.&id
 *     LDAP-NAME                    {"marriedMembersPercentage"}
 *     LDAP-DESC                    "Percentage of Membership that is Married"
 *     ID                            id-at-marriedMembersPercentage
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BoundedPercentage>}
 * @implements {ATTRIBUTE<BoundedPercentage>}
 */
export
const marriedMembersPercentage: ATTRIBUTE<BoundedPercentage> = {
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
    "&ldapName": [ "marriedMembersPercentage" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Percentage of Membership that is Married" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_marriedMembersPercentage /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
