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
} from '../X790ASN1Module/WeekMask.ta.mjs';
export {
    WeekMask,
    _decode_WeekMask,
    _encode_WeekMask,
} from '../X790ASN1Module/WeekMask.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ManagedObjectAccessHours */
/**
 * @summary ManagedObjectAccessHours
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectAccessHours  ::=  SET OF WeekMask
 * ```
 */
export type ManagedObjectAccessHours = WeekMask[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ManagedObjectAccessHours */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectAccessHours */
let _cached_decoder_for_ManagedObjectAccessHours: $.ASN1Decoder<ManagedObjectAccessHours> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectAccessHours */

/* START_OF_SYMBOL_DEFINITION _decode_ManagedObjectAccessHours */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectAccessHours
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectAccessHours} The decoded data structure.
 */
export function _decode_ManagedObjectAccessHours(el: _Element) {
    if (!_cached_decoder_for_ManagedObjectAccessHours) {
        _cached_decoder_for_ManagedObjectAccessHours = $._decodeSetOf<WeekMask>(
            () => _decode_WeekMask
        );
    }
    return _cached_decoder_for_ManagedObjectAccessHours(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagedObjectAccessHours */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectAccessHours */
let _cached_encoder_for_ManagedObjectAccessHours: $.ASN1Encoder<ManagedObjectAccessHours> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectAccessHours */

/* START_OF_SYMBOL_DEFINITION _encode_ManagedObjectAccessHours */
/**
 * @summary Encodes a(n) ManagedObjectAccessHours into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectAccessHours, encoded as an ASN.1 Element.
 */
export function _encode_ManagedObjectAccessHours(
    value: ManagedObjectAccessHours,
    elGetter: $.ASN1Encoder<ManagedObjectAccessHours>
) {
    if (!_cached_encoder_for_ManagedObjectAccessHours) {
        _cached_encoder_for_ManagedObjectAccessHours = $._encodeSetOf<WeekMask>(
            () => _encode_WeekMask,
            $.BER
        );
    }
    return _cached_encoder_for_ManagedObjectAccessHours(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagedObjectAccessHours */

/* eslint-enable */
