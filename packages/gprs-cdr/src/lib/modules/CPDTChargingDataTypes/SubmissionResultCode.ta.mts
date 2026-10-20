/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubmissionResultCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubmissionResultCode  ::=  INTEGER
 * ```
 */
export
type SubmissionResultCode = INTEGER;

export
const _decode_SubmissionResultCode: $.ASN1Decoder<SubmissionResultCode> = $._decodeInteger;

export
const _encode_SubmissionResultCode: $.ASN1Encoder<SubmissionResultCode> = $._encodeInteger;

/* eslint-enable */
