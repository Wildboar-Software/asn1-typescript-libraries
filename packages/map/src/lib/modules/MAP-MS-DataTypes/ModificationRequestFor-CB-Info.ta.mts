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
import { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
// export { SS_Code, _decode_SS_Code, _encode_SS_Code } from "../MAP-SS-Code/SS-Code.ta.mjs";
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
// export { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
// export { Password, _decode_Password, _encode_Password } from "../MAP-SS-DataTypes/Password.ta.mjs";
import { WrongPasswordAttemptsCounter, _decode_WrongPasswordAttemptsCounter, _encode_WrongPasswordAttemptsCounter } from "../MAP-MS-DataTypes/WrongPasswordAttemptsCounter.ta.mjs";
// export { WrongPasswordAttemptsCounter, _decode_WrongPasswordAttemptsCounter, _encode_WrongPasswordAttemptsCounter } from "../MAP-MS-DataTypes/WrongPasswordAttemptsCounter.ta.mjs";
import { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
// export { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ModificationRequestFor_CB_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationRequestFor-CB-Info ::= SEQUENCE {
 *     ss-Code    [0]    SS-Code,
 *     basicService    [1]    Ext-BasicServiceCode    OPTIONAL,
 *     ss-Status    [2]    Ext-SS-Status    OPTIONAL,
 *     password    [3]    Password    OPTIONAL,
 *     wrongPasswordAttemptsCounter    [4]    WrongPasswordAttemptsCounter    OPTIONAL,
 *     modifyNotificationToCSE    [5]    ModificationInstruction    OPTIONAL,
 *     extensionContainer    [6]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ModificationRequestFor_CB_Info {
    constructor (
        /**
         * @summary `ss_Code`.
         * @public
         * @readonly
         */
        readonly ss_Code: SS_Code,
        /**
         * @summary `basicService`.
         * @public
         * @readonly
         */
        readonly basicService: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `ss_Status`.
         * @public
         * @readonly
         */
        readonly ss_Status: OPTIONAL<Ext_SS_Status>,
        /**
         * @summary `password`.
         * @public
         * @readonly
         */
        readonly password: OPTIONAL<Password>,
        /**
         * @summary `wrongPasswordAttemptsCounter`.
         * @public
         * @readonly
         */
        readonly wrongPasswordAttemptsCounter: OPTIONAL<WrongPasswordAttemptsCounter>,
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
     * @summary Restructures an object into a ModificationRequestFor_CB_Info
     * @description
     * 
     * This takes an `object` and converts it to a `ModificationRequestFor_CB_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationRequestFor_CB_Info`.
     * @returns {ModificationRequestFor_CB_Info}
     */
    public static _from_object (_o: { [_K in keyof (ModificationRequestFor_CB_Info)]: (ModificationRequestFor_CB_Info)[_K] }): ModificationRequestFor_CB_Info {
        return new ModificationRequestFor_CB_Info(_o.ss_Code, _o.basicService, _o.ss_Status, _o.password, _o.wrongPasswordAttemptsCounter, _o.modifyNotificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `modifyNotificationToCSE`
         * @public
         * @static
         */

    public static _enum_for_modifyNotificationToCSE = _enum_for_ModificationInstruction;
}

/**
 * @summary The Leading Root Component Types of ModificationRequestFor_CB_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModificationRequestFor_CB_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("password", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("wrongPasswordAttemptsCounter", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("modifyNotificationToCSE", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ModificationRequestFor_CB_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModificationRequestFor_CB_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModificationRequestFor_CB_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModificationRequestFor_CB_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModificationRequestFor_CB_Info: $.ASN1Decoder<ModificationRequestFor_CB_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationRequestFor_CB_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationRequestFor_CB_Info (el: _Element): ModificationRequestFor_CB_Info {
    if (!_cached_decoder_for_ModificationRequestFor_CB_Info) { _cached_decoder_for_ModificationRequestFor_CB_Info = function (el: _Element): ModificationRequestFor_CB_Info {
    let ss_Code!: SS_Code;
    let basicService: OPTIONAL<Ext_BasicServiceCode>;
    let ss_Status: OPTIONAL<Ext_SS_Status>;
    let password: OPTIONAL<Password>;
    let wrongPasswordAttemptsCounter: OPTIONAL<WrongPasswordAttemptsCounter>;
    let modifyNotificationToCSE: OPTIONAL<ModificationInstruction>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "password": (_el: _Element): void => { password = $._decode_implicit<Password>(() => _decode_Password)(_el); },
        "wrongPasswordAttemptsCounter": (_el: _Element): void => { wrongPasswordAttemptsCounter = $._decode_implicit<WrongPasswordAttemptsCounter>(() => _decode_WrongPasswordAttemptsCounter)(_el); },
        "modifyNotificationToCSE": (_el: _Element): void => { modifyNotificationToCSE = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModificationRequestFor_CB_Info,
        _extension_additions_list_spec_for_ModificationRequestFor_CB_Info,
        _root_component_type_list_2_spec_for_ModificationRequestFor_CB_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModificationRequestFor_CB_Info(
        ss_Code,
        basicService,
        ss_Status,
        password,
        wrongPasswordAttemptsCounter,
        modifyNotificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModificationRequestFor_CB_Info(el);
}

let _cached_encoder_for_ModificationRequestFor_CB_Info: $.ASN1Encoder<ModificationRequestFor_CB_Info> | null = null;

/**
 * @summary Encodes a(n) ModificationRequestFor_CB_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationRequestFor_CB_Info, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationRequestFor_CB_Info (value: ModificationRequestFor_CB_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationRequestFor_CB_Info) { _cached_encoder_for_ModificationRequestFor_CB_Info = function (value: ModificationRequestFor_CB_Info, elGetter: $.ASN1Encoder<ModificationRequestFor_CB_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER),
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER)),
            /* IF_ABSENT  */ ((value.password === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Password, $.BER)(value.password, $.BER)),
            /* IF_ABSENT  */ ((value.wrongPasswordAttemptsCounter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_WrongPasswordAttemptsCounter, $.BER)(value.wrongPasswordAttemptsCounter, $.BER)),
            /* IF_ABSENT  */ ((value.modifyNotificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ModificationInstruction, $.BER)(value.modifyNotificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModificationRequestFor_CB_Info(value, elGetter);
}


/* eslint-enable */
