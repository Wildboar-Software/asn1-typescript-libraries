/* eslint-disable */
import {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from "../PKCS7/EncryptedData.ta.mjs";
import { id_encrypted_data } from "../PKCS7/id-encrypted-data.va.mjs";
import { type PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca.mjs";

/**
 * @summary encrypted_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * encrypted-data PKCS7-CONTENT-TYPE ::= {
 *     EncryptedData
 *     IDENTIFIED BY  id-encrypted-data
 * }
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<EncryptedData>}
 * @implements {PKCS7_CONTENT_TYPE<EncryptedData>}
 */
export const encrypted_data: PKCS7_CONTENT_TYPE<EncryptedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_EncryptedData,
    },
    encoderFor: {
        "&Type": _encode_EncryptedData,
    },
    "&id": id_encrypted_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
