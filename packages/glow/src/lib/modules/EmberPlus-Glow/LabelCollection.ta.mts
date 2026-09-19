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
import { Label, _decode_Label, _encode_Label } from "../EmberPlus-Glow/Label.ta.mjs";
// export { Label, _decode_Label, _encode_Label } from "../EmberPlus-Glow/Label.ta.mjs";


/**
 * @summary LabelCollection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LabelCollection  ::= 
 *     SEQUENCE OF [0] Label
 * ```
 */
export
type LabelCollection = Label[]; // SequenceOfType

let _cached_decoder_for_LabelCollection: $.ASN1Decoder<LabelCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LabelCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LabelCollection (el: _Element): LabelCollection {
    if (!_cached_decoder_for_LabelCollection) { _cached_decoder_for_LabelCollection = $._decodeSequenceOf<Label>(() => $._decode_implicit<LabelCollection>(() => _decode_Label)); }
    return _cached_decoder_for_LabelCollection(el);
}

let _cached_encoder_for_LabelCollection: $.ASN1Encoder<LabelCollection> | null = null;

/**
 * @summary Encodes a(n) LabelCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LabelCollection, encoded as an ASN.1 Element.
 */
export
function _encode_LabelCollection (value: LabelCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LabelCollection) { _cached_encoder_for_LabelCollection = $._encodeSequenceOf<Label>(() => $._encode_implicit(_TagClass.context, 0, () => _encode_Label, $.BER), $.BER); }
    return _cached_encoder_for_LabelCollection(value, elGetter);
}


/* eslint-enable */
