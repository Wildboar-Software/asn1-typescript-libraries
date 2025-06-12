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
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.js';
export {
    EDIMIdentifier,
    _decode_EDIMIdentifier,
    _encode_EDIMIdentifier,
} from '../EDIMSInformationObjects/EDIMIdentifier.ta.js';

/* START_OF_SYMBOL_DEFINITION MessageReference */
/**
 * @summary MessageReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageReference  ::=  EDIMIdentifier
 * ```
 */
export type MessageReference = EDIMIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageReference */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageReference */
let _cached_decoder_for_MessageReference: $.ASN1Decoder<MessageReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageReference */

/* START_OF_SYMBOL_DEFINITION _decode_MessageReference */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageReference
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageReference} The decoded data structure.
 */
export function _decode_MessageReference(el: _Element) {
    if (!_cached_decoder_for_MessageReference) {
        _cached_decoder_for_MessageReference = _decode_EDIMIdentifier;
    }
    return _cached_decoder_for_MessageReference(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageReference */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageReference */
let _cached_encoder_for_MessageReference: $.ASN1Encoder<MessageReference> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageReference */

/* START_OF_SYMBOL_DEFINITION _encode_MessageReference */
/**
 * @summary Encodes a(n) MessageReference into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageReference, encoded as an ASN.1 Element.
 */
export function _encode_MessageReference(
    value: MessageReference,
    elGetter: $.ASN1Encoder<MessageReference>
) {
    if (!_cached_encoder_for_MessageReference) {
        _cached_encoder_for_MessageReference = _encode_EDIMIdentifier;
    }
    return _cached_encoder_for_MessageReference(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageReference */

/* eslint-enable */
