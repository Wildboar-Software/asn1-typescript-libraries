/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReservedTMGI
 * @description
 * 
 * Stage 2 identifies the TMGI used for downstream multicast to the target (3GPP
 * TS 33.108, table 14.2). Annex B.14.1 instead says to code the
 * MBMS-Session-Duration attribute of 3GPP TS 29.468. Those two statements
 * conflict, and the specification does not resolve them.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReservedTMGI  ::=  OCTET STRING
 * ```
 */
export
type ReservedTMGI = OCTET_STRING; // OctetStringType
export const _decode_ReservedTMGI: $.ASN1Decoder<ReservedTMGI> = $._decodeOctetString;
export const _encode_ReservedTMGI: $.ASN1Encoder<ReservedTMGI> = $._encodeOctetString;


/* eslint-enable */
