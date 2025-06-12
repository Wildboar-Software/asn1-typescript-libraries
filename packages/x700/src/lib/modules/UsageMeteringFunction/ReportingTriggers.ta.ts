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
    ReportingTriggers_Item,
    _decode_ReportingTriggers_Item,
    _encode_ReportingTriggers_Item,
} from '../UsageMeteringFunction/ReportingTriggers-Item.ta.js';
export {
    ReportingTriggers_Item,
    _decode_ReportingTriggers_Item,
    _encode_ReportingTriggers_Item,
} from '../UsageMeteringFunction/ReportingTriggers-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION ReportingTriggers */
/**
 * @summary ReportingTriggers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportingTriggers  ::=
 *   SET OF
 *     CHOICE {periodic  [1]  TimePeriod,
 *             induced   [2]  Induced,
 *             event     [3]  ReportingEvent,
 *             stimulus  [4]  OBJECT IDENTIFIER}
 * ```
 */
export type ReportingTriggers = ReportingTriggers_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ReportingTriggers */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingTriggers */
let _cached_decoder_for_ReportingTriggers: $.ASN1Decoder<ReportingTriggers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReportingTriggers */

/* START_OF_SYMBOL_DEFINITION _decode_ReportingTriggers */
/**
 * @summary Decodes an ASN.1 element into a(n) ReportingTriggers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportingTriggers} The decoded data structure.
 */
export function _decode_ReportingTriggers(el: _Element) {
    if (!_cached_decoder_for_ReportingTriggers) {
        _cached_decoder_for_ReportingTriggers = $._decodeSetOf<ReportingTriggers_Item>(
            () => _decode_ReportingTriggers_Item
        );
    }
    return _cached_decoder_for_ReportingTriggers(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReportingTriggers */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingTriggers */
let _cached_encoder_for_ReportingTriggers: $.ASN1Encoder<ReportingTriggers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReportingTriggers */

/* START_OF_SYMBOL_DEFINITION _encode_ReportingTriggers */
/**
 * @summary Encodes a(n) ReportingTriggers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportingTriggers, encoded as an ASN.1 Element.
 */
export function _encode_ReportingTriggers(
    value: ReportingTriggers,
    elGetter: $.ASN1Encoder<ReportingTriggers>
) {
    if (!_cached_encoder_for_ReportingTriggers) {
        _cached_encoder_for_ReportingTriggers = $._encodeSetOf<ReportingTriggers_Item>(
            () => _encode_ReportingTriggers_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ReportingTriggers(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReportingTriggers */

/* eslint-enable */
