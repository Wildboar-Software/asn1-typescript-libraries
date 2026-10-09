/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { ElementSetNames_databaseSpecific_Item, _decode_ElementSetNames_databaseSpecific_Item, _encode_ElementSetNames_databaseSpecific_Item } from "../Z39-50-APDU-2001/ElementSetNames-databaseSpecific-Item.ta.mjs";
// export { ElementSetNames_databaseSpecific_Item, _decode_ElementSetNames_databaseSpecific_Item, _encode_ElementSetNames_databaseSpecific_Item } from "../Z39-50-APDU-2001/ElementSetNames-databaseSpecific-Item.ta.mjs";


/**
 * @summary ElementSetNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementSetNames  ::=  CHOICE {
 *     genericElementSetName   [0] IMPLICIT InternationalString,
 *     databaseSpecific        [1] IMPLICIT SEQUENCE OF SEQUENCE {
 *         dbName  DatabaseName,
 *         esn     ElementSetName
 *     }
 * }
 * ```
 */
export
type ElementSetNames =
    { genericElementSetName: InternationalString } /* CHOICE_ALT_ROOT */
    | { databaseSpecific: ElementSetNames_databaseSpecific_Item[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ElementSetNames: $.ASN1Decoder<ElementSetNames> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementSetNames
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementSetNames (el: _Element): ElementSetNames {
    if (!_cached_decoder_for_ElementSetNames) { _cached_decoder_for_ElementSetNames = $._decode_inextensible_choice<ElementSetNames>({
    "CONTEXT 0": [ "genericElementSetName", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 1": [ "databaseSpecific", $._decode_implicit<ElementSetNames_databaseSpecific_Item[]>(() => $._decodeSequenceOf<ElementSetNames_databaseSpecific_Item>(() => _decode_ElementSetNames_databaseSpecific_Item)) ]
}); }
    return _cached_decoder_for_ElementSetNames(el);
}

let _cached_encoder_for_ElementSetNames: $.ASN1Encoder<ElementSetNames> | null = null;

/**
 * @summary Encodes a(n) ElementSetNames into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementSetNames, encoded as an ASN.1 Element.
 */
export
function _encode_ElementSetNames (value: ElementSetNames, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementSetNames) { _cached_encoder_for_ElementSetNames = $._encode_choice<ElementSetNames>({
    "genericElementSetName": $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER),
    "databaseSpecific": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ElementSetNames_databaseSpecific_Item>(() => _encode_ElementSetNames_databaseSpecific_Item, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ElementSetNames(value, elGetter);
}


/* eslint-enable */
