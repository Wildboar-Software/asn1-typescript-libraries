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
    RecipientRedirection,
    _decode_RecipientRedirection,
    _encode_RecipientRedirection,
} from '../MTSAbstractService/RecipientRedirection.ta.js';
export {
    RecipientRedirection,
    _decode_RecipientRedirection,
    _encode_RecipientRedirection,
} from '../MTSAbstractService/RecipientRedirection.ta.js';

/* START_OF_SYMBOL_DEFINITION Redirections */
/**
 * @summary Redirections
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Redirections  ::=  SEQUENCE SIZE (1..ub-redirections) OF RecipientRedirection
 * ```
 */
export type Redirections = RecipientRedirection[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Redirections */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Redirections */
let _cached_decoder_for_Redirections: $.ASN1Decoder<Redirections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Redirections */

/* START_OF_SYMBOL_DEFINITION _decode_Redirections */
/**
 * @summary Decodes an ASN.1 element into a(n) Redirections
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Redirections} The decoded data structure.
 */
export function _decode_Redirections(el: _Element) {
    if (!_cached_decoder_for_Redirections) {
        _cached_decoder_for_Redirections = $._decodeSequenceOf<RecipientRedirection>(
            () => _decode_RecipientRedirection
        );
    }
    return _cached_decoder_for_Redirections(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Redirections */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Redirections */
let _cached_encoder_for_Redirections: $.ASN1Encoder<Redirections> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Redirections */

/* START_OF_SYMBOL_DEFINITION _encode_Redirections */
/**
 * @summary Encodes a(n) Redirections into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Redirections, encoded as an ASN.1 Element.
 */
export function _encode_Redirections(
    value: Redirections,
    elGetter: $.ASN1Encoder<Redirections>
) {
    if (!_cached_encoder_for_Redirections) {
        _cached_encoder_for_Redirections = $._encodeSequenceOf<RecipientRedirection>(
            () => _encode_RecipientRedirection,
            $.BER
        );
    }
    return _cached_encoder_for_Redirections(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Redirections */

/* eslint-enable */
