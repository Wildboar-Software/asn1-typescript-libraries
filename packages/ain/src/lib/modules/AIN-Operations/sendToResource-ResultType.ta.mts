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
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary sendToResource_ResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sendToResource-ResultType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class sendToResource_ResultType {
    constructor (
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a sendToResource_ResultType
     * @description
     * 
     * This takes an `object` and converts it to a `sendToResource_ResultType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `sendToResource_ResultType`.
     * @returns {sendToResource_ResultType}
     */
    public static _from_object (_o: { [_K in keyof (sendToResource_ResultType)]: (sendToResource_ResultType)[_K] }): sendToResource_ResultType {
        return new sendToResource_ResultType(_o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of sendToResource_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_sendToResource_ResultType: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of sendToResource_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_sendToResource_ResultType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of sendToResource_ResultType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_sendToResource_ResultType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_sendToResource_ResultType: $.ASN1Decoder<sendToResource_ResultType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) sendToResource_ResultType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_sendToResource_ResultType (el: _Element): sendToResource_ResultType {
    if (!_cached_decoder_for_sendToResource_ResultType) { _cached_decoder_for_sendToResource_ResultType = function (el: _Element): sendToResource_ResultType {
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_sendToResource_ResultType,
        _extension_additions_list_spec_for_sendToResource_ResultType,
        _root_component_type_list_2_spec_for_sendToResource_ResultType,
        undefined,
    );
    return new sendToResource_ResultType(
        extensionParameter
    );
}; }
    return _cached_decoder_for_sendToResource_ResultType(el);
}

let _cached_encoder_for_sendToResource_ResultType: $.ASN1Encoder<sendToResource_ResultType> | null = null;

/**
 * @summary Encodes a(n) sendToResource_ResultType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The sendToResource_ResultType, encoded as an ASN.1 Element.
 */
export
function _encode_sendToResource_ResultType (value: sendToResource_ResultType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_sendToResource_ResultType) { _cached_encoder_for_sendToResource_ResultType = function (value: sendToResource_ResultType, elGetter: $.ASN1Encoder<sendToResource_ResultType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_sendToResource_ResultType(value, elGetter);
}


/* eslint-enable */
