/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_not_pwdResponse } from "../SelectedAttributeTypes/id-not-pwdResponse.va.mjs";
import {
    PwdResponse,
    _decode_PwdResponse,
    _encode_PwdResponse,
} from "../SelectedAttributeTypes/PwdResponse.ta.mjs";
/**
 * @summary pwdResponseValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdResponseValue ATTRIBUTE ::= {
 *   WITH SYNTAX              PwdResponse
 *   ID                       id-not-pwdResponse }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PwdResponse>}
 * @implements {ATTRIBUTE<PwdResponse>}
 */
export const pwdResponseValue: ATTRIBUTE<PwdResponse> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PwdResponse,
    },
    encoderFor: {
        "&Type": _encode_PwdResponse,
    },
    "&id": id_not_pwdResponse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
