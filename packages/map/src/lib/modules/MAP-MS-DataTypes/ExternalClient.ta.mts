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
import { LCSClientExternalID, _decode_LCSClientExternalID, _encode_LCSClientExternalID } from "../MAP-CommonDataTypes/LCSClientExternalID.ta.mjs";
import { GMLC_Restriction, _enum_for_GMLC_Restriction, GMLC_Restriction_gmlc_List /* IMPORTED_LONG_ENUMERATION_ITEM */, gmlc_List /* IMPORTED_SHORT_ENUMERATION_ITEM */, GMLC_Restriction_home_Country /* IMPORTED_LONG_ENUMERATION_ITEM */, home_Country /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_GMLC_Restriction, _encode_GMLC_Restriction } from "../MAP-MS-DataTypes/GMLC-Restriction.ta.mjs";
import { NotificationToMSUser, _enum_for_NotificationToMSUser, NotificationToMSUser_notifyLocationAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyLocationAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, notifyAndVerify_LocationNotAllowedIfNoResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, NotificationToMSUser_locationNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, locationNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NotificationToMSUser, _encode_NotificationToMSUser } from "../MAP-MS-DataTypes/NotificationToMSUser.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary ExternalClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExternalClient ::= SEQUENCE {
 *     clientIdentity    LCSClientExternalID,
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
class ExternalClient {
    constructor (
        /**
         * @summary `clientIdentity`.
         * @public
         * @readonly
         */
        readonly clientIdentity: LCSClientExternalID,
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
     * @summary Restructures an object into a ExternalClient
     * @description
     * 
     * This takes an `object` and converts it to a `ExternalClient`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExternalClient`.
     * @returns {ExternalClient}
     */
    public static _from_object (_o: { [_K in keyof (ExternalClient)]: (ExternalClient)[_K] }): ExternalClient {
        return new ExternalClient(_o.clientIdentity, _o.gmlc_Restriction, _o.notificationToMSUser, _o.extensionContainer, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of ExternalClient
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExternalClient: $.ComponentSpec[] = [
    new $.ComponentSpec("clientIdentity", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("gmlc-Restriction", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("notificationToMSUser", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ExternalClient
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExternalClient: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExternalClient
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExternalClient: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExternalClient: $.ASN1Decoder<ExternalClient> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExternalClient
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExternalClient (el: _Element): ExternalClient {
    if (!_cached_decoder_for_ExternalClient) { _cached_decoder_for_ExternalClient = function (el: _Element): ExternalClient {
    let clientIdentity!: LCSClientExternalID;
    let gmlc_Restriction: OPTIONAL<GMLC_Restriction> = undefined;
    let notificationToMSUser: OPTIONAL<NotificationToMSUser> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "clientIdentity": (_el: _Element): void => { clientIdentity = _decode_LCSClientExternalID(_el); },
        "gmlc-Restriction": (_el: _Element): void => { gmlc_Restriction = $._decode_implicit<GMLC_Restriction>(() => _decode_GMLC_Restriction)(_el); },
        "notificationToMSUser": (_el: _Element): void => { notificationToMSUser = $._decode_implicit<NotificationToMSUser>(() => _decode_NotificationToMSUser)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExternalClient,
        _extension_additions_list_spec_for_ExternalClient,
        _root_component_type_list_2_spec_for_ExternalClient,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExternalClient(
        clientIdentity,
        gmlc_Restriction,
        notificationToMSUser,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExternalClient(el);
}

let _cached_encoder_for_ExternalClient: $.ASN1Encoder<ExternalClient> | null = null;

/**
 * @summary Encodes a(n) ExternalClient into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExternalClient, encoded as an ASN.1 Element.
 */
export
function _encode_ExternalClient (value: ExternalClient, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExternalClient) { _cached_encoder_for_ExternalClient = function (value: ExternalClient, elGetter: $.ASN1Encoder<ExternalClient>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LCSClientExternalID(value.clientIdentity, $.BER),
            /* IF_ABSENT  */ ((value.gmlc_Restriction === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GMLC_Restriction, $.BER)(value.gmlc_Restriction, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToMSUser === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationToMSUser, $.BER)(value.notificationToMSUser, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ExternalClient(value, elGetter);
}


/* eslint-enable */
