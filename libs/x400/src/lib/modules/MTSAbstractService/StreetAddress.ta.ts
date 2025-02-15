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
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta';
export {
    PDSParameter,
    _decode_PDSParameter,
    _encode_PDSParameter,
} from '../MTSAbstractService/PDSParameter.ta';

/* START_OF_SYMBOL_DEFINITION StreetAddress */
/**
 * @summary StreetAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * StreetAddress  ::=  PDSParameter
 * ```
 */
export type StreetAddress = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION StreetAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_StreetAddress */
let _cached_decoder_for_StreetAddress: $.ASN1Decoder<StreetAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_StreetAddress */

/* START_OF_SYMBOL_DEFINITION _decode_StreetAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) StreetAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {StreetAddress} The decoded data structure.
 */
export function _decode_StreetAddress(el: _Element) {
    if (!_cached_decoder_for_StreetAddress) {
        _cached_decoder_for_StreetAddress = _decode_PDSParameter;
    }
    return _cached_decoder_for_StreetAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_StreetAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_StreetAddress */
let _cached_encoder_for_StreetAddress: $.ASN1Encoder<StreetAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_StreetAddress */

/* START_OF_SYMBOL_DEFINITION _encode_StreetAddress */
/**
 * @summary Encodes a(n) StreetAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreetAddress, encoded as an ASN.1 Element.
 */
export function _encode_StreetAddress(
    value: StreetAddress,
    elGetter: $.ASN1Encoder<StreetAddress>
) {
    if (!_cached_encoder_for_StreetAddress) {
        _cached_encoder_for_StreetAddress = _encode_PDSParameter;
    }
    return _cached_encoder_for_StreetAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_StreetAddress */

/* eslint-enable */
