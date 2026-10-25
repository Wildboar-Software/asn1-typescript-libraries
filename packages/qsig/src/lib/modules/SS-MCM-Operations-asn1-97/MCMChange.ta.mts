/* eslint-disable */
import {
    type NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCMServiceInfo, _decode_MCMServiceInfo, _encode_MCMServiceInfo } from "../SS-MCM-Operations-asn1-97/MCMServiceInfo.ta.mjs";
import { MessageType, _decode_MessageType, _encode_MessageType } from "../SS-MCM-Operations-asn1-97/MessageType.ta.mjs";

/**
 * @summary MCMChange
 * @description
 *
 * The change requested by `mCMService` (ECMA-347
 * §6.5.2.1.1, §6.5.1.1.1).
 *
 * `activateMCM` starts monitoring of new messages, retrieved
 * messages, or both, for one or more Message Types, each
 * with an optional compressed or complete mode. The Message
 * Centre PINX then runs the update procedure.
 * `deactivateMCM` stops monitoring the listed Message Types
 * and does not start an update. `setToDefaultValues`
 * restores the service-provider default and starts an
 * update for the Message Types that changed. The default
 * itself is outside this Standard.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMChange  ::=  CHOICE {
 *     activateMCM [1] IMPLICIT SEQUENCE OF MCMServiceInfo,
 *     deactivateMCM [2] IMPLICIT SEQUENCE OF MessageType,
 *     setToDefaultValues NULL
 * }
 * ```
 */
export
type MCMChange =
    { activateMCM: MCMServiceInfo[] } /* CHOICE_ALT_ROOT */
    | { deactivateMCM: MessageType[] } /* CHOICE_ALT_ROOT */
    | { setToDefaultValues: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MCMChange: $.ASN1Decoder<MCMChange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMChange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMChange (el: _Element): MCMChange {
    if (!_cached_decoder_for_MCMChange) { _cached_decoder_for_MCMChange = $._decode_inextensible_choice<MCMChange>({
    "CONTEXT 1": [ "activateMCM", $._decode_implicit<MCMServiceInfo[]>(() => $._decodeSequenceOf<MCMServiceInfo>(() => _decode_MCMServiceInfo)) ],
    "CONTEXT 2": [ "deactivateMCM", $._decode_implicit<MessageType[]>(() => $._decodeSequenceOf<MessageType>(() => _decode_MessageType)) ],
    "UNIVERSAL 5": [ "setToDefaultValues", $._decodeNull ]
}); }
    return _cached_decoder_for_MCMChange(el);
}

let _cached_encoder_for_MCMChange: $.ASN1Encoder<MCMChange> | null = null;

/**
 * @summary Encodes a(n) MCMChange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMChange, encoded as an ASN.1 Element.
 */
export
function _encode_MCMChange (value: MCMChange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMChange) { _cached_encoder_for_MCMChange = $._encode_choice<MCMChange>({
    "activateMCM": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MCMServiceInfo>(() => _encode_MCMServiceInfo, $.BER), $.BER),
    "deactivateMCM": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<MessageType>(() => _encode_MessageType, $.BER), $.BER),
    "setToDefaultValues": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_MCMChange(value, elGetter);
}

/* eslint-enable */
