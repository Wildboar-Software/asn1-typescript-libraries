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
import { CancelSessionOk, _decode_CancelSessionOk, _encode_CancelSessionOk } from "../SGP32Definitions/CancelSessionOk.ta.mjs";
// export { CancelSessionOk, _decode_CancelSessionOk, _encode_CancelSessionOk } from "../SGP32Definitions/CancelSessionOk.ta.mjs";
import { CancelSessionResponseEsipa_cancelSessionError, CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEsipa_cancelSessionError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionResponseEsipa_cancelSessionError, _encode_CancelSessionResponseEsipa_cancelSessionError } from "../SGP32Definitions/CancelSessionResponseEsipa-cancelSessionError.ta.mjs";
// export { CancelSessionResponseEsipa_cancelSessionError, CancelSessionResponseEsipa_cancelSessionError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEsipa_cancelSessionError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEsipa_cancelSessionError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionResponseEsipa_cancelSessionError, _encode_CancelSessionResponseEsipa_cancelSessionError } from "../SGP32Definitions/CancelSessionResponseEsipa-cancelSessionError.ta.mjs";


/**
 * @summary CancelSessionResponseEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponseEsipa  ::=  [65] CHOICE { -- Tag 'BF41'
 *     cancelSessionOk CancelSessionOk,
 *     cancelSessionError INTEGER {
 *         invalidTransactionId(1),
 *         euiccSignatureInvalid(2),
 *         undefinedError(127) 
 *     }
 * }
 * ```
 */
export
type CancelSessionResponseEsipa =
    { cancelSessionOk: CancelSessionOk } /* CHOICE_ALT_ROOT */
    | { cancelSessionError: CancelSessionResponseEsipa_cancelSessionError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelSessionResponseEsipa: $.ASN1Decoder<CancelSessionResponseEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponseEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponseEsipa (el: _Element): CancelSessionResponseEsipa {
    if (!_cached_decoder_for_CancelSessionResponseEsipa) { _cached_decoder_for_CancelSessionResponseEsipa = $._decode_explicit<CancelSessionResponseEsipa>(() => $._decode_inextensible_choice<CancelSessionResponseEsipa>({
    "CONTEXT 0": [ "cancelSessionOk", _decode_CancelSessionOk ],
    "CONTEXT 1": [ "cancelSessionError", _decode_CancelSessionResponseEsipa_cancelSessionError ]
})); }
    return _cached_decoder_for_CancelSessionResponseEsipa(el);
}

let _cached_encoder_for_CancelSessionResponseEsipa: $.ASN1Encoder<CancelSessionResponseEsipa> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponseEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponseEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponseEsipa (value: CancelSessionResponseEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponseEsipa) { _cached_encoder_for_CancelSessionResponseEsipa = $._encode_explicit(_TagClass.context, 65, () => $._encode_choice<CancelSessionResponseEsipa>({
    "cancelSessionOk": _encode_CancelSessionOk,
    "cancelSessionError": _encode_CancelSessionResponseEsipa_cancelSessionError,
}, $.BER), $.BER); }
    return _cached_encoder_for_CancelSessionResponseEsipa(value, elGetter);
}


/* eslint-enable */
