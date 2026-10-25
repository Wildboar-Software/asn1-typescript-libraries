/* eslint-disable */
import {
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


/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ReleaseProtectionError {
    failure = 0,
    timeout = 1,
}


/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```
 *
 * @enum {number}
 */
export type ReleaseProtectionError = _enum_for_ReleaseProtectionError;


/**
 * @summary ReleaseProtectionError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseProtectionError  ::=  ENUMERATED {failure(0), timeout(1)}
 * ```
 *
 * @enum {number}
 */
export const ReleaseProtectionError = _enum_for_ReleaseProtectionError;


/**
 * @summary ReleaseProtectionError_failure
 * @constant
 * @type {number}
 */
export const ReleaseProtectionError_failure =
    ReleaseProtectionError.failure; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary failure
 * @constant
 * @type {number}
 */
export const failure =
    ReleaseProtectionError.failure; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary ReleaseProtectionError_timeout
 * @constant
 * @type {number}
 */
export const ReleaseProtectionError_timeout =
    ReleaseProtectionError.timeout; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary timeout
 * @constant
 * @type {number}
 */
export const timeout =
    ReleaseProtectionError.timeout; /* SHORT_NAMED_ENUMERATED_VALUE */




export function _decode_ReleaseProtectionError(el: _Element): ReleaseProtectionError {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ReleaseProtectionError.failure: return ReleaseProtectionError.failure;
        case ReleaseProtectionError.timeout: return ReleaseProtectionError.timeout;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for ReleaseProtectionError.',
                el,
            );
    }
}




export const _encode_ReleaseProtectionError: $.ASN1Encoder<ReleaseProtectionError> = $._encodeEnumerated as $.ASN1Encoder<ReleaseProtectionError>;


/* eslint-enable */
