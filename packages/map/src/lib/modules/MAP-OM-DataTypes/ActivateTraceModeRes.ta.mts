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
 * @summary ActivateTraceModeRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivateTraceModeRes ::= SEQUENCE {
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...,
 *     traceSupportIndicator    [1]    NULL    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ActivateTraceModeRes {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `traceSupportIndicator`.
         * @public
         * @readonly
         */
        readonly traceSupportIndicator: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ActivateTraceModeRes
     * @description
     * 
     * This takes an `object` and converts it to a `ActivateTraceModeRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivateTraceModeRes`.
     * @returns {ActivateTraceModeRes}
     */
    public static _from_object (_o: { [_K in keyof (ActivateTraceModeRes)]: (ActivateTraceModeRes)[_K] }): ActivateTraceModeRes {
        return new ActivateTraceModeRes(_o.extensionContainer, _o.traceSupportIndicator, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ActivateTraceModeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActivateTraceModeRes: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ActivateTraceModeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActivateTraceModeRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActivateTraceModeRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActivateTraceModeRes: $.ComponentSpec[] = [
    new $.ComponentSpec("traceSupportIndicator", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_ActivateTraceModeRes: $.ASN1Decoder<ActivateTraceModeRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivateTraceModeRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivateTraceModeRes (el: _Element): ActivateTraceModeRes {
    if (!_cached_decoder_for_ActivateTraceModeRes) { _cached_decoder_for_ActivateTraceModeRes = function (el: _Element): ActivateTraceModeRes {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let traceSupportIndicator: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "traceSupportIndicator": (_el: _Element): void => { traceSupportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActivateTraceModeRes,
        _extension_additions_list_spec_for_ActivateTraceModeRes,
        _root_component_type_list_2_spec_for_ActivateTraceModeRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ActivateTraceModeRes(
        extensionContainer,
        traceSupportIndicator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ActivateTraceModeRes(el);
}

let _cached_encoder_for_ActivateTraceModeRes: $.ASN1Encoder<ActivateTraceModeRes> | null = null;

/**
 * @summary Encodes a(n) ActivateTraceModeRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateTraceModeRes, encoded as an ASN.1 Element.
 */
export
function _encode_ActivateTraceModeRes (value: ActivateTraceModeRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivateTraceModeRes) { _cached_encoder_for_ActivateTraceModeRes = function (value: ActivateTraceModeRes, elGetter: $.ASN1Encoder<ActivateTraceModeRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.traceSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.traceSupportIndicator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ActivateTraceModeRes(value, elGetter);
}


/* eslint-enable */
