/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SAC
 * @description
 * 
 * The Service Area Code (SAC) together with the PLMN-Id and the LAC constitute
 * the Service Area Identifier. The SAC is defined by the operator and set in
 * the RNC via O&M. Defined in TS 23.003 [19] clause 12.5.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type SAC = OCTET_STRING; // OctetStringType
export const _decode_SAC: $.ASN1Decoder<SAC> = (el: _Element): SAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("SAC violates SIZE constraint");
    }
    return value;
};
export const _encode_SAC: $.ASN1Encoder<SAC> = $._encodeOctetString;


/* eslint-enable */
