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
import { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
// export { FailureCause, _decode_FailureCause, _encode_FailureCause } from "../AIN-Parameters/FailureCause.ta.mjs";
import { FailureCauseData, _decode_FailureCauseData, _encode_FailureCauseData } from "../AIN-Parameters/FailureCauseData.ta.mjs";
// export { FailureCauseData, _decode_FailureCauseData, _encode_FailureCauseData } from "../AIN-Parameters/FailureCauseData.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary failureReport_ParameterType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * failureReport-ParameterType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class failureReport_ParameterType {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: FailureCause,
        /**
         * @summary `failureCauseData`.
         * @public
         * @readonly
         */
        readonly failureCauseData: OPTIONAL<FailureCauseData>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a failureReport_ParameterType
     * @description
     * 
     * This takes an `object` and converts it to a `failureReport_ParameterType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `failureReport_ParameterType`.
     * @returns {failureReport_ParameterType}
     */
    public static _from_object (_o: { [_K in keyof (failureReport_ParameterType)]: (failureReport_ParameterType)[_K] }): failureReport_ParameterType {
        return new failureReport_ParameterType(_o.failureCause, _o.failureCauseData, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of failureReport_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_failureReport_ParameterType: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("failureCauseData", true, $.hasTag(_TagClass.context, 112)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of failureReport_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_failureReport_ParameterType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of failureReport_ParameterType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_failureReport_ParameterType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_failureReport_ParameterType: $.ASN1Decoder<failureReport_ParameterType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) failureReport_ParameterType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_failureReport_ParameterType (el: _Element): failureReport_ParameterType {
    if (!_cached_decoder_for_failureReport_ParameterType) { _cached_decoder_for_failureReport_ParameterType = function (el: _Element): failureReport_ParameterType {
    let failureCause!: FailureCause;
    let failureCauseData: OPTIONAL<FailureCauseData>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "failureCauseData": (_el: _Element): void => { failureCauseData = _decode_FailureCauseData(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = _decode_ExtensionParameter(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_failureReport_ParameterType,
        _extension_additions_list_spec_for_failureReport_ParameterType,
        _root_component_type_list_2_spec_for_failureReport_ParameterType,
        undefined,
    );
    return new failureReport_ParameterType(
        failureCause,
        failureCauseData,
        extensionParameter
    );
}; }
    return _cached_decoder_for_failureReport_ParameterType(el);
}

let _cached_encoder_for_failureReport_ParameterType: $.ASN1Encoder<failureReport_ParameterType> | null = null;

/**
 * @summary Encodes a(n) failureReport_ParameterType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The failureReport_ParameterType, encoded as an ASN.1 Element.
 */
export
function _encode_failureReport_ParameterType (value: failureReport_ParameterType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_failureReport_ParameterType) { _cached_encoder_for_failureReport_ParameterType = function (value: failureReport_ParameterType, elGetter: $.ASN1Encoder<failureReport_ParameterType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_FailureCause(value.failureCause, $.BER),
            /* IF_ABSENT  */ ((value.failureCauseData === undefined) ? undefined : _encode_FailureCauseData(value.failureCauseData, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : _encode_ExtensionParameter(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_failureReport_ParameterType(value, elGetter);
}


/* eslint-enable */
