/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSTPDU
 * @description
 * 
 * SM-TL PDU redacted as described in clause 7.4.5.2 of the present document and
 * encoded as per the PDUs defined in TS 23.040 [18] clause 9.2.2.
 *
 * 3GPP TS 33.128, clause 6.2.5.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSTPDU  ::=  OCTET STRING (SIZE(1..270))
 * ```
 */
export
type SMSTPDU = OCTET_STRING; // OctetStringType
export const _decode_SMSTPDU: $.ASN1Decoder<SMSTPDU> = (el: _Element): SMSTPDU => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 270) {
        throw new ASN1SizeError("SMSTPDU violates SIZE constraint");
    }
    return value;
};
export const _encode_SMSTPDU: $.ASN1Encoder<SMSTPDU> = $._encodeOctetString;


/* eslint-enable */
