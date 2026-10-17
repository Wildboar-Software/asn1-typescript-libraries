/* eslint-disable */
import {
    ASN1Element as _Element,
    NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MNC
 * @description
 * 
 * Mobile network code of an E.212 PLMN identity: two or three digits, paired
 * with the mobile country code. The specification text calls this half "Mobile
 * Network Country" while citing ITU-T E.212. Same PLMN identities as the
 * country code: clause 10.5.2, and clause 6 table 6.2 when annex B.9 carries
 * packet-domain IRI (clause 6.5.1.0).
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNC  ::=  NumericString (SIZE(2..3))
 * ```
 */
export
type MNC = NumericString; // NumericString
export const _decode_MNC: $.ASN1Decoder<MNC> = (el: _Element): MNC => {
    const value = $._decodeNumericString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("MNC violates SIZE constraint");
    }
    return value;
};
export const _encode_MNC: $.ASN1Encoder<MNC> = $._encodeNumericString;


/* eslint-enable */
