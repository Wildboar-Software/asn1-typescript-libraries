/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceProfileIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceProfileIdentifier  ::=  OCTET STRING
 * ```
 */
export
type ServiceProfileIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_ServiceProfileIdentifier: $.ASN1Decoder<ServiceProfileIdentifier> = $._decodeOctetString;

export
const _encode_ServiceProfileIdentifier: $.ASN1Encoder<ServiceProfileIdentifier> = $._encodeOctetString;

/* eslint-enable */
