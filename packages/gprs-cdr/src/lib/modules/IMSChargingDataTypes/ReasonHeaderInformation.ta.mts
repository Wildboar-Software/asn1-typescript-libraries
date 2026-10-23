/* eslint-disable */
import {
    GraphicString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReasonHeaderInformation
 * @description
 *
 * One SIP Reason header from a BYE or CANCEL (clause 6.3.1.2). Reliability
 * is not guaranteed when that request originates outside the trust domain.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReasonHeaderInformation  ::=  GraphicString
 * ```
 */
export
type ReasonHeaderInformation = GraphicString; // GraphicString

export
const _decode_ReasonHeaderInformation: $.ASN1Decoder<ReasonHeaderInformation> = $._decodeGraphicString;

export
const _encode_ReasonHeaderInformation: $.ASN1Encoder<ReasonHeaderInformation> = $._encodeGraphicString;

/* eslint-enable */
