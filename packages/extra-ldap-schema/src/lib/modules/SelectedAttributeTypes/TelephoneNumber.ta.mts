/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TelephoneNumber  ::=  PrintableString(SIZE (1..ub-telephone-number))
 * ```
 */
export
type TelephoneNumber = PrintableString; // PrintableString

export
const _decode_TelephoneNumber: $.ASN1Decoder<TelephoneNumber> = $._decodePrintableString;

export
const _encode_TelephoneNumber: $.ASN1Encoder<TelephoneNumber> = $._encodePrintableString;

/* eslint-enable */
