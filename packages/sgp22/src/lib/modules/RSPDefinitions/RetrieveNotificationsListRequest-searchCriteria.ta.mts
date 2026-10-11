/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NotificationEvent, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";


/**
 * @summary RetrieveNotificationsListRequest_searchCriteria
 * @description
 * 
 * Filter for ES10b.RetrieveNotificationsList: one sequence number, or an event
 * bit-mask. SGP.22 v3.1 §5.7.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RetrieveNotificationsListRequest-searchCriteria ::= CHOICE {
 *     seqNumber [0] INTEGER,
 *     profileManagementOperation [1] NotificationEvent
 * }
 * ```
 */
export
type RetrieveNotificationsListRequest_searchCriteria =
    { seqNumber: INTEGER } /* CHOICE_ALT_ROOT */
    | { profileManagementOperation: NotificationEvent } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RetrieveNotificationsListRequest_searchCriteria: $.ASN1Decoder<RetrieveNotificationsListRequest_searchCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RetrieveNotificationsListRequest_searchCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RetrieveNotificationsListRequest_searchCriteria (el: _Element): RetrieveNotificationsListRequest_searchCriteria {
    if (!_cached_decoder_for_RetrieveNotificationsListRequest_searchCriteria) { _cached_decoder_for_RetrieveNotificationsListRequest_searchCriteria = $._decode_inextensible_choice<RetrieveNotificationsListRequest_searchCriteria>({
    "CONTEXT 0": [ "seqNumber", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "profileManagementOperation", $._decode_implicit<NotificationEvent>(() => _decode_NotificationEvent) ]
}); }
    return _cached_decoder_for_RetrieveNotificationsListRequest_searchCriteria(el);
}

let _cached_encoder_for_RetrieveNotificationsListRequest_searchCriteria: $.ASN1Encoder<RetrieveNotificationsListRequest_searchCriteria> | null = null;

/**
 * @summary Encodes a(n) RetrieveNotificationsListRequest_searchCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrieveNotificationsListRequest_searchCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_RetrieveNotificationsListRequest_searchCriteria (value: RetrieveNotificationsListRequest_searchCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RetrieveNotificationsListRequest_searchCriteria) { _cached_encoder_for_RetrieveNotificationsListRequest_searchCriteria = $._encode_choice<RetrieveNotificationsListRequest_searchCriteria>({
    "seqNumber": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "profileManagementOperation": $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationEvent, $.BER),
}, $.BER); }
    return _cached_encoder_for_RetrieveNotificationsListRequest_searchCriteria(value, elGetter);
}


/* eslint-enable */
