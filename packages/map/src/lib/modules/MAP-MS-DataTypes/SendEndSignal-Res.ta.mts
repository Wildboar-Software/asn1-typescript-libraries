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
 * @summary SendEndSignal_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendEndSignal-Res ::= SEQUENCE {
 *     extensionContainer    [0]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class SendEndSignal_Res {
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
     * @summary Restructures an object into a SendEndSignal_Res
     * @description
     * 
     * This takes an `object` and converts it to a `SendEndSignal_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendEndSignal_Res`.
     * @returns {SendEndSignal_Res}
     */
    public static _from_object (_o: { [_K in keyof (SendEndSignal_Res)]: (SendEndSignal_Res)[_K] }): SendEndSignal_Res {
        return new SendEndSignal_Res(_o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SendEndSignal_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendEndSignal_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SendEndSignal_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendEndSignal_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendEndSignal_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendEndSignal_Res: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendEndSignal_Res: $.ASN1Decoder<SendEndSignal_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendEndSignal_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendEndSignal_Res (el: _Element): SendEndSignal_Res {
    if (!_cached_decoder_for_SendEndSignal_Res) { _cached_decoder_for_SendEndSignal_Res = function (el: _Element): SendEndSignal_Res {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendEndSignal_Res,
        _extension_additions_list_spec_for_SendEndSignal_Res,
        _root_component_type_list_2_spec_for_SendEndSignal_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendEndSignal_Res(
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendEndSignal_Res(el);
}

let _cached_encoder_for_SendEndSignal_Res: $.ASN1Encoder<SendEndSignal_Res> | null = null;

/**
 * @summary Encodes a(n) SendEndSignal_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendEndSignal_Res, encoded as an ASN.1 Element.
 */
export
function _encode_SendEndSignal_Res (value: SendEndSignal_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendEndSignal_Res) { _cached_encoder_for_SendEndSignal_Res = function (value: SendEndSignal_Res, elGetter: $.ASN1Encoder<SendEndSignal_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendEndSignal_Res(value, elGetter);
}


/* eslint-enable */
