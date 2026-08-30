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
import { CodecList, _decode_CodecList, _encode_CodecList } from "../MAP-MS-DataTypes/CodecList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SupportedCodecsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedCodecsList ::= SEQUENCE {
 *     utranCodecList    [0] CodecList    OPTIONAL,
 *     geranCodecList    [1] CodecList    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SupportedCodecsList {
    constructor (
        /**
         * @summary `utranCodecList`.
         * @public
         * @readonly
         */
        readonly utranCodecList: OPTIONAL<CodecList>,
        /**
         * @summary `geranCodecList`.
         * @public
         * @readonly
         */
        readonly geranCodecList: OPTIONAL<CodecList>,
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
     * @summary Restructures an object into a SupportedCodecsList
     * @description
     * 
     * This takes an `object` and converts it to a `SupportedCodecsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedCodecsList`.
     * @returns {SupportedCodecsList}
     */
    public static _from_object (_o: { [_K in keyof (SupportedCodecsList)]: (SupportedCodecsList)[_K] }): SupportedCodecsList {
        return new SupportedCodecsList(_o.utranCodecList, _o.geranCodecList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SupportedCodecsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SupportedCodecsList: $.ComponentSpec[] = [
    new $.ComponentSpec("utranCodecList", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("geranCodecList", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SupportedCodecsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SupportedCodecsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SupportedCodecsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SupportedCodecsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SupportedCodecsList: $.ASN1Decoder<SupportedCodecsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedCodecsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedCodecsList (el: _Element): SupportedCodecsList {
    if (!_cached_decoder_for_SupportedCodecsList) { _cached_decoder_for_SupportedCodecsList = function (el: _Element): SupportedCodecsList {
    let utranCodecList: OPTIONAL<CodecList> = undefined;
    let geranCodecList: OPTIONAL<CodecList> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "utranCodecList": (_el: _Element): void => { utranCodecList = $._decode_implicit<CodecList>(() => _decode_CodecList)(_el); },
        "geranCodecList": (_el: _Element): void => { geranCodecList = $._decode_implicit<CodecList>(() => _decode_CodecList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SupportedCodecsList,
        _extension_additions_list_spec_for_SupportedCodecsList,
        _root_component_type_list_2_spec_for_SupportedCodecsList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SupportedCodecsList(
        utranCodecList,
        geranCodecList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SupportedCodecsList(el);
}

let _cached_encoder_for_SupportedCodecsList: $.ASN1Encoder<SupportedCodecsList> | null = null;

/**
 * @summary Encodes a(n) SupportedCodecsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedCodecsList, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedCodecsList (value: SupportedCodecsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedCodecsList) { _cached_encoder_for_SupportedCodecsList = function (value: SupportedCodecsList, elGetter: $.ASN1Encoder<SupportedCodecsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.utranCodecList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CodecList, $.BER)(value.utranCodecList, $.BER)),
            /* IF_ABSENT  */ ((value.geranCodecList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CodecList, $.BER)(value.geranCodecList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SupportedCodecsList(value, elGetter);
}


/* eslint-enable */
