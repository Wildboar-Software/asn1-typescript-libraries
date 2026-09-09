import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_tNoAnswerSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 callForwarded			[50] NULL				OPTIONAL,
 forwardingDestinationNumber		[52] CalledPartyNumber {bound}		OPTIONAL,
 ...
 }
 * ```
 *
 */
export class EventSpecificInformationBCSM_tNoAnswerSpecificInfo {
    constructor (
        readonly callForwarded: OPTIONAL<NULL>,
        readonly forwardingDestinationNumber: OPTIONAL<CalledPartyNumber>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_tNoAnswerSpecificInfo)]: (EventSpecificInformationBCSM_tNoAnswerSpecificInfo)[_K] }): EventSpecificInformationBCSM_tNoAnswerSpecificInfo {
        return new EventSpecificInformationBCSM_tNoAnswerSpecificInfo(_o.callForwarded, _o.forwardingDestinationNumber, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("callForwarded", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("forwardingDestinationNumber", true, $.hasTag(_TagClass.context, 52))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_tNoAnswerSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo (el: _Element): EventSpecificInformationBCSM_tNoAnswerSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_tNoAnswerSpecificInfo {
    let callForwarded: OPTIONAL<NULL>;
    let forwardingDestinationNumber: OPTIONAL<CalledPartyNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callForwarded": (_el: _Element): void => { callForwarded = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "forwardingDestinationNumber": (_el: _Element): void => { forwardingDestinationNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_tNoAnswerSpecificInfo(
        callForwarded,
        forwardingDestinationNumber,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_tNoAnswerSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_tNoAnswerSpecificInfo (value: EventSpecificInformationBCSM_tNoAnswerSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_tNoAnswerSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo = function (value: EventSpecificInformationBCSM_tNoAnswerSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callForwarded === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => $._encodeNull, $.BER)(value.callForwarded, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingDestinationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => _encode_CalledPartyNumber, $.BER)(value.forwardingDestinationNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_tNoAnswerSpecificInfo(value, elGetter);
}
