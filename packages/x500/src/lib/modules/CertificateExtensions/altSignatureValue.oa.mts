/* eslint-disable */
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import {
    AltSignatureValue,
    _decode_AltSignatureValue,
    _encode_AltSignatureValue,
} from "../CertificateExtensions/AltSignatureValue.ta.mjs";
import { id_ce_altSignatureValue } from "../CertificateExtensions/id-ce-altSignatureValue.va.mjs";
/**
 * @summary altSignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * altSignatureValue EXTENSION ::= {
 *   SYNTAX           AltSignatureValue
 *   IDENTIFIED BY    id-ce-altSignatureValue }
 * ```
 *
 * @constant
 * @type {EXTENSION<AltSignatureValue>}
 * @implements {EXTENSION<AltSignatureValue>}
 */
export const altSignatureValue: EXTENSION<AltSignatureValue> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AltSignatureValue,
    },
    encoderFor: {
        "&ExtnType": _encode_AltSignatureValue,
    },
    "&id": id_ce_altSignatureValue /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
