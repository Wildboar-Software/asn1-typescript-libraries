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
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.js';
export {
    ORAddressAndOrDirectoryName,
    _decode_ORAddressAndOrDirectoryName,
    _encode_ORAddressAndOrDirectoryName,
} from '../MTSAbstractService/ORAddressAndOrDirectoryName.ta.js';

/* START_OF_SYMBOL_DEFINITION OriginatorRequestedAlternateRecipient */
/**
 * @summary OriginatorRequestedAlternateRecipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorRequestedAlternateRecipient  ::=  ORAddressAndOrDirectoryName
 * ```
 */
export type OriginatorRequestedAlternateRecipient = ORAddressAndOrDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatorRequestedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorRequestedAlternateRecipient */
let _cached_decoder_for_OriginatorRequestedAlternateRecipient: $.ASN1Decoder<OriginatorRequestedAlternateRecipient> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorRequestedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorRequestedAlternateRecipient */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorRequestedAlternateRecipient
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorRequestedAlternateRecipient} The decoded data structure.
 */
export function _decode_OriginatorRequestedAlternateRecipient(el: _Element) {
    if (!_cached_decoder_for_OriginatorRequestedAlternateRecipient) {
        _cached_decoder_for_OriginatorRequestedAlternateRecipient = _decode_ORAddressAndOrDirectoryName;
    }
    return _cached_decoder_for_OriginatorRequestedAlternateRecipient(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorRequestedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorRequestedAlternateRecipient */
let _cached_encoder_for_OriginatorRequestedAlternateRecipient: $.ASN1Encoder<OriginatorRequestedAlternateRecipient> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorRequestedAlternateRecipient */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorRequestedAlternateRecipient */
/**
 * @summary Encodes a(n) OriginatorRequestedAlternateRecipient into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorRequestedAlternateRecipient, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorRequestedAlternateRecipient(
    value: OriginatorRequestedAlternateRecipient,
    elGetter: $.ASN1Encoder<OriginatorRequestedAlternateRecipient>
) {
    if (!_cached_encoder_for_OriginatorRequestedAlternateRecipient) {
        _cached_encoder_for_OriginatorRequestedAlternateRecipient = _encode_ORAddressAndOrDirectoryName;
    }
    return _cached_encoder_for_OriginatorRequestedAlternateRecipient(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorRequestedAlternateRecipient */

/* eslint-enable */
