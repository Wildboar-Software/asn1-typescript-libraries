/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RAC
 * @description
 * 
 * Routing Area Code identifying a routing area within a location area. Defined
 * in TS 23.003 [19] clause 4.2.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type RAC = OCTET_STRING; // OctetStringType
export const _decode_RAC: $.ASN1Decoder<RAC> = (el: _Element): RAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("RAC violates SIZE constraint");
    }
    return value;
};
export const _encode_RAC: $.ASN1Encoder<RAC> = $._encodeOctetString;


/* eslint-enable */
