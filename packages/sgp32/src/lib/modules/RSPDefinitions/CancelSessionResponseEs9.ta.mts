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
import { CancelSessionOk, _decode_CancelSessionOk, _encode_CancelSessionOk } from "../RSPDefinitions/CancelSessionOk.ta.mjs";
// export { CancelSessionOk, _decode_CancelSessionOk, _encode_CancelSessionOk } from "../RSPDefinitions/CancelSessionOk.ta.mjs";
import { CancelSessionResponseEs9_cancelSessionError, CancelSessionResponseEs9_cancelSessionError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEs9_cancelSessionError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionResponseEs9_cancelSessionError, _encode_CancelSessionResponseEs9_cancelSessionError } from "../RSPDefinitions/CancelSessionResponseEs9-cancelSessionError.ta.mjs";
// export { CancelSessionResponseEs9_cancelSessionError, CancelSessionResponseEs9_cancelSessionError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEs9_cancelSessionError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, CancelSessionResponseEs9_cancelSessionError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_CancelSessionResponseEs9_cancelSessionError, _encode_CancelSessionResponseEs9_cancelSessionError } from "../RSPDefinitions/CancelSessionResponseEs9-cancelSessionError.ta.mjs";


/**
 * @summary CancelSessionResponseEs9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponseEs9  ::=  [65] CHOICE { -- Tag 'BF41'
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
type CancelSessionResponseEs9 =
    { cancelSessionOk: CancelSessionOk } /* CHOICE_ALT_ROOT */
    | { cancelSessionError: CancelSessionResponseEs9_cancelSessionError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelSessionResponseEs9: $.ASN1Decoder<CancelSessionResponseEs9> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponseEs9
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponseEs9 (el: _Element): CancelSessionResponseEs9 {
    if (!_cached_decoder_for_CancelSessionResponseEs9) { _cached_decoder_for_CancelSessionResponseEs9 = $._decode_explicit<CancelSessionResponseEs9>(() => $._decode_inextensible_choice<CancelSessionResponseEs9>({
    "CONTEXT 0": [ "cancelSessionOk", _decode_CancelSessionOk ],
    "CONTEXT 1": [ "cancelSessionError", _decode_CancelSessionResponseEs9_cancelSessionError ]
})); }
    return _cached_decoder_for_CancelSessionResponseEs9(el);
}

let _cached_encoder_for_CancelSessionResponseEs9: $.ASN1Encoder<CancelSessionResponseEs9> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponseEs9 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponseEs9, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponseEs9 (value: CancelSessionResponseEs9, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponseEs9) { _cached_encoder_for_CancelSessionResponseEs9 = $._encode_explicit(_TagClass.context, 65, () => $._encode_choice<CancelSessionResponseEs9>({
    "cancelSessionOk": _encode_CancelSessionOk,
    "cancelSessionError": _encode_CancelSessionResponseEs9_cancelSessionError,
}, $.BER), $.BER); }
    return _cached_encoder_for_CancelSessionResponseEs9(value, elGetter);
}


/* eslint-enable */
