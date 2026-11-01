/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { leaderDN } from "../OrganizationAndGroupSchema/leaderDN.oa.mjs";
// export { leaderDN } from "../OrganizationAndGroupSchema/leaderDN.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_chiefHumanResourcesOfficerDN } from "../OrganizationAndGroupSchema/id-at-chiefHumanResourcesOfficerDN.va.mjs";
// export { id_at_chiefHumanResourcesOfficerDN } from "../OrganizationAndGroupSchema/id-at-chiefHumanResourcesOfficerDN.va.mjs";


/**
 * @summary chiefHumanResourcesOfficerDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * chiefHumanResourcesOfficerDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  leaderDN
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"chiefHumanResourcesOfficerDN"}
 *     LDAP-DESC                   "DN of the Chief Human Resources Officer (CHRO)"
 *     ID                          id-at-chiefHumanResourcesOfficerDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const chiefHumanResourcesOfficerDN: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": leaderDN /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "chiefHumanResourcesOfficerDN" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DN of the Chief Human Resources Officer (CHRO)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_chiefHumanResourcesOfficerDN /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
