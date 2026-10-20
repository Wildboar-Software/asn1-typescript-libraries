/* eslint-disable */
import {
    EXTERNAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TotalRefresh, _decode_TotalRefresh, _encode_TotalRefresh } from "../DirectoryShadowAbstractService/TotalRefresh.ta.mjs";
// export { TotalRefresh, _decode_TotalRefresh, _encode_TotalRefresh } from "../DirectoryShadowAbstractService/TotalRefresh.ta.mjs";
import { IncrementalRefresh, _decode_IncrementalRefresh, _encode_IncrementalRefresh } from "../DirectoryShadowAbstractService/IncrementalRefresh.ta.mjs";
// export { IncrementalRefresh, _decode_IncrementalRefresh, _encode_IncrementalRefresh } from "../DirectoryShadowAbstractService/IncrementalRefresh.ta.mjs";


/**
 * @summary RefreshInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RefreshInformation  ::=  CHOICE {
 *   noRefresh      NULL,
 *   total          [0]  TotalRefresh,
 *   incremental    [1]  IncrementalRefresh,
 *   otherStrategy  EXTERNAL
 * }
 * ```
 */
export
type RefreshInformation =
    { noRefresh: NULL } /* CHOICE_ALT_ROOT */
    | { total: TotalRefresh } /* CHOICE_ALT_ROOT */
    | { incremental: IncrementalRefresh } /* CHOICE_ALT_ROOT */
    | { otherStrategy: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RefreshInformation: $.ASN1Decoder<RefreshInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RefreshInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RefreshInformation (el: _Element): RefreshInformation {
    if (!_cached_decoder_for_RefreshInformation) { _cached_decoder_for_RefreshInformation = $._decode_inextensible_choice<RefreshInformation>({
    "UNIVERSAL 5": [ "noRefresh", $._decodeNull ],
    "CONTEXT 0": [ "total", $._decode_implicit<TotalRefresh>(() => _decode_TotalRefresh) ],
    "CONTEXT 1": [ "incremental", $._decode_implicit<IncrementalRefresh>(() => _decode_IncrementalRefresh) ],
    "UNIVERSAL 8": [ "otherStrategy", $._decodeExternal ]
}); }
    return _cached_decoder_for_RefreshInformation(el);
}

let _cached_encoder_for_RefreshInformation: $.ASN1Encoder<RefreshInformation> | null = null;

/**
 * @summary Encodes a(n) RefreshInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RefreshInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RefreshInformation (value: RefreshInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RefreshInformation) { _cached_encoder_for_RefreshInformation = $._encode_choice<RefreshInformation>({
    "noRefresh": $._encodeNull,
    "total": $._encode_implicit(_TagClass.context, 0, () => _encode_TotalRefresh, $.BER),
    "incremental": $._encode_implicit(_TagClass.context, 1, () => _encode_IncrementalRefresh, $.BER),
    "otherStrategy": $._encodeExternal,
}, $.BER); }
    return _cached_encoder_for_RefreshInformation(value, elGetter);
}


/* eslint-enable */
