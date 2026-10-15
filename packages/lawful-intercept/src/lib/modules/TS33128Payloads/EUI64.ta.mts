/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EUI64
 * @description
 * 
 * Derived from an IEEE Extended Unique Identifier (EUI-64), for UEs not
 * supporting any 3GPP access technologies, as defined in IEEE "Guidelines for
 * Use of Extended Unique Identifier (EUI), Organizationally Unique Identifier
 * (OUI), and Company ID (CID)" [127].
 *
 * 3GPP TS 33.128, clause 8.3.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EUI64  ::=  OCTET STRING (SIZE(8))
 * ```
 */
export
type EUI64 = OCTET_STRING; // OctetStringType
export const _decode_EUI64: $.ASN1Decoder<EUI64> = (el: _Element): EUI64 => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 8) {
        throw new ASN1SizeError("EUI64 violates SIZE constraint");
    }
    return value;
};
export const _encode_EUI64: $.ASN1Encoder<EUI64> = $._encodeOctetString;


/* eslint-enable */
