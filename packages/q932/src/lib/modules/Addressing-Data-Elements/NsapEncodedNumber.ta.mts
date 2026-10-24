/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NsapEncodedNumber
 * @description
 * 
 * ATM endsystem address encoded as an NSAP, 20 octets. Amendment 1 adds this as
 * `PartyNumber` alternative `nsapEncodedNumber`.
 *
 * ITU-T Rec. Q.932 (1998) Amd.1 (06/2000) Table C-1 and Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NsapEncodedNumber  ::=  OCTET STRING(SIZE (20))
 * ```
 */
export
type NsapEncodedNumber = OCTET_STRING; // OctetStringType

export function _decode_NsapEncodedNumber (el: _Element): NsapEncodedNumber {
    const value = $._decodeOctetString(el);
    if (value.length !== 20) {
        throw new ASN1SizeError("NsapEncodedNumber violates SIZE (20) constraint");
    }
    return value;
}

export const _encode_NsapEncodedNumber: $.ASN1Encoder<NsapEncodedNumber> = $._encodeOctetString;


/* eslint-enable */
