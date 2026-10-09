/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary PrivateCapabilities_operators_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateCapabilities-operators-Item ::= SEQUENCE {
 *     operator [0] IMPLICIT InternationalString,
 *     description [1] IMPLICIT HumanString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PrivateCapabilities_operators_Item {
    /**
     * @summary `operator`.
     * @public
     * @readonly
     */
    readonly operator: InternationalString;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;

    constructor (
        operator: InternationalString,
        description: OPTIONAL<HumanString>
    ) {
        this.operator = operator;
        this.description = description;
    }

    /**
     * @summary Restructures an object into a PrivateCapabilities_operators_Item
     * @description
     * 
     * This takes an `object` and converts it to a `PrivateCapabilities_operators_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateCapabilities_operators_Item`.
     * @returns {PrivateCapabilities_operators_Item}
     */
    public static _from_object (_o: { [_K in keyof (PrivateCapabilities_operators_Item)]: (PrivateCapabilities_operators_Item)[_K] }): PrivateCapabilities_operators_Item {
        return new PrivateCapabilities_operators_Item(_o.operator, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of PrivateCapabilities_operators_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivateCapabilities_operators_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("operator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of PrivateCapabilities_operators_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivateCapabilities_operators_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivateCapabilities_operators_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivateCapabilities_operators_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivateCapabilities_operators_Item: $.ASN1Decoder<PrivateCapabilities_operators_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateCapabilities_operators_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateCapabilities_operators_Item (el: _Element): PrivateCapabilities_operators_Item {
    if (!_cached_decoder_for_PrivateCapabilities_operators_Item) { _cached_decoder_for_PrivateCapabilities_operators_Item = function (el: _Element): PrivateCapabilities_operators_Item {
    let operator!: InternationalString;
    let description: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "operator": (_el: _Element): void => { operator = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateCapabilities_operators_Item,
        _extension_additions_list_spec_for_PrivateCapabilities_operators_Item,
        _root_component_type_list_2_spec_for_PrivateCapabilities_operators_Item,
        undefined,
    );
    return new PrivateCapabilities_operators_Item(
        operator,
        description
    );
}; }
    return _cached_decoder_for_PrivateCapabilities_operators_Item(el);
}

let _cached_encoder_for_PrivateCapabilities_operators_Item: $.ASN1Encoder<PrivateCapabilities_operators_Item> | null = null;

/**
 * @summary Encodes a(n) PrivateCapabilities_operators_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateCapabilities_operators_Item, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateCapabilities_operators_Item (value: PrivateCapabilities_operators_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateCapabilities_operators_Item) { _cached_encoder_for_PrivateCapabilities_operators_Item = function (value: PrivateCapabilities_operators_Item, elGetter: $.ASN1Encoder<PrivateCapabilities_operators_Item>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.operator, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PrivateCapabilities_operators_Item(value, elGetter);
}


/* eslint-enable */
