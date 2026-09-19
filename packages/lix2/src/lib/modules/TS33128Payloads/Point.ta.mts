/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../TS33128Payloads/GeographicalCoordinates.ta.mjs";


/**
 * @summary Point
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Point ::= SEQUENCE
 * {
 *     geographicalCoordinates             [1] GeographicalCoordinates
 * }
 * ```
 * 
 * @class
 */
export
class Point {
    constructor (
        /**
         * @summary `geographicalCoordinates`.
         * @public
         * @readonly
         */
        readonly geographicalCoordinates: GeographicalCoordinates
    ) {}

    /**
     * @summary Restructures an object into a Point
     * @description
     * 
     * This takes an `object` and converts it to a `Point`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Point`.
     * @returns {Point}
     */
    public static _from_object (_o: { [_K in keyof (Point)]: (Point)[_K] }): Point {
        return new Point(_o.geographicalCoordinates);
    }


}

/**
 * @summary The Leading Root Component Types of Point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Point: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Point: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Point
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Point: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Point: $.ASN1Decoder<Point> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Point
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Point (el: _Element): Point {
    if (!_cached_decoder_for_Point) { _cached_decoder_for_Point = function (el: _Element): Point {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Point contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "geographicalCoordinates";
    let geographicalCoordinates!: GeographicalCoordinates;
    geographicalCoordinates = $._decode_implicit<GeographicalCoordinates>(() => _decode_GeographicalCoordinates)(sequence[0]);
    return new Point(
        geographicalCoordinates,

    );
}; }
    return _cached_decoder_for_Point(el);
}

let _cached_encoder_for_Point: $.ASN1Encoder<Point> | null = null;

/**
 * @summary Encodes a(n) Point into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Point, encoded as an ASN.1 Element.
 */
export
function _encode_Point (value: Point, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Point) { _cached_encoder_for_Point = function (value: Point, elGetter: $.ASN1Encoder<Point>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GeographicalCoordinates, $.BER)(value.geographicalCoordinates, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Point(value, elGetter);
}


/* eslint-enable */
