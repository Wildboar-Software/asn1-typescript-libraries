/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FFDAppendIndicator
 * @description
 *
 * FFD Append Indicator (S-CDR, M-CDR): This field contains an indicator
 * whether CAMEL free format data is to be appended to free format data
 * stored in previous partial CDR. This field is needed in CDR post
 * processing to sort out valid free format data for that call leg from
 * sequence of partial records. Creation of partial records is independent of
 * received FCIs and thus valid free format data may be divided to different
 * partial records. If field is missing then free format data in this CDR
 * replaces all received free format data in previous CDRs. Append indicator
 * is not needed in the first partial record. In following partial records
 * indicator shall get value true if all FCIs received during that partial
 * record have append indicator. If one or more of the received FCIs for that
 * call leg during the partial record do not have append indicator then this
 * field shall be missing.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FFDAppendIndicator  ::=  BOOLEAN
 * ```
 */
export
type FFDAppendIndicator = BOOLEAN; // BooleanType

export
const _decode_FFDAppendIndicator: $.ASN1Decoder<FFDAppendIndicator> = $._decodeBoolean;

export
const _encode_FFDAppendIndicator: $.ASN1Encoder<FFDAppendIndicator> = $._encodeBoolean;

/* eslint-enable */
