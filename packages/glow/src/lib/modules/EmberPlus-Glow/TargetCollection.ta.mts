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
import { Target, _decode_Target, _encode_Target } from "../EmberPlus-Glow/Target.ta.mjs";
// export { Target, _decode_Target, _encode_Target } from "../EmberPlus-Glow/Target.ta.mjs";


/**
 * @summary TargetCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetCollection  ::= 
 *     SEQUENCE OF [0] Target
 * ```
 */
export
type TargetCollection = Target[]; // SequenceOfType

let _cached_decoder_for_TargetCollection: $.ASN1Decoder<TargetCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetCollection (el: _Element): TargetCollection {
    if (!_cached_decoder_for_TargetCollection) { _cached_decoder_for_TargetCollection = $._decodeSequenceOf<Target>(() => $._decode_implicit<TargetCollection>(() => _decode_Target)); }
    return _cached_decoder_for_TargetCollection(el);
}

let _cached_encoder_for_TargetCollection: $.ASN1Encoder<TargetCollection> | null = null;

/**
 * @summary Encodes a(n) TargetCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetCollection, encoded as an ASN.1 Element.
 */
export
function _encode_TargetCollection (value: TargetCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetCollection) { _cached_encoder_for_TargetCollection = $._encodeSequenceOf<Target>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_Target, $.BER), $.BER); }
    return _cached_encoder_for_TargetCollection(value, elGetter);
}


/* eslint-enable */
