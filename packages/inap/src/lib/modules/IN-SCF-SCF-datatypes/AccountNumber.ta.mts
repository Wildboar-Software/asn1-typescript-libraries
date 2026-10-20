/* eslint-disable */
import {
    NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccountNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccountNumber  ::=  NumericString(SIZE (1..151))
 * ```
 */
export
type AccountNumber = NumericString; // NumericString

export
const _decode_AccountNumber: $.ASN1Decoder<AccountNumber> = $._decodeNumericString;

export
const _encode_AccountNumber: $.ASN1Encoder<AccountNumber> = $._encodeNumericString;

/* eslint-enable */
