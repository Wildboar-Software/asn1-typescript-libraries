/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Carrier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Carrier  ::=  OCTET STRING
 * ```
 */
export
type Carrier = OCTET_STRING; // OctetStringType

export
const _decode_Carrier: $.ASN1Decoder<Carrier> = $._decodeOctetString;

export
const _encode_Carrier: $.ASN1Encoder<Carrier> = $._encodeOctetString;

/* eslint-enable */
