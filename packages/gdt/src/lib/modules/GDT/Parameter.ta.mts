/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ParameterType, _encode_ParameterType, ParameterType } from "../GDT/ParameterType.ta.mjs";


/**
 * @summary Parameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Parameter ::= SEQUENCE {
 *     id      ParameterType,
 *     value   SEQUENCE OF OCTET STRING OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class Parameter {
    constructor (
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: ParameterType,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: OPTIONAL<OCTET_STRING[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Parameter
     * @description
     * 
     * This takes an `object` and converts it to a `Parameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Parameter`.
     * @returns {Parameter}
     */
    public static _from_object (_o: { [_K in keyof (Parameter)]: (Parameter)[_K] }): Parameter {
        return new Parameter(_o.id, _o.value, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Parameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Parameter: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("value", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of Parameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Parameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Parameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Parameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Parameter: $.ASN1Decoder<Parameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Parameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Parameter (el: _Element): Parameter {
    if (!_cached_decoder_for_Parameter) { _cached_decoder_for_Parameter = function (el: _Element): Parameter {
    let id!: ParameterType;
    let value: OPTIONAL<OCTET_STRING[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "id": (_el: _Element): void => { id = _decode_ParameterType(_el); },
        "value": (_el: _Element): void => { value = $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Parameter,
        _extension_additions_list_spec_for_Parameter,
        _root_component_type_list_2_spec_for_Parameter,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Parameter(
        id,
        value,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Parameter(el);
}

let _cached_encoder_for_Parameter: $.ASN1Encoder<Parameter> | null = null;

/**
 * @summary Encodes a(n) Parameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Parameter, encoded as an ASN.1 Element.
 */
export
function _encode_Parameter (value: Parameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Parameter) { _cached_encoder_for_Parameter = function (value: Parameter): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ParameterType(value.id, $.BER),
            /* IF_ABSENT  */ ((value.value === undefined) ? undefined : $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER)(value.value, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Parameter(value, elGetter);
}


/* eslint-enable */
