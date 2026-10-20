/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkCallReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCallReference  ::=  OCTET STRING ( SIZE( 1 .. 8 ) )
 * ```
 */
export
type NetworkCallReference = OCTET_STRING; // OctetStringType

export
const _decode_NetworkCallReference: $.ASN1Decoder<NetworkCallReference> = $._decodeOctetString;

export
const _encode_NetworkCallReference: $.ASN1Encoder<NetworkCallReference> = $._encodeOctetString;

/* eslint-enable */
