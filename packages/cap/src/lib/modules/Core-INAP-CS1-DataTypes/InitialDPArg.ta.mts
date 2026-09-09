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
import { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
// export { ServiceKey, _decode_ServiceKey, _encode_ServiceKey } from "../Core-INAP-CS1-DataTypes/ServiceKey.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../Core-INAP-CS1-DataTypes/CalledPartyNumber.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../Core-INAP-CS1-DataTypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../Core-INAP-CS1-DataTypes/CallingPartyNumber.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
import { CGEncountered, _enum_for_CGEncountered, CGEncountered_manualCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, manualCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_scpOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, scpOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CGEncountered, _encode_CGEncountered } from "../Core-INAP-CS1-DataTypes/CGEncountered.ta.mjs";
// export { CGEncountered, _enum_for_CGEncountered, CGEncountered_manualCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, manualCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_scpOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, scpOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CGEncountered, _encode_CGEncountered } from "../Core-INAP-CS1-DataTypes/CGEncountered.ta.mjs";
import { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../Core-INAP-CS1-DataTypes/IPSSPCapabilities.ta.mjs";
// export { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../Core-INAP-CS1-DataTypes/IPSSPCapabilities.ta.mjs";
import { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../Core-INAP-CS1-DataTypes/IPAvailable.ta.mjs";
// export { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../Core-INAP-CS1-DataTypes/IPAvailable.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../Core-INAP-CS1-DataTypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../Core-INAP-CS1-DataTypes/LocationNumber.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../Core-INAP-CS1-DataTypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../Core-INAP-CS1-DataTypes/OriginalCalledPartyID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
import { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../Core-INAP-CS1-DataTypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../Core-INAP-CS1-DataTypes/HighLayerCompatibility.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";
import { AdditionalCallingPartyNumber, _decode_AdditionalCallingPartyNumber, _encode_AdditionalCallingPartyNumber } from "../Core-INAP-CS1-DataTypes/AdditionalCallingPartyNumber.ta.mjs";
// export { AdditionalCallingPartyNumber, _decode_AdditionalCallingPartyNumber, _encode_AdditionalCallingPartyNumber } from "../Core-INAP-CS1-DataTypes/AdditionalCallingPartyNumber.ta.mjs";
import { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../Core-INAP-CS1-DataTypes/ForwardCallIndicators.ta.mjs";
// export { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../Core-INAP-CS1-DataTypes/ForwardCallIndicators.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../Core-INAP-CS1-DataTypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../Core-INAP-CS1-DataTypes/BearerCapability.ta.mjs";
import { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analyzedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analyzedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../Core-INAP-CS1-DataTypes/EventTypeBCSM.ta.mjs";
// export { EventTypeBCSM, _enum_for_EventTypeBCSM, EventTypeBCSM_origAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, origAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_collectedInfo /* IMPORTED_LONG_ENUMERATION_ITEM */, collectedInfo /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_analyzedInformation /* IMPORTED_LONG_ENUMERATION_ITEM */, analyzedInformation /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_routeSelectFailure /* IMPORTED_LONG_ENUMERATION_ITEM */, routeSelectFailure /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, oCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, oAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, oMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, oDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_oAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, oAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_termAttemptAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, termAttemptAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tCalledPartyBusy /* IMPORTED_LONG_ENUMERATION_ITEM */, tCalledPartyBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tNoAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tNoAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAnswer /* IMPORTED_LONG_ENUMERATION_ITEM */, tAnswer /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tMidCall /* IMPORTED_LONG_ENUMERATION_ITEM */, tMidCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tDisconnect /* IMPORTED_LONG_ENUMERATION_ITEM */, tDisconnect /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCSM_tAbandon /* IMPORTED_LONG_ENUMERATION_ITEM */, tAbandon /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCSM, _encode_EventTypeBCSM } from "../Core-INAP-CS1-DataTypes/EventTypeBCSM.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../Core-INAP-CS1-DataTypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../Core-INAP-CS1-DataTypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";


/**
 * @summary InitialDPArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitialDPArg ::= SEQUENCE {
 *      serviceKey     [0] ServiceKey,
 *      calledPartyNumber     [2] CalledPartyNumber     OPTIONAL,
 *      callingPartyNumber     [3] CallingPartyNumber     OPTIONAL,
 *      callingPartysCategory     [5] CallingPartysCategory     OPTIONAL,
 *      cGEncountered     [7] CGEncountered     OPTIONAL,
 *      iPSSPCapabilities     [8] IPSSPCapabilities     OPTIONAL,
 *      iPAvailable     [9] IPAvailable     OPTIONAL,
 *      locationNumber     [10] LocationNumber     OPTIONAL,
 *      originalCalledPartyID     [12] OriginalCalledPartyID     OPTIONAL,
 *      extensions     [15] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL,
 *      highLayerCompatibility     [23] HighLayerCompatibility     OPTIONAL,
 *      serviceInteractionIndicators     [24] ServiceInteractionIndicators     OPTIONAL,
 *      additionalCallingPartyNumber     [25] AdditionalCallingPartyNumber     OPTIONAL,
 *      forwardCallIndicators     [26] ForwardCallIndicators     OPTIONAL,
 *      bearerCapability     [27] BearerCapability     OPTIONAL,
 *      eventTypeBCSM     [28] EventTypeBCSM     OPTIONAL,
 *      redirectingPartyID     [29] RedirectingPartyID     OPTIONAL,
 *      redirectionInformation     [30] RedirectionInformation     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class InitialDPArg {
    constructor (
        /**
         * @summary `serviceKey`.
         * @public
         * @readonly
         */
        readonly serviceKey: ServiceKey,
        /**
         * @summary `calledPartyNumber`.
         * @public
         * @readonly
         */
        readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary `callingPartysCategory`.
         * @public
         * @readonly
         */
        readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        /**
         * @summary `cGEncountered`.
         * @public
         * @readonly
         */
        readonly cGEncountered: OPTIONAL<CGEncountered>,
        /**
         * @summary `iPSSPCapabilities`.
         * @public
         * @readonly
         */
        readonly iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>,
        /**
         * @summary `iPAvailable`.
         * @public
         * @readonly
         */
        readonly iPAvailable: OPTIONAL<IPAvailable>,
        /**
         * @summary `locationNumber`.
         * @public
         * @readonly
         */
        readonly locationNumber: OPTIONAL<LocationNumber>,
        /**
         * @summary `originalCalledPartyID`.
         * @public
         * @readonly
         */
        readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary `highLayerCompatibility`.
         * @public
         * @readonly
         */
        readonly highLayerCompatibility: OPTIONAL<HighLayerCompatibility>,
        /**
         * @summary `serviceInteractionIndicators`.
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>,
        /**
         * @summary `additionalCallingPartyNumber`.
         * @public
         * @readonly
         */
        readonly additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>,
        /**
         * @summary `forwardCallIndicators`.
         * @public
         * @readonly
         */
        readonly forwardCallIndicators: OPTIONAL<ForwardCallIndicators>,
        /**
         * @summary `bearerCapability`.
         * @public
         * @readonly
         */
        readonly bearerCapability: OPTIONAL<BearerCapability>,
        /**
         * @summary `eventTypeBCSM`.
         * @public
         * @readonly
         */
        readonly eventTypeBCSM: OPTIONAL<EventTypeBCSM>,
        /**
         * @summary `redirectingPartyID`.
         * @public
         * @readonly
         */
        readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        /**
         * @summary `redirectionInformation`.
         * @public
         * @readonly
         */
        readonly redirectionInformation: OPTIONAL<RedirectionInformation>
    ) {}

    /**
     * @summary Restructures an object into a InitialDPArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitialDPArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitialDPArg`.
     * @returns {InitialDPArg}
     */
    public static _from_object (_o: { [_K in keyof (InitialDPArg)]: (InitialDPArg)[_K] }): InitialDPArg {
        return new InitialDPArg(_o.serviceKey, _o.calledPartyNumber, _o.callingPartyNumber, _o.callingPartysCategory, _o.cGEncountered, _o.iPSSPCapabilities, _o.iPAvailable, _o.locationNumber, _o.originalCalledPartyID, _o.extensions, _o.highLayerCompatibility, _o.serviceInteractionIndicators, _o.additionalCallingPartyNumber, _o.forwardCallIndicators, _o.bearerCapability, _o.eventTypeBCSM, _o.redirectingPartyID, _o.redirectionInformation);
    }

        /**
         * @summary The enum used as the type of the component `cGEncountered`
         * @public
         * @static
         */

    public static _enum_for_cGEncountered = _enum_for_CGEncountered;        /**
         * @summary The enum used as the type of the component `eventTypeBCSM`
         * @public
         * @static
         */

    public static _enum_for_eventTypeBCSM = _enum_for_EventTypeBCSM;
}

/**
 * @summary The Leading Root Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitialDPArg: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceKey", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("cGEncountered", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("iPSSPCapabilities", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("iPAvailable", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 24), undefined, undefined),
    new $.ComponentSpec("additionalCallingPartyNumber", true, $.hasTag(_TagClass.context, 25), undefined, undefined),
    new $.ComponentSpec("forwardCallIndicators", true, $.hasTag(_TagClass.context, 26), undefined, undefined),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 27), undefined, undefined),
    new $.ComponentSpec("eventTypeBCSM", true, $.hasTag(_TagClass.context, 28), undefined, undefined),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 29), undefined, undefined),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 30), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitialDPArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitialDPArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitialDPArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitialDPArg: $.ASN1Decoder<InitialDPArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitialDPArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitialDPArg (el: _Element): InitialDPArg {
    if (!_cached_decoder_for_InitialDPArg) { _cached_decoder_for_InitialDPArg = function (el: _Element): InitialDPArg {
    let serviceKey!: ServiceKey;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let cGEncountered: OPTIONAL<CGEncountered>;
    let iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    let iPAvailable: OPTIONAL<IPAvailable>;
    let locationNumber: OPTIONAL<LocationNumber>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let additionalCallingPartyNumber: OPTIONAL<AdditionalCallingPartyNumber>;
    let forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let eventTypeBCSM: OPTIONAL<EventTypeBCSM>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    const callbacks: $.DecodingMap = {
        "serviceKey": (_el: _Element): void => { serviceKey = $._decode_implicit<ServiceKey>(() => _decode_ServiceKey)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "cGEncountered": (_el: _Element): void => { cGEncountered = $._decode_implicit<CGEncountered>(() => _decode_CGEncountered)(_el); },
        "iPSSPCapabilities": (_el: _Element): void => { iPSSPCapabilities = $._decode_implicit<IPSSPCapabilities>(() => _decode_IPSSPCapabilities)(_el); },
        "iPAvailable": (_el: _Element): void => { iPAvailable = $._decode_implicit<IPAvailable>(() => _decode_IPAvailable)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "additionalCallingPartyNumber": (_el: _Element): void => { additionalCallingPartyNumber = $._decode_implicit<AdditionalCallingPartyNumber>(() => _decode_AdditionalCallingPartyNumber)(_el); },
        "forwardCallIndicators": (_el: _Element): void => { forwardCallIndicators = $._decode_implicit<ForwardCallIndicators>(() => _decode_ForwardCallIndicators)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "eventTypeBCSM": (_el: _Element): void => { eventTypeBCSM = $._decode_implicit<EventTypeBCSM>(() => _decode_EventTypeBCSM)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitialDPArg,
        _extension_additions_list_spec_for_InitialDPArg,
        _root_component_type_list_2_spec_for_InitialDPArg,
        undefined,
    );
    return new InitialDPArg(
        serviceKey,
        calledPartyNumber,
        callingPartyNumber,
        callingPartysCategory,
        cGEncountered,
        iPSSPCapabilities,
        iPAvailable,
        locationNumber,
        originalCalledPartyID,
        extensions,
        highLayerCompatibility,
        serviceInteractionIndicators,
        additionalCallingPartyNumber,
        forwardCallIndicators,
        bearerCapability,
        eventTypeBCSM,
        redirectingPartyID,
        redirectionInformation
    );
}; }
    return _cached_decoder_for_InitialDPArg(el);
}

let _cached_encoder_for_InitialDPArg: $.ASN1Encoder<InitialDPArg> | null = null;

/**
 * @summary Encodes a(n) InitialDPArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitialDPArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitialDPArg (value: InitialDPArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitialDPArg) { _cached_encoder_for_InitialDPArg = function (value: InitialDPArg, elGetter: $.ASN1Encoder<InitialDPArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceKey, $.BER)(value.serviceKey, $.BER),
            /* IF_ABSENT  */ ((value.calledPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartysCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER)),
            /* IF_ABSENT  */ ((value.cGEncountered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CGEncountered, $.BER)(value.cGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.iPSSPCapabilities === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_IPSSPCapabilities, $.BER)(value.iPSSPCapabilities, $.BER)),
            /* IF_ABSENT  */ ((value.iPAvailable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_IPAvailable, $.BER)(value.iPAvailable, $.BER)),
            /* IF_ABSENT  */ ((value.locationNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER)),
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.highLayerCompatibility === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER)),
            /* IF_ABSENT  */ ((value.additionalCallingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_AdditionalCallingPartyNumber, $.BER)(value.additionalCallingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.forwardCallIndicators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_ForwardCallIndicators, $.BER)(value.forwardCallIndicators, $.BER)),
            /* IF_ABSENT  */ ((value.bearerCapability === undefined) ? undefined : $._encode_explicit(_TagClass.context, 27, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.eventTypeBCSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_EventTypeBCSM, $.BER)(value.eventTypeBCSM, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InitialDPArg(value, elGetter);
}


/* eslint-enable */
