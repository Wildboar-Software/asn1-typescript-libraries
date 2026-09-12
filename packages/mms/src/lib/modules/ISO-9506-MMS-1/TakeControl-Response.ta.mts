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
 * @summary TakeControl_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TakeControl-Response  ::=  CHOICE {
 *    noResult                      [0] IMPLICIT NULL,
 *    namedToken                    [1] IMPLICIT Identifier    }
 * ```
 */
export
type TakeControl_Response =
    { noResult: NULL } /* CHOICE_ALT_ROOT */
    | { namedToken: Identifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TakeControl_Response: $.ASN1Decoder<TakeControl_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TakeControl_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TakeControl_Response (el: _Element): TakeControl_Response {
    if (!_cached_decoder_for_TakeControl_Response) { _cached_decoder_for_TakeControl_Response = $._decode_inextensible_choice<TakeControl_Response>({
    "CONTEXT 0": [ "noResult", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "namedToken", $._decode_explicit<Identifier>(() => _decode_Identifier) ]
}); }
    return _cached_decoder_for_TakeControl_Response(el);
}

let _cached_encoder_for_TakeControl_Response: $.ASN1Encoder<TakeControl_Response> | null = null;

/**
 * @summary Encodes a(n) TakeControl_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TakeControl_Response, encoded as an ASN.1 Element.
 */
export
function _encode_TakeControl_Response (value: TakeControl_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TakeControl_Response) { _cached_encoder_for_TakeControl_Response = $._encode_choice<TakeControl_Response>({
    "noResult": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "namedToken": $._encode_explicit(_TagClass.context, 1, () => _encode_Identifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_TakeControl_Response(value, elGetter);
}


/* eslint-enable */
