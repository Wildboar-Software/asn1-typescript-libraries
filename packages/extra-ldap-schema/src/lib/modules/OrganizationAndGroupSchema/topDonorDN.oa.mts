/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { donorDN } from "../OrganizationAndGroupSchema/donorDN.oa.mjs";
// export { donorDN } from "../OrganizationAndGroupSchema/donorDN.oa.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
// export { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_topDonorDN } from "../OrganizationAndGroupSchema/id-at-topDonorDN.va.mjs";
// export { id_at_topDonorDN } from "../OrganizationAndGroupSchema/id-at-topDonorDN.va.mjs";


/**
 * @summary topDonorDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * topDonorDN ATTRIBUTE ::= {
 *     SUBTYPE OF                  donorDN
 *     LDAP-SYNTAX                 dn.&id
 *     LDAP-NAME                   {"topDonorDN"}
 *     LDAP-DESC                   "DN of a top donor to this person or organization"
 *     ID                          id-at-topDonorDN
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const topDonorDN: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": donorDN /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "topDonorDN" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DN of a top donor to this person or organization" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_topDonorDN /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
