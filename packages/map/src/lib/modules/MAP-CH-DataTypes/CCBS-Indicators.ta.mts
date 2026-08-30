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


/**
 * @summary CCBS_Indicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CCBS-Indicators ::= SEQUENCE {
 *     ccbs-Possible    [0]    NULL    OPTIONAL,
 *     keepCCBS-CallIndicator    [1]    NULL    OPTIONAL,
 *     extensionContainer    [2]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CCBS_Indicators {
    constructor (
        /**
         * @summary `ccbs_Possible`.
         * @public
         * @readonly
         */
        readonly ccbs_Possible: OPTIONAL<NULL>,
        /**
         * @summary `keepCCBS_CallIndicator`.
         * @public
         * @readonly
         */
        readonly keepCCBS_CallIndicator: OPTIONAL<NULL>,
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
     * @summary Restructures an object into a CCBS_Indicators
     * @description
     * 
     * This takes an `object` and converts it to a `CCBS_Indicators`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CCBS_Indicators`.
     * @returns {CCBS_Indicators}
     */
    public static _from_object (_o: { [_K in keyof (CCBS_Indicators)]: (CCBS_Indicators)[_K] }): CCBS_Indicators {
        return new CCBS_Indicators(_o.ccbs_Possible, _o.keepCCBS_CallIndicator, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CCBS_Indicators
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CCBS_Indicators: $.ComponentSpec[] = [
    new $.ComponentSpec("ccbs-Possible", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("keepCCBS-CallIndicator", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CCBS_Indicators
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CCBS_Indicators: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CCBS_Indicators
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CCBS_Indicators: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CCBS_Indicators: $.ASN1Decoder<CCBS_Indicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CCBS_Indicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CCBS_Indicators (el: _Element): CCBS_Indicators {
    if (!_cached_decoder_for_CCBS_Indicators) { _cached_decoder_for_CCBS_Indicators = function (el: _Element): CCBS_Indicators {
    let ccbs_Possible: OPTIONAL<NULL> = undefined;
    let keepCCBS_CallIndicator: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ccbs-Possible": (_el: _Element): void => { ccbs_Possible = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "keepCCBS-CallIndicator": (_el: _Element): void => { keepCCBS_CallIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CCBS_Indicators,
        _extension_additions_list_spec_for_CCBS_Indicators,
        _root_component_type_list_2_spec_for_CCBS_Indicators,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CCBS_Indicators(
        ccbs_Possible,
        keepCCBS_CallIndicator,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CCBS_Indicators(el);
}

let _cached_encoder_for_CCBS_Indicators: $.ASN1Encoder<CCBS_Indicators> | null = null;

/**
 * @summary Encodes a(n) CCBS_Indicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CCBS_Indicators, encoded as an ASN.1 Element.
 */
export
function _encode_CCBS_Indicators (value: CCBS_Indicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CCBS_Indicators) { _cached_encoder_for_CCBS_Indicators = function (value: CCBS_Indicators, elGetter: $.ASN1Encoder<CCBS_Indicators>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ccbs_Possible === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.ccbs_Possible, $.BER)),
            /* IF_ABSENT  */ ((value.keepCCBS_CallIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.keepCCBS_CallIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CCBS_Indicators(value, elGetter);
}


/* eslint-enable */
