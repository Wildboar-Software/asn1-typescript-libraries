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
    SignalRate,
    _decode_SignalRate,
    _encode_SignalRate,
} from '../M3100ASN1TypeModule2/SignalRate.ta.js';
export {
    SignalRate,
    _decode_SignalRate,
    _encode_SignalRate,
} from '../M3100ASN1TypeModule2/SignalRate.ta.js';

/* START_OF_SYMBOL_DEFINITION AvailableSignalRateList */
/**
 * @summary AvailableSignalRateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvailableSignalRateList  ::=  SET OF SignalRate
 * ```
 */
export type AvailableSignalRateList = SignalRate[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AvailableSignalRateList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailableSignalRateList */
let _cached_decoder_for_AvailableSignalRateList: $.ASN1Decoder<AvailableSignalRateList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailableSignalRateList */

/* START_OF_SYMBOL_DEFINITION _decode_AvailableSignalRateList */
/**
 * @summary Decodes an ASN.1 element into a(n) AvailableSignalRateList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvailableSignalRateList} The decoded data structure.
 */
export function _decode_AvailableSignalRateList(el: _Element) {
    if (!_cached_decoder_for_AvailableSignalRateList) {
        _cached_decoder_for_AvailableSignalRateList = $._decodeSetOf<SignalRate>(
            () => _decode_SignalRate
        );
    }
    return _cached_decoder_for_AvailableSignalRateList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AvailableSignalRateList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailableSignalRateList */
let _cached_encoder_for_AvailableSignalRateList: $.ASN1Encoder<AvailableSignalRateList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailableSignalRateList */

/* START_OF_SYMBOL_DEFINITION _encode_AvailableSignalRateList */
/**
 * @summary Encodes a(n) AvailableSignalRateList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvailableSignalRateList, encoded as an ASN.1 Element.
 */
export function _encode_AvailableSignalRateList(
    value: AvailableSignalRateList,
    elGetter: $.ASN1Encoder<AvailableSignalRateList>
) {
    if (!_cached_encoder_for_AvailableSignalRateList) {
        _cached_encoder_for_AvailableSignalRateList = $._encodeSetOf<SignalRate>(
            () => _encode_SignalRate,
            $.BER
        );
    }
    return _cached_encoder_for_AvailableSignalRateList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AvailableSignalRateList */

/* eslint-enable */
