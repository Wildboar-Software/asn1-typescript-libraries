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

/* START_OF_SYMBOL_DEFINITION _enum_for_IdentifyLockedLCSError */
export enum _enum_for_IdentifyLockedLCSError {
    administrativeStateUnlocked = 0,
    nonExistentSAP = 1,
    unknownServiceType = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_IdentifyLockedLCSError */

/* START_OF_SYMBOL_DEFINITION IdentifyLockedLCSError */
/**
 * @summary IdentifyLockedLCSError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IdentifyLockedLCSError  ::=  ENUMERATED {
 *   administrativeStateUnlocked(0), nonExistentSAP(1), unknownServiceType(2), ...
 *   }
 * ```@enum {number}
 */
export type IdentifyLockedLCSError =
    | _enum_for_IdentifyLockedLCSError
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION IdentifyLockedLCSError */

/* START_OF_SYMBOL_DEFINITION IdentifyLockedLCSError_administrativeStateUnlocked */
/**
 * @summary IdentifyLockedLCSError_administrativeStateUnlocked
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_administrativeStateUnlocked: IdentifyLockedLCSError = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdentifyLockedLCSError_administrativeStateUnlocked */

/* START_OF_SYMBOL_DEFINITION administrativeStateUnlocked */
/**
 * @summary administrativeStateUnlocked
 * @constant
 * @type {number}
 */
export const administrativeStateUnlocked: IdentifyLockedLCSError = IdentifyLockedLCSError_administrativeStateUnlocked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION administrativeStateUnlocked */

/* START_OF_SYMBOL_DEFINITION IdentifyLockedLCSError_nonExistentSAP */
/**
 * @summary IdentifyLockedLCSError_nonExistentSAP
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_nonExistentSAP: IdentifyLockedLCSError = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdentifyLockedLCSError_nonExistentSAP */

/* START_OF_SYMBOL_DEFINITION nonExistentSAP */
/**
 * @summary nonExistentSAP
 * @constant
 * @type {number}
 */
export const nonExistentSAP: IdentifyLockedLCSError = IdentifyLockedLCSError_nonExistentSAP; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonExistentSAP */

/* START_OF_SYMBOL_DEFINITION IdentifyLockedLCSError_unknownServiceType */
/**
 * @summary IdentifyLockedLCSError_unknownServiceType
 * @constant
 * @type {number}
 */
export const IdentifyLockedLCSError_unknownServiceType: IdentifyLockedLCSError = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION IdentifyLockedLCSError_unknownServiceType */

/* START_OF_SYMBOL_DEFINITION unknownServiceType */
/**
 * @summary unknownServiceType
 * @constant
 * @type {number}
 */
export const unknownServiceType: IdentifyLockedLCSError = IdentifyLockedLCSError_unknownServiceType; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unknownServiceType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentifyLockedLCSError */
let _cached_decoder_for_IdentifyLockedLCSError: $.ASN1Decoder<IdentifyLockedLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IdentifyLockedLCSError */

/* START_OF_SYMBOL_DEFINITION _decode_IdentifyLockedLCSError */
/**
 * @summary Decodes an ASN.1 element into a(n) IdentifyLockedLCSError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IdentifyLockedLCSError} The decoded data structure.
 */
export function _decode_IdentifyLockedLCSError(el: _Element) {
    if (!_cached_decoder_for_IdentifyLockedLCSError) {
        _cached_decoder_for_IdentifyLockedLCSError = $._decodeEnumerated;
    }
    return _cached_decoder_for_IdentifyLockedLCSError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IdentifyLockedLCSError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentifyLockedLCSError */
let _cached_encoder_for_IdentifyLockedLCSError: $.ASN1Encoder<IdentifyLockedLCSError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IdentifyLockedLCSError */

/* START_OF_SYMBOL_DEFINITION _encode_IdentifyLockedLCSError */
/**
 * @summary Encodes a(n) IdentifyLockedLCSError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IdentifyLockedLCSError, encoded as an ASN.1 Element.
 */
export function _encode_IdentifyLockedLCSError(
    value: IdentifyLockedLCSError,
    elGetter: $.ASN1Encoder<IdentifyLockedLCSError>
) {
    if (!_cached_encoder_for_IdentifyLockedLCSError) {
        _cached_encoder_for_IdentifyLockedLCSError = $._encodeEnumerated;
    }
    return _cached_encoder_for_IdentifyLockedLCSError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IdentifyLockedLCSError */

/* eslint-enable */
