/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
// export { distinguishedName } from "../SelectedAttributeTypes/distinguishedName.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_forbidsMembershipWithDN } from "../OrganizationAndGroupSchema/id-at-forbidsMembershipWithDN.va.mjs";
// export { id_at_forbidsMembershipWithDN } from "../OrganizationAndGroupSchema/id-at-forbidsMembershipWithDN.va.mjs";


/**
 * @summary forbidsMembershipWithDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forbidsMembershipWithDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  distinguishedName
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"forbidsMembershipWithDN"}
 *     LDAP-DESC                   "DN of a group or organization whose membership this group or organization forbids"
 *     ID                          id-at-forbidsMembershipWithDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const forbidsMembershipWithDN: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": distinguishedName /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "forbidsMembershipWithDN" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DN of a group or organization whose membership this group or organization forbids" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_forbidsMembershipWithDN /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
