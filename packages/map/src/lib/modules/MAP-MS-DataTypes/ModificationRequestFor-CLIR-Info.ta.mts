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
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { CliRestrictionOption, _enum_for_CliRestrictionOption, CliRestrictionOption_permanent /* IMPORTED_LONG_ENUMERATION_ITEM */, permanent /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CliRestrictionOption, _encode_CliRestrictionOption } from "../MAP-SS-DataTypes/CliRestrictionOption.ta.mjs";
// export { CliRestrictionOption, _enum_for_CliRestrictionOption, CliRestrictionOption_permanent /* IMPORTED_LONG_ENUMERATION_ITEM */, permanent /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CliRestrictionOption, _encode_CliRestrictionOption } from "../MAP-SS-DataTypes/CliRestrictionOption.ta.mjs";
import { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
// export { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ModificationRequestFor_CLIR_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationRequestFor-CLIR-Info ::= SEQUENCE {
 *     ss-Status    [0]    Ext-SS-Status    OPTIONAL,
 *     cliRestrictionOption    [1]  CliRestrictionOption    OPTIONAL,
 *     modifyNotificationToCSE    [2]    ModificationInstruction    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ModificationRequestFor_CLIR_Info {
    constructor (
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: OPTIONAL<Ext_SS_Status>,
        /**
         * @summary `cliRestrictionOption`.
         * @public
         * @readonly
         */
        readonly cliRestrictionOption: OPTIONAL<CliRestrictionOption>,
        /**
         * @summary `modifyNotificationToCSE`.
         * @public
         * @readonly
         */
        readonly modifyNotificationToCSE: OPTIONAL<ModificationInstruction>,
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
     * @summary Restructures an object into a ModificationRequestFor_CLIR_Info
     * @description
     * 
     * This takes an `object` and converts it to a `ModificationRequestFor_CLIR_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationRequestFor_CLIR_Info`.
     * @returns {ModificationRequestFor_CLIR_Info}
     */
    public static _from_object (_o: { [_K in keyof (ModificationRequestFor_CLIR_Info)]: (ModificationRequestFor_CLIR_Info)[_K] }): ModificationRequestFor_CLIR_Info {
        return new ModificationRequestFor_CLIR_Info(_o.ss_Status, _o.cliRestrictionOption, _o.modifyNotificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cliRestrictionOption`
         * @public
         * @static
         */

    public static _enum_for_cliRestrictionOption = _enum_for_CliRestrictionOption;        /**
         * @summary The enum used as the type of the component `modifyNotificationToCSE`
         * @public
         * @static
         */

    public static _enum_for_modifyNotificationToCSE = _enum_for_ModificationInstruction;
}

/**
 * @summary The Leading Root Component Types of ModificationRequestFor_CLIR_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModificationRequestFor_CLIR_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("cliRestrictionOption", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("modifyNotificationToCSE", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModificationRequestFor_CLIR_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModificationRequestFor_CLIR_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModificationRequestFor_CLIR_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModificationRequestFor_CLIR_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModificationRequestFor_CLIR_Info: $.ASN1Decoder<ModificationRequestFor_CLIR_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationRequestFor_CLIR_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationRequestFor_CLIR_Info (el: _Element): ModificationRequestFor_CLIR_Info {
    if (!_cached_decoder_for_ModificationRequestFor_CLIR_Info) { _cached_decoder_for_ModificationRequestFor_CLIR_Info = function (el: _Element): ModificationRequestFor_CLIR_Info {
    let ss_Status: OPTIONAL<Ext_SS_Status>;
    let cliRestrictionOption: OPTIONAL<CliRestrictionOption>;
    let modifyNotificationToCSE: OPTIONAL<ModificationInstruction>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "cliRestrictionOption": (_el: _Element): void => { cliRestrictionOption = $._decode_implicit<CliRestrictionOption>(() => _decode_CliRestrictionOption)(_el); },
        "modifyNotificationToCSE": (_el: _Element): void => { modifyNotificationToCSE = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModificationRequestFor_CLIR_Info,
        _extension_additions_list_spec_for_ModificationRequestFor_CLIR_Info,
        _root_component_type_list_2_spec_for_ModificationRequestFor_CLIR_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModificationRequestFor_CLIR_Info(
        ss_Status,
        cliRestrictionOption,
        modifyNotificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModificationRequestFor_CLIR_Info(el);
}

let _cached_encoder_for_ModificationRequestFor_CLIR_Info: $.ASN1Encoder<ModificationRequestFor_CLIR_Info> | null = null;

/**
 * @summary Encodes a(n) ModificationRequestFor_CLIR_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationRequestFor_CLIR_Info, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationRequestFor_CLIR_Info (value: ModificationRequestFor_CLIR_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationRequestFor_CLIR_Info) { _cached_encoder_for_ModificationRequestFor_CLIR_Info = function (value: ModificationRequestFor_CLIR_Info, elGetter: $.ASN1Encoder<ModificationRequestFor_CLIR_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER)),
            /* IF_ABSENT  */ ((value.cliRestrictionOption === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CliRestrictionOption, $.BER)(value.cliRestrictionOption, $.BER)),
            /* IF_ABSENT  */ ((value.modifyNotificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ModificationInstruction, $.BER)(value.modifyNotificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModificationRequestFor_CLIR_Info(value, elGetter);
}


/* eslint-enable */
