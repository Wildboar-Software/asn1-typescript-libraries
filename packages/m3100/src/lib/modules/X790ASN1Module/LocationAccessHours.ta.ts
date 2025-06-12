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
    WeekMask,
    _decode_WeekMask,
    _encode_WeekMask,
} from '../X790ASN1Module/WeekMask.ta.js';
export {
    WeekMask,
    _decode_WeekMask,
    _encode_WeekMask,
} from '../X790ASN1Module/WeekMask.ta.js';

/* START_OF_SYMBOL_DEFINITION LocationAccessHours */
/**
 * @summary LocationAccessHours
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocationAccessHours  ::=  SET OF WeekMask
 * ```
 */
export type LocationAccessHours = WeekMask[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION LocationAccessHours */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LocationAccessHours */
let _cached_decoder_for_LocationAccessHours: $.ASN1Decoder<LocationAccessHours> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LocationAccessHours */

/* START_OF_SYMBOL_DEFINITION _decode_LocationAccessHours */
/**
 * @summary Decodes an ASN.1 element into a(n) LocationAccessHours
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocationAccessHours} The decoded data structure.
 */
export function _decode_LocationAccessHours(el: _Element) {
    if (!_cached_decoder_for_LocationAccessHours) {
        _cached_decoder_for_LocationAccessHours = $._decodeSetOf<WeekMask>(
            () => _decode_WeekMask
        );
    }
    return _cached_decoder_for_LocationAccessHours(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LocationAccessHours */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LocationAccessHours */
let _cached_encoder_for_LocationAccessHours: $.ASN1Encoder<LocationAccessHours> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LocationAccessHours */

/* START_OF_SYMBOL_DEFINITION _encode_LocationAccessHours */
/**
 * @summary Encodes a(n) LocationAccessHours into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAccessHours, encoded as an ASN.1 Element.
 */
export function _encode_LocationAccessHours(
    value: LocationAccessHours,
    elGetter: $.ASN1Encoder<LocationAccessHours>
) {
    if (!_cached_encoder_for_LocationAccessHours) {
        _cached_encoder_for_LocationAccessHours = $._encodeSetOf<WeekMask>(
            () => _encode_WeekMask,
            $.BER
        );
    }
    return _cached_encoder_for_LocationAccessHours(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LocationAccessHours */

/* eslint-enable */
