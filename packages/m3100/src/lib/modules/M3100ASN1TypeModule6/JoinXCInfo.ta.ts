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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CoincidentUnidirectionalConnections,
    _decode_CoincidentUnidirectionalConnections,
    _encode_CoincidentUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentUnidirectionalConnections.ta.js';
export {
    CoincidentUnidirectionalConnections,
    _decode_CoincidentUnidirectionalConnections,
    _encode_CoincidentUnidirectionalConnections,
} from '../M3100ASN1TypeModule6/CoincidentUnidirectionalConnections.ta.js';

/* START_OF_SYMBOL_DEFINITION JoinXCInfo */
/**
 * @summary JoinXCInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * JoinXCInfo  ::=  SEQUENCE OF CoincidentUnidirectionalConnections
 * ```
 */
export type JoinXCInfo = CoincidentUnidirectionalConnections[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION JoinXCInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinXCInfo */
let _cached_decoder_for_JoinXCInfo: $.ASN1Decoder<JoinXCInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_JoinXCInfo */

/* START_OF_SYMBOL_DEFINITION _decode_JoinXCInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) JoinXCInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {JoinXCInfo} The decoded data structure.
 */
export function _decode_JoinXCInfo(el: _Element) {
    if (!_cached_decoder_for_JoinXCInfo) {
        _cached_decoder_for_JoinXCInfo = $._decodeSequenceOf<CoincidentUnidirectionalConnections>(
            () => _decode_CoincidentUnidirectionalConnections
        );
    }
    return _cached_decoder_for_JoinXCInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_JoinXCInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinXCInfo */
let _cached_encoder_for_JoinXCInfo: $.ASN1Encoder<JoinXCInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_JoinXCInfo */

/* START_OF_SYMBOL_DEFINITION _encode_JoinXCInfo */
/**
 * @summary Encodes a(n) JoinXCInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The JoinXCInfo, encoded as an ASN.1 Element.
 */
export function _encode_JoinXCInfo(
    value: JoinXCInfo,
    elGetter: $.ASN1Encoder<JoinXCInfo>
) {
    if (!_cached_encoder_for_JoinXCInfo) {
        _cached_encoder_for_JoinXCInfo = $._encodeSequenceOf<CoincidentUnidirectionalConnections>(
            () => _encode_CoincidentUnidirectionalConnections,
            $.BER
        );
    }
    return _cached_encoder_for_JoinXCInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_JoinXCInfo */

/* eslint-enable */
