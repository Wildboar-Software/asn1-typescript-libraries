import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary MetDPCriterionAlt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MetDPCriterionAlt {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 ...
 }
 * ```
 *
 */
export class MetDPCriterionAlt {
    constructor (
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (MetDPCriterionAlt)]: (MetDPCriterionAlt)[_K] }): MetDPCriterionAlt {
        return new MetDPCriterionAlt(_o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_MetDPCriterionAlt: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_MetDPCriterionAlt: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_MetDPCriterionAlt: $.ComponentSpec[] = [];

let _cached_decoder_for_MetDPCriterionAlt: $.ASN1Decoder<MetDPCriterionAlt> | null = null;
export function _decode_MetDPCriterionAlt (el: _Element): MetDPCriterionAlt {
    if (!_cached_decoder_for_MetDPCriterionAlt) {
        _cached_decoder_for_MetDPCriterionAlt = function (el: _Element): MetDPCriterionAlt {
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {

    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MetDPCriterionAlt,
        _extension_additions_list_spec_for_MetDPCriterionAlt,
        _root_component_type_list_2_spec_for_MetDPCriterionAlt,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MetDPCriterionAlt(_unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_MetDPCriterionAlt(el);
}

let _cached_encoder_for_MetDPCriterionAlt: $.ASN1Encoder<MetDPCriterionAlt> | null = null;
export function _encode_MetDPCriterionAlt (value: MetDPCriterionAlt, elGetter: $.ASN1Encoder<MetDPCriterionAlt>): _Element {
    if (!_cached_encoder_for_MetDPCriterionAlt) {
        _cached_encoder_for_MetDPCriterionAlt = function (value: MetDPCriterionAlt): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [

        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_MetDPCriterionAlt(value, elGetter);
}
