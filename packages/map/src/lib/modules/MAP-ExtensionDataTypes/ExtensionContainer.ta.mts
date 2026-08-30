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
import { PrivateExtensionList, _decode_PrivateExtensionList, _encode_PrivateExtensionList } from "../MAP-ExtensionDataTypes/PrivateExtensionList.ta.mjs";
// export { PrivateExtensionList, _decode_PrivateExtensionList, _encode_PrivateExtensionList } from "../MAP-ExtensionDataTypes/PrivateExtensionList.ta.mjs";
import { PCS_Extensions, _decode_PCS_Extensions, _encode_PCS_Extensions } from "../MAP-ExtensionDataTypes/PCS-Extensions.ta.mjs";
// export { PCS_Extensions, _decode_PCS_Extensions, _encode_PCS_Extensions } from "../MAP-ExtensionDataTypes/PCS-Extensions.ta.mjs";


/**
 * @summary ExtensionContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionContainer ::= SEQUENCE {
 *     privateExtensionList    [0]PrivateExtensionList    OPTIONAL, 
 *     pcs-Extensions    [1]PCS-Extensions    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ExtensionContainer {
    constructor (
        /**
         * @summary `privateExtensionList`.
         * @public
         * @readonly
         */
        readonly privateExtensionList: OPTIONAL<PrivateExtensionList>,
        /**
         * @summary `pcs_Extensions`.
         * @public
         * @readonly
         */
        readonly pcs_Extensions: OPTIONAL<PCS_Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ExtensionContainer
     * @description
     * 
     * This takes an `object` and converts it to a `ExtensionContainer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtensionContainer`.
     * @returns {ExtensionContainer}
     */
    public static _from_object (_o: { [_K in keyof (ExtensionContainer)]: (ExtensionContainer)[_K] }): ExtensionContainer {
        return new ExtensionContainer(_o.privateExtensionList, _o.pcs_Extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtensionContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("privateExtensionList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pcs-Extensions", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtensionContainer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtensionContainer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtensionContainer: $.ASN1Decoder<ExtensionContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionContainer (el: _Element): ExtensionContainer {
    if (!_cached_decoder_for_ExtensionContainer) { _cached_decoder_for_ExtensionContainer = function (el: _Element): ExtensionContainer {
    let privateExtensionList: OPTIONAL<PrivateExtensionList>;
    let pcs_Extensions: OPTIONAL<PCS_Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "privateExtensionList": (_el: _Element): void => { privateExtensionList = $._decode_implicit<PrivateExtensionList>(() => _decode_PrivateExtensionList)(_el); },
        "pcs-Extensions": (_el: _Element): void => { pcs_Extensions = $._decode_implicit<PCS_Extensions>(() => _decode_PCS_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtensionContainer,
        _extension_additions_list_spec_for_ExtensionContainer,
        _root_component_type_list_2_spec_for_ExtensionContainer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtensionContainer(
        privateExtensionList,
        pcs_Extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExtensionContainer(el);
}

let _cached_encoder_for_ExtensionContainer: $.ASN1Encoder<ExtensionContainer> | null = null;

/**
 * @summary Encodes a(n) ExtensionContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionContainer, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionContainer (value: ExtensionContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionContainer) { _cached_encoder_for_ExtensionContainer = function (value: ExtensionContainer, elGetter: $.ASN1Encoder<ExtensionContainer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.privateExtensionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PrivateExtensionList, $.BER)(value.privateExtensionList, $.BER)),
            /* IF_ABSENT  */ ((value.pcs_Extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_PCS_Extensions, $.BER)(value.pcs_Extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExtensionContainer(value, elGetter);
}


/* eslint-enable */
