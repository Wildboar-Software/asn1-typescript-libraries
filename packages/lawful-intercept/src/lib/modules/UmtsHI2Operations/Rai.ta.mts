/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Rai
 * @description
 * 
 * Routing area identifier, six octets. Coded as in 3GPP TS 24.008 clause
 * 10.5.5.15 without the Routing Area Identification IEI; only the last six
 * octets are used. Carried as the current SGSN RAI or the old SGSN RAI.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Rai                 ::=  OCTET STRING (SIZE (6))
 * ```
 */
export
type Rai = OCTET_STRING; // OctetStringType
export const _decode_Rai: $.ASN1Decoder<Rai> = (el: _Element): Rai => {
    const value = $._decodeOctetString(el);
    if (value.length < 6 || value.length > 6) {
        throw new ASN1SizeError("Rai violates SIZE constraint");
    }
    return value;
};
export const _encode_Rai: $.ASN1Encoder<Rai> = $._encodeOctetString;


/* eslint-enable */
