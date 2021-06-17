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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../SummarizationASN1Productions/GlobalTime.ta';
export {
    GlobalTime,
    _decode_GlobalTime,
    _encode_GlobalTime,
} from '../SummarizationASN1Productions/GlobalTime.ta';

/* START_OF_SYMBOL_DEFINITION ScanInitiationTime */
/**
 * @summary ScanInitiationTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScanInitiationTime  ::=  GlobalTime
 * ```
 */
export type ScanInitiationTime = GlobalTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION ScanInitiationTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScanInitiationTime */
let _cached_decoder_for_ScanInitiationTime: $.ASN1Decoder<ScanInitiationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScanInitiationTime */

/* START_OF_SYMBOL_DEFINITION _decode_ScanInitiationTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ScanInitiationTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScanInitiationTime} The decoded data structure.
 */
export function _decode_ScanInitiationTime(el: _Element) {
    if (!_cached_decoder_for_ScanInitiationTime) {
        _cached_decoder_for_ScanInitiationTime = _decode_GlobalTime;
    }
    return _cached_decoder_for_ScanInitiationTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScanInitiationTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScanInitiationTime */
let _cached_encoder_for_ScanInitiationTime: $.ASN1Encoder<ScanInitiationTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScanInitiationTime */

/* START_OF_SYMBOL_DEFINITION _encode_ScanInitiationTime */
/**
 * @summary Encodes a(n) ScanInitiationTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanInitiationTime, encoded as an ASN.1 Element.
 */
export function _encode_ScanInitiationTime(
    value: ScanInitiationTime,
    elGetter: $.ASN1Encoder<ScanInitiationTime>
) {
    if (!_cached_encoder_for_ScanInitiationTime) {
        _cached_encoder_for_ScanInitiationTime = _encode_GlobalTime;
    }
    return _cached_encoder_for_ScanInitiationTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScanInitiationTime */

/* eslint-enable */
