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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../SNMPv2-PDU/Unsigned32.ta.mjs";
/**
 * @summary Gauge32
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Gauge32  ::=  Unsigned32
 * ```
 */
export
type Gauge32 = Unsigned32; // DefinedType

let _cached_decoder_for_Gauge32: $.ASN1Decoder<Gauge32> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Gauge32
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Gauge32} The decoded data structure.
 */
export
function _decode_Gauge32 (el: _Element) {
    if (!_cached_decoder_for_Gauge32) { _cached_decoder_for_Gauge32 = _decode_Unsigned32; }
    return _cached_decoder_for_Gauge32(el);
}

let _cached_encoder_for_Gauge32: $.ASN1Encoder<Gauge32> | null = null;

/**
 * @summary Encodes a(n) Gauge32 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Gauge32, encoded as an ASN.1 Element.
 */
export
function _encode_Gauge32 (value: Gauge32, elGetter: $.ASN1Encoder<Gauge32>) {
    if (!_cached_encoder_for_Gauge32) { _cached_encoder_for_Gauge32 = _encode_Unsigned32; }
    return _cached_encoder_for_Gauge32(value, elGetter);
}


/* eslint-enable */
