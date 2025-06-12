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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.js';
export {
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.js';

/* START_OF_SYMBOL_DEFINITION OriginallyIntendedRecipientName */
/**
 * @summary OriginallyIntendedRecipientName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginallyIntendedRecipientName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type OriginallyIntendedRecipientName = ORAddressAndOptionalDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginallyIntendedRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginallyIntendedRecipientName */
let _cached_decoder_for_OriginallyIntendedRecipientName: $.ASN1Decoder<OriginallyIntendedRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginallyIntendedRecipientName */

/* START_OF_SYMBOL_DEFINITION _decode_OriginallyIntendedRecipientName */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginallyIntendedRecipientName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginallyIntendedRecipientName} The decoded data structure.
 */
export function _decode_OriginallyIntendedRecipientName(el: _Element) {
    if (!_cached_decoder_for_OriginallyIntendedRecipientName) {
        _cached_decoder_for_OriginallyIntendedRecipientName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_OriginallyIntendedRecipientName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginallyIntendedRecipientName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginallyIntendedRecipientName */
let _cached_encoder_for_OriginallyIntendedRecipientName: $.ASN1Encoder<OriginallyIntendedRecipientName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginallyIntendedRecipientName */

/* START_OF_SYMBOL_DEFINITION _encode_OriginallyIntendedRecipientName */
/**
 * @summary Encodes a(n) OriginallyIntendedRecipientName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginallyIntendedRecipientName, encoded as an ASN.1 Element.
 */
export function _encode_OriginallyIntendedRecipientName(
    value: OriginallyIntendedRecipientName,
    elGetter: $.ASN1Encoder<OriginallyIntendedRecipientName>
) {
    if (!_cached_encoder_for_OriginallyIntendedRecipientName) {
        _cached_encoder_for_OriginallyIntendedRecipientName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_OriginallyIntendedRecipientName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginallyIntendedRecipientName */

/* eslint-enable */
