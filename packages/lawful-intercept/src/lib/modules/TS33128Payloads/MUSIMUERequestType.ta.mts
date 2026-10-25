/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MUSIMUERequestType
 * @description
 * 
 * Indicates the reason the UE has requested the release of NAS Signalling or
 * rejected paging. Encoded per UE Request Type omitting the first two octets.
 * See TS 24.301 [51] clause 9.9.3.65.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MUSIMUERequestType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type MUSIMUERequestType = OCTET_STRING; // OctetStringType
export const _decode_MUSIMUERequestType: $.ASN1Decoder<MUSIMUERequestType> = (el: _Element): MUSIMUERequestType => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("MUSIMUERequestType violates SIZE constraint");
    }
    return value;
};
export const _encode_MUSIMUERequestType: $.ASN1Encoder<MUSIMUERequestType> = $._encodeOctetString;


/* eslint-enable */
