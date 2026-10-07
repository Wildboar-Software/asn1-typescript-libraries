/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertificateSerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateSerialNumber   ::=   INTEGER
 * ```
 */
export
type CertificateSerialNumber = INTEGER;
export const _decode_CertificateSerialNumber = $._decodeInteger;
export const _encode_CertificateSerialNumber = $._encodeInteger;


/* eslint-enable */
