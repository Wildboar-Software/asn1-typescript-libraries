/* eslint-disable */
import { id_signcryptedData } from "../CMSSigncryption/id-signcryptedData.va.mjs";
import {
    SigncryptedData,
    _decode_SigncryptedData,
    _encode_SigncryptedData,
} from "../CMSSigncryption/SigncryptedData.ta.mjs";
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";

/**
 * @summary ct_SigncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-SigncryptedData    CONTENT-TYPE ::= {
 * TYPE SigncryptedData IDENTIFIED BY id-signcryptedData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<SigncryptedData>}
 * @implements {CONTENT_TYPE<SigncryptedData>}
 */
export const ct_SigncryptedData: CONTENT_TYPE<SigncryptedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_SigncryptedData,
    },
    encoderFor: {
        "&Type": _encode_SigncryptedData,
    },
    "&id": id_signcryptedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
