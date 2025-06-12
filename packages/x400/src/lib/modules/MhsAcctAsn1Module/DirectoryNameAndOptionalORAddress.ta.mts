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
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
export {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DirectoryNameAndOptionalORAddress */
/**
 * @summary DirectoryNameAndOptionalORAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryNameAndOptionalORAddress  ::=  ORName
 * ```
 */
export type DirectoryNameAndOptionalORAddress = ORName; // DefinedType
/* END_OF_SYMBOL_DEFINITION DirectoryNameAndOptionalORAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryNameAndOptionalORAddress */
let _cached_decoder_for_DirectoryNameAndOptionalORAddress: $.ASN1Decoder<DirectoryNameAndOptionalORAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DirectoryNameAndOptionalORAddress */

/* START_OF_SYMBOL_DEFINITION _decode_DirectoryNameAndOptionalORAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryNameAndOptionalORAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryNameAndOptionalORAddress} The decoded data structure.
 */
export function _decode_DirectoryNameAndOptionalORAddress(el: _Element) {
    if (!_cached_decoder_for_DirectoryNameAndOptionalORAddress) {
        _cached_decoder_for_DirectoryNameAndOptionalORAddress = _decode_ORName;
    }
    return _cached_decoder_for_DirectoryNameAndOptionalORAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DirectoryNameAndOptionalORAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryNameAndOptionalORAddress */
let _cached_encoder_for_DirectoryNameAndOptionalORAddress: $.ASN1Encoder<DirectoryNameAndOptionalORAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DirectoryNameAndOptionalORAddress */

/* START_OF_SYMBOL_DEFINITION _encode_DirectoryNameAndOptionalORAddress */
/**
 * @summary Encodes a(n) DirectoryNameAndOptionalORAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryNameAndOptionalORAddress, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryNameAndOptionalORAddress(
    value: DirectoryNameAndOptionalORAddress,
    elGetter: $.ASN1Encoder<DirectoryNameAndOptionalORAddress>
) {
    if (!_cached_encoder_for_DirectoryNameAndOptionalORAddress) {
        _cached_encoder_for_DirectoryNameAndOptionalORAddress = _encode_ORName;
    }
    return _cached_encoder_for_DirectoryNameAndOptionalORAddress(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DirectoryNameAndOptionalORAddress */

/* eslint-enable */
