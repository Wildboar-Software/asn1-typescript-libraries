/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_nsYIMStatusText } from "../LdapPresence/id-at-nsYIMStatusText.va.mjs";


/**
 * @summary nsYIMStatusText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsYIMStatusText ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   SINGLE VALUE              TRUE
 *   NO USER MODIFICATION      TRUE
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"nsYIMStatusText"}
 *   LDAP-DESC                 "Netscape defined attribute type"
 *   ID                        id-at-nsYIMStatusText }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const nsYIMStatusText: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsYIMStatusText" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_nsYIMStatusText /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

