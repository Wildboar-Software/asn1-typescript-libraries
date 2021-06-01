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
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta';
export {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from '../MTSAbstractService/ORAddress.ta';

/* START_OF_SYMBOL_DEFINITION OriginatorReturnAddress */
/**
 * @summary OriginatorReturnAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorReturnAddress  ::=  ORAddress
 * ```
 */
export type OriginatorReturnAddress = ORAddress; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatorReturnAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorReturnAddress */
let _cached_decoder_for_OriginatorReturnAddress: $.ASN1Decoder<OriginatorReturnAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorReturnAddress */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorReturnAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorReturnAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorReturnAddress} The decoded data structure.
 */
export function _decode_OriginatorReturnAddress(el: _Element) {
    if (!_cached_decoder_for_OriginatorReturnAddress) {
        _cached_decoder_for_OriginatorReturnAddress = _decode_ORAddress;
    }
    return _cached_decoder_for_OriginatorReturnAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorReturnAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorReturnAddress */
let _cached_encoder_for_OriginatorReturnAddress: $.ASN1Encoder<OriginatorReturnAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorReturnAddress */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorReturnAddress */
/**
 * @summary Encodes a(n) OriginatorReturnAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorReturnAddress, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorReturnAddress(
    value: OriginatorReturnAddress,
    elGetter: $.ASN1Encoder<OriginatorReturnAddress>
) {
    if (!_cached_encoder_for_OriginatorReturnAddress) {
        _cached_encoder_for_OriginatorReturnAddress = _encode_ORAddress;
    }
    return _cached_encoder_for_OriginatorReturnAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorReturnAddress */

/* eslint-enable */
