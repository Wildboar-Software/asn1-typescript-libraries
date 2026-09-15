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
import { Compression_Item, _decode_Compression_Item, _encode_Compression_Item } from "../V59/Compression-Item.ta.mjs";

/**
 * @summary Compression
 * @description
 *
 * Compression diagnostics (Tag-ID `30xx`). ITU-T Rec. V.59 (11/2000) §6.3,
 * §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {compressionNegotiationResult
 *                 ENUMERATED {none(0), v42bisOnly(1), v42bisBoth(2), v44Both(3),
 *                             v44Only(4), other(5)},
 *               modeV42B                      Capabilities,
 *               v42bisCompressionActive
 *                 ENUMERATED {none(0), initOnly(1), respOnly(2), both(3)},
 *               v42bisDictionarySize          INTEGER(512..65535) OPTIONAL,
 *               v42bisStringLength            INTEGER(6..250) OPTIONAL,
 *               modeV44                       Capabilities,
 *               v44CompressionActive
 *                 ENUMERATED {none(0), txOnly(1), rxOnly(2), both(3)},
 *               v44EncoderDictionarySize      INTEGER(256..65535) OPTIONAL,
 *               v44EncoderHistorySize         INTEGER(512..1677215) OPTIONAL,
 *               v44EncoderStringLength        INTEGER(32..255) OPTIONAL,
 *               v44DecoderDictionarySize      INTEGER(256..65535) OPTIONAL,
 *               v44DecoderHistorySize         INTEGER(512..1677215) OPTIONAL,
 *               v44DecoderStringLength        INTEGER(32..255) OPTIONAL,
 *               ...}
 * ```
 */
export
type Compression = Compression_Item[]; // SequenceOfType

let _cached_decoder_for_Compression: $.ASN1Decoder<Compression> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Compression
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Compression (el: _Element): Compression {
    if (!_cached_decoder_for_Compression) { _cached_decoder_for_Compression = $._decodeSequenceOf<Compression_Item>(() => _decode_Compression_Item); }
    return _cached_decoder_for_Compression(el);
}

let _cached_encoder_for_Compression: $.ASN1Encoder<Compression> | null = null;

/**
 * @summary Encodes a(n) Compression into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Compression, encoded as an ASN.1 Element.
 */
export
function _encode_Compression (value: Compression, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Compression) { _cached_encoder_for_Compression = $._encodeSequenceOf<Compression_Item>(() => _encode_Compression_Item, $.BER); }
    return _cached_encoder_for_Compression(value, elGetter);
}

/* eslint-enable */
