/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_sambaTrustAuthOutgoing } from "../LdapSchema2ldifSamba/id-at-sambaTrustAuthOutgoing.va.mjs";


/**
 * @summary sambaTrustAuthOutgoing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaTrustAuthOutgoing ATTRIBUTE ::= {
 *   WITH SYNTAX               DirectoryString{1050}
 *   EQUALITY MATCHING RULE    caseExactMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"sambaTrustAuthOutgoing"}
 *   LDAP-DESC                 "Authentication information for the outgoing portion of a trust"
 *   ID                        id-at-sambaTrustAuthOutgoing }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DirectoryString>}
 * @implements {ATTRIBUTE<DirectoryString>}
 */
const _decode_sambaTrustAuthOutgoing_Type = (el: _Element): DirectoryString => {
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
    if (length < 1 || length > 1050) {
        throw new ASN1SizeError("sambaTrustAuthOutgoing violates SIZE constraint");
    }
    return value;
};

export
const sambaTrustAuthOutgoing: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_sambaTrustAuthOutgoing_Type,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaTrustAuthOutgoing" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Authentication information for the outgoing portion of a trust" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_sambaTrustAuthOutgoing /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

