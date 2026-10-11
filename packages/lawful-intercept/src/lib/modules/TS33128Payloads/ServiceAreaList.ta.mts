/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAreaList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaList  ::=  OCTET STRING (SIZE(4..112))
 * ```
 */
export
type ServiceAreaList = OCTET_STRING; // OctetStringType

export function _decode_ServiceAreaList (el: _Element): ServiceAreaList {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 112) {
        throw new ASN1SizeError("ServiceAreaList violates the SIZE constraint");
    }
    return value;
}

export const _encode_ServiceAreaList: $.ASN1Encoder<ServiceAreaList> = $._encodeOctetString;


/* eslint-enable */
