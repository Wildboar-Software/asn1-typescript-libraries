/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../PSS1-Service-APDUs-asn1-97/InvokeId.ta.mjs";
// export { InvokeId, _decode_InvokeId, _encode_InvokeId } from "../PSS1-Service-APDUs-asn1-97/InvokeId.ta.mjs";


/**
 * @summary InvokeIdOrNull
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeIdOrNull  ::=  CHOICE {
 *     present InvokeId (InvokeIdSet),
 *     absent NULL
 * }
 * ```
 */
export
type InvokeIdOrNull =
    { present: InvokeId } /* CHOICE_ALT_ROOT */
    | { absent: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InvokeIdOrNull: $.ASN1Decoder<InvokeIdOrNull> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeIdOrNull
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvokeIdOrNull (el: _Element): InvokeIdOrNull {
    if (!_cached_decoder_for_InvokeIdOrNull) { _cached_decoder_for_InvokeIdOrNull = $._decode_inextensible_choice<InvokeIdOrNull>({
    "UNIVERSAL 2": [ "present", _decode_InvokeId ],
    "UNIVERSAL 5": [ "absent", $._decodeNull ]
}); }
    return _cached_decoder_for_InvokeIdOrNull(el);
}

let _cached_encoder_for_InvokeIdOrNull: $.ASN1Encoder<InvokeIdOrNull> | null = null;

/**
 * @summary Encodes a(n) InvokeIdOrNull into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeIdOrNull, encoded as an ASN.1 Element.
 */
export
function _encode_InvokeIdOrNull (value: InvokeIdOrNull, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvokeIdOrNull) { _cached_encoder_for_InvokeIdOrNull = $._encode_choice<InvokeIdOrNull>({
    "present": _encode_InvokeId,
    "absent": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_InvokeIdOrNull(value, elGetter);
}


/* eslint-enable */
