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

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators */
/**
 * @summary PerRecipientIndicators
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerRecipientIndicators  ::=  BIT STRING {
 *   responsibility(0),
 *   -- responsible 'one', not-responsible 'zero'
 *   originating-MTA-report(1),
 *   originating-MTA-non-delivery-report(2),
 *   -- either originating-MTA-report, or originating-MTA-non-delivery-report,
 *   -- or both, shall be 'one':
 *   -- originating-MTA-report bit 'one' requests a 'report';
 *   -- originating-MTA-non-delivery-report bit 'one' requests a 'non-delivery-report';
 *   -- both bits 'one' requests an 'audited-report';
 *   -- bits 0 - 2 'don't care' for Report Transfer Content
 *   originator-report(3),
 *   originator-non-delivery-report(4),
 *   -- at most one bit shall be 'one':
 *   -- originator-report bit 'one' requests a 'report';
 *   -- originator-non-delivery-report bit 'one' requests a 'non-delivery-report';
 *   -- both bits 'zero' requests 'no-report'
 *   reserved-5(5), reserved-6(6), reserved-7(7)
 *
 * -- reserved- bits 5 - 7 shall be 'zero' --}(SIZE (8..ub-bit-options))
 * ```
 */
export type PerRecipientIndicators = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_responsibility */
/**
 * @summary PerRecipientIndicators_responsibility
 * @constant
 */
export const PerRecipientIndicators_responsibility: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_responsibility */

/* START_OF_SYMBOL_DEFINITION responsibility */
/**
 * @summary responsibility
 * @constant
 */
export const responsibility: number = PerRecipientIndicators_responsibility; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION responsibility */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_originating_MTA_report */
/**
 * @summary PerRecipientIndicators_originating_MTA_report
 * @constant
 */
export const PerRecipientIndicators_originating_MTA_report: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_originating_MTA_report */

/* START_OF_SYMBOL_DEFINITION originating_MTA_report */
/**
 * @summary originating_MTA_report
 * @constant
 */
export const originating_MTA_report: number = PerRecipientIndicators_originating_MTA_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION originating_MTA_report */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_originating_MTA_non_delivery_report */
/**
 * @summary PerRecipientIndicators_originating_MTA_non_delivery_report
 * @constant
 */
export const PerRecipientIndicators_originating_MTA_non_delivery_report: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_originating_MTA_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION originating_MTA_non_delivery_report */
/**
 * @summary originating_MTA_non_delivery_report
 * @constant
 */
export const originating_MTA_non_delivery_report: number = PerRecipientIndicators_originating_MTA_non_delivery_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION originating_MTA_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_originator_report */
/**
 * @summary PerRecipientIndicators_originator_report
 * @constant
 */
export const PerRecipientIndicators_originator_report: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_originator_report */

/* START_OF_SYMBOL_DEFINITION originator_report */
/**
 * @summary originator_report
 * @constant
 */
export const originator_report: number = PerRecipientIndicators_originator_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION originator_report */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_originator_non_delivery_report */
/**
 * @summary PerRecipientIndicators_originator_non_delivery_report
 * @constant
 */
export const PerRecipientIndicators_originator_non_delivery_report: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_originator_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION originator_non_delivery_report */
/**
 * @summary originator_non_delivery_report
 * @constant
 */
export const originator_non_delivery_report: number = PerRecipientIndicators_originator_non_delivery_report; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION originator_non_delivery_report */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_reserved_5 */
/**
 * @summary PerRecipientIndicators_reserved_5
 * @constant
 */
export const PerRecipientIndicators_reserved_5: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_reserved_5 */

/* START_OF_SYMBOL_DEFINITION reserved_5 */
/**
 * @summary reserved_5
 * @constant
 */
export const reserved_5: number = PerRecipientIndicators_reserved_5; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION reserved_5 */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_reserved_6 */
/**
 * @summary PerRecipientIndicators_reserved_6
 * @constant
 */
export const PerRecipientIndicators_reserved_6: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_reserved_6 */

/* START_OF_SYMBOL_DEFINITION reserved_6 */
/**
 * @summary reserved_6
 * @constant
 */
export const reserved_6: number = PerRecipientIndicators_reserved_6; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION reserved_6 */

/* START_OF_SYMBOL_DEFINITION PerRecipientIndicators_reserved_7 */
/**
 * @summary PerRecipientIndicators_reserved_7
 * @constant
 */
export const PerRecipientIndicators_reserved_7: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PerRecipientIndicators_reserved_7 */

/* START_OF_SYMBOL_DEFINITION reserved_7 */
/**
 * @summary reserved_7
 * @constant
 */
export const reserved_7: number = PerRecipientIndicators_reserved_7; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION reserved_7 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientIndicators */
let _cached_decoder_for_PerRecipientIndicators: $.ASN1Decoder<PerRecipientIndicators> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PerRecipientIndicators */

/* START_OF_SYMBOL_DEFINITION _decode_PerRecipientIndicators */
/**
 * @summary Decodes an ASN.1 element into a(n) PerRecipientIndicators
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerRecipientIndicators} The decoded data structure.
 */
export function _decode_PerRecipientIndicators(el: _Element) {
    if (!_cached_decoder_for_PerRecipientIndicators) {
        _cached_decoder_for_PerRecipientIndicators = $._decodeBitString;
    }
    return _cached_decoder_for_PerRecipientIndicators(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PerRecipientIndicators */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientIndicators */
let _cached_encoder_for_PerRecipientIndicators: $.ASN1Encoder<PerRecipientIndicators> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PerRecipientIndicators */

/* START_OF_SYMBOL_DEFINITION _encode_PerRecipientIndicators */
/**
 * @summary Encodes a(n) PerRecipientIndicators into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerRecipientIndicators, encoded as an ASN.1 Element.
 */
export function _encode_PerRecipientIndicators(
    value: PerRecipientIndicators,
    elGetter: $.ASN1Encoder<PerRecipientIndicators>
) {
    if (!_cached_encoder_for_PerRecipientIndicators) {
        _cached_encoder_for_PerRecipientIndicators = $._encodeBitString;
    }
    return _cached_encoder_for_PerRecipientIndicators(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PerRecipientIndicators */

/* eslint-enable */
