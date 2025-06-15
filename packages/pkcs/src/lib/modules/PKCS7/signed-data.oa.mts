/* eslint-disable */
import { id_signed_data } from "../PKCS7/id-signed-data.va.mjs";
import { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca.mjs";
import {
    SignedData,
    _decode_SignedData,
    _encode_SignedData,
} from "../PKCS7/SignedData.ta.mjs";

/**
 * @summary signed_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * signed-data PKCS7-CONTENT-TYPE ::= {SignedData
 *                                     IDENTIFIED BY  id-signed-data
 * }
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<SignedData>}
 * @implements {PKCS7_CONTENT_TYPE<SignedData>}
 */
export const signed_data: PKCS7_CONTENT_TYPE<SignedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_SignedData,
    },
    encoderFor: {
        "&Type": _encode_SignedData,
    },
    "&id": id_signed_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
