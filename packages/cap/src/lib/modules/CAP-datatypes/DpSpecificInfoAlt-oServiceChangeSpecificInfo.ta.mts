import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { InitiatorOfServiceChange, _enum_for_InitiatorOfServiceChange, _decode_InitiatorOfServiceChange, _encode_InitiatorOfServiceChange } from "./InitiatorOfServiceChange.ta.mjs";
import { NatureOfServiceChange, _enum_for_NatureOfServiceChange, _decode_NatureOfServiceChange, _encode_NatureOfServiceChange } from "./NatureOfServiceChange.ta.mjs";

/**
 * @summary DpSpecificInfoAlt_oServiceChangeSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 ext-basicServiceCode		[0] Ext-BasicServiceCode		OPTIONAL,
 ...,
 initiatorOfServiceChange		[1] InitiatorOfServiceChange		OPTIONAL,
 natureOfServiceChange		[2] NatureOfServiceChange		OPTIONAL
 
 }
 * ```
 *
 */
export class DpSpecificInfoAlt_oServiceChangeSpecificInfo {
    constructor (
        readonly ext_basicServiceCode: OPTIONAL<Ext_BasicServiceCode>,
        readonly initiatorOfServiceChange: OPTIONAL<InitiatorOfServiceChange>,
        readonly natureOfServiceChange: OPTIONAL<NatureOfServiceChange>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (DpSpecificInfoAlt_oServiceChangeSpecificInfo)]: (DpSpecificInfoAlt_oServiceChangeSpecificInfo)[_K] }): DpSpecificInfoAlt_oServiceChangeSpecificInfo {
        return new DpSpecificInfoAlt_oServiceChangeSpecificInfo(_o.ext_basicServiceCode, _o.initiatorOfServiceChange, _o.natureOfServiceChange, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_initiatorOfServiceChange = _enum_for_InitiatorOfServiceChange;
    public static _enum_for_natureOfServiceChange = _enum_for_NatureOfServiceChange;
}

export const _root_component_type_list_1_spec_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("ext-basicServiceCode", true, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("initiatorOfServiceChange", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("natureOfServiceChange", true, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo: $.ASN1Decoder<DpSpecificInfoAlt_oServiceChangeSpecificInfo> | null = null;
export function _decode_DpSpecificInfoAlt_oServiceChangeSpecificInfo (el: _Element): DpSpecificInfoAlt_oServiceChangeSpecificInfo {
    if (!_cached_decoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo) {
        _cached_decoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo = function (el: _Element): DpSpecificInfoAlt_oServiceChangeSpecificInfo {
    let ext_basicServiceCode: OPTIONAL<Ext_BasicServiceCode>;
    let initiatorOfServiceChange: OPTIONAL<InitiatorOfServiceChange>;
    let natureOfServiceChange: OPTIONAL<NatureOfServiceChange>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ext-basicServiceCode": (_el: _Element): void => { ext_basicServiceCode = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "initiatorOfServiceChange": (_el: _Element): void => { initiatorOfServiceChange = $._decode_implicit<InitiatorOfServiceChange>(() => _decode_InitiatorOfServiceChange)(_el); },
        "natureOfServiceChange": (_el: _Element): void => { natureOfServiceChange = $._decode_implicit<NatureOfServiceChange>(() => _decode_NatureOfServiceChange)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo,
        _extension_additions_list_spec_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo,
        _root_component_type_list_2_spec_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DpSpecificInfoAlt_oServiceChangeSpecificInfo(
        ext_basicServiceCode,
        initiatorOfServiceChange,
        natureOfServiceChange,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo(el);
}

let _cached_encoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo: $.ASN1Encoder<DpSpecificInfoAlt_oServiceChangeSpecificInfo> | null = null;
export function _encode_DpSpecificInfoAlt_oServiceChangeSpecificInfo (value: DpSpecificInfoAlt_oServiceChangeSpecificInfo, elGetter: $.ASN1Encoder<DpSpecificInfoAlt_oServiceChangeSpecificInfo>): _Element {
    if (!_cached_encoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo) {
        _cached_encoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo = function (value: DpSpecificInfoAlt_oServiceChangeSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ext_basicServiceCode === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Ext_BasicServiceCode, $.BER)(value.ext_basicServiceCode, $.BER)),
            /* IF_ABSENT  */ ((value.initiatorOfServiceChange === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InitiatorOfServiceChange, $.BER)(value.initiatorOfServiceChange, $.BER)),
            /* IF_ABSENT  */ ((value.natureOfServiceChange === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NatureOfServiceChange, $.BER)(value.natureOfServiceChange, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_DpSpecificInfoAlt_oServiceChangeSpecificInfo(value, elGetter);
}
