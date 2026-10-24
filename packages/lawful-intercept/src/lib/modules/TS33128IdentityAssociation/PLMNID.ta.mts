/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PLMNID
 * @description
 * 
 * Encoded as per TS 38.413 [23] clause 9.3.3.5.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMNID  ::=  OCTET STRING (SIZE(3))
 * ```
 */
export
type PLMNID = OCTET_STRING; // OctetStringType
export const _decode_PLMNID: $.ASN1Decoder<PLMNID> = (el: _Element): PLMNID => {
    const value = $._decodeOctetString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("PLMNID violates SIZE constraint");
    }
    return value;
};
export const _encode_PLMNID: $.ASN1Encoder<PLMNID> = $._encodeOctetString;


/* eslint-enable */
