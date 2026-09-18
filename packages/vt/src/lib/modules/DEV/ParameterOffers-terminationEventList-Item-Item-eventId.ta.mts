/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { _decode_IntegerOffer, _encode_IntegerOffer, type IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";


/**
 * @summary ParameterOffers_terminationEventList_Item_Item_eventId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-terminationEventList-Item-Item-eventId ::= SEQUENCE {
 *     integer G.IntegerOffer OPTIONAL,
 *     nul     NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers_terminationEventList_Item_Item_eventId {
    constructor (
        /**
         * @summary `integer`.
         * @public
         * @readonly
         */
        readonly integer: OPTIONAL<IntegerOffer>,
        /**
         * @summary `nul`.
         * @public
         * @readonly
         */
        readonly nul: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers_terminationEventList_Item_Item_eventId
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers_terminationEventList_Item_Item_eventId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers_terminationEventList_Item_Item_eventId`.
     * @returns {ParameterOffers_terminationEventList_Item_Item_eventId}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers_terminationEventList_Item_Item_eventId)]: (ParameterOffers_terminationEventList_Item_Item_eventId)[_K] }): ParameterOffers_terminationEventList_Item_Item_eventId {
        return new ParameterOffers_terminationEventList_Item_Item_eventId(_o.integer, _o.nul);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers_terminationEventList_Item_Item_eventId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers_terminationEventList_Item_Item_eventId: $.ComponentSpec[] = [
    new $.ComponentSpec("integer", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("nul", true, $.hasTag(_TagClass.universal, 5))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers_terminationEventList_Item_Item_eventId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers_terminationEventList_Item_Item_eventId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers_terminationEventList_Item_Item_eventId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers_terminationEventList_Item_Item_eventId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers_terminationEventList_Item_Item_eventId: $.ASN1Decoder<ParameterOffers_terminationEventList_Item_Item_eventId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_terminationEventList_Item_Item_eventId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_terminationEventList_Item_Item_eventId (el: _Element): ParameterOffers_terminationEventList_Item_Item_eventId {
    if (!_cached_decoder_for_ParameterOffers_terminationEventList_Item_Item_eventId) { _cached_decoder_for_ParameterOffers_terminationEventList_Item_Item_eventId = function (el: _Element): ParameterOffers_terminationEventList_Item_Item_eventId {
    let integer: OPTIONAL<IntegerOffer>;
    let nul: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "integer": (_el: _Element): void => { integer = _decode_IntegerOffer(_el); },
        "nul": (_el: _Element): void => { nul = $._decodeNull(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterOffers_terminationEventList_Item_Item_eventId,
        _extension_additions_list_spec_for_ParameterOffers_terminationEventList_Item_Item_eventId,
        _root_component_type_list_2_spec_for_ParameterOffers_terminationEventList_Item_Item_eventId,
        undefined,
    );
    return new ParameterOffers_terminationEventList_Item_Item_eventId(
        integer,
        nul
    );
}; }
    return _cached_decoder_for_ParameterOffers_terminationEventList_Item_Item_eventId(el);
}

let _cached_encoder_for_ParameterOffers_terminationEventList_Item_Item_eventId: $.ASN1Encoder<ParameterOffers_terminationEventList_Item_Item_eventId> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_terminationEventList_Item_Item_eventId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_terminationEventList_Item_Item_eventId, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_terminationEventList_Item_Item_eventId (value: ParameterOffers_terminationEventList_Item_Item_eventId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_terminationEventList_Item_Item_eventId) { _cached_encoder_for_ParameterOffers_terminationEventList_Item_Item_eventId = function (value: ParameterOffers_terminationEventList_Item_Item_eventId): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.integer === undefined) ? undefined : _encode_IntegerOffer(value.integer, $.BER)),
            /* IF_ABSENT  */ ((value.nul === undefined) ? undefined : $._encodeNull(value.nul, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers_terminationEventList_Item_Item_eventId(value, elGetter);
}


/* eslint-enable */
