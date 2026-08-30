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
import { NAEA_CIC, _decode_NAEA_CIC, _encode_NAEA_CIC } from "../MAP-CommonDataTypes/NAEA-CIC.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary NAEA_PreferredCI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAEA-PreferredCI ::= SEQUENCE {
 *     naea-PreferredCIC    [0] NAEA-CIC,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class NAEA_PreferredCI {
    constructor (
        /**
         * @summary `naea_PreferredCIC`.
         * @public
         * @readonly
         */
        readonly naea_PreferredCIC: NAEA_CIC,
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
     * @summary Restructures an object into a NAEA_PreferredCI
     * @description
     * 
     * This takes an `object` and converts it to a `NAEA_PreferredCI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NAEA_PreferredCI`.
     * @returns {NAEA_PreferredCI}
     */
    public static _from_object (_o: { [_K in keyof (NAEA_PreferredCI)]: (NAEA_PreferredCI)[_K] }): NAEA_PreferredCI {
        return new NAEA_PreferredCI(_o.naea_PreferredCIC, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NAEA_PreferredCI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NAEA_PreferredCI: $.ComponentSpec[] = [
    new $.ComponentSpec("naea-PreferredCIC", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NAEA_PreferredCI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NAEA_PreferredCI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NAEA_PreferredCI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NAEA_PreferredCI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NAEA_PreferredCI: $.ASN1Decoder<NAEA_PreferredCI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NAEA_PreferredCI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NAEA_PreferredCI (el: _Element): NAEA_PreferredCI {
    if (!_cached_decoder_for_NAEA_PreferredCI) { _cached_decoder_for_NAEA_PreferredCI = function (el: _Element): NAEA_PreferredCI {
    let naea_PreferredCIC!: NAEA_CIC;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "naea-PreferredCIC": (_el: _Element): void => { naea_PreferredCIC = $._decode_implicit<NAEA_CIC>(() => _decode_NAEA_CIC)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NAEA_PreferredCI,
        _extension_additions_list_spec_for_NAEA_PreferredCI,
        _root_component_type_list_2_spec_for_NAEA_PreferredCI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NAEA_PreferredCI(
        naea_PreferredCIC,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NAEA_PreferredCI(el);
}

let _cached_encoder_for_NAEA_PreferredCI: $.ASN1Encoder<NAEA_PreferredCI> | null = null;

/**
 * @summary Encodes a(n) NAEA_PreferredCI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NAEA_PreferredCI, encoded as an ASN.1 Element.
 */
export
function _encode_NAEA_PreferredCI (value: NAEA_PreferredCI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NAEA_PreferredCI) { _cached_encoder_for_NAEA_PreferredCI = function (value: NAEA_PreferredCI, elGetter: $.ASN1Encoder<NAEA_PreferredCI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_NAEA_CIC, $.BER)(value.naea_PreferredCIC, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NAEA_PreferredCI(value, elGetter);
}


/* eslint-enable */
