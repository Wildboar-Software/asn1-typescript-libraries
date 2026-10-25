/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedLocParameters_mapData
 * @description
 * 
 * Map associated with a LALS fix, either embedded or referenced by a URL. Annex
 * B.3 points the choice at OMA MLP clause 5.2.2.3, the embedded form at clause
 * 5.3.12, and the URL at clause 5.3.138. TS 33.108 does not restate that
 * syntax.
 * 
 * 3GPP TS 33.108, annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-mapData ::= CHOICE         {
 *     base64Map     [0] PrintableString, -- clause 5.3.12
 *     url         [1] PrintableString -- clause 5.3.138
 * }
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
