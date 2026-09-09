import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedInformationType, _enum_for_RequestedInformationType, _decode_RequestedInformationType, _encode_RequestedInformationType } from "./RequestedInformationType.ta.mjs";
import { type RequestedInformationValue, _decode_RequestedInformationValue, _encode_RequestedInformationValue } from "./RequestedInformationValue.ta.mjs";

/**
 * @summary RequestedInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestedInformation {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 requestedInformationType		[0] RequestedInformationType,
 requestedInformationValue		[1] RequestedInformationValue {bound},
...
 }
 * ```
 *
 */
export class RequestedInformation {
    constructor (
        readonly requestedInformationType: RequestedInformationType,
        readonly requestedInformationValue: RequestedInformationValue,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (RequestedInformation)]: (RequestedInformation)[_K] }): RequestedInformation {
        return new RequestedInformation(_o.requestedInformationType, _o.requestedInformationValue, _o._unrecognizedExtensionsList);
    }

    public static _enum_for_requestedInformationType = _enum_for_RequestedInformationType;
}

export const _root_component_type_list_1_spec_for_RequestedInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedInformationType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("requestedInformationValue", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_RequestedInformation: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_RequestedInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_RequestedInformation: $.ASN1Decoder<RequestedInformation> | null = null;
export function _decode_RequestedInformation (el: _Element): RequestedInformation {
    if (!_cached_decoder_for_RequestedInformation) {
        _cached_decoder_for_RequestedInformation = function (el: _Element): RequestedInformation {
    let requestedInformationType!: RequestedInformationType;
    let requestedInformationValue!: RequestedInformationValue;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedInformationType": (_el: _Element): void => { requestedInformationType = $._decode_implicit<RequestedInformationType>(() => _decode_RequestedInformationType)(_el); },
        "requestedInformationValue": (_el: _Element): void => { requestedInformationValue = $._decode_explicit<RequestedInformationValue>(() => _decode_RequestedInformationValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestedInformation,
        _extension_additions_list_spec_for_RequestedInformation,
        _root_component_type_list_2_spec_for_RequestedInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestedInformation(
        requestedInformationType,
        requestedInformationValue,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_RequestedInformation(el);
}

let _cached_encoder_for_RequestedInformation: $.ASN1Encoder<RequestedInformation> | null = null;
export function _encode_RequestedInformation (value: RequestedInformation, elGetter: $.ASN1Encoder<RequestedInformation>): _Element {
    if (!_cached_encoder_for_RequestedInformation) {
        _cached_encoder_for_RequestedInformation = function (value: RequestedInformation): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedInformationType, $.BER)(value.requestedInformationType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_RequestedInformationValue, $.BER)(value.requestedInformationValue, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_RequestedInformation(value, elGetter);
}
