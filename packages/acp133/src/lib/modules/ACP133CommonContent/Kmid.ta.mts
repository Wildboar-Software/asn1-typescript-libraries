/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Kmid
 * @description
 *
 * Key-material identifier, imported from SDN.701.
 * The common-content `alid` attribute uses it as the
 * address list's key-material identifier.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.18](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.18).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Kmid  ::=  OCTET STRING
 * ```
 */
export
type Kmid = OCTET_STRING; // OctetStringType
export const _decode_Kmid: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;
export const _encode_Kmid: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
