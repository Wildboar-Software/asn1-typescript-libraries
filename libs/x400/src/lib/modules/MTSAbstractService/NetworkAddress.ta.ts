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
    X121Address,
    _decode_X121Address,
    _encode_X121Address,
} from '../MTSAbstractService/X121Address.ta';
export {
    X121Address,
    _decode_X121Address,
    _encode_X121Address,
} from '../MTSAbstractService/X121Address.ta';

/* START_OF_SYMBOL_DEFINITION NetworkAddress */
/**
 * @summary NetworkAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NetworkAddress  ::=  X121Address
 * ```
 */
export type NetworkAddress = X121Address; // DefinedType
/* END_OF_SYMBOL_DEFINITION NetworkAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NetworkAddress */
let _cached_decoder_for_NetworkAddress: $.ASN1Decoder<NetworkAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NetworkAddress */

/* START_OF_SYMBOL_DEFINITION _decode_NetworkAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NetworkAddress} The decoded data structure.
 */
export function _decode_NetworkAddress(el: _Element) {
    if (!_cached_decoder_for_NetworkAddress) {
        _cached_decoder_for_NetworkAddress = _decode_X121Address;
    }
    return _cached_decoder_for_NetworkAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NetworkAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NetworkAddress */
let _cached_encoder_for_NetworkAddress: $.ASN1Encoder<NetworkAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NetworkAddress */

/* START_OF_SYMBOL_DEFINITION _encode_NetworkAddress */
/**
 * @summary Encodes a(n) NetworkAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress, encoded as an ASN.1 Element.
 */
export function _encode_NetworkAddress(
    value: NetworkAddress,
    elGetter: $.ASN1Encoder<NetworkAddress>
) {
    if (!_cached_encoder_for_NetworkAddress) {
        _cached_encoder_for_NetworkAddress = _encode_X121Address;
    }
    return _cached_encoder_for_NetworkAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NetworkAddress */

/* eslint-enable */
