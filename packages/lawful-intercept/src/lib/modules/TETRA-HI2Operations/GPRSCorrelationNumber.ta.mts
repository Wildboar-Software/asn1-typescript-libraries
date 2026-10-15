/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSCorrelationNumber
 * @description
 * 
 * Correlation number for one PDP context. It correlates CC with IRI and
 * correlates the IRI records of that context. The SGSN or GGSN provides it to
 * HI2 and HI3. Annex B gives the combination of GGSN address and charging ID as
 * an example. The present document states no coding of the octets beyond that
 * example.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.1, clause B.5.2.2, clause B.5.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSCorrelationNumber  ::=  OCTET STRING (SIZE(8..20))
 * ```
 */
export
type GPRSCorrelationNumber = OCTET_STRING; // OctetStringType
export const _decode_GPRSCorrelationNumber: $.ASN1Decoder<GPRSCorrelationNumber> = (el: _Element): GPRSCorrelationNumber => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 20) {
        throw new ASN1SizeError("GPRSCorrelationNumber violates SIZE constraint");
    }
    return value;
};
export const _encode_GPRSCorrelationNumber: $.ASN1Encoder<GPRSCorrelationNumber> = $._encodeOctetString;


/* eslint-enable */
