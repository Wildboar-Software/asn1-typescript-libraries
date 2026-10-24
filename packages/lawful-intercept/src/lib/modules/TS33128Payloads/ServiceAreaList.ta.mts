/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAreaList
 * @description
 * 
 * Includes a list of allowed service areas or non-allowed service areas,
 * encoded per TS 24.501 [13] clause 9.11.3.49, omitting the first two octets.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.10.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaList  ::=  OCTET STRING (SIZE(4..112))
 * ```
 */
export
type ServiceAreaList = OCTET_STRING; // OctetStringType
export const _decode_ServiceAreaList: $.ASN1Decoder<ServiceAreaList> = (el: _Element): ServiceAreaList => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 112) {
        throw new ASN1SizeError("ServiceAreaList violates SIZE constraint");
    }
    return value;
};
export const _encode_ServiceAreaList: $.ASN1Encoder<ServiceAreaList> = $._encodeOctetString;


/* eslint-enable */
