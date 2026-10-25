/* eslint-disable */
import { ASN1Element as _Element, type ENUMERATED } from "@wildboar/asn1";
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
export const TLSResponse_success = _enum_for_TLSResponse.success satisfies TLSResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 *
 * Willing and able; proceed with TLS handshake. (0)
 *
 * @constant
 * @type {number}
 */
export const success = TLSResponse_success satisfies TLSResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_operationsError
 * @description
 *
 * Bad sequencing (e.g. StartTLS after TLS already established). (1)
 *
 * @constant
 * @type {number}
 */
export const TLSResponse_operationsError = _enum_for_TLSResponse.operationsError satisfies TLSResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary operationsError
 * @description
 *
 * Bad sequencing (e.g. StartTLS after TLS already established). (1)
 *
 * @constant
 * @type {number}
 */
export const operationsError = TLSResponse_operationsError satisfies TLSResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_protocolError
 * @description
 *
 * TLS not supported (design or configuration). (2)
 *
 * @constant
 * @type {number}
 */
export const TLSResponse_protocolError = _enum_for_TLSResponse.protocolError satisfies TLSResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocolError
 * @description
 *
 * TLS not supported (design or configuration). (2)
 *
 * @constant
 * @type {number}
 */
export const protocolError = TLSResponse_protocolError satisfies TLSResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TLSResponse_unavailable
 * @description
 *
 * TLS supported but cannot be established at this time. (3)
 *
 * @constant
 * @type {number}
 */
export const TLSResponse_unavailable = _enum_for_TLSResponse.unavailable satisfies TLSResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unavailable
 * @description
 *
 * TLS supported but cannot be established at this time. (3)
 *
 * @constant
 * @type {number}
 */
export const unavailable = TLSResponse_unavailable satisfies TLSResponse; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_TLSResponse = $._decodeEnumerated;


export const _encode_TLSResponse = $._encodeEnumerated;


/* eslint-enable */
