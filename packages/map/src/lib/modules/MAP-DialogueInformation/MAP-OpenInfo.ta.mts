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
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MAP_OpenInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MAP-OpenInfo ::= SEQUENCE {
 *     destinationReference    [0] AddressString    OPTIONAL,
 *     originationReference    [1] AddressString    OPTIONAL,
 *     ...,
 *     extensionContainer    ExtensionContainer    OPTIONAL
 *     -- extensionContainer must not be used in version 2
 *     }
 * ```
 * 
 * @class
 */
export
class MAP_OpenInfo {
    constructor (
        /**
         * @summary `destinationReference`.
         * @public
         * @readonly
         */
        readonly destinationReference: OPTIONAL<AddressString>,
        /**
         * @summary `originationReference`.
         * @public
         * @readonly
         */
        readonly originationReference: OPTIONAL<AddressString>,
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
     * @summary Restructures an object into a MAP_OpenInfo
     * @description
     * 
     * This takes an `object` and converts it to a `MAP_OpenInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MAP_OpenInfo`.
     * @returns {MAP_OpenInfo}
     */
    public static _from_object (_o: { [_K in keyof (MAP_OpenInfo)]: (MAP_OpenInfo)[_K] }): MAP_OpenInfo {
        return new MAP_OpenInfo(_o.destinationReference, _o.originationReference, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MAP_OpenInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MAP_OpenInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationReference", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("originationReference", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MAP_OpenInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MAP_OpenInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MAP_OpenInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MAP_OpenInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

let _cached_decoder_for_MAP_OpenInfo: $.ASN1Decoder<MAP_OpenInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MAP_OpenInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MAP_OpenInfo (el: _Element): MAP_OpenInfo {
    if (!_cached_decoder_for_MAP_OpenInfo) { _cached_decoder_for_MAP_OpenInfo = function (el: _Element): MAP_OpenInfo {
    let destinationReference: OPTIONAL<AddressString>;
    let originationReference: OPTIONAL<AddressString>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationReference": (_el: _Element): void => { destinationReference = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); },
        "originationReference": (_el: _Element): void => { originationReference = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MAP_OpenInfo,
        _extension_additions_list_spec_for_MAP_OpenInfo,
        _root_component_type_list_2_spec_for_MAP_OpenInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MAP_OpenInfo(
        destinationReference,
        originationReference,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MAP_OpenInfo(el);
}

let _cached_encoder_for_MAP_OpenInfo: $.ASN1Encoder<MAP_OpenInfo> | null = null;

/**
 * @summary Encodes a(n) MAP_OpenInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MAP_OpenInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MAP_OpenInfo (value: MAP_OpenInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MAP_OpenInfo) { _cached_encoder_for_MAP_OpenInfo = function (value: MAP_OpenInfo, elGetter: $.ASN1Encoder<MAP_OpenInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.destinationReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AddressString, $.BER)(value.destinationReference, $.BER)),
            /* IF_ABSENT  */ ((value.originationReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AddressString, $.BER)(value.originationReference, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MAP_OpenInfo(value, elGetter);
}


/* eslint-enable */
