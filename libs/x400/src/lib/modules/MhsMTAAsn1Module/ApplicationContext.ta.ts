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

/* START_OF_SYMBOL_DEFINITION ApplicationContext */
/**
 * @summary ApplicationContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationContext  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ApplicationContext = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContext */
let _cached_decoder_for_ApplicationContext: $.ASN1Decoder<ApplicationContext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _decode_ApplicationContext */
/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationContext
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ApplicationContext} The decoded data structure.
 */
export function _decode_ApplicationContext(el: _Element) {
    if (!_cached_decoder_for_ApplicationContext) {
        _cached_decoder_for_ApplicationContext = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_ApplicationContext(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContext */
let _cached_encoder_for_ApplicationContext: $.ASN1Encoder<ApplicationContext> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ApplicationContext */

/* START_OF_SYMBOL_DEFINITION _encode_ApplicationContext */
/**
 * @summary Encodes a(n) ApplicationContext into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationContext, encoded as an ASN.1 Element.
 */
export function _encode_ApplicationContext(
    value: ApplicationContext,
    elGetter: $.ASN1Encoder<ApplicationContext>
) {
    if (!_cached_encoder_for_ApplicationContext) {
        _cached_encoder_for_ApplicationContext = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_ApplicationContext(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ApplicationContext */

/* eslint-enable */
