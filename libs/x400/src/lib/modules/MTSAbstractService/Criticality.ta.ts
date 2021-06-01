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

/* START_OF_SYMBOL_DEFINITION Criticality */
/**
 * @summary Criticality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Criticality  ::=  BIT STRING {for-submission(0), for-transfer(1), for-delivery(2)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type Criticality = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Criticality */

/* START_OF_SYMBOL_DEFINITION Criticality_for_submission */
/**
 * @summary Criticality_for_submission
 * @constant
 */
export const Criticality_for_submission: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Criticality_for_submission */

/* START_OF_SYMBOL_DEFINITION for_submission */
/**
 * @summary for_submission
 * @constant
 */
export const for_submission: number = Criticality_for_submission; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION for_submission */

/* START_OF_SYMBOL_DEFINITION Criticality_for_transfer */
/**
 * @summary Criticality_for_transfer
 * @constant
 */
export const Criticality_for_transfer: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Criticality_for_transfer */

/* START_OF_SYMBOL_DEFINITION for_transfer */
/**
 * @summary for_transfer
 * @constant
 */
export const for_transfer: number = Criticality_for_transfer; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION for_transfer */

/* START_OF_SYMBOL_DEFINITION Criticality_for_delivery */
/**
 * @summary Criticality_for_delivery
 * @constant
 */
export const Criticality_for_delivery: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Criticality_for_delivery */

/* START_OF_SYMBOL_DEFINITION for_delivery */
/**
 * @summary for_delivery
 * @constant
 */
export const for_delivery: number = Criticality_for_delivery; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION for_delivery */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */
let _cached_decoder_for_Criticality: $.ASN1Decoder<Criticality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _decode_Criticality */
/**
 * @summary Decodes an ASN.1 element into a(n) Criticality
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Criticality} The decoded data structure.
 */
export function _decode_Criticality(el: _Element) {
    if (!_cached_decoder_for_Criticality) {
        _cached_decoder_for_Criticality = $._decodeBitString;
    }
    return _cached_decoder_for_Criticality(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Criticality */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */
let _cached_encoder_for_Criticality: $.ASN1Encoder<Criticality> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Criticality */

/* START_OF_SYMBOL_DEFINITION _encode_Criticality */
/**
 * @summary Encodes a(n) Criticality into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Criticality, encoded as an ASN.1 Element.
 */
export function _encode_Criticality(
    value: Criticality,
    elGetter: $.ASN1Encoder<Criticality>
) {
    if (!_cached_encoder_for_Criticality) {
        _cached_encoder_for_Criticality = $._encodeBitString;
    }
    return _cached_encoder_for_Criticality(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Criticality */

/* eslint-enable */
