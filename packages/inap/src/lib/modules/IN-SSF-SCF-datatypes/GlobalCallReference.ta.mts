/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GlobalCallReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCallReference  ::= 
 *   OCTET STRING
 * ```
 */
export
type GlobalCallReference = OCTET_STRING; // OctetStringType

export
const _decode_GlobalCallReference: $.ASN1Decoder<GlobalCallReference> = $._decodeOctetString;

export
const _encode_GlobalCallReference: $.ASN1Encoder<GlobalCallReference> = $._encodeOctetString;

/* eslint-enable */
