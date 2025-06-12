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
    ActivityDuration_Item,
    _decode_ActivityDuration_Item,
    _encode_ActivityDuration_Item,
} from '../X790ASN1Module/ActivityDuration-Item.ta.js';
export {
    ActivityDuration_Item,
    _decode_ActivityDuration_Item,
    _encode_ActivityDuration_Item,
} from '../X790ASN1Module/ActivityDuration-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION ActivityDuration */
/**
 * @summary ActivityDuration
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivityDuration  ::=
 *   SET OF
 *     SEQUENCE {duration  [0]  TimeInterval,
 *               billable  [1]  BOOLEAN DEFAULT TRUE, -- OPTIONAL,
 *               type      [2]  ActivityType OPTIONAL,
 *               ...}
 * ```
 */
export type ActivityDuration = ActivityDuration_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ActivityDuration */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityDuration */
let _cached_decoder_for_ActivityDuration: $.ASN1Decoder<ActivityDuration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActivityDuration */

/* START_OF_SYMBOL_DEFINITION _decode_ActivityDuration */
/**
 * @summary Decodes an ASN.1 element into a(n) ActivityDuration
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivityDuration} The decoded data structure.
 */
export function _decode_ActivityDuration(el: _Element) {
    if (!_cached_decoder_for_ActivityDuration) {
        _cached_decoder_for_ActivityDuration = $._decodeSetOf<ActivityDuration_Item>(
            () => _decode_ActivityDuration_Item
        );
    }
    return _cached_decoder_for_ActivityDuration(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActivityDuration */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityDuration */
let _cached_encoder_for_ActivityDuration: $.ASN1Encoder<ActivityDuration> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActivityDuration */

/* START_OF_SYMBOL_DEFINITION _encode_ActivityDuration */
/**
 * @summary Encodes a(n) ActivityDuration into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivityDuration, encoded as an ASN.1 Element.
 */
export function _encode_ActivityDuration(
    value: ActivityDuration,
    elGetter: $.ASN1Encoder<ActivityDuration>
) {
    if (!_cached_encoder_for_ActivityDuration) {
        _cached_encoder_for_ActivityDuration = $._encodeSetOf<ActivityDuration_Item>(
            () => _encode_ActivityDuration_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ActivityDuration(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActivityDuration */

/* eslint-enable */
