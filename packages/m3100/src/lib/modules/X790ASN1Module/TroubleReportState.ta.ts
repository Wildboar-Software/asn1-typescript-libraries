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

/* START_OF_SYMBOL_DEFINITION TroubleReportState */
/**
 * @summary TroubleReportState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TroubleReportState  ::=  INTEGER {
 *   queued(0), openActive(1), deferred(2), cleared(3), closed(4), disabled(5)
 * }(0..255)
 * ```
 */
export type TroubleReportState = INTEGER;
/* END_OF_SYMBOL_DEFINITION TroubleReportState */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_queued */
/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export const TroubleReportState_queued: TroubleReportState = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_queued */

/* START_OF_SYMBOL_DEFINITION queued */
/**
 * @summary TroubleReportState_queued
 * @constant
 * @type {number}
 */
export const queued: TroubleReportState = TroubleReportState_queued; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION queued */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_openActive */
/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export const TroubleReportState_openActive: TroubleReportState = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_openActive */

/* START_OF_SYMBOL_DEFINITION openActive */
/**
 * @summary TroubleReportState_openActive
 * @constant
 * @type {number}
 */
export const openActive: TroubleReportState = TroubleReportState_openActive; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION openActive */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_deferred */
/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export const TroubleReportState_deferred: TroubleReportState = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_deferred */

/* START_OF_SYMBOL_DEFINITION deferred */
/**
 * @summary TroubleReportState_deferred
 * @constant
 * @type {number}
 */
export const deferred: TroubleReportState = TroubleReportState_deferred; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION deferred */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_cleared */
/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export const TroubleReportState_cleared: TroubleReportState = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_cleared */

/* START_OF_SYMBOL_DEFINITION cleared */
/**
 * @summary TroubleReportState_cleared
 * @constant
 * @type {number}
 */
export const cleared: TroubleReportState = TroubleReportState_cleared; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION cleared */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_closed */
/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export const TroubleReportState_closed: TroubleReportState = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_closed */

/* START_OF_SYMBOL_DEFINITION closed */
/**
 * @summary TroubleReportState_closed
 * @constant
 * @type {number}
 */
export const closed: TroubleReportState = TroubleReportState_closed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION closed */

/* START_OF_SYMBOL_DEFINITION TroubleReportState_disabled */
/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export const TroubleReportState_disabled: TroubleReportState = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TroubleReportState_disabled */

/* START_OF_SYMBOL_DEFINITION disabled */
/**
 * @summary TroubleReportState_disabled
 * @constant
 * @type {number}
 */
export const disabled: TroubleReportState = TroubleReportState_disabled; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION disabled */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportState */
let _cached_decoder_for_TroubleReportState: $.ASN1Decoder<TroubleReportState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TroubleReportState */

/* START_OF_SYMBOL_DEFINITION _decode_TroubleReportState */
/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TroubleReportState} The decoded data structure.
 */
export function _decode_TroubleReportState(el: _Element) {
    if (!_cached_decoder_for_TroubleReportState) {
        _cached_decoder_for_TroubleReportState = $._decodeInteger;
    }
    return _cached_decoder_for_TroubleReportState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TroubleReportState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportState */
let _cached_encoder_for_TroubleReportState: $.ASN1Encoder<TroubleReportState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TroubleReportState */

/* START_OF_SYMBOL_DEFINITION _encode_TroubleReportState */
/**
 * @summary Encodes a(n) TroubleReportState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportState, encoded as an ASN.1 Element.
 */
export function _encode_TroubleReportState(
    value: TroubleReportState,
    elGetter: $.ASN1Encoder<TroubleReportState>
) {
    if (!_cached_encoder_for_TroubleReportState) {
        _cached_encoder_for_TroubleReportState = $._encodeInteger;
    }
    return _cached_encoder_for_TroubleReportState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TroubleReportState */

/* eslint-enable */
