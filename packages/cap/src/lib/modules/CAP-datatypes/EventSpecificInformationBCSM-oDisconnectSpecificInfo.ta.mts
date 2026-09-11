import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_oDisconnectSpecificInfo
 * @description
 *
 * EventReportBCSM information for O_Disconnect.
 * (3GPP TS 29.078 V19.0.0 clause 11.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationBCSM-oDisconnectSpecificInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  releaseCause			[0] Cause {bound}			OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    constructor (
        /**
         * @summary `releaseCause`.
         * @description
         *
         * Present if available. (3GPP TS 29.078 V19.0.0 clause 11.18).
         *
         * @public
         * @readonly
         */
        readonly releaseCause: OPTIONAL<Cause>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oDisconnectSpecificInfo)]: (EventSpecificInformationBCSM_oDisconnectSpecificInfo)[_K] }): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
        return new EventSpecificInformationBCSM_oDisconnectSpecificInfo(_o.releaseCause, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oDisconnectSpecificInfo (el: _Element): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oDisconnectSpecificInfo {
    let releaseCause: OPTIONAL<Cause>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oDisconnectSpecificInfo(
        releaseCause,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oDisconnectSpecificInfo (value: EventSpecificInformationBCSM_oDisconnectSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oDisconnectSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo = function (value: EventSpecificInformationBCSM_oDisconnectSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.releaseCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.releaseCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oDisconnectSpecificInfo(value, elGetter);
}
