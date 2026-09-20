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
import { CompoundEmphasisValue_Item, _decode_CompoundEmphasisValue_Item, _encode_CompoundEmphasisValue_Item } from "../CDS/CompoundEmphasisValue-Item.ta.mjs";


/**
 * @summary CompoundEmphasisValue
 * @description
 *
 * Selected DO-emphasis assignment list. Each item is a placeholder
 * or one accepted PrintableString subattribute. ISO/IEC 9040:1997
 * §18.2.6, B.17.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundEmphasisValue  ::=  SEQUENCE OF CHOICE {
 *     placeholder                 NULL,
 *     acceptanceOfEmphasisSubAttr PrintableString
 *     -- single acceptance value of emphasis subattribute
 * }
 * ```
 */
export
type CompoundEmphasisValue = CompoundEmphasisValue_Item[]; // SequenceOfType

let _cached_decoder_for_CompoundEmphasisValue: $.ASN1Decoder<CompoundEmphasisValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundEmphasisValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundEmphasisValue (el: _Element): CompoundEmphasisValue {
    if (!_cached_decoder_for_CompoundEmphasisValue) { _cached_decoder_for_CompoundEmphasisValue = $._decodeSequenceOf<CompoundEmphasisValue_Item>(() => _decode_CompoundEmphasisValue_Item); }
    return _cached_decoder_for_CompoundEmphasisValue(el);
}

let _cached_encoder_for_CompoundEmphasisValue: $.ASN1Encoder<CompoundEmphasisValue> | null = null;

/**
 * @summary Encodes a(n) CompoundEmphasisValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundEmphasisValue, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundEmphasisValue (value: CompoundEmphasisValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundEmphasisValue) { _cached_encoder_for_CompoundEmphasisValue = $._encodeSequenceOf<CompoundEmphasisValue_Item>(() => _encode_CompoundEmphasisValue_Item, $.BER); }
    return _cached_encoder_for_CompoundEmphasisValue(value, elGetter);
}


/* eslint-enable */
