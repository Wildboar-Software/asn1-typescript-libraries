/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubaddressInformation
 * @description
 * 
 * Contents of a user-specified subaddress, 1 to 20 octets, coded according to
 * user requirements. Some networks limit the value to another length, for
 * example 4 octets.
 *
 * ITU-T Rec. Q.932 (05/1998) Annex C; ITU-T Rec. Q.932 (1998) Amd.1 (06/2000)
 * Table C-1 bis.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubaddressInformation  ::=  OCTET STRING(SIZE (1..20))
 * ```
 */
export
type SubaddressInformation = OCTET_STRING; // OctetStringType

export function _decode_SubaddressInformation (el: _Element): SubaddressInformation {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("SubaddressInformation violates SIZE (1..20) constraint");
    }
    return value;
}

export const _encode_SubaddressInformation: $.ASN1Encoder<SubaddressInformation> = $._encodeOctetString;


/* eslint-enable */
