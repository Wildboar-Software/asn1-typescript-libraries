/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1CharactersError,
    ASN1SizeError,
    type NumericString
} from "@wildboar/asn1";
import { ub_x121_address } from "../SelectedAttributeTypes/ub-x121-address.va.mjs";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary X121Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * X121Address  ::=  NumericString(SIZE (1..ub-x121-address))
 * ```
 */
export
type X121Address = NumericString; // NumericString

export
function _decode_X121Address (el: _Element): X121Address {
    const value = $._decodeNumericString(el);
    if (!/^[0-9 ]*$/u.test(value)) {
        throw new ASN1CharactersError("X121Address violates NumericString constraint");
    }
    if (value.length < 1 || value.length > ub_x121_address) {
        throw new ASN1SizeError("X121Address violates SIZE constraint");
    }
    return value;
}

export
const _encode_X121Address: $.ASN1Encoder<X121Address> = $._encodeNumericString;

/* eslint-enable */
