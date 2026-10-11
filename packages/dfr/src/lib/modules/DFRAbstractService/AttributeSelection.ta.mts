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
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";


/**
 * @summary AttributeSelection
 * @description
 *
 * Which attributes of listed/read entries to return. `minimum` means UPI and
 * object-class only (always returned anyway on List/Search). `ordered` also
 * sets delivery order. ISO/IEC 10166-1:1991 §8.1.5.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeSelection  ::=  CHOICE {
 *     all         [0] NULL,
 *     none        [1] NULL,
 *     -- when the delivery order is not significant
 *     unordered   [2] SET OF AttributeType,
 *     -- to specify not only attributes to be delivered, but also the order in which they should appear
 *     ordered     [3] SEQUENCE OF AttributeType,
 *     -- implicitly selects UPI and DFR-Object-Class attributes
 *     minimum     [4] NULL
 * }
 * ```
 */
export
type AttributeSelection =
    { all: NULL } /* CHOICE_ALT_ROOT */
    | { none: NULL } /* CHOICE_ALT_ROOT */
    | { unordered: AttributeType[] } /* CHOICE_ALT_ROOT */
    | { ordered: AttributeType[] } /* CHOICE_ALT_ROOT */
    | { minimum: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeSelection: $.ASN1Decoder<AttributeSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSelection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeSelection (el: _Element): AttributeSelection {
    if (!_cached_decoder_for_AttributeSelection) { _cached_decoder_for_AttributeSelection = $._decode_inextensible_choice<AttributeSelection>({
    "CONTEXT 0": [ "all", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "none", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "unordered", $._decode_implicit<AttributeType[]>(() => $._decodeSetOf<AttributeType>(() => _decode_AttributeType)) ],
    "CONTEXT 3": [ "ordered", $._decode_implicit<AttributeType[]>(() => $._decodeSequenceOf<AttributeType>(() => _decode_AttributeType)) ],
    "CONTEXT 4": [ "minimum", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_AttributeSelection(el);
}

let _cached_encoder_for_AttributeSelection: $.ASN1Encoder<AttributeSelection> | null = null;

/**
 * @summary Encodes a(n) AttributeSelection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSelection, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeSelection (value: AttributeSelection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeSelection) { _cached_encoder_for_AttributeSelection = $._encode_choice<AttributeSelection>({
    "all": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "none": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "unordered": $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER),
    "ordered": $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER),
    "minimum": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeSelection(value, elGetter);
}


/* eslint-enable */
