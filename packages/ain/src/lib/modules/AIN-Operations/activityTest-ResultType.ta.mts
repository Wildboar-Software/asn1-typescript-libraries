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
import { ActResult, _decode_ActResult, _encode_ActResult } from "../AIN-Parameters/ActResult.ta.mjs";
// export { ActResult, _decode_ActResult, _encode_ActResult } from "../AIN-Parameters/ActResult.ta.mjs";


/**
 * @summary activityTest_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * activityTest-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class activityTest_ResultType {
    constructor (
        /**
         * @summary `actResult`.
         * @public
         * @readonly
         */
        readonly actResult: ActResult
    ) {}

    /**
     * @summary Restructures an object into a activityTest_ResultType
     * @description
     * 
     * This takes an `object` and converts it to a `activityTest_ResultType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `activityTest_ResultType`.
     * @returns {activityTest_ResultType}
     */
    public static _from_object (_o: { [_K in keyof (activityTest_ResultType)]: (activityTest_ResultType)[_K] }): activityTest_ResultType {
        return new activityTest_ResultType(_o.actResult);
    }


}

/**
 * @summary The Leading Root Component Types of activityTest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_activityTest_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec("actResult", false, $.hasTag(_TagClass.context, 164))
];

/**
 * @summary The Trailing Root Component Types of activityTest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_activityTest_ResultType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of activityTest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_activityTest_ResultType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_activityTest_ResultType: $.ASN1Decoder<activityTest_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) activityTest_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_activityTest_ResultType (el: _Element): activityTest_ResultType {
    if (!_cached_decoder_for_activityTest_ResultType) { _cached_decoder_for_activityTest_ResultType = function (el: _Element): activityTest_ResultType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("activityTest-ResultType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "actResult";
    let actResult!: ActResult;
    actResult = _decode_ActResult(sequence[0]);
    return new activityTest_ResultType(
        actResult,

    );
}; }
    return _cached_decoder_for_activityTest_ResultType(el);
}

let _cached_encoder_for_activityTest_ResultType: $.ASN1Encoder<activityTest_ResultType> | null = null;

/**
 * @summary Encodes a(n) activityTest_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The activityTest_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_activityTest_ResultType (value: activityTest_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_activityTest_ResultType) { _cached_encoder_for_activityTest_ResultType = function (value: activityTest_ResultType, elGetter: $.ASN1Encoder<activityTest_ResultType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ActResult(value.actResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_activityTest_ResultType(value, elGetter);
}


/* eslint-enable */
