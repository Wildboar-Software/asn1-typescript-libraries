/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LogicalPortName, _decode_LogicalPortName, _encode_LogicalPortName } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/LogicalPortName.ta.mjs";


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

let _cached_decoder_for_PortId: $.ASN1Decoder<PortId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PortId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PortId (el: _Element): PortId {
    if (!_cached_decoder_for_PortId) { _cached_decoder_for_PortId = _decode_LogicalPortName; }
    return _cached_decoder_for_PortId(el);
}

let _cached_encoder_for_PortId: $.ASN1Encoder<PortId> | null = null;

/**
 * @summary Encodes a(n) PortId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortId, encoded as an ASN.1 Element.
 */
export
function _encode_PortId (value: PortId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PortId) { _cached_encoder_for_PortId = _encode_LogicalPortName; }
    return _cached_encoder_for_PortId(value, elGetter);
}


/* eslint-enable */
