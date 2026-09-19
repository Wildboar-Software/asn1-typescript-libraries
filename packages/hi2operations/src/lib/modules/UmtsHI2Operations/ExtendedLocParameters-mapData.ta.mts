/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedLocParameters_mapData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-mapData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedLocParameters_mapData =
    { base64Map: PrintableString } /* CHOICE_ALT_ROOT */
    | { url: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtendedLocParameters_mapData: $.ASN1Decoder<ExtendedLocParameters_mapData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedLocParameters_mapData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedLocParameters_mapData (el: _Element): ExtendedLocParameters_mapData {
    if (!_cached_decoder_for_ExtendedLocParameters_mapData) { _cached_decoder_for_ExtendedLocParameters_mapData = $._decode_inextensible_choice<ExtendedLocParameters_mapData>({
    "CONTEXT 0": [ "base64Map", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ],
    "CONTEXT 1": [ "url", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ]
}); }
    return _cached_decoder_for_ExtendedLocParameters_mapData(el);
}

let _cached_encoder_for_ExtendedLocParameters_mapData: $.ASN1Encoder<ExtendedLocParameters_mapData> | null = null;

/**
 * @summary Encodes a(n) ExtendedLocParameters_mapData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedLocParameters_mapData, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedLocParameters_mapData (value: ExtendedLocParameters_mapData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedLocParameters_mapData) { _cached_encoder_for_ExtendedLocParameters_mapData = $._encode_choice<ExtendedLocParameters_mapData>({
    "base64Map": $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER),
    "url": $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExtendedLocParameters_mapData(value, elGetter);
}


/* eslint-enable */
