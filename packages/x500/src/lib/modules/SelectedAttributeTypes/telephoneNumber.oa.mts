/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_telephoneNumber } from "../SelectedAttributeTypes/id-at-telephoneNumber.va.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import { telephoneNumberMatch } from "../SelectedAttributeTypes/telephoneNumberMatch.oa.mjs";
import { telephoneNumberSubstringsMatch } from "../SelectedAttributeTypes/telephoneNumberSubstringsMatch.oa.mjs";
/**
 * @summary telephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelephoneNumber
 *   EQUALITY MATCHING RULE   telephoneNumberMatch
 *   SUBSTRINGS MATCHING RULE telephoneNumberSubstringsMatch
 *   LDAP-SYNTAX              printableString.&id
 *   LDAP-NAME                {"telephoneNumber"}
 *   ID                       id-at-telephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TelephoneNumber>}
 * @implements {ATTRIBUTE<TelephoneNumber>}
 */
export const telephoneNumber: ATTRIBUTE<TelephoneNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_TelephoneNumber,
    },
    "&equality-match": telephoneNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": telephoneNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["telephoneNumber"],
    "&id": id_at_telephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
