/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProviderError
 * @description
 *
 * Protocol-related error on an LCS-GMO-CDR when the mobile
 * originated location request failed. Category Oc on that record:
 * included, when the operator has provisioned it, if a failure
 * happened. The values are those defined in TS 29.002.
 *
 * 3GPP TS 32.271 V12.1.0 clause 6.1.3.1.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.2.8.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProviderError  ::=  INTEGER
 * ```
 */
export
type ProviderError = INTEGER;

export
const _decode_ProviderError: $.ASN1Decoder<ProviderError> = $._decodeInteger;

export
const _encode_ProviderError: $.ASN1Encoder<ProviderError> = $._encodeInteger;

/* eslint-enable */
