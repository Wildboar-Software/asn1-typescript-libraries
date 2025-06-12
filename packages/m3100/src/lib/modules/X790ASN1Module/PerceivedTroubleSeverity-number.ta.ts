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

/* START_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number */
/**
 * @summary PerceivedTroubleSeverity_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedTroubleSeverity-number ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type PerceivedTroubleSeverity_number = INTEGER;
/* END_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number */

/* START_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_outOfService */
/**
 * @summary PerceivedTroubleSeverity_number_outOfService
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_outOfService: PerceivedTroubleSeverity_number = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_outOfService */

/* START_OF_SYMBOL_DEFINITION outOfService */
/**
 * @summary PerceivedTroubleSeverity_number_outOfService
 * @constant
 * @type {number}
 */
export const outOfService: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_outOfService; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION outOfService */

/* START_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_backInService */
/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_backInService: PerceivedTroubleSeverity_number = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_backInService */

/* START_OF_SYMBOL_DEFINITION backInService */
/**
 * @summary PerceivedTroubleSeverity_number_backInService
 * @constant
 * @type {number}
 */
export const backInService: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_backInService; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION backInService */

/* START_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_serviceImpairment */
/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_serviceImpairment: PerceivedTroubleSeverity_number = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_serviceImpairment */

/* START_OF_SYMBOL_DEFINITION serviceImpairment */
/**
 * @summary PerceivedTroubleSeverity_number_serviceImpairment
 * @constant
 * @type {number}
 */
export const serviceImpairment: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_serviceImpairment; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION serviceImpairment */

/* START_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_nonServiceAffectingTrouble */
/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export const PerceivedTroubleSeverity_number_nonServiceAffectingTrouble: PerceivedTroubleSeverity_number = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PerceivedTroubleSeverity_number_nonServiceAffectingTrouble */

/* START_OF_SYMBOL_DEFINITION nonServiceAffectingTrouble */
/**
 * @summary PerceivedTroubleSeverity_number_nonServiceAffectingTrouble
 * @constant
 * @type {number}
 */
export const nonServiceAffectingTrouble: PerceivedTroubleSeverity_number = PerceivedTroubleSeverity_number_nonServiceAffectingTrouble; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION nonServiceAffectingTrouble */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerceivedTroubleSeverity_number */
let _cached_decoder_for_PerceivedTroubleSeverity_number: $.ASN1Decoder<PerceivedTroubleSeverity_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerceivedTroubleSeverity_number */

/* START_OF_SYMBOL_DEFINITION _decode_PerceivedTroubleSeverity_number */
/**
 * @summary Decodes an ASN.1 element into a(n) PerceivedTroubleSeverity_number
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerceivedTroubleSeverity_number} The decoded data structure.
 */
export function _decode_PerceivedTroubleSeverity_number(el: _Element) {
    if (!_cached_decoder_for_PerceivedTroubleSeverity_number) {
        _cached_decoder_for_PerceivedTroubleSeverity_number = $._decodeInteger;
    }
    return _cached_decoder_for_PerceivedTroubleSeverity_number(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerceivedTroubleSeverity_number */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerceivedTroubleSeverity_number */
let _cached_encoder_for_PerceivedTroubleSeverity_number: $.ASN1Encoder<PerceivedTroubleSeverity_number> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerceivedTroubleSeverity_number */

/* START_OF_SYMBOL_DEFINITION _encode_PerceivedTroubleSeverity_number */
/**
 * @summary Encodes a(n) PerceivedTroubleSeverity_number into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerceivedTroubleSeverity_number, encoded as an ASN.1 Element.
 */
export function _encode_PerceivedTroubleSeverity_number(
    value: PerceivedTroubleSeverity_number,
    elGetter: $.ASN1Encoder<PerceivedTroubleSeverity_number>
) {
    if (!_cached_encoder_for_PerceivedTroubleSeverity_number) {
        _cached_encoder_for_PerceivedTroubleSeverity_number = $._encodeInteger;
    }
    return _cached_encoder_for_PerceivedTroubleSeverity_number(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerceivedTroubleSeverity_number */

/* eslint-enable */
