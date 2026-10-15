/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RANUES1APID
 * @description
 * 
 * Identity that the eNB uses to uniquely identify the target UE over the S1
 * Interface. See TS 36.413 [38] clause 9.2.3.4.
 *
 * 3GPP TS 33.128, clause 6.3.2.2A.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RANUES1APID  ::=  INTEGER (0..16777215)
 * ```
 */
export
type RANUES1APID = INTEGER;
export const _decode_RANUES1APID: $.ASN1Decoder<RANUES1APID> = (el: _Element): RANUES1APID => {
    const value = $._decodeInteger(el);
    const _n = typeof value === "bigint" ? value : BigInt(value);
    if (_n < 0n || _n > 16777215n) {
        throw new ASN1OverflowError("RANUES1APID violates INTEGER range");
    }
    return value;
};
export const _encode_RANUES1APID: $.ASN1Encoder<RANUES1APID> = $._encodeInteger;


/* eslint-enable */
