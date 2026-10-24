/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ADatP3Parameters
 * @description
 * 
 * Parameters of the ADatP-3 body part. Edition 2 defaults the integer to 0 and
 * does not define other values. Clause 7.3.12.1 says the body part includes the
 * ADatP-3 message index reference number, and does not identify that number
 * with this integer. STANAG 4406 (Ed. 2), Annex A, B1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ADatP3Parameters  ::=  INTEGER
 * ```
 */
export
type ADatP3Parameters = INTEGER;
export const _decode_ADatP3Parameters: $.ASN1Decoder<ADatP3Parameters> = $._decodeInteger;
export const _encode_ADatP3Parameters: $.ASN1Encoder<ADatP3Parameters> = $._encodeInteger;


/* eslint-enable */
