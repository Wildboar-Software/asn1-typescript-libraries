/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AccessPointNameNI
 * @description
 * 
 * Network-identifier part of the APN, the logical name of the access point
 * to the external packet data network (table 6.1.1.1). The APN is the
 * accuracy to which charging information identifies the destination
 * network (clause 5.1.2). In an IPE-CDR it reflects the NSWO APN when the
 * served user is a 3GPP UE (table D.4.1.2.1.1).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessPointNameNI  ::=  IA5String  ( SIZE( 1 .. 63 ) )
 * ```
 */
export
type AccessPointNameNI = IA5String; // IA5String

export const _decode_AccessPointNameNI = (el: _Element): AccessPointNameNI => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 63) {
        throw new ASN1SizeError("AccessPointNameNI violates SIZE constraint");
    }
    return value;
};

export
const _encode_AccessPointNameNI: $.ASN1Encoder<AccessPointNameNI> = $._encodeIA5String;

/* eslint-enable */
