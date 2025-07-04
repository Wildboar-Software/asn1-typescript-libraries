/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_uri } from "../SelectedAttributeTypes/id-at-uri.va.mjs";
import {
    URI,
    _decode_URI,
    _encode_URI,
} from "../SelectedAttributeTypes/URI.ta.mjs";
import { uriMatch } from "../SelectedAttributeTypes/uriMatch.oa.mjs";
/**
 * @summary uri
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uri ATTRIBUTE ::= {
 *   WITH SYNTAX              URI
 *   EQUALITY MATCHING RULE   uriMatch
 *   LDAP-SYNTAX              directoryString.&id
 *   LDAP-NAME                {"uri"}
 *   ID                       id-at-uri }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<URI>}
 * @implements {ATTRIBUTE<URI>}
 */
export const uri: ATTRIBUTE<URI> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_URI,
    },
    encoderFor: {
        "&Type": _encode_URI,
    },
    "&equality-match": uriMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uri"],
    "&id": id_at_uri /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
