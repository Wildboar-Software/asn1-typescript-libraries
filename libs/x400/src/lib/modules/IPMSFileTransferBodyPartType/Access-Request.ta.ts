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

/* START_OF_SYMBOL_DEFINITION Access_Request */
/**
 * @summary Access_Request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Access-Request  ::=  BIT STRING {
 *   read(0), insert(1), replace(2), extend(3), erase(4), read-attribute(5),
 *   change-attribute(6), delete-object(7)}
 * ```
 */
export type Access_Request = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Access_Request */

/* START_OF_SYMBOL_DEFINITION Access_Request_read */
/**
 * @summary Access_Request_read
 * @constant
 */
export const Access_Request_read: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_read */

/* START_OF_SYMBOL_DEFINITION read */
/**
 * @summary read
 * @constant
 */
export const read: number = Access_Request_read; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read */

/* START_OF_SYMBOL_DEFINITION Access_Request_insert */
/**
 * @summary Access_Request_insert
 * @constant
 */
export const Access_Request_insert: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_insert */

/* START_OF_SYMBOL_DEFINITION insert */
/**
 * @summary insert
 * @constant
 */
export const insert: number = Access_Request_insert; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION insert */

/* START_OF_SYMBOL_DEFINITION Access_Request_replace */
/**
 * @summary Access_Request_replace
 * @constant
 */
export const Access_Request_replace: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_replace */

/* START_OF_SYMBOL_DEFINITION replace */
/**
 * @summary replace
 * @constant
 */
export const replace: number = Access_Request_replace; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION replace */

/* START_OF_SYMBOL_DEFINITION Access_Request_extend */
/**
 * @summary Access_Request_extend
 * @constant
 */
export const Access_Request_extend: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_extend */

/* START_OF_SYMBOL_DEFINITION extend */
/**
 * @summary extend
 * @constant
 */
export const extend: number = Access_Request_extend; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION extend */

/* START_OF_SYMBOL_DEFINITION Access_Request_erase */
/**
 * @summary Access_Request_erase
 * @constant
 */
export const Access_Request_erase: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_erase */

/* START_OF_SYMBOL_DEFINITION erase */
/**
 * @summary erase
 * @constant
 */
export const erase: number = Access_Request_erase; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION erase */

/* START_OF_SYMBOL_DEFINITION Access_Request_read_attribute */
/**
 * @summary Access_Request_read_attribute
 * @constant
 */
export const Access_Request_read_attribute: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_read_attribute */

/* START_OF_SYMBOL_DEFINITION read_attribute */
/**
 * @summary read_attribute
 * @constant
 */
export const read_attribute: number = Access_Request_read_attribute; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION read_attribute */

/* START_OF_SYMBOL_DEFINITION Access_Request_change_attribute */
/**
 * @summary Access_Request_change_attribute
 * @constant
 */
export const Access_Request_change_attribute: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_change_attribute */

/* START_OF_SYMBOL_DEFINITION change_attribute */
/**
 * @summary change_attribute
 * @constant
 */
export const change_attribute: number = Access_Request_change_attribute; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION change_attribute */

/* START_OF_SYMBOL_DEFINITION Access_Request_delete_object */
/**
 * @summary Access_Request_delete_object
 * @constant
 */
export const Access_Request_delete_object: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Access_Request_delete_object */

/* START_OF_SYMBOL_DEFINITION delete_object */
/**
 * @summary delete_object
 * @constant
 */
export const delete_object: number = Access_Request_delete_object; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION delete_object */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Request */
let _cached_decoder_for_Access_Request: $.ASN1Decoder<Access_Request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Access_Request */

/* START_OF_SYMBOL_DEFINITION _decode_Access_Request */
/**
 * @summary Decodes an ASN.1 element into a(n) Access_Request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Access_Request} The decoded data structure.
 */
export function _decode_Access_Request(el: _Element) {
    if (!_cached_decoder_for_Access_Request) {
        _cached_decoder_for_Access_Request = $._decodeBitString;
    }
    return _cached_decoder_for_Access_Request(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Access_Request */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Request */
let _cached_encoder_for_Access_Request: $.ASN1Encoder<Access_Request> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Access_Request */

/* START_OF_SYMBOL_DEFINITION _encode_Access_Request */
/**
 * @summary Encodes a(n) Access_Request into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Access_Request, encoded as an ASN.1 Element.
 */
export function _encode_Access_Request(
    value: Access_Request,
    elGetter: $.ASN1Encoder<Access_Request>
) {
    if (!_cached_encoder_for_Access_Request) {
        _cached_encoder_for_Access_Request = $._encodeBitString;
    }
    return _cached_encoder_for_Access_Request(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Access_Request */

/* eslint-enable */
