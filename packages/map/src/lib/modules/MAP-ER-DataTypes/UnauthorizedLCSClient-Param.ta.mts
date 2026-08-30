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
import { UnauthorizedLCSClient_Diagnostic, _enum_for_UnauthorizedLCSClient_Diagnostic, UnauthorizedLCSClient_Diagnostic_noAdditionalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, noAdditionalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList /* IMPORTED_LONG_ENUMERATION_ITEM */, clientNotInMSPrivacyExceptionList /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_callToClientNotSetup /* IMPORTED_LONG_ENUMERATION_ITEM */, callToClientNotSetup /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, privacyOverrideNotApplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements /* IMPORTED_LONG_ENUMERATION_ITEM */, disallowedByLocalRegulatoryRequirements /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedPrivacyClass /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedCallSessionUnrelatedExternalClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedCallSessionRelatedExternalClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnauthorizedLCSClient_Diagnostic, _encode_UnauthorizedLCSClient_Diagnostic } from "../MAP-ER-DataTypes/UnauthorizedLCSClient-Diagnostic.ta.mjs";
// export { UnauthorizedLCSClient_Diagnostic, _enum_for_UnauthorizedLCSClient_Diagnostic, UnauthorizedLCSClient_Diagnostic_noAdditionalInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, noAdditionalInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_clientNotInMSPrivacyExceptionList /* IMPORTED_LONG_ENUMERATION_ITEM */, clientNotInMSPrivacyExceptionList /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_callToClientNotSetup /* IMPORTED_LONG_ENUMERATION_ITEM */, callToClientNotSetup /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_privacyOverrideNotApplicable /* IMPORTED_LONG_ENUMERATION_ITEM */, privacyOverrideNotApplicable /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_disallowedByLocalRegulatoryRequirements /* IMPORTED_LONG_ENUMERATION_ITEM */, disallowedByLocalRegulatoryRequirements /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedPrivacyClass /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedPrivacyClass /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionUnrelatedExternalClient /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedCallSessionUnrelatedExternalClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, UnauthorizedLCSClient_Diagnostic_unauthorizedCallSessionRelatedExternalClient /* IMPORTED_LONG_ENUMERATION_ITEM */, unauthorizedCallSessionRelatedExternalClient /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UnauthorizedLCSClient_Diagnostic, _encode_UnauthorizedLCSClient_Diagnostic } from "../MAP-ER-DataTypes/UnauthorizedLCSClient-Diagnostic.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary UnauthorizedLCSClient_Param
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnauthorizedLCSClient-Param ::= SEQUENCE {
 *     unauthorizedLCSClient-Diagnostic    [0] UnauthorizedLCSClient-Diagnostic    OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class UnauthorizedLCSClient_Param {
    constructor (
        /**
         * @summary `unauthorizedLCSClient_Diagnostic`.
         * @public
         * @readonly
         */
        readonly unauthorizedLCSClient_Diagnostic: OPTIONAL<UnauthorizedLCSClient_Diagnostic>,
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
     * @summary Restructures an object into a UnauthorizedLCSClient_Param
     * @description
     * 
     * This takes an `object` and converts it to a `UnauthorizedLCSClient_Param`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UnauthorizedLCSClient_Param`.
     * @returns {UnauthorizedLCSClient_Param}
     */
    public static _from_object (_o: { [_K in keyof (UnauthorizedLCSClient_Param)]: (UnauthorizedLCSClient_Param)[_K] }): UnauthorizedLCSClient_Param {
        return new UnauthorizedLCSClient_Param(_o.unauthorizedLCSClient_Diagnostic, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `unauthorizedLCSClient_Diagnostic`
         * @public
         * @static
         */

    public static _enum_for_unauthorizedLCSClient_Diagnostic = _enum_for_UnauthorizedLCSClient_Diagnostic;
}

/**
 * @summary The Leading Root Component Types of UnauthorizedLCSClient_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UnauthorizedLCSClient_Param: $.ComponentSpec[] = [
    new $.ComponentSpec("unauthorizedLCSClient-Diagnostic", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UnauthorizedLCSClient_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UnauthorizedLCSClient_Param: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UnauthorizedLCSClient_Param
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UnauthorizedLCSClient_Param: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UnauthorizedLCSClient_Param: $.ASN1Decoder<UnauthorizedLCSClient_Param> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnauthorizedLCSClient_Param
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnauthorizedLCSClient_Param (el: _Element): UnauthorizedLCSClient_Param {
    if (!_cached_decoder_for_UnauthorizedLCSClient_Param) { _cached_decoder_for_UnauthorizedLCSClient_Param = function (el: _Element): UnauthorizedLCSClient_Param {
    let unauthorizedLCSClient_Diagnostic: OPTIONAL<UnauthorizedLCSClient_Diagnostic>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "unauthorizedLCSClient-Diagnostic": (_el: _Element): void => { unauthorizedLCSClient_Diagnostic = $._decode_implicit<UnauthorizedLCSClient_Diagnostic>(() => _decode_UnauthorizedLCSClient_Diagnostic)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UnauthorizedLCSClient_Param,
        _extension_additions_list_spec_for_UnauthorizedLCSClient_Param,
        _root_component_type_list_2_spec_for_UnauthorizedLCSClient_Param,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UnauthorizedLCSClient_Param(
        unauthorizedLCSClient_Diagnostic,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UnauthorizedLCSClient_Param(el);
}

let _cached_encoder_for_UnauthorizedLCSClient_Param: $.ASN1Encoder<UnauthorizedLCSClient_Param> | null = null;

/**
 * @summary Encodes a(n) UnauthorizedLCSClient_Param into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnauthorizedLCSClient_Param, encoded as an ASN.1 Element.
 */
export
function _encode_UnauthorizedLCSClient_Param (value: UnauthorizedLCSClient_Param, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnauthorizedLCSClient_Param) { _cached_encoder_for_UnauthorizedLCSClient_Param = function (value: UnauthorizedLCSClient_Param, elGetter: $.ASN1Encoder<UnauthorizedLCSClient_Param>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.unauthorizedLCSClient_Diagnostic === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_UnauthorizedLCSClient_Diagnostic, $.BER)(value.unauthorizedLCSClient_Diagnostic, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UnauthorizedLCSClient_Param(value, elGetter);
}


/* eslint-enable */
