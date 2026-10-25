/* eslint-disable */
import {
    type ASN1Element as _Element,
    type BIT_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLIIdType
 * @description
 * 
 * 16-bit tag for one result of interception. It identifies the LEA, the target,
 * the network operator or service provider, and the warrant reference. First
 * returned in `LIACTIVATEconf` when activation succeeds, then used in the
 * header of `TARGETACTIVITYMONITORind` and `TARGETCOMMSMONITORind`, in traffic
 * indications, and in `LIMODIFYreq`. The internal interface uses it to
 * correlate what will be sent to the LEMF with the internal interception
 * provision (clause 4.3.2). The result seen at the LEMF is separately
 * identified so that the LEA, the target, the operator, and the warrant can be
 * named. Each LI interface instance carries the result for a single target;
 * several results use several instances, on separate channels or multiplexed,
 * with a unique correlation between content and intercept-related information
 * (clause 4.7).
 *
 * ETSI EN 301 040 V2.1.1 (2006-03), clause 6.1, clause 4.3.2, clause 4.7.
 * https://www.etsi.org/deliver/etsi_en/301000_301099/301040/02.01.01_60/en_301040v020101p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLIIdType  ::=  BIT STRING (SIZE (16))
 * ```
 */
export
type TLIIdType = BIT_STRING;
export const _decode_TLIIdType: $.ASN1Decoder<TLIIdType> = (el: _Element): TLIIdType => {
    const value = $._decodeBitString(el);
    if (value.length < 16 || value.length > 16) {
        throw new ASN1SizeError("TLIIdType violates SIZE constraint");
    }
    return value;
};
export const _encode_TLIIdType: $.ASN1Encoder<TLIIdType> = $._encodeBitString;


/* eslint-enable */
