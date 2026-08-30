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
 * @summary DeactivateTraceModeRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeactivateTraceModeRes ::= SEQUENCE {
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class DeactivateTraceModeRes {
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
     * @summary Restructures an object into a DeactivateTraceModeRes
     * @description
     * 
     * This takes an `object` and converts it to a `DeactivateTraceModeRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeactivateTraceModeRes`.
     * @returns {DeactivateTraceModeRes}
     */
    public static _from_object (_o: { [_K in keyof (DeactivateTraceModeRes)]: (DeactivateTraceModeRes)[_K] }): DeactivateTraceModeRes {
        return new DeactivateTraceModeRes(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DeactivateTraceModeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeactivateTraceModeRes: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DeactivateTraceModeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeactivateTraceModeRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeactivateTraceModeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeactivateTraceModeRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeactivateTraceModeRes: $.ASN1Decoder<DeactivateTraceModeRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeactivateTraceModeRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeactivateTraceModeRes (el: _Element): DeactivateTraceModeRes {
    if (!_cached_decoder_for_DeactivateTraceModeRes) { _cached_decoder_for_DeactivateTraceModeRes = function (el: _Element): DeactivateTraceModeRes {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeactivateTraceModeRes,
        _extension_additions_list_spec_for_DeactivateTraceModeRes,
        _root_component_type_list_2_spec_for_DeactivateTraceModeRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DeactivateTraceModeRes(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DeactivateTraceModeRes(el);
}

let _cached_encoder_for_DeactivateTraceModeRes: $.ASN1Encoder<DeactivateTraceModeRes> | null = null;

/**
 * @summary Encodes a(n) DeactivateTraceModeRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeactivateTraceModeRes, encoded as an ASN.1 Element.
 */
export
function _encode_DeactivateTraceModeRes (value: DeactivateTraceModeRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeactivateTraceModeRes) { _cached_encoder_for_DeactivateTraceModeRes = function (value: DeactivateTraceModeRes, elGetter: $.ASN1Encoder<DeactivateTraceModeRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeactivateTraceModeRes(value, elGetter);
}


/* eslint-enable */
