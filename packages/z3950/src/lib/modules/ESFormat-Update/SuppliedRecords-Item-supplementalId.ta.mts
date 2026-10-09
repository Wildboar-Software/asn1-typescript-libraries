/* eslint-disable */
import {
    EXTERNAL,
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary SuppliedRecords_Item_supplementalId
 * @description
 * 
 * Supplemental identification of the database record, or of the correct
 * version: a timestamp, a version number, or another form such as a
 * previous version. For element update this identifies the record, not an
 * element.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppliedRecords-Item-supplementalId ::= CHOICE {
 *     timeStamp [1] IMPLICIT GeneralizedTime,
 *     versionNumber [2] IMPLICIT InternationalString,
 *     previousVersion [3] IMPLICIT EXTERNAL
 * }
 * ```
 */
export
type SuppliedRecords_Item_supplementalId =
    { timeStamp: GeneralizedTime } /* CHOICE_ALT_ROOT */
    | { versionNumber: InternationalString } /* CHOICE_ALT_ROOT */
    | { previousVersion: EXTERNAL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SuppliedRecords_Item_supplementalId: $.ASN1Decoder<SuppliedRecords_Item_supplementalId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuppliedRecords_Item_supplementalId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuppliedRecords_Item_supplementalId (el: _Element): SuppliedRecords_Item_supplementalId {
    if (!_cached_decoder_for_SuppliedRecords_Item_supplementalId) { _cached_decoder_for_SuppliedRecords_Item_supplementalId = $._decode_inextensible_choice<SuppliedRecords_Item_supplementalId>({
    "CONTEXT 1": [ "timeStamp", $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime) ],
    "CONTEXT 2": [ "versionNumber", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 3": [ "previousVersion", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ]
}); }
    return _cached_decoder_for_SuppliedRecords_Item_supplementalId(el);
}

let _cached_encoder_for_SuppliedRecords_Item_supplementalId: $.ASN1Encoder<SuppliedRecords_Item_supplementalId> | null = null;

/**
 * @summary Encodes a(n) SuppliedRecords_Item_supplementalId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppliedRecords_Item_supplementalId, encoded as an ASN.1 Element.
 */
export
function _encode_SuppliedRecords_Item_supplementalId (value: SuppliedRecords_Item_supplementalId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuppliedRecords_Item_supplementalId) { _cached_encoder_for_SuppliedRecords_Item_supplementalId = $._encode_choice<SuppliedRecords_Item_supplementalId>({
    "timeStamp": $._encode_implicit(_TagClass.context, 1, () => $._encodeGeneralizedTime, $.BER),
    "versionNumber": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
    "previousVersion": $._encode_implicit(_TagClass.context, 3, () => $._encodeExternal, $.BER),
}, $.BER); }
    return _cached_encoder_for_SuppliedRecords_Item_supplementalId(value, elGetter);
}


/* eslint-enable */
