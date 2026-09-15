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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
import { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";
// export { DOR, _decode_DOR, _encode_DOR } from "../DOR-definition/DOR.ta.mjs";


/**
 * @summary CommonUpdateArguments_entry
 * @description
 *
 * Source of the entry being copied/moved/read/modified: a local `DfrEntryName`
 * or a DOR for an external object. ISO/IEC 10166-1:1991 §8.1.5.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonUpdateArguments-entry ::= CHOICE {
 *             local           [1] DfrEntryName,
 *             external        [2] DOR
 *         }
 * ```
 */
export
type CommonUpdateArguments_entry =
    { local: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { external: DOR } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CommonUpdateArguments_entry: $.ASN1Decoder<CommonUpdateArguments_entry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonUpdateArguments_entry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonUpdateArguments_entry (el: _Element): CommonUpdateArguments_entry {
    if (!_cached_decoder_for_CommonUpdateArguments_entry) { _cached_decoder_for_CommonUpdateArguments_entry = $._decode_inextensible_choice<CommonUpdateArguments_entry>({
    "CONTEXT 1": [ "local", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 2": [ "external", $._decode_implicit<DOR>(() => _decode_DOR) ]
}); }
    return _cached_decoder_for_CommonUpdateArguments_entry(el);
}

let _cached_encoder_for_CommonUpdateArguments_entry: $.ASN1Encoder<CommonUpdateArguments_entry> | null = null;

/**
 * @summary Encodes a(n) CommonUpdateArguments_entry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonUpdateArguments_entry, encoded as an ASN.1 Element.
 */
export
function _encode_CommonUpdateArguments_entry (value: CommonUpdateArguments_entry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonUpdateArguments_entry) { _cached_encoder_for_CommonUpdateArguments_entry = $._encode_choice<CommonUpdateArguments_entry>({
    "local": $._encode_explicit(_TagClass.context, 1, () => _encode_DfrEntryName, $.BER),
    "external": $._encode_implicit(_TagClass.context, 2, () => _encode_DOR, $.BER),
}, $.BER); }
    return _cached_encoder_for_CommonUpdateArguments_entry(value, elGetter);
}


/* eslint-enable */
