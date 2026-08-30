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
import { UUIndicator, _decode_UUIndicator, _encode_UUIndicator } from "../MAP-CH-DataTypes/UUIndicator.ta.mjs";
import { UUI, _decode_UUI, _encode_UUI } from "../MAP-CH-DataTypes/UUI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary UU_Data
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UU-Data ::= SEQUENCE {
 *     uuIndicator    [0] UUIndicator    OPTIONAL,
 *     uui    [1] UUI    OPTIONAL,
 *     uusCFInteraction    [2] NULL    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class UU_Data {
    constructor (
        /**
         * @summary `uuIndicator`.
         * @public
         * @readonly
         */
        readonly uuIndicator: OPTIONAL<UUIndicator>,
        /**
         * @summary `uui`.
         * @public
         * @readonly
         */
        readonly uui: OPTIONAL<UUI>,
        /**
         * @summary `uusCFInteraction`.
         * @public
         * @readonly
         */
        readonly uusCFInteraction: OPTIONAL<NULL>,
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
     * @summary Restructures an object into a UU_Data
     * @description
     * 
     * This takes an `object` and converts it to a `UU_Data`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UU_Data`.
     * @returns {UU_Data}
     */
    public static _from_object (_o: { [_K in keyof (UU_Data)]: (UU_Data)[_K] }): UU_Data {
        return new UU_Data(_o.uuIndicator, _o.uui, _o.uusCFInteraction, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UU_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UU_Data: $.ComponentSpec[] = [
    new $.ComponentSpec("uuIndicator", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uui", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uusCFInteraction", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of UU_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UU_Data: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UU_Data
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UU_Data: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UU_Data: $.ASN1Decoder<UU_Data> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UU_Data
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UU_Data (el: _Element): UU_Data {
    if (!_cached_decoder_for_UU_Data) { _cached_decoder_for_UU_Data = function (el: _Element): UU_Data {
    let uuIndicator: OPTIONAL<UUIndicator> = undefined;
    let uui: OPTIONAL<UUI> = undefined;
    let uusCFInteraction: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uuIndicator": (_el: _Element): void => { uuIndicator = $._decode_implicit<UUIndicator>(() => _decode_UUIndicator)(_el); },
        "uui": (_el: _Element): void => { uui = $._decode_implicit<UUI>(() => _decode_UUI)(_el); },
        "uusCFInteraction": (_el: _Element): void => { uusCFInteraction = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UU_Data,
        _extension_additions_list_spec_for_UU_Data,
        _root_component_type_list_2_spec_for_UU_Data,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UU_Data(
        uuIndicator,
        uui,
        uusCFInteraction,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UU_Data(el);
}

let _cached_encoder_for_UU_Data: $.ASN1Encoder<UU_Data> | null = null;

/**
 * @summary Encodes a(n) UU_Data into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UU_Data, encoded as an ASN.1 Element.
 */
export
function _encode_UU_Data (value: UU_Data, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UU_Data) { _cached_encoder_for_UU_Data = function (value: UU_Data, elGetter: $.ASN1Encoder<UU_Data>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.uuIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_UUIndicator, $.BER)(value.uuIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.uui === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_UUI, $.BER)(value.uui, $.BER)),
            /* IF_ABSENT  */ ((value.uusCFInteraction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.uusCFInteraction, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UU_Data(value, elGetter);
}


/* eslint-enable */
