/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChannelId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChannelId  ::=  OCTET STRING
 * ```
 */
export
type ChannelId = OCTET_STRING; // OctetStringType

export
const _decode_ChannelId: $.ASN1Decoder<ChannelId> = $._decodeOctetString;

export
const _encode_ChannelId: $.ASN1Encoder<ChannelId> = $._encodeOctetString;

/* eslint-enable */
