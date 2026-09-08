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
import { ModeCapability_Item, _decode_ModeCapability_Item, _encode_ModeCapability_Item } from "../V59/ModeCapability-Item.ta.mjs";

/**
 * @summary ModeCapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModeCapability  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modulationMode
 *                 SEQUENCE {modeV90       Capabilities,
 *                           modeV91       Capabilities,
 *                           modeV92       Capabilities,
 *                           modeV34       Capabilities,
 *                           modeV32B      Capabilities,
 *                           modeV22B      Capabilities,
 *                           modeV23       Capabilities,
 *                           modeV21       Capabilities,
 *                           modeV34H      Capabilities,
 *                           modeV17       Capabilities,
 *                           modeV29       Capabilities,
 *                           modeV27T      Capabilities,
 *                           modeV18       Capabilities,
 *                           otherModMode  V59String OPTIONAL,
 *                           ...},
 *               protocolmode
 *                 SEQUENCE {modeV42        Capabilities,
 *                           modeV42B       Capabilities,
 *                           modeV44        Capabilities,
 *                           otherProtMode  V59String OPTIONAL,
 *                           ...},
 *               ...}
 * ```
 */
export
type ModeCapability = ModeCapability_Item[]; // SequenceOfType

let _cached_decoder_for_ModeCapability: $.ASN1Decoder<ModeCapability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModeCapability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModeCapability (el: _Element): ModeCapability {
    if (!_cached_decoder_for_ModeCapability) { _cached_decoder_for_ModeCapability = $._decodeSequenceOf<ModeCapability_Item>(() => _decode_ModeCapability_Item); }
    return _cached_decoder_for_ModeCapability(el);
}

let _cached_encoder_for_ModeCapability: $.ASN1Encoder<ModeCapability> | null = null;

/**
 * @summary Encodes a(n) ModeCapability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModeCapability, encoded as an ASN.1 Element.
 */
export
function _encode_ModeCapability (value: ModeCapability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModeCapability) { _cached_encoder_for_ModeCapability = $._encodeSequenceOf<ModeCapability_Item>(() => _encode_ModeCapability_Item, $.BER); }
    return _cached_encoder_for_ModeCapability(value, elGetter);
}

/* eslint-enable */
