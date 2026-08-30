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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { FailureCause, _enum_for_FailureCause, FailureCause_wrongUserResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, wrongUserResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureCause_wrongNetworkSignature /* IMPORTED_LONG_ENUMERATION_ITEM */, wrongNetworkSignature /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureCause, _encode_FailureCause } from "../MAP-MS-DataTypes/FailureCause.ta.mjs";
// export { FailureCause, _enum_for_FailureCause, FailureCause_wrongUserResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, wrongUserResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, FailureCause_wrongNetworkSignature /* IMPORTED_LONG_ENUMERATION_ITEM */, wrongNetworkSignature /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FailureCause, _encode_FailureCause } from "../MAP-MS-DataTypes/FailureCause.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AccessType, _enum_for_AccessType, AccessType_call /* IMPORTED_LONG_ENUMERATION_ITEM */, call /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_emergencyCall /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_locationUpdating /* IMPORTED_LONG_ENUMERATION_ITEM */, locationUpdating /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_supplementaryService /* IMPORTED_LONG_ENUMERATION_ITEM */, supplementaryService /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_shortMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, shortMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_gprsAttach /* IMPORTED_LONG_ENUMERATION_ITEM */, gprsAttach /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_routingAreaUpdating /* IMPORTED_LONG_ENUMERATION_ITEM */, routingAreaUpdating /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_serviceRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_pdpContextActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pdpContextActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_pdpContextDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pdpContextDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_gprsDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, gprsDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../MAP-MS-DataTypes/AccessType.ta.mjs";
// export { AccessType, _enum_for_AccessType, AccessType_call /* IMPORTED_LONG_ENUMERATION_ITEM */, call /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_emergencyCall /* IMPORTED_LONG_ENUMERATION_ITEM */, emergencyCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_locationUpdating /* IMPORTED_LONG_ENUMERATION_ITEM */, locationUpdating /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_supplementaryService /* IMPORTED_LONG_ENUMERATION_ITEM */, supplementaryService /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_shortMessage /* IMPORTED_LONG_ENUMERATION_ITEM */, shortMessage /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_gprsAttach /* IMPORTED_LONG_ENUMERATION_ITEM */, gprsAttach /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_routingAreaUpdating /* IMPORTED_LONG_ENUMERATION_ITEM */, routingAreaUpdating /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_serviceRequest /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_pdpContextActivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pdpContextActivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_pdpContextDeactivation /* IMPORTED_LONG_ENUMERATION_ITEM */, pdpContextDeactivation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AccessType_gprsDetach /* IMPORTED_LONG_ENUMERATION_ITEM */, gprsDetach /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AccessType, _encode_AccessType } from "../MAP-MS-DataTypes/AccessType.ta.mjs";
import { RAND, _decode_RAND, _encode_RAND } from "../MAP-MS-DataTypes/RAND.ta.mjs";
// export { RAND, _decode_RAND, _encode_RAND } from "../MAP-MS-DataTypes/RAND.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary AuthenticationFailureReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationFailureReportArg ::= SEQUENCE {
 *     imsi    IMSI,
 *     failureCause    FailureCause,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     re-attempt    BOOLEAN    OPTIONAL,
 *     accessType    AccessType    OPTIONAL,
 *     rand    RAND    OPTIONAL,
 *     vlr-Number    [0] ISDN-AddressString    OPTIONAL,
 *     sgsn-Number    [1] ISDN-AddressString    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class AuthenticationFailureReportArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: FailureCause,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `re_attempt`.
         * @public
         * @readonly
         */
        readonly re_attempt: OPTIONAL<BOOLEAN>,
        /**
         * @summary `accessType`.
         * @public
         * @readonly
         */
        readonly accessType: OPTIONAL<AccessType>,
        /**
         * @summary `rand`.
         * @public
         * @readonly
         */
        readonly rand: OPTIONAL<RAND>,
        /**
         * @summary `vlr_Number`.
         * @public
         * @readonly
         */
        readonly vlr_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `sgsn_Number`.
         * @public
         * @readonly
         */
        readonly sgsn_Number: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationFailureReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticationFailureReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationFailureReportArg`.
     * @returns {AuthenticationFailureReportArg}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticationFailureReportArg)]: (AuthenticationFailureReportArg)[_K] }): AuthenticationFailureReportArg {
        return new AuthenticationFailureReportArg(_o.imsi, _o.failureCause, _o.extensionContainer, _o.re_attempt, _o.accessType, _o.rand, _o.vlr_Number, _o.sgsn_Number, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `failureCause`
         * @public
         * @static
         */

    public static _enum_for_failureCause = _enum_for_FailureCause;        /**
         * @summary The enum used as the type of the component `accessType`
         * @public
         * @static
         */

    public static _enum_for_accessType = _enum_for_AccessType;
}

/**
 * @summary The Leading Root Component Types of AuthenticationFailureReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticationFailureReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("failureCause", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AuthenticationFailureReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticationFailureReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticationFailureReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticationFailureReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("re-attempt", true, $.hasTag(_TagClass.universal, 1), undefined, undefined),
    new $.ComponentSpec("accessType", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("rand", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("vlr-Number", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sgsn-Number", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_AuthenticationFailureReportArg: $.ASN1Decoder<AuthenticationFailureReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationFailureReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationFailureReportArg (el: _Element): AuthenticationFailureReportArg {
    if (!_cached_decoder_for_AuthenticationFailureReportArg) { _cached_decoder_for_AuthenticationFailureReportArg = function (el: _Element): AuthenticationFailureReportArg {
    let imsi!: IMSI;
    let failureCause!: FailureCause;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let re_attempt: OPTIONAL<BOOLEAN>;
    let accessType: OPTIONAL<AccessType>;
    let rand: OPTIONAL<RAND>;
    let vlr_Number: OPTIONAL<ISDN_AddressString>;
    let sgsn_Number: OPTIONAL<ISDN_AddressString>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "failureCause": (_el: _Element): void => { failureCause = _decode_FailureCause(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "re-attempt": (_el: _Element): void => { re_attempt = $._decodeBoolean(_el); },
        "accessType": (_el: _Element): void => { accessType = _decode_AccessType(_el); },
        "rand": (_el: _Element): void => { rand = _decode_RAND(_el); },
        "vlr-Number": (_el: _Element): void => { vlr_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "sgsn-Number": (_el: _Element): void => { sgsn_Number = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthenticationFailureReportArg,
        _extension_additions_list_spec_for_AuthenticationFailureReportArg,
        _root_component_type_list_2_spec_for_AuthenticationFailureReportArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AuthenticationFailureReportArg(
        imsi,
        failureCause,
        extensionContainer,
        re_attempt,
        accessType,
        rand,
        vlr_Number,
        sgsn_Number,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AuthenticationFailureReportArg(el);
}

let _cached_encoder_for_AuthenticationFailureReportArg: $.ASN1Encoder<AuthenticationFailureReportArg> | null = null;

/**
 * @summary Encodes a(n) AuthenticationFailureReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationFailureReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationFailureReportArg (value: AuthenticationFailureReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationFailureReportArg) { _cached_encoder_for_AuthenticationFailureReportArg = function (value: AuthenticationFailureReportArg, elGetter: $.ASN1Encoder<AuthenticationFailureReportArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* REQUIRED   */ _encode_FailureCause(value.failureCause, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.re_attempt === undefined) ? undefined : $._encodeBoolean(value.re_attempt, $.BER)),
            /* IF_ABSENT  */ ((value.accessType === undefined) ? undefined : _encode_AccessType(value.accessType, $.BER)),
            /* IF_ABSENT  */ ((value.rand === undefined) ? undefined : _encode_RAND(value.rand, $.BER)),
            /* IF_ABSENT  */ ((value.vlr_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.vlr_Number, $.BER)),
            /* IF_ABSENT  */ ((value.sgsn_Number === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER)(value.sgsn_Number, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticationFailureReportArg(value, elGetter);
}


/* eslint-enable */
