/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProviderError
 * @description
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
