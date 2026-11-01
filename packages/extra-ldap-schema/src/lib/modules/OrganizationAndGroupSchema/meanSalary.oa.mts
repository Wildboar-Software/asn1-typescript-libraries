/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_meanSalary } from "../OrganizationAndGroupSchema/id-at-meanSalary.va.mjs";
// export { id_at_meanSalary } from "../OrganizationAndGroupSchema/id-at-meanSalary.va.mjs";


/**
 * @summary meanSalary
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * meanSalary ATTRIBUTE ::= {
 *     WITH SYNTAX                 Currency
 *     EQUALITY MATCHING RULE      currencyMatch
 *     ORDERING MATCHING RULE      currencyOrderingMatch
 *     LDAP-SYNTAX                    currencySyntax.&id
 *     LDAP-NAME                    {"meanSalary"}
 *     LDAP-DESC                    "Mean Salary"
 *     ID                            id-at-meanSalary
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Currency>}
 * @implements {ATTRIBUTE<Currency>}
 */
export
const meanSalary: ATTRIBUTE<Currency> = {
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
    "&ldapName": [ "meanSalary" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Mean Salary" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_meanSalary /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
