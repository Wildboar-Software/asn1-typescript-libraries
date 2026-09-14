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



/**
 * @summary KeyInfo_paramsAndOps
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyInfo-paramsAndOps ::= SEQUENCE {
 *     parameters  ParameterType,
 *     operations  OperationsType OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class KeyInfo_paramsAndOps<ParameterType, OperationsType> {
    constructor (
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: ParameterType,
        /**
         * @summary `operations`.
         * @public
         * @readonly
         */
        readonly operations: OPTIONAL<OperationsType>
    ) {}

    /**
     * @summary Restructures an object into a KeyInfo_paramsAndOps
     * @description
     * 
     * This takes an `object` and converts it to a `KeyInfo_paramsAndOps`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyInfo_paramsAndOps`.
     * @returns {KeyInfo_paramsAndOps}
     */
    public static _from_object (_o: { [_K in keyof (KeyInfo_paramsAndOps<any, any>)]: (KeyInfo_paramsAndOps<any, any>)[_K] }): KeyInfo_paramsAndOps<any, any> {
        return new KeyInfo_paramsAndOps(_o.parameters, _o.operations);
    }


}

/**
 * @summary The Leading Root Component Types of KeyInfo_paramsAndOps
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [
    new $.ComponentSpec("parameters", false, $.hasAnyTag),
    new $.ComponentSpec("operations", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of KeyInfo_paramsAndOps
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KeyInfo_paramsAndOps
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KeyInfo_paramsAndOps: $.ASN1Decoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) KeyInfo_paramsAndOps
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_KeyInfo_paramsAndOps<ParameterType, OperationsType>(_decode_ParameterType: $.ASN1Decoder<ParameterType>, _decode_OperationsType: $.ASN1Decoder<OperationsType>): $.ASN1Decoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>> {
    return function (el: _Element): KeyInfo_paramsAndOps<ParameterType, OperationsType> {
    let parameters!: ParameterType;
    let operations: OPTIONAL<OperationsType>;
    const callbacks: $.DecodingMap = {
        "parameters": (_el: _Element): void => { parameters = _decode_ParameterType(_el); },
        "operations": (_el: _Element): void => { operations = _decode_OperationsType(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps,
        _extension_additions_list_spec_for_KeyInfo_paramsAndOps,
        _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps,
        undefined,
    );
    return new KeyInfo_paramsAndOps(
        parameters,
        operations
    );
};
}

let _cached_encoder_for_KeyInfo_paramsAndOps: $.ASN1Encoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>> | null = null;

/**
 * @summary Returns a function that will encode a(n) KeyInfo_paramsAndOps into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) KeyInfo_paramsAndOps as an ASN.1 element.
 */
export
function _get_encoder_for_KeyInfo_paramsAndOps<ParameterType, OperationsType>(_encode_ParameterType: $.ASN1Encoder<ParameterType>, _encode_OperationsType: $.ASN1Encoder<OperationsType>): $.ASN1Encoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>> {
    return function (value: KeyInfo_paramsAndOps<ParameterType, OperationsType>, elGetter: $.ASN1Encoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ParameterType(value.parameters, $.BER),
            /* IF_ABSENT  */ ((value.operations === undefined) ? undefined : _encode_OperationsType(value.operations, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
};
}

/* eslint-enable */
