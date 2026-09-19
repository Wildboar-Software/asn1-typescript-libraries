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
import { StreamEntry, _decode_StreamEntry, _encode_StreamEntry } from "../EmberPlus-Glow/StreamEntry.ta.mjs";
// export { StreamEntry, _decode_StreamEntry, _encode_StreamEntry } from "../EmberPlus-Glow/StreamEntry.ta.mjs";


/**
 * @summary StreamCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamCollection  ::= 
 *     [APPLICATION 6] IMPLICIT
 *         SEQUENCE OF [0] StreamEntry
 * ```
 */
export
type StreamCollection = StreamEntry[]; // SequenceOfType

let _cached_decoder_for_StreamCollection: $.ASN1Decoder<StreamCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreamCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StreamCollection (el: _Element): StreamCollection {
    if (!_cached_decoder_for_StreamCollection) { _cached_decoder_for_StreamCollection = $._decode_implicit<StreamCollection>(() => $._decodeSequenceOf<StreamEntry>(() => $._decode_implicit<StreamCollection>(() => _decode_StreamEntry))); }
    return _cached_decoder_for_StreamCollection(el);
}

let _cached_encoder_for_StreamCollection: $.ASN1Encoder<StreamCollection> | null = null;

/**
 * @summary Encodes a(n) StreamCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreamCollection, encoded as an ASN.1 Element.
 */
export
function _encode_StreamCollection (value: StreamCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StreamCollection) { _cached_encoder_for_StreamCollection = $._encode_implicit(_TagClass.application, 6, () => $._encodeSequenceOf<StreamEntry>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_StreamEntry, $.BER), $.BER), $.BER); }
    return _cached_encoder_for_StreamCollection(value, elGetter);
}


/* eslint-enable */
