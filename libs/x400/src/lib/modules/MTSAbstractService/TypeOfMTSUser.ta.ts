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

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser */
/**
 * @summary TypeOfMTSUser
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TypeOfMTSUser  ::=  INTEGER {
 *   public(0), private(1), ms(2), dl(3), pdau(4), physical-recipient(5), other(6)
 * }(0..ub-mts-user-types)
 * ```
 */
export type TypeOfMTSUser = INTEGER;
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser */

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser_public_ */
/**
 * @summary TypeOfMTSUser_public_
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_public_: TypeOfMTSUser = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser_public_ */

/* START_OF_SYMBOL_DEFINITION public_ */
/**
 * @summary TypeOfMTSUser_public_
 * @constant
 * @type {number}
 */
export const public_: TypeOfMTSUser = TypeOfMTSUser_public_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION public_ */

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser_private_ */
/**
 * @summary TypeOfMTSUser_private_
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_private_: TypeOfMTSUser = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser_private_ */

/* START_OF_SYMBOL_DEFINITION private_ */
/**
 * @summary TypeOfMTSUser_private_
 * @constant
 * @type {number}
 */
export const private_: TypeOfMTSUser = TypeOfMTSUser_private_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION private_ */

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser_ms */
/**
 * @summary TypeOfMTSUser_ms
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_ms: TypeOfMTSUser = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser_ms */

/* START_OF_SYMBOL_DEFINITION ms */
/**
 * @summary TypeOfMTSUser_ms
 * @constant
 * @type {number}
 */
export const ms: TypeOfMTSUser = TypeOfMTSUser_ms; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ms */

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser_dl */
/**
 * @summary TypeOfMTSUser_dl
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_dl: TypeOfMTSUser = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser_dl */

/* START_OF_SYMBOL_DEFINITION dl */
/**
 * @summary TypeOfMTSUser_dl
 * @constant
 * @type {number}
 */
export const dl: TypeOfMTSUser = TypeOfMTSUser_dl; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION dl */

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser_pdau */
/**
 * @summary TypeOfMTSUser_pdau
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_pdau: TypeOfMTSUser = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser_pdau */

/* START_OF_SYMBOL_DEFINITION pdau */
/**
 * @summary TypeOfMTSUser_pdau
 * @constant
 * @type {number}
 */
export const pdau: TypeOfMTSUser = TypeOfMTSUser_pdau; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION pdau */

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser_physical_recipient */
/**
 * @summary TypeOfMTSUser_physical_recipient
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_physical_recipient: TypeOfMTSUser = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser_physical_recipient */

/* START_OF_SYMBOL_DEFINITION physical_recipient */
/**
 * @summary TypeOfMTSUser_physical_recipient
 * @constant
 * @type {number}
 */
export const physical_recipient: TypeOfMTSUser = TypeOfMTSUser_physical_recipient; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_recipient */

/* START_OF_SYMBOL_DEFINITION TypeOfMTSUser_other */
/**
 * @summary TypeOfMTSUser_other
 * @constant
 * @type {number}
 */
export const TypeOfMTSUser_other: TypeOfMTSUser = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TypeOfMTSUser_other */

/* START_OF_SYMBOL_DEFINITION other */
/**
 * @summary TypeOfMTSUser_other
 * @constant
 * @type {number}
 */
export const other: TypeOfMTSUser = TypeOfMTSUser_other; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION other */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfMTSUser */
let _cached_decoder_for_TypeOfMTSUser: $.ASN1Decoder<TypeOfMTSUser> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TypeOfMTSUser */

/* START_OF_SYMBOL_DEFINITION _decode_TypeOfMTSUser */
/**
 * @summary Decodes an ASN.1 element into a(n) TypeOfMTSUser
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TypeOfMTSUser} The decoded data structure.
 */
export function _decode_TypeOfMTSUser(el: _Element) {
    if (!_cached_decoder_for_TypeOfMTSUser) {
        _cached_decoder_for_TypeOfMTSUser = $._decodeInteger;
    }
    return _cached_decoder_for_TypeOfMTSUser(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TypeOfMTSUser */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfMTSUser */
let _cached_encoder_for_TypeOfMTSUser: $.ASN1Encoder<TypeOfMTSUser> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TypeOfMTSUser */

/* START_OF_SYMBOL_DEFINITION _encode_TypeOfMTSUser */
/**
 * @summary Encodes a(n) TypeOfMTSUser into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TypeOfMTSUser, encoded as an ASN.1 Element.
 */
export function _encode_TypeOfMTSUser(
    value: TypeOfMTSUser,
    elGetter: $.ASN1Encoder<TypeOfMTSUser>
) {
    if (!_cached_encoder_for_TypeOfMTSUser) {
        _cached_encoder_for_TypeOfMTSUser = $._encodeInteger;
    }
    return _cached_encoder_for_TypeOfMTSUser(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TypeOfMTSUser */

/* eslint-enable */
