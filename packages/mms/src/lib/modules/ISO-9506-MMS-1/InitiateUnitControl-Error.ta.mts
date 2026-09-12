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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary InitiateUnitControl_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateUnitControl-Error  ::=  CHOICE {
 *     domain                 [0] IMPLICIT Identifier,
 *     programInvocation      [1] IMPLICIT Identifier
 * }
 * ```
 */
export
type InitiateUnitControl_Error =
    { domain: Identifier } /* CHOICE_ALT_ROOT */
    | { programInvocation: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InitiateUnitControl_Error: $.ASN1Decoder<InitiateUnitControl_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateUnitControl_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateUnitControl_Error (el: _Element): InitiateUnitControl_Error {
    if (!_cached_decoder_for_InitiateUnitControl_Error) { _cached_decoder_for_InitiateUnitControl_Error = $._decode_inextensible_choice<InitiateUnitControl_Error>({
    "CONTEXT 0": [ "domain", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 1": [ "programInvocation", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_InitiateUnitControl_Error(el);
}

let _cached_encoder_for_InitiateUnitControl_Error: $.ASN1Encoder<InitiateUnitControl_Error> | null = null;

/**
 * @summary Encodes a(n) InitiateUnitControl_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateUnitControl_Error, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateUnitControl_Error (value: InitiateUnitControl_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateUnitControl_Error) { _cached_encoder_for_InitiateUnitControl_Error = $._encode_choice<InitiateUnitControl_Error>({
    "domain": $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER),
    "programInvocation": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_InitiateUnitControl_Error(value, elGetter);
}


/* eslint-enable */
