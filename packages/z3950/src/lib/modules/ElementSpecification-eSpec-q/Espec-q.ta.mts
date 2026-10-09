/* eslint-disable */
import {
    EXTERNAL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ValueRestrictor, _decode_ValueRestrictor, _encode_ValueRestrictor } from "../ElementSpecification-eSpec-q/ValueRestrictor.ta.mjs";
// export { ValueRestrictor, _decode_ValueRestrictor, _encode_ValueRestrictor } from "../ElementSpecification-eSpec-q/ValueRestrictor.ta.mjs";


/**
 * @summary Espec_q
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Espec-q ::= SEQUENCE {
 *     valueRestrictor [1] IMPLICIT ValueRestrictor,
 *     elementSelector [2] IMPLICIT EXTERNAL OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Espec_q {
    /**
     * @summary `valueRestrictor`.
     * @public
     * @readonly
     */
    readonly valueRestrictor: ValueRestrictor;
    /**
     * @summary `elementSelector`.
     * @public
     * @readonly
     */
    readonly elementSelector: OPTIONAL<EXTERNAL>;

    constructor (
        valueRestrictor: ValueRestrictor,
        elementSelector: OPTIONAL<EXTERNAL>
    ) {
        this.valueRestrictor = valueRestrictor;
        this.elementSelector = elementSelector;
    }

    /**
     * @summary Restructures an object into a Espec_q
     * @description
     * 
     * This takes an `object` and converts it to a `Espec_q`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Espec_q`.
     * @returns {Espec_q}
     */
    public static _from_object (_o: { [_K in keyof (Espec_q)]: (Espec_q)[_K] }): Espec_q {
        return new Espec_q(_o.valueRestrictor, _o.elementSelector);
    }


}

/**
 * @summary The Leading Root Component Types of Espec_q
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Espec_q: $.ComponentSpec[] = [
    new $.ComponentSpec("valueRestrictor", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("elementSelector", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Espec_q
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Espec_q: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Espec_q
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Espec_q: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Espec_q: $.ASN1Decoder<Espec_q> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Espec_q
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Espec_q (el: _Element): Espec_q {
    if (!_cached_decoder_for_Espec_q) { _cached_decoder_for_Espec_q = function (el: _Element): Espec_q {
    let valueRestrictor!: ValueRestrictor;
    let elementSelector: OPTIONAL<EXTERNAL>;
    const callbacks: $.DecodingMap = {
        "valueRestrictor": (_el: _Element): void => { valueRestrictor = $._decode_implicit<ValueRestrictor>(() => _decode_ValueRestrictor)(_el); },
        "elementSelector": (_el: _Element): void => { elementSelector = $._decode_implicit<EXTERNAL>(() => $._decodeExternal)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Espec_q,
        _extension_additions_list_spec_for_Espec_q,
        _root_component_type_list_2_spec_for_Espec_q,
        undefined,
    );
    return new Espec_q(
        valueRestrictor,
        elementSelector
    );
}; }
    return _cached_decoder_for_Espec_q(el);
}

let _cached_encoder_for_Espec_q: $.ASN1Encoder<Espec_q> | null = null;

/**
 * @summary Encodes a(n) Espec_q into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Espec_q, encoded as an ASN.1 Element.
 */
export
function _encode_Espec_q (value: Espec_q, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Espec_q) { _cached_encoder_for_Espec_q = function (value: Espec_q, elGetter: $.ASN1Encoder<Espec_q>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ValueRestrictor, $.BER)(value.valueRestrictor, $.BER);
    if (value.elementSelector !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeExternal, $.BER)(value.elementSelector, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Espec_q(value, elGetter);
}


/* eslint-enable */
