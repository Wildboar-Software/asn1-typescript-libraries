/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UAProtocolID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UAProtocolID  ::=  OCTET STRING (SIZE(5))
 * ```
 */
export
type UAProtocolID = OCTET_STRING; // OctetStringType
export const _decode_UAProtocolID: $.ASN1Decoder<UAProtocolID> = $._decodeOctetString;
export const _encode_UAProtocolID: $.ASN1Encoder<UAProtocolID> = $._encodeOctetString;


/* eslint-enable */
