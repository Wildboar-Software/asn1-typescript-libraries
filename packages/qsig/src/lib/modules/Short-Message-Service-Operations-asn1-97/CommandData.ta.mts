/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommandData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommandData  ::=  OCTET STRING (SIZE(0..157))
 * ```
 */
export
type CommandData = OCTET_STRING; // OctetStringType

export
const _decode_CommandData: $.ASN1Decoder<CommandData> = $._decodeOctetString;

export
const _encode_CommandData: $.ASN1Encoder<CommandData> = $._encodeOctetString;

/* eslint-enable */
