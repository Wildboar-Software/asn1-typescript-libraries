/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MailBoxID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MailBoxID  ::= 
 *   OCTET STRING
 * ```
 */
export
type MailBoxID = OCTET_STRING; // OctetStringType

export
const _decode_MailBoxID: $.ASN1Decoder<MailBoxID> = $._decodeOctetString;

export
const _encode_MailBoxID: $.ASN1Encoder<MailBoxID> = $._encodeOctetString;

/* eslint-enable */
