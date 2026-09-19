/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../HI2Operations/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../HI2Operations/GeographicalCoordinates.ta.mjs";


/**
 * @summary GA_Point
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GA-Point ::= SEQUENCE
 * {
 *     geographicalCoordinates        GeographicalCoordinates,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GA_Point {
    constructor (
        /**
         * @summary `geographicalCoordinates`.
         * @public
         * @readonly
         */
        readonly geographicalCoordinates: GeographicalCoordinates,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GA_Point
     * @description
     * 
     * This takes an `object` and converts it to a `GA_Point`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GA_Point`.
     * @returns {GA_Point}
     */
    public static _from_object (_o: { [_K in keyof (GA_Point)]: (GA_Point)[_K] }): GA_Point {
        return new GA_Point(_o.geographicalCoordinates, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GA_Point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GA_Point: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of GA_Point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GA_Point: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GA_Point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GA_Point: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GA_Point: $.ASN1Decoder<GA_Point> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GA_Point
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GA_Point (el: _Element): GA_Point {
    if (!_cached_decoder_for_GA_Point) { _cached_decoder_for_GA_Point = function (el: _Element): GA_Point {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("GA-Point contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "geographicalCoordinates";
    let geographicalCoordinates!: GeographicalCoordinates;
    geographicalCoordinates = _decode_GeographicalCoordinates(sequence[0]);
    return new GA_Point(
        geographicalCoordinates,
        sequence.slice(1),
    );
}; }
    return _cached_decoder_for_GA_Point(el);
}

let _cached_encoder_for_GA_Point: $.ASN1Encoder<GA_Point> | null = null;

/**
 * @summary Encodes a(n) GA_Point into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GA_Point, encoded as an ASN.1 Element.
 */
export
function _encode_GA_Point (value: GA_Point, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GA_Point) { _cached_encoder_for_GA_Point = function (value: GA_Point, elGetter: $.ASN1Encoder<GA_Point>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeographicalCoordinates(value.geographicalCoordinates, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GA_Point(value, elGetter);
}


/* eslint-enable */
