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
import { AccessMode, AccessMode_read /* IMPORTED_LONG_NAMED_BIT */, read /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_update /* IMPORTED_LONG_NAMED_BIT */, update /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_execute /* IMPORTED_LONG_NAMED_BIT */, execute /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_delete /* IMPORTED_LONG_NAMED_BIT */, delete_ /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_attribute /* IMPORTED_LONG_NAMED_BIT */, attribute /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_cds /* IMPORTED_LONG_NAMED_BIT */, pso_cds /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_verif /* IMPORTED_LONG_NAMED_BIT */, pso_verif /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_dec /* IMPORTED_LONG_NAMED_BIT */, pso_dec /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_enc /* IMPORTED_LONG_NAMED_BIT */, pso_enc /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_int_auth /* IMPORTED_LONG_NAMED_BIT */, int_auth /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_ext_auth /* IMPORTED_LONG_NAMED_BIT */, ext_auth /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessMode, _encode_AccessMode } from "../CryptographicInformationFramework/AccessMode.ta.mjs";
// export { AccessMode, AccessMode_read /* IMPORTED_LONG_NAMED_BIT */, read /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_update /* IMPORTED_LONG_NAMED_BIT */, update /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_execute /* IMPORTED_LONG_NAMED_BIT */, execute /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_delete /* IMPORTED_LONG_NAMED_BIT */, delete_ /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_attribute /* IMPORTED_LONG_NAMED_BIT */, attribute /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_cds /* IMPORTED_LONG_NAMED_BIT */, pso_cds /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_verif /* IMPORTED_LONG_NAMED_BIT */, pso_verif /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_dec /* IMPORTED_LONG_NAMED_BIT */, pso_dec /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_pso_enc /* IMPORTED_LONG_NAMED_BIT */, pso_enc /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_int_auth /* IMPORTED_LONG_NAMED_BIT */, int_auth /* IMPORTED_SHORT_NAMED_BIT */, AccessMode_ext_auth /* IMPORTED_LONG_NAMED_BIT */, ext_auth /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessMode, _encode_AccessMode } from "../CryptographicInformationFramework/AccessMode.ta.mjs";
import { SecurityCondition, _decode_SecurityCondition, _encode_SecurityCondition } from "../CryptographicInformationFramework/SecurityCondition.ta.mjs";
// export { SecurityCondition, _decode_SecurityCondition, _encode_SecurityCondition } from "../CryptographicInformationFramework/SecurityCondition.ta.mjs";
import { CommunicationMode, CommunicationMode_contact /* IMPORTED_LONG_NAMED_BIT */, contact /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactLess /* IMPORTED_LONG_NAMED_BIT */, contactLess /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_usb /* IMPORTED_LONG_NAMED_BIT */, usb /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_nfc /* IMPORTED_LONG_NAMED_BIT */, nfc /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactC6 /* IMPORTED_LONG_NAMED_BIT */, contactC6 /* IMPORTED_SHORT_NAMED_BIT */, _decode_CommunicationMode, _encode_CommunicationMode } from "../CryptographicInformationFramework/CommunicationMode.ta.mjs";
// export { CommunicationMode, CommunicationMode_contact /* IMPORTED_LONG_NAMED_BIT */, contact /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactLess /* IMPORTED_LONG_NAMED_BIT */, contactLess /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_usb /* IMPORTED_LONG_NAMED_BIT */, usb /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_nfc /* IMPORTED_LONG_NAMED_BIT */, nfc /* IMPORTED_SHORT_NAMED_BIT */, CommunicationMode_contactC6 /* IMPORTED_LONG_NAMED_BIT */, contactC6 /* IMPORTED_SHORT_NAMED_BIT */, _decode_CommunicationMode, _encode_CommunicationMode } from "../CryptographicInformationFramework/CommunicationMode.ta.mjs";
import { LifeCycleStatus, _enum_for_LifeCycleStatus, LifeCycleStatus_creation /* IMPORTED_LONG_ENUMERATION_ITEM */, creation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_init /* IMPORTED_LONG_ENUMERATION_ITEM */, init /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_op_activated /* IMPORTED_LONG_ENUMERATION_ITEM */, op_activated /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_op_deactivated /* IMPORTED_LONG_ENUMERATION_ITEM */, op_deactivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_termination /* IMPORTED_LONG_ENUMERATION_ITEM */, termination /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_proprietary /* IMPORTED_LONG_ENUMERATION_ITEM */, proprietary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LifeCycleStatus, _encode_LifeCycleStatus } from "../CryptographicInformationFramework/LifeCycleStatus.ta.mjs";
// export { LifeCycleStatus, _enum_for_LifeCycleStatus, LifeCycleStatus_creation /* IMPORTED_LONG_ENUMERATION_ITEM */, creation /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_init /* IMPORTED_LONG_ENUMERATION_ITEM */, init /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_op_activated /* IMPORTED_LONG_ENUMERATION_ITEM */, op_activated /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_op_deactivated /* IMPORTED_LONG_ENUMERATION_ITEM */, op_deactivated /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_termination /* IMPORTED_LONG_ENUMERATION_ITEM */, termination /* IMPORTED_SHORT_ENUMERATION_ITEM */, LifeCycleStatus_proprietary /* IMPORTED_LONG_ENUMERATION_ITEM */, proprietary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LifeCycleStatus, _encode_LifeCycleStatus } from "../CryptographicInformationFramework/LifeCycleStatus.ta.mjs";
import { RangeOfDate, _decode_RangeOfDate, _encode_RangeOfDate } from "../CryptographicInformationFramework/RangeOfDate.ta.mjs";
// export { RangeOfDate, _decode_RangeOfDate, _encode_RangeOfDate } from "../CryptographicInformationFramework/RangeOfDate.ta.mjs";


/**
 * @summary AccessControlRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessControlRule ::= SEQUENCE {
 *     accessMode           AccessMode,
 *     securityCondition    SecurityCondition,
 *     communicationMode    CommunicationMode OPTIONAL,
 *     lifeCycleStatus      LifeCycleStatus OPTIONAL,
 *     verifLimitDates      RangeOfDate OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class AccessControlRule {
    constructor (
        /**
         * @summary `accessMode`.
         * @public
         * @readonly
         */
        readonly accessMode: AccessMode,
        /**
         * @summary `securityCondition`.
         * @public
         * @readonly
         */
        readonly securityCondition: SecurityCondition,
        /**
         * @summary `communicationMode`.
         * @public
         * @readonly
         */
        readonly communicationMode: OPTIONAL<CommunicationMode>,
        /**
         * @summary `lifeCycleStatus`.
         * @public
         * @readonly
         */
        readonly lifeCycleStatus: OPTIONAL<LifeCycleStatus>,
        /**
         * @summary `verifLimitDates`.
         * @public
         * @readonly
         */
        readonly verifLimitDates: OPTIONAL<RangeOfDate>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AccessControlRule
     * @description
     * 
     * This takes an `object` and converts it to a `AccessControlRule`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AccessControlRule`.
     * @returns {AccessControlRule}
     */
    public static _from_object (_o: { [_K in keyof (AccessControlRule)]: (AccessControlRule)[_K] }): AccessControlRule {
        return new AccessControlRule(_o.accessMode, _o.securityCondition, _o.communicationMode, _o.lifeCycleStatus, _o.verifLimitDates, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `lifeCycleStatus`
         * @public
         * @static
         */

    public static _enum_for_lifeCycleStatus = _enum_for_LifeCycleStatus;
}

/**
 * @summary The Leading Root Component Types of AccessControlRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AccessControlRule: $.ComponentSpec[] = [
    new $.ComponentSpec("accessMode", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("securityCondition", false, $.hasAnyTag),
    new $.ComponentSpec("communicationMode", true, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("lifeCycleStatus", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("verifLimitDates", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of AccessControlRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AccessControlRule: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AccessControlRule
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AccessControlRule: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AccessControlRule: $.ASN1Decoder<AccessControlRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessControlRule
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessControlRule (el: _Element): AccessControlRule {
    if (!_cached_decoder_for_AccessControlRule) { _cached_decoder_for_AccessControlRule = function (el: _Element): AccessControlRule {
    let accessMode!: AccessMode;
    let securityCondition!: SecurityCondition;
    let communicationMode: OPTIONAL<CommunicationMode>;
    let lifeCycleStatus: OPTIONAL<LifeCycleStatus>;
    let verifLimitDates: OPTIONAL<RangeOfDate>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessMode": (_el: _Element): void => { accessMode = _decode_AccessMode(_el); },
        "securityCondition": (_el: _Element): void => { securityCondition = _decode_SecurityCondition(_el); },
        "communicationMode": (_el: _Element): void => { communicationMode = _decode_CommunicationMode(_el); },
        "lifeCycleStatus": (_el: _Element): void => { lifeCycleStatus = _decode_LifeCycleStatus(_el); },
        "verifLimitDates": (_el: _Element): void => { verifLimitDates = _decode_RangeOfDate(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AccessControlRule,
        _extension_additions_list_spec_for_AccessControlRule,
        _root_component_type_list_2_spec_for_AccessControlRule,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AccessControlRule(
        accessMode,
        securityCondition,
        communicationMode,
        lifeCycleStatus,
        verifLimitDates,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AccessControlRule(el);
}

let _cached_encoder_for_AccessControlRule: $.ASN1Encoder<AccessControlRule> | null = null;

/**
 * @summary Encodes a(n) AccessControlRule into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessControlRule, encoded as an ASN.1 Element.
 */
export
function _encode_AccessControlRule (value: AccessControlRule, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessControlRule) { _cached_encoder_for_AccessControlRule = function (value: AccessControlRule, elGetter: $.ASN1Encoder<AccessControlRule>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessMode(value.accessMode, $.BER),
            /* REQUIRED   */ _encode_SecurityCondition(value.securityCondition, $.BER),
            /* IF_ABSENT  */ ((value.communicationMode === undefined) ? undefined : _encode_CommunicationMode(value.communicationMode, $.BER)),
            /* IF_ABSENT  */ ((value.lifeCycleStatus === undefined) ? undefined : _encode_LifeCycleStatus(value.lifeCycleStatus, $.BER)),
            /* IF_ABSENT  */ ((value.verifLimitDates === undefined) ? undefined : _encode_RangeOfDate(value.verifLimitDates, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AccessControlRule(value, elGetter);
}


/* eslint-enable */
