/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../HI2Operations/GeographicalCoordinates.ta.mjs";
// export { GeographicalCoordinates, _decode_GeographicalCoordinates, _encode_GeographicalCoordinates } from "../HI2Operations/GeographicalCoordinates.ta.mjs";


/**
 * @summary GA_PointWithUnCertainty
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GA-PointWithUnCertainty ::= SEQUENCE
 * {
 *     geographicalCoordinates        GeographicalCoordinates,
 *     uncertaintyCode                INTEGER (0..127)
 * }
 * ```
 * 
 * @class
 */
export
class GA_PointWithUnCertainty {
    constructor (
        /**
         * @summary `geographicalCoordinates`.
         * @public
         * @readonly
         */
        readonly geographicalCoordinates: GeographicalCoordinates,
        /**
         * @summary `uncertaintyCode`.
         * @public
         * @readonly
         */
        readonly uncertaintyCode: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a GA_PointWithUnCertainty
     * @description
     * 
     * This takes an `object` and converts it to a `GA_PointWithUnCertainty`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GA_PointWithUnCertainty`.
     * @returns {GA_PointWithUnCertainty}
     */
    public static _from_object (_o: { [_K in keyof (GA_PointWithUnCertainty)]: (GA_PointWithUnCertainty)[_K] }): GA_PointWithUnCertainty {
        return new GA_PointWithUnCertainty(_o.geographicalCoordinates, _o.uncertaintyCode);
    }


}

/**
 * @summary The Leading Root Component Types of GA_PointWithUnCertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GA_PointWithUnCertainty: $.ComponentSpec[] = [
    new $.ComponentSpec("geographicalCoordinates", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("uncertaintyCode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of GA_PointWithUnCertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GA_PointWithUnCertainty: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GA_PointWithUnCertainty
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GA_PointWithUnCertainty: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GA_PointWithUnCertainty: $.ASN1Decoder<GA_PointWithUnCertainty> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GA_PointWithUnCertainty
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GA_PointWithUnCertainty (el: _Element): GA_PointWithUnCertainty {
    if (!_cached_decoder_for_GA_PointWithUnCertainty) { _cached_decoder_for_GA_PointWithUnCertainty = function (el: _Element): GA_PointWithUnCertainty {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("GA-PointWithUnCertainty contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "geographicalCoordinates";
    sequence[1].name = "uncertaintyCode";
    let geographicalCoordinates!: GeographicalCoordinates;
    let uncertaintyCode!: INTEGER;
    geographicalCoordinates = _decode_GeographicalCoordinates(sequence[0]);
    uncertaintyCode = $._decodeInteger(sequence[1]);
    return new GA_PointWithUnCertainty(
        geographicalCoordinates,
        uncertaintyCode,

    );
}; }
    return _cached_decoder_for_GA_PointWithUnCertainty(el);
}

let _cached_encoder_for_GA_PointWithUnCertainty: $.ASN1Encoder<GA_PointWithUnCertainty> | null = null;

/**
 * @summary Encodes a(n) GA_PointWithUnCertainty into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GA_PointWithUnCertainty, encoded as an ASN.1 Element.
 */
export
function _encode_GA_PointWithUnCertainty (value: GA_PointWithUnCertainty, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GA_PointWithUnCertainty) { _cached_encoder_for_GA_PointWithUnCertainty = function (value: GA_PointWithUnCertainty, elGetter: $.ASN1Encoder<GA_PointWithUnCertainty>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeographicalCoordinates(value.geographicalCoordinates, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.uncertaintyCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GA_PointWithUnCertainty(value, elGetter);
}


/* eslint-enable */
