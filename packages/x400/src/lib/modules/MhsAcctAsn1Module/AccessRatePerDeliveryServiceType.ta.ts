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

/* START_OF_SYMBOL_DEFINITION AccessRatePerDeliveryServiceType */
/**
 * @summary AccessRatePerDeliveryServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessRatePerDeliveryServiceType  ::=  SET OF REAL
 * ```
 */
export type AccessRatePerDeliveryServiceType = REAL[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AccessRatePerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessRatePerDeliveryServiceType */
let _cached_decoder_for_AccessRatePerDeliveryServiceType: $.ASN1Decoder<AccessRatePerDeliveryServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AccessRatePerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _decode_AccessRatePerDeliveryServiceType */
/**
 * @summary Decodes an ASN.1 element into a(n) AccessRatePerDeliveryServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AccessRatePerDeliveryServiceType} The decoded data structure.
 */
export function _decode_AccessRatePerDeliveryServiceType(el: _Element) {
    if (!_cached_decoder_for_AccessRatePerDeliveryServiceType) {
        _cached_decoder_for_AccessRatePerDeliveryServiceType = $._decodeSetOf<REAL>(
            () => $._decodeReal
        );
    }
    return _cached_decoder_for_AccessRatePerDeliveryServiceType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AccessRatePerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessRatePerDeliveryServiceType */
let _cached_encoder_for_AccessRatePerDeliveryServiceType: $.ASN1Encoder<AccessRatePerDeliveryServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AccessRatePerDeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _encode_AccessRatePerDeliveryServiceType */
/**
 * @summary Encodes a(n) AccessRatePerDeliveryServiceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessRatePerDeliveryServiceType, encoded as an ASN.1 Element.
 */
export function _encode_AccessRatePerDeliveryServiceType(
    value: AccessRatePerDeliveryServiceType,
    elGetter: $.ASN1Encoder<AccessRatePerDeliveryServiceType>
) {
    if (!_cached_encoder_for_AccessRatePerDeliveryServiceType) {
        _cached_encoder_for_AccessRatePerDeliveryServiceType = $._encodeSetOf<REAL>(
            () => $._encodeReal,
            $.BER
        );
    }
    return _cached_encoder_for_AccessRatePerDeliveryServiceType(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AccessRatePerDeliveryServiceType */

/* eslint-enable */
