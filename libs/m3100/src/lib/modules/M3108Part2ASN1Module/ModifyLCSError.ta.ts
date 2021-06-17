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

/* START_OF_SYMBOL_DEFINITION _enum_for_ModifyLCSError */
export enum _enum_for_ModifyLCSError {
    contractViolation = 0,
    invalidAliasName = 1,
    invalidCircuitNumber = 2,
    invalidCPEType = 3,
    invalidSchedule = 4,
    invalidServiceTerminationDate = 5,
    invalidValue = 6,
    requestedBandwidthNotAvailable = 7,
    resourceUnavailable = 8,
    scheduleConflicts = 9,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_ModifyLCSError */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError */
/**
 * @summary ModifyLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModifyLCSError  ::=  ENUMERATED {
 *   contractViolation(0), invalidAliasName(1), invalidCircuitNumber(2),
 *   invalidCPEType(3), invalidSchedule(4), invalidServiceTerminationDate(5),
 *   invalidValue(6), requestedBandwidthNotAvailable(7), resourceUnavailable(8),
 *   scheduleConflicts(9), ...
 *   }
 * ```@enum {number}
 */
export type ModifyLCSError = _enum_for_ModifyLCSError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION ModifyLCSError */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_contractViolation */
/**
 * @summary ModifyLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const ModifyLCSError_contractViolation: ModifyLCSError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_contractViolation */

/* START_OF_SYMBOL_DEFINITION contractViolation */
/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: ModifyLCSError = ModifyLCSError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION contractViolation */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_invalidAliasName */
/**
 * @summary ModifyLCSError_invalidAliasName
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidAliasName: ModifyLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_invalidAliasName */

/* START_OF_SYMBOL_DEFINITION invalidAliasName */
/**
 * @summary invalidAliasName
 * @constant
 * @type {number}
 */
export const invalidAliasName: ModifyLCSError = ModifyLCSError_invalidAliasName; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidAliasName */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_invalidCircuitNumber */
/**
 * @summary ModifyLCSError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidCircuitNumber: ModifyLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_invalidCircuitNumber */

/* START_OF_SYMBOL_DEFINITION invalidCircuitNumber */
/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber: ModifyLCSError = ModifyLCSError_invalidCircuitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidCircuitNumber */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_invalidCPEType */
/**
 * @summary ModifyLCSError_invalidCPEType
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidCPEType: ModifyLCSError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_invalidCPEType */

/* START_OF_SYMBOL_DEFINITION invalidCPEType */
/**
 * @summary invalidCPEType
 * @constant
 * @type {number}
 */
export const invalidCPEType: ModifyLCSError = ModifyLCSError_invalidCPEType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidCPEType */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_invalidSchedule */
/**
 * @summary ModifyLCSError_invalidSchedule
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidSchedule: ModifyLCSError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_invalidSchedule */

/* START_OF_SYMBOL_DEFINITION invalidSchedule */
/**
 * @summary invalidSchedule
 * @constant
 * @type {number}
 */
export const invalidSchedule: ModifyLCSError = ModifyLCSError_invalidSchedule; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSchedule */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_invalidServiceTerminationDate */
/**
 * @summary ModifyLCSError_invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidServiceTerminationDate: ModifyLCSError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_invalidServiceTerminationDate */

/* START_OF_SYMBOL_DEFINITION invalidServiceTerminationDate */
/**
 * @summary invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const invalidServiceTerminationDate: ModifyLCSError = ModifyLCSError_invalidServiceTerminationDate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidServiceTerminationDate */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_invalidValue */
/**
 * @summary ModifyLCSError_invalidValue
 * @constant
 * @type {number}
 */
export const ModifyLCSError_invalidValue: ModifyLCSError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_invalidValue */

/* START_OF_SYMBOL_DEFINITION invalidValue */
/**
 * @summary invalidValue
 * @constant
 * @type {number}
 */
export const invalidValue: ModifyLCSError = ModifyLCSError_invalidValue; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidValue */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_requestedBandwidthNotAvailable */
/**
 * @summary ModifyLCSError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const ModifyLCSError_requestedBandwidthNotAvailable: ModifyLCSError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_requestedBandwidthNotAvailable */

/* START_OF_SYMBOL_DEFINITION requestedBandwidthNotAvailable */
/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable: ModifyLCSError = ModifyLCSError_requestedBandwidthNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requestedBandwidthNotAvailable */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_resourceUnavailable */
/**
 * @summary ModifyLCSError_resourceUnavailable
 * @constant
 * @type {number}
 */
export const ModifyLCSError_resourceUnavailable: ModifyLCSError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_resourceUnavailable */

/* START_OF_SYMBOL_DEFINITION resourceUnavailable */
/**
 * @summary resourceUnavailable
 * @constant
 * @type {number}
 */
export const resourceUnavailable: ModifyLCSError = ModifyLCSError_resourceUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION resourceUnavailable */

/* START_OF_SYMBOL_DEFINITION ModifyLCSError_scheduleConflicts */
/**
 * @summary ModifyLCSError_scheduleConflicts
 * @constant
 * @type {number}
 */
export const ModifyLCSError_scheduleConflicts: ModifyLCSError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION ModifyLCSError_scheduleConflicts */

/* START_OF_SYMBOL_DEFINITION scheduleConflicts */
/**
 * @summary scheduleConflicts
 * @constant
 * @type {number}
 */
export const scheduleConflicts: ModifyLCSError = ModifyLCSError_scheduleConflicts; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION scheduleConflicts */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyLCSError */
let _cached_decoder_for_ModifyLCSError: $.ASN1Decoder<ModifyLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModifyLCSError */

/* START_OF_SYMBOL_DEFINITION _decode_ModifyLCSError */
/**
 * @summary Decodes an ASN.1 element into a(n) ModifyLCSError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModifyLCSError} The decoded data structure.
 */
export function _decode_ModifyLCSError(el: _Element) {
    if (!_cached_decoder_for_ModifyLCSError) {
        _cached_decoder_for_ModifyLCSError = $._decodeEnumerated;
    }
    return _cached_decoder_for_ModifyLCSError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModifyLCSError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyLCSError */
let _cached_encoder_for_ModifyLCSError: $.ASN1Encoder<ModifyLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModifyLCSError */

/* START_OF_SYMBOL_DEFINITION _encode_ModifyLCSError */
/**
 * @summary Encodes a(n) ModifyLCSError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyLCSError, encoded as an ASN.1 Element.
 */
export function _encode_ModifyLCSError(
    value: ModifyLCSError,
    elGetter: $.ASN1Encoder<ModifyLCSError>
) {
    if (!_cached_encoder_for_ModifyLCSError) {
        _cached_encoder_for_ModifyLCSError = $._encodeEnumerated;
    }
    return _cached_encoder_for_ModifyLCSError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModifyLCSError */

/* eslint-enable */
