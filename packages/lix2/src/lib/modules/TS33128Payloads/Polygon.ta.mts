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
 * @summary Polygon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Polygon ::= SEQUENCE
 * {
 *     pointList                           [1] SET SIZE (3..15) OF GeographicalCoordinates
 * }
 * ```
 * 
 * @class
 */
export
class Polygon {
    constructor (
        /**
         * @summary `pointList`.
         * @public
         * @readonly
         */
        readonly pointList: GeographicalCoordinates[]
    ) {}

    /**
     * @summary Restructures an object into a Polygon
     * @description
     * 
     * This takes an `object` and converts it to a `Polygon`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Polygon`.
     * @returns {Polygon}
     */
    public static _from_object (_o: { [_K in keyof (Polygon)]: (Polygon)[_K] }): Polygon {
        return new Polygon(_o.pointList);
    }


}

/**
 * @summary The Leading Root Component Types of Polygon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Polygon: $.ComponentSpec[] = [
    new $.ComponentSpec("pointList", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Polygon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Polygon: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Polygon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Polygon: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Polygon: $.ASN1Decoder<Polygon> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Polygon
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Polygon (el: _Element): Polygon {
    if (!_cached_decoder_for_Polygon) { _cached_decoder_for_Polygon = function (el: _Element): Polygon {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("Polygon contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pointList";
    let pointList!: GeographicalCoordinates[];
    pointList = $._decode_implicit<GeographicalCoordinates[]>(() => $._decodeSetOf<GeographicalCoordinates>(() => _decode_GeographicalCoordinates))(sequence[0]);
    return new Polygon(
        pointList,

    );
}; }
    return _cached_decoder_for_Polygon(el);
}

let _cached_encoder_for_Polygon: $.ASN1Encoder<Polygon> | null = null;

/**
 * @summary Encodes a(n) Polygon into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Polygon, encoded as an ASN.1 Element.
 */
export
function _encode_Polygon (value: Polygon, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Polygon) { _cached_encoder_for_Polygon = function (value: Polygon, elGetter: $.ASN1Encoder<Polygon>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<GeographicalCoordinates>(() => _encode_GeographicalCoordinates, $.BER), $.BER)(value.pointList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Polygon(value, elGetter);
}


/* eslint-enable */
