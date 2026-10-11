/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalInformationOctet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalInformationOctet  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type GeographicalInformationOctet = OCTET_STRING; // OctetStringType

export function _decode_GeographicalInformationOctet (el: _Element): GeographicalInformationOctet {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("GeographicalInformationOctet violates the SIZE constraint");
    }
    return value;
}

export const _encode_GeographicalInformationOctet: $.ASN1Encoder<GeographicalInformationOctet> = $._encodeOctetString;


/* eslint-enable */
