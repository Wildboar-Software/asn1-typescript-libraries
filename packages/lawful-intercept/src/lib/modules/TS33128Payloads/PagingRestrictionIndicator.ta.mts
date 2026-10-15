/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PagingRestrictionIndicator
 * @description
 * 
 * Indicates the paging restriction requested by the UE or applied by the
 * network for a UE. Derived from the Paging Restriction defined in TS 24.301
 * [51] clause 9.9.3.66 and TS 24.501 [13] clause 9.11.3.77.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagingRestrictionIndicator  ::=  OCTET STRING (SIZE(1..33))
 * ```
 */
export
type PagingRestrictionIndicator = OCTET_STRING; // OctetStringType
export const _decode_PagingRestrictionIndicator: $.ASN1Decoder<PagingRestrictionIndicator> = (el: _Element): PagingRestrictionIndicator => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 33) {
        throw new ASN1SizeError("PagingRestrictionIndicator violates SIZE constraint");
    }
    return value;
};
export const _encode_PagingRestrictionIndicator: $.ASN1Encoder<PagingRestrictionIndicator> = $._encodeOctetString;


/* eslint-enable */
