/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1SizeError,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NSAPSubaddress
 * @description
 * 
 * NSAP subaddress according to ITU-T Rec. X.213, 1 to 20 octets. Some networks
 * limit the value to another length, for example 4 octets.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NSAPSubaddress  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export
type NSAPSubaddress = OCTET_STRING; // OctetStringType

export function _decode_NSAPSubaddress (el: _Element): NSAPSubaddress {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("NSAPSubaddress violates SIZE (1..20) constraint");
    }
    return value;
}

export const _encode_NSAPSubaddress: $.ASN1Encoder<NSAPSubaddress> = $._encodeOctetString;


/* eslint-enable */
