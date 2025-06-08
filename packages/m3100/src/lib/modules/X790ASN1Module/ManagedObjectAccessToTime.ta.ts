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
    StopTime,
    _decode_StopTime,
    _encode_StopTime,
} from '../X790ASN1Module/StopTime.ta';
export {
    StopTime,
    _decode_StopTime,
    _encode_StopTime,
} from '../X790ASN1Module/StopTime.ta';

/* START_OF_SYMBOL_DEFINITION ManagedObjectAccessToTime */
/**
 * @summary ManagedObjectAccessToTime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectAccessToTime  ::=  StopTime
 * ```
 */
export type ManagedObjectAccessToTime = StopTime; // DefinedType
/* END_OF_SYMBOL_DEFINITION ManagedObjectAccessToTime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectAccessToTime */
let _cached_decoder_for_ManagedObjectAccessToTime: $.ASN1Decoder<ManagedObjectAccessToTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectAccessToTime */

/* START_OF_SYMBOL_DEFINITION _decode_ManagedObjectAccessToTime */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectAccessToTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectAccessToTime} The decoded data structure.
 */
export function _decode_ManagedObjectAccessToTime(el: _Element) {
    if (!_cached_decoder_for_ManagedObjectAccessToTime) {
        _cached_decoder_for_ManagedObjectAccessToTime = _decode_StopTime;
    }
    return _cached_decoder_for_ManagedObjectAccessToTime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagedObjectAccessToTime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectAccessToTime */
let _cached_encoder_for_ManagedObjectAccessToTime: $.ASN1Encoder<ManagedObjectAccessToTime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectAccessToTime */

/* START_OF_SYMBOL_DEFINITION _encode_ManagedObjectAccessToTime */
/**
 * @summary Encodes a(n) ManagedObjectAccessToTime into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectAccessToTime, encoded as an ASN.1 Element.
 */
export function _encode_ManagedObjectAccessToTime(
    value: ManagedObjectAccessToTime,
    elGetter: $.ASN1Encoder<ManagedObjectAccessToTime>
) {
    if (!_cached_encoder_for_ManagedObjectAccessToTime) {
        _cached_encoder_for_ManagedObjectAccessToTime = _encode_StopTime;
    }
    return _cached_encoder_for_ManagedObjectAccessToTime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagedObjectAccessToTime */

/* eslint-enable */
