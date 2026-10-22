/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CivicAddressInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CivicAddressInformation  ::=  OCTET STRING
 * ```
 */
export
type CivicAddressInformation = OCTET_STRING; // OctetStringType

export
const _decode_CivicAddressInformation: $.ASN1Decoder<CivicAddressInformation> = $._decodeOctetString;

export
const _encode_CivicAddressInformation: $.ASN1Encoder<CivicAddressInformation> = $._encodeOctetString;

/* eslint-enable */
