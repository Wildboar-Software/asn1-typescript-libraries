/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSI_Address
 * @description
 *
 * Originating subscriber's IMSI, carried on `RPDataMO`. Nokia
 * profile component; clause 3.2 of
 * [ETSI TR 101 635 V7.0.0](https://www.etsi.org/deliver/etsi_tr/101600_101699/101635/07.00.00_60/tr_101635v070000p.pdf)
 * has no IMSI. The Nokia profile limits the string to 1..8 octets.
 * This type does not enforce that size, and neither the report nor
 * the profile states the octet encoding.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-Address  ::=  OCTET STRING
 * ```
 */
export
type IMSI_Address = OCTET_STRING; // OctetStringType
export const _decode_IMSI_Address = $._decodeOctetString;
export const _encode_IMSI_Address = $._encodeOctetString;


/* eslint-enable */
