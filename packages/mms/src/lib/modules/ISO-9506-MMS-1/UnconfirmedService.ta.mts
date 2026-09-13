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
import { InformationReport, _decode_InformationReport, _encode_InformationReport } from "../ISO-9506-MMS-1/InformationReport.ta.mjs";
// export { InformationReport, _decode_InformationReport, _encode_InformationReport } from "../ISO-9506-MMS-1/InformationReport.ta.mjs";
import { UnsolicitedStatus, _decode_UnsolicitedStatus, _encode_UnsolicitedStatus } from "../ISO-9506-MMS-1/UnsolicitedStatus.ta.mjs";
// export { UnsolicitedStatus, _decode_UnsolicitedStatus, _encode_UnsolicitedStatus } from "../ISO-9506-MMS-1/UnsolicitedStatus.ta.mjs";
import { EventNotification, _decode_EventNotification, _encode_EventNotification } from "../ISO-9506-MMS-1/EventNotification.ta.mjs";
// export { EventNotification, _decode_EventNotification, _encode_EventNotification } from "../ISO-9506-MMS-1/EventNotification.ta.mjs";


/**
 * @summary UnconfirmedService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnconfirmedService ::= CHOICE {
 *     informationReport   [0] IMPLICIT InformationReport,
 *     informationReport   [0] IMPLICIT NULL,
 *     unsolicitedStatus   [1] IMPLICIT UnsolicitedStatus,
 *     unsolicitedStatus   [1] IMPLICIT NULL,
 *     eventNotification   [2] IMPLICIT EventNotification,
 *     eventNotification   [2] IMPLICIT NULL
 * }
 * ```
 */
export
type UnconfirmedService =
    { informationReport: InformationReport } /* CHOICE_ALT_ROOT */
    | { informationReport: NULL } /* CHOICE_ALT_ROOT */
    | { unsolicitedStatus: UnsolicitedStatus } /* CHOICE_ALT_ROOT */
    | { unsolicitedStatus: NULL } /* CHOICE_ALT_ROOT */
    | { eventNotification: EventNotification } /* CHOICE_ALT_ROOT */
    | { eventNotification: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UnconfirmedService: $.ASN1Decoder<UnconfirmedService> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnconfirmedService
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnconfirmedService (el: _Element): UnconfirmedService {
    if (!_cached_decoder_for_UnconfirmedService) { _cached_decoder_for_UnconfirmedService = $._decode_inextensible_choice<UnconfirmedService>({
    "CONTEXT 0": [ "informationReport", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<InformationReport>(() => _decode_InformationReport)(el)) ],
    "CONTEXT 1": [ "unsolicitedStatus", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<UnsolicitedStatus>(() => _decode_UnsolicitedStatus)(el)) ],
    "CONTEXT 2": [ "eventNotification", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<EventNotification>(() => _decode_EventNotification)(el)) ]
}); }
    return _cached_decoder_for_UnconfirmedService(el);
}

let _cached_encoder_for_UnconfirmedService: $.ASN1Encoder<UnconfirmedService> | null = null;

/**
 * @summary Encodes a(n) UnconfirmedService into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnconfirmedService, encoded as an ASN.1 Element.
 */
export
function _encode_UnconfirmedService (value: UnconfirmedService, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnconfirmedService) { _cached_encoder_for_UnconfirmedService = $._encode_choice<UnconfirmedService>({
    "informationReport": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 0, () => _encode_InformationReport, $.BER)(value, elGetter)),
    "unsolicitedStatus": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 1, () => _encode_UnsolicitedStatus, $.BER)(value, elGetter)),
    "eventNotification": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 2, () => _encode_EventNotification, $.BER)(value, elGetter)),
}, $.BER); }
    return _cached_encoder_for_UnconfirmedService(value, elGetter);
}


/* eslint-enable */
