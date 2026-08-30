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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary MOLR_Class
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOLR-Class ::= SEQUENCE {
 *     ss-Code    SS-Code,
 *     ss-Status    Ext-SS-Status,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class MOLR_Class {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: Ext_SS_Status,
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
     * @summary Restructures an object into a MOLR_Class
     * @description
     * 
     * This takes an `object` and converts it to a `MOLR_Class`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MOLR_Class`.
     * @returns {MOLR_Class}
     */
    public static _from_object (_o: { [_K in keyof (MOLR_Class)]: (MOLR_Class)[_K] }): MOLR_Class {
        return new MOLR_Class(_o.ss_Code, _o.ss_Status, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MOLR_Class
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MOLR_Class: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MOLR_Class
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MOLR_Class: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MOLR_Class
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MOLR_Class: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MOLR_Class: $.ASN1Decoder<MOLR_Class> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MOLR_Class
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MOLR_Class (el: _Element): MOLR_Class {
    if (!_cached_decoder_for_MOLR_Class) { _cached_decoder_for_MOLR_Class = function (el: _Element): MOLR_Class {
    let ss_Code!: SS_Code;
    let ss_Status!: Ext_SS_Status;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = _decode_Ext_SS_Status(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MOLR_Class,
        _extension_additions_list_spec_for_MOLR_Class,
        _root_component_type_list_2_spec_for_MOLR_Class,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MOLR_Class(
        ss_Code,
        ss_Status,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MOLR_Class(el);
}

let _cached_encoder_for_MOLR_Class: $.ASN1Encoder<MOLR_Class> | null = null;

/**
 * @summary Encodes a(n) MOLR_Class into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MOLR_Class, encoded as an ASN.1 Element.
 */
export
function _encode_MOLR_Class (value: MOLR_Class, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MOLR_Class) { _cached_encoder_for_MOLR_Class = function (value: MOLR_Class, elGetter: $.ASN1Encoder<MOLR_Class>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Code(value.ss_Code, $.BER),
            /* REQUIRED   */ _encode_Ext_SS_Status(value.ss_Status, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MOLR_Class(value, elGetter);
}


/* eslint-enable */
