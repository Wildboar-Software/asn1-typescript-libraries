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
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.mjs';
export {
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ActualRecipientName */
/**
 * @summary ActualRecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActualRecipientName  ::=  ORAddressAndOrDirectoryName
 * ```
 */
export type ActualRecipientName = ORAddressAndOrDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ActualRecipientName */
let _cached_decoder_for_ActualRecipientName: $.ASN1Decoder<ActualRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _decode_ActualRecipientName */
/**
 * @summary Decodes an ASN.1 element into a(n) ActualRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActualRecipientName} The decoded data structure.
 */
export function _decode_ActualRecipientName(el: _Element) {
    if (!_cached_decoder_for_ActualRecipientName) {
        _cached_decoder_for_ActualRecipientName = _decode_ORAddressAndOrDirectoryName;
    }
    return _cached_decoder_for_ActualRecipientName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ActualRecipientName */
let _cached_encoder_for_ActualRecipientName: $.ASN1Encoder<ActualRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ActualRecipientName */

/* START_OF_SYMBOL_DEFINITION _encode_ActualRecipientName */
/**
 * @summary Encodes a(n) ActualRecipientName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActualRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_ActualRecipientName(
    value: ActualRecipientName,
    elGetter: $.ASN1Encoder<ActualRecipientName>
) {
    if (!_cached_encoder_for_ActualRecipientName) {
        _cached_encoder_for_ActualRecipientName = _encode_ORAddressAndOrDirectoryName;
    }
    return _cached_encoder_for_ActualRecipientName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ActualRecipientName */

/* eslint-enable */
