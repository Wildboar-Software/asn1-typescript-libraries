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
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
// export { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary EMLPP_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EMLPP-Info ::= SEQUENCE {
 *     maximumentitledPriority    EMLPP-Priority,
 *     defaultPriority    EMLPP-Priority,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class EMLPP_Info {
    constructor (
        /**
         * @summary `maximumentitledPriority`.
         * @public
         * @readonly
         */
        readonly maximumentitledPriority: EMLPP_Priority,
        /**
         * @summary `defaultPriority`.
         * @public
         * @readonly
         */
        readonly defaultPriority: EMLPP_Priority,
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
     * @summary Restructures an object into a EMLPP_Info
     * @description
     * 
     * This takes an `object` and converts it to a `EMLPP_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EMLPP_Info`.
     * @returns {EMLPP_Info}
     */
    public static _from_object (_o: { [_K in keyof (EMLPP_Info)]: (EMLPP_Info)[_K] }): EMLPP_Info {
        return new EMLPP_Info(_o.maximumentitledPriority, _o.defaultPriority, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EMLPP_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EMLPP_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("maximumentitledPriority", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("defaultPriority", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of EMLPP_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EMLPP_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EMLPP_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EMLPP_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EMLPP_Info: $.ASN1Decoder<EMLPP_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EMLPP_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EMLPP_Info (el: _Element): EMLPP_Info {
    if (!_cached_decoder_for_EMLPP_Info) { _cached_decoder_for_EMLPP_Info = function (el: _Element): EMLPP_Info {
    let maximumentitledPriority!: EMLPP_Priority;
    let defaultPriority!: EMLPP_Priority;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "maximumentitledPriority": (_el: _Element): void => { maximumentitledPriority = _decode_EMLPP_Priority(_el); },
        "defaultPriority": (_el: _Element): void => { defaultPriority = _decode_EMLPP_Priority(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EMLPP_Info,
        _extension_additions_list_spec_for_EMLPP_Info,
        _root_component_type_list_2_spec_for_EMLPP_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EMLPP_Info(
        maximumentitledPriority,
        defaultPriority,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EMLPP_Info(el);
}

let _cached_encoder_for_EMLPP_Info: $.ASN1Encoder<EMLPP_Info> | null = null;

/**
 * @summary Encodes a(n) EMLPP_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EMLPP_Info, encoded as an ASN.1 Element.
 */
export
function _encode_EMLPP_Info (value: EMLPP_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EMLPP_Info) { _cached_encoder_for_EMLPP_Info = function (value: EMLPP_Info, elGetter: $.ASN1Encoder<EMLPP_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EMLPP_Priority(value.maximumentitledPriority, $.BER),
            /* REQUIRED   */ _encode_EMLPP_Priority(value.defaultPriority, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EMLPP_Info(value, elGetter);
}


/* eslint-enable */
