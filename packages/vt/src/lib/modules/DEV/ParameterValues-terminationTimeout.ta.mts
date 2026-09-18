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
import { ParameterValues_terminationTimeout_eventId, _decode_ParameterValues_terminationTimeout_eventId, _encode_ParameterValues_terminationTimeout_eventId } from "../DEV/ParameterValues-terminationTimeout-eventId.ta.mjs";
// export { ParameterValues_terminationTimeout_eventId, _decode_ParameterValues_terminationTimeout_eventId, _encode_ParameterValues_terminationTimeout_eventId } from "../DEV/ParameterValues-terminationTimeout-eventId.ta.mjs";


/**
 * @summary ParameterValues_terminationTimeout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-terminationTimeout ::= SEQUENCE {
 *     timeMultiplier INTEGER,
 *     timeExponent INTEGER,
 *     eventId CHOICE {
 *         integer INTEGER,
 *         nul NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ParameterValues_terminationTimeout {
    constructor (
        /**
         * @summary `timeMultiplier`.
         * @public
         * @readonly
         */
        readonly timeMultiplier: INTEGER,
        /**
         * @summary `timeExponent`.
         * @public
         * @readonly
         */
        readonly timeExponent: INTEGER,
        /**
         * @summary `eventId`.
         * @public
         * @readonly
         */
        readonly eventId: ParameterValues_terminationTimeout_eventId
    ) {}

    /**
     * @summary Restructures an object into a ParameterValues_terminationTimeout
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterValues_terminationTimeout`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterValues_terminationTimeout`.
     * @returns {ParameterValues_terminationTimeout}
     */
    public static _from_object (_o: { [_K in keyof (ParameterValues_terminationTimeout)]: (ParameterValues_terminationTimeout)[_K] }): ParameterValues_terminationTimeout {
        return new ParameterValues_terminationTimeout(_o.timeMultiplier, _o.timeExponent, _o.eventId);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterValues_terminationTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterValues_terminationTimeout: $.ComponentSpec[] = [
    new $.ComponentSpec("timeMultiplier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("timeExponent", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("eventId", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ParameterValues_terminationTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterValues_terminationTimeout: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterValues_terminationTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterValues_terminationTimeout: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterValues_terminationTimeout: $.ASN1Decoder<ParameterValues_terminationTimeout> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_terminationTimeout
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_terminationTimeout (el: _Element): ParameterValues_terminationTimeout {
    if (!_cached_decoder_for_ParameterValues_terminationTimeout) { _cached_decoder_for_ParameterValues_terminationTimeout = function (el: _Element): ParameterValues_terminationTimeout {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ParameterValues-terminationTimeout contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "timeMultiplier";
    sequence[1].name = "timeExponent";
    sequence[2].name = "eventId";
    const timeMultiplier: INTEGER = $._decodeInteger(sequence[0]);
    const timeExponent: INTEGER = $._decodeInteger(sequence[1]);
    const eventId: ParameterValues_terminationTimeout_eventId = _decode_ParameterValues_terminationTimeout_eventId(sequence[2]);
    return new ParameterValues_terminationTimeout(
        timeMultiplier,
        timeExponent,
        eventId,

    );
}; }
    return _cached_decoder_for_ParameterValues_terminationTimeout(el);
}

let _cached_encoder_for_ParameterValues_terminationTimeout: $.ASN1Encoder<ParameterValues_terminationTimeout> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_terminationTimeout into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_terminationTimeout, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_terminationTimeout (value: ParameterValues_terminationTimeout, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_terminationTimeout) { _cached_encoder_for_ParameterValues_terminationTimeout = function (value: ParameterValues_terminationTimeout): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.timeMultiplier, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.timeExponent, $.BER),
            /* REQUIRED   */ _encode_ParameterValues_terminationTimeout_eventId(value.eventId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterValues_terminationTimeout(value, elGetter);
}


/* eslint-enable */
