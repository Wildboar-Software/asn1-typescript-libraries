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
    TCMessage,
    _decode_TCMessage,
    _encode_TCMessage,
} from '../TCAPMessages/TCMessage.ta';
export {
    TCMessage,
    _decode_TCMessage,
    _encode_TCMessage,
} from '../TCAPMessages/TCMessage.ta';

/* START_OF_SYMBOL_DEFINITION TCSingleAS */
/**
 * @summary TCSingleAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCSingleAS{OPERATION-PACKAGE:package}  ::=
 *   TCMessage{{AllOperations  {package}}, {AllOperations  {package}}}
 * ```
 */
export type TCSingleAS = TCMessage; // DefinedType
/* END_OF_SYMBOL_DEFINITION TCSingleAS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCSingleAS */
let _cached_decoder_for_TCSingleAS: $.ASN1Decoder<TCSingleAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCSingleAS */

/* START_OF_SYMBOL_DEFINITION _decode_TCSingleAS */
/**
 * @summary Decodes an ASN.1 element into a(n) TCSingleAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCSingleAS} The decoded data structure.
 */
export function _decode_TCSingleAS(el: _Element) {
    if (!_cached_decoder_for_TCSingleAS) {
        _cached_decoder_for_TCSingleAS = _decode_TCMessage;
    }
    return _cached_decoder_for_TCSingleAS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCSingleAS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCSingleAS */
let _cached_encoder_for_TCSingleAS: $.ASN1Encoder<TCSingleAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCSingleAS */

/* START_OF_SYMBOL_DEFINITION _encode_TCSingleAS */
/**
 * @summary Encodes a(n) TCSingleAS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCSingleAS, encoded as an ASN.1 Element.
 */
export function _encode_TCSingleAS(
    value: TCSingleAS,
    elGetter: $.ASN1Encoder<TCSingleAS>
) {
    if (!_cached_encoder_for_TCSingleAS) {
        _cached_encoder_for_TCSingleAS = _encode_TCMessage;
    }
    return _cached_encoder_for_TCSingleAS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCSingleAS */

/* eslint-enable */
