/* eslint-disable */
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";
import { id_signedData } from "../CryptographicMessageSyntax-2010/id-signedData.va.mjs";
import {
    SignedData,
    _decode_SignedData,
    _encode_SignedData,
} from "../CryptographicMessageSyntax-2010/SignedData.ta.mjs";

/**
 * @summary ct_SignedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-SignedData CONTENT-TYPE ::= { TYPE SignedData IDENTIFIED BY id-signedData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<SignedData>}
 * @implements {CONTENT_TYPE<SignedData>}
 */
export const ct_SignedData: CONTENT_TYPE<SignedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_SignedData,
    },
    encoderFor: {
        "&Type": _encode_SignedData,
    },
    "&id": id_signedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
