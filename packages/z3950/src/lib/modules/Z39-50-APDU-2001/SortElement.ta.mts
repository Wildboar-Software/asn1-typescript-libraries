/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SortKey, _decode_SortKey, _encode_SortKey } from "../Z39-50-APDU-2001/SortKey.ta.mjs";
// export { SortKey, _decode_SortKey, _encode_SortKey } from "../Z39-50-APDU-2001/SortKey.ta.mjs";
import { SortElement_datbaseSpecific_Item, _decode_SortElement_datbaseSpecific_Item, _encode_SortElement_datbaseSpecific_Item } from "../Z39-50-APDU-2001/SortElement-datbaseSpecific-Item.ta.mjs";
// export { SortElement_datbaseSpecific_Item, _decode_SortElement_datbaseSpecific_Item, _encode_SortElement_datbaseSpecific_Item } from "../Z39-50-APDU-2001/SortElement-datbaseSpecific-Item.ta.mjs";


/**
 * @summary SortElement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortElement  ::=  CHOICE {
 *     generic             [1] SortKey,
 *     datbaseSpecific     [2] IMPLICIT SEQUENCE OF SEQUENCE {
 *         databaseName    DatabaseName,
 *         dbSort          SortKey
 *     }
 * }
 * ```
 */
export
type SortElement =
    { generic: SortKey } /* CHOICE_ALT_ROOT */
    | { datbaseSpecific: SortElement_datbaseSpecific_Item[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SortElement: $.ASN1Decoder<SortElement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortElement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortElement (el: _Element): SortElement {
    if (!_cached_decoder_for_SortElement) { _cached_decoder_for_SortElement = $._decode_inextensible_choice<SortElement>({
    "CONTEXT 1": [ "generic", $._decode_explicit<SortKey>(() => _decode_SortKey) ],
    "CONTEXT 2": [ "datbaseSpecific", $._decode_implicit<SortElement_datbaseSpecific_Item[]>(() => $._decodeSequenceOf<SortElement_datbaseSpecific_Item>(() => _decode_SortElement_datbaseSpecific_Item)) ]
}); }
    return _cached_decoder_for_SortElement(el);
}

let _cached_encoder_for_SortElement: $.ASN1Encoder<SortElement> | null = null;

/**
 * @summary Encodes a(n) SortElement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortElement, encoded as an ASN.1 Element.
 */
export
function _encode_SortElement (value: SortElement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortElement) { _cached_encoder_for_SortElement = $._encode_choice<SortElement>({
    "generic": $._encode_explicit(_TagClass.context, 1, () => _encode_SortKey, $.BER),
    "datbaseSpecific": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<SortElement_datbaseSpecific_Item>(() => _encode_SortElement_datbaseSpecific_Item, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_SortElement(value, elGetter);
}


/* eslint-enable */
