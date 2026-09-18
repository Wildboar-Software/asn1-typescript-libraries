/* eslint-disable */
import {
    NULL,
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
import { RepertoireFontOffer_alternatives_Item, _decode_RepertoireFontOffer_alternatives_Item, _encode_RepertoireFontOffer_alternatives_Item } from "../CDS/RepertoireFontOffer-alternatives-Item.ta.mjs";
// export { RepertoireFontOffer_alternatives_Item, _decode_RepertoireFontOffer_alternatives_Item, _encode_RepertoireFontOffer_alternatives_Item } from "../CDS/RepertoireFontOffer-alternatives-Item.ta.mjs";


/**
 * @summary RepertoireFontOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireFontOffer  ::=  CHOICE {
 *     placeholder     NULL,
 *     alternatives    SEQUENCE OF SEQUENCE {
 *         repertoire      [0] IMPLICIT RepertoireAssignment OPTIONAL,
 *         fontCapability  [1] IMPLICIT G.IntegerOffer OPTIONAL,
 *         fontAssignments [2] IMPLICIT SEQUENCE OF FontAssignment OPTIONAL
 *     }
 * }
 * ```
 */
export
type RepertoireFontOffer =
    { placeholder: NULL } /* CHOICE_ALT_ROOT */
    | { alternatives: RepertoireFontOffer_alternatives_Item[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RepertoireFontOffer: $.ASN1Decoder<RepertoireFontOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireFontOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireFontOffer (el: _Element): RepertoireFontOffer {
    if (!_cached_decoder_for_RepertoireFontOffer) { _cached_decoder_for_RepertoireFontOffer = $._decode_inextensible_choice<RepertoireFontOffer>({
    "UNIVERSAL 5": [ "placeholder", $._decodeNull ],
    "UNIVERSAL 16": [ "alternatives", $._decodeSequenceOf<RepertoireFontOffer_alternatives_Item>(() => _decode_RepertoireFontOffer_alternatives_Item) ]
}); }
    return _cached_decoder_for_RepertoireFontOffer(el);
}

let _cached_encoder_for_RepertoireFontOffer: $.ASN1Encoder<RepertoireFontOffer> | null = null;

/**
 * @summary Encodes a(n) RepertoireFontOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireFontOffer, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireFontOffer (value: RepertoireFontOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireFontOffer) { _cached_encoder_for_RepertoireFontOffer = $._encode_choice<RepertoireFontOffer>({
    "placeholder": $._encodeNull,
    "alternatives": $._encodeSequenceOf<RepertoireFontOffer_alternatives_Item>(() => _encode_RepertoireFontOffer_alternatives_Item, $.BER),
}, $.BER); }
    return _cached_encoder_for_RepertoireFontOffer(value, elGetter);
}


/* eslint-enable */
