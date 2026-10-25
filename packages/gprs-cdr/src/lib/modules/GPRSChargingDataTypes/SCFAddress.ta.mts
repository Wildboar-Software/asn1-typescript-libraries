/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCFAddress
 * @description
 * 
 * Address of the CAMEL gsmSCF. TS 32.251 places CAMEL online charging
 * outside its scope (clause 5.3.1.0).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCFAddress  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type SCFAddress = OCTET_STRING; // OctetStringType

export const _decode_SCFAddress = (el: _Element): SCFAddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("SCFAddress violates SIZE constraint");
    }
    return value;
};

export
const _encode_SCFAddress: $.ASN1Encoder<SCFAddress> = $._encodeOctetString;

/* eslint-enable */
