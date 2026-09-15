/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Protocol_Item, _decode_Protocol_Item, _encode_Protocol_Item } from "../V59/Protocol-Item.ta.mjs";

/**
 * @summary Protocol
 * @description
 *
 * High-level protocol-performance wrapper grouping error-control and
 * compression diagnostics from the last connection. ITU-T Rec. V.59 (11/2000)
 * §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Protocol  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {errorControlStat  ErrorControl,
 *               compStat          Compression,
 *               ...}
 * ```
 */
export
type Protocol = Protocol_Item[]; // SequenceOfType

let _cached_decoder_for_Protocol: $.ASN1Decoder<Protocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Protocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Protocol (el: _Element): Protocol {
    if (!_cached_decoder_for_Protocol) { _cached_decoder_for_Protocol = $._decodeSequenceOf<Protocol_Item>(() => _decode_Protocol_Item); }
    return _cached_decoder_for_Protocol(el);
}

let _cached_encoder_for_Protocol: $.ASN1Encoder<Protocol> | null = null;

/**
 * @summary Encodes a(n) Protocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Protocol, encoded as an ASN.1 Element.
 */
export
function _encode_Protocol (value: Protocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Protocol) { _cached_encoder_for_Protocol = $._encodeSequenceOf<Protocol_Item>(() => _encode_Protocol_Item, $.BER); }
    return _cached_encoder_for_Protocol(value, elGetter);
}

/* eslint-enable */
