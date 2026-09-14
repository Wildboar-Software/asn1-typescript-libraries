/* eslint-disable */
import {
    GraphicString,
    PrintableString,
    GeneralString,
    T61String,
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
 * @summary CharacterData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CharacterData  ::=  CHOICE {
 *     graphicString   GraphicString,
 *     t61String       T61String,
 *     printableString PrintableString,
 *     generalString   GeneralString
 * }
 * ```
 */
export
type CharacterData =
    { graphicString: GraphicString } /* CHOICE_ALT_ROOT */
    | { t61String: T61String } /* CHOICE_ALT_ROOT */
    | { printableString: PrintableString } /* CHOICE_ALT_ROOT */
    | { generalString: GeneralString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CharacterData: $.ASN1Decoder<CharacterData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CharacterData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CharacterData (el: _Element): CharacterData {
    if (!_cached_decoder_for_CharacterData) { _cached_decoder_for_CharacterData = $._decode_inextensible_choice<CharacterData>({
    "UNIVERSAL 25": [ "graphicString", $._decodeGraphicString ],
    "UNIVERSAL 20": [ "t61String", $._decodeT61String ],
    "UNIVERSAL 19": [ "printableString", $._decodePrintableString ],
    "UNIVERSAL 27": [ "generalString", $._decodeGeneralString ]
}); }
    return _cached_decoder_for_CharacterData(el);
}

let _cached_encoder_for_CharacterData: $.ASN1Encoder<CharacterData> | null = null;

/**
 * @summary Encodes a(n) CharacterData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CharacterData, encoded as an ASN.1 Element.
 */
export
function _encode_CharacterData (value: CharacterData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CharacterData) { _cached_encoder_for_CharacterData = $._encode_choice<CharacterData>({
    "graphicString": $._encodeGraphicString,
    "t61String": $._encodeT61String,
    "printableString": $._encodePrintableString,
    "generalString": $._encodeGeneralString,
}, $.BER); }
    return _cached_encoder_for_CharacterData(value, elGetter);
}


/* eslint-enable */
