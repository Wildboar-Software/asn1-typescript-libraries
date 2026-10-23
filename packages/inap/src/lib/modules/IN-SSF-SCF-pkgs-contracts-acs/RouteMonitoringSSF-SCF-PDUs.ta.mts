/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";
// export { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";


/**
 * @summary RouteMonitoringSSF_SCF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteMonitoringSSF-SCF-PDUs  ::= 
 *   TCMessage{{SsfToScfRouteMonitoringInvokable}, {EmptyReturnable}}
 * ```
 */
export
type RouteMonitoringSSF_SCF_PDUs = TCMessage; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RouteMonitoringSSF_SCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RouteMonitoringSSF_SCF_PDUs: $.ASN1Decoder<RouteMonitoringSSF_SCF_PDUs> = _decode_TCMessage;

/**
 * @summary Encodes a(n) RouteMonitoringSSF_SCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteMonitoringSSF_SCF_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_RouteMonitoringSSF_SCF_PDUs: (value: RouteMonitoringSSF_SCF_PDUs, elGetter: $.ASN1Encoder<any>) => _Element = _encode_TCMessage;


/* eslint-enable */
