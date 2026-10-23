/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedType, _decode_RequestedType, _encode_RequestedType } from "../IN-SCF-SCF-datatypes/RequestedType.ta.mjs";
// export { RequestedType, _decode_RequestedType, _encode_RequestedType } from "../IN-SCF-SCF-datatypes/RequestedType.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-SSF-SCF-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-SSF-SCF-datatypes/LocationNumber.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-SSF-SCF-datatypes/GenericNumber.ta.mjs";
// export { GenericNumber, _decode_GenericNumber, _encode_GenericNumber } from "../IN-SSF-SCF-datatypes/GenericNumber.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
// export { HighLayerCompatibility, _decode_HighLayerCompatibility, _encode_HighLayerCompatibility } from "../IN-SSF-SCF-datatypes/HighLayerCompatibility.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-SSF-SCF-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-SSF-SCF-datatypes/BearerCapability.ta.mjs";
import { InvokableService, _decode_InvokableService, _encode_InvokableService, _enum_for_InvokableService } from "../IN-SCF-SCF-datatypes/InvokableService.ta.mjs";
// export { InvokableService, _enum_for_InvokableService, InvokableService_callingLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, InvokableService_connectedLineIdentificationRestriction /* IMPORTED_LONG_ENUMERATION_ITEM */, InvokableService_callWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, callWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callHold /* IMPORTED_LONG_ENUMERATION_ITEM */, callHold /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_reverseCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, InvokableService_explicitCallTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, explicitCallTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, InvokableService_callCompletionOnBusySubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, callCompletionOnBusySubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InvokableService, _encode_InvokableService } from "../IN-SCF-SCF-datatypes/InvokableService.ta.mjs";
import { ActivableServices, _decode_ActivableServices, _encode_ActivableServices } from "../IN-SCF-SCF-datatypes/ActivableServices.ta.mjs";
// export { ActivableServices, ActivableServices_callingLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, callingLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_callingLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, ActivableServices_connectedLineIdentificationPresentation /* IMPORTED_LONG_NAMED_BIT */, connectedLineIdentificationPresentation /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_connectedLineIdentificationRestriction /* IMPORTED_LONG_NAMED_BIT */, ActivableServices_callForwardingOnNoReply /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNoReply /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_callForwardingUnconditional /* IMPORTED_LONG_NAMED_BIT */, callForwardingUnconditional /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_callForwardingOnBusy /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnBusy /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_callForwardingOnNotReachable /* IMPORTED_LONG_NAMED_BIT */, callForwardingOnNotReachable /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_reverseCharging /* IMPORTED_LONG_NAMED_BIT */, ActivableServices_adviceOfChargeOnStart /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeOnStart /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_adviceOfChargeAtEnd /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeAtEnd /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_adviceOfChargeDuringCall /* IMPORTED_LONG_NAMED_BIT */, adviceOfChargeDuringCall /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_timeDependentRouting /* IMPORTED_LONG_NAMED_BIT */, timeDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_callingPartingDependentRouting /* IMPORTED_LONG_NAMED_BIT */, callingPartingDependentRouting /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_outgoingCallBarring /* IMPORTED_LONG_NAMED_BIT */, outgoingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, ActivableServices_incomingCallBarring /* IMPORTED_LONG_NAMED_BIT */, incomingCallBarring /* IMPORTED_SHORT_NAMED_BIT */, _decode_ActivableServices, _encode_ActivableServices } from "../IN-SCF-SCF-datatypes/ActivableServices.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
import { UserInteractionModes, _decode_UserInteractionModes, _encode_UserInteractionModes } from "../IN-SCF-SCF-datatypes/UserInteractionModes.ta.mjs";
// export { UserInteractionModes, UserInteractionModes_voiceMessage /* IMPORTED_LONG_NAMED_BIT */, voiceMessage /* IMPORTED_SHORT_NAMED_BIT */, UserInteractionModes_tone /* IMPORTED_LONG_NAMED_BIT */, tone /* IMPORTED_SHORT_NAMED_BIT */, UserInteractionModes_display /* IMPORTED_LONG_NAMED_BIT */, display /* IMPORTED_SHORT_NAMED_BIT */, _decode_UserInteractionModes, _encode_UserInteractionModes } from "../IN-SCF-SCF-datatypes/UserInteractionModes.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
// export { SecurityParameters, _decode_SecurityParameters, _encode_SecurityParameters } from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary HandlingInformationRequestArg_Type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandlingInformationRequestArg-Type ::=
 * SEQUENCE {
 *   requestedType [0] RequestedType OPTIONAL,
 *   callingPartyNumber [1] CallingPartyNumber OPTIONAL,
 *   locationNumber [2] LocationNumber OPTIONAL,
 *   calledPartyNumber [3] CalledPartyNumber OPTIONAL,
 *   dialledDigits [4] GenericNumber OPTIONAL,
 *   redirectingPartyID [5] RedirectingPartyID OPTIONAL,
 *   redirectionInformation [6] RedirectionInformation OPTIONAL,
 *   originalCalledPartyID [7] OriginalCalledPartyID OPTIONAL,
 *   numberOfCallAttempts [8] INTEGER OPTIONAL,
 *   highLayerCompatibility [9] HighLayerCompatibility OPTIONAL,
 *   bearerCapability [10] BearerCapability OPTIONAL,
 *   invokedSupplementaryService [11] InvokableService OPTIONAL,
 *   activeSupplementaryServices [12] ActivableServices OPTIONAL,
 *   causeOfLastCallFailure [13] Cause OPTIONAL,
 *   userInteractionModes [14] UserInteractionModes OPTIONAL,
 *   callingPartysCategory [15] CallingPartysCategory OPTIONAL,
 *   callingPartyBusinessGroupID [16] CallingPartyBusinessGroupID OPTIONAL,
 *   securityParameters [17] SecurityParameters OPTIONAL,
 *   extensions [18] Extensions OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class HandlingInformationRequestArg_Type {
    /**
     * @summary `requestedType`.
     * @public
     * @readonly
     */
    readonly requestedType: OPTIONAL<RequestedType>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `locationNumber`.
     * @public
     * @readonly
     */
    readonly locationNumber: OPTIONAL<LocationNumber>;
    /**
     * @summary `calledPartyNumber`.
     * @public
     * @readonly
     */
    readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `dialledDigits`.
     * @public
     * @readonly
     */
    readonly dialledDigits: OPTIONAL<GenericNumber>;
    /**
     * @summary `redirectingPartyID`.
     * @public
     * @readonly
     */
    readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    /**
     * @summary `redirectionInformation`.
     * @public
     * @readonly
     */
    readonly redirectionInformation: OPTIONAL<RedirectionInformation>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `numberOfCallAttempts`.
     * @public
     * @readonly
     */
    readonly numberOfCallAttempts: OPTIONAL<INTEGER>;
    /**
     * @summary `highLayerCompatibility`.
     * @public
     * @readonly
     */
    readonly highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    /**
     * @summary `bearerCapability`.
     * @public
     * @readonly
     */
    readonly bearerCapability: OPTIONAL<BearerCapability>;
    /**
     * @summary `invokedSupplementaryService`.
     * @public
     * @readonly
     */
    readonly invokedSupplementaryService: OPTIONAL<InvokableService>;
    /**
     * @summary `activeSupplementaryServices`.
     * @public
     * @readonly
     */
    readonly activeSupplementaryServices: OPTIONAL<ActivableServices>;
    /**
     * @summary `causeOfLastCallFailure`.
     * @public
     * @readonly
     */
    readonly causeOfLastCallFailure: OPTIONAL<Cause>;
    /**
     * @summary `userInteractionModes`.
     * @public
     * @readonly
     */
    readonly userInteractionModes: OPTIONAL<UserInteractionModes>;
    /**
     * @summary `callingPartysCategory`.
     * @public
     * @readonly
     */
    readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    /**
     * @summary `callingPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    /**
     * @summary `securityParameters`.
     * @public
     * @readonly
     */
    readonly securityParameters: OPTIONAL<SecurityParameters>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        requestedType: OPTIONAL<RequestedType>,
        callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        locationNumber: OPTIONAL<LocationNumber>,
        calledPartyNumber: OPTIONAL<CalledPartyNumber>,
        dialledDigits: OPTIONAL<GenericNumber>,
        redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        redirectionInformation: OPTIONAL<RedirectionInformation>,
        originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        numberOfCallAttempts: OPTIONAL<INTEGER>,
        highLayerCompatibility: OPTIONAL<HighLayerCompatibility>,
        bearerCapability: OPTIONAL<BearerCapability>,
        invokedSupplementaryService: OPTIONAL<InvokableService>,
        activeSupplementaryServices: OPTIONAL<ActivableServices>,
        causeOfLastCallFailure: OPTIONAL<Cause>,
        userInteractionModes: OPTIONAL<UserInteractionModes>,
        callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>,
        securityParameters: OPTIONAL<SecurityParameters>,
        extensions: OPTIONAL<Extensions>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.requestedType = requestedType;
        this.callingPartyNumber = callingPartyNumber;
        this.locationNumber = locationNumber;
        this.calledPartyNumber = calledPartyNumber;
        this.dialledDigits = dialledDigits;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.originalCalledPartyID = originalCalledPartyID;
        this.numberOfCallAttempts = numberOfCallAttempts;
        this.highLayerCompatibility = highLayerCompatibility;
        this.bearerCapability = bearerCapability;
        this.invokedSupplementaryService = invokedSupplementaryService;
        this.activeSupplementaryServices = activeSupplementaryServices;
        this.causeOfLastCallFailure = causeOfLastCallFailure;
        this.userInteractionModes = userInteractionModes;
        this.callingPartysCategory = callingPartysCategory;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.securityParameters = securityParameters;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a HandlingInformationRequestArg_Type
     * @description
     * 
     * This takes an `object` and converts it to a `HandlingInformationRequestArg_Type`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HandlingInformationRequestArg_Type`.
     * @returns {HandlingInformationRequestArg_Type}
     */
    public static _from_object (_o: { [_K in keyof (HandlingInformationRequestArg_Type)]: (HandlingInformationRequestArg_Type)[_K] }): HandlingInformationRequestArg_Type {
        return new HandlingInformationRequestArg_Type(_o.requestedType, _o.callingPartyNumber, _o.locationNumber, _o.calledPartyNumber, _o.dialledDigits, _o.redirectingPartyID, _o.redirectionInformation, _o.originalCalledPartyID, _o.numberOfCallAttempts, _o.highLayerCompatibility, _o.bearerCapability, _o.invokedSupplementaryService, _o.activeSupplementaryServices, _o.causeOfLastCallFailure, _o.userInteractionModes, _o.callingPartysCategory, _o.callingPartyBusinessGroupID, _o.securityParameters, _o.extensions, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `invokedSupplementaryService`
         * @public
         * @static
         */

    public static _enum_for_invokedSupplementaryService = _enum_for_InvokableService;
}

/**
 * @summary The Leading Root Component Types of HandlingInformationRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HandlingInformationRequestArg_Type: $.ComponentSpec[] = [
    new $.ComponentSpec("requestedType", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("dialledDigits", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("numberOfCallAttempts", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("highLayerCompatibility", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("invokedSupplementaryService", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("activeSupplementaryServices", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("causeOfLastCallFailure", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("userInteractionModes", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("securityParameters", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 18))
];

/**
 * @summary The Trailing Root Component Types of HandlingInformationRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HandlingInformationRequestArg_Type: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HandlingInformationRequestArg_Type
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HandlingInformationRequestArg_Type: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HandlingInformationRequestArg_Type: $.ASN1Decoder<HandlingInformationRequestArg_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandlingInformationRequestArg_Type
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandlingInformationRequestArg_Type (el: _Element): HandlingInformationRequestArg_Type {
    if (!_cached_decoder_for_HandlingInformationRequestArg_Type) { _cached_decoder_for_HandlingInformationRequestArg_Type = function (el: _Element): HandlingInformationRequestArg_Type {
    let requestedType: OPTIONAL<RequestedType>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let locationNumber: OPTIONAL<LocationNumber>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let dialledDigits: OPTIONAL<GenericNumber>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let numberOfCallAttempts: OPTIONAL<INTEGER>;
    let highLayerCompatibility: OPTIONAL<HighLayerCompatibility>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let invokedSupplementaryService: OPTIONAL<InvokableService>;
    let activeSupplementaryServices: OPTIONAL<ActivableServices>;
    let causeOfLastCallFailure: OPTIONAL<Cause>;
    let userInteractionModes: OPTIONAL<UserInteractionModes>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let securityParameters: OPTIONAL<SecurityParameters>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requestedType": (_el: _Element): void => { requestedType = $._decode_implicit<RequestedType>(() => _decode_RequestedType)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "dialledDigits": (_el: _Element): void => { dialledDigits = $._decode_implicit<GenericNumber>(() => _decode_GenericNumber)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "numberOfCallAttempts": (_el: _Element): void => { numberOfCallAttempts = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "highLayerCompatibility": (_el: _Element): void => { highLayerCompatibility = $._decode_implicit<HighLayerCompatibility>(() => _decode_HighLayerCompatibility)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "invokedSupplementaryService": (_el: _Element): void => { invokedSupplementaryService = $._decode_implicit<InvokableService>(() => _decode_InvokableService)(_el); },
        "activeSupplementaryServices": (_el: _Element): void => { activeSupplementaryServices = $._decode_implicit<ActivableServices>(() => _decode_ActivableServices)(_el); },
        "causeOfLastCallFailure": (_el: _Element): void => { causeOfLastCallFailure = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "userInteractionModes": (_el: _Element): void => { userInteractionModes = $._decode_implicit<UserInteractionModes>(() => _decode_UserInteractionModes)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "securityParameters": (_el: _Element): void => { securityParameters = $._decode_implicit<SecurityParameters>(() => _decode_SecurityParameters)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HandlingInformationRequestArg_Type,
        _extension_additions_list_spec_for_HandlingInformationRequestArg_Type,
        _root_component_type_list_2_spec_for_HandlingInformationRequestArg_Type,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new HandlingInformationRequestArg_Type(
        requestedType,
        callingPartyNumber,
        locationNumber,
        calledPartyNumber,
        dialledDigits,
        redirectingPartyID,
        redirectionInformation,
        originalCalledPartyID,
        numberOfCallAttempts,
        highLayerCompatibility,
        bearerCapability,
        invokedSupplementaryService,
        activeSupplementaryServices,
        causeOfLastCallFailure,
        userInteractionModes,
        callingPartysCategory,
        callingPartyBusinessGroupID,
        securityParameters,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_HandlingInformationRequestArg_Type(el);
}

let _cached_encoder_for_HandlingInformationRequestArg_Type: $.ASN1Encoder<HandlingInformationRequestArg_Type> | null = null;

/**
 * @summary Encodes a(n) HandlingInformationRequestArg_Type into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandlingInformationRequestArg_Type, encoded as an ASN.1 Element.
 */
export
function _encode_HandlingInformationRequestArg_Type (value: HandlingInformationRequestArg_Type, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandlingInformationRequestArg_Type) { _cached_encoder_for_HandlingInformationRequestArg_Type = function (value: HandlingInformationRequestArg_Type, elGetter: $.ASN1Encoder<HandlingInformationRequestArg_Type>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(19 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.requestedType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_RequestedType, $.BER)(value.requestedType, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.locationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER);
    }
    if (value.calledPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    }
    if (value.dialledDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_GenericNumber, $.BER)(value.dialledDigits, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.numberOfCallAttempts !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.numberOfCallAttempts, $.BER);
    }
    if (value.highLayerCompatibility !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_HighLayerCompatibility, $.BER)(value.highLayerCompatibility, $.BER);
    }
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 10, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (value.invokedSupplementaryService !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_InvokableService, $.BER)(value.invokedSupplementaryService, $.BER);
    }
    if (value.activeSupplementaryServices !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_ActivableServices, $.BER)(value.activeSupplementaryServices, $.BER);
    }
    if (value.causeOfLastCallFailure !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_Cause, $.BER)(value.causeOfLastCallFailure, $.BER);
    }
    if (value.userInteractionModes !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_UserInteractionModes, $.BER)(value.userInteractionModes, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.securityParameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_SecurityParameters, $.BER)(value.securityParameters, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_HandlingInformationRequestArg_Type(value, elGetter);
}


/* eslint-enable */
