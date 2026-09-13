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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";


/**
 * @summary GroupMemberPosition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupMemberPosition  ::=  CHOICE {
 *     last    [0] NULL,
 *     first   [1] NULL,
 *     after   [2] DfrEntryName,
 *     before  [3] DfrEntryName
 * }
 * ```
 */
export
type GroupMemberPosition =
    { last: NULL } /* CHOICE_ALT_ROOT */
    | { first: NULL } /* CHOICE_ALT_ROOT */
    | { after: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { before: DfrEntryName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GroupMemberPosition: $.ASN1Decoder<GroupMemberPosition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupMemberPosition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupMemberPosition (el: _Element): GroupMemberPosition {
    if (!_cached_decoder_for_GroupMemberPosition) { _cached_decoder_for_GroupMemberPosition = $._decode_inextensible_choice<GroupMemberPosition>({
    "CONTEXT 0": [ "last", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "first", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "after", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 3": [ "before", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ]
}); }
    return _cached_decoder_for_GroupMemberPosition(el);
}

let _cached_encoder_for_GroupMemberPosition: $.ASN1Encoder<GroupMemberPosition> | null = null;

/**
 * @summary Encodes a(n) GroupMemberPosition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupMemberPosition, encoded as an ASN.1 Element.
 */
export
function _encode_GroupMemberPosition (value: GroupMemberPosition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupMemberPosition) { _cached_encoder_for_GroupMemberPosition = $._encode_choice<GroupMemberPosition>({
    "last": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "first": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "after": $._encode_explicit(_TagClass.context, 2, () => _encode_DfrEntryName, $.BER),
    "before": $._encode_explicit(_TagClass.context, 3, () => _encode_DfrEntryName, $.BER),
}, $.BER); }
    return _cached_encoder_for_GroupMemberPosition(value, elGetter);
}


/* eslint-enable */
