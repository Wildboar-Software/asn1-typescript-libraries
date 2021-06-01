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

/* START_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeNumber */
/**
 * @summary PhysicalDeliveryOfficeNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PhysicalDeliveryOfficeNumber  ::=  PDSParameter
 * ```
 */
export type PhysicalDeliveryOfficeNumber = PDSParameter; // DefinedType
/* END_OF_SYMBOL_DEFINITION PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeNumber */
let _cached_decoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Decoder<PhysicalDeliveryOfficeNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeNumber */
/**
 * @summary Decodes an ASN.1 element into a(n) PhysicalDeliveryOfficeNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PhysicalDeliveryOfficeNumber} The decoded data structure.
 */
export function _decode_PhysicalDeliveryOfficeNumber(el: _Element) {
    if (!_cached_decoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_decoder_for_PhysicalDeliveryOfficeNumber = _decode_PDSParameter;
    }
    return _cached_decoder_for_PhysicalDeliveryOfficeNumber(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeNumber */
let _cached_encoder_for_PhysicalDeliveryOfficeNumber: $.ASN1Encoder<PhysicalDeliveryOfficeNumber> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PhysicalDeliveryOfficeNumber */

/* START_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeNumber */
/**
 * @summary Encodes a(n) PhysicalDeliveryOfficeNumber into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PhysicalDeliveryOfficeNumber, encoded as an ASN.1 Element.
 */
export function _encode_PhysicalDeliveryOfficeNumber(
    value: PhysicalDeliveryOfficeNumber,
    elGetter: $.ASN1Encoder<PhysicalDeliveryOfficeNumber>
) {
    if (!_cached_encoder_for_PhysicalDeliveryOfficeNumber) {
        _cached_encoder_for_PhysicalDeliveryOfficeNumber = _encode_PDSParameter;
    }
    return _cached_encoder_for_PhysicalDeliveryOfficeNumber(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PhysicalDeliveryOfficeNumber */

/* eslint-enable */
