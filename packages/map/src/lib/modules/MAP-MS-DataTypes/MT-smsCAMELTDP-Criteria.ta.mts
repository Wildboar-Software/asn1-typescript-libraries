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
import { SMS_TriggerDetectionPoint, _enum_for_SMS_TriggerDetectionPoint, SMS_TriggerDetectionPoint_sms_CollectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_CollectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_TriggerDetectionPoint_sms_DeliveryRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_DeliveryRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_TriggerDetectionPoint, _encode_SMS_TriggerDetectionPoint } from "../MAP-MS-DataTypes/SMS-TriggerDetectionPoint.ta.mjs";
// export { SMS_TriggerDetectionPoint, _enum_for_SMS_TriggerDetectionPoint, SMS_TriggerDetectionPoint_sms_CollectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_CollectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_TriggerDetectionPoint_sms_DeliveryRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, sms_DeliveryRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_TriggerDetectionPoint, _encode_SMS_TriggerDetectionPoint } from "../MAP-MS-DataTypes/SMS-TriggerDetectionPoint.ta.mjs";
import { TPDU_TypeCriterion, _decode_TPDU_TypeCriterion, _encode_TPDU_TypeCriterion } from "../MAP-MS-DataTypes/TPDU-TypeCriterion.ta.mjs";
// export { TPDU_TypeCriterion, _decode_TPDU_TypeCriterion, _encode_TPDU_TypeCriterion } from "../MAP-MS-DataTypes/TPDU-TypeCriterion.ta.mjs";


/**
 * @summary MT_smsCAMELTDP_Criteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MT-smsCAMELTDP-Criteria ::= SEQUENCE {
 *     sms-TriggerDetectionPoint    SMS-TriggerDetectionPoint,
 *     tpdu-TypeCriterion    [0]    TPDU-TypeCriterion    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class MT_smsCAMELTDP_Criteria {
    constructor (
        /**
         * @summary `sms_TriggerDetectionPoint`.
         * @public
         * @readonly
         */
        readonly sms_TriggerDetectionPoint: SMS_TriggerDetectionPoint,
        /**
         * @summary `tpdu_TypeCriterion`.
         * @public
         * @readonly
         */
        readonly tpdu_TypeCriterion: OPTIONAL<TPDU_TypeCriterion>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MT_smsCAMELTDP_Criteria
     * @description
     * 
     * This takes an `object` and converts it to a `MT_smsCAMELTDP_Criteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MT_smsCAMELTDP_Criteria`.
     * @returns {MT_smsCAMELTDP_Criteria}
     */
    public static _from_object (_o: { [_K in keyof (MT_smsCAMELTDP_Criteria)]: (MT_smsCAMELTDP_Criteria)[_K] }): MT_smsCAMELTDP_Criteria {
        return new MT_smsCAMELTDP_Criteria(_o.sms_TriggerDetectionPoint, _o.tpdu_TypeCriterion, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sms_TriggerDetectionPoint`
         * @public
         * @static
         */

    public static _enum_for_sms_TriggerDetectionPoint = _enum_for_SMS_TriggerDetectionPoint;
}

/**
 * @summary The Leading Root Component Types of MT_smsCAMELTDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MT_smsCAMELTDP_Criteria: $.ComponentSpec[] = [
    new $.ComponentSpec("sms-TriggerDetectionPoint", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("tpdu-TypeCriterion", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MT_smsCAMELTDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MT_smsCAMELTDP_Criteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MT_smsCAMELTDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MT_smsCAMELTDP_Criteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MT_smsCAMELTDP_Criteria: $.ASN1Decoder<MT_smsCAMELTDP_Criteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MT_smsCAMELTDP_Criteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MT_smsCAMELTDP_Criteria (el: _Element): MT_smsCAMELTDP_Criteria {
    if (!_cached_decoder_for_MT_smsCAMELTDP_Criteria) { _cached_decoder_for_MT_smsCAMELTDP_Criteria = function (el: _Element): MT_smsCAMELTDP_Criteria {
    let sms_TriggerDetectionPoint!: SMS_TriggerDetectionPoint;
    let tpdu_TypeCriterion: OPTIONAL<TPDU_TypeCriterion>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sms-TriggerDetectionPoint": (_el: _Element): void => { sms_TriggerDetectionPoint = _decode_SMS_TriggerDetectionPoint(_el); },
        "tpdu-TypeCriterion": (_el: _Element): void => { tpdu_TypeCriterion = $._decode_implicit<TPDU_TypeCriterion>(() => _decode_TPDU_TypeCriterion)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MT_smsCAMELTDP_Criteria,
        _extension_additions_list_spec_for_MT_smsCAMELTDP_Criteria,
        _root_component_type_list_2_spec_for_MT_smsCAMELTDP_Criteria,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MT_smsCAMELTDP_Criteria(
        sms_TriggerDetectionPoint,
        tpdu_TypeCriterion,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MT_smsCAMELTDP_Criteria(el);
}

let _cached_encoder_for_MT_smsCAMELTDP_Criteria: $.ASN1Encoder<MT_smsCAMELTDP_Criteria> | null = null;

/**
 * @summary Encodes a(n) MT_smsCAMELTDP_Criteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MT_smsCAMELTDP_Criteria, encoded as an ASN.1 Element.
 */
export
function _encode_MT_smsCAMELTDP_Criteria (value: MT_smsCAMELTDP_Criteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MT_smsCAMELTDP_Criteria) { _cached_encoder_for_MT_smsCAMELTDP_Criteria = function (value: MT_smsCAMELTDP_Criteria, elGetter: $.ASN1Encoder<MT_smsCAMELTDP_Criteria>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SMS_TriggerDetectionPoint(value.sms_TriggerDetectionPoint, $.BER),
            /* IF_ABSENT  */ ((value.tpdu_TypeCriterion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TPDU_TypeCriterion, $.BER)(value.tpdu_TypeCriterion, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MT_smsCAMELTDP_Criteria(value, elGetter);
}


/* eslint-enable */
