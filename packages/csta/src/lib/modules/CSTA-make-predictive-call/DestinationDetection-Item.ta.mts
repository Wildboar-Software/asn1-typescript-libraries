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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { DestinationCondition, _enum_for_DestinationCondition, DestinationCondition_humanVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, humanVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DestinationCondition_answeringMachine /* IMPORTED_LONG_ENUMERATION_ITEM */, answeringMachine /* IMPORTED_SHORT_ENUMERATION_ITEM */, DestinationCondition_facsimileMachine /* IMPORTED_LONG_ENUMERATION_ITEM */, facsimileMachine /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DestinationCondition, _encode_DestinationCondition } from "../CSTA-make-predictive-call/DestinationCondition.ta.mjs";
// export { DestinationCondition, _enum_for_DestinationCondition, DestinationCondition_humanVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, humanVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DestinationCondition_answeringMachine /* IMPORTED_LONG_ENUMERATION_ITEM */, answeringMachine /* IMPORTED_SHORT_ENUMERATION_ITEM */, DestinationCondition_facsimileMachine /* IMPORTED_LONG_ENUMERATION_ITEM */, facsimileMachine /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DestinationCondition, _encode_DestinationCondition } from "../CSTA-make-predictive-call/DestinationCondition.ta.mjs";
import { DetectionAction, _enum_for_DetectionAction, DetectionAction_clearCalledConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, clearCalledConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, DetectionAction_remainConnected /* IMPORTED_LONG_ENUMERATION_ITEM */, remainConnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DetectionAction, _encode_DetectionAction } from "../CSTA-make-predictive-call/DetectionAction.ta.mjs";
// export { DetectionAction, _enum_for_DetectionAction, DetectionAction_clearCalledConnection /* IMPORTED_LONG_ENUMERATION_ITEM */, clearCalledConnection /* IMPORTED_SHORT_ENUMERATION_ITEM */, DetectionAction_remainConnected /* IMPORTED_LONG_ENUMERATION_ITEM */, remainConnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DetectionAction, _encode_DetectionAction } from "../CSTA-make-predictive-call/DetectionAction.ta.mjs";


/**
 * @summary DestinationDetection_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationDetection-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DestinationDetection_Item {
    constructor (
        /**
         * @summary `destinationCondition`.
         * @public
         * @readonly
         */
        readonly destinationCondition: DestinationCondition,
        /**
         * @summary `detectionAction`.
         * @public
         * @readonly
         */
        readonly detectionAction: DetectionAction
    ) {}

    /**
     * @summary Restructures an object into a DestinationDetection_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DestinationDetection_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DestinationDetection_Item`.
     * @returns {DestinationDetection_Item}
     */
    public static _from_object (_o: { [_K in keyof (DestinationDetection_Item)]: (DestinationDetection_Item)[_K] }): DestinationDetection_Item {
        return new DestinationDetection_Item(_o.destinationCondition, _o.detectionAction);
    }

        /**
         * @summary The enum used as the type of the component `destinationCondition`
         * @public
         * @static
         */

    public static _enum_for_destinationCondition = _enum_for_DestinationCondition;        /**
         * @summary The enum used as the type of the component `detectionAction`
         * @public
         * @static
         */

    public static _enum_for_detectionAction = _enum_for_DetectionAction;
}

/**
 * @summary The Leading Root Component Types of DestinationDetection_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DestinationDetection_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationCondition", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("detectionAction", false, $.hasTag(_TagClass.universal, 10), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DestinationDetection_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DestinationDetection_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DestinationDetection_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DestinationDetection_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DestinationDetection_Item: $.ASN1Decoder<DestinationDetection_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationDetection_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationDetection_Item (el: _Element): DestinationDetection_Item {
    if (!_cached_decoder_for_DestinationDetection_Item) { _cached_decoder_for_DestinationDetection_Item = function (el: _Element): DestinationDetection_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DestinationDetection-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "destinationCondition";
    sequence[1].name = "detectionAction";
    let destinationCondition!: DestinationCondition;
    let detectionAction!: DetectionAction;
    destinationCondition = _decode_DestinationCondition(sequence[0]);
    detectionAction = _decode_DetectionAction(sequence[1]);
    return new DestinationDetection_Item(
        destinationCondition,
        detectionAction,

    );
}; }
    return _cached_decoder_for_DestinationDetection_Item(el);
}

let _cached_encoder_for_DestinationDetection_Item: $.ASN1Encoder<DestinationDetection_Item> | null = null;

/**
 * @summary Encodes a(n) DestinationDetection_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationDetection_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationDetection_Item (value: DestinationDetection_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationDetection_Item) { _cached_encoder_for_DestinationDetection_Item = function (value: DestinationDetection_Item, elGetter: $.ASN1Encoder<DestinationDetection_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DestinationCondition(value.destinationCondition, $.BER),
            /* REQUIRED   */ _encode_DetectionAction(value.detectionAction, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DestinationDetection_Item(value, elGetter);
}


/* eslint-enable */
