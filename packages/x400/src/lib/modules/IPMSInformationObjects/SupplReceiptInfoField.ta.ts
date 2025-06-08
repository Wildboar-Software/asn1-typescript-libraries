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
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta';
export {
    SupplementaryInformation,
    _decode_SupplementaryInformation,
    _encode_SupplementaryInformation,
} from '../MTSAbstractService/SupplementaryInformation.ta';

/* START_OF_SYMBOL_DEFINITION SupplReceiptInfoField */
/**
 * @summary SupplReceiptInfoField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplReceiptInfoField  ::=  SupplementaryInformation
 * ```
 */
export type SupplReceiptInfoField = SupplementaryInformation; // DefinedType
/* END_OF_SYMBOL_DEFINITION SupplReceiptInfoField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplReceiptInfoField */
let _cached_decoder_for_SupplReceiptInfoField: $.ASN1Decoder<SupplReceiptInfoField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SupplReceiptInfoField */

/* START_OF_SYMBOL_DEFINITION _decode_SupplReceiptInfoField */
/**
 * @summary Decodes an ASN.1 element into a(n) SupplReceiptInfoField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplReceiptInfoField} The decoded data structure.
 */
export function _decode_SupplReceiptInfoField(el: _Element) {
    if (!_cached_decoder_for_SupplReceiptInfoField) {
        _cached_decoder_for_SupplReceiptInfoField = _decode_SupplementaryInformation;
    }
    return _cached_decoder_for_SupplReceiptInfoField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SupplReceiptInfoField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplReceiptInfoField */
let _cached_encoder_for_SupplReceiptInfoField: $.ASN1Encoder<SupplReceiptInfoField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SupplReceiptInfoField */

/* START_OF_SYMBOL_DEFINITION _encode_SupplReceiptInfoField */
/**
 * @summary Encodes a(n) SupplReceiptInfoField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplReceiptInfoField, encoded as an ASN.1 Element.
 */
export function _encode_SupplReceiptInfoField(
    value: SupplReceiptInfoField,
    elGetter: $.ASN1Encoder<SupplReceiptInfoField>
) {
    if (!_cached_encoder_for_SupplReceiptInfoField) {
        _cached_encoder_for_SupplReceiptInfoField = _encode_SupplementaryInformation;
    }
    return _cached_encoder_for_SupplReceiptInfoField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SupplReceiptInfoField */

/* eslint-enable */
