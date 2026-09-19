/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MIMEPartIdentifier, _decode_MIMEPartIdentifier, _encode_MIMEPartIdentifier } from "../TS33128Payloads/MIMEPartIdentifier.ta.mjs";
// export { MIMEPartIdentifier, _decode_MIMEPartIdentifier, _encode_MIMEPartIdentifier } from "../TS33128Payloads/MIMEPartIdentifier.ta.mjs";


/**
 * @summary MIMEBody
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIMEBody  ::=  CHOICE
 * {
 *     fullBody [1] NULL,
 *     bodyPart [2] MIMEPartIdentifier
 * }
 * ```
 */
export
type MIMEBody =
    { fullBody: NULL } /* CHOICE_ALT_ROOT */
    | { bodyPart: MIMEPartIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MIMEBody: $.ASN1Decoder<MIMEBody> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIMEBody
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIMEBody (el: _Element): MIMEBody {
    if (!_cached_decoder_for_MIMEBody) { _cached_decoder_for_MIMEBody = $._decode_inextensible_choice<MIMEBody>({
    "CONTEXT 1": [ "fullBody", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "bodyPart", $._decode_explicit<MIMEPartIdentifier>(() => _decode_MIMEPartIdentifier) ]
}); }
    return _cached_decoder_for_MIMEBody(el);
}

let _cached_encoder_for_MIMEBody: $.ASN1Encoder<MIMEBody> | null = null;

/**
 * @summary Encodes a(n) MIMEBody into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIMEBody, encoded as an ASN.1 Element.
 */
export
function _encode_MIMEBody (value: MIMEBody, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIMEBody) { _cached_encoder_for_MIMEBody = $._encode_choice<MIMEBody>({
    "fullBody": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "bodyPart": $._encode_explicit(_TagClass.context, 2, () => _encode_MIMEPartIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_MIMEBody(value, elGetter);
}


/* eslint-enable */
