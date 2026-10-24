/* eslint-disable */
import {
    type GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NumberPortabilityRouting
 * @description
 *
 * Number-portability routing information returned by the DNS/ENUM query in
 * the calling user's home network (clause 6.3.1.2). Populated by the
 * S-CSCF, I-CSCF, AS, MGCF, BGCF, TF, and TRF.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This item holds information on number portability routing, received by
 * S-CSCF during ENUM/DNS processes. The parameter corresponds to the
 * NumberPortabilityRoutingInformation AVP.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.33.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberPortabilityRouting  ::=  GraphicString
 * ```
 */
export
type NumberPortabilityRouting = GraphicString; // GraphicString

export
const _decode_NumberPortabilityRouting: $.ASN1Decoder<NumberPortabilityRouting> = $._decodeGraphicString;

export
const _encode_NumberPortabilityRouting: $.ASN1Encoder<NumberPortabilityRouting> = $._encodeGraphicString;

/* eslint-enable */
