/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ServiceAddressInformation, _decode_ServiceAddressInformation, _encode_ServiceAddressInformation } from "../IN-CS2-datatypes/ServiceAddressInformation.ta.mjs";
// export { ServiceAddressInformation, _decode_ServiceAddressInformation, _encode_ServiceAddressInformation } from "../IN-CS2-datatypes/ServiceAddressInformation.ta.mjs";
import { type BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS2-datatypes/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../IN-CS2-datatypes/BearerCapability.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
import { type CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS2-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-CS2-datatypes/CallingPartysCategory.ta.mjs";
import { type IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-CS2-datatypes/IPSSPCapabilities.ta.mjs";
// export { IPSSPCapabilities, _decode_IPSSPCapabilities, _encode_IPSSPCapabilities } from "../IN-CS2-datatypes/IPSSPCapabilities.ta.mjs";
import { type IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-CS2-datatypes/IPAvailable.ta.mjs";
// export { IPAvailable, _decode_IPAvailable, _encode_IPAvailable } from "../IN-CS2-datatypes/IPAvailable.ta.mjs";
import { type ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS2-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS2-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { CGEncountered, _decode_CGEncountered, _encode_CGEncountered, _enum_for_CGEncountered } from "../IN-CS2-datatypes/CGEncountered.ta.mjs";
// export { CGEncountered, _enum_for_CGEncountered, CGEncountered_noCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, noCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_manualCGencountered /* IMPORTED_LONG_ENUMERATION_ITEM */, manualCGencountered /* IMPORTED_SHORT_ENUMERATION_ITEM */, CGEncountered_scpOverload /* IMPORTED_LONG_ENUMERATION_ITEM */, scpOverload /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CGEncountered, _encode_CGEncountered } from "../IN-CS2-datatypes/CGEncountered.ta.mjs";
import { type LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";
import { type ServiceProfileIdentifier, _decode_ServiceProfileIdentifier, _encode_ServiceProfileIdentifier } from "../IN-CS2-datatypes/ServiceProfileIdentifier.ta.mjs";
// export { ServiceProfileIdentifier, _decode_ServiceProfileIdentifier, _encode_ServiceProfileIdentifier } from "../IN-CS2-datatypes/ServiceProfileIdentifier.ta.mjs";
import { TerminalType, _decode_TerminalType, _encode_TerminalType, _enum_for_TerminalType } from "../IN-CS2-datatypes/TerminalType.ta.mjs";
// export { TerminalType, _enum_for_TerminalType, TerminalType_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dialPulse /* IMPORTED_LONG_ENUMERATION_ITEM */, dialPulse /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_dtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */, isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_isdnNoDtmf /* IMPORTED_LONG_ENUMERATION_ITEM */, isdnNoDtmf /* IMPORTED_SHORT_ENUMERATION_ITEM */, TerminalType_spare /* IMPORTED_LONG_ENUMERATION_ITEM */, spare /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TerminalType, _encode_TerminalType } from "../IN-CS2-datatypes/TerminalType.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { type ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../IN-CS2-datatypes/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../IN-CS2-datatypes/ChargeNumber.ta.mjs";
import { type ServingAreaID, _decode_ServingAreaID, _encode_ServingAreaID } from "../IN-CS2-datatypes/ServingAreaID.ta.mjs";
// export { ServingAreaID, _decode_ServingAreaID, _encode_ServingAreaID } from "../IN-CS2-datatypes/ServingAreaID.ta.mjs";
import { type ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS2-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS2-datatypes/ServiceInteractionIndicators.ta.mjs";
import { type INServiceCompatibilityIndication, _decode_INServiceCompatibilityIndication, _encode_INServiceCompatibilityIndication } from "../IN-CS2-datatypes/INServiceCompatibilityIndication.ta.mjs";
// export { INServiceCompatibilityIndication, _decode_INServiceCompatibilityIndication, _encode_INServiceCompatibilityIndication } from "../IN-CS2-datatypes/INServiceCompatibilityIndication.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS2-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS2-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { type USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS2-datatypes/USIServiceIndicator.ta.mjs";
// export { USIServiceIndicator, _decode_USIServiceIndicator, _encode_USIServiceIndicator } from "../IN-CS2-datatypes/USIServiceIndicator.ta.mjs";
import { type USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS2-datatypes/USIInformation.ta.mjs";
// export { USIInformation, _decode_USIInformation, _encode_USIInformation } from "../IN-CS2-datatypes/USIInformation.ta.mjs";
import { type ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS2-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS2-datatypes/ForwardGVNS.ta.mjs";
import { type CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS2-datatypes/CSAID.ta.mjs";
// export { CSAID, _decode_CSAID, _encode_CSAID } from "../IN-CS2-datatypes/CSAID.ta.mjs";


/**
 * @summary DpSpecificCommonParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DpSpecificCommonParameters ::= SEQUENCE {
 *   serviceAddressInformation         [0]  ServiceAddressInformation,
 *   bearerCapability                  [1]  BearerCapability OPTIONAL,
 *   calledPartyNumber                 [2]  CalledPartyNumber OPTIONAL,
 *   callingPartyNumber                [3]  CallingPartyNumber OPTIONAL,
 *   callingPartysCategory             [4]  CallingPartysCategory OPTIONAL,
 *   iPSSPCapabilities                 [5]  IPSSPCapabilities OPTIONAL,
 *   iPAvailable                       [6]  IPAvailable OPTIONAL,
 *   iSDNAccessRelatedInformation      [7]  ISDNAccessRelatedInformation OPTIONAL,
 *   cGEncountered                     [8]  CGEncountered OPTIONAL,
 *   locationNumber                    [9]  LocationNumber OPTIONAL,
 *   serviceProfileIdentifier          [10]  ServiceProfileIdentifier OPTIONAL,
 *   terminalType                      [11]  TerminalType OPTIONAL,
 *   extensions
 *     [12]  SEQUENCE OF
 *             ExtensionField OPTIONAL,
 *   chargeNumber                      [13]  ChargeNumber OPTIONAL,
 *   servingAreaID                     [14]  ServingAreaID OPTIONAL,
 *   serviceInteractionIndicators
 *     [15]  ServiceInteractionIndicators OPTIONAL,
 *   iNServiceCompatibilityIndication
 *     [16]  INServiceCompatibilityIndication OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [17]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   uSIServiceIndicator               [18]  USIServiceIndicator OPTIONAL,
 *   uSIInformation                    [19]  USIInformation OPTIONAL,
 *   forwardGVNS                       [20]  ForwardGVNS OPTIONAL,
 *   createdCallSegmentAssociation     [21]  CSAID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class DpSpecificCommonParameters {
    /**
     * @summary `serviceAddressInformation`.
     * @public
     * @readonly
     */
    readonly serviceAddressInformation: ServiceAddressInformation;
    /**
     * @summary `bearerCapability`.
     * @public
     * @readonly
     */
    readonly bearerCapability: OPTIONAL<BearerCapability>;
    /**
     * @summary `calledPartyNumber`.
     * @public
     * @readonly
     */
    readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `callingPartysCategory`.
     * @public
     * @readonly
     */
    readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    /**
     * @summary `iPSSPCapabilities`.
     * @public
     * @readonly
     */
    readonly iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    /**
     * @summary `iPAvailable`.
     * @public
     * @readonly
     */
    readonly iPAvailable: OPTIONAL<IPAvailable>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    /**
     * @summary `cGEncountered`.
     * @public
     * @readonly
     */
    readonly cGEncountered: OPTIONAL<CGEncountered>;
    /**
     * @summary `locationNumber`.
     * @public
     * @readonly
     */
    readonly locationNumber: OPTIONAL<LocationNumber>;
    /**
     * @summary `serviceProfileIdentifier`.
     * @public
     * @readonly
     */
    readonly serviceProfileIdentifier: OPTIONAL<ServiceProfileIdentifier>;
    /**
     * @summary `terminalType`.
     * @public
     * @readonly
     */
    readonly terminalType: OPTIONAL<TerminalType>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary `chargeNumber`.
     * @public
     * @readonly
     */
    readonly chargeNumber: OPTIONAL<ChargeNumber>;
    /**
     * @summary `servingAreaID`.
     * @public
     * @readonly
     */
    readonly servingAreaID: OPTIONAL<ServingAreaID>;
    /**
     * @summary `serviceInteractionIndicators`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    /**
     * @summary `iNServiceCompatibilityIndication`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityIndication: OPTIONAL<INServiceCompatibilityIndication>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `uSIServiceIndicator`.
     * @public
     * @readonly
     */
    readonly uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    /**
     * @summary `uSIInformation`.
     * @public
     * @readonly
     */
    readonly uSIInformation: OPTIONAL<USIInformation>;
    /**
     * @summary `forwardGVNS`.
     * @public
     * @readonly
     */
    readonly forwardGVNS: OPTIONAL<ForwardGVNS>;
    /**
     * @summary `createdCallSegmentAssociation`.
     * @public
     * @readonly
     */
    readonly createdCallSegmentAssociation: OPTIONAL<CSAID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        serviceAddressInformation: ServiceAddressInformation,
        bearerCapability?: OPTIONAL<BearerCapability>,
        calledPartyNumber?: OPTIONAL<CalledPartyNumber>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        callingPartysCategory?: OPTIONAL<CallingPartysCategory>,
        iPSSPCapabilities?: OPTIONAL<IPSSPCapabilities>,
        iPAvailable?: OPTIONAL<IPAvailable>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        cGEncountered?: OPTIONAL<CGEncountered>,
        locationNumber?: OPTIONAL<LocationNumber>,
        serviceProfileIdentifier?: OPTIONAL<ServiceProfileIdentifier>,
        terminalType?: OPTIONAL<TerminalType>,
        extensions?: OPTIONAL<ExtensionField[]>,
        chargeNumber?: OPTIONAL<ChargeNumber>,
        servingAreaID?: OPTIONAL<ServingAreaID>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        iNServiceCompatibilityIndication?: OPTIONAL<INServiceCompatibilityIndication>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        uSIServiceIndicator?: OPTIONAL<USIServiceIndicator>,
        uSIInformation?: OPTIONAL<USIInformation>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        createdCallSegmentAssociation?: OPTIONAL<CSAID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.serviceAddressInformation = serviceAddressInformation;
        this.bearerCapability = bearerCapability;
        this.calledPartyNumber = calledPartyNumber;
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartysCategory = callingPartysCategory;
        this.iPSSPCapabilities = iPSSPCapabilities;
        this.iPAvailable = iPAvailable;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.cGEncountered = cGEncountered;
        this.locationNumber = locationNumber;
        this.serviceProfileIdentifier = serviceProfileIdentifier;
        this.terminalType = terminalType;
        this.extensions = extensions;
        this.chargeNumber = chargeNumber;
        this.servingAreaID = servingAreaID;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.iNServiceCompatibilityIndication = iNServiceCompatibilityIndication;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.uSIServiceIndicator = uSIServiceIndicator;
        this.uSIInformation = uSIInformation;
        this.forwardGVNS = forwardGVNS;
        this.createdCallSegmentAssociation = createdCallSegmentAssociation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DpSpecificCommonParameters
     * @description
     * 
     * This takes an `object` and converts it to a `DpSpecificCommonParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DpSpecificCommonParameters`.
     * @returns {DpSpecificCommonParameters}
     */
    public static _from_object (_o: { [_K in keyof (DpSpecificCommonParameters)]: (DpSpecificCommonParameters)[_K] }): DpSpecificCommonParameters {
        return new DpSpecificCommonParameters(_o.serviceAddressInformation, _o.bearerCapability, _o.calledPartyNumber, _o.callingPartyNumber, _o.callingPartysCategory, _o.iPSSPCapabilities, _o.iPAvailable, _o.iSDNAccessRelatedInformation, _o.cGEncountered, _o.locationNumber, _o.serviceProfileIdentifier, _o.terminalType, _o.extensions, _o.chargeNumber, _o.servingAreaID, _o.serviceInteractionIndicators, _o.iNServiceCompatibilityIndication, _o.serviceInteractionIndicatorsTwo, _o.uSIServiceIndicator, _o.uSIInformation, _o.forwardGVNS, _o.createdCallSegmentAssociation, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `cGEncountered`
         * @public
         * @static
         */

    public static _enum_for_cGEncountered = _enum_for_CGEncountered;        /**
         * @summary The enum used as the type of the component `terminalType`
         * @public
         * @static
         */

    public static _enum_for_terminalType = _enum_for_TerminalType;
}

/**
 * @summary The Leading Root Component Types of DpSpecificCommonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DpSpecificCommonParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("serviceAddressInformation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iPSSPCapabilities", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iPAvailable", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cGEncountered", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("locationNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("serviceProfileIdentifier", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("terminalType", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("servingAreaID", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("iNServiceCompatibilityIndication", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("uSIServiceIndicator", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("uSIInformation", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("createdCallSegmentAssociation", true, $.hasTag(_TagClass.context, 21))
];

/**
 * @summary The Trailing Root Component Types of DpSpecificCommonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DpSpecificCommonParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DpSpecificCommonParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DpSpecificCommonParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DpSpecificCommonParameters: $.ASN1Decoder<DpSpecificCommonParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DpSpecificCommonParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DpSpecificCommonParameters (el: _Element): DpSpecificCommonParameters {
    if (!_cached_decoder_for_DpSpecificCommonParameters) { _cached_decoder_for_DpSpecificCommonParameters = function (el: _Element): DpSpecificCommonParameters {
    let serviceAddressInformation!: ServiceAddressInformation;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let iPSSPCapabilities: OPTIONAL<IPSSPCapabilities>;
    let iPAvailable: OPTIONAL<IPAvailable>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let cGEncountered: OPTIONAL<CGEncountered>;
    let locationNumber: OPTIONAL<LocationNumber>;
    let serviceProfileIdentifier: OPTIONAL<ServiceProfileIdentifier>;
    let terminalType: OPTIONAL<TerminalType>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let servingAreaID: OPTIONAL<ServingAreaID>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let iNServiceCompatibilityIndication: OPTIONAL<INServiceCompatibilityIndication>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let uSIServiceIndicator: OPTIONAL<USIServiceIndicator>;
    let uSIInformation: OPTIONAL<USIInformation>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let createdCallSegmentAssociation: OPTIONAL<CSAID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "serviceAddressInformation": (_el: _Element): void => { serviceAddressInformation = $._decode_implicit<ServiceAddressInformation>(() => _decode_ServiceAddressInformation)(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = $._decode_explicit<BearerCapability>(() => _decode_BearerCapability)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "iPSSPCapabilities": (_el: _Element): void => { iPSSPCapabilities = $._decode_implicit<IPSSPCapabilities>(() => _decode_IPSSPCapabilities)(_el); },
        "iPAvailable": (_el: _Element): void => { iPAvailable = $._decode_implicit<IPAvailable>(() => _decode_IPAvailable)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "cGEncountered": (_el: _Element): void => { cGEncountered = $._decode_implicit<CGEncountered>(() => _decode_CGEncountered)(_el); },
        "locationNumber": (_el: _Element): void => { locationNumber = $._decode_implicit<LocationNumber>(() => _decode_LocationNumber)(_el); },
        "serviceProfileIdentifier": (_el: _Element): void => { serviceProfileIdentifier = $._decode_implicit<ServiceProfileIdentifier>(() => _decode_ServiceProfileIdentifier)(_el); },
        "terminalType": (_el: _Element): void => { terminalType = $._decode_implicit<TerminalType>(() => _decode_TerminalType)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = $._decode_implicit<ChargeNumber>(() => _decode_ChargeNumber)(_el); },
        "servingAreaID": (_el: _Element): void => { servingAreaID = $._decode_implicit<ServingAreaID>(() => _decode_ServingAreaID)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "iNServiceCompatibilityIndication": (_el: _Element): void => { iNServiceCompatibilityIndication = $._decode_implicit<INServiceCompatibilityIndication>(() => _decode_INServiceCompatibilityIndication)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "uSIServiceIndicator": (_el: _Element): void => { uSIServiceIndicator = $._decode_implicit<USIServiceIndicator>(() => _decode_USIServiceIndicator)(_el); },
        "uSIInformation": (_el: _Element): void => { uSIInformation = $._decode_implicit<USIInformation>(() => _decode_USIInformation)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "createdCallSegmentAssociation": (_el: _Element): void => { createdCallSegmentAssociation = $._decode_implicit<CSAID>(() => _decode_CSAID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DpSpecificCommonParameters,
        _extension_additions_list_spec_for_DpSpecificCommonParameters,
        _root_component_type_list_2_spec_for_DpSpecificCommonParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DpSpecificCommonParameters(
        serviceAddressInformation,
        bearerCapability,
        calledPartyNumber,
        callingPartyNumber,
        callingPartysCategory,
        iPSSPCapabilities,
        iPAvailable,
        iSDNAccessRelatedInformation,
        cGEncountered,
        locationNumber,
        serviceProfileIdentifier,
        terminalType,
        extensions,
        chargeNumber,
        servingAreaID,
        serviceInteractionIndicators,
        iNServiceCompatibilityIndication,
        serviceInteractionIndicatorsTwo,
        uSIServiceIndicator,
        uSIInformation,
        forwardGVNS,
        createdCallSegmentAssociation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DpSpecificCommonParameters(el);
}

let _cached_encoder_for_DpSpecificCommonParameters: $.ASN1Encoder<DpSpecificCommonParameters> | null = null;

/**
 * @summary Encodes a(n) DpSpecificCommonParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DpSpecificCommonParameters, encoded as an ASN.1 Element.
 */
export
function _encode_DpSpecificCommonParameters (value: DpSpecificCommonParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DpSpecificCommonParameters) { _cached_encoder_for_DpSpecificCommonParameters = function (value: DpSpecificCommonParameters, elGetter: $.ASN1Encoder<DpSpecificCommonParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(22 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceAddressInformation, $.BER)(value.serviceAddressInformation, $.BER);
    if (value.bearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_BearerCapability, $.BER)(value.bearerCapability, $.BER);
    }
    if (value.calledPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.iPSSPCapabilities !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_IPSSPCapabilities, $.BER)(value.iPSSPCapabilities, $.BER);
    }
    if (value.iPAvailable !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_IPAvailable, $.BER)(value.iPAvailable, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.cGEncountered !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_CGEncountered, $.BER)(value.cGEncountered, $.BER);
    }
    if (value.locationNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_LocationNumber, $.BER)(value.locationNumber, $.BER);
    }
    if (value.serviceProfileIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_ServiceProfileIdentifier, $.BER)(value.serviceProfileIdentifier, $.BER);
    }
    if (value.terminalType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_TerminalType, $.BER)(value.terminalType, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (value.chargeNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_ChargeNumber, $.BER)(value.chargeNumber, $.BER);
    }
    if (value.servingAreaID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_ServingAreaID, $.BER)(value.servingAreaID, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.iNServiceCompatibilityIndication !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_INServiceCompatibilityIndication, $.BER)(value.iNServiceCompatibilityIndication, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.uSIServiceIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => _encode_USIServiceIndicator, $.BER)(value.uSIServiceIndicator, $.BER);
    }
    if (value.uSIInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_USIInformation, $.BER)(value.uSIInformation, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.createdCallSegmentAssociation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 21, () => _encode_CSAID, $.BER)(value.createdCallSegmentAssociation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DpSpecificCommonParameters(value, elGetter);
}


/* eslint-enable */
