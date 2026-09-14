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
import { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";
// export { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";


/**
 * @summary SourceEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SourceEntry  ::=  CHOICE {
 *     parent              [0] NULL,
 *     referent            [1] NULL, -- only for a DFR-Reference
 *     previous-version    [2] NULL,
 *     specified-entry     [3] DfrEntryName, -- only if unique previous version
 *     dor                 [4] DOR
 * }
 * ```
 */
export
type SourceEntry =
    { parent: NULL } /* CHOICE_ALT_ROOT */
    | { referent: NULL } /* CHOICE_ALT_ROOT */
    | { previous_version: NULL } /* CHOICE_ALT_ROOT */
    | { specified_entry: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { dor: DOR } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SourceEntry: $.ASN1Decoder<SourceEntry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SourceEntry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SourceEntry (el: _Element): SourceEntry {
    if (!_cached_decoder_for_SourceEntry) { _cached_decoder_for_SourceEntry = $._decode_inextensible_choice<SourceEntry>({
    "CONTEXT 0": [ "parent", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "referent", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "previous_version", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "specified_entry", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 4": [ "dor", $._decode_implicit<DOR>(() => _decode_DOR) ]
}); }
    return _cached_decoder_for_SourceEntry(el);
}

let _cached_encoder_for_SourceEntry: $.ASN1Encoder<SourceEntry> | null = null;

/**
 * @summary Encodes a(n) SourceEntry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SourceEntry, encoded as an ASN.1 Element.
 */
export
function _encode_SourceEntry (value: SourceEntry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SourceEntry) { _cached_encoder_for_SourceEntry = $._encode_choice<SourceEntry>({
    "parent": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "referent": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "previous_version": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "specified_entry": $._encode_explicit(_TagClass.context, 3, () => _encode_DfrEntryName, $.BER),
    "dor": $._encode_implicit(_TagClass.context, 4, () => _encode_DOR, $.BER),
}, $.BER); }
    return _cached_encoder_for_SourceEntry(value, elGetter);
}


/* eslint-enable */
