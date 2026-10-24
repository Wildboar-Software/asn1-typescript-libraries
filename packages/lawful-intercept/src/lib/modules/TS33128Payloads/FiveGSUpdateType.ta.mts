/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSUpdateType
 * @description
 * 
 * The purpose of the FiveGSUpdateType is to allow the UE to provide additional
 * information to the network when performing a registration procedure. Defined
 * in TS 24.501 [13] clause 9.11.3.9A, omitting the first two octets.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.1A.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUpdateType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type FiveGSUpdateType = OCTET_STRING; // OctetStringType
export const _decode_FiveGSUpdateType: $.ASN1Decoder<FiveGSUpdateType> = (el: _Element): FiveGSUpdateType => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("FiveGSUpdateType violates SIZE constraint");
    }
    return value;
};
export const _encode_FiveGSUpdateType: $.ASN1Encoder<FiveGSUpdateType> = $._encodeOctetString;


/* eslint-enable */
