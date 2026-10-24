/* eslint-disable */
import {
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddressString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressString  ::=  NumericString
 * ```
 */
export
type AddressString = NumericString; // NumericString

export
const _decode_AddressString: $.ASN1Decoder<AddressString> = $._decodeNumericString;

export
const _encode_AddressString: $.ASN1Encoder<AddressString> = $._encodeNumericString;

/* eslint-enable */
