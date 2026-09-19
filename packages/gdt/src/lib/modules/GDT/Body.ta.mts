/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PacketFwdMessage, _decode_PacketFwdMessage, _encode_PacketFwdMessage } from "../GDT/PacketFwdMessage.ta.mjs";
// export { PacketFwdMessage, _decode_PacketFwdMessage, _encode_PacketFwdMessage } from "../GDT/PacketFwdMessage.ta.mjs";
import { FilterMessage, _decode_FilterMessage, _encode_FilterMessage } from "../GDT/FilterMessage.ta.mjs";
// export { FilterMessage, _decode_FilterMessage, _encode_FilterMessage } from "../GDT/FilterMessage.ta.mjs";
import { DataRetentionMessage, _decode_DataRetentionMessage, _encode_DataRetentionMessage } from "../GDT/DataRetentionMessage.ta.mjs";
// export { DataRetentionMessage, _decode_DataRetentionMessage, _encode_DataRetentionMessage } from "../GDT/DataRetentionMessage.ta.mjs";
import { ConfigMessage, _decode_ConfigMessage, _encode_ConfigMessage } from "../GDT/ConfigMessage.ta.mjs";
// export { ConfigMessage, _decode_ConfigMessage, _encode_ConfigMessage } from "../GDT/ConfigMessage.ta.mjs";
import { StatsMessage, _decode_StatsMessage, _encode_StatsMessage } from "../GDT/StatsMessage.ta.mjs";
// export { StatsMessage, _decode_StatsMessage, _encode_StatsMessage } from "../GDT/StatsMessage.ta.mjs";
import { AuthMessage, _decode_AuthMessage, _encode_AuthMessage } from "../GDT/AuthMessage.ta.mjs";
// export { AuthMessage, _decode_AuthMessage, _encode_AuthMessage } from "../GDT/AuthMessage.ta.mjs";
import { RegistrationMessage, _decode_RegistrationMessage, _encode_RegistrationMessage } from "../GDT/RegistrationMessage.ta.mjs";
// export { RegistrationMessage, _decode_RegistrationMessage, _encode_RegistrationMessage } from "../GDT/RegistrationMessage.ta.mjs";
import { NotifyMessage, _decode_NotifyMessage, _encode_NotifyMessage } from "../GDT/NotifyMessage.ta.mjs";
// export { NotifyMessage, _decode_NotifyMessage, _encode_NotifyMessage } from "../GDT/NotifyMessage.ta.mjs";
import { DataMessage, _decode_DataMessage, _encode_DataMessage } from "../GDT/DataMessage.ta.mjs";
// export { DataMessage, _decode_DataMessage, _encode_DataMessage } from "../GDT/DataMessage.ta.mjs";
import { RoutingMessage, _decode_RoutingMessage, _encode_RoutingMessage } from "../GDT/RoutingMessage.ta.mjs";
// export { RoutingMessage, _decode_RoutingMessage, _encode_RoutingMessage } from "../GDT/RoutingMessage.ta.mjs";
import { ServiceMessage, _decode_ServiceMessage, _encode_ServiceMessage } from "../GDT/ServiceMessage.ta.mjs";
// export { ServiceMessage, _decode_ServiceMessage, _encode_ServiceMessage } from "../GDT/ServiceMessage.ta.mjs";
import { StateMessage, _decode_StateMessage, _encode_StateMessage } from "../GDT/StateMessage.ta.mjs";
// export { StateMessage, _decode_StateMessage, _encode_StateMessage } from "../GDT/StateMessage.ta.mjs";


/**
 * @summary Body
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Body  ::=  CHOICE {
 *     encrypted-data  [1] OCTET STRING,
 *     packet-fwd      [2] PacketFwdMessage,
 *     filter          [3] FilterMessage,
 *     data-retention  [4] DataRetentionMessage,
 *     --general       [5] EXPLICIT GeneralMessage,
 *     conf            [6] ConfigMessage,
 *     stats           [7] StatsMessage,
 *     auth            [8] AuthMessage,
 *     reg             [9] RegistrationMessage,
 *     ntfy            [10] NotifyMessage,
 *     data            [11] DataMessage,
 *     routing         [12] RoutingMessage,
 *     service-msg     [13] ServiceMessage,
 *     state-msg       [14] StateMessage,
 *     ...
 * }
 * ```
 */
export
type Body =
    { encrypted_data: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { packet_fwd: PacketFwdMessage } /* CHOICE_ALT_ROOT */
    | { filter: FilterMessage } /* CHOICE_ALT_ROOT */
    | { data_retention: DataRetentionMessage } /* CHOICE_ALT_ROOT */
    | { conf: ConfigMessage } /* CHOICE_ALT_ROOT */
    | { stats: StatsMessage } /* CHOICE_ALT_ROOT */
    | { auth: AuthMessage } /* CHOICE_ALT_ROOT */
    | { reg: RegistrationMessage } /* CHOICE_ALT_ROOT */
    | { ntfy: NotifyMessage } /* CHOICE_ALT_ROOT */
    | { data: DataMessage } /* CHOICE_ALT_ROOT */
    | { routing: RoutingMessage } /* CHOICE_ALT_ROOT */
    | { service_msg: ServiceMessage } /* CHOICE_ALT_ROOT */
    | { state_msg: StateMessage } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Body: $.ASN1Decoder<Body> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Body
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Body (el: _Element): Body {
    if (!_cached_decoder_for_Body) { _cached_decoder_for_Body = $._decode_extensible_choice<Body>({
    "CONTEXT 1": [ "encrypted_data", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 2": [ "packet_fwd", $._decode_implicit<PacketFwdMessage>(() => _decode_PacketFwdMessage) ],
    "CONTEXT 3": [ "filter", $._decode_implicit<FilterMessage>(() => _decode_FilterMessage) ],
    "CONTEXT 4": [ "data_retention", $._decode_implicit<DataRetentionMessage>(() => _decode_DataRetentionMessage) ],
    "CONTEXT 6": [ "conf", $._decode_implicit<ConfigMessage>(() => _decode_ConfigMessage) ],
    "CONTEXT 7": [ "stats", $._decode_implicit<StatsMessage>(() => _decode_StatsMessage) ],
    "CONTEXT 8": [ "auth", $._decode_implicit<AuthMessage>(() => _decode_AuthMessage) ],
    "CONTEXT 9": [ "reg", $._decode_implicit<RegistrationMessage>(() => _decode_RegistrationMessage) ],
    "CONTEXT 10": [ "ntfy", $._decode_implicit<NotifyMessage>(() => _decode_NotifyMessage) ],
    "CONTEXT 11": [ "data", $._decode_implicit<DataMessage>(() => _decode_DataMessage) ],
    "CONTEXT 12": [ "routing", $._decode_implicit<RoutingMessage>(() => _decode_RoutingMessage) ],
    "CONTEXT 13": [ "service_msg", $._decode_implicit<ServiceMessage>(() => _decode_ServiceMessage) ],
    "CONTEXT 14": [ "state_msg", $._decode_implicit<StateMessage>(() => _decode_StateMessage) ]
}); }
    return _cached_decoder_for_Body(el);
}

let _cached_encoder_for_Body: $.ASN1Encoder<Body> | null = null;

/**
 * @summary Encodes a(n) Body into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Body, encoded as an ASN.1 Element.
 */
export
function _encode_Body (value: Body, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Body) { _cached_encoder_for_Body = $._encode_choice<Body>({
    "encrypted_data": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "packet_fwd": $._encode_implicit(_TagClass.context, 2, () => _encode_PacketFwdMessage, $.BER),
    "filter": $._encode_implicit(_TagClass.context, 3, () => _encode_FilterMessage, $.BER),
    "data_retention": $._encode_implicit(_TagClass.context, 4, () => _encode_DataRetentionMessage, $.BER),
    "conf": $._encode_implicit(_TagClass.context, 6, () => _encode_ConfigMessage, $.BER),
    "stats": $._encode_implicit(_TagClass.context, 7, () => _encode_StatsMessage, $.BER),
    "auth": $._encode_implicit(_TagClass.context, 8, () => _encode_AuthMessage, $.BER),
    "reg": $._encode_implicit(_TagClass.context, 9, () => _encode_RegistrationMessage, $.BER),
    "ntfy": $._encode_implicit(_TagClass.context, 10, () => _encode_NotifyMessage, $.BER),
    "data": $._encode_implicit(_TagClass.context, 11, () => _encode_DataMessage, $.BER),
    "routing": $._encode_implicit(_TagClass.context, 12, () => _encode_RoutingMessage, $.BER),
    "service_msg": $._encode_implicit(_TagClass.context, 13, () => _encode_ServiceMessage, $.BER),
    "state_msg": $._encode_implicit(_TagClass.context, 14, () => _encode_StateMessage, $.BER),
}, $.BER); }
    return _cached_encoder_for_Body(value, elGetter);
}


/* eslint-enable */
