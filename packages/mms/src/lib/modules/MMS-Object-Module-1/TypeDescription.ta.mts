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
import { TypeDescription_array, _decode_TypeDescription_array, _encode_TypeDescription_array } from "../MMS-Object-Module-1/TypeDescription-array.ta.mjs";
// export { TypeDescription_array, _decode_TypeDescription_array, _encode_TypeDescription_array } from "../MMS-Object-Module-1/TypeDescription-array.ta.mjs";
import { TypeDescription_structure, _decode_TypeDescription_structure, _encode_TypeDescription_structure } from "../MMS-Object-Module-1/TypeDescription-structure.ta.mjs";
// export { TypeDescription_structure, _decode_TypeDescription_structure, _encode_TypeDescription_structure } from "../MMS-Object-Module-1/TypeDescription-structure.ta.mjs";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
import { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
// export { Unsigned8, _decode_Unsigned8, _encode_Unsigned8 } from "../ISO-9506-MMS-1/Unsigned8.ta.mjs";
import { TypeDescription_floating_point, _decode_TypeDescription_floating_point, _encode_TypeDescription_floating_point } from "../MMS-Object-Module-1/TypeDescription-floating-point.ta.mjs";
// export { TypeDescription_floating_point, _decode_TypeDescription_floating_point, _encode_TypeDescription_floating_point } from "../MMS-Object-Module-1/TypeDescription-floating-point.ta.mjs";


/**
 * @summary TypeDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TypeDescription  ::=  CHOICE {
 *     array                   [1] IMPLICIT SEQUENCE {
 *         packed                 [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *         numberOfElements       [1] IMPLICIT Unsigned32,
 *         elementType            [2] TypeSpecification },
 *     structure                [2] IMPLICIT SEQUENCE {
 *         packed                 [0] IMPLICIT BOOLEAN DEFAULT FALSE,
 *         components             [1] IMPLICIT SEQUENCE OF SEQUENCE {
 *             componentName           [0] IMPLICIT Identifier OPTIONAL,
 *             componentType           [1] TypeSpecification } },
 *     -- Simple Size Class
 *     boolean                  [3] IMPLICIT NULL,     -- BOOLEAN
 *     bit-string              [4] IMPLICIT Integer32, -- BIT-STRING
 *     integer                 [5] IMPLICIT Unsigned8, -- INTEGER
 *     unsigned                [6] IMPLICIT Unsigned8, -- UNSIGNED
 *     floating-point          [7] IMPLICIT SEQUENCE {
 *         format-width           Unsigned8,   -- number of bits of
 *                                             -- floating point value
 *                                             -- including sign, exponent,
 *                                             -- and fraction
 *         exponent-width         Unsigned8    -- size of exponent in bits
 *     },
 *     -- [8] is reserved
 *     octet-string            [9] IMPLICIT Integer32,     -- OCTET-STRING
 *     visible-string          [10] IMPLICIT Integer32,    -- VISIBLE-STRING
 *     generalized-time        [11] IMPLICIT NULL,         -- GENERALIZED-TIME
 *     binary-time             [12] IMPLICIT BOOLEAN,      -- BINARY-TIME
 *     bcd                     [13] IMPLICIT Unsigned8,    -- BCD
 *     objId                   [15] IMPLICIT NULL,
 *     ...,
 *     mMSString               [16] Integer32
 * }
 * ```
 */
export
type TypeDescription =
    { array: TypeDescription_array } /* CHOICE_ALT_ROOT */
    | { structure: TypeDescription_structure } /* CHOICE_ALT_ROOT */
    | { boolean_: NULL } /* CHOICE_ALT_ROOT */
    | { bit_string: Integer32 } /* CHOICE_ALT_ROOT */
    | { integer: Unsigned8 } /* CHOICE_ALT_ROOT */
    | { unsigned: Unsigned8 } /* CHOICE_ALT_ROOT */
    | { floating_point: TypeDescription_floating_point } /* CHOICE_ALT_ROOT */
    | { octet_string: Integer32 } /* CHOICE_ALT_ROOT */
    | { visible_string: Integer32 } /* CHOICE_ALT_ROOT */
    | { generalized_time: NULL } /* CHOICE_ALT_ROOT */
    | { binary_time: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { bcd: Unsigned8 } /* CHOICE_ALT_ROOT */
    | { objId: NULL } /* CHOICE_ALT_ROOT */
    | { mMSString: Integer32 } /* CHOICE_ALT_EXT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TypeDescription: $.ASN1Decoder<TypeDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TypeDescription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TypeDescription (el: _Element): TypeDescription {
    if (!_cached_decoder_for_TypeDescription) { _cached_decoder_for_TypeDescription = $._decode_extensible_choice<TypeDescription>({
    "CONTEXT 1": [ "array", $._decode_implicit<TypeDescription_array>(() => _decode_TypeDescription_array) ],
    "CONTEXT 2": [ "structure", $._decode_implicit<TypeDescription_structure>(() => _decode_TypeDescription_structure) ],
    "CONTEXT 3": [ "boolean_", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "bit_string", $._decode_implicit<Integer32>(() => _decode_Integer32) ],
    "CONTEXT 5": [ "integer", $._decode_implicit<Unsigned8>(() => _decode_Unsigned8) ],
    "CONTEXT 6": [ "unsigned", $._decode_implicit<Unsigned8>(() => _decode_Unsigned8) ],
    "CONTEXT 7": [ "floating_point", $._decode_implicit<TypeDescription_floating_point>(() => _decode_TypeDescription_floating_point) ],
    "CONTEXT 9": [ "octet_string", $._decode_implicit<Integer32>(() => _decode_Integer32) ],
    "CONTEXT 10": [ "visible_string", $._decode_implicit<Integer32>(() => _decode_Integer32) ],
    "CONTEXT 11": [ "generalized_time", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 12": [ "binary_time", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 13": [ "bcd", $._decode_implicit<Unsigned8>(() => _decode_Unsigned8) ],
    "CONTEXT 15": [ "objId", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 16": [ "mMSString", $._decode_implicit<Integer32>(() => _decode_Integer32) ]
}); }
    return _cached_decoder_for_TypeDescription(el);
}

let _cached_encoder_for_TypeDescription: $.ASN1Encoder<TypeDescription> | null = null;

/**
 * @summary Encodes a(n) TypeDescription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeDescription, encoded as an ASN.1 Element.
 */
export
function _encode_TypeDescription (value: TypeDescription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TypeDescription) { _cached_encoder_for_TypeDescription = $._encode_choice<TypeDescription>({
    "array": $._encode_implicit(_TagClass.context, 1, () => _encode_TypeDescription_array, $.BER),
    "structure": $._encode_implicit(_TagClass.context, 2, () => _encode_TypeDescription_structure, $.BER),
    "boolean_": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "bit_string": $._encode_implicit(_TagClass.context, 4, () => _encode_Integer32, $.BER),
    "integer": $._encode_implicit(_TagClass.context, 5, () => _encode_Unsigned8, $.BER),
    "unsigned": $._encode_implicit(_TagClass.context, 6, () => _encode_Unsigned8, $.BER),
    "floating_point": $._encode_implicit(_TagClass.context, 7, () => _encode_TypeDescription_floating_point, $.BER),
    "octet_string": $._encode_implicit(_TagClass.context, 9, () => _encode_Integer32, $.BER),
    "visible_string": $._encode_implicit(_TagClass.context, 10, () => _encode_Integer32, $.BER),
    "generalized_time": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
    "binary_time": $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER),
    "bcd": $._encode_implicit(_TagClass.context, 13, () => _encode_Unsigned8, $.BER),
    "objId": $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER),
    "mMSString": $._encode_implicit(_TagClass.context, 16, () => _encode_Integer32, $.BER),
}, $.BER); }
    return _cached_encoder_for_TypeDescription(value, elGetter);
}


/* eslint-enable */
