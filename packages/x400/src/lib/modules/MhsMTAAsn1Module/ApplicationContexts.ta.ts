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
    ApplicationContext,
    _decode_ApplicationContext,
    _encode_ApplicationContext,
} from '../MhsMTAAsn1Module/ApplicationContext.ta.js';
export {
    ApplicationContext,
    _decode_ApplicationContext,
    _encode_ApplicationContext,
} from '../MhsMTAAsn1Module/ApplicationContext.ta.js';

/* START_OF_SYMBOL_DEFINITION ApplicationContexts */
/**
 * @summary ApplicationContexts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationContexts  ::=  SET OF ApplicationContext
 * ```
 */
export type ApplicationContexts = ApplicationContext[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContexts */
let _cached_decoder_for_ApplicationContexts: $.ASN1Decoder<ApplicationContexts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationContexts */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationContexts
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationContexts} The decoded data structure.
 */
export function _decode_ApplicationContexts(el: _Element) {
    if (!_cached_decoder_for_ApplicationContexts) {
        _cached_decoder_for_ApplicationContexts = $._decodeSetOf<ApplicationContext>(
            () => _decode_ApplicationContext
        );
    }
    return _cached_decoder_for_ApplicationContexts(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContexts */
let _cached_encoder_for_ApplicationContexts: $.ASN1Encoder<ApplicationContexts> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContexts */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationContexts */
/**
 * @summary Encodes a(n) ApplicationContexts into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationContexts, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationContexts(
    value: ApplicationContexts,
    elGetter: $.ASN1Encoder<ApplicationContexts>
) {
    if (!_cached_encoder_for_ApplicationContexts) {
        _cached_encoder_for_ApplicationContexts = $._encodeSetOf<ApplicationContext>(
            () => _encode_ApplicationContext,
            $.BER
        );
    }
    return _cached_encoder_for_ApplicationContexts(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationContexts */

/* eslint-enable */
