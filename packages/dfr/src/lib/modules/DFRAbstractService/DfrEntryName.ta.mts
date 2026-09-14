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
import { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
// export { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
import { DfrPathName, _decode_DfrPathName, _encode_DfrPathName } from "../DFRAbstractService/DfrPathName.ta.mjs";
// export { DfrPathName, _decode_DfrPathName, _encode_DfrPathName } from "../DFRAbstractService/DfrPathName.ta.mjs";
import { DfrEntryName_relative_path_name, _decode_DfrEntryName_relative_path_name, _encode_DfrEntryName_relative_path_name } from "../DFRAbstractService/DfrEntryName-relative-path-name.ta.mjs";
// export { DfrEntryName_relative_path_name, _decode_DfrEntryName_relative_path_name, _encode_DfrEntryName_relative_path_name } from "../DFRAbstractService/DfrEntryName-relative-path-name.ta.mjs";


/**
 * @summary DfrEntryName
 * @description
 *
 * How an operation names an entry: UPI (always valid if the object exists and
 * is readable), absolute path-name, or path relative to a base UPI. Path names
 * need title uniqueness. A user without read right gets `nameError` so the
 * entry stays hidden. ISO/IEC 10166-1:1991 §8.1.4, §8.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrEntryName  ::=  CHOICE {
 *     upi                               [0] DfrUniquePermanentIdentifier,
 *     path-name                         [1] DfrPathName,
 *     relative-path-name                [2] SEQUENCE {
 *         base        [0] DfrUniquePermanentIdentifier,
 *         path        [1] DfrPathName
 *     }
 * }
 * ```
 */
export
type DfrEntryName =
    { upi: DfrUniquePermanentIdentifier } /* CHOICE_ALT_ROOT */
    | { path_name: DfrPathName } /* CHOICE_ALT_ROOT */
    | { relative_path_name: DfrEntryName_relative_path_name } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DfrEntryName: $.ASN1Decoder<DfrEntryName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrEntryName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrEntryName (el: _Element): DfrEntryName {
    if (!_cached_decoder_for_DfrEntryName) { _cached_decoder_for_DfrEntryName = $._decode_inextensible_choice<DfrEntryName>({
    "CONTEXT 0": [ "upi", $._decode_implicit<DfrUniquePermanentIdentifier>(() => _decode_DfrUniquePermanentIdentifier) ],
    "CONTEXT 1": [ "path_name", $._decode_implicit<DfrPathName>(() => _decode_DfrPathName) ],
    "CONTEXT 2": [ "relative_path_name", $._decode_implicit<DfrEntryName_relative_path_name>(() => _decode_DfrEntryName_relative_path_name) ]
}); }
    return _cached_decoder_for_DfrEntryName(el);
}

let _cached_encoder_for_DfrEntryName: $.ASN1Encoder<DfrEntryName> | null = null;

/**
 * @summary Encodes a(n) DfrEntryName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrEntryName, encoded as an ASN.1 Element.
 */
export
function _encode_DfrEntryName (value: DfrEntryName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrEntryName) { _cached_encoder_for_DfrEntryName = $._encode_choice<DfrEntryName>({
    "upi": $._encode_implicit(_TagClass.context, 0, () => _encode_DfrUniquePermanentIdentifier, $.BER),
    "path_name": $._encode_implicit(_TagClass.context, 1, () => _encode_DfrPathName, $.BER),
    "relative_path_name": $._encode_implicit(_TagClass.context, 2, () => _encode_DfrEntryName_relative_path_name, $.BER),
}, $.BER); }
    return _cached_encoder_for_DfrEntryName(value, elGetter);
}


/* eslint-enable */
