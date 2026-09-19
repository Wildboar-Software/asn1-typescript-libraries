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
import { CallType, _decode_CallType, _encode_CallType } from "../AIN-Parameters/CallType.ta.mjs";
// export { CallType, _decode_CallType, _encode_CallType } from "../AIN-Parameters/CallType.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary callTypeRequest_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * callTypeRequest-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class callTypeRequest_ResultType {
    constructor (
        /**
         * @summary `callType`.
         * @public
         * @readonly
         */
        readonly callType: CallType,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a callTypeRequest_ResultType
     * @description
     * 
     * This takes an `object` and converts it to a `callTypeRequest_ResultType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `callTypeRequest_ResultType`.
     * @returns {callTypeRequest_ResultType}
     */
    public static _from_object (_o: { [_K in keyof (callTypeRequest_ResultType)]: (callTypeRequest_ResultType)[_K] }): callTypeRequest_ResultType {
        return new callTypeRequest_ResultType(_o.callType, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of callTypeRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_callTypeRequest_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec("callType", false, $.hasTag(_TagClass.context, 165)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of callTypeRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_callTypeRequest_ResultType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of callTypeRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_callTypeRequest_ResultType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_callTypeRequest_ResultType: $.ASN1Decoder<callTypeRequest_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) callTypeRequest_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_callTypeRequest_ResultType (el: _Element): callTypeRequest_ResultType {
    if (!_cached_decoder_for_callTypeRequest_ResultType) { _cached_decoder_for_callTypeRequest_ResultType = function (el: _Element): callTypeRequest_ResultType {
    let callType!: CallType;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "callType": (_el: _Element): void => { callType = _decode_CallType(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_callTypeRequest_ResultType,
        _extension_additions_list_spec_for_callTypeRequest_ResultType,
        _root_component_type_list_2_spec_for_callTypeRequest_ResultType,
        undefined,
    );
    return new callTypeRequest_ResultType(
        callType,
        extensionParameter
    );
}; }
    return _cached_decoder_for_callTypeRequest_ResultType(el);
}

let _cached_encoder_for_callTypeRequest_ResultType: $.ASN1Encoder<callTypeRequest_ResultType> | null = null;

/**
 * @summary Encodes a(n) callTypeRequest_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The callTypeRequest_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_callTypeRequest_ResultType (value: callTypeRequest_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_callTypeRequest_ResultType) { _cached_encoder_for_callTypeRequest_ResultType = function (value: callTypeRequest_ResultType, elGetter: $.ASN1Encoder<callTypeRequest_ResultType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CallType(value.callType, $.BER),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_callTypeRequest_ResultType(value, elGetter);
}


/* eslint-enable */
