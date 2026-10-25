/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNConnectionIndicationFlags
 * @description
 * 
 * Shall be included if the Indication Flags field is present in the network
 * message (see TS 29.274 [87] clauses 7.2.3, 7.2.4, 7.2.7, 7.2.8, 7.2.9,
 * 7.2.10, 7.2.15 and 7.2.16). The value of this parameter shall be set to the
 * value of the Indication IE (see TS 29.274 [87] clause 8.12) starting with
 * octet 5.
 *
 * 3GPP TS 33.128, clause 6.3.3.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNConnectionIndicationFlags  ::=  OCTET STRING
 * ```
 */
export
type PDNConnectionIndicationFlags = OCTET_STRING; // OctetStringType
export const _decode_PDNConnectionIndicationFlags: $.ASN1Decoder<PDNConnectionIndicationFlags> = $._decodeOctetString;
export const _encode_PDNConnectionIndicationFlags: $.ASN1Encoder<PDNConnectionIndicationFlags> = $._encodeOctetString;


/* eslint-enable */
