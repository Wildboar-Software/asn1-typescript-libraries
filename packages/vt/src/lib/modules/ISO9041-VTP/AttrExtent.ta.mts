/* eslint-disable */
import {
    NULL,
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
import { AttrExtent_address, _decode_AttrExtent_address, _encode_AttrExtent_address } from "../ISO9041-VTP/AttrExtent-address.ta.mjs";
// export { AttrExtent_address, _decode_AttrExtent_address, _encode_AttrExtent_address } from "../ISO9041-VTP/AttrExtent-address.ta.mjs";


/**
 * @summary AttrExtent
 * @description
 *
 * ATTRIBUTE extent. ISO/IEC 9040:1997 §19.4.1.3.
 *
 * - `global`: also sets the global attribute; `"null"` value is
 *   valid; does not change array elements when the value is null.
 * - `address`: beginning/ending `Pointer`s.
 * - `modal`: sets the modal attribute only; no array elements.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttrExtent  ::=  CHOICE {
 *     global  [0] IMPLICIT NULL,
 *     address [1] IMPLICIT SEQUENCE {
 *         beginning Pointer,
 *         ending Pointer
 *     },
 *     modal [2] IMPLICIT NULL
 * }
 * ```
 */
export
type AttrExtent =
    { global: NULL } /* CHOICE_ALT_ROOT */
    | { address: AttrExtent_address } /* CHOICE_ALT_ROOT */
    | { modal: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttrExtent: $.ASN1Decoder<AttrExtent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttrExtent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttrExtent (el: _Element): AttrExtent {
    if (!_cached_decoder_for_AttrExtent) { _cached_decoder_for_AttrExtent = $._decode_inextensible_choice<AttrExtent>({
    "CONTEXT 0": [ "global", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "address", $._decode_implicit<AttrExtent_address>(() => _decode_AttrExtent_address) ],
    "CONTEXT 2": [ "modal", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AttrExtent(el);
}

let _cached_encoder_for_AttrExtent: $.ASN1Encoder<AttrExtent> | null = null;

/**
 * @summary Encodes a(n) AttrExtent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttrExtent, encoded as an ASN.1 Element.
 */
export
function _encode_AttrExtent (value: AttrExtent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttrExtent) { _cached_encoder_for_AttrExtent = $._encode_choice<AttrExtent>({
    "global": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "address": $._encode_implicit(_TagClass.context, 1, () => _encode_AttrExtent_address, $.BER),
    "modal": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttrExtent(value, elGetter);
}


/* eslint-enable */
