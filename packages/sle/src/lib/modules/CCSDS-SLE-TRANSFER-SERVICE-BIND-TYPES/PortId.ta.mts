/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type LogicalPortName, _decode_LogicalPortName, _encode_LogicalPortName } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/LogicalPortName.ta.mjs";


/**
 * @summary PortId
 * @description
 * 
 * Responder port identifier: the logical name of the SLE endpoint that performs
 * BIND. It stands for the addressing information needed to route SLE-PDUs to
 * that application entity. The responding application ignores the value when
 * judging the invocation.
 * 
 * CCSDS 911.1-B-5, sections 3.2.2.6, 2.6.4.5, and 1.6.1.8.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PortId               ::=    LogicalPortName
 * ```
 */
export
type PortId = LogicalPortName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PortId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PortId: $.ASN1Decoder<PortId> = _decode_LogicalPortName;

/**
 * @summary Encodes a(n) PortId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortId, encoded as an ASN.1 Element.
 */
export const _encode_PortId: $.ASN1Encoder<PortId> = _encode_LogicalPortName;


/* eslint-enable */
