/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EPSUserLocationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSUserLocationInformation  ::=  OCTET STRING
 * ```
 */
export
type EPSUserLocationInformation = OCTET_STRING; // OctetStringType

export const _decode_EPSUserLocationInformation: $.ASN1Decoder<EPSUserLocationInformation> = $._decodeOctetString;

export const _encode_EPSUserLocationInformation: $.ASN1Encoder<EPSUserLocationInformation> = $._encodeOctetString;

/* eslint-enable */
