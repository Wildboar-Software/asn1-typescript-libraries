/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GPRSOperationErrorCode
 * @description
 *
 * Two octets. The module says refer to 3GPP TS 24.008 for the values (GMM
 * cause or SM cause). This document does not list those cause codes.
 *
 * Table B.5.2 uses this parameter for the reason for a failed PDP-context
 * activation, and for the reason for a failed attach, of the target
 * subscriber.
 *
 * The value uses an imported format, so clause D.1 keeps that standard's
 * half-octet order: the general rule (most significant half-octet in bits 5 to
 * 8, least significant in bits 1 to 4) does not apply.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), table B.5.2, clause D.1, annex D, clause
 * D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * Deduplicated from the `HI2Operations` and `TETRA-HI2Operations`
 * modules, which assign this type identically.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSOperationErrorCode  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type GPRSOperationErrorCode = OCTET_STRING; // OctetStringType
export const _decode_GPRSOperationErrorCode: $.ASN1Decoder<GPRSOperationErrorCode> = (el: _Element): GPRSOperationErrorCode => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("GPRSOperationErrorCode violates SIZE constraint");
    }
    return value;
};
export const _encode_GPRSOperationErrorCode: $.ASN1Encoder<GPRSOperationErrorCode> = $._encodeOctetString;


/* eslint-enable */
