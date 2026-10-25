/* eslint-disable */
import {
    type NULL,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ContinueWithArgumentArg_legorCSID, _decode_ContinueWithArgumentArg_legorCSID, _encode_ContinueWithArgumentArg_legorCSID } from "../IN-SSF-SCF-ops-args/ContinueWithArgumentArg-legorCSID.ta.mjs";
// export { ContinueWithArgumentArg_legorCSID, _decode_ContinueWithArgumentArg_legorCSID, _encode_ContinueWithArgumentArg_legorCSID } from "../IN-SSF-SCF-ops-args/ContinueWithArgumentArg-legorCSID.ta.mjs";
import { leg1 } from "../IN-SSF-SCF-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-SSF-SCF-datatypes/leg1.va.mjs";
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { type GenericName, _decode_GenericName, _encode_GenericName } from "../IN-SSF-SCF-datatypes/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../IN-SSF-SCF-datatypes/GenericName.ta.mjs";
import { type INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { type ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
import { type BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { type SDSSinformation, _decode_SDSSinformation, _encode_SDSSinformation } from "../IN-SSF-SCF-datatypes/SDSSinformation.ta.mjs";
// export { SDSSinformation, _decode_SDSSinformation, _encode_SDSSinformation } from "../IN-SSF-SCF-datatypes/SDSSinformation.ta.mjs";
import { type ConnectionIdentifier, _decode_ConnectionIdentifier, _encode_ConnectionIdentifier } from "../IN-SSF-SCF-datatypes/ConnectionIdentifier.ta.mjs";
// export { ConnectionIdentifier, _decode_ConnectionIdentifier, _encode_ConnectionIdentifier } from "../IN-SSF-SCF-datatypes/ConnectionIdentifier.ta.mjs";
import { type ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { type CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../IN-SSF-SCF-datatypes/CallingPartysCategory.ta.mjs";
import { type RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { type RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { type ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
// export { ForwardCallIndicators, _decode_ForwardCallIndicators, _encode_ForwardCallIndicators } from "../IN-SSF-SCF-datatypes/ForwardCallIndicators.ta.mjs";
import { type GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
// export { GenericNumbers, _decode_GenericNumbers, _encode_GenericNumbers } from "../IN-SSF-SCF-datatypes/GenericNumbers.ta.mjs";
import { type CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../IN-SSF-SCF-datatypes/CUG-Interlock.ta.mjs";
// export { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../IN-SSF-SCF-datatypes/CUG-Interlock.ta.mjs";
import { IPRelatedInformation, _decode_IPRelatedInformation, _encode_IPRelatedInformation } from "../IN-SSF-SCF-datatypes/IPRelatedInformation.ta.mjs";
// export { IPRelatedInformation, _decode_IPRelatedInformation, _encode_IPRelatedInformation } from "../IN-SSF-SCF-datatypes/IPRelatedInformation.ta.mjs";


/**
 * @summary ContinueWithArgumentArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContinueWithArgumentArg ::= SEQUENCE {
 *   legorCSID
 *     CHOICE {legID  [0]  LegID,
 *             csID   [9]  CallSegmentID} DEFAULT legID:sendingSideID:leg1,
 *   alertingPattern                  [1]  AlertingPattern OPTIONAL,
 *   genericName                      [2]  GenericName OPTIONAL,
 *   iNServiceCompatibilityResponse   [3]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [4]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [5]  BackwardGVNS OPTIONAL,
 *   extensions                       [6]  Extensions OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [7]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   sDSSinformation                  [8]  SDSSinformation OPTIONAL,
 *   connectionIdentifier             [60]  ConnectionIdentifier OPTIONAL,
 *   ...,
 *   iSDNAccessRelatedInformation
 *     [19]  ISDNAccessRelatedInformation OPTIONAL,
 *   originalCalledPartyID            [10]  OriginalCalledPartyID OPTIONAL,
 *   callingPartyNumber               [11]  CallingPartyNumber OPTIONAL,
 *   callingPartysCategory            [12]  CallingPartysCategory OPTIONAL,
 *   redirectingPartyID               [13]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation           [14]  RedirectionInformation OPTIONAL,
 *   forwardCallIndicators            [15]  ForwardCallIndicators OPTIONAL,
 *   genericNumbers                   [16]  GenericNumbers OPTIONAL,
 *   cug-Interlock                    [17]  CUG-Interlock OPTIONAL,
 *   cug-OutgoingAccess               [18]  NULL OPTIONAL,
 *   ipRelationInformation            [20]  IPRelatedInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ContinueWithArgumentArg {
    /**
     * @summary `legorCSID`.
     * @public
     * @readonly
     */
    readonly legorCSID: OPTIONAL<ContinueWithArgumentArg_legorCSID>;
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `genericName`.
     * @public
     * @readonly
     */
    readonly genericName: OPTIONAL<GenericName>;
    /**
     * @summary `iNServiceCompatibilityResponse`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    /**
     * @summary `forwardGVNS`.
     * @public
     * @readonly
     */
    readonly forwardGVNS: OPTIONAL<ForwardGVNS>;
    /**
     * @summary `backwardGVNS`.
     * @public
     * @readonly
     */
    readonly backwardGVNS: OPTIONAL<BackwardGVNS>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `sDSSinformation`.
     * @public
     * @readonly
     */
    readonly sDSSinformation: OPTIONAL<SDSSinformation>;
    /**
     * @summary `connectionIdentifier`.
     * @public
     * @readonly
     */
    readonly connectionIdentifier: OPTIONAL<ConnectionIdentifier>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
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
     * @summary `forwardCallIndicators`.
     * @public
     * @readonly
     */
    readonly forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    /**
     * @summary `genericNumbers`.
     * @public
     * @readonly
     */
    readonly genericNumbers: OPTIONAL<GenericNumbers>;
    /**
     * @summary `cug_Interlock`.
     * @public
     * @readonly
     */
    readonly cug_Interlock: OPTIONAL<CUG_Interlock>;
    /**
     * @summary `cug_OutgoingAccess`.
     * @public
     * @readonly
     */
    readonly cug_OutgoingAccess: OPTIONAL<NULL>;
    /**
     * @summary `ipRelationInformation`.
     * @public
     * @readonly
     */
    readonly ipRelationInformation: OPTIONAL<IPRelatedInformation>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        legorCSID?: OPTIONAL<ContinueWithArgumentArg_legorCSID>,
        alertingPattern?: OPTIONAL<AlertingPattern>,
        genericName?: OPTIONAL<GenericName>,
        iNServiceCompatibilityResponse?: OPTIONAL<INServiceCompatibilityResponse>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        backwardGVNS?: OPTIONAL<BackwardGVNS>,
        extensions?: OPTIONAL<Extensions>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        sDSSinformation?: OPTIONAL<SDSSinformation>,
        connectionIdentifier?: OPTIONAL<ConnectionIdentifier>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        callingPartysCategory?: OPTIONAL<CallingPartysCategory>,
        redirectingPartyID?: OPTIONAL<RedirectingPartyID>,
        redirectionInformation?: OPTIONAL<RedirectionInformation>,
        forwardCallIndicators?: OPTIONAL<ForwardCallIndicators>,
        genericNumbers?: OPTIONAL<GenericNumbers>,
        cug_Interlock?: OPTIONAL<CUG_Interlock>,
        cug_OutgoingAccess?: OPTIONAL<NULL>,
        ipRelationInformation?: OPTIONAL<IPRelatedInformation>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.legorCSID = legorCSID;
        this.alertingPattern = alertingPattern;
        this.genericName = genericName;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.forwardGVNS = forwardGVNS;
        this.backwardGVNS = backwardGVNS;
        this.extensions = extensions;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.sDSSinformation = sDSSinformation;
        this.connectionIdentifier = connectionIdentifier;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.originalCalledPartyID = originalCalledPartyID;
        this.callingPartyNumber = callingPartyNumber;
        this.callingPartysCategory = callingPartysCategory;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.forwardCallIndicators = forwardCallIndicators;
        this.genericNumbers = genericNumbers;
        this.cug_Interlock = cug_Interlock;
        this.cug_OutgoingAccess = cug_OutgoingAccess;
        this.ipRelationInformation = ipRelationInformation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ContinueWithArgumentArg
     * @description
     * 
     * This takes an `object` and converts it to a `ContinueWithArgumentArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ContinueWithArgumentArg`.
     * @returns {ContinueWithArgumentArg}
     */
    public static _from_object (_o: { [_K in keyof (ContinueWithArgumentArg)]: (ContinueWithArgumentArg)[_K] }): ContinueWithArgumentArg {
        return new ContinueWithArgumentArg(_o.legorCSID, _o.alertingPattern, _o.genericName, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.extensions, _o.serviceInteractionIndicatorsTwo, _o.sDSSinformation, _o.connectionIdentifier, _o.iSDNAccessRelatedInformation, _o.originalCalledPartyID, _o.callingPartyNumber, _o.callingPartysCategory, _o.redirectingPartyID, _o.redirectionInformation, _o.forwardCallIndicators, _o.genericNumbers, _o.cug_Interlock, _o.cug_OutgoingAccess, _o.ipRelationInformation, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legorCSID`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legorCSID (): {
        legID: {
            sendingSideID: OCTET_STRING;
        };
    } { return { legID: { sendingSideID: leg1 } }; }
}

/**
 * @summary The Leading Root Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legorCSID", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 9))),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sDSSinformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("connectionIdentifier", true, $.hasTag(_TagClass.context, 60))
];

/**
 * @summary The Trailing Root Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ContinueWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ContinueWithArgumentArg: $.ComponentSpec[] = [
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("forwardCallIndicators", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("genericNumbers", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("cug-Interlock", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("cug-OutgoingAccess", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("ipRelationInformation", true, $.hasTag(_TagClass.context, 20))
];

let _cached_decoder_for_ContinueWithArgumentArg: $.ASN1Decoder<ContinueWithArgumentArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContinueWithArgumentArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContinueWithArgumentArg (el: _Element): ContinueWithArgumentArg {
    if (!_cached_decoder_for_ContinueWithArgumentArg) { _cached_decoder_for_ContinueWithArgumentArg = function (el: _Element): ContinueWithArgumentArg {
    let legorCSID: OPTIONAL<ContinueWithArgumentArg_legorCSID> = ContinueWithArgumentArg._default_value_for_legorCSID;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let genericName: OPTIONAL<GenericName>;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    let extensions: OPTIONAL<Extensions>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let sDSSinformation: OPTIONAL<SDSSinformation>;
    let connectionIdentifier: OPTIONAL<ConnectionIdentifier>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let forwardCallIndicators: OPTIONAL<ForwardCallIndicators>;
    let genericNumbers: OPTIONAL<GenericNumbers>;
    let cug_Interlock: OPTIONAL<CUG_Interlock>;
    let cug_OutgoingAccess: OPTIONAL<NULL>;
    let ipRelationInformation: OPTIONAL<IPRelatedInformation>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legorCSID": (_el: _Element): void => { legorCSID = _decode_ContinueWithArgumentArg_legorCSID(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "genericName": (_el: _Element): void => { genericName = $._decode_implicit<GenericName>(() => _decode_GenericName)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "sDSSinformation": (_el: _Element): void => { sDSSinformation = $._decode_implicit<SDSSinformation>(() => _decode_SDSSinformation)(_el); },
        "connectionIdentifier": (_el: _Element): void => { connectionIdentifier = $._decode_implicit<ConnectionIdentifier>(() => _decode_ConnectionIdentifier)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "forwardCallIndicators": (_el: _Element): void => { forwardCallIndicators = $._decode_implicit<ForwardCallIndicators>(() => _decode_ForwardCallIndicators)(_el); },
        "genericNumbers": (_el: _Element): void => { genericNumbers = $._decode_implicit<GenericNumbers>(() => _decode_GenericNumbers)(_el); },
        "cug-Interlock": (_el: _Element): void => { cug_Interlock = $._decode_implicit<CUG_Interlock>(() => _decode_CUG_Interlock)(_el); },
        "cug-OutgoingAccess": (_el: _Element): void => { cug_OutgoingAccess = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ipRelationInformation": (_el: _Element): void => { ipRelationInformation = $._decode_implicit<IPRelatedInformation>(() => _decode_IPRelatedInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ContinueWithArgumentArg,
        _extension_additions_list_spec_for_ContinueWithArgumentArg,
        _root_component_type_list_2_spec_for_ContinueWithArgumentArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ContinueWithArgumentArg(
        legorCSID,
        alertingPattern,
        genericName,
        iNServiceCompatibilityResponse,
        forwardGVNS,
        backwardGVNS,
        extensions,
        serviceInteractionIndicatorsTwo,
        sDSSinformation,
        connectionIdentifier,
        iSDNAccessRelatedInformation,
        originalCalledPartyID,
        callingPartyNumber,
        callingPartysCategory,
        redirectingPartyID,
        redirectionInformation,
        forwardCallIndicators,
        genericNumbers,
        cug_Interlock,
        cug_OutgoingAccess,
        ipRelationInformation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ContinueWithArgumentArg(el);
}

let _cached_encoder_for_ContinueWithArgumentArg: $.ASN1Encoder<ContinueWithArgumentArg> | null = null;

/**
 * @summary Encodes a(n) ContinueWithArgumentArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContinueWithArgumentArg, encoded as an ASN.1 Element.
 */
export
function _encode_ContinueWithArgumentArg (value: ContinueWithArgumentArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContinueWithArgumentArg) { _cached_encoder_for_ContinueWithArgumentArg = function (value: ContinueWithArgumentArg, elGetter: $.ASN1Encoder<ContinueWithArgumentArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(21 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.legorCSID !== undefined && !$.deepEq(value.legorCSID, ContinueWithArgumentArg._default_value_for_legorCSID)) {
        _components[_components_i++] = /* IF_DEFAULT */ _encode_ContinueWithArgumentArg_legorCSID(value.legorCSID, $.BER);
    }
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.genericName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_GenericName, $.BER)(value.genericName, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.backwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_BackwardGVNS, $.BER)(value.backwardGVNS, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.sDSSinformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_SDSSinformation, $.BER)(value.sDSSinformation, $.BER);
    }
    if (value.connectionIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 60, () => _encode_ConnectionIdentifier, $.BER)(value.connectionIdentifier, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 19, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.callingPartysCategory !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.forwardCallIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 15, () => _encode_ForwardCallIndicators, $.BER)(value.forwardCallIndicators, $.BER);
    }
    if (value.genericNumbers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_GenericNumbers, $.BER)(value.genericNumbers, $.BER);
    }
    if (value.cug_Interlock !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 17, () => _encode_CUG_Interlock, $.BER)(value.cug_Interlock, $.BER);
    }
    if (value.cug_OutgoingAccess !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 18, () => $._encodeNull, $.BER)(value.cug_OutgoingAccess, $.BER);
    }
    if (value.ipRelationInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 20, () => _encode_IPRelatedInformation, $.BER)(value.ipRelationInformation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ContinueWithArgumentArg(value, elGetter);
}


/* eslint-enable */
