/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceLevelAAContainer
 * @description
 * 
 * Provides information related to registration for UAS services. Include if
 * present in the REGISTRATION ACCEPT message. See TS 24.501 [13] clause 8.2.7
 * and 9.11.2.10.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceLevelAAContainer  ::=  OCTET STRING (SIZE(4..65538))
 * ```
 */
export
type ServiceLevelAAContainer = OCTET_STRING; // OctetStringType
export const _decode_ServiceLevelAAContainer: $.ASN1Decoder<ServiceLevelAAContainer> = (el: _Element): ServiceLevelAAContainer => {
    const value = $._decodeOctetString(el);
    if (value.length < 4 || value.length > 65538) {
        throw new ASN1SizeError("ServiceLevelAAContainer violates SIZE constraint");
    }
    return value;
};
export const _encode_ServiceLevelAAContainer: $.ASN1Encoder<ServiceLevelAAContainer> = $._encodeOctetString;


/* eslint-enable */
