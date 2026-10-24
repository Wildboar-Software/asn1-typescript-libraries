/* eslint-disable */
import {
    type GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SIP_Method
 * @description
 *
 * SIP method for which this CDR was generated. Present only for a
 * session-unrelated procedure (clause 6.1.3.3). Registration uses
 * REGISTER; network-initiated de-registration uses NOTIFY when the node
 * subscribes to the registration event (clause 5.1.4).
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * Specifies the SIP-method for which the CDR is generated. Only available in
 * session unrelated cases.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.61.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SIP-Method  ::=  GraphicString
 * ```
 */
export
type SIP_Method = GraphicString; // GraphicString

export
const _decode_SIP_Method: $.ASN1Decoder<SIP_Method> = $._decodeGraphicString;

export
const _encode_SIP_Method: $.ASN1Encoder<SIP_Method> = $._encodeGraphicString;

/* eslint-enable */
