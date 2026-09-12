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
import { AlternateAccessSelection, _decode_AlternateAccessSelection, _encode_AlternateAccessSelection } from "../ISO-9506-MMS-1/AlternateAccessSelection.ta.mjs";
// export { AlternateAccessSelection, _decode_AlternateAccessSelection, _encode_AlternateAccessSelection } from "../ISO-9506-MMS-1/AlternateAccessSelection.ta.mjs";
import { AlternateAccess_Item_named, _decode_AlternateAccess_Item_named, _encode_AlternateAccess_Item_named } from "../ISO-9506-MMS-1/AlternateAccess-Item-named.ta.mjs";
// export { AlternateAccess_Item_named, _decode_AlternateAccess_Item_named, _encode_AlternateAccess_Item_named } from "../ISO-9506-MMS-1/AlternateAccess-Item-named.ta.mjs";


/**
 * @summary AlternateAccess_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateAccess-Item ::= CHOICE {
 *     unnamed AlternateAccessSelection,
 *     named [5] IMPLICIT SEQUENCE {
 *         componentName [0] IMPLICIT Identifier,
 *         access AlternateAccessSelection
 *     }
 * }
 * ```
 */
export
type AlternateAccess_Item =
    { unnamed: AlternateAccessSelection } /* CHOICE_ALT_ROOT */
    | { named: AlternateAccess_Item_named } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AlternateAccess_Item: $.ASN1Decoder<AlternateAccess_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateAccess_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateAccess_Item (el: _Element): AlternateAccess_Item {
    if (!_cached_decoder_for_AlternateAccess_Item) { _cached_decoder_for_AlternateAccess_Item = $._decode_inextensible_choice<AlternateAccess_Item>({
    "CONTEXT 0": [ "unnamed", _decode_AlternateAccessSelection ],
    "CONTEXT 1": [ "unnamed", _decode_AlternateAccessSelection ],
    "CONTEXT 2": [ "unnamed", _decode_AlternateAccessSelection ],
    "CONTEXT 3": [ "unnamed", _decode_AlternateAccessSelection ],
    "CONTEXT 4": [ "unnamed", _decode_AlternateAccessSelection ],
    "CONTEXT 5": [ "named", $._decode_implicit<AlternateAccess_Item_named>(() => _decode_AlternateAccess_Item_named) ]
}); }
    return _cached_decoder_for_AlternateAccess_Item(el);
}

let _cached_encoder_for_AlternateAccess_Item: $.ASN1Encoder<AlternateAccess_Item> | null = null;

/**
 * @summary Encodes a(n) AlternateAccess_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateAccess_Item, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateAccess_Item (value: AlternateAccess_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateAccess_Item) { _cached_encoder_for_AlternateAccess_Item = $._encode_choice<AlternateAccess_Item>({
    "unnamed": _encode_AlternateAccessSelection,
    "named": $._encode_implicit(_TagClass.context, 5, () => _encode_AlternateAccess_Item_named, $.BER),
}, $.BER); }
    return _cached_encoder_for_AlternateAccess_Item(value, elGetter);
}


/* eslint-enable */
