/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AgeOfLocation
 * @description
 * 
 * Integer value of the age of the location information or location estimate,
 * expressed in minutes. Value "0" indicates that the location information was
 * obtained after a successful paging procedure for Active Location Retrieval
 * when the UE is in idle mode or after a successful NG-RAN location reporting
 * procedure with the gNB when the UE is in connected mode. Any other value than
 * "0" indicates that the location information is the last known one. See TS
 * 29.572 [24] table 6.1.6.3.2-1 and TS 29.571 [17] tables 5.4.4.8-1, 5.4.4.9-1,
 * 5.4.4.52-1 and 5.4.4.53-1.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AgeOfLocation  ::=  INTEGER (0..32767)
 * ```
 */
export
type AgeOfLocation = INTEGER;
export const _decode_AgeOfLocation: $.ASN1Decoder<AgeOfLocation> = (el: _Element): AgeOfLocation => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 32767n) {
        throw new ASN1OverflowError("AgeOfLocation violates INTEGER range");
    }
    return value;
};
export const _encode_AgeOfLocation: $.ASN1Encoder<AgeOfLocation> = $._encodeInteger;


/* eslint-enable */
