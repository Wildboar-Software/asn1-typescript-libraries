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

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item */
/**
 * @summary RequestedDeliveryMethod_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedDeliveryMethod-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type RequestedDeliveryMethod_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_any_delivery_method */
/**
 * @summary RequestedDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_any_delivery_method: RequestedDeliveryMethod_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_any_delivery_method */

/* START_OF_SYMBOL_DEFINITION any_delivery_method */
/**
 * @summary RequestedDeliveryMethod_Item_any_delivery_method
 * @constant
 * @type {number}
 */
export const any_delivery_method: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_any_delivery_method; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION any_delivery_method */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_mhs_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_mhs_delivery: RequestedDeliveryMethod_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_mhs_delivery */

/* START_OF_SYMBOL_DEFINITION mhs_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_mhs_delivery
 * @constant
 * @type {number}
 */
export const mhs_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mhs_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_physical_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_physical_delivery: RequestedDeliveryMethod_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_physical_delivery */

/* START_OF_SYMBOL_DEFINITION physical_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_physical_delivery
 * @constant
 * @type {number}
 */
export const physical_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_telex_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_telex_delivery: RequestedDeliveryMethod_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_telex_delivery */

/* START_OF_SYMBOL_DEFINITION telex_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_telex_delivery
 * @constant
 * @type {number}
 */
export const telex_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION telex_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_teletex_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_teletex_delivery: RequestedDeliveryMethod_Item = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_teletex_delivery */

/* START_OF_SYMBOL_DEFINITION teletex_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_teletex_delivery
 * @constant
 * @type {number}
 */
export const teletex_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION teletex_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_g3_facsimile_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_g3_facsimile_delivery: RequestedDeliveryMethod_Item = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_g3_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION g3_facsimile_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g3_facsimile_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION g3_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_g4_facsimile_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_g4_facsimile_delivery: RequestedDeliveryMethod_Item = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_g4_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION g4_facsimile_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g4_facsimile_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION g4_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_ia5_terminal_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_ia5_terminal_delivery: RequestedDeliveryMethod_Item = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_ia5_terminal_delivery */

/* START_OF_SYMBOL_DEFINITION ia5_terminal_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_ia5_terminal_delivery
 * @constant
 * @type {number}
 */
export const ia5_terminal_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_ia5_terminal_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ia5_terminal_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_videotex_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_videotex_delivery: RequestedDeliveryMethod_Item = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_videotex_delivery */

/* START_OF_SYMBOL_DEFINITION videotex_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_videotex_delivery
 * @constant
 * @type {number}
 */
export const videotex_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION videotex_delivery */

/* START_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_telephone_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const RequestedDeliveryMethod_Item_telephone_delivery: RequestedDeliveryMethod_Item = 9; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RequestedDeliveryMethod_Item_telephone_delivery */

/* START_OF_SYMBOL_DEFINITION telephone_delivery */
/**
 * @summary RequestedDeliveryMethod_Item_telephone_delivery
 * @constant
 * @type {number}
 */
export const telephone_delivery: RequestedDeliveryMethod_Item = RequestedDeliveryMethod_Item_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION telephone_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestedDeliveryMethod_Item */
let _cached_decoder_for_RequestedDeliveryMethod_Item: $.ASN1Decoder<RequestedDeliveryMethod_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RequestedDeliveryMethod_Item */

/* START_OF_SYMBOL_DEFINITION _decode_RequestedDeliveryMethod_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) RequestedDeliveryMethod_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestedDeliveryMethod_Item} The decoded data structure.
 */
export function _decode_RequestedDeliveryMethod_Item(el: _Element) {
    if (!_cached_decoder_for_RequestedDeliveryMethod_Item) {
        _cached_decoder_for_RequestedDeliveryMethod_Item = $._decodeInteger;
    }
    return _cached_decoder_for_RequestedDeliveryMethod_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RequestedDeliveryMethod_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestedDeliveryMethod_Item */
let _cached_encoder_for_RequestedDeliveryMethod_Item: $.ASN1Encoder<RequestedDeliveryMethod_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RequestedDeliveryMethod_Item */

/* START_OF_SYMBOL_DEFINITION _encode_RequestedDeliveryMethod_Item */
/**
 * @summary Encodes a(n) RequestedDeliveryMethod_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestedDeliveryMethod_Item, encoded as an ASN.1 Element.
 */
export function _encode_RequestedDeliveryMethod_Item(
    value: RequestedDeliveryMethod_Item,
    elGetter: $.ASN1Encoder<RequestedDeliveryMethod_Item>
) {
    if (!_cached_encoder_for_RequestedDeliveryMethod_Item) {
        _cached_encoder_for_RequestedDeliveryMethod_Item = $._encodeInteger;
    }
    return _cached_encoder_for_RequestedDeliveryMethod_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RequestedDeliveryMethod_Item */

/* eslint-enable */
