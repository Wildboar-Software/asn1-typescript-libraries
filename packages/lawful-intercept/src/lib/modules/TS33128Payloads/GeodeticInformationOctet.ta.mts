/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeodeticInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeodeticInformationOctet  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type GeodeticInformationOctet = OCTET_STRING; // OctetStringType

export function _decode_GeodeticInformationOctet (el: _Element): GeodeticInformationOctet {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("GeodeticInformationOctet violates the SIZE constraint");
    }
    return value;
}

export const _encode_GeodeticInformationOctet: $.ASN1Encoder<GeodeticInformationOctet> = $._encodeOctetString;


/* eslint-enable */
