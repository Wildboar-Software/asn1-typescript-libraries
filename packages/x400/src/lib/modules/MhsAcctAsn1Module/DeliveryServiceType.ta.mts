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

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType */
/**
 * @summary DeliveryServiceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryServiceType  ::=  INTEGER {
 *   mhs-delivery(0), physical-delivery(1), telex-delivery(2),
 *   teletex-delivery(3), g3-facsimile-delivery(4), g4-facsimile-delivery(5),
 *   videotex-delivery(6), telephone-delivery(7), other-delivery(8)}
 * ```
 */
export type DeliveryServiceType = INTEGER;
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_mhs_delivery */
/**
 * @summary DeliveryServiceType_mhs_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_mhs_delivery: DeliveryServiceType = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_mhs_delivery */

/* START_OF_SYMBOL_DEFINITION mhs_delivery */
/**
 * @summary DeliveryServiceType_mhs_delivery
 * @constant
 * @type {number}
 */
export const mhs_delivery: DeliveryServiceType = DeliveryServiceType_mhs_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION mhs_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_physical_delivery */
/**
 * @summary DeliveryServiceType_physical_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_physical_delivery: DeliveryServiceType = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_physical_delivery */

/* START_OF_SYMBOL_DEFINITION physical_delivery */
/**
 * @summary DeliveryServiceType_physical_delivery
 * @constant
 * @type {number}
 */
export const physical_delivery: DeliveryServiceType = DeliveryServiceType_physical_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION physical_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_telex_delivery */
/**
 * @summary DeliveryServiceType_telex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_telex_delivery: DeliveryServiceType = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_telex_delivery */

/* START_OF_SYMBOL_DEFINITION telex_delivery */
/**
 * @summary DeliveryServiceType_telex_delivery
 * @constant
 * @type {number}
 */
export const telex_delivery: DeliveryServiceType = DeliveryServiceType_telex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION telex_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_teletex_delivery */
/**
 * @summary DeliveryServiceType_teletex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_teletex_delivery: DeliveryServiceType = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_teletex_delivery */

/* START_OF_SYMBOL_DEFINITION teletex_delivery */
/**
 * @summary DeliveryServiceType_teletex_delivery
 * @constant
 * @type {number}
 */
export const teletex_delivery: DeliveryServiceType = DeliveryServiceType_teletex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION teletex_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_g3_facsimile_delivery */
/**
 * @summary DeliveryServiceType_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_g3_facsimile_delivery: DeliveryServiceType = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_g3_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION g3_facsimile_delivery */
/**
 * @summary DeliveryServiceType_g3_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g3_facsimile_delivery: DeliveryServiceType = DeliveryServiceType_g3_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION g3_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_g4_facsimile_delivery */
/**
 * @summary DeliveryServiceType_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_g4_facsimile_delivery: DeliveryServiceType = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_g4_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION g4_facsimile_delivery */
/**
 * @summary DeliveryServiceType_g4_facsimile_delivery
 * @constant
 * @type {number}
 */
export const g4_facsimile_delivery: DeliveryServiceType = DeliveryServiceType_g4_facsimile_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION g4_facsimile_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_videotex_delivery */
/**
 * @summary DeliveryServiceType_videotex_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_videotex_delivery: DeliveryServiceType = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_videotex_delivery */

/* START_OF_SYMBOL_DEFINITION videotex_delivery */
/**
 * @summary DeliveryServiceType_videotex_delivery
 * @constant
 * @type {number}
 */
export const videotex_delivery: DeliveryServiceType = DeliveryServiceType_videotex_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION videotex_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_telephone_delivery */
/**
 * @summary DeliveryServiceType_telephone_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_telephone_delivery: DeliveryServiceType = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_telephone_delivery */

/* START_OF_SYMBOL_DEFINITION telephone_delivery */
/**
 * @summary DeliveryServiceType_telephone_delivery
 * @constant
 * @type {number}
 */
export const telephone_delivery: DeliveryServiceType = DeliveryServiceType_telephone_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION telephone_delivery */

/* START_OF_SYMBOL_DEFINITION DeliveryServiceType_other_delivery */
/**
 * @summary DeliveryServiceType_other_delivery
 * @constant
 * @type {number}
 */
export const DeliveryServiceType_other_delivery: DeliveryServiceType = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DeliveryServiceType_other_delivery */

/* START_OF_SYMBOL_DEFINITION other_delivery */
/**
 * @summary DeliveryServiceType_other_delivery
 * @constant
 * @type {number}
 */
export const other_delivery: DeliveryServiceType = DeliveryServiceType_other_delivery; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION other_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryServiceType */
let _cached_decoder_for_DeliveryServiceType: $.ASN1Decoder<DeliveryServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryServiceType */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryServiceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryServiceType} The decoded data structure.
 */
export function _decode_DeliveryServiceType(el: _Element) {
    if (!_cached_decoder_for_DeliveryServiceType) {
        _cached_decoder_for_DeliveryServiceType = $._decodeInteger;
    }
    return _cached_decoder_for_DeliveryServiceType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryServiceType */
let _cached_encoder_for_DeliveryServiceType: $.ASN1Encoder<DeliveryServiceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryServiceType */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryServiceType */
/**
 * @summary Encodes a(n) DeliveryServiceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryServiceType, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryServiceType(
    value: DeliveryServiceType,
    elGetter: $.ASN1Encoder<DeliveryServiceType>
) {
    if (!_cached_encoder_for_DeliveryServiceType) {
        _cached_encoder_for_DeliveryServiceType = $._encodeInteger;
    }
    return _cached_encoder_for_DeliveryServiceType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryServiceType */

/* eslint-enable */
