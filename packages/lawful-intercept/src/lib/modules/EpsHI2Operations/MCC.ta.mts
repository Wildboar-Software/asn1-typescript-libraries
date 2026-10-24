/* eslint-disable */
import {
    ASN1Element as _Element,
    type NumericString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCC
 * @description
 * 
 * Mobile country code of an E.212 PLMN identity: three digits. Clause 10.5.2
 * builds the visited-network identifier, the previous VPLMN identifier, and the
 * requesting-network identifier from this code plus the mobile network code.
 * Clause 6 table 6.2 uses the same E.212 identity for the serving system and
 * the requesting network when packet-domain IRI is delivered with annex B.9
 * (clause 6.5.1.0).
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCC  ::=  NumericString (SIZE(3))
 * ```
 */
export
type MCC = NumericString; // NumericString
export const _decode_MCC: $.ASN1Decoder<MCC> = (el: _Element): MCC => {
    const value = $._decodeNumericString(el);
    if (value.length < 3 || value.length > 3) {
        throw new ASN1SizeError("MCC violates SIZE constraint");
    }
    return value;
};
export const _encode_MCC: $.ASN1Encoder<MCC> = $._encodeNumericString;


/* eslint-enable */
