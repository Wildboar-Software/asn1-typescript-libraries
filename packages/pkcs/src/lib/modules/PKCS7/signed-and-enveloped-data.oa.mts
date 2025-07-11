/* eslint-disable */
import { id_signed_and_enveloped_data } from "../PKCS7/id-signed-and-enveloped-data.va.mjs";
import { type PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca.mjs";
import {
    SignedAndEnvelopedData,
    _decode_SignedAndEnvelopedData,
    _encode_SignedAndEnvelopedData,
} from "../PKCS7/SignedAndEnvelopedData.ta.mjs";

/**
 * @summary signed_and_enveloped_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signed-and-enveloped-data PKCS7-CONTENT-TYPE ::= {
 *     SignedAndEnvelopedData
 *     IDENTIFIED BY  id-signed-and-enveloped-data
 * }
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<SignedAndEnvelopedData>}
 * @implements {PKCS7_CONTENT_TYPE<SignedAndEnvelopedData>}
 */
export const signed_and_enveloped_data: PKCS7_CONTENT_TYPE<SignedAndEnvelopedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_SignedAndEnvelopedData,
    },
    encoderFor: {
        "&Type": _encode_SignedAndEnvelopedData,
    },
    "&id": id_signed_and_enveloped_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
