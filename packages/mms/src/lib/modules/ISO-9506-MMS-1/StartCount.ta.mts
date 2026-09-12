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



/**
 * @summary StartCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartCount  ::=  CHOICE {
 *    noLimit                    [0] IMPLICIT NULL,
 *    cycleCount                 [1] IMPLICIT INTEGER,
 *    stepCount                  [2] IMPLICIT INTEGER   }
 * ```
 */
export
type StartCount =
    { noLimit: NULL } /* CHOICE_ALT_ROOT */
    | { cycleCount: INTEGER } /* CHOICE_ALT_ROOT */
    | { stepCount: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_StartCount: $.ASN1Decoder<StartCount> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartCount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartCount (el: _Element): StartCount {
    if (!_cached_decoder_for_StartCount) { _cached_decoder_for_StartCount = $._decode_inextensible_choice<StartCount>({
    "CONTEXT 0": [ "noLimit", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "cycleCount", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "stepCount", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_StartCount(el);
}

let _cached_encoder_for_StartCount: $.ASN1Encoder<StartCount> | null = null;

/**
 * @summary Encodes a(n) StartCount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartCount, encoded as an ASN.1 Element.
 */
export
function _encode_StartCount (value: StartCount, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartCount) { _cached_encoder_for_StartCount = $._encode_choice<StartCount>({
    "noLimit": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "cycleCount": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "stepCount": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_StartCount(value, elGetter);
}


/* eslint-enable */
