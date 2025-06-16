/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_TLSResponse {
    success = 0,
    operationsError = 1,
    protocolError = 2,
    unavailable = 3,
}

/**
 * @summary TLSResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TLSResponse  ::=  ENUMERATED {
 *   success         (0),
 *   operationsError (1),
 *   protocolError   (2),
 *   unavailable     (3),
 *   ...}
 * ```
 *
 * @enum {number}
 */
export type TLSResponse = _enum_for_TLSResponse | ENUMERATED;

/**
 * @summary TLSResponse_success
 * @constant
 * @type {number}
 */
export const TLSResponse_success: TLSResponse = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @constant
 * @type {number}
 */
export const success: TLSResponse = TLSResponse_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_operationsError
 * @constant
 * @type {number}
 */
export const TLSResponse_operationsError: TLSResponse = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationsError
 * @constant
 * @type {number}
 */
export const operationsError: TLSResponse = TLSResponse_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_protocolError
 * @constant
 * @type {number}
 */
export const TLSResponse_protocolError: TLSResponse = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @constant
 * @type {number}
 */
export const protocolError: TLSResponse = TLSResponse_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_unavailable
 * @constant
 * @type {number}
 */
export const TLSResponse_unavailable: TLSResponse = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailable
 * @constant
 * @type {number}
 */
export const unavailable: TLSResponse = TLSResponse_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TLSResponse = $._decodeEnumerated;


export const _encode_TLSResponse = $._encodeEnumerated;


/* eslint-enable */
