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
import { FloatingPoint, _decode_FloatingPoint, _encode_FloatingPoint } from "../ISO-9506-MMS-1/FloatingPoint.ta.mjs";
// export { FloatingPoint, _decode_FloatingPoint, _encode_FloatingPoint } from "../ISO-9506-MMS-1/FloatingPoint.ta.mjs";
import { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
// export { TimeOfDay, _decode_TimeOfDay, _encode_TimeOfDay } from "../ISO-9506-MMS-1/TimeOfDay.ta.mjs";
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Data  ::=  CHOICE {
 *    -- context tag 0 is reserved for AccessResult
 *    array               [1] IMPLICIT SEQUENCE OF Data,
 *    structure           [2] IMPLICIT SEQUENCE OF Data,
 *    boolean             [3] IMPLICIT BOOLEAN,
 *    bit-string          [4] IMPLICIT BIT STRING,
 *    integer             [5] IMPLICIT INTEGER,
 *    unsigned            [6] IMPLICIT INTEGER, -- shall not be negative
 *    floating-point      [7] IMPLICIT FloatingPoint,
 *    -- [8] is reserved
 *    octet-string        [9] IMPLICIT OCTET STRING,
 *    visible-string      [10] IMPLICIT VisibleString,
 *    generalized-time    [11] IMPLICIT GeneralizedTime,
 *    binary-time         [12] IMPLICIT TimeOfDay,
 *    bcd                 [13] IMPLICIT INTEGER, -- shall not be negative
 *    booleanArray        [14] IMPLICIT BIT STRING,
 *    objId               [15] IMPLICIT OBJECT IDENTIFIER,
 *    ...,
 *    mMSString           [16] IMPLICIT MMSString
 *    }
 * ```
 */
export
type Data =
    { array: Data[] } /* CHOICE_ALT_ROOT */
    | { structure: Data[] } /* CHOICE_ALT_ROOT */
    | { boolean_: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { bit_string: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { unsigned: INTEGER } /* CHOICE_ALT_ROOT */
    | { floating_point: FloatingPoint } /* CHOICE_ALT_ROOT */
    | { octet_string: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { visible_string: VisibleString } /* CHOICE_ALT_ROOT */
    | { generalized_time: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { binary_time: TimeOfDay } /* CHOICE_ALT_ROOT */
    | { bcd: INTEGER } /* CHOICE_ALT_ROOT */
    | { booleanArray: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { objId: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { mMSString: MMSString } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Data: $.ASN1Decoder<Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Data (el: _Element): Data {
    if (!_cached_decoder_for_Data) { _cached_decoder_for_Data = $._decode_extensible_choice<Data>({
    "CONTEXT 1": [ "array", $._decode_implicit<Data[]>(() => $._decodeSequenceOf<Data>(() => _decode_Data)) ],
    "CONTEXT 2": [ "structure", $._decode_implicit<Data[]>(() => $._decodeSequenceOf<Data>(() => _decode_Data)) ],
    "CONTEXT 3": [ "boolean_", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 4": [ "bit_string", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 5": [ "integer", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 6": [ "unsigned", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 7": [ "floating_point", $._decode_implicit<FloatingPoint>(() => _decode_FloatingPoint) ],
    "CONTEXT 9": [ "octet_string", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 10": [ "visible_string", $._decode_implicit<VisibleString>(() => $._decodeVisibleString) ],
    "CONTEXT 11": [ "generalized_time", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 12": [ "binary_time", $._decode_implicit<TimeOfDay>(() => _decode_TimeOfDay) ],
    "CONTEXT 13": [ "bcd", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 14": [ "booleanArray", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 15": [ "objId", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 16": [ "mMSString", $._decode_explicit<MMSString>(() => _decode_MMSString) ]
}); }
    return _cached_decoder_for_Data(el);
}

let _cached_encoder_for_Data: $.ASN1Encoder<Data> | null = null;

/**
 * @summary Encodes a(n) Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Data, encoded as an ASN.1 Element.
 */
export
function _encode_Data (value: Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Data) { _cached_encoder_for_Data = $._encode_choice<Data>({
    "array": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Data>(() => _encode_Data, $.BER), $.BER),
    "structure": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Data>(() => _encode_Data, $.BER), $.BER),
    "boolean_": $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER),
    "bit_string": $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER),
    "integer": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "unsigned": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "floating_point": $._encode_implicit(_TagClass.context, 7, () => _encode_FloatingPoint, $.BER),
    "octet_string": $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER),
    "visible_string": $._encode_implicit(_TagClass.context, 10, () => $._encodeVisibleString, $.BER),
    "generalized_time": $._encode_implicit(_TagClass.context, 11, () => $._encodeGeneralizedTime, $.BER),
    "binary_time": $._encode_implicit(_TagClass.context, 12, () => _encode_TimeOfDay, $.BER),
    "bcd": $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER),
    "booleanArray": $._encode_implicit(_TagClass.context, 14, () => $._encodeBitString, $.BER),
    "objId": $._encode_implicit(_TagClass.context, 15, () => $._encodeObjectIdentifier, $.BER),
    "mMSString": $._encode_explicit(_TagClass.context, 16, () => _encode_MMSString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Data(value, elGetter);
}


/* eslint-enable */
