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
import { LCSServiceTypeID, _decode_LCSServiceTypeID, _encode_LCSServiceTypeID } from "../MAP-CommonDataTypes/LCSServiceTypeID.ta.mjs";
import { GMLC_Restriction, _enum_for_GMLC_Restriction, GMLC_Restriction_gmlc_List /* IMPORTED_LONG_ENUMERATION_ITEM */, gmlc_List /* IMPORTED_SHORT_ENUMERATION_ITEM */, GMLC_Restriction_home_Country /* IMPORTED_LONG_ENUMERATION_ITEM */, home_Country /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GMLC_Restriction, _encode_GMLC_Restriction } from "../MAP-MS-DataTypes/GMLC-Restriction.ta.mjs";
import { NotificationToMSUser, _enum_for_NotificationToMSUser, NotificationToMSUser_notifyLocationAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyLocationAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_locationNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, locationNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NotificationToMSUser, _encode_NotificationToMSUser } from "../MAP-MS-DataTypes/NotificationToMSUser.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceType ::= SEQUENCE {
 *     serviceTypeIdentity    LCSServiceTypeID,
 *     gmlc-Restriction    [0] GMLC-Restriction    OPTIONAL,
 *     notificationToMSUser    [1] NotificationToMSUser    OPTIONAL,
 *     -- If notificationToMSUser is not received, the default value according to 
 *     -- 3GPP TS 23.271 shall be assumed.
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class ServiceType {
    constructor (
        /**
         * @summary `serviceTypeIdentity`.
         * @public
         * @readonly
         */
        readonly serviceTypeIdentity: LCSServiceTypeID,
        /**
         * @summary `gmlc_Restriction`.
         * @public
         * @readonly
         */
        readonly gmlc_Restriction: OPTIONAL<GMLC_Restriction>,
        /**
         * @summary `notificationToMSUser`.
         * @public
         * @readonly
         */
        readonly notificationToMSUser: OPTIONAL<NotificationToMSUser>,
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
     * @summary Restructures an object into a ServiceType
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceType`.
     * @returns {ServiceType}
     */
    public static _from_object (_o: { [_K in keyof (ServiceType)]: (ServiceType)[_K] }): ServiceType {
        return new ServiceType(_o.serviceTypeIdentity, _o.gmlc_Restriction, _o.notificationToMSUser, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `gmlc_Restriction`
         * @public
         * @static
         */

    public static _enum_for_gmlc_Restriction = _enum_for_GMLC_Restriction;        /**
         * @summary The enum used as the type of the component `notificationToMSUser`
         * @public
         * @static
         */

    public static _enum_for_notificationToMSUser = _enum_for_NotificationToMSUser;
}

/**
 * @summary The Leading Root Component Types of ServiceType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceType: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceTypeIdentity", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("gmlc-Restriction", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("notificationToMSUser", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ServiceType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceType: $.ASN1Decoder<ServiceType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceType (el: _Element): ServiceType {
    if (!_cached_decoder_for_ServiceType) { _cached_decoder_for_ServiceType = function (el: _Element): ServiceType {
    let serviceTypeIdentity!: LCSServiceTypeID;
    let gmlc_Restriction: OPTIONAL<GMLC_Restriction> = undefined;
    let notificationToMSUser: OPTIONAL<NotificationToMSUser> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceTypeIdentity": (_el: _Element): void => { serviceTypeIdentity = _decode_LCSServiceTypeID(_el); },
        "gmlc-Restriction": (_el: _Element): void => { gmlc_Restriction = $._decode_implicit<GMLC_Restriction>(() => _decode_GMLC_Restriction)(_el); },
        "notificationToMSUser": (_el: _Element): void => { notificationToMSUser = $._decode_implicit<NotificationToMSUser>(() => _decode_NotificationToMSUser)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceType,
        _extension_additions_list_spec_for_ServiceType,
        _root_component_type_list_2_spec_for_ServiceType,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceType(
        serviceTypeIdentity,
        gmlc_Restriction,
        notificationToMSUser,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceType(el);
}

let _cached_encoder_for_ServiceType: $.ASN1Encoder<ServiceType> | null = null;

/**
 * @summary Encodes a(n) ServiceType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceType, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceType (value: ServiceType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceType) { _cached_encoder_for_ServiceType = function (value: ServiceType, elGetter: $.ASN1Encoder<ServiceType>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LCSServiceTypeID(value.serviceTypeIdentity, $.BER),
            /* IF_ABSENT  */ ((value.gmlc_Restriction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GMLC_Restriction, $.BER)(value.gmlc_Restriction, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToMSUser === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationToMSUser, $.BER)(value.notificationToMSUser, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceType(value, elGetter);
}


/* eslint-enable */
