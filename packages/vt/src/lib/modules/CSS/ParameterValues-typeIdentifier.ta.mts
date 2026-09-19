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
 * @summary ParameterValues_typeIdentifier
 * @description
 *
 * Selected `CO-type-identifier` (one alternative).
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
 * ParameterValues-typeIdentifier ::= CHOICE {
 *     oid     OBJECT IDENTIFIER,
 *     string  PrintableString
 * }
 * ```
 */
export
type ParameterValues_typeIdentifier =
    { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { string_: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParameterValues_typeIdentifier: $.ASN1Decoder<ParameterValues_typeIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_typeIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_typeIdentifier (el: _Element): ParameterValues_typeIdentifier {
    if (!_cached_decoder_for_ParameterValues_typeIdentifier) { _cached_decoder_for_ParameterValues_typeIdentifier = $._decode_inextensible_choice<ParameterValues_typeIdentifier>({
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 19": [ "string_", $._decodePrintableString ]
}); }
    return _cached_decoder_for_ParameterValues_typeIdentifier(el);
}

let _cached_encoder_for_ParameterValues_typeIdentifier: $.ASN1Encoder<ParameterValues_typeIdentifier> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_typeIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_typeIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_typeIdentifier (value: ParameterValues_typeIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_typeIdentifier) { _cached_encoder_for_ParameterValues_typeIdentifier = $._encode_choice<ParameterValues_typeIdentifier>({
    "oid": $._encodeObjectIdentifier,
    "string_": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_ParameterValues_typeIdentifier(value, elGetter);
}


/* eslint-enable */
