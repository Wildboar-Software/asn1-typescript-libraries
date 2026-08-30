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
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../MAP-MS-DataTypes/ServiceKey.ta.mjs";
import { MM_Code, _decode_MM_Code, _encode_MM_Code } from "../MAP-MS-DataTypes/MM-Code.ta.mjs";
// export { MM_Code, _decode_MM_Code, _encode_MM_Code } from "../MAP-MS-DataTypes/MM-Code.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
// export { LocationInformation, _decode_LocationInformation, _encode_LocationInformation } from "../MAP-MS-DataTypes/LocationInformation.ta.mjs";
import { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
// export { SupportedCamelPhases, SupportedCamelPhases_phase1 /* IMPORTED_LONG_NAMED_BIT */, phase1 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase2 /* IMPORTED_LONG_NAMED_BIT */, phase2 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase3 /* IMPORTED_LONG_NAMED_BIT */, phase3 /* IMPORTED_SHORT_NAMED_BIT */, SupportedCamelPhases_phase4 /* IMPORTED_LONG_NAMED_BIT */, phase4 /* IMPORTED_SHORT_NAMED_BIT */, _decode_SupportedCamelPhases, _encode_SupportedCamelPhases } from "../MAP-MS-DataTypes/SupportedCamelPhases.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "../MAP-MS-DataTypes/LocationInformationGPRS.ta.mjs";
// export { LocationInformationGPRS, _decode_LocationInformationGPRS, _encode_LocationInformationGPRS } from "../MAP-MS-DataTypes/LocationInformationGPRS.ta.mjs";
import { OfferedCamel4Functionalities, OfferedCamel4Functionalities_initiateCallAttempt /* IMPORTED_LONG_NAMED_BIT */, initiateCallAttempt /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_splitLeg /* IMPORTED_LONG_NAMED_BIT */, splitLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_moveLeg /* IMPORTED_LONG_NAMED_BIT */, moveLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_disconnectLeg /* IMPORTED_LONG_NAMED_BIT */, disconnectLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_entityReleased /* IMPORTED_LONG_NAMED_BIT */, entityReleased /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dfc_WithArgument /* IMPORTED_LONG_NAMED_BIT */, dfc_WithArgument /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_playTone /* IMPORTED_LONG_NAMED_BIT */, playTone /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dtmf_MidCall /* IMPORTED_LONG_NAMED_BIT */, dtmf_MidCall /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_chargingIndicator /* IMPORTED_LONG_NAMED_BIT */, chargingIndicator /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_alertingDP /* IMPORTED_LONG_NAMED_BIT */, alertingDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_locationAtAlerting /* IMPORTED_LONG_NAMED_BIT */, locationAtAlerting /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_changeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, changeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_or_Interactions /* IMPORTED_LONG_NAMED_BIT */, or_Interactions /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_warningToneEnhancements /* IMPORTED_LONG_NAMED_BIT */, warningToneEnhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_cf_Enhancements /* IMPORTED_LONG_NAMED_BIT */, cf_Enhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_subscribedEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, subscribedEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, servingNetworkEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_criteriaForChangeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, criteriaForChangeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_serviceChangeDP /* IMPORTED_LONG_NAMED_BIT */, serviceChangeDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_collectInformation /* IMPORTED_LONG_NAMED_BIT */, collectInformation /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4Functionalities, _encode_OfferedCamel4Functionalities } from "../MAP-MS-DataTypes/OfferedCamel4Functionalities.ta.mjs";
// export { OfferedCamel4Functionalities, OfferedCamel4Functionalities_initiateCallAttempt /* IMPORTED_LONG_NAMED_BIT */, initiateCallAttempt /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_splitLeg /* IMPORTED_LONG_NAMED_BIT */, splitLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_moveLeg /* IMPORTED_LONG_NAMED_BIT */, moveLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_disconnectLeg /* IMPORTED_LONG_NAMED_BIT */, disconnectLeg /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_entityReleased /* IMPORTED_LONG_NAMED_BIT */, entityReleased /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dfc_WithArgument /* IMPORTED_LONG_NAMED_BIT */, dfc_WithArgument /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_playTone /* IMPORTED_LONG_NAMED_BIT */, playTone /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_dtmf_MidCall /* IMPORTED_LONG_NAMED_BIT */, dtmf_MidCall /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_chargingIndicator /* IMPORTED_LONG_NAMED_BIT */, chargingIndicator /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_alertingDP /* IMPORTED_LONG_NAMED_BIT */, alertingDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_locationAtAlerting /* IMPORTED_LONG_NAMED_BIT */, locationAtAlerting /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_changeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, changeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_or_Interactions /* IMPORTED_LONG_NAMED_BIT */, or_Interactions /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_warningToneEnhancements /* IMPORTED_LONG_NAMED_BIT */, warningToneEnhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_cf_Enhancements /* IMPORTED_LONG_NAMED_BIT */, cf_Enhancements /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_subscribedEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, subscribedEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_servingNetworkEnhancedDialledServices /* IMPORTED_LONG_NAMED_BIT */, servingNetworkEnhancedDialledServices /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_criteriaForChangeOfPositionDP /* IMPORTED_LONG_NAMED_BIT */, criteriaForChangeOfPositionDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_serviceChangeDP /* IMPORTED_LONG_NAMED_BIT */, serviceChangeDP /* IMPORTED_SHORT_NAMED_BIT */, OfferedCamel4Functionalities_collectInformation /* IMPORTED_LONG_NAMED_BIT */, collectInformation /* IMPORTED_SHORT_NAMED_BIT */, _decode_OfferedCamel4Functionalities, _encode_OfferedCamel4Functionalities } from "../MAP-MS-DataTypes/OfferedCamel4Functionalities.ta.mjs";


/**
 * @summary NoteMM_EventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoteMM-EventArg ::= SEQUENCE {
 *     serviceKey    ServiceKey,
 *     eventMet    [0]    MM-Code,
 *     imsi    [1]    IMSI,
 *     msisdn    [2]    ISDN-AddressString,
 *     locationInformation    [3]    LocationInformation    OPTIONAL,
 *     supportedCAMELPhases    [5]    SupportedCamelPhases    OPTIONAL,
 *     extensionContainer    [6]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     locationInformationGPRS    [7]    LocationInformationGPRS    OPTIONAL,
 *     offeredCamel4Functionalities    [8] OfferedCamel4Functionalities    OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NoteMM_EventArg {
    constructor (
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `eventMet`.
         * @public
         * @readonly
         */
        readonly eventMet: MM_Code,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `locationInformation`.
         * @public
         * @readonly
         */
        readonly locationInformation: OPTIONAL<LocationInformation>,
        /**
         * @summary `supportedCAMELPhases`.
         * @public
         * @readonly
         */
        readonly supportedCAMELPhases: OPTIONAL<SupportedCamelPhases>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `locationInformationGPRS`.
         * @public
         * @readonly
         */
        readonly locationInformationGPRS: OPTIONAL<LocationInformationGPRS>,
        /**
         * @summary `offeredCamel4Functionalities`.
         * @public
         * @readonly
         */
        readonly offeredCamel4Functionalities: OPTIONAL<OfferedCamel4Functionalities>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NoteMM_EventArg
     * @description
     * 
     * This takes an `object` and converts it to a `NoteMM_EventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoteMM_EventArg`.
     * @returns {NoteMM_EventArg}
     */
    public static _from_object (_o: { [_K in keyof (NoteMM_EventArg)]: (NoteMM_EventArg)[_K] }): NoteMM_EventArg {
        return new NoteMM_EventArg(_o.serviceKey, _o.eventMet, _o.imsi, _o.msisdn, _o.locationInformation, _o.supportedCAMELPhases, _o.extensionContainer, _o.locationInformationGPRS, _o.offeredCamel4Functionalities, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NoteMM_EventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NoteMM_EventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("eventMet", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("locationInformation", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("supportedCAMELPhases", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 6), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of NoteMM_EventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NoteMM_EventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NoteMM_EventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NoteMM_EventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("locationInformationGPRS", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("offeredCamel4Functionalities", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

let _cached_decoder_for_NoteMM_EventArg: $.ASN1Decoder<NoteMM_EventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoteMM_EventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NoteMM_EventArg (el: _Element): NoteMM_EventArg {
    if (!_cached_decoder_for_NoteMM_EventArg) { _cached_decoder_for_NoteMM_EventArg = function (el: _Element): NoteMM_EventArg {
    let serviceKey!: ServiceKey;
    let eventMet!: MM_Code;
    let imsi!: IMSI;
    let msisdn!: ISDN_AddressString;
    let locationInformation: OPTIONAL<LocationInformation>;
    let supportedCAMELPhases: OPTIONAL<SupportedCamelPhases>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let locationInformationGPRS: OPTIONAL<LocationInformationGPRS>;
    let offeredCamel4Functionalities: OPTIONAL<OfferedCamel4Functionalities>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = _decode_ServiceKey(_el); },
        "eventMet": (_el: _Element): void => { eventMet = $._decode_implicit<MM_Code>(() => _decode_MM_Code)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "locationInformation": (_el: _Element): void => { locationInformation = $._decode_implicit<LocationInformation>(() => _decode_LocationInformation)(_el); },
        "supportedCAMELPhases": (_el: _Element): void => { supportedCAMELPhases = $._decode_implicit<SupportedCamelPhases>(() => _decode_SupportedCamelPhases)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "locationInformationGPRS": (_el: _Element): void => { locationInformationGPRS = $._decode_implicit<LocationInformationGPRS>(() => _decode_LocationInformationGPRS)(_el); },
        "offeredCamel4Functionalities": (_el: _Element): void => { offeredCamel4Functionalities = $._decode_implicit<OfferedCamel4Functionalities>(() => _decode_OfferedCamel4Functionalities)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NoteMM_EventArg,
        _extension_additions_list_spec_for_NoteMM_EventArg,
        _root_component_type_list_2_spec_for_NoteMM_EventArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NoteMM_EventArg(
        serviceKey,
        eventMet,
        imsi,
        msisdn,
        locationInformation,
        supportedCAMELPhases,
        extensionContainer,
        locationInformationGPRS,
        offeredCamel4Functionalities,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NoteMM_EventArg(el);
}

let _cached_encoder_for_NoteMM_EventArg: $.ASN1Encoder<NoteMM_EventArg> | null = null;

/**
 * @summary Encodes a(n) NoteMM_EventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoteMM_EventArg, encoded as an ASN.1 Element.
 */
export
function _encode_NoteMM_EventArg (value: NoteMM_EventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NoteMM_EventArg) { _cached_encoder_for_NoteMM_EventArg = function (value: NoteMM_EventArg, elGetter: $.ASN1Encoder<NoteMM_EventArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ServiceKey(value.serviceKey, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MM_Code, $.BER)(value.eventMet, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER),
            /* IF_ABSENT  */ ((value.locationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LocationInformation, $.BER)(value.locationInformation, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCAMELPhases === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SupportedCamelPhases, $.BER)(value.supportedCAMELPhases, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.locationInformationGPRS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_LocationInformationGPRS, $.BER)(value.locationInformationGPRS, $.BER)),
            /* IF_ABSENT  */ ((value.offeredCamel4Functionalities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_OfferedCamel4Functionalities, $.BER)(value.offeredCamel4Functionalities, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NoteMM_EventArg(value, elGetter);
}


/* eslint-enable */
