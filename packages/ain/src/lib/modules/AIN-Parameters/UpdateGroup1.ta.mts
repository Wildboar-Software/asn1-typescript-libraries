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
import { Service1, _enum_for_Service1, Service1_messageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, messageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_visualMessageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, visualMessageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_anonymousCallRejection /* IMPORTED_LONG_ENUMERATION_ITEM */, anonymousCallRejection /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_automaticCallback /* IMPORTED_LONG_ENUMERATION_ITEM */, automaticCallback /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_automaticRecall /* IMPORTED_LONG_ENUMERATION_ITEM */, automaticRecall /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callScreening /* IMPORTED_LONG_ENUMERATION_ITEM */, callScreening /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_outsideCallingAreaAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, outsideCallingAreaAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callingIdPresentAndSuppress /* IMPORTED_LONG_ENUMERATION_ITEM */, callingIdPresentAndSuppress /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service1, _encode_Service1 } from "../AIN-Parameters/Service1.ta.mjs";
// export { Service1, _enum_for_Service1, Service1_messageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, messageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_visualMessageWaitingIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, visualMessageWaitingIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_anonymousCallRejection /* IMPORTED_LONG_ENUMERATION_ITEM */, anonymousCallRejection /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_automaticCallback /* IMPORTED_LONG_ENUMERATION_ITEM */, automaticCallback /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_automaticRecall /* IMPORTED_LONG_ENUMERATION_ITEM */, automaticRecall /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callScreening /* IMPORTED_LONG_ENUMERATION_ITEM */, callScreening /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_outsideCallingAreaAlerting /* IMPORTED_LONG_ENUMERATION_ITEM */, outsideCallingAreaAlerting /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callingIdPresentAndSuppress /* IMPORTED_LONG_ENUMERATION_ITEM */, callingIdPresentAndSuppress /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service1_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service1, _encode_Service1 } from "../AIN-Parameters/Service1.ta.mjs";
import { Action1, _decode_Action1, _encode_Action1 } from "../AIN-Parameters/Action1.ta.mjs";
// export { Action1, _decode_Action1, _encode_Action1 } from "../AIN-Parameters/Action1.ta.mjs";


/**
 * @summary UpdateGroup1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup1 ::= SEQUENCE{
 *         service1 [1] IMPLICIT Service1,
 *         action1 Action1
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup1 {
    constructor (
        /**
         * @summary `service1`.
         * @public
         * @readonly
         */
        readonly service1: Service1,
        /**
         * @summary `action1`.
         * @public
         * @readonly
         */
        readonly action1: Action1
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup1
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup1`.
     * @returns {UpdateGroup1}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup1)]: (UpdateGroup1)[_K] }): UpdateGroup1 {
        return new UpdateGroup1(_o.service1, _o.action1);
    }

        /**
         * @summary The enum used as the type of the component `service1`
         * @public
         * @static
         */

    public static _enum_for_service1 = _enum_for_Service1;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup1: $.ComponentSpec[] = [
    new $.ComponentSpec("service1", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action1", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup1: $.ASN1Decoder<UpdateGroup1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup1 (el: _Element): UpdateGroup1 {
    if (!_cached_decoder_for_UpdateGroup1) { _cached_decoder_for_UpdateGroup1 = function (el: _Element): UpdateGroup1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service1";
    sequence[1].name = "action1";
    let service1!: Service1;
    let action1!: Action1;
    service1 = $._decode_implicit<Service1>(() => _decode_Service1)(sequence[0]);
    action1 = _decode_Action1(sequence[1]);
    return new UpdateGroup1(
        service1,
        action1,

    );
}; }
    return _cached_decoder_for_UpdateGroup1(el);
}

let _cached_encoder_for_UpdateGroup1: $.ASN1Encoder<UpdateGroup1> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup1, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup1 (value: UpdateGroup1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup1) { _cached_encoder_for_UpdateGroup1 = function (value: UpdateGroup1, elGetter: $.ASN1Encoder<UpdateGroup1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service1, $.BER)(value.service1, $.BER),
            /* REQUIRED   */ _encode_Action1(value.action1, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup1(value, elGetter);
}


/* eslint-enable */
