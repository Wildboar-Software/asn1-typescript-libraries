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
    ObservationScan,
    _decode_ObservationScan,
    _encode_ObservationScan,
} from '../SummarizationASN1Productions/ObservationScan.ta';
export {
    ObservationScan,
    _decode_ObservationScan,
    _encode_ObservationScan,
} from '../SummarizationASN1Productions/ObservationScan.ta';

/* START_OF_SYMBOL_DEFINITION ObservationScanList */
/**
 * @summary ObservationScanList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObservationScanList  ::=  SET OF ObservationScan
 * ```
 */
export type ObservationScanList = ObservationScan[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ObservationScanList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObservationScanList */
let _cached_decoder_for_ObservationScanList: $.ASN1Decoder<ObservationScanList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObservationScanList */

/* START_OF_SYMBOL_DEFINITION _decode_ObservationScanList */
/**
 * @summary Decodes an ASN.1 element into a(n) ObservationScanList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObservationScanList} The decoded data structure.
 */
export function _decode_ObservationScanList(el: _Element) {
    if (!_cached_decoder_for_ObservationScanList) {
        _cached_decoder_for_ObservationScanList = $._decodeSetOf<ObservationScan>(
            () => _decode_ObservationScan
        );
    }
    return _cached_decoder_for_ObservationScanList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObservationScanList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObservationScanList */
let _cached_encoder_for_ObservationScanList: $.ASN1Encoder<ObservationScanList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObservationScanList */

/* START_OF_SYMBOL_DEFINITION _encode_ObservationScanList */
/**
 * @summary Encodes a(n) ObservationScanList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservationScanList, encoded as an ASN.1 Element.
 */
export function _encode_ObservationScanList(
    value: ObservationScanList,
    elGetter: $.ASN1Encoder<ObservationScanList>
) {
    if (!_cached_encoder_for_ObservationScanList) {
        _cached_encoder_for_ObservationScanList = $._encodeSetOf<ObservationScan>(
            () => _encode_ObservationScan,
            $.BER
        );
    }
    return _cached_encoder_for_ObservationScanList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObservationScanList */

/* eslint-enable */
