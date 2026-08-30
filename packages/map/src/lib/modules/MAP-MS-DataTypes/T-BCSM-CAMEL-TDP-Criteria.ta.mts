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
import { T_BcsmTriggerDetectionPoint, _enum_for_T_BcsmTriggerDetectionPoint, T_BcsmTriggerDetectionPoint_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, T_BcsmTriggerDetectionPoint_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, T_BcsmTriggerDetectionPoint_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_T_BcsmTriggerDetectionPoint, _encode_T_BcsmTriggerDetectionPoint } from "../MAP-MS-DataTypes/T-BcsmTriggerDetectionPoint.ta.mjs";
// export { T_BcsmTriggerDetectionPoint, _enum_for_T_BcsmTriggerDetectionPoint, T_BcsmTriggerDetectionPoint_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, T_BcsmTriggerDetectionPoint_tBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, T_BcsmTriggerDetectionPoint_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_T_BcsmTriggerDetectionPoint, _encode_T_BcsmTriggerDetectionPoint } from "../MAP-MS-DataTypes/T-BcsmTriggerDetectionPoint.ta.mjs";
import { BasicServiceCriteria, _decode_BasicServiceCriteria, _encode_BasicServiceCriteria } from "../MAP-MS-DataTypes/BasicServiceCriteria.ta.mjs";
// export { BasicServiceCriteria, _decode_BasicServiceCriteria, _encode_BasicServiceCriteria } from "../MAP-MS-DataTypes/BasicServiceCriteria.ta.mjs";
import { T_CauseValueCriteria, _decode_T_CauseValueCriteria, _encode_T_CauseValueCriteria } from "../MAP-MS-DataTypes/T-CauseValueCriteria.ta.mjs";
// export { T_CauseValueCriteria, _decode_T_CauseValueCriteria, _encode_T_CauseValueCriteria } from "../MAP-MS-DataTypes/T-CauseValueCriteria.ta.mjs";


/**
 * @summary T_BCSM_CAMEL_TDP_Criteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-BCSM-CAMEL-TDP-Criteria ::= SEQUENCE {
 *     t-BCSM-TriggerDetectionPoint    T-BcsmTriggerDetectionPoint,    
 *     basicServiceCriteria    [0] BasicServiceCriteria    OPTIONAL,
 *     t-CauseValueCriteria    [1] T-CauseValueCriteria    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class T_BCSM_CAMEL_TDP_Criteria {
    constructor (
        /**
         * @summary `t_BCSM_TriggerDetectionPoint`.
         * @public
         * @readonly
         */
        readonly t_BCSM_TriggerDetectionPoint: T_BcsmTriggerDetectionPoint,
        /**
         * @summary `basicServiceCriteria`.
         * @public
         * @readonly
         */
        readonly basicServiceCriteria: OPTIONAL<BasicServiceCriteria>,
        /**
         * @summary `t_CauseValueCriteria`.
         * @public
         * @readonly
         */
        readonly t_CauseValueCriteria: OPTIONAL<T_CauseValueCriteria>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a T_BCSM_CAMEL_TDP_Criteria
     * @description
     * 
     * This takes an `object` and converts it to a `T_BCSM_CAMEL_TDP_Criteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `T_BCSM_CAMEL_TDP_Criteria`.
     * @returns {T_BCSM_CAMEL_TDP_Criteria}
     */
    public static _from_object (_o: { [_K in keyof (T_BCSM_CAMEL_TDP_Criteria)]: (T_BCSM_CAMEL_TDP_Criteria)[_K] }): T_BCSM_CAMEL_TDP_Criteria {
        return new T_BCSM_CAMEL_TDP_Criteria(_o.t_BCSM_TriggerDetectionPoint, _o.basicServiceCriteria, _o.t_CauseValueCriteria, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `t_BCSM_TriggerDetectionPoint`
         * @public
         * @static
         */

    public static _enum_for_t_BCSM_TriggerDetectionPoint = _enum_for_T_BcsmTriggerDetectionPoint;
}

/**
 * @summary The Leading Root Component Types of T_BCSM_CAMEL_TDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_T_BCSM_CAMEL_TDP_Criteria: $.ComponentSpec[] = [
    new $.ComponentSpec("t-BCSM-TriggerDetectionPoint", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("basicServiceCriteria", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("t-CauseValueCriteria", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of T_BCSM_CAMEL_TDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_T_BCSM_CAMEL_TDP_Criteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of T_BCSM_CAMEL_TDP_Criteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_T_BCSM_CAMEL_TDP_Criteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_T_BCSM_CAMEL_TDP_Criteria: $.ASN1Decoder<T_BCSM_CAMEL_TDP_Criteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_BCSM_CAMEL_TDP_Criteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_BCSM_CAMEL_TDP_Criteria (el: _Element): T_BCSM_CAMEL_TDP_Criteria {
    if (!_cached_decoder_for_T_BCSM_CAMEL_TDP_Criteria) { _cached_decoder_for_T_BCSM_CAMEL_TDP_Criteria = function (el: _Element): T_BCSM_CAMEL_TDP_Criteria {
    let t_BCSM_TriggerDetectionPoint!: T_BcsmTriggerDetectionPoint;
    let basicServiceCriteria: OPTIONAL<BasicServiceCriteria>;
    let t_CauseValueCriteria: OPTIONAL<T_CauseValueCriteria>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "t-BCSM-TriggerDetectionPoint": (_el: _Element): void => { t_BCSM_TriggerDetectionPoint = _decode_T_BcsmTriggerDetectionPoint(_el); },
        "basicServiceCriteria": (_el: _Element): void => { basicServiceCriteria = $._decode_implicit<BasicServiceCriteria>(() => _decode_BasicServiceCriteria)(_el); },
        "t-CauseValueCriteria": (_el: _Element): void => { t_CauseValueCriteria = $._decode_implicit<T_CauseValueCriteria>(() => _decode_T_CauseValueCriteria)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_T_BCSM_CAMEL_TDP_Criteria,
        _extension_additions_list_spec_for_T_BCSM_CAMEL_TDP_Criteria,
        _root_component_type_list_2_spec_for_T_BCSM_CAMEL_TDP_Criteria,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new T_BCSM_CAMEL_TDP_Criteria(
        t_BCSM_TriggerDetectionPoint,
        basicServiceCriteria,
        t_CauseValueCriteria,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_T_BCSM_CAMEL_TDP_Criteria(el);
}

let _cached_encoder_for_T_BCSM_CAMEL_TDP_Criteria: $.ASN1Encoder<T_BCSM_CAMEL_TDP_Criteria> | null = null;

/**
 * @summary Encodes a(n) T_BCSM_CAMEL_TDP_Criteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_BCSM_CAMEL_TDP_Criteria, encoded as an ASN.1 Element.
 */
export
function _encode_T_BCSM_CAMEL_TDP_Criteria (value: T_BCSM_CAMEL_TDP_Criteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_BCSM_CAMEL_TDP_Criteria) { _cached_encoder_for_T_BCSM_CAMEL_TDP_Criteria = function (value: T_BCSM_CAMEL_TDP_Criteria, elGetter: $.ASN1Encoder<T_BCSM_CAMEL_TDP_Criteria>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_T_BcsmTriggerDetectionPoint(value.t_BCSM_TriggerDetectionPoint, $.BER),
            /* IF_ABSENT  */ ((value.basicServiceCriteria === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_BasicServiceCriteria, $.BER)(value.basicServiceCriteria, $.BER)),
            /* IF_ABSENT  */ ((value.t_CauseValueCriteria === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_T_CauseValueCriteria, $.BER)(value.t_CauseValueCriteria, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_T_BCSM_CAMEL_TDP_Criteria(value, elGetter);
}


/* eslint-enable */
