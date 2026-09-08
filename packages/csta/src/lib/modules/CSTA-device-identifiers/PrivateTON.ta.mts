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
 * @summary PrivateTON
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateTON  ::=  CHOICE
 * {    unknown                 [ 0] IMPLICIT     IA5String,
 *     level3RegionalNumber             [ 1] IMPLICIT     IA5String,
 *     level2RegionalNumber             [ 2] IMPLICIT     IA5String,
 *     level1RegionalNumber             [ 3] IMPLICIT     IA5String,
 *     pTNSpecificNumber             [ 4] IMPLICIT     IA5String,
 *     localNumber                 [ 5] IMPLICIT     IA5String,
 *     abbreviated                 [ 6] IMPLICIT     IA5String }
 * ```
 */
export
type PrivateTON =
    { unknown: IA5String } /* CHOICE_ALT_ROOT */
    | { level3RegionalNumber: IA5String } /* CHOICE_ALT_ROOT */
    | { level2RegionalNumber: IA5String } /* CHOICE_ALT_ROOT */
    | { level1RegionalNumber: IA5String } /* CHOICE_ALT_ROOT */
    | { pTNSpecificNumber: IA5String } /* CHOICE_ALT_ROOT */
    | { localNumber: IA5String } /* CHOICE_ALT_ROOT */
    | { abbreviated: IA5String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PrivateTON: $.ASN1Decoder<PrivateTON> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateTON
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateTON (el: _Element): PrivateTON {
    if (!_cached_decoder_for_PrivateTON) { _cached_decoder_for_PrivateTON = $._decode_inextensible_choice<PrivateTON>({
    "CONTEXT 0": [ "unknown", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 1": [ "level3RegionalNumber", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 2": [ "level2RegionalNumber", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 3": [ "level1RegionalNumber", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 4": [ "pTNSpecificNumber", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 5": [ "localNumber", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 6": [ "abbreviated", $._decode_implicit<IA5String>(() => $._decodeIA5String) ]
}); }
    return _cached_decoder_for_PrivateTON(el);
}

let _cached_encoder_for_PrivateTON: $.ASN1Encoder<PrivateTON> | null = null;

/**
 * @summary Encodes a(n) PrivateTON into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateTON, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateTON (value: PrivateTON, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateTON) { _cached_encoder_for_PrivateTON = $._encode_choice<PrivateTON>({
    "unknown": $._encode_implicit(_TagClass.context, 0, () => $._encodeIA5String, $.BER),
    "level3RegionalNumber": $._encode_implicit(_TagClass.context, 1, () => $._encodeIA5String, $.BER),
    "level2RegionalNumber": $._encode_implicit(_TagClass.context, 2, () => $._encodeIA5String, $.BER),
    "level1RegionalNumber": $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER),
    "pTNSpecificNumber": $._encode_implicit(_TagClass.context, 4, () => $._encodeIA5String, $.BER),
    "localNumber": $._encode_implicit(_TagClass.context, 5, () => $._encodeIA5String, $.BER),
    "abbreviated": $._encode_implicit(_TagClass.context, 6, () => $._encodeIA5String, $.BER),
}, $.BER); }
    return _cached_encoder_for_PrivateTON(value, elGetter);
}


/* eslint-enable */
