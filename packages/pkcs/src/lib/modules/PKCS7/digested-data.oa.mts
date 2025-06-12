/* eslint-disable */
import {
    DigestedData,
    _decode_DigestedData,
    _encode_DigestedData,
} from "../PKCS7/DigestedData.ta.mjs";
import { id_digested_data } from "../PKCS7/id-digested-data.va.mjs";
import { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca.mjs";
export {
    DigestedData,
    _decode_DigestedData,
    _encode_DigestedData,
} from "../PKCS7/DigestedData.ta.mjs";
export { id_digested_data } from "../PKCS7/id-digested-data.va.mjs";
export { PKCS7_CONTENT_TYPE } from "../PKCS7/PKCS7-CONTENT-TYPE.oca.mjs";

/* START_OF_SYMBOL_DEFINITION digested_data */
/**
 * @summary digested_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * digested-data PKCS7-CONTENT-TYPE ::= {
 *     DigestedData
 *     IDENTIFIED BY  id-digested-data
 * }
 * ```
 *
 * @constant
 * @type {PKCS7_CONTENT_TYPE<DigestedData>}
 * @implements {PKCS7_CONTENT_TYPE<DigestedData>}
 */
export const digested_data: PKCS7_CONTENT_TYPE<DigestedData> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_DigestedData,
    },
    encoderFor: {
        "&Type": _encode_DigestedData,
    },
    "&id": id_digested_data /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION digested_data */

/* eslint-enable */
