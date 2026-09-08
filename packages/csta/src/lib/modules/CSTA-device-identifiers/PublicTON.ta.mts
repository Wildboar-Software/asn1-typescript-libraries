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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary PublicTON
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicTON  ::=  CHOICE
 * {    unknown                 [ 0] IMPLICIT     IA5String,
 *     international                 [ 1] IMPLICIT     IA5String,
 *     national                 [ 2] IMPLICIT     IA5String,
 *     networkspecific             [ 3] IMPLICIT     IA5String,
 *     subscriber                 [ 4] IMPLICIT     IA5String,
 *     abbreviated                 [ 5] IMPLICIT     IA5String }
 * ```
 */
export
type PublicTON =
    { unknown: IA5String } /* CHOICE_ALT_ROOT */
    | { international: IA5String } /* CHOICE_ALT_ROOT */
    | { national: IA5String } /* CHOICE_ALT_ROOT */
    | { networkspecific: IA5String } /* CHOICE_ALT_ROOT */
    | { subscriber: IA5String } /* CHOICE_ALT_ROOT */
    | { abbreviated: IA5String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PublicTON: $.ASN1Decoder<PublicTON> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicTON
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicTON (el: _Element): PublicTON {
    if (!_cached_decoder_for_PublicTON) { _cached_decoder_for_PublicTON = $._decode_inextensible_choice<PublicTON>({
    "CONTEXT 0": [ "unknown", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 1": [ "international", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 2": [ "national", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 3": [ "networkspecific", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 4": [ "subscriber", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 5": [ "abbreviated", $._decode_implicit<IA5String>(() => $._decodeIA5String) ]
}); }
    return _cached_decoder_for_PublicTON(el);
}

let _cached_encoder_for_PublicTON: $.ASN1Encoder<PublicTON> | null = null;

/**
 * @summary Encodes a(n) PublicTON into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicTON, encoded as an ASN.1 Element.
 */
export
function _encode_PublicTON (value: PublicTON, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicTON) { _cached_encoder_for_PublicTON = $._encode_choice<PublicTON>({
    "unknown": $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER),
    "international": $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER),
    "national": $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER),
    "networkspecific": $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER),
    "subscriber": $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER),
    "abbreviated": $._encode_implicit(_TagClass.context, 5, () => $._encodeIA5String, $.BER),
}, $.BER); }
    return _cached_encoder_for_PublicTON(value, elGetter);
}


/* eslint-enable */
