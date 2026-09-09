import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";
import { CriticalityType, _enum_for_CriticalityType, ignore, _decode_CriticalityType, _encode_CriticalityType } from "../IN-CS2-datatypes/CriticalityType.ta.mjs";

/**
 * @summary ExtensionField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtensionField ::= SEQUENCE {
 type				EXTENSION.&id ({SupportedExtensions}),
 
 criticality				CriticalityType DEFAULT ignore,
 value				[1] EXTENSION.&ExtensionType ({SupportedExtensions}{@type}),
 ...
 }
 * ```
 *
 */
export class ExtensionField {
    constructor (
        readonly type_: Code,
        readonly criticality: OPTIONAL<CriticalityType>,
        readonly value: _Element,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (ExtensionField)]: (ExtensionField)[_K] }): ExtensionField {
        return new ExtensionField(_o.type_, _o.criticality, _o.value, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_criticality () { return ignore; }

    public static _enum_for_criticality = _enum_for_CriticalityType;
}

export const _root_component_type_list_1_spec_for_ExtensionField: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasAnyTag),
    new $.ComponentSpec("criticality", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_ExtensionField: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_ExtensionField: $.ComponentSpec[] = [];

let _cached_decoder_for_ExtensionField: $.ASN1Decoder<ExtensionField> | null = null;
export function _decode_ExtensionField (el: _Element): ExtensionField {
    if (!_cached_decoder_for_ExtensionField) {
        _cached_decoder_for_ExtensionField = function (el: _Element): ExtensionField {
    let type_!: Code;
    let criticality: OPTIONAL<CriticalityType> = ExtensionField._default_value_for_criticality;
    let value!: _Element;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = _decode_Code(_el); },
        "criticality": (_el: _Element): void => { criticality = _decode_CriticalityType(_el); },
        "value": (_el: _Element): void => { value = $._decode_implicit<_Element>(() => $._decodeAny)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtensionField,
        _extension_additions_list_spec_for_ExtensionField,
        _root_component_type_list_2_spec_for_ExtensionField,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtensionField(
        type_,
        criticality,
        value,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_ExtensionField(el);
}

let _cached_encoder_for_ExtensionField: $.ASN1Encoder<ExtensionField> | null = null;
export function _encode_ExtensionField (value: ExtensionField, elGetter: $.ASN1Encoder<ExtensionField>): _Element {
    if (!_cached_encoder_for_ExtensionField) {
        _cached_encoder_for_ExtensionField = function (value: ExtensionField): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Code(value.type_, $.BER),
            /* IF_DEFAULT */ (value.criticality === undefined || $.deepEq(value.criticality, ExtensionField._default_value_for_criticality) ? undefined : _encode_CriticalityType(value.criticality, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeAny, $.BER)(value.value, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_ExtensionField(value, elGetter);
}
