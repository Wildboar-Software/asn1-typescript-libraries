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
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';
export {
    MTSIdentifier,
    _decode_MTSIdentifier,
    _encode_MTSIdentifier,
} from '../MTSAbstractService/MTSIdentifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MessageSubmissionIdentifier */
/**
 * @summary MessageSubmissionIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageSubmissionIdentifier  ::=  MTSIdentifier
 * ```
 */
export type MessageSubmissionIdentifier = MTSIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionIdentifier */
let _cached_decoder_for_MessageSubmissionIdentifier: $.ASN1Decoder<MessageSubmissionIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_MessageSubmissionIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageSubmissionIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageSubmissionIdentifier} The decoded data structure.
 */
export function _decode_MessageSubmissionIdentifier(el: _Element) {
    if (!_cached_decoder_for_MessageSubmissionIdentifier) {
        _cached_decoder_for_MessageSubmissionIdentifier = _decode_MTSIdentifier;
    }
    return _cached_decoder_for_MessageSubmissionIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionIdentifier */
let _cached_encoder_for_MessageSubmissionIdentifier: $.ASN1Encoder<MessageSubmissionIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageSubmissionIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_MessageSubmissionIdentifier */
/**
 * @summary Encodes a(n) MessageSubmissionIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageSubmissionIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_MessageSubmissionIdentifier(
    value: MessageSubmissionIdentifier,
    elGetter: $.ASN1Encoder<MessageSubmissionIdentifier>
) {
    if (!_cached_encoder_for_MessageSubmissionIdentifier) {
        _cached_encoder_for_MessageSubmissionIdentifier = _encode_MTSIdentifier;
    }
    return _cached_encoder_for_MessageSubmissionIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageSubmissionIdentifier */

/* eslint-enable */
