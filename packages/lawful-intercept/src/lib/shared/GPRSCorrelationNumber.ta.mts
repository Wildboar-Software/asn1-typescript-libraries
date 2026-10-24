/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSCorrelationNumber
 * @description
 *
 * Octet string of size 8 to 20. The module states no layout beyond that size.
 * Annex B.5.2 does not define the octet layout.
 *
 * Clause B.1 defines the correlation number as the LI identifier for
 * packet-switched networks. It is unique per PDP context and correlates CC
 * with IRI, and correlates IRI records within one PDP context. The GSM GPRS
 * example is the combination of the GGSN address and the charging ID. Clause
 * B.5.1: the xGSN provides a correlation number and the target identity to
 * DF2P and DF3P, which select the LEAs. Clause B.5.2.2: the SGSN or GGSN
 * provides that number to HI2 and HI3. Table B.5.2: a unique number for each
 * PDP context delivered to the LEMF, so the LEA can correlate the PDP context
 * with the IRI.
 *
 * Clause D.1's general rule for an OCTET STRING puts the most significant
 * half-octet in bits 5 to 8 and the least significant half-octet in bits 1 to
 * 4. No imported format is named here, and no octet layout is stated.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause B.1, clause B.5.1, clause B.5.2.2,
 * table B.5.2, clause D.1, annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
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
