/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Cause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Cause  ::= 
 *   OCTET STRING
 * ```
 */
export
type Cause = OCTET_STRING; // OctetStringType

export
const _decode_Cause: $.ASN1Decoder<Cause> = $._decodeOctetString;

export
const _encode_Cause: $.ASN1Encoder<Cause> = $._encodeOctetString;

/* eslint-enable */
