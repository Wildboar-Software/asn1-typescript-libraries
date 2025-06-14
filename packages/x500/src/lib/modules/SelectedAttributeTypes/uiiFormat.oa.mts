/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_uiiFormat } from "../SelectedAttributeTypes/id-at-uiiFormat.va.mjs";
import { uiiForm } from "../SelectedAttributeTypes/uiiForm.oa.mjs";
import {
    UiiFormat,
    _decode_UiiFormat,
    _encode_UiiFormat,
} from "../SelectedAttributeTypes/UiiFormat.ta.mjs";
/* START_OF_SYMBOL_DEFINITION uiiFormat */
/**
 * @summary uiiFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * uiiFormat ATTRIBUTE ::= {
 *   WITH SYNTAX              UiiFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              uiiForm.&id
 *   LDAP-NAME                {"uiiFormat"}
 *   ID                       id-at-uiiFormat }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<UiiFormat>}
 * @implements {ATTRIBUTE<UiiFormat>}
 */
export const uiiFormat: ATTRIBUTE<UiiFormat> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UiiFormat,
    },
    encoderFor: {
        "&Type": _encode_UiiFormat,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": uiiForm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uiiFormat"],
    "&id": id_at_uiiFormat /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION uiiFormat */

/* eslint-enable */
