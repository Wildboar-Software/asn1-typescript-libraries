/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDPPDNTypeExtension
 * @description
 * 
 * Non-IP PDN type (tables 6.1.2.1 and 6.1.3.1). The P-GW and S-GW charge a
 * Non-IP PDN connection (clause 5.1.1). For a Non-IP connection the served
 * PDP/PDN address and its prefix length and extension are absent, unless
 * the P-GW has assigned an IP address. Non-3GPP access and multi-access
 * PDN connections do not apply. A single PCC rule can match the whole
 * Non-IP flow (clause 5.2.1.3).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDPPDNTypeExtension  ::=  INTEGER
 * ```
 */
export
type PDPPDNTypeExtension = INTEGER;

export
const _decode_PDPPDNTypeExtension: $.ASN1Decoder<PDPPDNTypeExtension> = $._decodeInteger;

export
const _encode_PDPPDNTypeExtension: $.ASN1Encoder<PDPPDNTypeExtension> = $._encodeInteger;

/* eslint-enable */
