/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FailureHandlingContinue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FailureHandlingContinue  ::=  BOOLEAN
 * ```
 */
export
type FailureHandlingContinue = BOOLEAN; // BooleanType

export
const _decode_FailureHandlingContinue: $.ASN1Decoder<FailureHandlingContinue> = $._decodeBoolean;

export
const _encode_FailureHandlingContinue: $.ASN1Encoder<FailureHandlingContinue> = $._encodeBoolean;

/* eslint-enable */
