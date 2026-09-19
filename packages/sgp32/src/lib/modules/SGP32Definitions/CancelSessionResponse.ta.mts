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
import { CancelSessionResponseOk, _decode_CancelSessionResponseOk, _encode_CancelSessionResponseOk } from "../RSPDefinitions/CancelSessionResponseOk.ta.mjs";
// export { CancelSessionResponseOk, _decode_CancelSessionResponseOk, _encode_CancelSessionResponseOk } from "../RSPDefinitions/CancelSessionResponseOk.ta.mjs";
import { CancelSessionResponse_cancelSessionResponseError, CancelSessionResponse_cancelSessionResponseError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponse_cancelSessionResponseError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionResponse_cancelSessionResponseError, _encode_CancelSessionResponse_cancelSessionResponseError } from "../SGP32Definitions/CancelSessionResponse-cancelSessionResponseError.ta.mjs";
// export { CancelSessionResponse_cancelSessionResponseError, CancelSessionResponse_cancelSessionResponseError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponse_cancelSessionResponseError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionResponse_cancelSessionResponseError, _encode_CancelSessionResponse_cancelSessionResponseError } from "../SGP32Definitions/CancelSessionResponse-cancelSessionResponseError.ta.mjs";
import { CompactCancelSessionResponseOk, _decode_CompactCancelSessionResponseOk, _encode_CompactCancelSessionResponseOk } from "../SGP32Definitions/CompactCancelSessionResponseOk.ta.mjs";
// export { CompactCancelSessionResponseOk, _decode_CompactCancelSessionResponseOk, _encode_CompactCancelSessionResponseOk } from "../SGP32Definitions/CompactCancelSessionResponseOk.ta.mjs";


/**
 * @summary CancelSessionResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponse  ::=  [65] CHOICE { -- Tag 'BF41'
 *     cancelSessionResponseOk CancelSessionResponseOk,
 *     cancelSessionResponseError INTEGER {invalidTransactionId(5), undefinedError(127)},
 *     compactCancelSessionResponseOk CompactCancelSessionResponseOk
 * }
 * ```
 */
export
type CancelSessionResponse =
    { cancelSessionResponseOk: CancelSessionResponseOk } /* CHOICE_ALT_ROOT */
    | { cancelSessionResponseError: CancelSessionResponse_cancelSessionResponseError } /* CHOICE_ALT_ROOT */
    | { compactCancelSessionResponseOk: CompactCancelSessionResponseOk } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelSessionResponse: $.ASN1Decoder<CancelSessionResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponse (el: _Element): CancelSessionResponse {
    if (!_cached_decoder_for_CancelSessionResponse) { _cached_decoder_for_CancelSessionResponse = $._decode_explicit<CancelSessionResponse>(() => $._decode_inextensible_choice<CancelSessionResponse>({
    "CONTEXT 0": [ "cancelSessionResponseOk", _decode_CancelSessionResponseOk ],
    "CONTEXT 1": [ "cancelSessionResponseError", _decode_CancelSessionResponse_cancelSessionResponseError ],
    "CONTEXT 2": [ "compactCancelSessionResponseOk", _decode_CompactCancelSessionResponseOk ]
})); }
    return _cached_decoder_for_CancelSessionResponse(el);
}

let _cached_encoder_for_CancelSessionResponse: $.ASN1Encoder<CancelSessionResponse> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponse, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponse (value: CancelSessionResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponse) { _cached_encoder_for_CancelSessionResponse = $._encode_explicit(_TagClass.context, 65, () => $._encode_choice<CancelSessionResponse>({
    "cancelSessionResponseOk": _encode_CancelSessionResponseOk,
    "cancelSessionResponseError": _encode_CancelSessionResponse_cancelSessionResponseError,
    "compactCancelSessionResponseOk": _encode_CompactCancelSessionResponseOk,
}, $.BER), $.BER); }
    return _cached_encoder_for_CancelSessionResponse(value, elGetter);
}


/* eslint-enable */
