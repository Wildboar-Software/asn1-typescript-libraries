/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginalCalledPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginalCalledPartyID  ::= 
 *   OCTET STRING
 *     (SIZE (minOriginalCalledPartyIDLength..maxOriginalCalledPartyIDLength))
 * ```
 */
export
type OriginalCalledPartyID = OCTET_STRING; // OctetStringType

export
const _decode_OriginalCalledPartyID: $.ASN1Decoder<OriginalCalledPartyID> = $._decodeOctetString;

export
const _encode_OriginalCalledPartyID: $.ASN1Encoder<OriginalCalledPartyID> = $._encodeOctetString;

/* eslint-enable */
