/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { memberNoun } from "../OrganizationAndGroupSchema/memberNoun.oa.mjs";
// export { memberNoun } from "../OrganizationAndGroupSchema/memberNoun.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_memberSlangNoun } from "../OrganizationAndGroupSchema/id-at-memberSlangNoun.va.mjs";
// export { id_at_memberSlangNoun } from "../OrganizationAndGroupSchema/id-at-memberSlangNoun.va.mjs";


/**
 * @summary memberSlangNoun
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberSlangNoun ATTRIBUTE ::= {
 *     SUBTYPE OF                  memberNoun
 *     LDAP-SYNTAX                    directoryString.&id
 *     LDAP-NAME                    {"memberSlangNoun"}
 *     LDAP-DESC                    "A slang term used for members of this group, such as 'Goobs'"
 *     ID                            id-at-memberSlangNoun
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const memberSlangNoun: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": memberNoun /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "memberSlangNoun" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A slang term used for members of this group, such as 'Goobs'" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_memberSlangNoun /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
