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
 * Routing area identity: six octets, coded as the RAI in 3GPP TS 24.008 clause
 * 10.5.5.15 without the routing area identification IEI (module comment on the
 * location parameter). Clause 6 uses it in the SGSN location of the target.
 * Clause 10 LALS reports can carry the same location parameter
 * (locationOfTheTarget in clause 10.5.2). The current RAI and the old RAI are
 * separate location components; this value is the coding of either. EPS bearer
 * location uses the EPS location parameter, which does not include this RAI.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
