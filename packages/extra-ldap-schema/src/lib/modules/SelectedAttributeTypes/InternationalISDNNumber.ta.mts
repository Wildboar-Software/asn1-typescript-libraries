/* eslint-disable */
import {
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalISDNNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalISDNNumber  ::= 
 *   NumericString(SIZE (1..ub-international-isdn-number))
 * ```
 */
export
type InternationalISDNNumber = NumericString; // NumericString

export
const _decode_InternationalISDNNumber: $.ASN1Decoder<InternationalISDNNumber> = $._decodeNumericString;

export
const _encode_InternationalISDNNumber: $.ASN1Encoder<InternationalISDNNumber> = $._encodeNumericString;

/* eslint-enable */
