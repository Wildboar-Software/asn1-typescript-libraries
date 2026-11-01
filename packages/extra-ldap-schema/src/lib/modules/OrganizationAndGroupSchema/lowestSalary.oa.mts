/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_lowestSalary } from "../OrganizationAndGroupSchema/id-at-lowestSalary.va.mjs";

/**
 * @summary lowestSalary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lowestSalary ATTRIBUTE ::= {
 *     WITH SYNTAX                 Currency
 *     EQUALITY MATCHING RULE      currencyMatch
 *     ORDERING MATCHING RULE      currencyOrderingMatch
 *     LDAP-SYNTAX                    currencySyntax.&id
 *     LDAP-NAME                    {"lowestSalary"}
 *     LDAP-DESC                    "Lowest Salary"
 *     ID                            id-at-lowestSalary
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Currency>}
 * @implements {ATTRIBUTE<Currency>}
 */
export
const lowestSalary: ATTRIBUTE<Currency> = {
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
    "&ldapName": [ "lowestSalary" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Lowest Salary" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_lowestSalary /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
