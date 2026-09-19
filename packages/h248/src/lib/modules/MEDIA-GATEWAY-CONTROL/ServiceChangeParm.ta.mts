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
import { ServiceChangeMethod, _enum_for_ServiceChangeMethod, ServiceChangeMethod_failover /* IMPORTED_LONG_ENUMERATION_ITEM */, failover /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_forced /* IMPORTED_LONG_ENUMERATION_ITEM */, forced /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_graceful /* IMPORTED_LONG_ENUMERATION_ITEM */, graceful /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_restart /* IMPORTED_LONG_ENUMERATION_ITEM */, restart /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_disconnected /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_handOff /* IMPORTED_LONG_ENUMERATION_ITEM */, handOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ServiceChangeMethod, _encode_ServiceChangeMethod } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeMethod.ta.mjs";
// export { ServiceChangeMethod, _enum_for_ServiceChangeMethod, ServiceChangeMethod_failover /* IMPORTED_LONG_ENUMERATION_ITEM */, failover /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_forced /* IMPORTED_LONG_ENUMERATION_ITEM */, forced /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_graceful /* IMPORTED_LONG_ENUMERATION_ITEM */, graceful /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_restart /* IMPORTED_LONG_ENUMERATION_ITEM */, restart /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_disconnected /* IMPORTED_LONG_ENUMERATION_ITEM */, disconnected /* IMPORTED_SHORT_ENUMERATION_ITEM */, ServiceChangeMethod_handOff /* IMPORTED_LONG_ENUMERATION_ITEM */, handOff /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ServiceChangeMethod, _encode_ServiceChangeMethod } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeMethod.ta.mjs";
import { ServiceChangeAddress, _decode_ServiceChangeAddress, _encode_ServiceChangeAddress } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeAddress.ta.mjs";
// export { ServiceChangeAddress, _decode_ServiceChangeAddress, _encode_ServiceChangeAddress } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeAddress.ta.mjs";
import { ServiceChangeProfile, _decode_ServiceChangeProfile, _encode_ServiceChangeProfile } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeProfile.ta.mjs";
// export { ServiceChangeProfile, _decode_ServiceChangeProfile, _encode_ServiceChangeProfile } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeProfile.ta.mjs";
import { SCreasonValue, _decode_SCreasonValue, _encode_SCreasonValue } from "../MEDIA-GATEWAY-CONTROL/SCreasonValue.ta.mjs";
// export { SCreasonValue, _decode_SCreasonValue, _encode_SCreasonValue } from "../MEDIA-GATEWAY-CONTROL/SCreasonValue.ta.mjs";
import { MId, _decode_MId, _encode_MId } from "../MEDIA-GATEWAY-CONTROL/MId.ta.mjs";
// export { MId, _decode_MId, _encode_MId } from "../MEDIA-GATEWAY-CONTROL/MId.ta.mjs";
import { TimeNotation, _decode_TimeNotation, _encode_TimeNotation } from "../MEDIA-GATEWAY-CONTROL/TimeNotation.ta.mjs";
// export { TimeNotation, _decode_TimeNotation, _encode_TimeNotation } from "../MEDIA-GATEWAY-CONTROL/TimeNotation.ta.mjs";
import { NonStandardData, _decode_NonStandardData, _encode_NonStandardData } from "../MEDIA-GATEWAY-CONTROL/NonStandardData.ta.mjs";
// export { NonStandardData, _decode_NonStandardData, _encode_NonStandardData } from "../MEDIA-GATEWAY-CONTROL/NonStandardData.ta.mjs";
import { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";
// export { AuditDescriptor, _decode_AuditDescriptor, _encode_AuditDescriptor } from "../MEDIA-GATEWAY-CONTROL/AuditDescriptor.ta.mjs";


/**
 * @summary ServiceChangeParm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceChangeParm ::= SEQUENCE
 *     {
 *         serviceChangeMethod            [0] ServiceChangeMethod,
 *         serviceChangeAddress        [1] ServiceChangeAddress OPTIONAL,
 *         serviceChangeVersion        [2] INTEGER(0..99) OPTIONAL,
 *         serviceChangeProfile        [3] ServiceChangeProfile OPTIONAL,
 * --        serviceChangeReason            [4] Value,
 *         serviceChangeReason            [4] SCreasonValue,
 *         -- A serviceChangeReason consists of a numeric reason code
 *         -- and an optional text description.
 *         -- The serviceChangeReason shall be a string consisting of
 *         -- a decimal reason code, optionally followed by a single
 *         -- space character and a textual description string.
 *         -- This string is first BER-encoded as an IA5String.
 *         -- The result of this BER-encoding is then encoded as
 *         -- an ASN.1 OCTET STRING type, "double wrapping" the
 *         -- value as was done for package elements.
 * 
 *         serviceChangeDelay            [5] INTEGER(0..4294967295) OPTIONAL,
 *         -- 32-bit unsigned integer
 *         serviceChangeMgcId            [6] MId OPTIONAL,
 *         timeStamp                    [7] TimeNotation OPTIONAL,
 *         nonStandardData                [8] NonStandardData OPTIONAL,
 *         ...,
 *         serviceChangeInfo            [9] AuditDescriptor OPTIONAL,
 *         serviceChangeIncompleteFlag [10] NULL OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ServiceChangeParm {
    constructor (
        /**
         * @summary `serviceChangeMethod`.
         * @public
         * @readonly
         */
        readonly serviceChangeMethod: ServiceChangeMethod,
        /**
         * @summary `serviceChangeAddress`.
         * @public
         * @readonly
         */
        readonly serviceChangeAddress: OPTIONAL<ServiceChangeAddress>,
        /**
         * @summary `serviceChangeVersion`.
         * @public
         * @readonly
         */
        readonly serviceChangeVersion: OPTIONAL<INTEGER>,
        /**
         * @summary `serviceChangeProfile`.
         * @public
         * @readonly
         */
        readonly serviceChangeProfile: OPTIONAL<ServiceChangeProfile>,
        /**
         * @summary `serviceChangeReason`.
         * @public
         * @readonly
         */
        readonly serviceChangeReason: SCreasonValue,
        /**
         * @summary `serviceChangeDelay`.
         * @public
         * @readonly
         */
        readonly serviceChangeDelay: OPTIONAL<INTEGER>,
        /**
         * @summary `serviceChangeMgcId`.
         * @public
         * @readonly
         */
        readonly serviceChangeMgcId: OPTIONAL<MId>,
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: OPTIONAL<TimeNotation>,
        /**
         * @summary `nonStandardData`.
         * @public
         * @readonly
         */
        readonly nonStandardData: OPTIONAL<NonStandardData>,
        /**
         * @summary `serviceChangeInfo`.
         * @public
         * @readonly
         */
        readonly serviceChangeInfo: OPTIONAL<AuditDescriptor>,
        /**
         * @summary `serviceChangeIncompleteFlag`.
         * @public
         * @readonly
         */
        readonly serviceChangeIncompleteFlag: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ServiceChangeParm
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceChangeParm`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceChangeParm`.
     * @returns {ServiceChangeParm}
     */
    public static _from_object (_o: { [_K in keyof (ServiceChangeParm)]: (ServiceChangeParm)[_K] }): ServiceChangeParm {
        return new ServiceChangeParm(_o.serviceChangeMethod, _o.serviceChangeAddress, _o.serviceChangeVersion, _o.serviceChangeProfile, _o.serviceChangeReason, _o.serviceChangeDelay, _o.serviceChangeMgcId, _o.timeStamp, _o.nonStandardData, _o.serviceChangeInfo, _o.serviceChangeIncompleteFlag, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `serviceChangeMethod`
         * @public
         * @static
         */

    public static _enum_for_serviceChangeMethod = _enum_for_ServiceChangeMethod;
}

/**
 * @summary The Leading Root Component Types of ServiceChangeParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceChangeParm: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceChangeMethod", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serviceChangeAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("serviceChangeVersion", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serviceChangeProfile", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("serviceChangeReason", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceChangeDelay", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("serviceChangeMgcId", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("nonStandardData", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ServiceChangeParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceChangeParm: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceChangeParm
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceChangeParm: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceChangeInfo", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceChangeIncompleteFlag", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_ServiceChangeParm: $.ASN1Decoder<ServiceChangeParm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceChangeParm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceChangeParm (el: _Element): ServiceChangeParm {
    if (!_cached_decoder_for_ServiceChangeParm) { _cached_decoder_for_ServiceChangeParm = function (el: _Element): ServiceChangeParm {
    let serviceChangeMethod!: ServiceChangeMethod;
    let serviceChangeAddress: OPTIONAL<ServiceChangeAddress>;
    let serviceChangeVersion: OPTIONAL<INTEGER>;
    let serviceChangeProfile: OPTIONAL<ServiceChangeProfile>;
    let serviceChangeReason!: SCreasonValue;
    let serviceChangeDelay: OPTIONAL<INTEGER>;
    let serviceChangeMgcId: OPTIONAL<MId>;
    let timeStamp: OPTIONAL<TimeNotation>;
    let nonStandardData: OPTIONAL<NonStandardData>;
    let serviceChangeInfo: OPTIONAL<AuditDescriptor>;
    let serviceChangeIncompleteFlag: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceChangeMethod": (_el: _Element): void => { serviceChangeMethod = $._decode_implicit<ServiceChangeMethod>(() => _decode_ServiceChangeMethod)(_el); },
        "serviceChangeAddress": (_el: _Element): void => { serviceChangeAddress = $._decode_explicit<ServiceChangeAddress>(() => _decode_ServiceChangeAddress)(_el); },
        "serviceChangeVersion": (_el: _Element): void => { serviceChangeVersion = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceChangeProfile": (_el: _Element): void => { serviceChangeProfile = $._decode_implicit<ServiceChangeProfile>(() => _decode_ServiceChangeProfile)(_el); },
        "serviceChangeReason": (_el: _Element): void => { serviceChangeReason = $._decode_implicit<SCreasonValue>(() => _decode_SCreasonValue)(_el); },
        "serviceChangeDelay": (_el: _Element): void => { serviceChangeDelay = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serviceChangeMgcId": (_el: _Element): void => { serviceChangeMgcId = $._decode_explicit<MId>(() => _decode_MId)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<TimeNotation>(() => _decode_TimeNotation)(_el); },
        "nonStandardData": (_el: _Element): void => { nonStandardData = $._decode_implicit<NonStandardData>(() => _decode_NonStandardData)(_el); },
        "serviceChangeInfo": (_el: _Element): void => { serviceChangeInfo = $._decode_implicit<AuditDescriptor>(() => _decode_AuditDescriptor)(_el); },
        "serviceChangeIncompleteFlag": (_el: _Element): void => { serviceChangeIncompleteFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceChangeParm,
        _extension_additions_list_spec_for_ServiceChangeParm,
        _root_component_type_list_2_spec_for_ServiceChangeParm,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceChangeParm(
        serviceChangeMethod,
        serviceChangeAddress,
        serviceChangeVersion,
        serviceChangeProfile,
        serviceChangeReason,
        serviceChangeDelay,
        serviceChangeMgcId,
        timeStamp,
        nonStandardData,
        serviceChangeInfo,
        serviceChangeIncompleteFlag,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceChangeParm(el);
}

let _cached_encoder_for_ServiceChangeParm: $.ASN1Encoder<ServiceChangeParm> | null = null;

/**
 * @summary Encodes a(n) ServiceChangeParm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceChangeParm, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceChangeParm (value: ServiceChangeParm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceChangeParm) { _cached_encoder_for_ServiceChangeParm = function (value: ServiceChangeParm, elGetter: $.ASN1Encoder<ServiceChangeParm>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceChangeMethod, $.BER)(value.serviceChangeMethod, $.BER),
            /* IF_ABSENT  */ ((value.serviceChangeAddress === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_ServiceChangeAddress, $.BER)(value.serviceChangeAddress, $.BER)),
            /* IF_ABSENT  */ ((value.serviceChangeVersion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.serviceChangeVersion, $.BER)),
            /* IF_ABSENT  */ ((value.serviceChangeProfile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ServiceChangeProfile, $.BER)(value.serviceChangeProfile, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_SCreasonValue, $.BER)(value.serviceChangeReason, $.BER),
            /* IF_ABSENT  */ ((value.serviceChangeDelay === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.serviceChangeDelay, $.BER)),
            /* IF_ABSENT  */ ((value.serviceChangeMgcId === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_MId, $.BER)(value.serviceChangeMgcId, $.BER)),
            /* IF_ABSENT  */ ((value.timeStamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_TimeNotation, $.BER)(value.timeStamp, $.BER)),
            /* IF_ABSENT  */ ((value.nonStandardData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_NonStandardData, $.BER)(value.nonStandardData, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.serviceChangeInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_AuditDescriptor, $.BER)(value.serviceChangeInfo, $.BER)),
            /* IF_ABSENT  */ ((value.serviceChangeIncompleteFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.serviceChangeIncompleteFlag, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceChangeParm(value, elGetter);
}


/* eslint-enable */
