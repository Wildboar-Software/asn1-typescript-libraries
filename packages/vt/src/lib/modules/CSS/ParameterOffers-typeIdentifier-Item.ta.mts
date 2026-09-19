/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ParameterOffers_typeIdentifier_Item
 * @description
 *
 * One offered `CO-type-identifier`.
 *
 * - `oid`: semantics from this International Standard, a
 *   VTE-profile, or a registered CO (ISO/IEC 9040:1997
 *   table 10, annex C).
 * - `string_`: PrintableString; semantics defined outside
 *   ISO/IEC 9040 (profile or private agreement).
 *
 * ISO/IEC 9040:1997 §14, §20.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-typeIdentifier-Item ::= CHOICE {
 *     oid     OBJECT IDENTIFIER,
 *     string  PrintableString
 * }
 * ```
 */
export
type ParameterOffers_typeIdentifier_Item =
    { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { string_: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParameterOffers_typeIdentifier_Item: $.ASN1Decoder<ParameterOffers_typeIdentifier_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_typeIdentifier_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_typeIdentifier_Item (el: _Element): ParameterOffers_typeIdentifier_Item {
    if (!_cached_decoder_for_ParameterOffers_typeIdentifier_Item) { _cached_decoder_for_ParameterOffers_typeIdentifier_Item = $._decode_inextensible_choice<ParameterOffers_typeIdentifier_Item>({
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 19": [ "string_", $._decodePrintableString ]
}); }
    return _cached_decoder_for_ParameterOffers_typeIdentifier_Item(el);
}

let _cached_encoder_for_ParameterOffers_typeIdentifier_Item: $.ASN1Encoder<ParameterOffers_typeIdentifier_Item> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_typeIdentifier_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_typeIdentifier_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_typeIdentifier_Item (value: ParameterOffers_typeIdentifier_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_typeIdentifier_Item) { _cached_encoder_for_ParameterOffers_typeIdentifier_Item = $._encode_choice<ParameterOffers_typeIdentifier_Item>({
    "oid": $._encodeObjectIdentifier,
    "string_": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_ParameterOffers_typeIdentifier_Item(value, elGetter);
}


/* eslint-enable */
