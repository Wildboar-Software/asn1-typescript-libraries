/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_intEmail } from "../SelectedAttributeTypes/id-at-intEmail.va.mjs";
import {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta.mjs";
import { intEmailMatch } from "../SelectedAttributeTypes/intEmailMatch.oa.mjs";
import { intEmailString } from "../SelectedAttributeTypes/intEmailString.oa.mjs";
/**
 * @summary intEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmail ATTRIBUTE ::= {
 *   WITH SYNTAX             IntEmail
 *   EQUALITY MATCHING RULE  intEmailMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             intEmailString.&id
 *   LDAP-NAME               {"Internationalized Email"}
 *   ID                      id-at-intEmail }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<IntEmail>}
 * @implements {ATTRIBUTE<IntEmail>}
 */
export const intEmail: ATTRIBUTE<IntEmail> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_IntEmail,
    },
    encoderFor: {
        "&Type": _encode_IntEmail,
    },
    "&equality-match": intEmailMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": intEmailString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["Internationalized Email"],
    "&id": id_at_intEmail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
