/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_msDS_MembersForAzRoleBL } from "../MSUser/id-at-msDS-MembersForAzRoleBL.va.mjs";


/**
 * @summary msDS_MembersForAzRoleBL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msDS-MembersForAzRoleBL ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   NO USER MODIFICATION      TRUE
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"msDS-MembersForAzRoleBL"}
 *   ID                        id-at-msDS-MembersForAzRoleBL }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const msDS_MembersForAzRoleBL: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "msDS-MembersForAzRoleBL" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_msDS_MembersForAzRoleBL /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

