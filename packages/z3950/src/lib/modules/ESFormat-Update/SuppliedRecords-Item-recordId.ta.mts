/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary SuppliedRecords_Item_recordId
 * @description
 * 
 * Optional record id accompanying one supplied update record. The standard
 * calls this a record id and does not define the number, string, and
 * opaque alternatives further.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppliedRecords-Item-recordId ::= CHOICE {
 *     number [1] IMPLICIT INTEGER,
 *     string [2] IMPLICIT InternationalString,
 *     opaque [3] IMPLICIT OCTET STRING
 * }
 * ```
 */
export
type SuppliedRecords_Item_recordId =
    { number_: INTEGER } /* CHOICE_ALT_ROOT */
    | { string_: InternationalString } /* CHOICE_ALT_ROOT */
    | { opaque: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SuppliedRecords_Item_recordId: $.ASN1Decoder<SuppliedRecords_Item_recordId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuppliedRecords_Item_recordId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuppliedRecords_Item_recordId (el: _Element): SuppliedRecords_Item_recordId {
    if (!_cached_decoder_for_SuppliedRecords_Item_recordId) { _cached_decoder_for_SuppliedRecords_Item_recordId = $._decode_inextensible_choice<SuppliedRecords_Item_recordId>({
    "CONTEXT 1": [ "number_", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "string_", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ],
    "CONTEXT 3": [ "opaque", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_SuppliedRecords_Item_recordId(el);
}

let _cached_encoder_for_SuppliedRecords_Item_recordId: $.ASN1Encoder<SuppliedRecords_Item_recordId> | null = null;

/**
 * @summary Encodes a(n) SuppliedRecords_Item_recordId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppliedRecords_Item_recordId, encoded as an ASN.1 Element.
 */
export
function _encode_SuppliedRecords_Item_recordId (value: SuppliedRecords_Item_recordId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuppliedRecords_Item_recordId) { _cached_encoder_for_SuppliedRecords_Item_recordId = $._encode_choice<SuppliedRecords_Item_recordId>({
    "number_": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "string_": $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER),
    "opaque": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_SuppliedRecords_Item_recordId(value, elGetter);
}


/* eslint-enable */
