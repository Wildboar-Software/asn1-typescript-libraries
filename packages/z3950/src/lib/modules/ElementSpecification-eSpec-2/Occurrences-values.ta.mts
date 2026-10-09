/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Occurrences_values
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Occurrences-values ::= SEQUENCE {
 *     start [1] IMPLICIT INTEGER,
 *     -- If 'start' alone is included, then
 *     -- single occurrence is requested
 *     howMany [2] IMPLICIT INTEGER OPTIONAL  -- For example, if 'start' is 5 and 'howMany' is 6,
 *     -- then request is for "occurrences 5 through 10."
 * }
 * ```
 * 
 * @class
 */
export
class Occurrences_values {
    /**
     * @summary `start`.
     * @public
     * @readonly
     */
    readonly start: INTEGER;
    /**
     * @summary `howMany`.
     * @public
     * @readonly
     */
    readonly howMany: OPTIONAL<INTEGER>;

    constructor (
        start: INTEGER,
        howMany: OPTIONAL<INTEGER>
    ) {
        this.start = start;
        this.howMany = howMany;
    }

    /**
     * @summary Restructures an object into a Occurrences_values
     * @description
     * 
     * This takes an `object` and converts it to a `Occurrences_values`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Occurrences_values`.
     * @returns {Occurrences_values}
     */
    public static _from_object (_o: { [_K in keyof (Occurrences_values)]: (Occurrences_values)[_K] }): Occurrences_values {
        return new Occurrences_values(_o.start, _o.howMany);
    }


}

/**
 * @summary The Leading Root Component Types of Occurrences_values
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Occurrences_values: $.ComponentSpec[] = [
    new $.ComponentSpec("start", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("howMany", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Occurrences_values
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Occurrences_values: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Occurrences_values
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Occurrences_values: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Occurrences_values: $.ASN1Decoder<Occurrences_values> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Occurrences_values
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Occurrences_values (el: _Element): Occurrences_values {
    if (!_cached_decoder_for_Occurrences_values) { _cached_decoder_for_Occurrences_values = function (el: _Element): Occurrences_values {
    let start!: INTEGER;
    let howMany: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "start": (_el: _Element): void => { start = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "howMany": (_el: _Element): void => { howMany = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Occurrences_values,
        _extension_additions_list_spec_for_Occurrences_values,
        _root_component_type_list_2_spec_for_Occurrences_values,
        undefined,
    );
    return new Occurrences_values(
        start,
        howMany
    );
}; }
    return _cached_decoder_for_Occurrences_values(el);
}

let _cached_encoder_for_Occurrences_values: $.ASN1Encoder<Occurrences_values> | null = null;

/**
 * @summary Encodes a(n) Occurrences_values into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Occurrences_values, encoded as an ASN.1 Element.
 */
export
function _encode_Occurrences_values (value: Occurrences_values, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Occurrences_values) { _cached_encoder_for_Occurrences_values = function (value: Occurrences_values, elGetter: $.ASN1Encoder<Occurrences_values>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.start, $.BER);
    if (value.howMany !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.howMany, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Occurrences_values(value, elGetter);
}


/* eslint-enable */
