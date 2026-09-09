import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ChangeOfPositionControlInfo, _decode_ChangeOfPositionControlInfo, _encode_ChangeOfPositionControlInfo } from "./ChangeOfPositionControlInfo.ta.mjs";

/**
 * @summary DpSpecificCriteriaAlt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DpSpecificCriteriaAlt {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 ...,
 changeOfPositionControlInfo		[0]	ChangeOfPositionControlInfo {bound}
 numberOfDigits			[1]	NumberOfDigits				OPTIONAL, 
 interDigitTimeout			[2]	INTEGER (1..127)			OPTIONAL
 }
 * ```
 *
 */
export class DpSpecificCriteriaAlt {
    constructor (
        readonly changeOfPositionControlInfo: OPTIONAL<ChangeOfPositionControlInfo>,
        readonly interDigitTimeout: OPTIONAL<INTEGER>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (DpSpecificCriteriaAlt)]: (DpSpecificCriteriaAlt)[_K] }): DpSpecificCriteriaAlt {
        return new DpSpecificCriteriaAlt(_o.changeOfPositionControlInfo, _o.interDigitTimeout, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_DpSpecificCriteriaAlt: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_DpSpecificCriteriaAlt: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_DpSpecificCriteriaAlt: $.ComponentSpec[] = [
    new $.ComponentSpec("changeOfPositionControlInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("interDigitTimeout", true, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_DpSpecificCriteriaAlt: $.ASN1Decoder<DpSpecificCriteriaAlt> | null = null;
export function _decode_DpSpecificCriteriaAlt (el: _Element): DpSpecificCriteriaAlt {
    if (!_cached_decoder_for_DpSpecificCriteriaAlt) {
        _cached_decoder_for_DpSpecificCriteriaAlt = function (el: _Element): DpSpecificCriteriaAlt {
    let changeOfPositionControlInfo: OPTIONAL<ChangeOfPositionControlInfo>;
    let interDigitTimeout: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "changeOfPositionControlInfo": (_el: _Element): void => { changeOfPositionControlInfo = $._decode_implicit<ChangeOfPositionControlInfo>(() => _decode_ChangeOfPositionControlInfo)(_el); },
        "interDigitTimeout": (_el: _Element): void => { interDigitTimeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DpSpecificCriteriaAlt,
        _extension_additions_list_spec_for_DpSpecificCriteriaAlt,
        _root_component_type_list_2_spec_for_DpSpecificCriteriaAlt,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DpSpecificCriteriaAlt(
        changeOfPositionControlInfo,
        interDigitTimeout,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_DpSpecificCriteriaAlt(el);
}

let _cached_encoder_for_DpSpecificCriteriaAlt: $.ASN1Encoder<DpSpecificCriteriaAlt> | null = null;
export function _encode_DpSpecificCriteriaAlt (value: DpSpecificCriteriaAlt, elGetter: $.ASN1Encoder<DpSpecificCriteriaAlt>): _Element {
    if (!_cached_encoder_for_DpSpecificCriteriaAlt) {
        _cached_encoder_for_DpSpecificCriteriaAlt = function (value: DpSpecificCriteriaAlt): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.changeOfPositionControlInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ChangeOfPositionControlInfo, $.BER)(value.changeOfPositionControlInfo, $.BER)),
            /* IF_ABSENT  */ ((value.interDigitTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.interDigitTimeout, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_DpSpecificCriteriaAlt(value, elGetter);
}
