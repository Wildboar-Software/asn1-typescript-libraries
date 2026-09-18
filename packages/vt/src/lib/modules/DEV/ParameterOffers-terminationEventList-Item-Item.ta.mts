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
import { ParameterOffers_terminationEventList_Item_Item_eventId, _decode_ParameterOffers_terminationEventList_Item_Item_eventId, _encode_ParameterOffers_terminationEventList_Item_Item_eventId } from "../DEV/ParameterOffers-terminationEventList-Item-Item-eventId.ta.mjs";
// export { ParameterOffers_terminationEventList_Item_Item_eventId, _decode_ParameterOffers_terminationEventList_Item_Item_eventId, _encode_ParameterOffers_terminationEventList_Item_Item_eventId } from "../DEV/ParameterOffers-terminationEventList-Item-Item-eventId.ta.mjs";


/**
 * @summary ParameterOffers_terminationEventList_Item_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-terminationEventList-Item-Item ::= SEQUENCE {
 *     event   ANY,
 *     eventId SEQUENCE {
 *         integer G.IntegerOffer OPTIONAL,
 *         nul     NULL OPTIONAL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers_terminationEventList_Item_Item {
    constructor (
        /**
         * @summary `event`.
         * @public
         * @readonly
         */
        readonly event: _Element,
        /**
         * @summary `eventId`.
         * @public
         * @readonly
         */
        readonly eventId: ParameterOffers_terminationEventList_Item_Item_eventId
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers_terminationEventList_Item_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers_terminationEventList_Item_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers_terminationEventList_Item_Item`.
     * @returns {ParameterOffers_terminationEventList_Item_Item}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers_terminationEventList_Item_Item)]: (ParameterOffers_terminationEventList_Item_Item)[_K] }): ParameterOffers_terminationEventList_Item_Item {
        return new ParameterOffers_terminationEventList_Item_Item(_o.event, _o.eventId);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers_terminationEventList_Item_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers_terminationEventList_Item_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("event", false, $.hasAnyTag),
    new $.ComponentSpec("eventId", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers_terminationEventList_Item_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers_terminationEventList_Item_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers_terminationEventList_Item_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers_terminationEventList_Item_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers_terminationEventList_Item_Item: $.ASN1Decoder<ParameterOffers_terminationEventList_Item_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_terminationEventList_Item_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_terminationEventList_Item_Item (el: _Element): ParameterOffers_terminationEventList_Item_Item {
    if (!_cached_decoder_for_ParameterOffers_terminationEventList_Item_Item) { _cached_decoder_for_ParameterOffers_terminationEventList_Item_Item = function (el: _Element): ParameterOffers_terminationEventList_Item_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ParameterOffers-terminationEventList-Item-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "event";
    sequence[1].name = "eventId";
    const event: _Element = $._decodeAny(sequence[0]);
    const eventId: ParameterOffers_terminationEventList_Item_Item_eventId = _decode_ParameterOffers_terminationEventList_Item_Item_eventId(sequence[1]);
    return new ParameterOffers_terminationEventList_Item_Item(
        event,
        eventId,

    );
}; }
    return _cached_decoder_for_ParameterOffers_terminationEventList_Item_Item(el);
}

let _cached_encoder_for_ParameterOffers_terminationEventList_Item_Item: $.ASN1Encoder<ParameterOffers_terminationEventList_Item_Item> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_terminationEventList_Item_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_terminationEventList_Item_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_terminationEventList_Item_Item (value: ParameterOffers_terminationEventList_Item_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_terminationEventList_Item_Item) { _cached_encoder_for_ParameterOffers_terminationEventList_Item_Item = function (value: ParameterOffers_terminationEventList_Item_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeAny(value.event, $.BER),
            /* REQUIRED   */ _encode_ParameterOffers_terminationEventList_Item_Item_eventId(value.eventId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers_terminationEventList_Item_Item(value, elGetter);
}


/* eslint-enable */
