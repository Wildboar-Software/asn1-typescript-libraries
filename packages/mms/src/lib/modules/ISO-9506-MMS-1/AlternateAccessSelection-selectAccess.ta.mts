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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
import { AlternateAccessSelection_selectAccess_indexRange, _decode_AlternateAccessSelection_selectAccess_indexRange, _encode_AlternateAccessSelection_selectAccess_indexRange } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAccess-indexRange.ta.mjs";
// export { AlternateAccessSelection_selectAccess_indexRange, _decode_AlternateAccessSelection_selectAccess_indexRange, _encode_AlternateAccessSelection_selectAccess_indexRange } from "../ISO-9506-MMS-1/AlternateAccessSelection-selectAccess-indexRange.ta.mjs";


/**
 * @summary AlternateAccessSelection_selectAccess
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateAccessSelection-selectAccess ::= CHOICE {
 *     component [1] IMPLICIT Identifier,
 *     component [1] IMPLICIT NULL,
 *     index [2] IMPLICIT Unsigned32,
 *     indexRange [3] IMPLICIT SEQUENCE {
 *         lowIndex [0] IMPLICIT Unsigned32,
 *         numberOfElements [1] IMPLICIT Unsigned32
 *     },
 *     index [2] IMPLICIT NULL,
 *     indexRange [3] IMPLICIT NULL,
 *     allElements [4] IMPLICIT NULL
 * }
 * ```
 */
export
type AlternateAccessSelection_selectAccess =
    { component: Identifier } /* CHOICE_ALT_ROOT */
    | { component: NULL } /* CHOICE_ALT_ROOT */
    | { index: Unsigned32 } /* CHOICE_ALT_ROOT */
    | { indexRange: AlternateAccessSelection_selectAccess_indexRange } /* CHOICE_ALT_ROOT */
    | { index: NULL } /* CHOICE_ALT_ROOT */
    | { indexRange: NULL } /* CHOICE_ALT_ROOT */
    | { allElements: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlternateAccessSelection_selectAccess: $.ASN1Decoder<AlternateAccessSelection_selectAccess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateAccessSelection_selectAccess
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateAccessSelection_selectAccess (el: _Element): AlternateAccessSelection_selectAccess {
    if (!_cached_decoder_for_AlternateAccessSelection_selectAccess) { _cached_decoder_for_AlternateAccessSelection_selectAccess = $._decode_inextensible_choice<AlternateAccessSelection_selectAccess>({
    "CONTEXT 1": [ "component", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 1": [ "component", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "index", $._decode_implicit<Unsigned32>(() => _decode_Unsigned32) ],
    "CONTEXT 3": [ "indexRange", $._decode_implicit<AlternateAccessSelection_selectAccess_indexRange>(() => _decode_AlternateAccessSelection_selectAccess_indexRange) ],
    "CONTEXT 2": [ "index", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "indexRange", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "allElements", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AlternateAccessSelection_selectAccess(el);
}

let _cached_encoder_for_AlternateAccessSelection_selectAccess: $.ASN1Encoder<AlternateAccessSelection_selectAccess> | null = null;

/**
 * @summary Encodes a(n) AlternateAccessSelection_selectAccess into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateAccessSelection_selectAccess, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateAccessSelection_selectAccess (value: AlternateAccessSelection_selectAccess, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateAccessSelection_selectAccess) { _cached_encoder_for_AlternateAccessSelection_selectAccess = $._encode_choice<AlternateAccessSelection_selectAccess>({
    "component": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "component": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "index": $._encode_implicit(_TagClass.context, 2, () => _encode_Unsigned32, $.BER),
    "indexRange": $._encode_implicit(_TagClass.context, 3, () => _encode_AlternateAccessSelection_selectAccess_indexRange, $.BER),
    "index": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "indexRange": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "allElements": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AlternateAccessSelection_selectAccess(value, elGetter);
}


/* eslint-enable */
