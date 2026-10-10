/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CauseRadioNetwork, _decode_CauseRadioNetwork, _encode_CauseRadioNetwork } from "../TS33128Payloads/CauseRadioNetwork.ta.mjs";
import { CauseTransport, _decode_CauseTransport, _encode_CauseTransport } from "../TS33128Payloads/CauseTransport.ta.mjs";
import { CauseNas, _decode_CauseNas, _encode_CauseNas } from "../TS33128Payloads/CauseNas.ta.mjs";
import { CauseProtocol, _decode_CauseProtocol, _encode_CauseProtocol } from "../TS33128Payloads/CauseProtocol.ta.mjs";
import { CauseMisc, _decode_CauseMisc, _encode_CauseMisc } from "../TS33128Payloads/CauseMisc.ta.mjs";


/**
 * @summary HandoverCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandoverCause  ::=  CHOICE
 * {
 *     radioNetwork    [1] CauseRadioNetwork,
 *     transport       [2] CauseTransport,
 *     nas             [3] CauseNas,
 *     protocol        [4] CauseProtocol,
 *     misc            [5] CauseMisc
 * }
 * ```
 */
export
type HandoverCause =
    { radioNetwork: CauseRadioNetwork } /* CHOICE_ALT_ROOT */
    | { transport: CauseTransport } /* CHOICE_ALT_ROOT */
    | { nas: CauseNas } /* CHOICE_ALT_ROOT */
    | { protocol: CauseProtocol } /* CHOICE_ALT_ROOT */
    | { misc: CauseMisc } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_HandoverCause: $.ASN1Decoder<HandoverCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandoverCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandoverCause (el: _Element): HandoverCause {
    if (!_cached_decoder_for_HandoverCause) { _cached_decoder_for_HandoverCause = $._decode_inextensible_choice<HandoverCause>({
    "CONTEXT 1": [ "radioNetwork", $._decode_implicit<CauseRadioNetwork>(() => _decode_CauseRadioNetwork) ],
    "CONTEXT 2": [ "transport", $._decode_implicit<CauseTransport>(() => _decode_CauseTransport) ],
    "CONTEXT 3": [ "nas", $._decode_implicit<CauseNas>(() => _decode_CauseNas) ],
    "CONTEXT 4": [ "protocol", $._decode_implicit<CauseProtocol>(() => _decode_CauseProtocol) ],
    "CONTEXT 5": [ "misc", $._decode_implicit<CauseMisc>(() => _decode_CauseMisc) ]
}); }
    return _cached_decoder_for_HandoverCause(el);
}

let _cached_encoder_for_HandoverCause: $.ASN1Encoder<HandoverCause> | null = null;

/**
 * @summary Encodes a(n) HandoverCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandoverCause, encoded as an ASN.1 Element.
 */
export
function _encode_HandoverCause (value: HandoverCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandoverCause) { _cached_encoder_for_HandoverCause = $._encode_choice<HandoverCause>({
    "radioNetwork": $._encode_implicit(_TagClass.context, 1, () => _encode_CauseRadioNetwork, $.BER),
    "transport": $._encode_implicit(_TagClass.context, 2, () => _encode_CauseTransport, $.BER),
    "nas": $._encode_implicit(_TagClass.context, 3, () => _encode_CauseNas, $.BER),
    "protocol": $._encode_implicit(_TagClass.context, 4, () => _encode_CauseProtocol, $.BER),
    "misc": $._encode_implicit(_TagClass.context, 5, () => _encode_CauseMisc, $.BER),
}, $.BER); }
    return _cached_encoder_for_HandoverCause(value, elGetter);
}


/* eslint-enable */
