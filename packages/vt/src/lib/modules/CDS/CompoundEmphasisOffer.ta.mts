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
import { CompoundEmphasisOffer_Item, _decode_CompoundEmphasisOffer_Item, _encode_CompoundEmphasisOffer_Item } from "../CDS/CompoundEmphasisOffer-Item.ta.mjs";


/**
 * @summary CompoundEmphasisOffer
 * @description
 *
 * Offered DO-emphasis assignment list. Each item is a placeholder
 * or a multiple offer of one emphasis subattribute. Explicit modal
 * default is not defined in 9040. ISO/IEC 9040:1997 §18.2.6, B.17.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundEmphasisOffer  ::=  SEQUENCE OF CHOICE {
 *     placeholder             NULL,
 *     multiOfferSingleSubAttr SEQUENCE OF PrintableString
 *     -- multiple offer of single emphasis subattribute
 * }
 * ```
 */
export
type CompoundEmphasisOffer = CompoundEmphasisOffer_Item[]; // SequenceOfType

let _cached_decoder_for_CompoundEmphasisOffer: $.ASN1Decoder<CompoundEmphasisOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundEmphasisOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundEmphasisOffer (el: _Element): CompoundEmphasisOffer {
    if (!_cached_decoder_for_CompoundEmphasisOffer) { _cached_decoder_for_CompoundEmphasisOffer = $._decodeSequenceOf<CompoundEmphasisOffer_Item>(() => _decode_CompoundEmphasisOffer_Item); }
    return _cached_decoder_for_CompoundEmphasisOffer(el);
}

let _cached_encoder_for_CompoundEmphasisOffer: $.ASN1Encoder<CompoundEmphasisOffer> | null = null;

/**
 * @summary Encodes a(n) CompoundEmphasisOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundEmphasisOffer, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundEmphasisOffer (value: CompoundEmphasisOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundEmphasisOffer) { _cached_encoder_for_CompoundEmphasisOffer = $._encodeSequenceOf<CompoundEmphasisOffer_Item>(() => _encode_CompoundEmphasisOffer_Item, $.BER); }
    return _cached_encoder_for_CompoundEmphasisOffer(value, elGetter);
}


/* eslint-enable */
