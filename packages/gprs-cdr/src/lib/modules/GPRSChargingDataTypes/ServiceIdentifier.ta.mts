/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceIdentifier  ::=  INTEGER ( 0 .. 4294967295 )
 * ```
 */
export
type ServiceIdentifier = INTEGER;

export
const _decode_ServiceIdentifier: $.ASN1Decoder<ServiceIdentifier> = $._decodeInteger;

export
const _encode_ServiceIdentifier: $.ASN1Encoder<ServiceIdentifier> = $._encodeInteger;

/* eslint-enable */
