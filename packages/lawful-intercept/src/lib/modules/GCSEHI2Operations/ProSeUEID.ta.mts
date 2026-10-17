/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProSeUEID
 * @description
 * 
 * ProSe UE identity. Three octets corresponding to the source L2 ID of the MAC
 * PDU in 3GPP TS 25.321 (reference 85). 3GPP TS 33.108, annex B.14.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProSeUEID  ::=  OCTET STRING
 * ```
 */
export
type ProSeUEID = OCTET_STRING; // OctetStringType
export const _decode_ProSeUEID: $.ASN1Decoder<ProSeUEID> = $._decodeOctetString;
export const _encode_ProSeUEID: $.ASN1Encoder<ProSeUEID> = $._encodeOctetString;


/* eslint-enable */
