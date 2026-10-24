/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GeodeticInformationOctet
 * @description
 * 
 * Contains the geodetic information of the user. Derived from the
 * GeodeticInformation type defined in TS 29.002 [47] clause 17.7.1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeodeticInformationOctet  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type GeodeticInformationOctet = OCTET_STRING; // OctetStringType
export const _decode_GeodeticInformationOctet: $.ASN1Decoder<GeodeticInformationOctet> = (el: _Element): GeodeticInformationOctet => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("GeodeticInformationOctet violates SIZE constraint");
    }
    return value;
};
export const _encode_GeodeticInformationOctet: $.ASN1Encoder<GeodeticInformationOctet> = $._encodeOctetString;


/* eslint-enable */
