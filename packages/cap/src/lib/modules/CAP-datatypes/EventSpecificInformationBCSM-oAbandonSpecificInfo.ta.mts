import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EventSpecificInformationBCSM_oAbandonSpecificInfo
 * @description
 *
 * EventReportBCSM information for O_Abandon, if available.
 * (3GPP TS 29.078 V19.0.0 clause 11.18).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventSpecificInformationBCSM-oAbandonSpecificInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  routeNotPermitted			[50] NULL				OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_oAbandonSpecificInfo {
    constructor (
        /**
         * @summary `routeNotPermitted`.
         * @description
         *
         * O-Abandon triggered because call set-up shall not be invoked in this
         * MSC due to Basic Optimal Routeing rules.
         * (3GPP TS 29.078 V19.0.0 clause 11.18).
         *
         * @public
         * @readonly
         */
        readonly routeNotPermitted: OPTIONAL<NULL>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oAbandonSpecificInfo)]: (EventSpecificInformationBCSM_oAbandonSpecificInfo)[_K] }): EventSpecificInformationBCSM_oAbandonSpecificInfo {
        return new EventSpecificInformationBCSM_oAbandonSpecificInfo(_o.routeNotPermitted, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAbandonSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("routeNotPermitted", true, $.hasTag(_TagClass.context, 50))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAbandonSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAbandonSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oAbandonSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oAbandonSpecificInfo (el: _Element): EventSpecificInformationBCSM_oAbandonSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oAbandonSpecificInfo {
    let routeNotPermitted: OPTIONAL<NULL>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "routeNotPermitted": (_el: _Element): void => { routeNotPermitted = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAbandonSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAbandonSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAbandonSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oAbandonSpecificInfo(
        routeNotPermitted,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oAbandonSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oAbandonSpecificInfo (value: EventSpecificInformationBCSM_oAbandonSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oAbandonSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo = function (value: EventSpecificInformationBCSM_oAbandonSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.routeNotPermitted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => $._encodeNull, $.BER)(value.routeNotPermitted, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oAbandonSpecificInfo(value, elGetter);
}
