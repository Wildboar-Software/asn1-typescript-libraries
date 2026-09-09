import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";

/**
 * @summary GapOnService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GapOnService ::= SEQUENCE {
 serviceKey				[0] ServiceKey,
 ...
 }
 * ```
 *
 */
export class GapOnService {
    constructor (
        readonly serviceKey: ServiceKey,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GapOnService)]: (GapOnService)[_K] }): GapOnService {
        return new GapOnService(_o.serviceKey, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_GapOnService: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_GapOnService: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GapOnService: $.ComponentSpec[] = [];

let _cached_decoder_for_GapOnService: $.ASN1Decoder<GapOnService> | null = null;
export function _decode_GapOnService (el: _Element): GapOnService {
    if (!_cached_decoder_for_GapOnService) {
        _cached_decoder_for_GapOnService = function (el: _Element): GapOnService {
    let serviceKey!: ServiceKey;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GapOnService,
        _extension_additions_list_spec_for_GapOnService,
        _root_component_type_list_2_spec_for_GapOnService,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GapOnService(
        serviceKey,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GapOnService(el);
}

let _cached_encoder_for_GapOnService: $.ASN1Encoder<GapOnService> | null = null;
export function _encode_GapOnService (value: GapOnService, elGetter: $.ASN1Encoder<GapOnService>): _Element {
    if (!_cached_encoder_for_GapOnService) {
        _cached_encoder_for_GapOnService = function (value: GapOnService): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GapOnService(value, elGetter);
}
