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
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_DeleteCmLeasedCircuitServiceError {
    alreadyDeleted = 0,
    contractViolation = 1,
    invalidCircuitNumber = 2,
    unlockedAdministrativeState = 3,
}


/**
 * @summary DeleteCmLeasedCircuitServiceError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteCmLeasedCircuitServiceError  ::=  ENUMERATED {
 *   alreadyDeleted(0), contractViolation(1), invalidCircuitNumber(2),
 *   unlockedAdministrativeState(3), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type DeleteCmLeasedCircuitServiceError =
    | _enum_for_DeleteCmLeasedCircuitServiceError
    | ENUMERATED;


/**
 * @summary DeleteCmLeasedCircuitServiceError_alreadyDeleted
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_alreadyDeleted: DeleteCmLeasedCircuitServiceError = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary alreadyDeleted
 * @constant
 * @type {number}
 */
export const alreadyDeleted: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_alreadyDeleted; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteCmLeasedCircuitServiceError_contractViolation
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_contractViolation: DeleteCmLeasedCircuitServiceError = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteCmLeasedCircuitServiceError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_invalidCircuitNumber: DeleteCmLeasedCircuitServiceError = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_invalidCircuitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState: DeleteCmLeasedCircuitServiceError = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const unlockedAdministrativeState: DeleteCmLeasedCircuitServiceError = DeleteCmLeasedCircuitServiceError_unlockedAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_DeleteCmLeasedCircuitServiceError: $.ASN1Decoder<DeleteCmLeasedCircuitServiceError> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DeleteCmLeasedCircuitServiceError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteCmLeasedCircuitServiceError} The decoded data structure.
 */
export function _decode_DeleteCmLeasedCircuitServiceError(el: _Element) {
    if (!_cached_decoder_for_DeleteCmLeasedCircuitServiceError) {
        _cached_decoder_for_DeleteCmLeasedCircuitServiceError =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_DeleteCmLeasedCircuitServiceError(el);
}


let _cached_encoder_for_DeleteCmLeasedCircuitServiceError: $.ASN1Encoder<DeleteCmLeasedCircuitServiceError> | null = null;


/**
 * @summary Encodes a(n) DeleteCmLeasedCircuitServiceError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteCmLeasedCircuitServiceError, encoded as an ASN.1 Element.
 */
export function _encode_DeleteCmLeasedCircuitServiceError(
    value: DeleteCmLeasedCircuitServiceError,
    elGetter: $.ASN1Encoder<DeleteCmLeasedCircuitServiceError>
) {
    if (!_cached_encoder_for_DeleteCmLeasedCircuitServiceError) {
        _cached_encoder_for_DeleteCmLeasedCircuitServiceError =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_DeleteCmLeasedCircuitServiceError(
        value,
        elGetter
    );
}


/* eslint-enable */
