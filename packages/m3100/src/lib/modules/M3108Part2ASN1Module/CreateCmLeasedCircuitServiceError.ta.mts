/* eslint-disable */
import {
    ENUMERATED,
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

/* START_OF_SYMBOL_DEFINITION _enum_for_CreateCmLeasedCircuitServiceError */
export enum _enum_for_CreateCmLeasedCircuitServiceError {
    contractViolation = 0,
    dedicatedResourceUnavailable = 1,
    incompatibleSLCs = 2,
    invalidSchedule = 3,
    invalidServiceTerminationDate = 4,
    invalidValue = 5,
    nonExistentSAP = 6,
    quantitySpecifiedOutOfRange = 7,
    requestedBandwidthNotAvailable = 8,
    requiredParameterNotAvailable = 9,
    sharedResourcesUnavailable = 10,
    specifiedLCSAlreadyExists = 11,
    unknownServiceDescription = 12,
    unknownServiceType = 13,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_CreateCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError */
/**
 * @summary CreateCmLeasedCircuitServiceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateCmLeasedCircuitServiceError  ::=  ENUMERATED {
 *   contractViolation(0), dedicatedResourceUnavailable(1), incompatibleSLCs(2),
 *   invalidSchedule(3), invalidServiceTerminationDate(4), invalidValue(5),
 *   nonExistentSAP(6), quantitySpecifiedOutOfRange(7),
 *   requestedBandwidthNotAvailable(8), requiredParameterNotAvailable(9),
 *   sharedResourcesUnavailable(10), specifiedLCSAlreadyExists(11),
 *   unknownServiceDescription(12), unknownServiceType(13), ...
 *   }
 * ```@enum {number}
 */
export type CreateCmLeasedCircuitServiceError =
    | _enum_for_CreateCmLeasedCircuitServiceError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_contractViolation */
/**
 * @summary CreateCmLeasedCircuitServiceError_contractViolation
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_contractViolation: CreateCmLeasedCircuitServiceError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_contractViolation */

/* START_OF_SYMBOL_DEFINITION contractViolation */
/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION contractViolation */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable */
/**
 * @summary CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable: CreateCmLeasedCircuitServiceError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable */

/* START_OF_SYMBOL_DEFINITION dedicatedResourceUnavailable */
/**
 * @summary dedicatedResourceUnavailable
 * @constant
 * @type {number}
 */
export const dedicatedResourceUnavailable: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dedicatedResourceUnavailable */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_incompatibleSLCs */
/**
 * @summary CreateCmLeasedCircuitServiceError_incompatibleSLCs
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_incompatibleSLCs: CreateCmLeasedCircuitServiceError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_incompatibleSLCs */

/* START_OF_SYMBOL_DEFINITION incompatibleSLCs */
/**
 * @summary incompatibleSLCs
 * @constant
 * @type {number}
 */
export const incompatibleSLCs: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_incompatibleSLCs; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION incompatibleSLCs */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_invalidSchedule */
/**
 * @summary CreateCmLeasedCircuitServiceError_invalidSchedule
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_invalidSchedule: CreateCmLeasedCircuitServiceError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_invalidSchedule */

/* START_OF_SYMBOL_DEFINITION invalidSchedule */
/**
 * @summary invalidSchedule
 * @constant
 * @type {number}
 */
export const invalidSchedule: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_invalidSchedule; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidSchedule */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate */
/**
 * @summary CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate: CreateCmLeasedCircuitServiceError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate */

/* START_OF_SYMBOL_DEFINITION invalidServiceTerminationDate */
/**
 * @summary invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const invalidServiceTerminationDate: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidServiceTerminationDate */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_invalidValue */
/**
 * @summary CreateCmLeasedCircuitServiceError_invalidValue
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_invalidValue: CreateCmLeasedCircuitServiceError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_invalidValue */

/* START_OF_SYMBOL_DEFINITION invalidValue */
/**
 * @summary invalidValue
 * @constant
 * @type {number}
 */
export const invalidValue: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_invalidValue; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidValue */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_nonExistentSAP */
/**
 * @summary CreateCmLeasedCircuitServiceError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_nonExistentSAP: CreateCmLeasedCircuitServiceError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_nonExistentSAP */

/* START_OF_SYMBOL_DEFINITION nonExistentSAP */
/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_nonExistentSAP; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonExistentSAP */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange */
/**
 * @summary CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange: CreateCmLeasedCircuitServiceError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange */

/* START_OF_SYMBOL_DEFINITION quantitySpecifiedOutOfRange */
/**
 * @summary quantitySpecifiedOutOfRange
 * @constant
 * @type {number}
 */
export const quantitySpecifiedOutOfRange: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION quantitySpecifiedOutOfRange */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable */
/**
 * @summary CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable: CreateCmLeasedCircuitServiceError = 8; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable */

/* START_OF_SYMBOL_DEFINITION requestedBandwidthNotAvailable */
/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requestedBandwidthNotAvailable */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable */
/**
 * @summary CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable: CreateCmLeasedCircuitServiceError = 9; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable */

/* START_OF_SYMBOL_DEFINITION requiredParameterNotAvailable */
/**
 * @summary requiredParameterNotAvailable
 * @constant
 * @type {number}
 */
export const requiredParameterNotAvailable: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION requiredParameterNotAvailable */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable */
/**
 * @summary CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable: CreateCmLeasedCircuitServiceError = 10; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable */

/* START_OF_SYMBOL_DEFINITION sharedResourcesUnavailable */
/**
 * @summary sharedResourcesUnavailable
 * @constant
 * @type {number}
 */
export const sharedResourcesUnavailable: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION sharedResourcesUnavailable */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists */
/**
 * @summary CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists: CreateCmLeasedCircuitServiceError = 11; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists */

/* START_OF_SYMBOL_DEFINITION specifiedLCSAlreadyExists */
/**
 * @summary specifiedLCSAlreadyExists
 * @constant
 * @type {number}
 */
export const specifiedLCSAlreadyExists: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION specifiedLCSAlreadyExists */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_unknownServiceDescription */
/**
 * @summary CreateCmLeasedCircuitServiceError_unknownServiceDescription
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_unknownServiceDescription: CreateCmLeasedCircuitServiceError = 12; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_unknownServiceDescription */

/* START_OF_SYMBOL_DEFINITION unknownServiceDescription */
/**
 * @summary unknownServiceDescription
 * @constant
 * @type {number}
 */
export const unknownServiceDescription: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_unknownServiceDescription; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownServiceDescription */

/* START_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_unknownServiceType */
/**
 * @summary CreateCmLeasedCircuitServiceError_unknownServiceType
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_unknownServiceType: CreateCmLeasedCircuitServiceError = 13; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION CreateCmLeasedCircuitServiceError_unknownServiceType */

/* START_OF_SYMBOL_DEFINITION unknownServiceType */
/**
 * @summary unknownServiceType
 * @constant
 * @type {number}
 */
export const unknownServiceType: CreateCmLeasedCircuitServiceError = CreateCmLeasedCircuitServiceError_unknownServiceType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateCmLeasedCircuitServiceError */
let _cached_decoder_for_CreateCmLeasedCircuitServiceError: $.ASN1Decoder<CreateCmLeasedCircuitServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION _decode_CreateCmLeasedCircuitServiceError */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateCmLeasedCircuitServiceError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateCmLeasedCircuitServiceError} The decoded data structure.
 */
export function _decode_CreateCmLeasedCircuitServiceError(el: _Element) {
    if (!_cached_decoder_for_CreateCmLeasedCircuitServiceError) {
        _cached_decoder_for_CreateCmLeasedCircuitServiceError =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_CreateCmLeasedCircuitServiceError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateCmLeasedCircuitServiceError */
let _cached_encoder_for_CreateCmLeasedCircuitServiceError: $.ASN1Encoder<CreateCmLeasedCircuitServiceError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateCmLeasedCircuitServiceError */

/* START_OF_SYMBOL_DEFINITION _encode_CreateCmLeasedCircuitServiceError */
/**
 * @summary Encodes a(n) CreateCmLeasedCircuitServiceError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateCmLeasedCircuitServiceError, encoded as an ASN.1 Element.
 */
export function _encode_CreateCmLeasedCircuitServiceError(
    value: CreateCmLeasedCircuitServiceError,
    elGetter: $.ASN1Encoder<CreateCmLeasedCircuitServiceError>
) {
    if (!_cached_encoder_for_CreateCmLeasedCircuitServiceError) {
        _cached_encoder_for_CreateCmLeasedCircuitServiceError =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_CreateCmLeasedCircuitServiceError(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateCmLeasedCircuitServiceError */

/* eslint-enable */
