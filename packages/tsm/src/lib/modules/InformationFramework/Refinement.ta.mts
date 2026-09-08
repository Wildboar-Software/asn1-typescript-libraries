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
import { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";


// TODO: CHECK_RECURSIVE_DEFINITION
/**
 * @summary Refinement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Refinement  ::=  CHOICE {
 *   item  [0]  OBJECT-CLASS.&id,
 *   and   [1]  SET SIZE (1..MAX) OF Refinement,
 *   or    [2]  SET SIZE (1..MAX) OF Refinement,
 *   not   [3]  Refinement,
 *   ... }
 * ```
 */
export
type Refinement =
    { item: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { and: Refinement[] } /* CHOICE_ALT_ROOT */
    | { or: Refinement[] } /* CHOICE_ALT_ROOT */
    | { not: Refinement } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Refinement: $.ASN1Decoder<Refinement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Refinement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Refinement (el: _Element): Refinement {
    if (!_cached_decoder_for_Refinement) { _cached_decoder_for_Refinement = $._decode_extensible_choice<Refinement>({
    "CONTEXT 0": [ "item", $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier) ],
    "CONTEXT 1": [ "and", $._decode_implicit<Refinement[]>(() => $._decodeSetOf<Refinement>(() => _decode_Refinement)) ],
    "CONTEXT 2": [ "or", $._decode_implicit<Refinement[]>(() => $._decodeSetOf<Refinement>(() => _decode_Refinement)) ],
    "CONTEXT 3": [ "not", $._decode_explicit<Refinement>(() => _decode_Refinement) ]
}); }
    return _cached_decoder_for_Refinement(el);
}

let _cached_encoder_for_Refinement: $.ASN1Encoder<Refinement> | null = null;

/**
 * @summary Encodes a(n) Refinement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Refinement, encoded as an ASN.1 Element.
 */
export
function _encode_Refinement (value: Refinement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Refinement) { _cached_encoder_for_Refinement = $._encode_choice<Refinement>({
    "item": $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER),
    "and": $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<Refinement>(() => _encode_Refinement, $.BER), $.BER),
    "or": $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<Refinement>(() => _encode_Refinement, $.BER), $.BER),
    "not": $._encode_explicit(_TagClass.context, 3, () => _encode_Refinement, $.BER),
}, $.BER); }
    return _cached_encoder_for_Refinement(value, elGetter);
}


/* eslint-enable */
