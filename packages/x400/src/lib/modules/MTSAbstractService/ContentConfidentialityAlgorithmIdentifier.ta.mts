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
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
export {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ContentConfidentialityAlgorithmIdentifier */
/**
 * @summary ContentConfidentialityAlgorithmIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentConfidentialityAlgorithmIdentifier  ::=  AlgorithmIdentifier
 * ```
 */
export type ContentConfidentialityAlgorithmIdentifier = AlgorithmIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ContentConfidentialityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier */
let _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier: $.ASN1Decoder<ContentConfidentialityAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_ContentConfidentialityAlgorithmIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) ContentConfidentialityAlgorithmIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ContentConfidentialityAlgorithmIdentifier} The decoded data structure.
 */
export function _decode_ContentConfidentialityAlgorithmIdentifier(
    el: _Element
) {
    if (!_cached_decoder_for_ContentConfidentialityAlgorithmIdentifier) {
        _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier = _decode_AlgorithmIdentifier;
    }
    return _cached_decoder_for_ContentConfidentialityAlgorithmIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ContentConfidentialityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier */
let _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier: $.ASN1Encoder<ContentConfidentialityAlgorithmIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_ContentConfidentialityAlgorithmIdentifier */
/**
 * @summary Encodes a(n) ContentConfidentialityAlgorithmIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContentConfidentialityAlgorithmIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_ContentConfidentialityAlgorithmIdentifier(
    value: ContentConfidentialityAlgorithmIdentifier,
    elGetter: $.ASN1Encoder<ContentConfidentialityAlgorithmIdentifier>
) {
    if (!_cached_encoder_for_ContentConfidentialityAlgorithmIdentifier) {
        _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier = _encode_AlgorithmIdentifier;
    }
    return _cached_encoder_for_ContentConfidentialityAlgorithmIdentifier(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ContentConfidentialityAlgorithmIdentifier */

/* eslint-enable */
