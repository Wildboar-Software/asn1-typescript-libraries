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
    TypeOfDaysMaskWps_Item,
    _decode_TypeOfDaysMaskWps_Item,
    _encode_TypeOfDaysMaskWps_Item,
} from '../Schedulerev1-ASN1Module/TypeOfDaysMaskWps-Item.ta.mjs';
export {
    TypeOfDaysMaskWps_Item,
    _decode_TypeOfDaysMaskWps_Item,
    _encode_TypeOfDaysMaskWps_Item,
} from '../Schedulerev1-ASN1Module/TypeOfDaysMaskWps-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION TypeOfDaysMaskWps */
/**
 * @summary TypeOfDaysMaskWps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfDaysMaskWps  ::=
 *   SET OF SEQUENCE {typeOfDay   TypeOfDay,
 *                    timesOfDay  TimesOfDayWps}
 * ```
 */
export type TypeOfDaysMaskWps = TypeOfDaysMaskWps_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TypeOfDaysMaskWps */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfDaysMaskWps */
let _cached_decoder_for_TypeOfDaysMaskWps: $.ASN1Decoder<TypeOfDaysMaskWps> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfDaysMaskWps */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfDaysMaskWps */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfDaysMaskWps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfDaysMaskWps} The decoded data structure.
 */
export function _decode_TypeOfDaysMaskWps(el: _Element) {
    if (!_cached_decoder_for_TypeOfDaysMaskWps) {
        _cached_decoder_for_TypeOfDaysMaskWps = $._decodeSetOf<TypeOfDaysMaskWps_Item>(
            () => _decode_TypeOfDaysMaskWps_Item
        );
    }
    return _cached_decoder_for_TypeOfDaysMaskWps(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfDaysMaskWps */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfDaysMaskWps */
let _cached_encoder_for_TypeOfDaysMaskWps: $.ASN1Encoder<TypeOfDaysMaskWps> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfDaysMaskWps */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfDaysMaskWps */
/**
 * @summary Encodes a(n) TypeOfDaysMaskWps into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfDaysMaskWps, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfDaysMaskWps(
    value: TypeOfDaysMaskWps,
    elGetter: $.ASN1Encoder<TypeOfDaysMaskWps>
) {
    if (!_cached_encoder_for_TypeOfDaysMaskWps) {
        _cached_encoder_for_TypeOfDaysMaskWps = $._encodeSetOf<TypeOfDaysMaskWps_Item>(
            () => _encode_TypeOfDaysMaskWps_Item,
            $.BER
        );
    }
    return _cached_encoder_for_TypeOfDaysMaskWps(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfDaysMaskWps */

/* eslint-enable */
