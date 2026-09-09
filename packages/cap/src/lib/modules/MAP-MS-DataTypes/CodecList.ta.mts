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
import { Codec, _decode_Codec, _encode_Codec } from "../MAP-MS-DataTypes/Codec.ta.mjs";
// export { Codec, _decode_Codec, _encode_Codec } from "../MAP-MS-DataTypes/Codec.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CodecList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CodecList ::= SEQUENCE {
 *     codec1    [1] Codec,
 *     codec2    [2] Codec    OPTIONAL,
 *     codec3    [3] Codec    OPTIONAL,
 *     codec4    [4] Codec    OPTIONAL,
 *     codec5    [5] Codec    OPTIONAL,
 *     codec6    [6] Codec    OPTIONAL,
 *     codec7    [7] Codec    OPTIONAL,
 *     codec8    [8] Codec    OPTIONAL,
 *     extensionContainer    [9] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CodecList {
    constructor (
        /**
         * @summary `codec1`.
         * @public
         * @readonly
         */
        readonly codec1: Codec,
        /**
         * @summary `codec2`.
         * @public
         * @readonly
         */
        readonly codec2: OPTIONAL<Codec>,
        /**
         * @summary `codec3`.
         * @public
         * @readonly
         */
        readonly codec3: OPTIONAL<Codec>,
        /**
         * @summary `codec4`.
         * @public
         * @readonly
         */
        readonly codec4: OPTIONAL<Codec>,
        /**
         * @summary `codec5`.
         * @public
         * @readonly
         */
        readonly codec5: OPTIONAL<Codec>,
        /**
         * @summary `codec6`.
         * @public
         * @readonly
         */
        readonly codec6: OPTIONAL<Codec>,
        /**
         * @summary `codec7`.
         * @public
         * @readonly
         */
        readonly codec7: OPTIONAL<Codec>,
        /**
         * @summary `codec8`.
         * @public
         * @readonly
         */
        readonly codec8: OPTIONAL<Codec>,
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
     * @summary Restructures an object into a CodecList
     * @description
     * 
     * This takes an `object` and converts it to a `CodecList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CodecList`.
     * @returns {CodecList}
     */
    public static _from_object (_o: { [_K in keyof (CodecList)]: (CodecList)[_K] }): CodecList {
        return new CodecList(_o.codec1, _o.codec2, _o.codec3, _o.codec4, _o.codec5, _o.codec6, _o.codec7, _o.codec8, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CodecList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CodecList: $.ComponentSpec[] = [
    new $.ComponentSpec("codec1", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("codec2", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("codec3", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("codec4", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("codec5", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("codec6", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("codec7", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("codec8", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 9), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CodecList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CodecList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CodecList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CodecList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CodecList: $.ASN1Decoder<CodecList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CodecList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CodecList (el: _Element): CodecList {
    if (!_cached_decoder_for_CodecList) { _cached_decoder_for_CodecList = function (el: _Element): CodecList {
    let codec1!: Codec;
    let codec2: OPTIONAL<Codec>;
    let codec3: OPTIONAL<Codec>;
    let codec4: OPTIONAL<Codec>;
    let codec5: OPTIONAL<Codec>;
    let codec6: OPTIONAL<Codec>;
    let codec7: OPTIONAL<Codec>;
    let codec8: OPTIONAL<Codec>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "codec1": (_el: _Element): void => { codec1 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "codec2": (_el: _Element): void => { codec2 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "codec3": (_el: _Element): void => { codec3 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "codec4": (_el: _Element): void => { codec4 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "codec5": (_el: _Element): void => { codec5 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "codec6": (_el: _Element): void => { codec6 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "codec7": (_el: _Element): void => { codec7 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "codec8": (_el: _Element): void => { codec8 = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CodecList,
        _extension_additions_list_spec_for_CodecList,
        _root_component_type_list_2_spec_for_CodecList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CodecList(
        codec1,
        codec2,
        codec3,
        codec4,
        codec5,
        codec6,
        codec7,
        codec8,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CodecList(el);
}

let _cached_encoder_for_CodecList: $.ASN1Encoder<CodecList> | null = null;

/**
 * @summary Encodes a(n) CodecList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CodecList, encoded as an ASN.1 Element.
 */
export
function _encode_CodecList (value: CodecList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CodecList) { _cached_encoder_for_CodecList = function (value: CodecList, elGetter: $.ASN1Encoder<CodecList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Codec, $.BER)(value.codec1, $.BER),
            /* IF_ABSENT  */ ((value.codec2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Codec, $.BER)(value.codec2, $.BER)),
            /* IF_ABSENT  */ ((value.codec3 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Codec, $.BER)(value.codec3, $.BER)),
            /* IF_ABSENT  */ ((value.codec4 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Codec, $.BER)(value.codec4, $.BER)),
            /* IF_ABSENT  */ ((value.codec5 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Codec, $.BER)(value.codec5, $.BER)),
            /* IF_ABSENT  */ ((value.codec6 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Codec, $.BER)(value.codec6, $.BER)),
            /* IF_ABSENT  */ ((value.codec7 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Codec, $.BER)(value.codec7, $.BER)),
            /* IF_ABSENT  */ ((value.codec8 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Codec, $.BER)(value.codec8, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CodecList(value, elGetter);
}


/* eslint-enable */
