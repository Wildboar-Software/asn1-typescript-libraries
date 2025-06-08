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

/* START_OF_SYMBOL_DEFINITION _enum_for_SystemTiming_sourceType */
/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_SystemTiming_sourceType {
    internalTimingSource = 0,
    remoteTimingSource = 1,
    slavedTimingTerminationSignal = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType */
/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type SystemTiming_sourceType = _enum_for_SystemTiming_sourceType;
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType */
/**
 * @summary SystemTiming_sourceType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTiming-sourceType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const SystemTiming_sourceType = _enum_for_SystemTiming_sourceType;
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType_internalTimingSource */
/**
 * @summary SystemTiming_sourceType_internalTimingSource
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_internalTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.internalTimingSource; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType_internalTimingSource */

/* START_OF_SYMBOL_DEFINITION internalTimingSource */
/**
 * @summary internalTimingSource
 * @constant
 * @type {number}
 */
export const internalTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.internalTimingSource; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION internalTimingSource */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType_remoteTimingSource */
/**
 * @summary SystemTiming_sourceType_remoteTimingSource
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_remoteTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.remoteTimingSource; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType_remoteTimingSource */

/* START_OF_SYMBOL_DEFINITION remoteTimingSource */
/**
 * @summary remoteTimingSource
 * @constant
 * @type {number}
 */
export const remoteTimingSource: SystemTiming_sourceType =
    SystemTiming_sourceType.remoteTimingSource; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION remoteTimingSource */

/* START_OF_SYMBOL_DEFINITION SystemTiming_sourceType_slavedTimingTerminationSignal */
/**
 * @summary SystemTiming_sourceType_slavedTimingTerminationSignal
 * @constant
 * @type {number}
 */
export const SystemTiming_sourceType_slavedTimingTerminationSignal: SystemTiming_sourceType =
    SystemTiming_sourceType.slavedTimingTerminationSignal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION SystemTiming_sourceType_slavedTimingTerminationSignal */

/* START_OF_SYMBOL_DEFINITION slavedTimingTerminationSignal */
/**
 * @summary slavedTimingTerminationSignal
 * @constant
 * @type {number}
 */
export const slavedTimingTerminationSignal: SystemTiming_sourceType =
    SystemTiming_sourceType.slavedTimingTerminationSignal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION slavedTimingTerminationSignal */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTiming_sourceType */
let _cached_decoder_for_SystemTiming_sourceType: $.ASN1Decoder<SystemTiming_sourceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION _decode_SystemTiming_sourceType */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemTiming_sourceType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemTiming_sourceType} The decoded data structure.
 */
export function _decode_SystemTiming_sourceType(el: _Element) {
    if (!_cached_decoder_for_SystemTiming_sourceType) {
        _cached_decoder_for_SystemTiming_sourceType = $._decodeEnumerated;
    }
    return _cached_decoder_for_SystemTiming_sourceType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTiming_sourceType */
let _cached_encoder_for_SystemTiming_sourceType: $.ASN1Encoder<SystemTiming_sourceType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTiming_sourceType */

/* START_OF_SYMBOL_DEFINITION _encode_SystemTiming_sourceType */
/**
 * @summary Encodes a(n) SystemTiming_sourceType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemTiming_sourceType, encoded as an ASN.1 Element.
 */
export function _encode_SystemTiming_sourceType(
    value: SystemTiming_sourceType,
    elGetter: $.ASN1Encoder<SystemTiming_sourceType>
) {
    if (!_cached_encoder_for_SystemTiming_sourceType) {
        _cached_encoder_for_SystemTiming_sourceType = $._encodeEnumerated;
    }
    return _cached_encoder_for_SystemTiming_sourceType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemTiming_sourceType */

/* eslint-enable */
