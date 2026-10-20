/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Gsm_SCFAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Gsm-SCFAddress  ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type Gsm_SCFAddress = OCTET_STRING; // OctetStringType

export const _decode_Gsm_SCFAddress = (el: _Element): Gsm_SCFAddress => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 9) {
        throw new ASN1SizeError("Gsm_SCFAddress violates SIZE constraint");
    }
    return value;
};

export
const _encode_Gsm_SCFAddress: $.ASN1Encoder<Gsm_SCFAddress> = $._encodeOctetString;

/* eslint-enable */
