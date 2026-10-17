/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplicationID
 * @description
 * 
 * Application identifier on the UE or on the SCS/AS if RDS is used.
 *
 * 3GPP TS 33.128, clause 7.8.2.1.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationID  ::=  OCTET STRING
 * ```
 */
export
type ApplicationID = OCTET_STRING; // OctetStringType
export const _decode_ApplicationID: $.ASN1Decoder<ApplicationID> = $._decodeOctetString;
export const _encode_ApplicationID: $.ASN1Encoder<ApplicationID> = $._encodeOctetString;


/* eslint-enable */
