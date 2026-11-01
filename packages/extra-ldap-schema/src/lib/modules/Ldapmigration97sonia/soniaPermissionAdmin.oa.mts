/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_soniaPermissionAdmin } from "../Ldapmigration97sonia/id-at-soniaPermissionAdmin.va.mjs";


/**
 * @summary soniaPermissionAdmin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaPermissionAdmin ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"soniaPermissionAdmin"}
 *   LDAP-DESC                 "List of object DNs with admin permission"
 *   ID                        id-at-soniaPermissionAdmin }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const soniaPermissionAdmin: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaPermissionAdmin" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "List of object DNs with admin permission" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_soniaPermissionAdmin /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

