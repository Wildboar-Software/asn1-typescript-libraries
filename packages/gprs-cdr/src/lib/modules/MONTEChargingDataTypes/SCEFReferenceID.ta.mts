/* eslint-disable */
import {
    type INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SCEFReferenceID
 * @description
 *
 * Identifier created by the SCEF for a Monitoring Request.
 * Combined with the SCEF Id it is globally unique for that
 * request. The integer range is 0 to 4294967295. Category M on
 * the ME-CO-CDR and inside each report in an ME-RE-CDR. On Rf
 * it is category Oc in Monitoring Event Information, and
 * category M inside each Monitoring Event Report Data. Bound
 * to SCEF-Reference-ID.
 *
 * 3GPP TS 32.278 V19.0.0 clauses 5.1, 6.1.3.2, 6.1.3.3 and 6.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFReferenceID  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type SCEFReferenceID = INTEGER;

export const _decode_SCEFReferenceID = (el: _Element): SCEFReferenceID => {
    const value = $._decodeInteger(el);
    if (value < 0 || value > 4294967295) {
        throw new ASN1OverflowError("SCEFReferenceID violates INTEGER range");
    }
    return value;
};

export
const _encode_SCEFReferenceID: $.ASN1Encoder<SCEFReferenceID> = $._encodeInteger;

/* eslint-enable */
