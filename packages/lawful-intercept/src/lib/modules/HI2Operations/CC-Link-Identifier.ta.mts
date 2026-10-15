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
 * CCLID. Network option that identifies a CC link for multiparty calls. Used at
 * HI2 and HI3 only when CC links are reused (option B, clause A.5.4.2). It is
 * sent in the HI2 records and in the HI3 set-up, in addition to the CIN and the
 * NID, so each multiparty call's IRI shows which CC link carries the content.
 * Under option B, when another target call leg takes an existing CC link, send
 * an IRI-CONTINUE with the correct CID and CCLID.
 *
 * Octet string of size 1 to 8. Digits are ASCII, for example "12345678" is the
 * eight octets 0x31 through 0x38. For the subaddress option only `0` to `9`
 * shall be used. It may use the same format as the CIN. In that case it need
 * not be sent explicitly in the HI3 set-up, and the CIN may implicitly be the
 * CCLID. Table A.1.1 note 2 allows that omission. Table A.1.2, IRI only, does
 * not use a CCLID. Annex E places it in the Called Party Subaddress as decimal
 * digits, minimum 1 and maximum 8, ended by a field separator.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.1.1, clause A.1.3, clause
 * A.3.2.1, clause A.5.4.2, clause D.5, annex E.
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
