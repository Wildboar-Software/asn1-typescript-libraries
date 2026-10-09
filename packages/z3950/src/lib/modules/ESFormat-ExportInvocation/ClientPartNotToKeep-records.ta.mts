/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ClientPartNotToKeep_records_ranges_Item, _decode_ClientPartNotToKeep_records_ranges_Item, _encode_ClientPartNotToKeep_records_ranges_Item } from "../ESFormat-ExportInvocation/ClientPartNotToKeep-records-ranges-Item.ta.mjs";
// export { ClientPartNotToKeep_records_ranges_Item, _decode_ClientPartNotToKeep_records_ranges_Item, _encode_ClientPartNotToKeep_records_ranges_Item } from "../ESFormat-ExportInvocation/ClientPartNotToKeep-records-ranges-Item.ta.mjs";


/**
 * @summary ClientPartNotToKeep_records
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep-records ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ClientPartNotToKeep_records =
    { all: NULL } /* CHOICE_ALT_ROOT */
    | { ranges: ClientPartNotToKeep_records_ranges_Item[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ClientPartNotToKeep_records: $.ASN1Decoder<ClientPartNotToKeep_records> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep_records
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep_records (el: _Element): ClientPartNotToKeep_records {
    if (!_cached_decoder_for_ClientPartNotToKeep_records) { _cached_decoder_for_ClientPartNotToKeep_records = $._decode_inextensible_choice<ClientPartNotToKeep_records>({
    "CONTEXT 1": [ "all", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "ranges", $._decode_implicit<ClientPartNotToKeep_records_ranges_Item[]>(() => $._decodeSequenceOf<ClientPartNotToKeep_records_ranges_Item>(() => _decode_ClientPartNotToKeep_records_ranges_Item)) ]
}); }
    return _cached_decoder_for_ClientPartNotToKeep_records(el);
}

let _cached_encoder_for_ClientPartNotToKeep_records: $.ASN1Encoder<ClientPartNotToKeep_records> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep_records into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep_records, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep_records (value: ClientPartNotToKeep_records, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep_records) { _cached_encoder_for_ClientPartNotToKeep_records = $._encode_choice<ClientPartNotToKeep_records>({
    "all": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "ranges": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ClientPartNotToKeep_records_ranges_Item>(() => _encode_ClientPartNotToKeep_records_ranges_Item, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ClientPartNotToKeep_records(value, elGetter);
}


/* eslint-enable */
