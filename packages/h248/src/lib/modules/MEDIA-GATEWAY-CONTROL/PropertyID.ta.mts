/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PropertyID
 * @description
 * 
 * One octet string in a property, statistic, or other double-wrapped value
 * (Annex A, note 3).
 *
 * The Recommendation writes this as `OCTET STRING` inside `Value`. The compiled
 * module names it `PropertyID` (`doc/h248v3.asn1`). The octets are a BER
 * encoding of the package type, not the package's property identifier; that
 * identifier is the `PkgdName`.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PropertyID  ::=  OCTET STRING
 * ```
 */
export
type PropertyID = OCTET_STRING; // OctetStringType
export const _decode_PropertyID = $._decodeOctetString;
export const _encode_PropertyID = $._encodeOctetString;


/* eslint-enable */
