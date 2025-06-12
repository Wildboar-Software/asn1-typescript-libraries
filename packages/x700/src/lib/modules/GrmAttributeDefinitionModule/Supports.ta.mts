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
    SupportedChoice,
    _decode_SupportedChoice,
    _encode_SupportedChoice,
} from '../GrmAttributeDefinitionModule/SupportedChoice.ta.mjs';
export {
    SupportedChoice,
    _decode_SupportedChoice,
    _encode_SupportedChoice,
} from '../GrmAttributeDefinitionModule/SupportedChoice.ta.mjs';

/* START_OF_SYMBOL_DEFINITION Supports */
/**
 * @summary Supports
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Supports  ::=  SET OF SupportedChoice
 * ```
 */
export type Supports = SupportedChoice[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Supports */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Supports */
let _cached_decoder_for_Supports: $.ASN1Decoder<Supports> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Supports */

/* START_OF_SYMBOL_DEFINITION _decode_Supports */
/**
 * @summary Decodes an ASN.1 element into a(n) Supports
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Supports} The decoded data structure.
 */
export function _decode_Supports(el: _Element) {
    if (!_cached_decoder_for_Supports) {
        _cached_decoder_for_Supports = $._decodeSetOf<SupportedChoice>(
            () => _decode_SupportedChoice
        );
    }
    return _cached_decoder_for_Supports(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Supports */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Supports */
let _cached_encoder_for_Supports: $.ASN1Encoder<Supports> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Supports */

/* START_OF_SYMBOL_DEFINITION _encode_Supports */
/**
 * @summary Encodes a(n) Supports into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Supports, encoded as an ASN.1 Element.
 */
export function _encode_Supports(
    value: Supports,
    elGetter: $.ASN1Encoder<Supports>
) {
    if (!_cached_encoder_for_Supports) {
        _cached_encoder_for_Supports = $._encodeSetOf<SupportedChoice>(
            () => _encode_SupportedChoice,
            $.BER
        );
    }
    return _cached_encoder_for_Supports(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Supports */

/* eslint-enable */
