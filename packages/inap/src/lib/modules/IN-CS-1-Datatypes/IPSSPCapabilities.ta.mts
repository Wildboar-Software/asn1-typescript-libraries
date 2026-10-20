/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPSSPCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPSSPCapabilities  ::= 
 *   OCTET STRING(SIZE (minIPSSPCapabilitiesLength..maxIPSSPCapabilitiesLength))
 * ```
 */
export
type IPSSPCapabilities = OCTET_STRING; // OctetStringType

export
const _decode_IPSSPCapabilities: $.ASN1Decoder<IPSSPCapabilities> = $._decodeOctetString;

export
const _encode_IPSSPCapabilities: $.ASN1Encoder<IPSSPCapabilities> = $._encodeOctetString;

/* eslint-enable */
