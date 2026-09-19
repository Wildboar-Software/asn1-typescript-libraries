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
import { Offer_Item, _decode_Offer_Item, _encode_Offer_Item } from "../CDS/Offer-Item.ta.mjs";
// export { Offer_Item, _decode_Offer_Item, _encode_Offer_Item } from "../CDS/Offer-Item.ta.mjs";


/**
 * @summary Offer
 * @description
 *
 * MIN offers of display-object VTE-parameter values. Each member names
 * one display object and proposes values, lists, or ranges for its
 * parameters. Selected `Values` must be consistent with this offer.
 * ISO/IEC 9041-1:1997 §12.3.2; ISO/IEC 9040:1997 §18.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Offer  ::=  SET OF SEQUENCE {
 *     name    PrintableString,
 *     offers  ParameterOffers
 * }
 * ```
 */
export
type Offer = Offer_Item[]; // SetOfType

let _cached_decoder_for_Offer: $.ASN1Decoder<Offer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Offer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Offer (el: _Element): Offer {
    if (!_cached_decoder_for_Offer) { _cached_decoder_for_Offer = $._decodeSetOf<Offer_Item>(() => _decode_Offer_Item); }
    return _cached_decoder_for_Offer(el);
}

let _cached_encoder_for_Offer: $.ASN1Encoder<Offer> | null = null;

/**
 * @summary Encodes a(n) Offer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Offer, encoded as an ASN.1 Element.
 */
export
function _encode_Offer (value: Offer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Offer) { _cached_encoder_for_Offer = $._encodeSetOf<Offer_Item>(() => _encode_Offer_Item, $.BER); }
    return _cached_encoder_for_Offer(value, elGetter);
}


/* eslint-enable */
