/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeographicalInformationOctet
 * @description
 * 
 * Contains the geographical information of the user. Derived from the
 * GeographicalInformation type defined in TS 29.002 [47] clause 17.7.1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeographicalInformationOctet  ::=  OCTET STRING (SIZE (8))
 * ```
 */
export
type GeographicalInformationOctet = OCTET_STRING; // OctetStringType
export const _decode_GeographicalInformationOctet: $.ASN1Decoder<GeographicalInformationOctet> = (el: _Element): GeographicalInformationOctet => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("GeographicalInformationOctet violates SIZE constraint");
    }
    return value;
};
export const _encode_GeographicalInformationOctet: $.ASN1Encoder<GeographicalInformationOctet> = $._encodeOctetString;


/* eslint-enable */
