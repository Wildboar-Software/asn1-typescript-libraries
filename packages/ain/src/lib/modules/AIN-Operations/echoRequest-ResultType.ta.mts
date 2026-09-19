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
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary echoRequest_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * echoRequest-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class echoRequest_ResultType {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<FailureCause>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a echoRequest_ResultType
     * @description
     * 
     * This takes an `object` and converts it to a `echoRequest_ResultType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `echoRequest_ResultType`.
     * @returns {echoRequest_ResultType}
     */
    public static _from_object (_o: { [_K in keyof (echoRequest_ResultType)]: (echoRequest_ResultType)[_K] }): echoRequest_ResultType {
        return new echoRequest_ResultType(_o.failureCause, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of echoRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_echoRequest_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 32)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of echoRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_echoRequest_ResultType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of echoRequest_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_echoRequest_ResultType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_echoRequest_ResultType: $.ASN1Decoder<echoRequest_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) echoRequest_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_echoRequest_ResultType (el: _Element): echoRequest_ResultType {
    if (!_cached_decoder_for_echoRequest_ResultType) { _cached_decoder_for_echoRequest_ResultType = function (el: _Element): echoRequest_ResultType {
    let failureCause: OPTIONAL<FailureCause>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_echoRequest_ResultType,
        _extension_additions_list_spec_for_echoRequest_ResultType,
        _root_component_type_list_2_spec_for_echoRequest_ResultType,
        undefined,
    );
    return new echoRequest_ResultType(
        failureCause,
        extensionParameter
    );
}; }
    return _cached_decoder_for_echoRequest_ResultType(el);
}

let _cached_encoder_for_echoRequest_ResultType: $.ASN1Encoder<echoRequest_ResultType> | null = null;

/**
 * @summary Encodes a(n) echoRequest_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The echoRequest_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_echoRequest_ResultType (value: echoRequest_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_echoRequest_ResultType) { _cached_encoder_for_echoRequest_ResultType = function (value: echoRequest_ResultType, elGetter: $.ASN1Encoder<echoRequest_ResultType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : _encode_FailureCause(value.failureCause, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_echoRequest_ResultType(value, elGetter);
}


/* eslint-enable */
