/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Digest
 * @description
 *
 * Digest octets. In the CMS import of section 10.2 this is the RFC 3852
 * `Digest`. Here it is the value of
 * `DocumentSignerIdentifier.certificateDigest`. The algorithm is
 * `DeviationList.digestAlgorithm`, which must be present when this
 * alternative is used.
 *
 * Doc 9303-12, section 10.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Digest  ::=  OCTET STRING
 * ```
 */
export
type Digest = OCTET_STRING; // OctetStringType
export const _decode_Digest = $._decodeOctetString;
export const _encode_Digest = $._encodeOctetString;


/* eslint-enable */
