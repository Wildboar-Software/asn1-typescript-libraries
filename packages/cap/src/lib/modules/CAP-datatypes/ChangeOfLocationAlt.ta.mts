import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary ChangeOfLocationAlt
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ChangeOfLocationAlt {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 ...
 }
 * ```
 *
 */
export class ChangeOfLocationAlt {
    constructor (
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (ChangeOfLocationAlt)]: (ChangeOfLocationAlt)[_K] }): ChangeOfLocationAlt {
        return new ChangeOfLocationAlt(_o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_ChangeOfLocationAlt: $.ComponentSpec[] = [];

export const _root_component_type_list_2_spec_for_ChangeOfLocationAlt: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_ChangeOfLocationAlt: $.ComponentSpec[] = [];

let _cached_decoder_for_ChangeOfLocationAlt: $.ASN1Decoder<ChangeOfLocationAlt> | null = null;
export function _decode_ChangeOfLocationAlt (el: _Element): ChangeOfLocationAlt {
    if (!_cached_decoder_for_ChangeOfLocationAlt) {
        _cached_decoder_for_ChangeOfLocationAlt = function (el: _Element): ChangeOfLocationAlt {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {

    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChangeOfLocationAlt,
        _extension_additions_list_spec_for_ChangeOfLocationAlt,
        _root_component_type_list_2_spec_for_ChangeOfLocationAlt,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ChangeOfLocationAlt(_unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_ChangeOfLocationAlt(el);
}

let _cached_encoder_for_ChangeOfLocationAlt: $.ASN1Encoder<ChangeOfLocationAlt> | null = null;
export function _encode_ChangeOfLocationAlt (value: ChangeOfLocationAlt, elGetter: $.ASN1Encoder<ChangeOfLocationAlt>): _Element {
    if (!_cached_encoder_for_ChangeOfLocationAlt) {
        _cached_encoder_for_ChangeOfLocationAlt = function (value: ChangeOfLocationAlt): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [

        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_ChangeOfLocationAlt(value, elGetter);
}
