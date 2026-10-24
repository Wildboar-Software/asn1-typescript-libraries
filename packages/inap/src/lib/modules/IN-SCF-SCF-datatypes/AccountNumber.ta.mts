/* eslint-disable */
import {
    type NumericString,
    ASN1Element as _Element,
    ASN1SizeError,
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
function _decode_AccountNumber (el: _Element): AccountNumber {
    const value = $._decodeNumericString(el);
    if (value.length < 1 || value.length > 151) {
        throw new ASN1SizeError("AccountNumber violates SIZE constraint");
    }
    return value;
}

export
const _encode_AccountNumber: $.ASN1Encoder<AccountNumber> = $._encodeNumericString;

/* eslint-enable */
