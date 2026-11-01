/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraAutoProvAttrMap } from "../LdapZimbra/id-at-zimbraAutoProvAttrMap.va.mjs";


/**
 * @summary zimbraAutoProvAttrMap
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoProvAttrMap ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{256}
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraAutoProvAttrMap"}
 *   LDAP-DESC                 "EAGER mode: optional LAZY mode: optional MANUAL mode: optional Attribute map for mapping attribute values from the external entry to Zimbra account attributes. Values are in the format of {external attribute}={zimbra attribute}. If not set, no attributes from the external directory will be populated in Zimbra directory. Invalid mapping configuration will cause the account creation to fail. Examples of bad mapping: - invalid external attribute name. - invalid Zimbra attribute name. - external attribute has multiple values but the zimbra attribute is single-valued. - syntax violation. e.g. Value on the external attribute is a String but the Zimbra attribute is declared an integer."
 *   ID                        id-at-zimbraAutoProvAttrMap }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_zimbraAutoProvAttrMap_Type = (el: _Element): DirectoryString => {
    const value = _decode_DirectoryString(el);
    let length: number;
    if ("teletexString" in value) {
        length = value.teletexString.length;
    } else if ("printableString" in value) {
        length = value.printableString.length;
    } else if ("bmpString" in value) {
        length = value.bmpString.length;
    } else if ("universalString" in value) {
        length = value.universalString.length;
    } else {
        length = value.uTF8String.length;
    }
    if (length < 1 || length > 256) {
        throw new ASN1SizeError("zimbraAutoProvAttrMap violates SIZE constraint");
    }
    return value;
};

export
const zimbraAutoProvAttrMap: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraAutoProvAttrMap_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAutoProvAttrMap" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "EAGER mode: optional LAZY mode: optional MANUAL mode: optional Attribute map for mapping attribute values from the external entry to Zimbra account attributes. Values are in the format of {external attribute}={zimbra attribute}. If not set, no attributes from the external directory will be populated in Zimbra directory. Invalid mapping configuration will cause the account creation to fail. Examples of bad mapping: - invalid external attribute name. - invalid Zimbra attribute name. - external attribute has multiple values but the zimbra attribute is single-valued. - syntax violation. e.g. Value on the external attribute is a String but the Zimbra attribute is declared an integer." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoProvAttrMap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

