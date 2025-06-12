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

/* START_OF_SYMBOL_DEFINITION _enum_for_DLPolicy_conversion_with_loss_prohibited */
/**
 * @summary DLPolicy_conversion_with_loss_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-conversion-with-loss-prohibited ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_DLPolicy_conversion_with_loss_prohibited {
    unchanged = 0,
    conversion_with_loss_allowed = 1,
    conversion_with_loss_prohibited = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DLPolicy_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited */
/**
 * @summary DLPolicy_conversion_with_loss_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-conversion-with-loss-prohibited ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type DLPolicy_conversion_with_loss_prohibited = _enum_for_DLPolicy_conversion_with_loss_prohibited;
/* END_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited */
/**
 * @summary DLPolicy_conversion_with_loss_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-conversion-with-loss-prohibited ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const DLPolicy_conversion_with_loss_prohibited = _enum_for_DLPolicy_conversion_with_loss_prohibited;
/* END_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited_unchanged */
/**
 * @summary DLPolicy_conversion_with_loss_prohibited_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_conversion_with_loss_prohibited_unchanged: DLPolicy_conversion_with_loss_prohibited =
    DLPolicy_conversion_with_loss_prohibited.unchanged; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited_unchanged */

/* START_OF_SYMBOL_DEFINITION unchanged */
/**
 * @summary unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_conversion_with_loss_prohibited =
    DLPolicy_conversion_with_loss_prohibited.unchanged; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unchanged */

/* START_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_allowed */
/**
 * @summary DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_allowed: DLPolicy_conversion_with_loss_prohibited =
    DLPolicy_conversion_with_loss_prohibited.conversion_with_loss_allowed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_allowed */

/* START_OF_SYMBOL_DEFINITION conversion_with_loss_allowed */
/**
 * @summary conversion_with_loss_allowed
 * @constant
 * @type {number}
 */
export const conversion_with_loss_allowed: DLPolicy_conversion_with_loss_prohibited =
    DLPolicy_conversion_with_loss_prohibited.conversion_with_loss_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION conversion_with_loss_allowed */

/* START_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_prohibited */
/**
 * @summary DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_prohibited: DLPolicy_conversion_with_loss_prohibited =
    DLPolicy_conversion_with_loss_prohibited.conversion_with_loss_prohibited; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_conversion_with_loss_prohibited_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */
/**
 * @summary conversion_with_loss_prohibited
 * @constant
 * @type {number}
 */
export const conversion_with_loss_prohibited: DLPolicy_conversion_with_loss_prohibited =
    DLPolicy_conversion_with_loss_prohibited.conversion_with_loss_prohibited; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_conversion_with_loss_prohibited */
let _cached_decoder_for_DLPolicy_conversion_with_loss_prohibited: $.ASN1Decoder<DLPolicy_conversion_with_loss_prohibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_conversion_with_loss_prohibited */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_conversion_with_loss_prohibited
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_conversion_with_loss_prohibited} The decoded data structure.
 */
export function _decode_DLPolicy_conversion_with_loss_prohibited(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_conversion_with_loss_prohibited) {
        _cached_decoder_for_DLPolicy_conversion_with_loss_prohibited =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_DLPolicy_conversion_with_loss_prohibited(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_conversion_with_loss_prohibited */
let _cached_encoder_for_DLPolicy_conversion_with_loss_prohibited: $.ASN1Encoder<DLPolicy_conversion_with_loss_prohibited> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_conversion_with_loss_prohibited */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_conversion_with_loss_prohibited */
/**
 * @summary Encodes a(n) DLPolicy_conversion_with_loss_prohibited into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_conversion_with_loss_prohibited, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_conversion_with_loss_prohibited(
    value: DLPolicy_conversion_with_loss_prohibited,
    elGetter: $.ASN1Encoder<DLPolicy_conversion_with_loss_prohibited>
) {
    if (!_cached_encoder_for_DLPolicy_conversion_with_loss_prohibited) {
        _cached_encoder_for_DLPolicy_conversion_with_loss_prohibited =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_DLPolicy_conversion_with_loss_prohibited(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_conversion_with_loss_prohibited */

/* eslint-enable */
