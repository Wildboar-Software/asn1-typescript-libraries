import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";

/**
 * @summary DpSpecificInfoAlt_collectedInfoSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 calledPartyNumber			[0]	CalledPartyNumber			OPTIONAL,
 ...
 }
 * ```
 *
 */
export class DpSpecificInfoAlt_collectedInfoSpecificInfo {
    constructor (
        readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (DpSpecificInfoAlt_collectedInfoSpecificInfo)]: (DpSpecificInfoAlt_collectedInfoSpecificInfo)[_K] }): DpSpecificInfoAlt_collectedInfoSpecificInfo {
        return new DpSpecificInfoAlt_collectedInfoSpecificInfo(_o.calledPartyNumber, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_DpSpecificInfoAlt_collectedInfoSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_DpSpecificInfoAlt_collectedInfoSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_DpSpecificInfoAlt_collectedInfoSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo: $.ASN1Decoder<DpSpecificInfoAlt_collectedInfoSpecificInfo> | null = null;
export function _decode_DpSpecificInfoAlt_collectedInfoSpecificInfo (el: _Element): DpSpecificInfoAlt_collectedInfoSpecificInfo {
    if (!_cached_decoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo) {
        _cached_decoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo = function (el: _Element): DpSpecificInfoAlt_collectedInfoSpecificInfo {
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DpSpecificInfoAlt_collectedInfoSpecificInfo,
        _extension_additions_list_spec_for_DpSpecificInfoAlt_collectedInfoSpecificInfo,
        _root_component_type_list_2_spec_for_DpSpecificInfoAlt_collectedInfoSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DpSpecificInfoAlt_collectedInfoSpecificInfo(
        calledPartyNumber,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo(el);
}

let _cached_encoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo: $.ASN1Encoder<DpSpecificInfoAlt_collectedInfoSpecificInfo> | null = null;
export function _encode_DpSpecificInfoAlt_collectedInfoSpecificInfo (value: DpSpecificInfoAlt_collectedInfoSpecificInfo, elGetter: $.ASN1Encoder<DpSpecificInfoAlt_collectedInfoSpecificInfo>): _Element {
    if (!_cached_encoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo) {
        _cached_encoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo = function (value: DpSpecificInfoAlt_collectedInfoSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.calledPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_DpSpecificInfoAlt_collectedInfoSpecificInfo(value, elGetter);
}
