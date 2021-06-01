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

/* START_OF_SYMBOL_DEFINITION _enum_for_EDIMSEntryType */
/**
 * @summary EDIMSEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```@enum {number}
 */
export enum _enum_for_EDIMSEntryType {
    edim = 0,
    pn = 1,
    nn = 2,
    fn = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EDIMSEntryType */

/* START_OF_SYMBOL_DEFINITION EDIMSEntryType */
/**
 * @summary EDIMSEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```@enum {number}
 */
export type EDIMSEntryType = _enum_for_EDIMSEntryType;
/* END_OF_SYMBOL_DEFINITION EDIMSEntryType */

/* START_OF_SYMBOL_DEFINITION EDIMSEntryType */
/**
 * @summary EDIMSEntryType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSEntryType  ::=  ENUMERATED {edim(0), pn(1), nn(2), fn(3)}
 * ```@enum {number}
 */
export const EDIMSEntryType = _enum_for_EDIMSEntryType;
/* END_OF_SYMBOL_DEFINITION EDIMSEntryType */

/* START_OF_SYMBOL_DEFINITION EDIMSEntryType_edim */
/**
 * @summary EDIMSEntryType_edim
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_edim: EDIMSEntryType =
    EDIMSEntryType.edim; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDIMSEntryType_edim */

/* START_OF_SYMBOL_DEFINITION edim */
/**
 * @summary edim
 * @constant
 * @type {number}
 */
export const edim: EDIMSEntryType =
    EDIMSEntryType.edim; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION edim */

/* START_OF_SYMBOL_DEFINITION EDIMSEntryType_pn */
/**
 * @summary EDIMSEntryType_pn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_pn: EDIMSEntryType =
    EDIMSEntryType.pn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDIMSEntryType_pn */

/* START_OF_SYMBOL_DEFINITION pn */
/**
 * @summary pn
 * @constant
 * @type {number}
 */
export const pn: EDIMSEntryType =
    EDIMSEntryType.pn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pn */

/* START_OF_SYMBOL_DEFINITION EDIMSEntryType_nn */
/**
 * @summary EDIMSEntryType_nn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_nn: EDIMSEntryType =
    EDIMSEntryType.nn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDIMSEntryType_nn */

/* START_OF_SYMBOL_DEFINITION nn */
/**
 * @summary nn
 * @constant
 * @type {number}
 */
export const nn: EDIMSEntryType =
    EDIMSEntryType.nn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nn */

/* START_OF_SYMBOL_DEFINITION EDIMSEntryType_fn */
/**
 * @summary EDIMSEntryType_fn
 * @constant
 * @type {number}
 */
export const EDIMSEntryType_fn: EDIMSEntryType =
    EDIMSEntryType.fn; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EDIMSEntryType_fn */

/* START_OF_SYMBOL_DEFINITION fn */
/**
 * @summary fn
 * @constant
 * @type {number}
 */
export const fn: EDIMSEntryType =
    EDIMSEntryType.fn; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION fn */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMSEntryType */
let _cached_decoder_for_EDIMSEntryType: $.ASN1Decoder<EDIMSEntryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMSEntryType */

/* START_OF_SYMBOL_DEFINITION _decode_EDIMSEntryType */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIMSEntryType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMSEntryType} The decoded data structure.
 */
export function _decode_EDIMSEntryType(el: _Element) {
    if (!_cached_decoder_for_EDIMSEntryType) {
        _cached_decoder_for_EDIMSEntryType = $._decodeEnumerated;
    }
    return _cached_decoder_for_EDIMSEntryType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIMSEntryType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMSEntryType */
let _cached_encoder_for_EDIMSEntryType: $.ASN1Encoder<EDIMSEntryType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMSEntryType */

/* START_OF_SYMBOL_DEFINITION _encode_EDIMSEntryType */
/**
 * @summary Encodes a(n) EDIMSEntryType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMSEntryType, encoded as an ASN.1 Element.
 */
export function _encode_EDIMSEntryType(
    value: EDIMSEntryType,
    elGetter: $.ASN1Encoder<EDIMSEntryType>
) {
    if (!_cached_encoder_for_EDIMSEntryType) {
        _cached_encoder_for_EDIMSEntryType = $._encodeEnumerated;
    }
    return _cached_encoder_for_EDIMSEntryType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIMSEntryType */

/* eslint-enable */
