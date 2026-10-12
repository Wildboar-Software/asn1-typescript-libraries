/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type NotificationEvent, _decode_NotificationEvent, _encode_NotificationEvent } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary IpaEuiccDataRequest_searchCriteriaNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataRequest-searchCriteriaNotification ::= CHOICE {
 *     seqNumber [0] INTEGER,
 *     profileManagementOperation [1] NotificationEvent
 * }
 * ```
 */
export
type IpaEuiccDataRequest_searchCriteriaNotification =
    { seqNumber: INTEGER } /* CHOICE_ALT_ROOT */
    | { profileManagementOperation: NotificationEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification: $.ASN1Decoder<IpaEuiccDataRequest_searchCriteriaNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataRequest_searchCriteriaNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataRequest_searchCriteriaNotification (el: _Element): IpaEuiccDataRequest_searchCriteriaNotification {
    if (!_cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification) { _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification = $._decode_inextensible_choice<IpaEuiccDataRequest_searchCriteriaNotification>({
    "CONTEXT 0": [ "seqNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "profileManagementOperation", $._decode_implicit<NotificationEvent>(() => _decode_NotificationEvent) ]
}); }
    return _cached_decoder_for_IpaEuiccDataRequest_searchCriteriaNotification(el);
}

let _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification: $.ASN1Encoder<IpaEuiccDataRequest_searchCriteriaNotification> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataRequest_searchCriteriaNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataRequest_searchCriteriaNotification, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataRequest_searchCriteriaNotification (value: IpaEuiccDataRequest_searchCriteriaNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification) { _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification = $._encode_choice<IpaEuiccDataRequest_searchCriteriaNotification>({
    "seqNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "profileManagementOperation": $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_IpaEuiccDataRequest_searchCriteriaNotification(value, elGetter);
}


/* eslint-enable */
