/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeOffer_Item_range
 * @description
 *
 * Inclusive range of offered timeouts via lower/upper multiplier and
 * exponent. T and E encode the timeout per ISO/IEC 9040:1997 §23.4;
 * T=0 means infinite.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOffer-Item-range ::= SEQUENCE {
 *     lowerMultiplier     INTEGER,
 *     lowerExponent       INTEGER,
 *     upperMultiplier     INTEGER,
 *     upperExponent       INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class TimeOffer_Item_range {
    constructor (
        /**
         * @summary `lowerMultiplier`.
         * @description
         * Lower-bound timeout multiplier T. ISO/IEC 9040:1997 §23.4.
         * @public
         * @readonly
         */
        readonly lowerMultiplier: INTEGER,
        /**
         * @summary `lowerExponent`.
         * @description
         * Lower-bound timeout exponent E. ISO/IEC 9040:1997 §23.4.
         * @public
         * @readonly
         */
        readonly lowerExponent: INTEGER,
        /**
         * @summary `upperMultiplier`.
         * @description
         * Upper-bound timeout multiplier T. ISO/IEC 9040:1997 §23.4.
         * @public
         * @readonly
         */
        readonly upperMultiplier: INTEGER,
        /**
         * @summary `upperExponent`.
         * @description
         * Upper-bound timeout exponent E. ISO/IEC 9040:1997 §23.4.
         * @public
         * @readonly
         */
        readonly upperExponent: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a TimeOffer_Item_range
     * @description
     * 
     * This takes an `object` and converts it to a `TimeOffer_Item_range`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeOffer_Item_range`.
     * @returns {TimeOffer_Item_range}
     */
    public static _from_object (_o: { [_K in keyof (TimeOffer_Item_range)]: (TimeOffer_Item_range)[_K] }): TimeOffer_Item_range {
        return new TimeOffer_Item_range(_o.lowerMultiplier, _o.lowerExponent, _o.upperMultiplier, _o.upperExponent);
    }


}

/**
 * @summary The Leading Root Component Types of TimeOffer_Item_range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TimeOffer_Item_range: $.ComponentSpec[] = [
    new $.ComponentSpec("lowerMultiplier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("lowerExponent", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("upperMultiplier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("upperExponent", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of TimeOffer_Item_range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TimeOffer_Item_range: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TimeOffer_Item_range
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TimeOffer_Item_range: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TimeOffer_Item_range: $.ASN1Decoder<TimeOffer_Item_range> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeOffer_Item_range
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeOffer_Item_range (el: _Element): TimeOffer_Item_range {
    if (!_cached_decoder_for_TimeOffer_Item_range) { _cached_decoder_for_TimeOffer_Item_range = function (el: _Element): TimeOffer_Item_range {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("TimeOffer-Item-range contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "lowerMultiplier";
    sequence[1].name = "lowerExponent";
    sequence[2].name = "upperMultiplier";
    sequence[3].name = "upperExponent";
    const lowerMultiplier: INTEGER = $._decodeInteger(sequence[0]);
    const lowerExponent: INTEGER = $._decodeInteger(sequence[1]);
    const upperMultiplier: INTEGER = $._decodeInteger(sequence[2]);
    const upperExponent: INTEGER = $._decodeInteger(sequence[3]);
    return new TimeOffer_Item_range(
        lowerMultiplier,
        lowerExponent,
        upperMultiplier,
        upperExponent,

    );
}; }
    return _cached_decoder_for_TimeOffer_Item_range(el);
}

let _cached_encoder_for_TimeOffer_Item_range: $.ASN1Encoder<TimeOffer_Item_range> | null = null;

/**
 * @summary Encodes a(n) TimeOffer_Item_range into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeOffer_Item_range, encoded as an ASN.1 Element.
 */
export
function _encode_TimeOffer_Item_range (value: TimeOffer_Item_range, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeOffer_Item_range) { _cached_encoder_for_TimeOffer_Item_range = function (value: TimeOffer_Item_range): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.lowerMultiplier, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.lowerExponent, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.upperMultiplier, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.upperExponent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TimeOffer_Item_range(value, elGetter);
}


/* eslint-enable */
