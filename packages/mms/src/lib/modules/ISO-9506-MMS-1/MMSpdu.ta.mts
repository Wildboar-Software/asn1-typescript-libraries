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
import { Confirmed_RequestPDU, _decode_Confirmed_RequestPDU, _encode_Confirmed_RequestPDU } from "../ISO-9506-MMS-1/Confirmed-RequestPDU.ta.mjs";
import { Confirmed_ResponsePDU, _decode_Confirmed_ResponsePDU, _encode_Confirmed_ResponsePDU } from "../ISO-9506-MMS-1/Confirmed-ResponsePDU.ta.mjs";
import { Confirmed_ErrorPDU, _decode_Confirmed_ErrorPDU, _encode_Confirmed_ErrorPDU } from "../ISO-9506-MMS-1/Confirmed-ErrorPDU.ta.mjs";
import { Unconfirmed_PDU, _decode_Unconfirmed_PDU, _encode_Unconfirmed_PDU } from "../ISO-9506-MMS-1/Unconfirmed-PDU.ta.mjs";
import { RejectPDU, _decode_RejectPDU, _encode_RejectPDU } from "../ISO-9506-MMS-1/RejectPDU.ta.mjs";
import { Cancel_RequestPDU, _decode_Cancel_RequestPDU, _encode_Cancel_RequestPDU } from "../ISO-9506-MMS-1/Cancel-RequestPDU.ta.mjs";
import { Cancel_ResponsePDU, _decode_Cancel_ResponsePDU, _encode_Cancel_ResponsePDU } from "../ISO-9506-MMS-1/Cancel-ResponsePDU.ta.mjs";
import { Cancel_ErrorPDU, _decode_Cancel_ErrorPDU, _encode_Cancel_ErrorPDU } from "../ISO-9506-MMS-1/Cancel-ErrorPDU.ta.mjs";
import { Initiate_RequestPDU, _decode_Initiate_RequestPDU, _encode_Initiate_RequestPDU } from "../ISO-9506-MMS-1/Initiate-RequestPDU.ta.mjs";
import { Initiate_ResponsePDU, _decode_Initiate_ResponsePDU, _encode_Initiate_ResponsePDU } from "../ISO-9506-MMS-1/Initiate-ResponsePDU.ta.mjs";
import { Initiate_ErrorPDU, _decode_Initiate_ErrorPDU, _encode_Initiate_ErrorPDU } from "../ISO-9506-MMS-1/Initiate-ErrorPDU.ta.mjs";
import { Conclude_RequestPDU, _decode_Conclude_RequestPDU, _encode_Conclude_RequestPDU } from "../ISO-9506-MMS-1/Conclude-RequestPDU.ta.mjs";
import { Conclude_ResponsePDU, _decode_Conclude_ResponsePDU, _encode_Conclude_ResponsePDU } from "../ISO-9506-MMS-1/Conclude-ResponsePDU.ta.mjs";
import { Conclude_ErrorPDU, _decode_Conclude_ErrorPDU, _encode_Conclude_ErrorPDU } from "../ISO-9506-MMS-1/Conclude-ErrorPDU.ta.mjs";


/**
 * @summary MMSpdu
 * @description
 *
 * Outer CHOICE of the MMS abstract syntax: fourteen PDU kinds tagged [0]–[13]
 * for confirmed request/response/error, unconfirmed, reject, cancel, initiate,
 * and conclude (ISO 9506-2:2003 §7). NULL alternatives for unconfirmed and
 * cancel appear when those services are not supported. Abort has no MMS PDU; it
 * maps to M-U-ABORT (ISO 9506-1:2003 §8.4; ISO 9506-2:2003 §8.4). Initiate
 * must succeed before other MMS PDUs on the association (ISO 9506-1:2003 §8.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSpdu ::= CHOICE {
 *     confirmed-RequestPDU       [0] IMPLICIT Confirmed-RequestPDU,
 *     confirmed-ResponsePDU      [1] IMPLICIT Confirmed-ResponsePDU,
 *     confirmed-ErrorPDU         [2] IMPLICIT Confirmed-ErrorPDU,
 *     unconfirmed-PDU            [3] IMPLICIT Unconfirmed-PDU,
 *     unconfirmed-PDU            [3] IMPLICIT NULL,
 *     rejectPDU                  [4] IMPLICIT RejectPDU,
 *     cancel-RequestPDU          [5] IMPLICIT Cancel-RequestPDU,
 *     cancel-ResponsePDU         [6] IMPLICIT Cancel-ResponsePDU,
 *     cancel-ErrorPDU            [7] IMPLICIT Cancel-ErrorPDU,
 *     cancel-RequestPDU          [5] IMPLICIT NULL,
 *     cancel-ResponsePDU         [6] IMPLICIT NULL,
 *     cancel-ErrorPDU            [7] IMPLICIT NULL,
 *     initiate-RequestPDU        [8] IMPLICIT Initiate-RequestPDU,
 *     initiate-ResponsePDU       [9] IMPLICIT Initiate-ResponsePDU,
 *     initiate-ErrorPDU          [10] IMPLICIT Initiate-ErrorPDU,
 *     conclude-RequestPDU        [11] IMPLICIT Conclude-RequestPDU,
 *     conclude-ResponsePDU       [12] IMPLICIT Conclude-ResponsePDU,
 *     conclude-ErrorPDU          [13] IMPLICIT Conclude-ErrorPDU
 * }
 * ```
 */
export
type MMSpdu =
    { confirmed_RequestPDU: Confirmed_RequestPDU } /* CHOICE_ALT_ROOT */
    | { confirmed_ResponsePDU: Confirmed_ResponsePDU } /* CHOICE_ALT_ROOT */
    | { confirmed_ErrorPDU: Confirmed_ErrorPDU } /* CHOICE_ALT_ROOT */
    | { unconfirmed_PDU: Unconfirmed_PDU } /* CHOICE_ALT_ROOT */
    | { unconfirmed_PDU: NULL } /* CHOICE_ALT_ROOT */
    | { rejectPDU: RejectPDU } /* CHOICE_ALT_ROOT */
    | { cancel_RequestPDU: Cancel_RequestPDU } /* CHOICE_ALT_ROOT */
    | { cancel_RequestPDU: NULL } /* CHOICE_ALT_ROOT */
    | { cancel_ResponsePDU: Cancel_ResponsePDU } /* CHOICE_ALT_ROOT */
    | { cancel_ResponsePDU: NULL } /* CHOICE_ALT_ROOT */
    | { cancel_ErrorPDU: Cancel_ErrorPDU } /* CHOICE_ALT_ROOT */
    | { cancel_ErrorPDU: NULL } /* CHOICE_ALT_ROOT */
    | { initiate_RequestPDU: Initiate_RequestPDU } /* CHOICE_ALT_ROOT */
    | { initiate_ResponsePDU: Initiate_ResponsePDU } /* CHOICE_ALT_ROOT */
    | { initiate_ErrorPDU: Initiate_ErrorPDU } /* CHOICE_ALT_ROOT */
    | { conclude_RequestPDU: Conclude_RequestPDU } /* CHOICE_ALT_ROOT */
    | { conclude_ResponsePDU: Conclude_ResponsePDU } /* CHOICE_ALT_ROOT */
    | { conclude_ErrorPDU: Conclude_ErrorPDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MMSpdu: $.ASN1Decoder<MMSpdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSpdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSpdu (el: _Element): MMSpdu {
    if (!_cached_decoder_for_MMSpdu) { _cached_decoder_for_MMSpdu = $._decode_inextensible_choice<MMSpdu>({
    "CONTEXT 0": [ "confirmed_RequestPDU", $._decode_implicit<Confirmed_RequestPDU>(() => _decode_Confirmed_RequestPDU) ],
    "CONTEXT 1": [ "confirmed_ResponsePDU", $._decode_implicit<Confirmed_ResponsePDU>(() => _decode_Confirmed_ResponsePDU) ],
    "CONTEXT 2": [ "confirmed_ErrorPDU", $._decode_implicit<Confirmed_ErrorPDU>(() => _decode_Confirmed_ErrorPDU) ],
    "CONTEXT 3": [ "unconfirmed_PDU", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Unconfirmed_PDU>(() => _decode_Unconfirmed_PDU)(el)) ],
    "CONTEXT 4": [ "rejectPDU", $._decode_implicit<RejectPDU>(() => _decode_RejectPDU) ],
    "CONTEXT 5": [ "cancel_RequestPDU", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Cancel_RequestPDU>(() => _decode_Cancel_RequestPDU)(el)) ],
    "CONTEXT 6": [ "cancel_ResponsePDU", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Cancel_ResponsePDU>(() => _decode_Cancel_ResponsePDU)(el)) ],
    "CONTEXT 7": [ "cancel_ErrorPDU", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<Cancel_ErrorPDU>(() => _decode_Cancel_ErrorPDU)(el)) ],
    "CONTEXT 8": [ "initiate_RequestPDU", $._decode_implicit<Initiate_RequestPDU>(() => _decode_Initiate_RequestPDU) ],
    "CONTEXT 9": [ "initiate_ResponsePDU", $._decode_implicit<Initiate_ResponsePDU>(() => _decode_Initiate_ResponsePDU) ],
    "CONTEXT 10": [ "initiate_ErrorPDU", $._decode_implicit<Initiate_ErrorPDU>(() => _decode_Initiate_ErrorPDU) ],
    "CONTEXT 11": [ "conclude_RequestPDU", $._decode_implicit<Conclude_RequestPDU>(() => _decode_Conclude_RequestPDU) ],
    "CONTEXT 12": [ "conclude_ResponsePDU", $._decode_implicit<Conclude_ResponsePDU>(() => _decode_Conclude_ResponsePDU) ],
    "CONTEXT 13": [ "conclude_ErrorPDU", $._decode_implicit<Conclude_ErrorPDU>(() => _decode_Conclude_ErrorPDU) ]
}); }
    return _cached_decoder_for_MMSpdu(el);
}

let _cached_encoder_for_MMSpdu: $.ASN1Encoder<MMSpdu> | null = null;

/**
 * @summary Encodes a(n) MMSpdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSpdu, encoded as an ASN.1 Element.
 */
export
function _encode_MMSpdu (value: MMSpdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSpdu) { _cached_encoder_for_MMSpdu = $._encode_choice<MMSpdu>({
    "confirmed_RequestPDU": $._encode_implicit(_TagClass.context, 0, () => _encode_Confirmed_RequestPDU, $.BER),
    "confirmed_ResponsePDU": $._encode_implicit(_TagClass.context, 1, () => _encode_Confirmed_ResponsePDU, $.BER),
    "confirmed_ErrorPDU": $._encode_implicit(_TagClass.context, 2, () => _encode_Confirmed_ErrorPDU, $.BER),
    "unconfirmed_PDU": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 3, () => _encode_Unconfirmed_PDU, $.BER)(value, elGetter)),
    "rejectPDU": $._encode_implicit(_TagClass.context, 4, () => _encode_RejectPDU, $.BER),
    "cancel_RequestPDU": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 5, () => _encode_Cancel_RequestPDU, $.BER)(value, elGetter)),
    "cancel_ResponsePDU": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 6, () => _encode_Cancel_ResponsePDU, $.BER)(value, elGetter)),
    "cancel_ErrorPDU": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 7, () => _encode_Cancel_ErrorPDU, $.BER)(value, elGetter)),
    "initiate_RequestPDU": $._encode_implicit(_TagClass.context, 8, () => _encode_Initiate_RequestPDU, $.BER),
    "initiate_ResponsePDU": $._encode_implicit(_TagClass.context, 9, () => _encode_Initiate_ResponsePDU, $.BER),
    "initiate_ErrorPDU": $._encode_implicit(_TagClass.context, 10, () => _encode_Initiate_ErrorPDU, $.BER),
    "conclude_RequestPDU": $._encode_implicit(_TagClass.context, 11, () => _encode_Conclude_RequestPDU, $.BER),
    "conclude_ResponsePDU": $._encode_implicit(_TagClass.context, 12, () => _encode_Conclude_ResponsePDU, $.BER),
    "conclude_ErrorPDU": $._encode_implicit(_TagClass.context, 13, () => _encode_Conclude_ErrorPDU, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMSpdu(value, elGetter);
}


/* eslint-enable */
