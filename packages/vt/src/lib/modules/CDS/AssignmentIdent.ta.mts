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
 * @summary AssignmentIdent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AssignmentIdent  ::=  CHOICE {
 *     nul     NULL,
 *     name    PrintableString
 * }
 * ```
 */
export
type AssignmentIdent =
    { nul: NULL } /* CHOICE_ALT_ROOT */
    | { name: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AssignmentIdent: $.ASN1Decoder<AssignmentIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AssignmentIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AssignmentIdent (el: _Element): AssignmentIdent {
    if (!_cached_decoder_for_AssignmentIdent) { _cached_decoder_for_AssignmentIdent = $._decode_inextensible_choice<AssignmentIdent>({
    "UNIVERSAL 5": [ "nul", $._decodeNull ],
    "UNIVERSAL 19": [ "name", $._decodePrintableString ]
}); }
    return _cached_decoder_for_AssignmentIdent(el);
}

let _cached_encoder_for_AssignmentIdent: $.ASN1Encoder<AssignmentIdent> | null = null;

/**
 * @summary Encodes a(n) AssignmentIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssignmentIdent, encoded as an ASN.1 Element.
 */
export
function _encode_AssignmentIdent (value: AssignmentIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AssignmentIdent) { _cached_encoder_for_AssignmentIdent = $._encode_choice<AssignmentIdent>({
    "nul": $._encodeNull,
    "name": $._encodePrintableString,
}, $.BER); }
    return _cached_encoder_for_AssignmentIdent(value, elGetter);
}


/* eslint-enable */
