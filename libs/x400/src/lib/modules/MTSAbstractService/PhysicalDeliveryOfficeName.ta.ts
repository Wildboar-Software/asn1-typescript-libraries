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

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeName */
/**
 * @summary PhysicalDeliveryOfficeName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOfficeName  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOfficeName = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeName */
let _cached_decoder_for_PhysicalDeliveryOfficeName: $.ASN1Decoder<PhysicalDeliveryOfficeName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeName */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeName} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOfficeName(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeName) {
        _cached_decoder_for_PhysicalDeliveryOfficeName = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeName */
let _cached_encoder_for_PhysicalDeliveryOfficeName: $.ASN1Encoder<PhysicalDeliveryOfficeName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeName */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeName */
/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeName, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOfficeName(
    value: PhysicalDeliveryOfficeName,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOfficeName>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeName) {
        _cached_encoder_for_PhysicalDeliveryOfficeName = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeName */

/* eslint-enable */
