/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaeActivationResponse_ipaeActivationResult
 * @description
 * 
 * Result of IPAe activation. SGP.32 v1.2 section 3.8.4 names `ok(0)` and
 * `notSupported(1)` and does not further define the conditions. Annex C lists
 * the names only.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationResponse-ipaeActivationResult ::= INTEGER {
 *     ok(0),
 *     notSupported(1)
 * }
 * ```
 */
export
type IpaeActivationResponse_ipaeActivationResult = INTEGER;

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_ok
 * @description
 * SGP.32 v1.2 section 3.8.4 names `ok(0)` and does not further define the
 * condition that produces it. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const IpaeActivationResponse_ipaeActivationResult_ok: 0 = 0 satisfies IpaeActivationResponse_ipaeActivationResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_ok
 * @description
 * SGP.32 v1.2 section 3.8.4 names this result and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const ok: 0 = IpaeActivationResponse_ipaeActivationResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_notSupported
 * @description
 * SGP.32 v1.2 section 3.8.4 names `notSupported(1)` and does not further
 * define the condition that produces it. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const IpaeActivationResponse_ipaeActivationResult_notSupported: 1 = 1 satisfies IpaeActivationResponse_ipaeActivationResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_notSupported
 * @description
 * SGP.32 v1.2 section 3.8.4 names this result and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const notSupported: 1 = IpaeActivationResponse_ipaeActivationResult_notSupported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_IpaeActivationResponse_ipaeActivationResult: $.ASN1Decoder<IpaeActivationResponse_ipaeActivationResult> = $._decodeInteger;
export const _encode_IpaeActivationResponse_ipaeActivationResult: $.ASN1Encoder<IpaeActivationResponse_ipaeActivationResult> = $._encodeInteger;


/* eslint-enable */
