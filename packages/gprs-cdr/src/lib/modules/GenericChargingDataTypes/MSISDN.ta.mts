/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MSISDN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MSISDN      ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type MSISDN = OCTET_STRING; // OctetStringType

export const _decode_MSISDN = (el: _Element): MSISDN => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 9) {
        throw new ASN1SizeError("MSISDN violates SIZE constraint");
    }
    return value;
};

export
const _encode_MSISDN: $.ASN1Encoder<MSISDN> = $._encodeOctetString;

/* eslint-enable */
