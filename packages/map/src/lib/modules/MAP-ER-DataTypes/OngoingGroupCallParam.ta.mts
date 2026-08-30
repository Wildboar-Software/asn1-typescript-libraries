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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary OngoingGroupCallParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OngoingGroupCallParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class OngoingGroupCallParam {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a OngoingGroupCallParam
     * @description
     * 
     * This takes an `object` and converts it to a `OngoingGroupCallParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OngoingGroupCallParam`.
     * @returns {OngoingGroupCallParam}
     */
    public static _from_object (_o: { [_K in keyof (OngoingGroupCallParam)]: (OngoingGroupCallParam)[_K] }): OngoingGroupCallParam {
        return new OngoingGroupCallParam(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of OngoingGroupCallParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OngoingGroupCallParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of OngoingGroupCallParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OngoingGroupCallParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OngoingGroupCallParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OngoingGroupCallParam: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OngoingGroupCallParam: $.ASN1Decoder<OngoingGroupCallParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OngoingGroupCallParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OngoingGroupCallParam (el: _Element): OngoingGroupCallParam {
    if (!_cached_decoder_for_OngoingGroupCallParam) { _cached_decoder_for_OngoingGroupCallParam = function (el: _Element): OngoingGroupCallParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OngoingGroupCallParam,
        _extension_additions_list_spec_for_OngoingGroupCallParam,
        _root_component_type_list_2_spec_for_OngoingGroupCallParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new OngoingGroupCallParam(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_OngoingGroupCallParam(el);
}

let _cached_encoder_for_OngoingGroupCallParam: $.ASN1Encoder<OngoingGroupCallParam> | null = null;

/**
 * @summary Encodes a(n) OngoingGroupCallParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OngoingGroupCallParam, encoded as an ASN.1 Element.
 */
export
function _encode_OngoingGroupCallParam (value: OngoingGroupCallParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OngoingGroupCallParam) { _cached_encoder_for_OngoingGroupCallParam = function (value: OngoingGroupCallParam, elGetter: $.ASN1Encoder<OngoingGroupCallParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OngoingGroupCallParam(value, elGetter);
}


/* eslint-enable */
