/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RegistratorIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegistratorIdentifier  ::=  OCTET STRING
 * ```
 */
export
type RegistratorIdentifier = OCTET_STRING; // OctetStringType

export
const _decode_RegistratorIdentifier: $.ASN1Decoder<RegistratorIdentifier> = $._decodeOctetString;

export
const _encode_RegistratorIdentifier: $.ASN1Encoder<RegistratorIdentifier> = $._encodeOctetString;

/* eslint-enable */
