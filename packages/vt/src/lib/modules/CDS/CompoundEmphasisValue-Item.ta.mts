/* eslint-disable */
import {
    NULL,
    PrintableString,
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



/**
 * @summary CompoundEmphasisValue_Item
 * @description
 *
 * One selected DO-emphasis list slot. `placeholder`: skip the slot.
 * `acceptanceOfEmphasisSubAttr`: single accepted PrintableString
 * subattribute. ISO/IEC 9040:1997 §18.2.6, B.17; ISO/IEC
 * 9041-1:1997 §12.3.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundEmphasisValue-Item ::= CHOICE {
 *     placeholder                 NULL,
 *     acceptanceOfEmphasisSubAttr PrintableString
 *     -- single acceptance value of emphasis subattribute
 * }
 * ```
 */
export
type CompoundEmphasisValue_Item =
    { placeholder: NULL } /* CHOICE_ALT_ROOT */
    | { acceptanceOfEmphasisSubAttr: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CompoundEmphasisValue_Item: $.ASN1Decoder<CompoundEmphasisValue_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundEmphasisValue_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundEmphasisValue_Item (el: _Element): CompoundEmphasisValue_Item {
    if (!_cached_decoder_for_CompoundEmphasisValue_Item) { _cached_decoder_for_CompoundEmphasisValue_Item = $._decode_inextensible_choice<CompoundEmphasisValue_Item>({
    "UNIVERSAL 5": [ "placeholder", $._decodeNull ],
    "UNIVERSAL 19": [ "acceptanceOfEmphasisSubAttr", $._decodePrintableString ]
}); }
    return _cached_decoder_for_CompoundEmphasisValue_Item(el);
}

let _cached_encoder_for_CompoundEmphasisValue_Item: $.ASN1Encoder<CompoundEmphasisValue_Item> | null = null;

/**
 * @summary Encodes a(n) CompoundEmphasisValue_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundEmphasisValue_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundEmphasisValue_Item (value: CompoundEmphasisValue_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundEmphasisValue_Item) { _cached_encoder_for_CompoundEmphasisValue_Item = $._encode_choice<CompoundEmphasisValue_Item>({
    "placeholder": $._encodeNull,
    "acceptanceOfEmphasisSubAttr": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_CompoundEmphasisValue_Item(value, elGetter);
}


/* eslint-enable */
