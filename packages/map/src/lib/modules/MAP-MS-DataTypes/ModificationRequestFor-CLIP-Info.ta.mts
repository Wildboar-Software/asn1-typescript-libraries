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
import { OverrideCategory, _enum_for_OverrideCategory, OverrideCategory_overrideEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, OverrideCategory_overrideDisabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideDisabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OverrideCategory, _encode_OverrideCategory } from "../MAP-SS-DataTypes/OverrideCategory.ta.mjs";
// export { OverrideCategory, _enum_for_OverrideCategory, OverrideCategory_overrideEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, OverrideCategory_overrideDisabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideDisabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OverrideCategory, _encode_OverrideCategory } from "../MAP-SS-DataTypes/OverrideCategory.ta.mjs";
import { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
// export { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ModificationRequestFor_CLIP_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationRequestFor-CLIP-Info ::= SEQUENCE {
 *     ss-Status    [0]    Ext-SS-Status    OPTIONAL,
 *     overrideCategory    [1]  OverrideCategory    OPTIONAL,
 *     modifyNotificationToCSE    [2]    ModificationInstruction    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ModificationRequestFor_CLIP_Info {
    constructor (
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: OPTIONAL<Ext_SS_Status>,
        /**
         * @summary `overrideCategory`.
         * @public
         * @readonly
         */
        readonly overrideCategory: OPTIONAL<OverrideCategory>,
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
     * @summary Restructures an object into a ModificationRequestFor_CLIP_Info
     * @description
     * 
     * This takes an `object` and converts it to a `ModificationRequestFor_CLIP_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationRequestFor_CLIP_Info`.
     * @returns {ModificationRequestFor_CLIP_Info}
     */
    public static _from_object (_o: { [_K in keyof (ModificationRequestFor_CLIP_Info)]: (ModificationRequestFor_CLIP_Info)[_K] }): ModificationRequestFor_CLIP_Info {
        return new ModificationRequestFor_CLIP_Info(_o.ss_Status, _o.overrideCategory, _o.modifyNotificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `overrideCategory`
         * @public
         * @static
         */

    public static _enum_for_overrideCategory = _enum_for_OverrideCategory;        /**
         * @summary The enum used as the type of the component `modifyNotificationToCSE`
         * @public
         * @static
         */

    public static _enum_for_modifyNotificationToCSE = _enum_for_ModificationInstruction;
}

/**
 * @summary The Leading Root Component Types of ModificationRequestFor_CLIP_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModificationRequestFor_CLIP_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("overrideCategory", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("modifyNotificationToCSE", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModificationRequestFor_CLIP_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModificationRequestFor_CLIP_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModificationRequestFor_CLIP_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModificationRequestFor_CLIP_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModificationRequestFor_CLIP_Info: $.ASN1Decoder<ModificationRequestFor_CLIP_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationRequestFor_CLIP_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationRequestFor_CLIP_Info (el: _Element): ModificationRequestFor_CLIP_Info {
    if (!_cached_decoder_for_ModificationRequestFor_CLIP_Info) { _cached_decoder_for_ModificationRequestFor_CLIP_Info = function (el: _Element): ModificationRequestFor_CLIP_Info {
    let ss_Status: OPTIONAL<Ext_SS_Status>;
    let overrideCategory: OPTIONAL<OverrideCategory>;
    let modifyNotificationToCSE: OPTIONAL<ModificationInstruction>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "overrideCategory": (_el: _Element): void => { overrideCategory = $._decode_implicit<OverrideCategory>(() => _decode_OverrideCategory)(_el); },
        "modifyNotificationToCSE": (_el: _Element): void => { modifyNotificationToCSE = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModificationRequestFor_CLIP_Info,
        _extension_additions_list_spec_for_ModificationRequestFor_CLIP_Info,
        _root_component_type_list_2_spec_for_ModificationRequestFor_CLIP_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModificationRequestFor_CLIP_Info(
        ss_Status,
        overrideCategory,
        modifyNotificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModificationRequestFor_CLIP_Info(el);
}

let _cached_encoder_for_ModificationRequestFor_CLIP_Info: $.ASN1Encoder<ModificationRequestFor_CLIP_Info> | null = null;

/**
 * @summary Encodes a(n) ModificationRequestFor_CLIP_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationRequestFor_CLIP_Info, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationRequestFor_CLIP_Info (value: ModificationRequestFor_CLIP_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationRequestFor_CLIP_Info) { _cached_encoder_for_ModificationRequestFor_CLIP_Info = function (value: ModificationRequestFor_CLIP_Info, elGetter: $.ASN1Encoder<ModificationRequestFor_CLIP_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER)),
            /* IF_ABSENT  */ ((value.overrideCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_OverrideCategory, $.BER)(value.overrideCategory, $.BER)),
            /* IF_ABSENT  */ ((value.modifyNotificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ModificationInstruction, $.BER)(value.modifyNotificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModificationRequestFor_CLIP_Info(value, elGetter);
}


/* eslint-enable */
