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
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta';
export {
    Time24Wps,
    _decode_Time24Wps,
    _encode_Time24Wps,
} from '../Schedulerev1-ASN1Module/Time24Wps.ta';

/* START_OF_SYMBOL_DEFINITION TriggerTimes */
/**
 * @summary TriggerTimes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerTimes  ::=  SET OF Time24Wps
 * ```
 */
export type TriggerTimes = Time24Wps[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TriggerTimes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerTimes */
let _cached_decoder_for_TriggerTimes: $.ASN1Decoder<TriggerTimes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TriggerTimes */

/* START_OF_SYMBOL_DEFINITION _decode_TriggerTimes */
/**
 * @summary Decodes an ASN.1 element into a(n) TriggerTimes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerTimes} The decoded data structure.
 */
export function _decode_TriggerTimes(el: _Element) {
    if (!_cached_decoder_for_TriggerTimes) {
        _cached_decoder_for_TriggerTimes = $._decodeSetOf<Time24Wps>(
            () => _decode_Time24Wps
        );
    }
    return _cached_decoder_for_TriggerTimes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TriggerTimes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerTimes */
let _cached_encoder_for_TriggerTimes: $.ASN1Encoder<TriggerTimes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TriggerTimes */

/* START_OF_SYMBOL_DEFINITION _encode_TriggerTimes */
/**
 * @summary Encodes a(n) TriggerTimes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerTimes, encoded as an ASN.1 Element.
 */
export function _encode_TriggerTimes(
    value: TriggerTimes,
    elGetter: $.ASN1Encoder<TriggerTimes>
) {
    if (!_cached_encoder_for_TriggerTimes) {
        _cached_encoder_for_TriggerTimes = $._encodeSetOf<Time24Wps>(
            () => _encode_Time24Wps,
            $.BER
        );
    }
    return _cached_encoder_for_TriggerTimes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TriggerTimes */

/* eslint-enable */
