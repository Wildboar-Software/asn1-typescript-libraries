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


/**
 * @summary referentAccessError_ParameterType_entry
 * @description
 *
 * Identifies the reference that could not be followed: local DfrEntryName or a
 * consumed DOR. ISO/IEC 10166-1:1991 §8.3.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * referentAccessError-ParameterType-entry ::= CHOICE {
 *             dfr-entry   [0] DfrEntryName,
 *             dor         [1] NULL
 *         }
 * ```
 */
export
type referentAccessError_ParameterType_entry =
    { dfr_entry: DfrEntryName } /* CHOICE_ALT_ROOT */
    | { dor: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_referentAccessError_ParameterType_entry: $.ASN1Decoder<referentAccessError_ParameterType_entry> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) referentAccessError_ParameterType_entry
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_referentAccessError_ParameterType_entry (el: _Element): referentAccessError_ParameterType_entry {
    if (!_cached_decoder_for_referentAccessError_ParameterType_entry) { _cached_decoder_for_referentAccessError_ParameterType_entry = $._decode_inextensible_choice<referentAccessError_ParameterType_entry>({
    "CONTEXT 0": [ "dfr_entry", $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName) ],
    "CONTEXT 1": [ "dor", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_referentAccessError_ParameterType_entry(el);
}

let _cached_encoder_for_referentAccessError_ParameterType_entry: $.ASN1Encoder<referentAccessError_ParameterType_entry> | null = null;

/**
 * @summary Encodes a(n) referentAccessError_ParameterType_entry into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The referentAccessError_ParameterType_entry, encoded as an ASN.1 Element.
 */
export
function _encode_referentAccessError_ParameterType_entry (value: referentAccessError_ParameterType_entry, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_referentAccessError_ParameterType_entry) { _cached_encoder_for_referentAccessError_ParameterType_entry = $._encode_choice<referentAccessError_ParameterType_entry>({
    "dfr_entry": $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER),
    "dor": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_referentAccessError_ParameterType_entry(value, elGetter);
}


/* eslint-enable */
