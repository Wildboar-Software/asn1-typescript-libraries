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

/* START_OF_SYMBOL_DEFINITION EquipmentHolderAddress */
/**
 * @summary EquipmentHolderAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EquipmentHolderAddress  ::=  SEQUENCE OF PrintableString
 * ```
 */
export type EquipmentHolderAddress = PrintableString[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION EquipmentHolderAddress */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EquipmentHolderAddress */
let _cached_decoder_for_EquipmentHolderAddress: $.ASN1Decoder<EquipmentHolderAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EquipmentHolderAddress */

/* START_OF_SYMBOL_DEFINITION _decode_EquipmentHolderAddress */
/**
 * @summary Decodes an ASN.1 element into a(n) EquipmentHolderAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EquipmentHolderAddress} The decoded data structure.
 */
export function _decode_EquipmentHolderAddress(el: _Element) {
    if (!_cached_decoder_for_EquipmentHolderAddress) {
        _cached_decoder_for_EquipmentHolderAddress = $._decodeSequenceOf<PrintableString>(
            () => $._decodePrintableString
        );
    }
    return _cached_decoder_for_EquipmentHolderAddress(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EquipmentHolderAddress */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EquipmentHolderAddress */
let _cached_encoder_for_EquipmentHolderAddress: $.ASN1Encoder<EquipmentHolderAddress> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EquipmentHolderAddress */

/* START_OF_SYMBOL_DEFINITION _encode_EquipmentHolderAddress */
/**
 * @summary Encodes a(n) EquipmentHolderAddress into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EquipmentHolderAddress, encoded as an ASN.1 Element.
 */
export function _encode_EquipmentHolderAddress(
    value: EquipmentHolderAddress,
    elGetter: $.ASN1Encoder<EquipmentHolderAddress>
) {
    if (!_cached_encoder_for_EquipmentHolderAddress) {
        _cached_encoder_for_EquipmentHolderAddress = $._encodeSequenceOf<PrintableString>(
            () => $._encodePrintableString,
            $.BER
        );
    }
    return _cached_encoder_for_EquipmentHolderAddress(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EquipmentHolderAddress */

/* eslint-enable */
