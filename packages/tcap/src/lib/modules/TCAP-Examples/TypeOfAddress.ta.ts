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

/* START_OF_SYMBOL_DEFINITION _enum_for_TypeOfAddress */
/**
 * @summary TypeOfAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfAddress  ::=  ENUMERATED {national(0), international(1), private(2)}
 * ```@enum {number}
 */
export enum _enum_for_TypeOfAddress {
    national = 0,
    international = 1,
    private_ = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress */
/**
 * @summary TypeOfAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfAddress  ::=  ENUMERATED {national(0), international(1), private(2)}
 * ```@enum {number}
 */
export type TypeOfAddress = _enum_for_TypeOfAddress;
/* END_OF_SYMBOL_DEFINITION TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress */
/**
 * @summary TypeOfAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfAddress  ::=  ENUMERATED {national(0), international(1), private(2)}
 * ```@enum {number}
 */
export const TypeOfAddress = _enum_for_TypeOfAddress;
/* END_OF_SYMBOL_DEFINITION TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress_national */
/**
 * @summary TypeOfAddress_national
 * @constant
 * @type {number}
 */
export const TypeOfAddress_national: TypeOfAddress =
    TypeOfAddress.national; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfAddress_national */

/* START_OF_SYMBOL_DEFINITION national */
/**
 * @summary national
 * @constant
 * @type {number}
 */
export const national: TypeOfAddress =
    TypeOfAddress.national; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION national */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress_international */
/**
 * @summary TypeOfAddress_international
 * @constant
 * @type {number}
 */
export const TypeOfAddress_international: TypeOfAddress =
    TypeOfAddress.international; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfAddress_international */

/* START_OF_SYMBOL_DEFINITION international */
/**
 * @summary international
 * @constant
 * @type {number}
 */
export const international: TypeOfAddress =
    TypeOfAddress.international; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION international */

/* START_OF_SYMBOL_DEFINITION TypeOfAddress_private_ */
/**
 * @summary TypeOfAddress_private_
 * @constant
 * @type {number}
 */
export const TypeOfAddress_private_: TypeOfAddress =
    TypeOfAddress.private_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfAddress_private_ */

/* START_OF_SYMBOL_DEFINITION private_ */
/**
 * @summary private_
 * @constant
 * @type {number}
 */
export const private_: TypeOfAddress =
    TypeOfAddress.private_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION private_ */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfAddress */
let _cached_decoder_for_TypeOfAddress: $.ASN1Decoder<TypeOfAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfAddress} The decoded data structure.
 */
export function _decode_TypeOfAddress(el: _Element) {
    if (!_cached_decoder_for_TypeOfAddress) {
        _cached_decoder_for_TypeOfAddress = $._decodeEnumerated;
    }
    return _cached_decoder_for_TypeOfAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfAddress */
let _cached_encoder_for_TypeOfAddress: $.ASN1Encoder<TypeOfAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfAddress */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfAddress */
/**
 * @summary Encodes a(n) TypeOfAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfAddress, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfAddress(
    value: TypeOfAddress,
    elGetter: $.ASN1Encoder<TypeOfAddress>
) {
    if (!_cached_encoder_for_TypeOfAddress) {
        _cached_encoder_for_TypeOfAddress = $._encodeEnumerated;
    }
    return _cached_encoder_for_TypeOfAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfAddress */

/* eslint-enable */
