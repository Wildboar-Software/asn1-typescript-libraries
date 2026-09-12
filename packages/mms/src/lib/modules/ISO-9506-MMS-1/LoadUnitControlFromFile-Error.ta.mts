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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary LoadUnitControlFromFile_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LoadUnitControlFromFile-Error  ::=  CHOICE {
 *    none                       [0] IMPLICIT NULL,
 *    domain                     [1] IMPLICIT Identifier,
 *    programInvocation          [2] IMPLICIT Identifier
 *    }
 * ```
 */
export
type LoadUnitControlFromFile_Error =
    { none: NULL } /* CHOICE_ALT_ROOT */
    | { domain: Identifier } /* CHOICE_ALT_ROOT */
    | { programInvocation: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LoadUnitControlFromFile_Error: $.ASN1Decoder<LoadUnitControlFromFile_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LoadUnitControlFromFile_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LoadUnitControlFromFile_Error (el: _Element): LoadUnitControlFromFile_Error {
    if (!_cached_decoder_for_LoadUnitControlFromFile_Error) { _cached_decoder_for_LoadUnitControlFromFile_Error = $._decode_inextensible_choice<LoadUnitControlFromFile_Error>({
    "CONTEXT 0": [ "none", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "domain", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 2": [ "programInvocation", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_LoadUnitControlFromFile_Error(el);
}

let _cached_encoder_for_LoadUnitControlFromFile_Error: $.ASN1Encoder<LoadUnitControlFromFile_Error> | null = null;

/**
 * @summary Encodes a(n) LoadUnitControlFromFile_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LoadUnitControlFromFile_Error, encoded as an ASN.1 Element.
 */
export
function _encode_LoadUnitControlFromFile_Error (value: LoadUnitControlFromFile_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LoadUnitControlFromFile_Error) { _cached_encoder_for_LoadUnitControlFromFile_Error = $._encode_choice<LoadUnitControlFromFile_Error>({
    "none": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "domain": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "programInvocation": $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_LoadUnitControlFromFile_Error(value, elGetter);
}


/* eslint-enable */
