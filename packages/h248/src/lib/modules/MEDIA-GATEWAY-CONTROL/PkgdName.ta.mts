/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PkgdName
 * @description
 * 
 * Four-octet package-scoped name: two octets of package identifier, then two
 * octets of property, event, signal, or statistic identifier (Annex A).
 *
 * 0xFFFF in the first two octets wildcards the package. CHOOSE is not allowed.
 * 0x0000 in the first two octets selects a native property tag from Annex C.
 * 0xFFFF in the last two octets wildcards the item, and again CHOOSE is not
 * allowed. A package wildcard is permitted only when the item is wildcarded as
 * well.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PkgdName  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type PkgdName = OCTET_STRING; // OctetStringType
export const _decode_PkgdName = (el: _Element): PkgdName => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4) {
        throw new ASN1SizeError("PkgdName violates SIZE constraint");
    }
    return value;
};
export const _encode_PkgdName = $._encodeOctetString;


/* eslint-enable */
