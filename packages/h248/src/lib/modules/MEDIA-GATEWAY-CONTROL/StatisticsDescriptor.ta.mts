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
import { StatisticsParameter, _decode_StatisticsParameter, _encode_StatisticsParameter } from "../MEDIA-GATEWAY-CONTROL/StatisticsParameter.ta.mjs";
// export { StatisticsParameter, _decode_StatisticsParameter, _encode_StatisticsParameter } from "../MEDIA-GATEWAY-CONTROL/StatisticsParameter.ta.mjs";


/**
 * @summary StatisticsDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatisticsDescriptor  ::=  SEQUENCE OF StatisticsParameter
 * ```
 */
export
type StatisticsDescriptor = StatisticsParameter[]; // SequenceOfType

let _cached_decoder_for_StatisticsDescriptor: $.ASN1Decoder<StatisticsDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatisticsDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatisticsDescriptor (el: _Element): StatisticsDescriptor {
    if (!_cached_decoder_for_StatisticsDescriptor) { _cached_decoder_for_StatisticsDescriptor = $._decodeSequenceOf<StatisticsParameter>(() => _decode_StatisticsParameter); }
    return _cached_decoder_for_StatisticsDescriptor(el);
}

let _cached_encoder_for_StatisticsDescriptor: $.ASN1Encoder<StatisticsDescriptor> | null = null;

/**
 * @summary Encodes a(n) StatisticsDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatisticsDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_StatisticsDescriptor (value: StatisticsDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatisticsDescriptor) { _cached_encoder_for_StatisticsDescriptor = $._encodeSequenceOf<StatisticsParameter>(() => _encode_StatisticsParameter, $.BER); }
    return _cached_encoder_for_StatisticsDescriptor(value, elGetter);
}


/* eslint-enable */
