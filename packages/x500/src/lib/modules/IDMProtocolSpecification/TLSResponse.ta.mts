/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TLSResponse
 * @description
 *
 * Answer to StartTLS. Only `success` (0) starts the TLS handshake;
 * any other value means do not negotiate TLS. Extensible.
 *
 * @enum {number}
 */
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
 * Responder's answer to StartTLS. (0) proceed with TLS handshake;
 * anything else: unwilling/unable — do not start TLS. (1) bad
 * sequencing (e.g. TLS already up); (2) TLS unsupported by design or
 * config; (3) supported but cannot establish now. Extensible.
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
 * @description
 *
 * Willing and able; proceed with TLS handshake. (0)
 *
 * @constant
 * @type {number}
 */
export const TLSResponse_success: TLSResponse = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 *
 * Willing and able; proceed with TLS handshake. (0)
 *
 * @constant
 * @type {number}
 */
export const success: TLSResponse = TLSResponse_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_operationsError
 * @description
 *
 * Bad sequencing (e.g. StartTLS after TLS already established). (1)
 *
 * @constant
 * @type {number}
 */
export const TLSResponse_operationsError: TLSResponse = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationsError
 * @description
 *
 * Bad sequencing (e.g. StartTLS after TLS already established). (1)
 *
 * @constant
 * @type {number}
 */
export const operationsError: TLSResponse = TLSResponse_operationsError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_protocolError
 * @description
 *
 * TLS not supported (design or configuration). (2)
 *
 * @constant
 * @type {number}
 */
export const TLSResponse_protocolError: TLSResponse = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @description
 *
 * TLS not supported (design or configuration). (2)
 *
 * @constant
 * @type {number}
 */
export const protocolError: TLSResponse = TLSResponse_protocolError; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_unavailable
 * @description
 *
 * TLS supported but cannot be established at this time. (3)
 *
 * @constant
 * @type {number}
 */
export const TLSResponse_unavailable: TLSResponse = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailable
 * @description
 *
 * TLS supported but cannot be established at this time. (3)
 *
 * @constant
 * @type {number}
 */
export const unavailable: TLSResponse = TLSResponse_unavailable; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TLSResponse = $._decodeEnumerated;


export const _encode_TLSResponse = $._encodeEnumerated;


/* eslint-enable */
