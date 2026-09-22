/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary Units
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Units ::= SEQUENCE {
 *          name         [0] IMPLICIT InternationalString OPTIONAL,
 *          description  [1] IMPLICIT HumanString OPTIONAL,
 *          unit         [2] StringOrNumeric}
 * ```
 * 
 * @class
 */
export
class Units {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: OPTIONAL<InternationalString>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `unit`.
         * @public
         * @readonly
         */
        readonly unit: StringOrNumeric
    ) {}

    /**
     * @summary Restructures an object into a Units
     * @description
     * 
     * This takes an `object` and converts it to a `Units`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Units`.
     * @returns {Units}
     */
    public static _from_object (_o: { [_K in keyof (Units)]: (Units)[_K] }): Units {
        return new Units(_o.name, _o.description, _o.unit);
    }


}

/**
 * @summary The Leading Root Component Types of Units
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Units: $.ComponentSpec[] = [
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1)),
    /* FIXME: unit COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of Units
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Units: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Units
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Units: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Units: $.ASN1Decoder<Units> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Units
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Units (el: _Element): Units {
    if (!_cached_decoder_for_Units) { _cached_decoder_for_Units = function (el: _Element): Units {
    let name: OPTIONAL<InternationalString>;
    let description: OPTIONAL<HumanString>;
    let unit!: StringOrNumeric;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "unit": (_el: _Element): void => { unit = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Units,
        _extension_additions_list_spec_for_Units,
        _root_component_type_list_2_spec_for_Units,
        undefined,
    );
    return new Units(
        name,
        description,
        unit
    );
}; }
    return _cached_decoder_for_Units(el);
}

let _cached_encoder_for_Units: $.ASN1Encoder<Units> | null = null;

/**
 * @summary Encodes a(n) Units into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Units, encoded as an ASN.1 Element.
 */
export
function _encode_Units (value: Units, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Units) { _cached_encoder_for_Units = function (value: Units, elGetter: $.ASN1Encoder<Units>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.name === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.name, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_StringOrNumeric, $.BER)(value.unit, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Units(value, elGetter);
}


/* eslint-enable */
