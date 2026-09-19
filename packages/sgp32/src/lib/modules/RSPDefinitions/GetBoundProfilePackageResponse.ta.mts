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
import { GetBoundProfilePackageOk, _decode_GetBoundProfilePackageOk, _encode_GetBoundProfilePackageOk } from "../RSPDefinitions/GetBoundProfilePackageOk.ta.mjs";
// export { GetBoundProfilePackageOk, _decode_GetBoundProfilePackageOk, _encode_GetBoundProfilePackageOk } from "../RSPDefinitions/GetBoundProfilePackageOk.ta.mjs";
import { GetBoundProfilePackageResponse_getBoundProfilePackageError, GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeMissing /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeRefused /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeRetriesExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused /* IMPORTED_LONG_NAMED_INTEGER */, bppRebindingRefused /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated /* IMPORTED_LONG_NAMED_INTEGER */, deprecated /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetBoundProfilePackageResponse_getBoundProfilePackageError, _encode_GetBoundProfilePackageResponse_getBoundProfilePackageError } from "../RSPDefinitions/GetBoundProfilePackageResponse-getBoundProfilePackageError.ta.mjs";
// export { GetBoundProfilePackageResponse_getBoundProfilePackageError, GetBoundProfilePackageResponse_getBoundProfilePackageError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeMissing /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeMissing /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRefused /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeRefused /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_confirmationCodeRetriesExceeded /* IMPORTED_LONG_NAMED_INTEGER */, confirmationCodeRetriesExceeded /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_bppRebindingRefused /* IMPORTED_LONG_NAMED_INTEGER */, bppRebindingRefused /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_deprecated /* IMPORTED_LONG_NAMED_INTEGER */, deprecated /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, GetBoundProfilePackageResponse_getBoundProfilePackageError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_GetBoundProfilePackageResponse_getBoundProfilePackageError, _encode_GetBoundProfilePackageResponse_getBoundProfilePackageError } from "../RSPDefinitions/GetBoundProfilePackageResponse-getBoundProfilePackageError.ta.mjs";


/**
 * @summary GetBoundProfilePackageResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetBoundProfilePackageResponse  ::=  [58] CHOICE {  -- Tag 'BF3A'
 *     getBoundProfilePackageOk GetBoundProfilePackageOk,
 *     getBoundProfilePackageError INTEGER {
 *         euiccSignatureInvalid(1),
 *         confirmationCodeMissing(2),
 *         confirmationCodeRefused(3),
 *         confirmationCodeRetriesExceeded(4),
 *         bppRebindingRefused(5),
 *         deprecated(6), -- this value is no longer used.
 *         invalidTransactionId(95),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type GetBoundProfilePackageResponse =
    { getBoundProfilePackageOk: GetBoundProfilePackageOk } /* CHOICE_ALT_ROOT */
    | { getBoundProfilePackageError: GetBoundProfilePackageResponse_getBoundProfilePackageError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GetBoundProfilePackageResponse: $.ASN1Decoder<GetBoundProfilePackageResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetBoundProfilePackageResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetBoundProfilePackageResponse (el: _Element): GetBoundProfilePackageResponse {
    if (!_cached_decoder_for_GetBoundProfilePackageResponse) { _cached_decoder_for_GetBoundProfilePackageResponse = $._decode_explicit<GetBoundProfilePackageResponse>(() => $._decode_inextensible_choice<GetBoundProfilePackageResponse>({
    "CONTEXT 0": [ "getBoundProfilePackageOk", _decode_GetBoundProfilePackageOk ],
    "CONTEXT 1": [ "getBoundProfilePackageError", _decode_GetBoundProfilePackageResponse_getBoundProfilePackageError ]
})); }
    return _cached_decoder_for_GetBoundProfilePackageResponse(el);
}

let _cached_encoder_for_GetBoundProfilePackageResponse: $.ASN1Encoder<GetBoundProfilePackageResponse> | null = null;

/**
 * @summary Encodes a(n) GetBoundProfilePackageResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetBoundProfilePackageResponse, encoded as an ASN.1 Element.
 */
export
function _encode_GetBoundProfilePackageResponse (value: GetBoundProfilePackageResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetBoundProfilePackageResponse) { _cached_encoder_for_GetBoundProfilePackageResponse = $._encode_explicit(_TagClass.context, 58, () => $._encode_choice<GetBoundProfilePackageResponse>({
    "getBoundProfilePackageOk": _encode_GetBoundProfilePackageOk,
    "getBoundProfilePackageError": _encode_GetBoundProfilePackageResponse_getBoundProfilePackageError,
}, $.BER), $.BER); }
    return _cached_encoder_for_GetBoundProfilePackageResponse(value, elGetter);
}


/* eslint-enable */
