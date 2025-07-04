/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_x121Address } from "../SelectedAttributeTypes/id-at-x121Address.va.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
import { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa.mjs";
import {
    X121Address,
    _decode_X121Address,
    _encode_X121Address,
} from "../SelectedAttributeTypes/X121Address.ta.mjs";
/**
 * @summary x121Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * x121Address ATTRIBUTE ::= {
 *   WITH SYNTAX              X121Address
 *   EQUALITY MATCHING RULE   numericStringMatch
 *   SUBSTRINGS MATCHING RULE numericStringSubstringsMatch
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"x121Address"}
 *   ID                       id-at-x121Address }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<X121Address>}
 * @implements {ATTRIBUTE<X121Address>}
 */
export const x121Address: ATTRIBUTE<X121Address> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_X121Address,
    },
    encoderFor: {
        "&Type": _encode_X121Address,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["x121Address"],
    "&id": id_at_x121Address /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
