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

/* START_OF_SYMBOL_DEFINITION BilateralDeferral */
/**
 * @summary BilateralDeferral
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BilateralDeferral  ::=  INTEGER {agreement(0), no-agreement(1)}
 * ```
 */
export type BilateralDeferral = INTEGER;
/* END_OF_SYMBOL_DEFINITION BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION BilateralDeferral_agreement */
/**
 * @summary BilateralDeferral_agreement
 * @constant
 * @type {number}
 */
export const BilateralDeferral_agreement: BilateralDeferral = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BilateralDeferral_agreement */

/* START_OF_SYMBOL_DEFINITION agreement */
/**
 * @summary BilateralDeferral_agreement
 * @constant
 * @type {number}
 */
export const agreement: BilateralDeferral = BilateralDeferral_agreement; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION agreement */

/* START_OF_SYMBOL_DEFINITION BilateralDeferral_no_agreement */
/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const BilateralDeferral_no_agreement: BilateralDeferral = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION BilateralDeferral_no_agreement */

/* START_OF_SYMBOL_DEFINITION no_agreement */
/**
 * @summary BilateralDeferral_no_agreement
 * @constant
 * @type {number}
 */
export const no_agreement: BilateralDeferral = BilateralDeferral_no_agreement; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION no_agreement */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDeferral */
let _cached_decoder_for_BilateralDeferral: $.ASN1Decoder<BilateralDeferral> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION _decode_BilateralDeferral */
/**
 * @summary Decodes an ASN.1 element into a(n) BilateralDeferral
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BilateralDeferral} The decoded data structure.
 */
export function _decode_BilateralDeferral(el: _Element) {
    if (!_cached_decoder_for_BilateralDeferral) {
        _cached_decoder_for_BilateralDeferral = $._decodeInteger;
    }
    return _cached_decoder_for_BilateralDeferral(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDeferral */
let _cached_encoder_for_BilateralDeferral: $.ASN1Encoder<BilateralDeferral> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BilateralDeferral */

/* START_OF_SYMBOL_DEFINITION _encode_BilateralDeferral */
/**
 * @summary Encodes a(n) BilateralDeferral into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BilateralDeferral, encoded as an ASN.1 Element.
 */
export function _encode_BilateralDeferral(
    value: BilateralDeferral,
    elGetter: $.ASN1Encoder<BilateralDeferral>
) {
    if (!_cached_encoder_for_BilateralDeferral) {
        _cached_encoder_for_BilateralDeferral = $._encodeInteger;
    }
    return _cached_encoder_for_BilateralDeferral(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BilateralDeferral */

/* eslint-enable */
