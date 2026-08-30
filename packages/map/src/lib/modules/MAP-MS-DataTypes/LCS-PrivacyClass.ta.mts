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
import { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
// export { Ext_SS_Status, _decode_Ext_SS_Status, _encode_Ext_SS_Status } from "../MAP-CommonDataTypes/Ext-SS-Status.ta.mjs";
import { NotificationToMSUser, _enum_for_NotificationToMSUser, NotificationToMSUser_notifyLocationAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyLocationAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_locationNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, locationNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NotificationToMSUser, _encode_NotificationToMSUser } from "../MAP-MS-DataTypes/NotificationToMSUser.ta.mjs";
// export { NotificationToMSUser, _enum_for_NotificationToMSUser, NotificationToMSUser_notifyLocationAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyLocationAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_locationNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, locationNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NotificationToMSUser, _encode_NotificationToMSUser } from "../MAP-MS-DataTypes/NotificationToMSUser.ta.mjs";
import { ExternalClientList, _decode_ExternalClientList, _encode_ExternalClientList } from "../MAP-MS-DataTypes/ExternalClientList.ta.mjs";
// export { ExternalClientList, _decode_ExternalClientList, _encode_ExternalClientList } from "../MAP-MS-DataTypes/ExternalClientList.ta.mjs";
import { PLMNClientList, _decode_PLMNClientList, _encode_PLMNClientList } from "../MAP-MS-DataTypes/PLMNClientList.ta.mjs";
// export { PLMNClientList, _decode_PLMNClientList, _encode_PLMNClientList } from "../MAP-MS-DataTypes/PLMNClientList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Ext_ExternalClientList, _decode_Ext_ExternalClientList, _encode_Ext_ExternalClientList } from "../MAP-MS-DataTypes/Ext-ExternalClientList.ta.mjs";
// export { Ext_ExternalClientList, _decode_Ext_ExternalClientList, _encode_Ext_ExternalClientList } from "../MAP-MS-DataTypes/Ext-ExternalClientList.ta.mjs";
import { ServiceTypeList, _decode_ServiceTypeList, _encode_ServiceTypeList } from "../MAP-MS-DataTypes/ServiceTypeList.ta.mjs";
// export { ServiceTypeList, _decode_ServiceTypeList, _encode_ServiceTypeList } from "../MAP-MS-DataTypes/ServiceTypeList.ta.mjs";


/**
 * @summary LCS_PrivacyClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-PrivacyClass ::= SEQUENCE {
 *     ss-Code    SS-Code,
 *     ss-Status    Ext-SS-Status,
 *     notificationToMSUser    [0] NotificationToMSUser    OPTIONAL,
 *     -- notificationToMSUser may be sent only for SS-codes callSessionRelated
 *     -- and callSessionUnrelated. If not received for SS-codes callSessionRelated
 *     -- and callSessionUnrelated,
 *     -- the default values according to 3GPP TS 23.271 shall be assumed.
 *     externalClientList    [1] ExternalClientList    OPTIONAL,
 *     -- externalClientList may be sent only for SS-code callSessionUnrelated to a
 *     -- visited node that does not support LCS Release 4 or later versions.
 *     -- externalClientList may be sent only for SS-codes callSessionUnrelated and
 *     -- callSessionRelated to a visited node that supports LCS Release 4 or later versions.
 *     plmnClientList    [2] PLMNClientList    OPTIONAL,
 *     -- plmnClientList may be sent only for SS-code plmnoperator.
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...,
 *     ext-externalClientList    [4] Ext-ExternalClientList    OPTIONAL,
 *     -- Ext-externalClientList may be sent only if the visited node supports LCS Release 4 or
 *     -- later versions, the user did specify more than 5 clients, and White Book SCCP is used.
 *     serviceTypeList    [5]    ServiceTypeList    OPTIONAL
 *     -- serviceTypeList may be sent only for SS-code serviceType and if the visited node
 *     -- supports LCS Release 5 or later versions.
 *     -- 
 *     -- if segmentation is used, the complete LCS-PrivacyClass shall be sent in one segment
 * }
 * ```
 * 
 * @class
 */
export
class LCS_PrivacyClass {
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
         * @summary `notificationToMSUser`.
         * @public
         * @readonly
         */
        readonly notificationToMSUser: OPTIONAL<NotificationToMSUser>,
        /**
         * @summary `externalClientList`.
         * @public
         * @readonly
         */
        readonly externalClientList: OPTIONAL<ExternalClientList>,
        /**
         * @summary `plmnClientList`.
         * @public
         * @readonly
         */
        readonly plmnClientList: OPTIONAL<PLMNClientList>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ext_externalClientList`.
         * @public
         * @readonly
         */
        readonly ext_externalClientList: OPTIONAL<Ext_ExternalClientList>,
        /**
         * @summary `serviceTypeList`.
         * @public
         * @readonly
         */
        readonly serviceTypeList: OPTIONAL<ServiceTypeList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LCS_PrivacyClass
     * @description
     * 
     * This takes an `object` and converts it to a `LCS_PrivacyClass`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LCS_PrivacyClass`.
     * @returns {LCS_PrivacyClass}
     */
    public static _from_object (_o: { [_K in keyof (LCS_PrivacyClass)]: (LCS_PrivacyClass)[_K] }): LCS_PrivacyClass {
        return new LCS_PrivacyClass(_o.ss_Code, _o.ss_Status, _o.notificationToMSUser, _o.externalClientList, _o.plmnClientList, _o.extensionContainer, _o.ext_externalClientList, _o.serviceTypeList, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `notificationToMSUser`
         * @public
         * @static
         */

    public static _enum_for_notificationToMSUser = _enum_for_NotificationToMSUser;
}

/**
 * @summary The Leading Root Component Types of LCS_PrivacyClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LCS_PrivacyClass: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-Code", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("ss-Status", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("notificationToMSUser", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("externalClientList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("plmnClientList", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of LCS_PrivacyClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LCS_PrivacyClass: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LCS_PrivacyClass
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LCS_PrivacyClass: $.ComponentSpec[] = [
    new $.ComponentSpec("ext-externalClientList", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("serviceTypeList", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

let _cached_decoder_for_LCS_PrivacyClass: $.ASN1Decoder<LCS_PrivacyClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_PrivacyClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LCS_PrivacyClass (el: _Element): LCS_PrivacyClass {
    if (!_cached_decoder_for_LCS_PrivacyClass) { _cached_decoder_for_LCS_PrivacyClass = function (el: _Element): LCS_PrivacyClass {
    let ss_Code!: SS_Code;
    let ss_Status!: Ext_SS_Status;
    let notificationToMSUser: OPTIONAL<NotificationToMSUser>;
    let externalClientList: OPTIONAL<ExternalClientList>;
    let plmnClientList: OPTIONAL<PLMNClientList>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ext_externalClientList: OPTIONAL<Ext_ExternalClientList>;
    let serviceTypeList: OPTIONAL<ServiceTypeList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-Code": (_el: _Element): void => { ss_Code = _decode_SS_Code(_el); },
        "ss-Status": (_el: _Element): void => { ss_Status = _decode_Ext_SS_Status(_el); },
        "notificationToMSUser": (_el: _Element): void => { notificationToMSUser = $._decode_implicit<NotificationToMSUser>(() => _decode_NotificationToMSUser)(_el); },
        "externalClientList": (_el: _Element): void => { externalClientList = $._decode_implicit<ExternalClientList>(() => _decode_ExternalClientList)(_el); },
        "plmnClientList": (_el: _Element): void => { plmnClientList = $._decode_implicit<PLMNClientList>(() => _decode_PLMNClientList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "ext-externalClientList": (_el: _Element): void => { ext_externalClientList = $._decode_implicit<Ext_ExternalClientList>(() => _decode_Ext_ExternalClientList)(_el); },
        "serviceTypeList": (_el: _Element): void => { serviceTypeList = $._decode_implicit<ServiceTypeList>(() => _decode_ServiceTypeList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LCS_PrivacyClass,
        _extension_additions_list_spec_for_LCS_PrivacyClass,
        _root_component_type_list_2_spec_for_LCS_PrivacyClass,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LCS_PrivacyClass(
        ss_Code,
        ss_Status,
        notificationToMSUser,
        externalClientList,
        plmnClientList,
        extensionContainer,
        ext_externalClientList,
        serviceTypeList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LCS_PrivacyClass(el);
}

let _cached_encoder_for_LCS_PrivacyClass: $.ASN1Encoder<LCS_PrivacyClass> | null = null;

/**
 * @summary Encodes a(n) LCS_PrivacyClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_PrivacyClass, encoded as an ASN.1 Element.
 */
export
function _encode_LCS_PrivacyClass (value: LCS_PrivacyClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LCS_PrivacyClass) { _cached_encoder_for_LCS_PrivacyClass = function (value: LCS_PrivacyClass, elGetter: $.ASN1Encoder<LCS_PrivacyClass>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_Code(value.ss_Code, $.BER),
            /* REQUIRED   */ _encode_Ext_SS_Status(value.ss_Status, $.BER),
            /* IF_ABSENT  */ ((value.notificationToMSUser === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_NotificationToMSUser, $.BER)(value.notificationToMSUser, $.BER)),
            /* IF_ABSENT  */ ((value.externalClientList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExternalClientList, $.BER)(value.externalClientList, $.BER)),
            /* IF_ABSENT  */ ((value.plmnClientList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_PLMNClientList, $.BER)(value.plmnClientList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ext_externalClientList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Ext_ExternalClientList, $.BER)(value.ext_externalClientList, $.BER)),
            /* IF_ABSENT  */ ((value.serviceTypeList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ServiceTypeList, $.BER)(value.serviceTypeList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LCS_PrivacyClass(value, elGetter);
}


/* eslint-enable */
