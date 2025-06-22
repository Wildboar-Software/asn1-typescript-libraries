/* eslint-disable */
import {
    ASN1Element as _Element,
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
 * @summary DenialResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DenialResponse {
    denyWithResponse = 0,
    denyWithoutResponse = 1,
    abortAssociation = 2,
    denyWithFalseResponse = 3,
}

/**
 * @summary DenialResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```
 *
 * @enum {number}
 */
export type DenialResponse = _enum_for_DenialResponse;

/**
 * @summary DenialResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialResponse  ::=  ENUMERATED {
 *   denyWithResponse(0), denyWithoutResponse(1), abortAssociation(2),
 *   denyWithFalseResponse(3)}
 * ```
 *
 * @enum {number}
 */
export const DenialResponse = _enum_for_DenialResponse;

/**
 * @summary DenialResponse_denyWithResponse
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithResponse: DenialResponse =
    DenialResponse.denyWithResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithResponse
 * @constant
 * @type {number}
 */
export const denyWithResponse: DenialResponse =
    DenialResponse.denyWithResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialResponse_denyWithoutResponse
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithoutResponse: DenialResponse =
    DenialResponse.denyWithoutResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithoutResponse
 * @constant
 * @type {number}
 */
export const denyWithoutResponse: DenialResponse =
    DenialResponse.denyWithoutResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialResponse_abortAssociation
 * @constant
 * @type {number}
 */
export const DenialResponse_abortAssociation: DenialResponse =
    DenialResponse.abortAssociation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abortAssociation
 * @constant
 * @type {number}
 */
export const abortAssociation: DenialResponse =
    DenialResponse.abortAssociation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialResponse_denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const DenialResponse_denyWithFalseResponse: DenialResponse =
    DenialResponse.denyWithFalseResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary denyWithFalseResponse
 * @constant
 * @type {number}
 */
export const denyWithFalseResponse: DenialResponse =
    DenialResponse.denyWithFalseResponse; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DenialResponse = $._decodeEnumerated;


export const _encode_DenialResponse = $._encodeEnumerated;


/* eslint-enable */
