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
 * @summary SubBusyForMT_SMS_Param
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubBusyForMT-SMS-Param ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     gprsConnectionSuspended    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SubBusyForMT_SMS_Param {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `gprsConnectionSuspended`.
         * @public
         * @readonly
         */
        readonly gprsConnectionSuspended: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SubBusyForMT_SMS_Param
     * @description
     * 
     * This takes an `object` and converts it to a `SubBusyForMT_SMS_Param`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubBusyForMT_SMS_Param`.
     * @returns {SubBusyForMT_SMS_Param}
     */
    public static _from_object (_o: { [_K in keyof (SubBusyForMT_SMS_Param)]: (SubBusyForMT_SMS_Param)[_K] }): SubBusyForMT_SMS_Param {
        return new SubBusyForMT_SMS_Param(_o.extensionContainer, _o.gprsConnectionSuspended, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SubBusyForMT_SMS_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubBusyForMT_SMS_Param: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of SubBusyForMT_SMS_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubBusyForMT_SMS_Param: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubBusyForMT_SMS_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubBusyForMT_SMS_Param: $.ComponentSpec[] = [
    new $.ComponentSpec("gprsConnectionSuspended", true, $.hasTag(_TagClass.universal, 5))
];

let _cached_decoder_for_SubBusyForMT_SMS_Param: $.ASN1Decoder<SubBusyForMT_SMS_Param> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubBusyForMT_SMS_Param
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubBusyForMT_SMS_Param (el: _Element): SubBusyForMT_SMS_Param {
    if (!_cached_decoder_for_SubBusyForMT_SMS_Param) { _cached_decoder_for_SubBusyForMT_SMS_Param = function (el: _Element): SubBusyForMT_SMS_Param {
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let gprsConnectionSuspended: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "gprsConnectionSuspended": (_el: _Element): void => { gprsConnectionSuspended = $._decodeNull(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubBusyForMT_SMS_Param,
        _extension_additions_list_spec_for_SubBusyForMT_SMS_Param,
        _root_component_type_list_2_spec_for_SubBusyForMT_SMS_Param,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SubBusyForMT_SMS_Param(
        extensionContainer,
        gprsConnectionSuspended,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SubBusyForMT_SMS_Param(el);
}

let _cached_encoder_for_SubBusyForMT_SMS_Param: $.ASN1Encoder<SubBusyForMT_SMS_Param> | null = null;

/**
 * @summary Encodes a(n) SubBusyForMT_SMS_Param into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubBusyForMT_SMS_Param, encoded as an ASN.1 Element.
 */
export
function _encode_SubBusyForMT_SMS_Param (value: SubBusyForMT_SMS_Param, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubBusyForMT_SMS_Param) { _cached_encoder_for_SubBusyForMT_SMS_Param = function (value: SubBusyForMT_SMS_Param, elGetter: $.ASN1Encoder<SubBusyForMT_SMS_Param>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.gprsConnectionSuspended === undefined) ? undefined : $._encodeNull(value.gprsConnectionSuspended, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SubBusyForMT_SMS_Param(value, elGetter);
}


/* eslint-enable */
