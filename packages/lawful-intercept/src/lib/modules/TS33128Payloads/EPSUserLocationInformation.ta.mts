/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSUserLocationInformation
 * @description
 * 
 * An extendable IE derived from the User Location Information IE (ULI) defined
 * in TS 29.274 [87] clause 8.21.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
