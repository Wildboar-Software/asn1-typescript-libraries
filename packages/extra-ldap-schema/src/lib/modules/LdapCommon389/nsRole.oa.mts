/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { dn } from "../SelectedAttributeTypes/dn.oa.mjs";
import { id_at_nsRole } from "../LdapCommon389/id-at-nsRole.va.mjs";


/**
 * @summary nsRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsRole ATTRIBUTE ::= {
 *   WITH SYNTAX               DistinguishedName
 *   NO USER MODIFICATION      TRUE
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               dn.&id
 *   LDAP-NAME                 {"nsRole"}
 *   LDAP-DESC                 "Netscape defined attribute type"
 *   ID                        id-at-nsRole }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DistinguishedName>}
 * @implements {ATTRIBUTE<DistinguishedName>}
 */
export
const nsRole: ATTRIBUTE<DistinguishedName> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
    },
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": dn["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsRole" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_nsRole /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

