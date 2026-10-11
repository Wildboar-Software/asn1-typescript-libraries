/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxPermittedEncryptionAlgorithmsLength
 * @description
 *
 * Maximum length of PermittedEncryptionAlgorithms from 3GPP TS 25.413 (9
 * octets). Padding bits, if needed, are in the least significant bits of the
 * last octet. (3GPP TS 29.002 V19.1.0 clause 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxPermittedEncryptionAlgorithmsLength INTEGER ::= 9
 * ```
 * 
 * @constant
 */
export
const maxPermittedEncryptionAlgorithmsLength: INTEGER = 9;

/* eslint-enable */
