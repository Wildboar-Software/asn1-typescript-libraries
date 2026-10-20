/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginDestCombination
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginDestCombination ::= SEQUENCE {
 *    origin        [0] IMPLICIT INTEGER OPTIONAL,
 *    destination   [1] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class OriginDestCombination {
    /**
     * @summary `origin`.
     * @public
     * @readonly
     */
    readonly origin: OPTIONAL<INTEGER>;
    /**
     * @summary `destination`.
     * @public
     * @readonly
     */
    readonly destination: OPTIONAL<INTEGER>;

    constructor (
        origin: OPTIONAL<INTEGER>,
        destination: OPTIONAL<INTEGER>
    ) {
        this.origin = origin;
        this.destination = destination;
    }

    /**
     * @summary Restructures an object into a OriginDestCombination
     * @description
     * 
     * This takes an `object` and converts it to a `OriginDestCombination`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginDestCombination`.
     * @returns {OriginDestCombination}
     */
    public static _from_object (_o: { [_K in keyof (OriginDestCombination)]: (OriginDestCombination)[_K] }): OriginDestCombination {
        return new OriginDestCombination(_o.origin, _o.destination);
    }


}

/**
 * @summary The Leading Root Component Types of OriginDestCombination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginDestCombination: $.ComponentSpec[] = [
    new $.ComponentSpec("origin", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destination", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OriginDestCombination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginDestCombination: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginDestCombination
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginDestCombination: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginDestCombination: $.ASN1Decoder<OriginDestCombination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginDestCombination
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginDestCombination (el: _Element): OriginDestCombination {
    if (!_cached_decoder_for_OriginDestCombination) { _cached_decoder_for_OriginDestCombination = function (el: _Element): OriginDestCombination {
    let origin: OPTIONAL<INTEGER>;
    let destination: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "origin": (_el: _Element): void => { origin = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "destination": (_el: _Element): void => { destination = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OriginDestCombination,
        _extension_additions_list_spec_for_OriginDestCombination,
        _root_component_type_list_2_spec_for_OriginDestCombination,
        undefined,
    );
    return new OriginDestCombination(
        origin,
        destination
    );
}; }
    return _cached_decoder_for_OriginDestCombination(el);
}

let _cached_encoder_for_OriginDestCombination: $.ASN1Encoder<OriginDestCombination> | null = null;

/**
 * @summary Encodes a(n) OriginDestCombination into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginDestCombination, encoded as an ASN.1 Element.
 */
export
function _encode_OriginDestCombination (value: OriginDestCombination, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginDestCombination) { _cached_encoder_for_OriginDestCombination = function (value: OriginDestCombination, _elGetter: $.ASN1Encoder<OriginDestCombination>): _Element {
    const _components: _Element[] = [];
    if (value.origin !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.origin, $.BER));
    }
    if (value.destination !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.destination, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_OriginDestCombination(value, elGetter);
}


/* eslint-enable */
