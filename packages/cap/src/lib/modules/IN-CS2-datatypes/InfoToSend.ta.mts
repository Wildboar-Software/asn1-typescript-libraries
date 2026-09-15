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
import { MessageID, _decode_MessageID, _encode_MessageID } from "../IN-CS2-datatypes/MessageID.ta.mjs";
// export { MessageID, _decode_MessageID, _encode_MessageID } from "../IN-CS2-datatypes/MessageID.ta.mjs";
import { ToneId, _decode_ToneId, _encode_ToneId } from "../IN-CS2-datatypes/ToneId.ta.mjs";
// export { ToneId, _decode_ToneId, _encode_ToneId } from "../IN-CS2-datatypes/ToneId.ta.mjs";
import { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS2-datatypes/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS2-datatypes/DisplayInformation.ta.mjs";


/**
 * @summary InfoToSend
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoToSend{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   messageID           [0]  MessageID{bound},
 *   toneId              [1]  ToneId,
 *   displayInformation  [2]  DisplayInformation{bound}
 * }
 * ```
 */
export
type InfoToSend =
    { messageID: MessageID } /* CHOICE_ALT_ROOT */
    | { toneId: ToneId } /* CHOICE_ALT_ROOT */
    | { displayInformation: DisplayInformation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InfoToSend: $.ASN1Decoder<InfoToSend> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoToSend
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoToSend (el: _Element): InfoToSend {
    if (!_cached_decoder_for_InfoToSend) { _cached_decoder_for_InfoToSend = $._decode_inextensible_choice<InfoToSend>({
    "CONTEXT 0": [ "messageID", $._decode_explicit<MessageID>(() => _decode_MessageID) ],
    "CONTEXT 1": [ "toneId", $._decode_explicit<ToneId>(() => _decode_ToneId) ],
    "CONTEXT 2": [ "displayInformation", $._decode_implicit<DisplayInformation>(() => _decode_DisplayInformation) ]
}); }
    return _cached_decoder_for_InfoToSend(el);
}

let _cached_encoder_for_InfoToSend: $.ASN1Encoder<InfoToSend> | null = null;

/**
 * @summary Encodes a(n) InfoToSend into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoToSend, encoded as an ASN.1 Element.
 */
export
function _encode_InfoToSend (value: InfoToSend, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoToSend) { _cached_encoder_for_InfoToSend = $._encode_choice<InfoToSend>({
    "messageID": $._encode_explicit(_TagClass.context, 0, () => _encode_MessageID, $.BER),
    "toneId": $._encode_explicit(_TagClass.context, 1, () => _encode_ToneId, $.BER),
    "displayInformation": $._encode_implicit(_TagClass.context, 2, () => _encode_DisplayInformation, $.BER),
}, $.BER); }
    return _cached_encoder_for_InfoToSend(value, elGetter);
}


/* eslint-enable */
