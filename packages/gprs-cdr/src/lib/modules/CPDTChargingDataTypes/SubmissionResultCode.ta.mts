/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubmissionResultCode
 * @description
 *
 * Result of a NIDD submission, carried in
 * `NIDDsubmission.submissionResultCode`. TS 32.253 does not define the
 * integer values. Table 6.4.1 binds the CDR parameter to the Result-Code
 * AVP.
 *
 * 3GPP TS 32.253 V19.0.0 table 6.1.3.4.1 and table 6.4.1.
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
