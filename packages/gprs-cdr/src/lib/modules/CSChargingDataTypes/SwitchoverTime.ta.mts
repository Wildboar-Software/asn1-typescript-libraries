/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SwitchoverTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwitchoverTime ::= SEQUENCE {
 *    hour       INTEGER ( 0 .. 23 ),
 *    minute     INTEGER ( 0 .. 59 ),
 *    second     INTEGER ( 0 .. 59 )}
 * ```
 * 
 * @class
 */
export
class SwitchoverTime {
    /**
     * @summary `hour`.
     * @public
     * @readonly
     */
    readonly hour: INTEGER;
    /**
     * @summary `minute`.
     * @public
     * @readonly
     */
    readonly minute: INTEGER;
    /**
     * @summary `second`.
     * @public
     * @readonly
     */
    readonly second: INTEGER;

    constructor (
        hour: INTEGER,
        minute: INTEGER,
        second: INTEGER
    ) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    
        if ((this.hour < 0 || this.hour > 23)) {
            throw new ASN1OverflowError("SwitchoverTime.hour violates INTEGER range");
        }
        if ((this.minute < 0 || this.minute > 59)) {
            throw new ASN1OverflowError("SwitchoverTime.minute violates INTEGER range");
        }
        if ((this.second < 0 || this.second > 59)) {
            throw new ASN1OverflowError("SwitchoverTime.second violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a SwitchoverTime
     * @description
     * 
     * This takes an `object` and converts it to a `SwitchoverTime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SwitchoverTime`.
     * @returns {SwitchoverTime}
     */
    public static _from_object (_o: { [_K in keyof (SwitchoverTime)]: (SwitchoverTime)[_K] }): SwitchoverTime {
        return new SwitchoverTime(_o.hour, _o.minute, _o.second);
    }


}

/**
 * @summary The Leading Root Component Types of SwitchoverTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SwitchoverTime: $.ComponentSpec[] = [
    new $.ComponentSpec("hour", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("minute", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("second", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of SwitchoverTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SwitchoverTime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SwitchoverTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SwitchoverTime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SwitchoverTime: $.ASN1Decoder<SwitchoverTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwitchoverTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwitchoverTime (el: _Element): SwitchoverTime {
    if (!_cached_decoder_for_SwitchoverTime) { _cached_decoder_for_SwitchoverTime = function (el: _Element): SwitchoverTime {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SwitchoverTime contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hour";
    sequence[1].name = "minute";
    sequence[2].name = "second";
    const hour: INTEGER = $._decodeInteger(sequence[0]);
    const minute: INTEGER = $._decodeInteger(sequence[1]);
    const second: INTEGER = $._decodeInteger(sequence[2]);
    return new SwitchoverTime(
        hour,
        minute,
        second,

    );
}; }
    return _cached_decoder_for_SwitchoverTime(el);
}

let _cached_encoder_for_SwitchoverTime: $.ASN1Encoder<SwitchoverTime> | null = null;

/**
 * @summary Encodes a(n) SwitchoverTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchoverTime, encoded as an ASN.1 Element.
 */
export
function _encode_SwitchoverTime (value: SwitchoverTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwitchoverTime) { _cached_encoder_for_SwitchoverTime = function (value: SwitchoverTime, _elGetter: $.ASN1Encoder<SwitchoverTime>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.hour, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.minute, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.second, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SwitchoverTime(value, elGetter);
}


/* eslint-enable */
