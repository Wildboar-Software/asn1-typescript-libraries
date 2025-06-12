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
    BufferedObservationScan,
    _decode_BufferedObservationScan,
    _encode_BufferedObservationScan,
} from '../SummarizationASN1Productions/BufferedObservationScan.ta.mjs';
export {
    BufferedObservationScan,
    _decode_BufferedObservationScan,
    _encode_BufferedObservationScan,
} from '../SummarizationASN1Productions/BufferedObservationScan.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BufferedObservationList */
/**
 * @summary BufferedObservationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BufferedObservationList  ::=  SET OF BufferedObservationScan
 * ```
 */
export type BufferedObservationList = BufferedObservationScan[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION BufferedObservationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationList */
let _cached_decoder_for_BufferedObservationList: $.ASN1Decoder<BufferedObservationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BufferedObservationList */

/* START_OF_SYMBOL_DEFINITION _decode_BufferedObservationList */
/**
 * @summary Decodes an ASN.1 element into a(n) BufferedObservationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BufferedObservationList} The decoded data structure.
 */
export function _decode_BufferedObservationList(el: _Element) {
    if (!_cached_decoder_for_BufferedObservationList) {
        _cached_decoder_for_BufferedObservationList = $._decodeSetOf<BufferedObservationScan>(
            () => _decode_BufferedObservationScan
        );
    }
    return _cached_decoder_for_BufferedObservationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BufferedObservationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationList */
let _cached_encoder_for_BufferedObservationList: $.ASN1Encoder<BufferedObservationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BufferedObservationList */

/* START_OF_SYMBOL_DEFINITION _encode_BufferedObservationList */
/**
 * @summary Encodes a(n) BufferedObservationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BufferedObservationList, encoded as an ASN.1 Element.
 */
export function _encode_BufferedObservationList(
    value: BufferedObservationList,
    elGetter: $.ASN1Encoder<BufferedObservationList>
) {
    if (!_cached_encoder_for_BufferedObservationList) {
        _cached_encoder_for_BufferedObservationList = $._encodeSetOf<BufferedObservationScan>(
            () => _encode_BufferedObservationScan,
            $.BER
        );
    }
    return _cached_encoder_for_BufferedObservationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BufferedObservationList */

/* eslint-enable */
