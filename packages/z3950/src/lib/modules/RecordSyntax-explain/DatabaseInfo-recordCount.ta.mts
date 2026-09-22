/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DatabaseInfo_recordCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DatabaseInfo-recordCount ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DatabaseInfo_recordCount =
    { actualNumber: INTEGER } /* CHOICE_ALT_ROOT */
    | { approxNumber: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DatabaseInfo_recordCount: $.ASN1Decoder<DatabaseInfo_recordCount> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DatabaseInfo_recordCount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DatabaseInfo_recordCount (el: _Element): DatabaseInfo_recordCount {
    if (!_cached_decoder_for_DatabaseInfo_recordCount) { _cached_decoder_for_DatabaseInfo_recordCount = $._decode_inextensible_choice<DatabaseInfo_recordCount>({
    "CONTEXT 0": [ "actualNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "approxNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_DatabaseInfo_recordCount(el);
}

let _cached_encoder_for_DatabaseInfo_recordCount: $.ASN1Encoder<DatabaseInfo_recordCount> | null = null;

/**
 * @summary Encodes a(n) DatabaseInfo_recordCount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DatabaseInfo_recordCount, encoded as an ASN.1 Element.
 */
export
function _encode_DatabaseInfo_recordCount (value: DatabaseInfo_recordCount, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DatabaseInfo_recordCount) { _cached_encoder_for_DatabaseInfo_recordCount = $._encode_choice<DatabaseInfo_recordCount>({
    "actualNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "approxNumber": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_DatabaseInfo_recordCount(value, elGetter);
}


/* eslint-enable */
