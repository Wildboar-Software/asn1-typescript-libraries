/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { ParameterValues_terminationEventList_Item_eventId, _decode_ParameterValues_terminationEventList_Item_eventId, _encode_ParameterValues_terminationEventList_Item_eventId } from "../DEV/ParameterValues-terminationEventList-Item-eventId.ta.mjs";
// export { ParameterValues_terminationEventList_Item_eventId, _decode_ParameterValues_terminationEventList_Item_eventId, _encode_ParameterValues_terminationEventList_Item_eventId } from "../DEV/ParameterValues-terminationEventList-Item-eventId.ta.mjs";


/**
 * @summary ParameterValues_terminationEventList_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues-terminationEventList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ParameterValues_terminationEventList_Item {
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
        readonly eventId: ParameterValues_terminationEventList_Item_eventId
    ) {}

    /**
     * @summary Restructures an object into a ParameterValues_terminationEventList_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterValues_terminationEventList_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterValues_terminationEventList_Item`.
     * @returns {ParameterValues_terminationEventList_Item}
     */
    public static _from_object (_o: { [_K in keyof (ParameterValues_terminationEventList_Item)]: (ParameterValues_terminationEventList_Item)[_K] }): ParameterValues_terminationEventList_Item {
        return new ParameterValues_terminationEventList_Item(_o.event, _o.eventId);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterValues_terminationEventList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterValues_terminationEventList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("event", false, $.hasAnyTag),
    new $.ComponentSpec("eventId", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ParameterValues_terminationEventList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterValues_terminationEventList_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterValues_terminationEventList_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterValues_terminationEventList_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterValues_terminationEventList_Item: $.ASN1Decoder<ParameterValues_terminationEventList_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues_terminationEventList_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues_terminationEventList_Item (el: _Element): ParameterValues_terminationEventList_Item {
    if (!_cached_decoder_for_ParameterValues_terminationEventList_Item) { _cached_decoder_for_ParameterValues_terminationEventList_Item = function (el: _Element): ParameterValues_terminationEventList_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ParameterValues-terminationEventList-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "event";
    sequence[1].name = "eventId";
    let event!: _Element;
    let eventId!: ParameterValues_terminationEventList_Item_eventId;
    event = $._decodeAny(sequence[0]);
    eventId = _decode_ParameterValues_terminationEventList_Item_eventId(sequence[1]);
    return new ParameterValues_terminationEventList_Item(
        event,
        eventId,

    );
}; }
    return _cached_decoder_for_ParameterValues_terminationEventList_Item(el);
}

let _cached_encoder_for_ParameterValues_terminationEventList_Item: $.ASN1Encoder<ParameterValues_terminationEventList_Item> | null = null;

/**
 * @summary Encodes a(n) ParameterValues_terminationEventList_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues_terminationEventList_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues_terminationEventList_Item (value: ParameterValues_terminationEventList_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues_terminationEventList_Item) { _cached_encoder_for_ParameterValues_terminationEventList_Item = function (value: ParameterValues_terminationEventList_Item, elGetter: $.ASN1Encoder<ParameterValues_terminationEventList_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeAny(value.event, $.BER),
            /* REQUIRED   */ _encode_ParameterValues_terminationEventList_Item_eventId(value.eventId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterValues_terminationEventList_Item(value, elGetter);
}


/* eslint-enable */
