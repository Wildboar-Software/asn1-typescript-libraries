/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CertificateSerialNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateSerialNumber  ::=  INTEGER
 * ```
 */
export
type CertificateSerialNumber = INTEGER;

export
const _decode_CertificateSerialNumber: $.ASN1Decoder<CertificateSerialNumber> = $._decodeInteger;

export
const _encode_CertificateSerialNumber: $.ASN1Encoder<CertificateSerialNumber> = $._encodeInteger;

/* eslint-enable */
