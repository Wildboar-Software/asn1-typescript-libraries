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
import { SupportedFeatures_Item, _decode_SupportedFeatures_Item, _encode_SupportedFeatures_Item } from "../Attribute-ASN1Module/SupportedFeatures-Item.ta.mjs";
/**
 * @summary SupportedFeatures
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedFeatures  ::= 
 *   SET OF
 *     SEQUENCE {featureIdentifier
 *                 DMI-SUPPORTEDFEATURES.&id({SupportedFeaturesSet}),
 *               featureInfo
 *                 DMI-SUPPORTEDFEATURES.&Value
 *                   ({SupportedFeaturesSet}{@.featureIdentifier})}
 * ```
 */
export
type SupportedFeatures = SupportedFeatures_Item[]; // SetOfType

let _cached_decoder_for_SupportedFeatures: $.ASN1Decoder<SupportedFeatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedFeatures
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedFeatures} The decoded data structure.
 */
export
function _decode_SupportedFeatures (el: _Element) {
    if (!_cached_decoder_for_SupportedFeatures) { _cached_decoder_for_SupportedFeatures = $._decodeSetOf<SupportedFeatures_Item>(() => _decode_SupportedFeatures_Item); }
    return _cached_decoder_for_SupportedFeatures(el);
}

let _cached_encoder_for_SupportedFeatures: $.ASN1Encoder<SupportedFeatures> | null = null;

/**
 * @summary Encodes a(n) SupportedFeatures into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedFeatures, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedFeatures (value: SupportedFeatures, elGetter: $.ASN1Encoder<SupportedFeatures>) {
    if (!_cached_encoder_for_SupportedFeatures) { _cached_encoder_for_SupportedFeatures = $._encodeSetOf<SupportedFeatures_Item>(() => _encode_SupportedFeatures_Item, $.BER); }
    return _cached_encoder_for_SupportedFeatures(value, elGetter);
}


/* eslint-enable */
