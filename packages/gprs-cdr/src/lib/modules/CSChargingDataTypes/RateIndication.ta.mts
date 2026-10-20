/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RateIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RateIndication  ::=  OCTET STRING ( SIZE( 1 ) )
 * ```
 */
export
type RateIndication = OCTET_STRING; // OctetStringType

export const _decode_RateIndication = (el: _Element): RateIndication => {
    const value = $._decodeOctetString(el);
    if (value.length !== 1) {
        throw new ASN1SizeError("RateIndication violates SIZE constraint");
    }
    return value;
};

export
const _encode_RateIndication: $.ASN1Encoder<RateIndication> = $._encodeOctetString;

/* eslint-enable */
