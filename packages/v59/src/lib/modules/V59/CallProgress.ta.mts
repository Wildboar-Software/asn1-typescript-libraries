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
import { CallProgress_Item, _decode_CallProgress_Item, _encode_CallProgress_Item } from "../V59/CallProgress-Item.ta.mjs";

/**
 * @summary CallProgress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProgress  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {callProgressResult  CallProgressRes,
 *               callTerminate       CallTerminateCode,
 *               ...}
 * ```
 */
export
type CallProgress = CallProgress_Item[]; // SequenceOfType

let _cached_decoder_for_CallProgress: $.ASN1Decoder<CallProgress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallProgress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallProgress (el: _Element): CallProgress {
    if (!_cached_decoder_for_CallProgress) { _cached_decoder_for_CallProgress = $._decodeSequenceOf<CallProgress_Item>(() => _decode_CallProgress_Item); }
    return _cached_decoder_for_CallProgress(el);
}

let _cached_encoder_for_CallProgress: $.ASN1Encoder<CallProgress> | null = null;

/**
 * @summary Encodes a(n) CallProgress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallProgress, encoded as an ASN.1 Element.
 */
export
function _encode_CallProgress (value: CallProgress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallProgress) { _cached_encoder_for_CallProgress = $._encodeSequenceOf<CallProgress_Item>(() => _encode_CallProgress_Item, $.BER); }
    return _cached_encoder_for_CallProgress(value, elGetter);
}

/* eslint-enable */
