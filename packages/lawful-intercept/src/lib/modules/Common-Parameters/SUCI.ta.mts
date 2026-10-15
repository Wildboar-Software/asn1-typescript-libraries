/* eslint-disable */
import {
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUCI
 * @description
 *
 * Subscription Concealed Identifier, as defined in 3GPP TS 33.501,
 * clause 6.12.2. The structure is given in 3GPP TS 23.003,
 * clause 2.2B, and the information-element encoding in 3GPP
 * TS 24.501.
 *
 * These octets are the SUCI defined in 3GPP TS 24.501,
 * clause 9.11.3.4, with the 5GS mobile identity IEI and length fields
 * omitted (octets 1, 2, and 3 of Figure 9.11.3.4.3). The XSD and
 * string forms carry the same octets in hexadecimal. The string
 * pattern is `[0-9a-f]+`.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.41, citing 3GPP TS 33.501
 * and 3GPP TS 24.501.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUCI  ::=  OCTET STRING
 * ```
 */
export
type SUCI = OCTET_STRING; // OctetStringType
export const _decode_SUCI: $.ASN1Decoder<SUCI> = $._decodeOctetString;
export const _encode_SUCI: $.ASN1Encoder<SUCI> = $._encodeOctetString;


/* eslint-enable */
