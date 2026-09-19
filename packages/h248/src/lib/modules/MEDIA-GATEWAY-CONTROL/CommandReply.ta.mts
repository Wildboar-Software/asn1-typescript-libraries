/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AmmsReply, _decode_AmmsReply, _encode_AmmsReply } from "../MEDIA-GATEWAY-CONTROL/AmmsReply.ta.mjs";
// export { AmmsReply, _decode_AmmsReply, _encode_AmmsReply } from "../MEDIA-GATEWAY-CONTROL/AmmsReply.ta.mjs";
import { AuditReply, _decode_AuditReply, _encode_AuditReply } from "../MEDIA-GATEWAY-CONTROL/AuditReply.ta.mjs";
// export { AuditReply, _decode_AuditReply, _encode_AuditReply } from "../MEDIA-GATEWAY-CONTROL/AuditReply.ta.mjs";
import { NotifyReply, _decode_NotifyReply, _encode_NotifyReply } from "../MEDIA-GATEWAY-CONTROL/NotifyReply.ta.mjs";
// export { NotifyReply, _decode_NotifyReply, _encode_NotifyReply } from "../MEDIA-GATEWAY-CONTROL/NotifyReply.ta.mjs";
import { ServiceChangeReply, _decode_ServiceChangeReply, _encode_ServiceChangeReply } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeReply.ta.mjs";
// export { ServiceChangeReply, _decode_ServiceChangeReply, _encode_ServiceChangeReply } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeReply.ta.mjs";


/**
 * @summary CommandReply
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommandReply  ::=  CHOICE
 *     {
 *         addReply            [0] AmmsReply,
 *         moveReply            [1] AmmsReply,
 *         modReply            [2] AmmsReply,
 *         subtractReply        [3] AmmsReply,
 *         -- Add, Move, Modify, Subtract replies have the same parameters
 *         auditCapReply        [4] AuditReply,
 *         auditValueReply        [5] AuditReply,
 *         notifyReply            [6] NotifyReply,
 *         serviceChangeReply  [7] ServiceChangeReply,
 *         ...
 *     }
 * ```
 */
export
type CommandReply =
    { addReply: AmmsReply } /* CHOICE_ALT_ROOT */
    | { moveReply: AmmsReply } /* CHOICE_ALT_ROOT */
    | { modReply: AmmsReply } /* CHOICE_ALT_ROOT */
    | { subtractReply: AmmsReply } /* CHOICE_ALT_ROOT */
    | { auditCapReply: AuditReply } /* CHOICE_ALT_ROOT */
    | { auditValueReply: AuditReply } /* CHOICE_ALT_ROOT */
    | { notifyReply: NotifyReply } /* CHOICE_ALT_ROOT */
    | { serviceChangeReply: ServiceChangeReply } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CommandReply: $.ASN1Decoder<CommandReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommandReply
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommandReply (el: _Element): CommandReply {
    if (!_cached_decoder_for_CommandReply) { _cached_decoder_for_CommandReply = $._decode_extensible_choice<CommandReply>({
    "CONTEXT 0": [ "addReply", $._decode_implicit<AmmsReply>(() => _decode_AmmsReply) ],
    "CONTEXT 1": [ "moveReply", $._decode_implicit<AmmsReply>(() => _decode_AmmsReply) ],
    "CONTEXT 2": [ "modReply", $._decode_implicit<AmmsReply>(() => _decode_AmmsReply) ],
    "CONTEXT 3": [ "subtractReply", $._decode_implicit<AmmsReply>(() => _decode_AmmsReply) ],
    "CONTEXT 4": [ "auditCapReply", $._decode_explicit<AuditReply>(() => _decode_AuditReply) ],
    "CONTEXT 5": [ "auditValueReply", $._decode_explicit<AuditReply>(() => _decode_AuditReply) ],
    "CONTEXT 6": [ "notifyReply", $._decode_implicit<NotifyReply>(() => _decode_NotifyReply) ],
    "CONTEXT 7": [ "serviceChangeReply", $._decode_implicit<ServiceChangeReply>(() => _decode_ServiceChangeReply) ]
}); }
    return _cached_decoder_for_CommandReply(el);
}

let _cached_encoder_for_CommandReply: $.ASN1Encoder<CommandReply> | null = null;

/**
 * @summary Encodes a(n) CommandReply into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommandReply, encoded as an ASN.1 Element.
 */
export
function _encode_CommandReply (value: CommandReply, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommandReply) { _cached_encoder_for_CommandReply = $._encode_choice<CommandReply>({
    "addReply": $._encode_implicit(_TagClass.context, 0, () => _encode_AmmsReply, $.BER),
    "moveReply": $._encode_implicit(_TagClass.context, 1, () => _encode_AmmsReply, $.BER),
    "modReply": $._encode_implicit(_TagClass.context, 2, () => _encode_AmmsReply, $.BER),
    "subtractReply": $._encode_implicit(_TagClass.context, 3, () => _encode_AmmsReply, $.BER),
    "auditCapReply": $._encode_explicit(_TagClass.context, 4, () => _encode_AuditReply, $.BER),
    "auditValueReply": $._encode_explicit(_TagClass.context, 5, () => _encode_AuditReply, $.BER),
    "notifyReply": $._encode_implicit(_TagClass.context, 6, () => _encode_NotifyReply, $.BER),
    "serviceChangeReply": $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceChangeReply, $.BER),
}, $.BER); }
    return _cached_encoder_for_CommandReply(value, elGetter);
}


/* eslint-enable */
