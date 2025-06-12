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

/* START_OF_SYMBOL_DEFINITION _enum_for_DeniedMeteringAction */
/**
 * @summary DeniedMeteringAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```@enum {number}
 */
export enum _enum_for_DeniedMeteringAction {
    canNotStart = 0,
    canNotSuspend = 1,
    canNotResume = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction */
/**
 * @summary DeniedMeteringAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```@enum {number}
 */
export type DeniedMeteringAction = _enum_for_DeniedMeteringAction;
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction */
/**
 * @summary DeniedMeteringAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```@enum {number}
 */
export const DeniedMeteringAction = _enum_for_DeniedMeteringAction;
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotStart */
/**
 * @summary DeniedMeteringAction_canNotStart
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotStart */

/* START_OF_SYMBOL_DEFINITION canNotStart */
/**
 * @summary canNotStart
 * @constant
 * @type {number}
 */
export const canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION canNotStart */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotSuspend */
/**
 * @summary DeniedMeteringAction_canNotSuspend
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotSuspend */

/* START_OF_SYMBOL_DEFINITION canNotSuspend */
/**
 * @summary canNotSuspend
 * @constant
 * @type {number}
 */
export const canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION canNotSuspend */

/* START_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotResume */
/**
 * @summary DeniedMeteringAction_canNotResume
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeniedMeteringAction_canNotResume */

/* START_OF_SYMBOL_DEFINITION canNotResume */
/**
 * @summary canNotResume
 * @constant
 * @type {number}
 */
export const canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION canNotResume */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeniedMeteringAction */
let _cached_decoder_for_DeniedMeteringAction: $.ASN1Decoder<DeniedMeteringAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION _decode_DeniedMeteringAction */
/**
 * @summary Decodes an ASN.1 element into a(n) DeniedMeteringAction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeniedMeteringAction} The decoded data structure.
 */
export function _decode_DeniedMeteringAction(el: _Element) {
    if (!_cached_decoder_for_DeniedMeteringAction) {
        _cached_decoder_for_DeniedMeteringAction = $._decodeEnumerated;
    }
    return _cached_decoder_for_DeniedMeteringAction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeniedMeteringAction */
let _cached_encoder_for_DeniedMeteringAction: $.ASN1Encoder<DeniedMeteringAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeniedMeteringAction */

/* START_OF_SYMBOL_DEFINITION _encode_DeniedMeteringAction */
/**
 * @summary Encodes a(n) DeniedMeteringAction into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeniedMeteringAction, encoded as an ASN.1 Element.
 */
export function _encode_DeniedMeteringAction(
    value: DeniedMeteringAction,
    elGetter: $.ASN1Encoder<DeniedMeteringAction>
) {
    if (!_cached_encoder_for_DeniedMeteringAction) {
        _cached_encoder_for_DeniedMeteringAction = $._encodeEnumerated;
    }
    return _cached_encoder_for_DeniedMeteringAction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeniedMeteringAction */

/* eslint-enable */
