/* eslint-disable */
import {
    INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DayClass, _decode_DayClass, _encode_DayClass } from "../CSChargingDataTypes/DayClass.ta.mjs";
// export { DayClass, _decode_DayClass, _encode_DayClass } from "../CSChargingDataTypes/DayClass.ta.mjs";


/**
 * @summary DateDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DateDefinition ::= SEQUENCE {
 *    month      [0] IMPLICIT INTEGER ( 1 .. 12 ),
 *    day        [1] IMPLICIT INTEGER ( 1 .. 31 ),
 *    dayClass   [2] DayClass}
 * ```
 * 
 * @class
 */
export
class DateDefinition {
    /**
     * @summary `month`.
     * @public
     * @readonly
     */
    readonly month: INTEGER;
    /**
     * @summary `day`.
     * @public
     * @readonly
     */
    readonly day: INTEGER;
    /**
     * @summary `dayClass`.
     * @public
     * @readonly
     */
    readonly dayClass: DayClass;

    constructor (
        month: INTEGER,
        day: INTEGER,
        dayClass: DayClass
    ) {
        this.month = month;
        this.day = day;
        this.dayClass = dayClass;
    
        if (((typeof this.month === "bigint" ? Number(this.month) : this.month) < 1 || (typeof this.month === "bigint" ? Number(this.month) : this.month) > 12)) {
            throw new ASN1OverflowError("DateDefinition.month violates INTEGER range");
        }
        if (((typeof this.day === "bigint" ? Number(this.day) : this.day) < 1 || (typeof this.day === "bigint" ? Number(this.day) : this.day) > 31)) {
            throw new ASN1OverflowError("DateDefinition.day violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a DateDefinition
     * @description
     * 
     * This takes an `object` and converts it to a `DateDefinition`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DateDefinition`.
     * @returns {DateDefinition}
     */
    public static _from_object (_o: { [_K in keyof (DateDefinition)]: (DateDefinition)[_K] }): DateDefinition {
        return new DateDefinition(_o.month, _o.day, _o.dayClass);
    }


}

/**
 * @summary The Leading Root Component Types of DateDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DateDefinition: $.ComponentSpec[] = [
    new $.ComponentSpec("month", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("day", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dayClass", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DateDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DateDefinition: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DateDefinition
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DateDefinition: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DateDefinition: $.ASN1Decoder<DateDefinition> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DateDefinition
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DateDefinition (el: _Element): DateDefinition {
    if (!_cached_decoder_for_DateDefinition) { _cached_decoder_for_DateDefinition = function (el: _Element): DateDefinition {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DateDefinition contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "month";
    sequence[1].name = "day";
    sequence[2].name = "dayClass";
    let month!: INTEGER;
    let day!: INTEGER;
    let dayClass!: DayClass;
    month = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    day = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    dayClass = $._decode_explicit<DayClass>(() => _decode_DayClass)(sequence[2]);
    return new DateDefinition(
        month,
        day,
        dayClass,

    );
}; }
    return _cached_decoder_for_DateDefinition(el);
}

let _cached_encoder_for_DateDefinition: $.ASN1Encoder<DateDefinition> | null = null;

/**
 * @summary Encodes a(n) DateDefinition into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DateDefinition, encoded as an ASN.1 Element.
 */
export
function _encode_DateDefinition (value: DateDefinition, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DateDefinition) { _cached_encoder_for_DateDefinition = function (value: DateDefinition, _elGetter: $.ASN1Encoder<DateDefinition>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.month, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.day, $.BER),
        /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_DayClass, $.BER)(value.dayClass, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_DateDefinition(value, elGetter);
}


/* eslint-enable */
