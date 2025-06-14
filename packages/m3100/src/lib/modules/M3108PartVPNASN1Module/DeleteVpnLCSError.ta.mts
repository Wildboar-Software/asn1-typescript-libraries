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

/* START_OF_SYMBOL_DEFINITION _enum_for_DeleteVpnLCSError */
export enum _enum_for_DeleteVpnLCSError {
    invalidServiceID = 1,
    unlockedAdministrativeState = 2,
    alreadyDeleted = 3,
    invalidCircuitNumber = 4,
    notBeinginAppropriateServiceAdministrativeState = 5,
    contractViolation = 6,
    invalidVPNIdentifier = 7,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_DeleteVpnLCSError */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError */
/**
 * @summary DeleteVpnLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteVpnLCSError  ::=  ENUMERATED {
 *   invalidServiceID(1), unlockedAdministrativeState(2), alreadyDeleted(3),
 *   invalidCircuitNumber(4), notBeinginAppropriateServiceAdministrativeState(5),
 *   contractViolation(6), invalidVPNIdentifier(7), ...
 *   }
 * ```@enum {number}
 */
export type DeleteVpnLCSError = _enum_for_DeleteVpnLCSError | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError_invalidServiceID */
/**
 * @summary DeleteVpnLCSError_invalidServiceID
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidServiceID: DeleteVpnLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError_invalidServiceID */

/* START_OF_SYMBOL_DEFINITION invalidServiceID */
/**
 * @summary invalidServiceID
 * @constant
 * @type {number}
 */
export const invalidServiceID: DeleteVpnLCSError = DeleteVpnLCSError_invalidServiceID; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidServiceID */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError_unlockedAdministrativeState */
/**
 * @summary DeleteVpnLCSError_unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_unlockedAdministrativeState: DeleteVpnLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError_unlockedAdministrativeState */

/* START_OF_SYMBOL_DEFINITION unlockedAdministrativeState */
/**
 * @summary unlockedAdministrativeState
 * @constant
 * @type {number}
 */
export const unlockedAdministrativeState: DeleteVpnLCSError = DeleteVpnLCSError_unlockedAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unlockedAdministrativeState */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError_alreadyDeleted */
/**
 * @summary DeleteVpnLCSError_alreadyDeleted
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_alreadyDeleted: DeleteVpnLCSError = 3; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError_alreadyDeleted */

/* START_OF_SYMBOL_DEFINITION alreadyDeleted */
/**
 * @summary alreadyDeleted
 * @constant
 * @type {number}
 */
export const alreadyDeleted: DeleteVpnLCSError = DeleteVpnLCSError_alreadyDeleted; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION alreadyDeleted */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError_invalidCircuitNumber */
/**
 * @summary DeleteVpnLCSError_invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidCircuitNumber: DeleteVpnLCSError = 4; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError_invalidCircuitNumber */

/* START_OF_SYMBOL_DEFINITION invalidCircuitNumber */
/**
 * @summary invalidCircuitNumber
 * @constant
 * @type {number}
 */
export const invalidCircuitNumber: DeleteVpnLCSError = DeleteVpnLCSError_invalidCircuitNumber; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidCircuitNumber */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState */
/**
 * @summary DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState: DeleteVpnLCSError = 5; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState */

/* START_OF_SYMBOL_DEFINITION notBeinginAppropriateServiceAdministrativeState */
/**
 * @summary notBeinginAppropriateServiceAdministrativeState
 * @constant
 * @type {number}
 */
export const notBeinginAppropriateServiceAdministrativeState: DeleteVpnLCSError = DeleteVpnLCSError_notBeinginAppropriateServiceAdministrativeState; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION notBeinginAppropriateServiceAdministrativeState */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError_contractViolation */
/**
 * @summary DeleteVpnLCSError_contractViolation
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_contractViolation: DeleteVpnLCSError = 6; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError_contractViolation */

/* START_OF_SYMBOL_DEFINITION contractViolation */
/**
 * @summary contractViolation
 * @constant
 * @type {number}
 */
export const contractViolation: DeleteVpnLCSError = DeleteVpnLCSError_contractViolation; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION contractViolation */

/* START_OF_SYMBOL_DEFINITION DeleteVpnLCSError_invalidVPNIdentifier */
/**
 * @summary DeleteVpnLCSError_invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const DeleteVpnLCSError_invalidVPNIdentifier: DeleteVpnLCSError = 7; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION DeleteVpnLCSError_invalidVPNIdentifier */

/* START_OF_SYMBOL_DEFINITION invalidVPNIdentifier */
/**
 * @summary invalidVPNIdentifier
 * @constant
 * @type {number}
 */
export const invalidVPNIdentifier: DeleteVpnLCSError = DeleteVpnLCSError_invalidVPNIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION invalidVPNIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteVpnLCSError */
let _cached_decoder_for_DeleteVpnLCSError: $.ASN1Decoder<DeleteVpnLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteVpnLCSError */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteVpnLCSError */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteVpnLCSError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteVpnLCSError} The decoded data structure.
 */
export function _decode_DeleteVpnLCSError(el: _Element) {
    if (!_cached_decoder_for_DeleteVpnLCSError) {
        _cached_decoder_for_DeleteVpnLCSError = $._decodeEnumerated;
    }
    return _cached_decoder_for_DeleteVpnLCSError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteVpnLCSError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteVpnLCSError */
let _cached_encoder_for_DeleteVpnLCSError: $.ASN1Encoder<DeleteVpnLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteVpnLCSError */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteVpnLCSError */
/**
 * @summary Encodes a(n) DeleteVpnLCSError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteVpnLCSError, encoded as an ASN.1 Element.
 */
export function _encode_DeleteVpnLCSError(
    value: DeleteVpnLCSError,
    elGetter: $.ASN1Encoder<DeleteVpnLCSError>
) {
    if (!_cached_encoder_for_DeleteVpnLCSError) {
        _cached_encoder_for_DeleteVpnLCSError = $._encodeEnumerated;
    }
    return _cached_encoder_for_DeleteVpnLCSError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteVpnLCSError */

/* eslint-enable */
