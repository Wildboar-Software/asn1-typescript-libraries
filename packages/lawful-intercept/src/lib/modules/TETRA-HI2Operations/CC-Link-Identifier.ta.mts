/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CC_Link_Identifier
 * @description
 * 
 * CC link identifier for multiparty calls when option B reuses one CC link for
 * the active call. Option A does not use it. It tells each multiparty IRI which
 * CC link carries the CC. It may use the same format as the communication
 * identity number, and then it need not be sent as part of HI3 set-up. The CIN
 * may implicitly represent it. Digits are ASCII, as for the communication
 * identity number: `12345678` is `0x31` through `0x38`. Annex E carries it in
 * the called-party subaddress as 1 to 8 decimal digits.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.1.1, clause A.5.4, annex E,
 * clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CC-Link-Identifier  ::=  OCTET STRING (SIZE (1..8))
 * ```
 */
export
type CC_Link_Identifier = OCTET_STRING; // OctetStringType
export const _decode_CC_Link_Identifier: $.ASN1Decoder<CC_Link_Identifier> = (el: _Element): CC_Link_Identifier => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("CC_Link_Identifier violates SIZE constraint");
    }
    return value;
};
export const _encode_CC_Link_Identifier: $.ASN1Encoder<CC_Link_Identifier> = $._encodeOctetString;


/* eslint-enable */
