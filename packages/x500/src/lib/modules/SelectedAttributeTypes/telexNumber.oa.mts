/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_telexNumber } from "../SelectedAttributeTypes/id-at-telexNumber.va.mjs";
import { telexNr } from "../SelectedAttributeTypes/telexNr.oa.mjs";
import {
    TelexNumber,
    _decode_TelexNumber,
    _encode_TelexNumber,
} from "../SelectedAttributeTypes/TelexNumber.ta.mjs";
/**
 * @summary telexNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telexNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelexNumber
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"telexNumber"}
 *   ID                       id-at-telexNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TelexNumber>}
 * @implements {ATTRIBUTE<TelexNumber>}
 */
export const telexNumber: ATTRIBUTE<TelexNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelexNumber,
    },
    encoderFor: {
        "&Type": _encode_TelexNumber,
    },
    "&ldapSyntax": telexNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["telexNumber"],
    "&id": id_at_telexNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
