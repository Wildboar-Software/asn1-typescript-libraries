/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
// export { AINDigits, _decode_AINDigits, _encode_AINDigits } from "../AIN-Parameters/AINDigits.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../AIN-Parameters/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../AIN-Parameters/Timestamp.ta.mjs";


/**
 * @summary Incoming
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Incoming ::= SEQUENCE{
 *         aINDigits AINDigits,
 *         timestamp Timestamp--See GR-246-CORE for values of this field.
 *     }
 * ```
 * 
 * @class
 */
export
class Incoming {
    constructor (
        /**
         * @summary `aINDigits`.
         * @public
         * @readonly
         */
        readonly aINDigits: AINDigits,
        /**
         * @summary `timestamp`.
         * @public
         * @readonly
         */
        readonly timestamp: Timestamp
    ) {}

    /**
     * @summary Restructures an object into a Incoming
     * @description
     * 
     * This takes an `object` and converts it to a `Incoming`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Incoming`.
     * @returns {Incoming}
     */
    public static _from_object (_o: { [_K in keyof (Incoming)]: (Incoming)[_K] }): Incoming {
        return new Incoming(_o.aINDigits, _o.timestamp);
    }


}

/**
 * @summary The Leading Root Component Types of Incoming
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Incoming: $.ComponentSpec[] = [
    new $.ComponentSpec("aINDigits", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("timestamp", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of Incoming
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Incoming: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Incoming
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Incoming: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Incoming: $.ASN1Decoder<Incoming> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Incoming
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Incoming (el: _Element): Incoming {
    if (!_cached_decoder_for_Incoming) { _cached_decoder_for_Incoming = function (el: _Element): Incoming {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("Incoming contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "aINDigits";
    sequence[1].name = "timestamp";
    let aINDigits!: AINDigits;
    let timestamp!: Timestamp;
    aINDigits = _decode_AINDigits(sequence[0]);
    timestamp = _decode_Timestamp(sequence[1]);
    return new Incoming(
        aINDigits,
        timestamp,

    );
}; }
    return _cached_decoder_for_Incoming(el);
}

let _cached_encoder_for_Incoming: $.ASN1Encoder<Incoming> | null = null;

/**
 * @summary Encodes a(n) Incoming into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Incoming, encoded as an ASN.1 Element.
 */
export
function _encode_Incoming (value: Incoming, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Incoming) { _cached_encoder_for_Incoming = function (value: Incoming, elGetter: $.ASN1Encoder<Incoming>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AINDigits(value.aINDigits, $.BER),
            /* REQUIRED   */ _encode_Timestamp(value.timestamp, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Incoming(value, elGetter);
}


/* eslint-enable */
