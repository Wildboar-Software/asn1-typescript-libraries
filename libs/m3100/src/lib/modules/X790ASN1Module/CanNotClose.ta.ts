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

/* START_OF_SYMBOL_DEFINITION CanNotClose */
/**
 * @summary CanNotClose
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CanNotClose  ::=  INTEGER {alreadyCleared(0)}
 * ```
 */
export type CanNotClose = INTEGER;
/* END_OF_SYMBOL_DEFINITION CanNotClose */

/* START_OF_SYMBOL_DEFINITION CanNotClose_alreadyCleared */
/**
 * @summary CanNotClose_alreadyCleared
 * @constant
 * @type {number}
 */
export const CanNotClose_alreadyCleared: CanNotClose = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION CanNotClose_alreadyCleared */

/* START_OF_SYMBOL_DEFINITION alreadyCleared */
/**
 * @summary CanNotClose_alreadyCleared
 * @constant
 * @type {number}
 */
export const alreadyCleared: CanNotClose = CanNotClose_alreadyCleared; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION alreadyCleared */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CanNotClose */
let _cached_decoder_for_CanNotClose: $.ASN1Decoder<CanNotClose> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CanNotClose */

/* START_OF_SYMBOL_DEFINITION _decode_CanNotClose */
/**
 * @summary Decodes an ASN.1 element into a(n) CanNotClose
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CanNotClose} The decoded data structure.
 */
export function _decode_CanNotClose(el: _Element) {
    if (!_cached_decoder_for_CanNotClose) {
        _cached_decoder_for_CanNotClose = $._decodeInteger;
    }
    return _cached_decoder_for_CanNotClose(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CanNotClose */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CanNotClose */
let _cached_encoder_for_CanNotClose: $.ASN1Encoder<CanNotClose> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CanNotClose */

/* START_OF_SYMBOL_DEFINITION _encode_CanNotClose */
/**
 * @summary Encodes a(n) CanNotClose into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CanNotClose, encoded as an ASN.1 Element.
 */
export function _encode_CanNotClose(
    value: CanNotClose,
    elGetter: $.ASN1Encoder<CanNotClose>
) {
    if (!_cached_encoder_for_CanNotClose) {
        _cached_encoder_for_CanNotClose = $._encodeInteger;
    }
    return _cached_encoder_for_CanNotClose(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CanNotClose */

/* eslint-enable */
