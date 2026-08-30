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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary UnexpectedDataParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnexpectedDataParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     unexpectedSubscriber [0]    NULL    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class UnexpectedDataParam {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `unexpectedSubscriber`.
         * @public
         * @readonly
         */
        readonly unexpectedSubscriber: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UnexpectedDataParam
     * @description
     * 
     * This takes an `object` and converts it to a `UnexpectedDataParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnexpectedDataParam`.
     * @returns {UnexpectedDataParam}
     */
    public static _from_object (_o: { [_K in keyof (UnexpectedDataParam)]: (UnexpectedDataParam)[_K] }): UnexpectedDataParam {
        return new UnexpectedDataParam(_o.extensionContainer, _o.unexpectedSubscriber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UnexpectedDataParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnexpectedDataParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UnexpectedDataParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnexpectedDataParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnexpectedDataParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnexpectedDataParam: $.ComponentSpec[] = [
    new $.ComponentSpec("unexpectedSubscriber", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

let _cached_decoder_for_UnexpectedDataParam: $.ASN1Decoder<UnexpectedDataParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnexpectedDataParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnexpectedDataParam (el: _Element): UnexpectedDataParam {
    if (!_cached_decoder_for_UnexpectedDataParam) { _cached_decoder_for_UnexpectedDataParam = function (el: _Element): UnexpectedDataParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let unexpectedSubscriber: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "unexpectedSubscriber": (_el: _Element): void => { unexpectedSubscriber = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnexpectedDataParam,
        _extension_additions_list_spec_for_UnexpectedDataParam,
        _root_component_type_list_2_spec_for_UnexpectedDataParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UnexpectedDataParam(
        extensionContainer,
        unexpectedSubscriber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UnexpectedDataParam(el);
}

let _cached_encoder_for_UnexpectedDataParam: $.ASN1Encoder<UnexpectedDataParam> | null = null;

/**
 * @summary Encodes a(n) UnexpectedDataParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnexpectedDataParam, encoded as an ASN.1 Element.
 */
export
function _encode_UnexpectedDataParam (value: UnexpectedDataParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnexpectedDataParam) { _cached_encoder_for_UnexpectedDataParam = function (value: UnexpectedDataParam, elGetter: $.ASN1Encoder<UnexpectedDataParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.unexpectedSubscriber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.unexpectedSubscriber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UnexpectedDataParam(value, elGetter);
}


/* eslint-enable */
