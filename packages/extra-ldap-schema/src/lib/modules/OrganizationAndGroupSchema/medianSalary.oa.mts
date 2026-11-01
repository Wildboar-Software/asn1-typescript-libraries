/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_medianSalary } from "../OrganizationAndGroupSchema/id-at-medianSalary.va.mjs";

/**
 * @summary medianSalary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * medianSalary ATTRIBUTE ::= {
 *     WITH SYNTAX                 Currency
 *     EQUALITY MATCHING RULE      currencyMatch
 *     ORDERING MATCHING RULE      currencyOrderingMatch
 *     LDAP-SYNTAX                    currencySyntax.&id
 *     LDAP-NAME                    {"medianSalary"}
 *     LDAP-DESC                    "Median Salary"
 *     ID                            id-at-medianSalary
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Currency>}
 * @implements {ATTRIBUTE<Currency>}
 */
export
const medianSalary: ATTRIBUTE<Currency> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Currency,
    },
    encoderFor: {
        "&Type": _encode_Currency,
    },
    "&equality-match": currencyMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": currencyOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": currencySyntax["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "medianSalary" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Median Salary" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_medianSalary /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
