/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";
// export { Daytime, _decode_Daytime, _encode_Daytime } from "../TS33128Payloads/Daytime.ta.mjs";


/**
 * @summary ScheduledCommunicationTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScheduledCommunicationTime ::= SEQUENCE
 * {
 *     days [1] SEQUENCE OF Daytime
 * }
 * ```
 * 
 * @class
 */
export
class ScheduledCommunicationTime {
    constructor (
        /**
         * @summary `days`.
         * @public
         * @readonly
         */
        readonly days: Daytime[]
    ) {}

    /**
     * @summary Restructures an object into a ScheduledCommunicationTime
     * @description
     * 
     * This takes an `object` and converts it to a `ScheduledCommunicationTime`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScheduledCommunicationTime`.
     * @returns {ScheduledCommunicationTime}
     */
    public static _from_object (_o: { [_K in keyof (ScheduledCommunicationTime)]: (ScheduledCommunicationTime)[_K] }): ScheduledCommunicationTime {
        return new ScheduledCommunicationTime(_o.days);
    }


}

/**
 * @summary The Leading Root Component Types of ScheduledCommunicationTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScheduledCommunicationTime: $.ComponentSpec[] = [
    new $.ComponentSpec("days", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ScheduledCommunicationTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScheduledCommunicationTime: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScheduledCommunicationTime
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScheduledCommunicationTime: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScheduledCommunicationTime: $.ASN1Decoder<ScheduledCommunicationTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScheduledCommunicationTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScheduledCommunicationTime (el: _Element): ScheduledCommunicationTime {
    if (!_cached_decoder_for_ScheduledCommunicationTime) { _cached_decoder_for_ScheduledCommunicationTime = function (el: _Element): ScheduledCommunicationTime {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("ScheduledCommunicationTime contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "days";
    let days!: Daytime[];
    days = $._decode_implicit<Daytime[]>(() => $._decodeSequenceOf<Daytime>(() => _decode_Daytime))(sequence[0]);
    return new ScheduledCommunicationTime(
        days,

    );
}; }
    return _cached_decoder_for_ScheduledCommunicationTime(el);
}

let _cached_encoder_for_ScheduledCommunicationTime: $.ASN1Encoder<ScheduledCommunicationTime> | null = null;

/**
 * @summary Encodes a(n) ScheduledCommunicationTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScheduledCommunicationTime, encoded as an ASN.1 Element.
 */
export
function _encode_ScheduledCommunicationTime (value: ScheduledCommunicationTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScheduledCommunicationTime) { _cached_encoder_for_ScheduledCommunicationTime = function (value: ScheduledCommunicationTime, elGetter: $.ASN1Encoder<ScheduledCommunicationTime>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Daytime>(() => _encode_Daytime, $.BER), $.BER)(value.days, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ScheduledCommunicationTime(value, elGetter);
}


/* eslint-enable */
