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
import { PrivateExtensionList, _decode_PrivateExtensionList, _encode_PrivateExtensionList } from "../MAP-ExtensionDataTypes/PrivateExtensionList.ta.mjs";
// export { PrivateExtensionList, _decode_PrivateExtensionList, _encode_PrivateExtensionList } from "../MAP-ExtensionDataTypes/PrivateExtensionList.ta.mjs";
import { SLR_Arg_PCS_Extensions, _decode_SLR_Arg_PCS_Extensions, _encode_SLR_Arg_PCS_Extensions } from "../MAP-ExtensionDataTypes/SLR-Arg-PCS-Extensions.ta.mjs";
// export { SLR_Arg_PCS_Extensions, _decode_SLR_Arg_PCS_Extensions, _encode_SLR_Arg_PCS_Extensions } from "../MAP-ExtensionDataTypes/SLR-Arg-PCS-Extensions.ta.mjs";


/**
 * @summary SLR_ArgExtensionContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SLR-ArgExtensionContainer ::= SEQUENCE {
 *     privateExtensionList    [0]PrivateExtensionList    OPTIONAL, 
 *     slr-Arg-PCS-Extensions    [1]SLR-Arg-PCS-Extensions    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SLR_ArgExtensionContainer {
    constructor (
        /**
         * @summary `privateExtensionList`.
         * @public
         * @readonly
         */
        readonly privateExtensionList: OPTIONAL<PrivateExtensionList>,
        /**
         * @summary `slr_Arg_PCS_Extensions`.
         * @public
         * @readonly
         */
        readonly slr_Arg_PCS_Extensions: OPTIONAL<SLR_Arg_PCS_Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SLR_ArgExtensionContainer
     * @description
     * 
     * This takes an `object` and converts it to a `SLR_ArgExtensionContainer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SLR_ArgExtensionContainer`.
     * @returns {SLR_ArgExtensionContainer}
     */
    public static _from_object (_o: { [_K in keyof (SLR_ArgExtensionContainer)]: (SLR_ArgExtensionContainer)[_K] }): SLR_ArgExtensionContainer {
        return new SLR_ArgExtensionContainer(_o.privateExtensionList, _o.slr_Arg_PCS_Extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SLR_ArgExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SLR_ArgExtensionContainer: $.ComponentSpec[] = [
    new $.ComponentSpec("privateExtensionList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("slr-Arg-PCS-Extensions", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SLR_ArgExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SLR_ArgExtensionContainer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SLR_ArgExtensionContainer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SLR_ArgExtensionContainer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SLR_ArgExtensionContainer: $.ASN1Decoder<SLR_ArgExtensionContainer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SLR_ArgExtensionContainer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SLR_ArgExtensionContainer (el: _Element): SLR_ArgExtensionContainer {
    if (!_cached_decoder_for_SLR_ArgExtensionContainer) { _cached_decoder_for_SLR_ArgExtensionContainer = function (el: _Element): SLR_ArgExtensionContainer {
    let privateExtensionList: OPTIONAL<PrivateExtensionList>;
    let slr_Arg_PCS_Extensions: OPTIONAL<SLR_Arg_PCS_Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "privateExtensionList": (_el: _Element): void => { privateExtensionList = $._decode_implicit<PrivateExtensionList>(() => _decode_PrivateExtensionList)(_el); },
        "slr-Arg-PCS-Extensions": (_el: _Element): void => { slr_Arg_PCS_Extensions = $._decode_implicit<SLR_Arg_PCS_Extensions>(() => _decode_SLR_Arg_PCS_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SLR_ArgExtensionContainer,
        _extension_additions_list_spec_for_SLR_ArgExtensionContainer,
        _root_component_type_list_2_spec_for_SLR_ArgExtensionContainer,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SLR_ArgExtensionContainer(
        privateExtensionList,
        slr_Arg_PCS_Extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SLR_ArgExtensionContainer(el);
}

let _cached_encoder_for_SLR_ArgExtensionContainer: $.ASN1Encoder<SLR_ArgExtensionContainer> | null = null;

/**
 * @summary Encodes a(n) SLR_ArgExtensionContainer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SLR_ArgExtensionContainer, encoded as an ASN.1 Element.
 */
export
function _encode_SLR_ArgExtensionContainer (value: SLR_ArgExtensionContainer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SLR_ArgExtensionContainer) { _cached_encoder_for_SLR_ArgExtensionContainer = function (value: SLR_ArgExtensionContainer, elGetter: $.ASN1Encoder<SLR_ArgExtensionContainer>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.privateExtensionList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_PrivateExtensionList, $.BER)(value.privateExtensionList, $.BER)),
            /* IF_ABSENT  */ ((value.slr_Arg_PCS_Extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SLR_Arg_PCS_Extensions, $.BER)(value.slr_Arg_PCS_Extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SLR_ArgExtensionContainer(value, elGetter);
}


/* eslint-enable */
