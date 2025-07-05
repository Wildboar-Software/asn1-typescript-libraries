/* eslint-disable */
import {
    EnvelopedData,
    _decode_EnvelopedData,
    _encode_EnvelopedData,
} from "../PKCS7/EnvelopedData.ta.mjs";
import { id_enveloped_data } from "../PKCS7/id-enveloped-data.va.mjs";
import { type PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca.mjs";

/**
 * @summary enveloped_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * enveloped-data PKCS7-CONTENT-TYPE ::= {
 *     EnvelopedData
 *     IDENTIFIED BY  id-enveloped-data
 * }
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<EnvelopedData>}
 * @implements {PKCS7_CONTENT_TYPE<EnvelopedData>}
 */
export const enveloped_data: PKCS7_CONTENT_TYPE<EnvelopedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_EnvelopedData,
    },
    encoderFor: {
        "&Type": _encode_EnvelopedData,
    },
    "&id": id_enveloped_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
