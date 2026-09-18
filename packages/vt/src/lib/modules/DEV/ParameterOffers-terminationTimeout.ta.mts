/* eslint-disable */
import {
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
import { TimeOffer, _decode_TimeOffer, _encode_TimeOffer } from "../DEV/TimeOffer.ta.mjs";
// export { TimeOffer, _decode_TimeOffer, _encode_TimeOffer } from "../DEV/TimeOffer.ta.mjs";
import { ParameterOffers_terminationTimeout_eventId, _decode_ParameterOffers_terminationTimeout_eventId, _encode_ParameterOffers_terminationTimeout_eventId } from "../DEV/ParameterOffers-terminationTimeout-eventId.ta.mjs";
// export { ParameterOffers_terminationTimeout_eventId, _decode_ParameterOffers_terminationTimeout_eventId, _encode_ParameterOffers_terminationTimeout_eventId } from "../DEV/ParameterOffers-terminationTimeout-eventId.ta.mjs";


/**
 * @summary ParameterOffers_terminationTimeout
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-terminationTimeout ::= SEQUENCE {
 *     timeOffer   TimeOffer,
 *     eventId     SEQUENCE {
 *         integer     G.IntegerOffer OPTIONAL,
 *         nul         NULL OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers_terminationTimeout {
    constructor (
        /**
         * @summary `timeOffer`.
         * @public
         * @readonly
         */
        readonly timeOffer: TimeOffer,
        /**
         * @summary `eventId`.
         * @public
         * @readonly
         */
        readonly eventId: ParameterOffers_terminationTimeout_eventId
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers_terminationTimeout
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers_terminationTimeout`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers_terminationTimeout`.
     * @returns {ParameterOffers_terminationTimeout}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers_terminationTimeout)]: (ParameterOffers_terminationTimeout)[_K] }): ParameterOffers_terminationTimeout {
        return new ParameterOffers_terminationTimeout(_o.timeOffer, _o.eventId);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers_terminationTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers_terminationTimeout: $.ComponentSpec[] = [
    new $.ComponentSpec("timeOffer", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("eventId", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers_terminationTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers_terminationTimeout: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers_terminationTimeout
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers_terminationTimeout: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers_terminationTimeout: $.ASN1Decoder<ParameterOffers_terminationTimeout> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_terminationTimeout
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_terminationTimeout (el: _Element): ParameterOffers_terminationTimeout {
    if (!_cached_decoder_for_ParameterOffers_terminationTimeout) { _cached_decoder_for_ParameterOffers_terminationTimeout = function (el: _Element): ParameterOffers_terminationTimeout {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ParameterOffers-terminationTimeout contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "timeOffer";
    sequence[1].name = "eventId";
    const timeOffer: TimeOffer = _decode_TimeOffer(sequence[0]);
    const eventId: ParameterOffers_terminationTimeout_eventId = _decode_ParameterOffers_terminationTimeout_eventId(sequence[1]);
    return new ParameterOffers_terminationTimeout(
        timeOffer,
        eventId,

    );
}; }
    return _cached_decoder_for_ParameterOffers_terminationTimeout(el);
}

let _cached_encoder_for_ParameterOffers_terminationTimeout: $.ASN1Encoder<ParameterOffers_terminationTimeout> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_terminationTimeout into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_terminationTimeout, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_terminationTimeout (value: ParameterOffers_terminationTimeout, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_terminationTimeout) { _cached_encoder_for_ParameterOffers_terminationTimeout = function (value: ParameterOffers_terminationTimeout): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TimeOffer(value.timeOffer, $.BER),
            /* REQUIRED   */ _encode_ParameterOffers_terminationTimeout_eventId(value.eventId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers_terminationTimeout(value, elGetter);
}


/* eslint-enable */
