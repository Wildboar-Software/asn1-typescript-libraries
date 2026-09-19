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
 * @summary TimeOffer_Item_value
 * @description
 *
 * A single offered timeout as multiplier T and exponent E. T and E
 * encode the timeout per ISO/IEC 9040:1997 §23.4; T must not be
 * negative; T=0 means infinite.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOffer-Item-value ::= SEQUENCE {
 *     multiplier INTEGER,
 *     exponent INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class TimeOffer_Item_value {
    constructor (
        /**
         * @summary `multiplier`.
         * @description
         * Timeout multiplier T. Must not be negative; T=0 means
         * infinite. ISO/IEC 9040:1997 §23.4.
         * @public
         * @readonly
         */
        readonly multiplier: INTEGER,
        /**
         * @summary `exponent`.
         * @description
         * Timeout exponent E. T and E encode the timeout per ISO/IEC
         * 9040:1997 §23.4.
         * @public
         * @readonly
         */
        readonly exponent: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a TimeOffer_Item_value
     * @description
     * 
     * This takes an `object` and converts it to a `TimeOffer_Item_value`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeOffer_Item_value`.
     * @returns {TimeOffer_Item_value}
     */
    public static _from_object (_o: { [_K in keyof (TimeOffer_Item_value)]: (TimeOffer_Item_value)[_K] }): TimeOffer_Item_value {
        return new TimeOffer_Item_value(_o.multiplier, _o.exponent);
    }


}

/**
 * @summary The Leading Root Component Types of TimeOffer_Item_value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TimeOffer_Item_value: $.ComponentSpec[] = [
    new $.ComponentSpec("multiplier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("exponent", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of TimeOffer_Item_value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TimeOffer_Item_value: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TimeOffer_Item_value
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TimeOffer_Item_value: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TimeOffer_Item_value: $.ASN1Decoder<TimeOffer_Item_value> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TimeOffer_Item_value
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TimeOffer_Item_value (el: _Element): TimeOffer_Item_value {
    if (!_cached_decoder_for_TimeOffer_Item_value) { _cached_decoder_for_TimeOffer_Item_value = function (el: _Element): TimeOffer_Item_value {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TimeOffer-Item-value contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "multiplier";
    sequence[1].name = "exponent";
    const multiplier: INTEGER = $._decodeInteger(sequence[0]);
    const exponent: INTEGER = $._decodeInteger(sequence[1]);
    return new TimeOffer_Item_value(
        multiplier,
        exponent,

    );
}; }
    return _cached_decoder_for_TimeOffer_Item_value(el);
}

let _cached_encoder_for_TimeOffer_Item_value: $.ASN1Encoder<TimeOffer_Item_value> | null = null;

/**
 * @summary Encodes a(n) TimeOffer_Item_value into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeOffer_Item_value, encoded as an ASN.1 Element.
 */
export
function _encode_TimeOffer_Item_value (value: TimeOffer_Item_value, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TimeOffer_Item_value) { _cached_encoder_for_TimeOffer_Item_value = function (value: TimeOffer_Item_value): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.multiplier, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.exponent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TimeOffer_Item_value(value, elGetter);
}


/* eslint-enable */
