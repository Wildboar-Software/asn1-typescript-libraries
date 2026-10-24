/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TruncatedSMSTPDU
 * @description
 * 
 * SM-TL PDU encoded per the PDUs defined in TS 23.040 [18] clause 9.2.2 but
 * truncated to remove TP-User-Data (TS 23.040 [18] clause 9.2.3.24).
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TruncatedSMSTPDU  ::=  OCTET STRING (SIZE(1..130))
 * ```
 */
export
type TruncatedSMSTPDU = OCTET_STRING; // OctetStringType
export const _decode_TruncatedSMSTPDU: $.ASN1Decoder<TruncatedSMSTPDU> = (el: _Element): TruncatedSMSTPDU => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 130) {
        throw new ASN1SizeError("TruncatedSMSTPDU violates SIZE constraint");
    }
    return value;
};
export const _encode_TruncatedSMSTPDU: $.ASN1Encoder<TruncatedSMSTPDU> = $._encodeOctetString;


/* eslint-enable */
