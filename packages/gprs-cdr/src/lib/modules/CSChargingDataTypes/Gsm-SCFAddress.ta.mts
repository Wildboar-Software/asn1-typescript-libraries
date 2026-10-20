/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Gsm_SCFAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Gsm-SCFAddress  ::=  OCTET STRING ( SIZE( 1 .. 20 ) ) ( SIZE( 1 .. 9 ) )
 * ```
 */
export
type Gsm_SCFAddress = OCTET_STRING; // OctetStringType

export
const _decode_Gsm_SCFAddress: $.ASN1Decoder<Gsm_SCFAddress> = $._decodeOctetString;

export
const _encode_Gsm_SCFAddress: $.ASN1Encoder<Gsm_SCFAddress> = $._encodeOctetString;

/* eslint-enable */
