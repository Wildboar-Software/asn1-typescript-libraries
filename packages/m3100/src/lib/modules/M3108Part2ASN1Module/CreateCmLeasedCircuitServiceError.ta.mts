/* eslint-disable */
import {
    type ENUMERATED,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


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
 * ```
 *
 * @enum {number}
 */
export type CreateCmLeasedCircuitServiceError =
    | _enum_for_CreateCmLeasedCircuitServiceError
    | ENUMERATED;


/**
 * @summary CreateCmLeasedCircuitServiceError_contractViolation
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_contractViolation = _enum_for_CreateCmLeasedCircuitServiceError.contractViolation; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation = CreateCmLeasedCircuitServiceError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable = _enum_for_CreateCmLeasedCircuitServiceError.dedicatedResourceUnavailable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary dedicatedResourceUnavailable
 * @constant
 * @type {number}
 */
export const dedicatedResourceUnavailable = CreateCmLeasedCircuitServiceError_dedicatedResourceUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_incompatibleSLCs
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_incompatibleSLCs = _enum_for_CreateCmLeasedCircuitServiceError.incompatibleSLCs; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary incompatibleSLCs
 * @constant
 * @type {number}
 */
export const incompatibleSLCs = CreateCmLeasedCircuitServiceError_incompatibleSLCs; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_invalidSchedule
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_invalidSchedule = _enum_for_CreateCmLeasedCircuitServiceError.invalidSchedule; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidSchedule
 * @constant
 * @type {number}
 */
export const invalidSchedule = CreateCmLeasedCircuitServiceError_invalidSchedule; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate = _enum_for_CreateCmLeasedCircuitServiceError.invalidServiceTerminationDate; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidServiceTerminationDate
 * @constant
 * @type {number}
 */
export const invalidServiceTerminationDate = CreateCmLeasedCircuitServiceError_invalidServiceTerminationDate; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_invalidValue
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_invalidValue = _enum_for_CreateCmLeasedCircuitServiceError.invalidValue; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidValue
 * @constant
 * @type {number}
 */
export const invalidValue = CreateCmLeasedCircuitServiceError_invalidValue; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_nonExistentSAP = _enum_for_CreateCmLeasedCircuitServiceError.nonExistentSAP; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP = CreateCmLeasedCircuitServiceError_nonExistentSAP; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange = _enum_for_CreateCmLeasedCircuitServiceError.quantitySpecifiedOutOfRange; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary quantitySpecifiedOutOfRange
 * @constant
 * @type {number}
 */
export const quantitySpecifiedOutOfRange = CreateCmLeasedCircuitServiceError_quantitySpecifiedOutOfRange; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable = _enum_for_CreateCmLeasedCircuitServiceError.requestedBandwidthNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requestedBandwidthNotAvailable
 * @constant
 * @type {number}
 */
export const requestedBandwidthNotAvailable = CreateCmLeasedCircuitServiceError_requestedBandwidthNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable = _enum_for_CreateCmLeasedCircuitServiceError.requiredParameterNotAvailable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary requiredParameterNotAvailable
 * @constant
 * @type {number}
 */
export const requiredParameterNotAvailable = CreateCmLeasedCircuitServiceError_requiredParameterNotAvailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable = _enum_for_CreateCmLeasedCircuitServiceError.sharedResourcesUnavailable; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary sharedResourcesUnavailable
 * @constant
 * @type {number}
 */
export const sharedResourcesUnavailable = CreateCmLeasedCircuitServiceError_sharedResourcesUnavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists = _enum_for_CreateCmLeasedCircuitServiceError.specifiedLCSAlreadyExists; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary specifiedLCSAlreadyExists
 * @constant
 * @type {number}
 */
export const specifiedLCSAlreadyExists = CreateCmLeasedCircuitServiceError_specifiedLCSAlreadyExists; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_unknownServiceDescription
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_unknownServiceDescription = _enum_for_CreateCmLeasedCircuitServiceError.unknownServiceDescription; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownServiceDescription
 * @constant
 * @type {number}
 */
export const unknownServiceDescription = CreateCmLeasedCircuitServiceError_unknownServiceDescription; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary CreateCmLeasedCircuitServiceError_unknownServiceType
 * @constant
 * @type {number}
 */
export const CreateCmLeasedCircuitServiceError_unknownServiceType = _enum_for_CreateCmLeasedCircuitServiceError.unknownServiceType; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unknownServiceType
 * @constant
 * @type {number}
 */
export const unknownServiceType = CreateCmLeasedCircuitServiceError_unknownServiceType; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_CreateCmLeasedCircuitServiceError: $.ASN1Decoder<CreateCmLeasedCircuitServiceError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CreateCmLeasedCircuitServiceError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateCmLeasedCircuitServiceError} The decoded data structure.
 */
export function _decode_CreateCmLeasedCircuitServiceError(el: _Element): CreateCmLeasedCircuitServiceError {
    if (!_cached_decoder_for_CreateCmLeasedCircuitServiceError) {
        _cached_decoder_for_CreateCmLeasedCircuitServiceError =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_CreateCmLeasedCircuitServiceError(el);
}


let _cached_encoder_for_CreateCmLeasedCircuitServiceError: $.ASN1Encoder<CreateCmLeasedCircuitServiceError> | null = null;


/**
 * @summary Encodes a(n) CreateCmLeasedCircuitServiceError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateCmLeasedCircuitServiceError, encoded as an ASN.1 Element.
 */
export function _encode_CreateCmLeasedCircuitServiceError(
    value: CreateCmLeasedCircuitServiceError,
    elGetter: $.ASN1Encoder<CreateCmLeasedCircuitServiceError>
): _Element {
    if (!_cached_encoder_for_CreateCmLeasedCircuitServiceError) {
        _cached_encoder_for_CreateCmLeasedCircuitServiceError =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_CreateCmLeasedCircuitServiceError(
        value,
        elGetter
    );
}


/* eslint-enable */
