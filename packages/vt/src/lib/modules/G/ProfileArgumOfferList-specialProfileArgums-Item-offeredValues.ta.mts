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
import { ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean, _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean, _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean } from "../G/ProfileArgumOfferList-specialProfileArgums-Item-offeredValues-boolean.ta.mjs";
// export { ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean, ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_false_bit /* IMPORTED_LONG_NAMED_BIT */, false_bit /* IMPORTED_SHORT_NAMED_BIT */, ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean_true_bit /* IMPORTED_LONG_NAMED_BIT */, true_bit /* IMPORTED_SHORT_NAMED_BIT */, _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean, _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean } from "../G/ProfileArgumOfferList-specialProfileArgums-Item-offeredValues-boolean.ta.mjs";
import { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";


/**
 * @summary ProfileArgumOfferList_specialProfileArgums_Item_offeredValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileArgumOfferList-specialProfileArgums-Item-offeredValues ::= CHOICE {
 *     boolean [0] IMPLICIT BIT STRING { false-bit (0), true-bit (1) },
 *     integer [1] IMPLICIT IntegerOffer,
 *     string  [2] IMPLICIT SET OF PrintableString,
 *     objid   [3] IMPLICIT SET OF OBJECT IDENTIFIER
 * }
 * ```
 */
export
type ProfileArgumOfferList_specialProfileArgums_Item_offeredValues =
    { boolean_: ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean } /* CHOICE_ALT_ROOT */
    | { integer: IntegerOffer } /* CHOICE_ALT_ROOT */
    | { string_: PrintableString[] } /* CHOICE_ALT_ROOT */
    | { objid: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues: $.ASN1Decoder<ProfileArgumOfferList_specialProfileArgums_Item_offeredValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileArgumOfferList_specialProfileArgums_Item_offeredValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues (el: _Element): ProfileArgumOfferList_specialProfileArgums_Item_offeredValues {
    if (!_cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues) { _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues = $._decode_inextensible_choice<ProfileArgumOfferList_specialProfileArgums_Item_offeredValues>({
    "CONTEXT 0": [ "boolean_", $._decode_implicit<ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean>(() => _decode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean) ],
    "CONTEXT 1": [ "integer", $._decode_implicit<IntegerOffer>(() => _decode_IntegerOffer) ],
    "CONTEXT 2": [ "string_", $._decode_implicit<PrintableString[]>(() => $._decodeSetOf<PrintableString>(() => $._decodePrintableString)) ],
    "CONTEXT 3": [ "objid", $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)) ]
}); }
    return _cached_decoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues(el);
}

let _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues: $.ASN1Encoder<ProfileArgumOfferList_specialProfileArgums_Item_offeredValues> | null = null;

/**
 * @summary Encodes a(n) ProfileArgumOfferList_specialProfileArgums_Item_offeredValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileArgumOfferList_specialProfileArgums_Item_offeredValues, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues (value: ProfileArgumOfferList_specialProfileArgums_Item_offeredValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues) { _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues = $._encode_choice<ProfileArgumOfferList_specialProfileArgums_Item_offeredValues>({
    "boolean_": $._encode_implicit(_TagClass.context, 0, () => _encode_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues_boolean, $.BER),
    "integer": $._encode_implicit(_TagClass.context, 1, () => _encode_IntegerOffer, $.BER),
    "string_": $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER),
    "objid": $._encode_implicit(_TagClass.context, 3, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ProfileArgumOfferList_specialProfileArgums_Item_offeredValues(value, elGetter);
}


/* eslint-enable */
