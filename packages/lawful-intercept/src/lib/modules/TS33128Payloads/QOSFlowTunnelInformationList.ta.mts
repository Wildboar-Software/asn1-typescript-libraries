/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QOSFlowTunnelInformation, _decode_QOSFlowTunnelInformation, _encode_QOSFlowTunnelInformation } from "../TS33128Payloads/QOSFlowTunnelInformation.ta.mjs";
// export { QOSFlowTunnelInformation, _decode_QOSFlowTunnelInformation, _encode_QOSFlowTunnelInformation } from "../TS33128Payloads/QOSFlowTunnelInformation.ta.mjs";


/**
 * @summary QOSFlowTunnelInformationList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * QOSFlowTunnelInformationList  ::=  SEQUENCE OF QOSFlowTunnelInformation
 * ```
 */
export
type QOSFlowTunnelInformationList = QOSFlowTunnelInformation[]; // SequenceOfType

let _cached_decoder_for_QOSFlowTunnelInformationList: $.ASN1Decoder<QOSFlowTunnelInformationList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) QOSFlowTunnelInformationList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_QOSFlowTunnelInformationList (el: _Element): QOSFlowTunnelInformationList {
    if (!_cached_decoder_for_QOSFlowTunnelInformationList) { _cached_decoder_for_QOSFlowTunnelInformationList = $._decodeSequenceOf<QOSFlowTunnelInformation>(() => _decode_QOSFlowTunnelInformation); }
    return _cached_decoder_for_QOSFlowTunnelInformationList(el);
}

let _cached_encoder_for_QOSFlowTunnelInformationList: $.ASN1Encoder<QOSFlowTunnelInformationList> | null = null;

/**
 * @summary Encodes a(n) QOSFlowTunnelInformationList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The QOSFlowTunnelInformationList, encoded as an ASN.1 Element.
 */
export
function _encode_QOSFlowTunnelInformationList (value: QOSFlowTunnelInformationList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_QOSFlowTunnelInformationList) { _cached_encoder_for_QOSFlowTunnelInformationList = $._encodeSequenceOf<QOSFlowTunnelInformation>(() => _encode_QOSFlowTunnelInformation, $.BER); }
    return _cached_encoder_for_QOSFlowTunnelInformationList(value, elGetter);
}


/* eslint-enable */
