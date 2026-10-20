/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RedirectingPartyID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RedirectingPartyID  ::= 
 *   OCTET STRING(SIZE (minRedirectingPartyIDLength..maxRedirectingPartyIDLength))
 * ```
 */
export
type RedirectingPartyID = OCTET_STRING; // OctetStringType

export
const _decode_RedirectingPartyID: $.ASN1Decoder<RedirectingPartyID> = $._decodeOctetString;

export
const _encode_RedirectingPartyID: $.ASN1Encoder<RedirectingPartyID> = $._encodeOctetString;

/* eslint-enable */
