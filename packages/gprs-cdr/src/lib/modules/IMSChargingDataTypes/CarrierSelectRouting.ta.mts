/* eslint-disable */
import {
    type GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CarrierSelectRouting
 * @description
 *
 * Carrier-select routing information returned by the DNS/ENUM query in the
 * calling user's home network (clause 6.3.1.2). Populated by the same
 * nodes as number-portability routing.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This item holds information on carrier select routing, received by S-CSCF
 * during ENUM/DNS processes. The parameter corresponds to the
 * CarrierSelectRoutingInformation AVP.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.10.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CarrierSelectRouting  ::=  GraphicString
 * ```
 */
export
type CarrierSelectRouting = GraphicString; // GraphicString

export
const _decode_CarrierSelectRouting: $.ASN1Decoder<CarrierSelectRouting> = $._decodeGraphicString;

export
const _encode_CarrierSelectRouting: $.ASN1Encoder<CarrierSelectRouting> = $._encodeGraphicString;

/* eslint-enable */
