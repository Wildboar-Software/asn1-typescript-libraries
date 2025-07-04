/* eslint-disable */
import { type CONTENT_TYPE } from "../CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";
import {
    DigestedData,
    _decode_DigestedData,
    _encode_DigestedData,
} from "../CryptographicMessageSyntax-2010/DigestedData.ta.mjs";
import { id_digestedData } from "../CryptographicMessageSyntax-2010/id-digestedData.va.mjs";

/**
 * @summary ct_DigestedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-DigestedData CONTENT-TYPE ::= { TYPE DigestedData IDENTIFIED BY id-digestedData}
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<DigestedData>}
 * @implements {CONTENT_TYPE<DigestedData>}
 */
export const ct_DigestedData: CONTENT_TYPE<DigestedData> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_DigestedData,
    },
    encoderFor: {
        "&Type": _encode_DigestedData,
    },
    "&id": id_digestedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
