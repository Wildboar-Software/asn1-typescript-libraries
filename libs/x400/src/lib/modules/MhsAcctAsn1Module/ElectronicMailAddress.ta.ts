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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';
export {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta';

/* START_OF_SYMBOL_DEFINITION ElectronicMailAddress */
/**
 * @summary ElectronicMailAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ElectronicMailAddress  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type ElectronicMailAddress = ORAddressAndOptionalDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ElectronicMailAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ElectronicMailAddress */
let _cached_decoder_for_ElectronicMailAddress: $.ASN1Decoder<ElectronicMailAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ElectronicMailAddress */

/* START_OF_SYMBOL_DEFINITION _decode_ElectronicMailAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) ElectronicMailAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ElectronicMailAddress} The decoded data structure.
 */
export function _decode_ElectronicMailAddress(el: _Element) {
    if (!_cached_decoder_for_ElectronicMailAddress) {
        _cached_decoder_for_ElectronicMailAddress = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_ElectronicMailAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ElectronicMailAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ElectronicMailAddress */
let _cached_encoder_for_ElectronicMailAddress: $.ASN1Encoder<ElectronicMailAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ElectronicMailAddress */

/* START_OF_SYMBOL_DEFINITION _encode_ElectronicMailAddress */
/**
 * @summary Encodes a(n) ElectronicMailAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElectronicMailAddress, encoded as an ASN.1 Element.
 */
export function _encode_ElectronicMailAddress(
    value: ElectronicMailAddress,
    elGetter: $.ASN1Encoder<ElectronicMailAddress>
) {
    if (!_cached_encoder_for_ElectronicMailAddress) {
        _cached_encoder_for_ElectronicMailAddress = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_ElectronicMailAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ElectronicMailAddress */

/* eslint-enable */
