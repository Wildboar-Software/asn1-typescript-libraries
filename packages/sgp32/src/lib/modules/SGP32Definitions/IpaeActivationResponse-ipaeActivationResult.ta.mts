/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaeActivationResponse_ipaeActivationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaeActivationResponse-ipaeActivationResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type IpaeActivationResponse_ipaeActivationResult = INTEGER;

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_ok
 * @constant
 * @type {number}
 */
export
const IpaeActivationResponse_ipaeActivationResult_ok: IpaeActivationResponse_ipaeActivationResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_ok
 * @constant
 * @type {number}
 */
export
const ok: IpaeActivationResponse_ipaeActivationResult = IpaeActivationResponse_ipaeActivationResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const IpaeActivationResponse_ipaeActivationResult_notSupported: IpaeActivationResponse_ipaeActivationResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaeActivationResponse_ipaeActivationResult_notSupported
 * @constant
 * @type {number}
 */
export
const notSupported: IpaeActivationResponse_ipaeActivationResult = IpaeActivationResponse_ipaeActivationResult_notSupported; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_IpaeActivationResponse_ipaeActivationResult: $.ASN1Decoder<IpaeActivationResponse_ipaeActivationResult> = $._decodeInteger;
export const _encode_IpaeActivationResponse_ipaeActivationResult: $.ASN1Encoder<IpaeActivationResponse_ipaeActivationResult> = $._encodeInteger;


/* eslint-enable */
