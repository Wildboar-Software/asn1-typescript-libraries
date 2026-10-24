/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DayOfTheWeek, _decode_DayOfTheWeek, _encode_DayOfTheWeek, _enum_for_DayOfTheWeek } from "../CSChargingDataTypes/DayOfTheWeek.ta.mjs";
import { DayClass, _decode_DayClass, _encode_DayClass } from "../CSChargingDataTypes/DayClass.ta.mjs";


/**
 * @summary DayDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DayDefinition ::= SEQUENCE {
 *    day        [0] IMPLICIT DayOfTheWeek,
 *    dayClass   [1] DayClass}
 * ```
 * 
 * @class
 */
export
class DayDefinition {
    /**
     * @summary `day`.
     * @public
     * @readonly
     */
    readonly day: DayOfTheWeek;
    /**
     * @summary `dayClass`.
     * @public
     * @readonly
     */
    readonly dayClass: DayClass;

    constructor (
        day: DayOfTheWeek,
        dayClass: DayClass
    ) {
        this.day = day;
        this.dayClass = dayClass;
    }

    /**
     * @summary Restructures an object into a DayDefinition
     * @description
     *
     * This takes an `object` and converts it to a `DayDefinition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DayDefinition`.
     * @returns {DayDefinition}
     */
    public static _from_object (_o: { [_K in keyof (DayDefinition)]: (DayDefinition)[_K] }): DayDefinition {
        return new DayDefinition(_o.day, _o.dayClass);
    }

        /**
         * @summary The enum used as the type of the component `day`
         * @public
         * @static
         */

    public static _enum_for_day = _enum_for_DayOfTheWeek;
}

/**
 * @summary The Leading Root Component Types of DayDefinition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DayDefinition: $.ComponentSpec[] = [
    new $.ComponentSpec("day", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dayClass", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DayDefinition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DayDefinition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DayDefinition
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * @constant
 */
export
const _extension_additions_list_spec_for_DayDefinition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DayDefinition: $.ASN1Decoder<DayDefinition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DayDefinition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DayDefinition (el: _Element): DayDefinition {
    if (!_cached_decoder_for_DayDefinition) { _cached_decoder_for_DayDefinition = function (el: _Element): DayDefinition {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DayDefinition contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "day";
    sequence[1].name = "dayClass";
    const day: DayOfTheWeek = $._decode_implicit<DayOfTheWeek>(() => _decode_DayOfTheWeek)(sequence[0]);
    const dayClass: DayClass = $._decode_explicit<DayClass>(() => _decode_DayClass)(sequence[1]);
    return new DayDefinition(
        day,
        dayClass,

    );
}; }
    return _cached_decoder_for_DayDefinition(el);
}

let _cached_encoder_for_DayDefinition: $.ASN1Encoder<DayDefinition> | null = null;

/**
 * @summary Encodes a(n) DayDefinition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DayDefinition, encoded as an ASN.1 Element.
 */
export
function _encode_DayDefinition (value: DayDefinition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DayDefinition) { _cached_encoder_for_DayDefinition = function (value: DayDefinition, _elGetter: $.ASN1Encoder<DayDefinition>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DayOfTheWeek, $.BER)(value.day, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_DayClass, $.BER)(value.dayClass, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_DayDefinition(value, elGetter);
}


/* eslint-enable */
