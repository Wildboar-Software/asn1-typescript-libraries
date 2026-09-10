import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Digits, _decode_Digits, _encode_Digits } from "./Digits.ta.mjs";
import { type ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";

/**
 * @summary BasicGapCriteria_callingAddressAndService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BasicGapCriteria-callingAddressAndService {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  callingAddressValue			[0] Digits {bound},
 *  serviceKey				[1] ServiceKey,
 *  ...
 *  }
 * ```
 *
 */
export class BasicGapCriteria_callingAddressAndService {
    constructor (
        readonly callingAddressValue: Digits,
        readonly serviceKey: ServiceKey,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (BasicGapCriteria_callingAddressAndService)]: (BasicGapCriteria_callingAddressAndService)[_K] }): BasicGapCriteria_callingAddressAndService {
        return new BasicGapCriteria_callingAddressAndService(_o.callingAddressValue, _o.serviceKey, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_BasicGapCriteria_callingAddressAndService: $.ComponentSpec[] = [
    new $.ComponentSpec("callingAddressValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_BasicGapCriteria_callingAddressAndService: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_BasicGapCriteria_callingAddressAndService: $.ComponentSpec[] = [];

let _cached_decoder_for_BasicGapCriteria_callingAddressAndService: $.ASN1Decoder<BasicGapCriteria_callingAddressAndService> | null = null;
export function _decode_BasicGapCriteria_callingAddressAndService (el: _Element): BasicGapCriteria_callingAddressAndService {
    if (!_cached_decoder_for_BasicGapCriteria_callingAddressAndService) {
        _cached_decoder_for_BasicGapCriteria_callingAddressAndService = function (el: _Element): BasicGapCriteria_callingAddressAndService {
    let callingAddressValue!: Digits;
    let serviceKey!: ServiceKey;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callingAddressValue": (_el: _Element): void => { callingAddressValue = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BasicGapCriteria_callingAddressAndService,
        _extension_additions_list_spec_for_BasicGapCriteria_callingAddressAndService,
        _root_component_type_list_2_spec_for_BasicGapCriteria_callingAddressAndService,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BasicGapCriteria_callingAddressAndService(
        callingAddressValue,
        serviceKey,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_BasicGapCriteria_callingAddressAndService(el);
}

let _cached_encoder_for_BasicGapCriteria_callingAddressAndService: $.ASN1Encoder<BasicGapCriteria_callingAddressAndService> | null = null;
export function _encode_BasicGapCriteria_callingAddressAndService (value: BasicGapCriteria_callingAddressAndService, elGetter: $.ASN1Encoder<BasicGapCriteria_callingAddressAndService>): _Element {
    if (!_cached_encoder_for_BasicGapCriteria_callingAddressAndService) {
        _cached_encoder_for_BasicGapCriteria_callingAddressAndService = function (value: BasicGapCriteria_callingAddressAndService): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER)(value.callingAddressValue, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_BasicGapCriteria_callingAddressAndService(value, elGetter);
}
