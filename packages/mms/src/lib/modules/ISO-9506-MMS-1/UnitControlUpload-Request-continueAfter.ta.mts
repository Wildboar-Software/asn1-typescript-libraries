/* eslint-disable */
import {
    INTEGER,
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
 * @summary UnitControlUpload_Request_continueAfter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitControlUpload-Request-continueAfter ::= CHOICE {
 *     domain [1] IMPLICIT Identifier,
 *     ulsmID [2] IMPLICIT INTEGER,
 *     programInvocation [3] IMPLICIT Identifier
 * }
 * ```
 */
export
type UnitControlUpload_Request_continueAfter =
    { domain: Identifier } /* CHOICE_ALT_ROOT */
    | { ulsmID: INTEGER } /* CHOICE_ALT_ROOT */
    | { programInvocation: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UnitControlUpload_Request_continueAfter: $.ASN1Decoder<UnitControlUpload_Request_continueAfter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnitControlUpload_Request_continueAfter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnitControlUpload_Request_continueAfter (el: _Element): UnitControlUpload_Request_continueAfter {
    if (!_cached_decoder_for_UnitControlUpload_Request_continueAfter) { _cached_decoder_for_UnitControlUpload_Request_continueAfter = $._decode_inextensible_choice<UnitControlUpload_Request_continueAfter>({
    "CONTEXT 1": [ "domain", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 2": [ "ulsmID", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "programInvocation", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_UnitControlUpload_Request_continueAfter(el);
}

let _cached_encoder_for_UnitControlUpload_Request_continueAfter: $.ASN1Encoder<UnitControlUpload_Request_continueAfter> | null = null;

/**
 * @summary Encodes a(n) UnitControlUpload_Request_continueAfter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitControlUpload_Request_continueAfter, encoded as an ASN.1 Element.
 */
export
function _encode_UnitControlUpload_Request_continueAfter (value: UnitControlUpload_Request_continueAfter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnitControlUpload_Request_continueAfter) { _cached_encoder_for_UnitControlUpload_Request_continueAfter = $._encode_choice<UnitControlUpload_Request_continueAfter>({
    "domain": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
    "ulsmID": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "programInvocation": $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_UnitControlUpload_Request_continueAfter(value, elGetter);
}


/* eslint-enable */
