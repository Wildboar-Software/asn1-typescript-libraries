import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";
import { type ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";

/**
 * @summary BasicGapCriteria_calledAddressAndService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 calledAddressValue			[0] Digits {bound},
 serviceKey				[1] ServiceKey,
 ...
 }
 * ```
 *
 */
export class BasicGapCriteria_calledAddressAndService {
    constructor (
        readonly calledAddressValue: Digits,
        readonly serviceKey: ServiceKey,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (BasicGapCriteria_calledAddressAndService)]: (BasicGapCriteria_calledAddressAndService)[_K] }): BasicGapCriteria_calledAddressAndService {
        return new BasicGapCriteria_calledAddressAndService(_o.calledAddressValue, _o.serviceKey, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_BasicGapCriteria_calledAddressAndService: $.ComponentSpec[] = [
    new $.ComponentSpec("calledAddressValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_BasicGapCriteria_calledAddressAndService: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_BasicGapCriteria_calledAddressAndService: $.ComponentSpec[] = [];

let _cached_decoder_for_BasicGapCriteria_calledAddressAndService: $.ASN1Decoder<BasicGapCriteria_calledAddressAndService> | null = null;
export function _decode_BasicGapCriteria_calledAddressAndService (el: _Element): BasicGapCriteria_calledAddressAndService {
    if (!_cached_decoder_for_BasicGapCriteria_calledAddressAndService) {
        _cached_decoder_for_BasicGapCriteria_calledAddressAndService = function (el: _Element): BasicGapCriteria_calledAddressAndService {
    let calledAddressValue!: Digits;
    let serviceKey!: ServiceKey;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "calledAddressValue": (_el: _Element): void => { calledAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BasicGapCriteria_calledAddressAndService,
        _extension_additions_list_spec_for_BasicGapCriteria_calledAddressAndService,
        _root_component_type_list_2_spec_for_BasicGapCriteria_calledAddressAndService,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BasicGapCriteria_calledAddressAndService(
        calledAddressValue,
        serviceKey,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_BasicGapCriteria_calledAddressAndService(el);
}

let _cached_encoder_for_BasicGapCriteria_calledAddressAndService: $.ASN1Encoder<BasicGapCriteria_calledAddressAndService> | null = null;
export function _encode_BasicGapCriteria_calledAddressAndService (value: BasicGapCriteria_calledAddressAndService, elGetter: $.ASN1Encoder<BasicGapCriteria_calledAddressAndService>): _Element {
    if (!_cached_encoder_for_BasicGapCriteria_calledAddressAndService) {
        _cached_encoder_for_BasicGapCriteria_calledAddressAndService = function (value: BasicGapCriteria_calledAddressAndService): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.calledAddressValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_BasicGapCriteria_calledAddressAndService(value, elGetter);
}
