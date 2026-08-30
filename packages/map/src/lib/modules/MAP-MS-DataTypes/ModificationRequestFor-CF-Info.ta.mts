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
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { ISDN_SubaddressString, _decode_ISDN_SubaddressString, _encode_ISDN_SubaddressString } from "../MAP-CommonDataTypes/ISDN-SubaddressString.ta.mjs";
import { Ext_NoRepCondTime, _decode_Ext_NoRepCondTime, _encode_Ext_NoRepCondTime } from "../MAP-MS-DataTypes/Ext-NoRepCondTime.ta.mjs";
import { ModificationInstruction, _enum_for_ModificationInstruction, ModificationInstruction_deactivate /* IMPORTED_LONG_ENUMERATION_ITEM */, deactivate /* IMPORTED_SHORT_ENUMERATION_ITEM */, ModificationInstruction_activate /* IMPORTED_LONG_ENUMERATION_ITEM */, activate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ModificationInstruction, _encode_ModificationInstruction } from "../MAP-MS-DataTypes/ModificationInstruction.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ModificationRequestFor_CF_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationRequestFor-CF-Info ::= SEQUENCE {
 *     ss-Code    [0]    SS-Code,
 *     basicService    [1]    Ext-BasicServiceCode    OPTIONAL,
 *     ss-Status    [2]    Ext-SS-Status    OPTIONAL,
 *     forwardedToNumber    [3]    AddressString    OPTIONAL,
 *     forwardedToSubaddress    [4]    ISDN-SubaddressString    OPTIONAL,
 *     noReplyConditionTime    [5]    Ext-NoRepCondTime    OPTIONAL,
 *     modifyNotificationToCSE    [6]    ModificationInstruction    OPTIONAL,
 *     extensionContainer    [7]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class ModificationRequestFor_CF_Info {
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
         * @summary `forwardedToNumber`.
         * @public
         * @readonly
         */
        readonly forwardedToNumber: OPTIONAL<AddressString>,
        /**
         * @summary `forwardedToSubaddress`.
         * @public
         * @readonly
         */
        readonly forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString>,
        /**
         * @summary `noReplyConditionTime`.
         * @public
         * @readonly
         */
        readonly noReplyConditionTime: OPTIONAL<Ext_NoRepCondTime>,
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
     * @summary Restructures an object into a ModificationRequestFor_CF_Info
     * @description
     * 
     * This takes an `object` and converts it to a `ModificationRequestFor_CF_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ModificationRequestFor_CF_Info`.
     * @returns {ModificationRequestFor_CF_Info}
     */
    public static _from_object (_o: { [_K in keyof (ModificationRequestFor_CF_Info)]: (ModificationRequestFor_CF_Info)[_K] }): ModificationRequestFor_CF_Info {
        return new ModificationRequestFor_CF_Info(_o.ss_Code, _o.basicService, _o.ss_Status, _o.forwardedToNumber, _o.forwardedToSubaddress, _o.noReplyConditionTime, _o.modifyNotificationToCSE, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `modifyNotificationToCSE`
         * @public
         * @static
         */

    public static _enum_for_modifyNotificationToCSE = _enum_for_ModificationInstruction;
}

/**
 * @summary The Leading Root Component Types of ModificationRequestFor_CF_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ModificationRequestFor_CF_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("basicService", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ss-Status", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("forwardedToNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("forwardedToSubaddress", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("noReplyConditionTime", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("modifyNotificationToCSE", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of ModificationRequestFor_CF_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ModificationRequestFor_CF_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ModificationRequestFor_CF_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ModificationRequestFor_CF_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ModificationRequestFor_CF_Info: $.ASN1Decoder<ModificationRequestFor_CF_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationRequestFor_CF_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationRequestFor_CF_Info (el: _Element): ModificationRequestFor_CF_Info {
    if (!_cached_decoder_for_ModificationRequestFor_CF_Info) { _cached_decoder_for_ModificationRequestFor_CF_Info = function (el: _Element): ModificationRequestFor_CF_Info {
    let ss_Code!: SS_Code;
    let basicService: OPTIONAL<Ext_BasicServiceCode> = undefined;
    let ss_Status: OPTIONAL<Ext_SS_Status> = undefined;
    let forwardedToNumber: OPTIONAL<AddressString> = undefined;
    let forwardedToSubaddress: OPTIONAL<ISDN_SubaddressString> = undefined;
    let noReplyConditionTime: OPTIONAL<Ext_NoRepCondTime> = undefined;
    let modifyNotificationToCSE: OPTIONAL<ModificationInstruction> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = $._decode_implicit<SS_Code>(() => _decode_SS_Code)(_el); },
        "basicService": (_el: _Element): void => { basicService = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = $._decode_implicit<Ext_SS_Status>(() => _decode_Ext_SS_Status)(_el); },
        "forwardedToNumber": (_el: _Element): void => { forwardedToNumber = $._decode_implicit<AddressString>(() => _decode_AddressString)(_el); },
        "forwardedToSubaddress": (_el: _Element): void => { forwardedToSubaddress = $._decode_implicit<ISDN_SubaddressString>(() => _decode_ISDN_SubaddressString)(_el); },
        "noReplyConditionTime": (_el: _Element): void => { noReplyConditionTime = $._decode_implicit<Ext_NoRepCondTime>(() => _decode_Ext_NoRepCondTime)(_el); },
        "modifyNotificationToCSE": (_el: _Element): void => { modifyNotificationToCSE = $._decode_implicit<ModificationInstruction>(() => _decode_ModificationInstruction)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ModificationRequestFor_CF_Info,
        _extension_additions_list_spec_for_ModificationRequestFor_CF_Info,
        _root_component_type_list_2_spec_for_ModificationRequestFor_CF_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ModificationRequestFor_CF_Info(
        ss_Code,
        basicService,
        ss_Status,
        forwardedToNumber,
        forwardedToSubaddress,
        noReplyConditionTime,
        modifyNotificationToCSE,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ModificationRequestFor_CF_Info(el);
}

let _cached_encoder_for_ModificationRequestFor_CF_Info: $.ASN1Encoder<ModificationRequestFor_CF_Info> | null = null;

/**
 * @summary Encodes a(n) ModificationRequestFor_CF_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationRequestFor_CF_Info, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationRequestFor_CF_Info (value: ModificationRequestFor_CF_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationRequestFor_CF_Info) { _cached_encoder_for_ModificationRequestFor_CF_Info = function (value: ModificationRequestFor_CF_Info, elGetter: $.ASN1Encoder<ModificationRequestFor_CF_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SS_Code, $.BER)(value.ss_Code, $.BER),
            /* IF_ABSENT  */ ((value.basicService === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicService, $.BER)),
            /* IF_ABSENT  */ ((value.ss_Status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Ext_SS_Status, $.BER)(value.ss_Status, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AddressString, $.BER)(value.forwardedToNumber, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedToSubaddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ISDN_SubaddressString, $.BER)(value.forwardedToSubaddress, $.BER)),
            /* IF_ABSENT  */ ((value.noReplyConditionTime === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Ext_NoRepCondTime, $.BER)(value.noReplyConditionTime, $.BER)),
            /* IF_ABSENT  */ ((value.modifyNotificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ModificationInstruction, $.BER)(value.modifyNotificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ModificationRequestFor_CF_Info(value, elGetter);
}


/* eslint-enable */
