/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IpaEuiccData, _decode_IpaEuiccData, _encode_IpaEuiccData } from "../SGP32Definitions/IpaEuiccData.ta.mjs";
// export { IpaEuiccData, _decode_IpaEuiccData, _encode_IpaEuiccData } from "../SGP32Definitions/IpaEuiccData.ta.mjs";
import { IpaEuiccDataResponseError, _decode_IpaEuiccDataResponseError, _encode_IpaEuiccDataResponseError } from "../SGP32Definitions/IpaEuiccDataResponseError.ta.mjs";
// export { IpaEuiccDataResponseError, _decode_IpaEuiccDataResponseError, _encode_IpaEuiccDataResponseError } from "../SGP32Definitions/IpaEuiccDataResponseError.ta.mjs";


/**
 * @summary IpaEuiccDataResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataResponse  ::=  [82] CHOICE { -- Tag 'BF52'
 *     ipaEuiccData IpaEuiccData,
 *     ipaEuiccDataResponseError IpaEuiccDataResponseError
 * }
 * ```
 */
export
type IpaEuiccDataResponse =
    { ipaEuiccData: IpaEuiccData } /* CHOICE_ALT_ROOT */
    | { ipaEuiccDataResponseError: IpaEuiccDataResponseError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IpaEuiccDataResponse: $.ASN1Decoder<IpaEuiccDataResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataResponse (el: _Element): IpaEuiccDataResponse {
    if (!_cached_decoder_for_IpaEuiccDataResponse) { _cached_decoder_for_IpaEuiccDataResponse = $._decode_explicit<IpaEuiccDataResponse>(() => $._decode_inextensible_choice<IpaEuiccDataResponse>({
    "CONTEXT 0": [ "ipaEuiccData", _decode_IpaEuiccData ],
    "CONTEXT 1": [ "ipaEuiccDataResponseError", _decode_IpaEuiccDataResponseError ]
})); }
    return _cached_decoder_for_IpaEuiccDataResponse(el);
}

let _cached_encoder_for_IpaEuiccDataResponse: $.ASN1Encoder<IpaEuiccDataResponse> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataResponse, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataResponse (value: IpaEuiccDataResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataResponse) { _cached_encoder_for_IpaEuiccDataResponse = $._encode_explicit(_TagClass.context, 82, () => $._encode_choice<IpaEuiccDataResponse>({
    "ipaEuiccData": _encode_IpaEuiccData,
    "ipaEuiccDataResponseError": _encode_IpaEuiccDataResponseError,
}, $.BER), $.BER); }
    return _cached_encoder_for_IpaEuiccDataResponse(value, elGetter);
}


/* eslint-enable */
