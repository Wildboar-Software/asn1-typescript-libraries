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
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
// export { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
import { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
// export { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
import { CalledPartyStationType, _decode_CalledPartyStationType, _encode_CalledPartyStationType } from "../AIN-Parameters/CalledPartyStationType.ta.mjs";
// export { CalledPartyStationType, _decode_CalledPartyStationType, _encode_CalledPartyStationType } from "../AIN-Parameters/CalledPartyStationType.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
// export { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
import { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
import { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
// export { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
// export { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
import { STRConnection, _decode_STRConnection, _encode_STRConnection } from "../AIN-Parameters/STRConnection.ta.mjs";
// export { STRConnection, _decode_STRConnection, _encode_STRConnection } from "../AIN-Parameters/STRConnection.ta.mjs";
import { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
// export { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { CTRConnection, _decode_CTRConnection, _encode_CTRConnection } from "../AIN-Parameters/CTRConnection.ta.mjs";
// export { CTRConnection, _decode_CTRConnection, _encode_CTRConnection } from "../AIN-Parameters/CTRConnection.ta.mjs";
import { RTPServiceIndicator, _decode_RTPServiceIndicator, _encode_RTPServiceIndicator } from "../AIN-Parameters/RTPServiceIndicator.ta.mjs";
// export { RTPServiceIndicator, _decode_RTPServiceIndicator, _encode_RTPServiceIndicator } from "../AIN-Parameters/RTPServiceIndicator.ta.mjs";
import { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
// export { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
import { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";
// export { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";
import { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../AIN-Parameters/CallingGeodeticLocation.ta.mjs";
// export { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../AIN-Parameters/CallingGeodeticLocation.ta.mjs";


/**
 * @summary TerminationAttemptArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminationAttemptArg ::= SEQUENCE{
 *             userID                         UserID,
 *             bearerCapability               BearerCapability,
 *             calledPartyID                  CalledPartyID  OPTIONAL,
 *             lata                           Lata OPTIONAL,
 *             triggerCriteriaType            TriggerCriteriaType OPTIONAL,
 *             calledPartyStationType         CalledPartyStationType OPTIONAL,
 *             chargeNumber                   ChargeNumber OPTIONAL,
 *             callingPartyID                 CallingPartyID OPTIONAL,
 *             chargePartyStationType         ChargePartyStationType OPTIONAL,
 *             tcm                            Tcm OPTIONAL,
 *             originalCalledPartyID          OriginalCalledPartyID OPTIONAL,
 *             redirectingPartyID             RedirectingPartyID OPTIONAL,
 *             redirectionInformation         RedirectionInformation  OPTIONAL,
 *             genericName                    GenericName OPTIONAL,
 *             aCGEncountered                 ACGEncountered OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             sap                            Sap OPTIONAL,
 *             sTRConnection                  STRConnection OPTIONAL,
 *             aMASequenceNumber              AMASequenceNumber OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             cTRConnection                  CTRConnection OPTIONAL,
 *             rTPServiceIndicator            RTPServiceIndicator OPTIONAL,
 *             genericAddressList             GenericAddressList OPTIONAL,
 *             triggerInformation             TriggerInformation OPTIONAL,
 *             callingGeodeticLocation        CallingGeodeticLocation OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class TerminationAttemptArg {
    constructor (
        /**
         * @summary `userID`.
         * @public
         * @readonly
         */
        readonly userID: UserID,
        /**
         * @summary `bearerCapability`.
         * @public
         * @readonly
         */
        readonly bearerCapability: BearerCapability,
        /**
         * @summary `calledPartyID`.
         * @public
         * @readonly
         */
        readonly calledPartyID: OPTIONAL<CalledPartyID>,
        /**
         * @summary `lata`.
         * @public
         * @readonly
         */
        readonly lata: OPTIONAL<Lata>,
        /**
         * @summary `triggerCriteriaType`.
         * @public
         * @readonly
         */
        readonly triggerCriteriaType: OPTIONAL<TriggerCriteriaType>,
        /**
         * @summary `calledPartyStationType`.
         * @public
         * @readonly
         */
        readonly calledPartyStationType: OPTIONAL<CalledPartyStationType>,
        /**
         * @summary `chargeNumber`.
         * @public
         * @readonly
         */
        readonly chargeNumber: OPTIONAL<ChargeNumber>,
        /**
         * @summary `callingPartyID`.
         * @public
         * @readonly
         */
        readonly callingPartyID: OPTIONAL<CallingPartyID>,
        /**
         * @summary `chargePartyStationType`.
         * @public
         * @readonly
         */
        readonly chargePartyStationType: OPTIONAL<ChargePartyStationType>,
        /**
         * @summary `tcm`.
         * @public
         * @readonly
         */
        readonly tcm: OPTIONAL<Tcm>,
        /**
         * @summary `originalCalledPartyID`.
         * @public
         * @readonly
         */
        readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
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
        readonly redirectionInformation: OPTIONAL<RedirectionInformation>,
        /**
         * @summary `genericName`.
         * @public
         * @readonly
         */
        readonly genericName: OPTIONAL<GenericName>,
        /**
         * @summary `aCGEncountered`.
         * @public
         * @readonly
         */
        readonly aCGEncountered: OPTIONAL<ACGEncountered>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `sap`.
         * @public
         * @readonly
         */
        readonly sap: OPTIONAL<Sap>,
        /**
         * @summary `sTRConnection`.
         * @public
         * @readonly
         */
        readonly sTRConnection: OPTIONAL<STRConnection>,
        /**
         * @summary `aMASequenceNumber`.
         * @public
         * @readonly
         */
        readonly aMASequenceNumber: OPTIONAL<AMASequenceNumber>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `cTRConnection`.
         * @public
         * @readonly
         */
        readonly cTRConnection: OPTIONAL<CTRConnection>,
        /**
         * @summary `rTPServiceIndicator`.
         * @public
         * @readonly
         */
        readonly rTPServiceIndicator: OPTIONAL<RTPServiceIndicator>,
        /**
         * @summary `genericAddressList`.
         * @public
         * @readonly
         */
        readonly genericAddressList: OPTIONAL<GenericAddressList>,
        /**
         * @summary `triggerInformation`.
         * @public
         * @readonly
         */
        readonly triggerInformation: OPTIONAL<TriggerInformation>,
        /**
         * @summary `callingGeodeticLocation`.
         * @public
         * @readonly
         */
        readonly callingGeodeticLocation: OPTIONAL<CallingGeodeticLocation>
    ) {}

    /**
     * @summary Restructures an object into a TerminationAttemptArg
     * @description
     * 
     * This takes an `object` and converts it to a `TerminationAttemptArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminationAttemptArg`.
     * @returns {TerminationAttemptArg}
     */
    public static _from_object (_o: { [_K in keyof (TerminationAttemptArg)]: (TerminationAttemptArg)[_K] }): TerminationAttemptArg {
        return new TerminationAttemptArg(_o.userID, _o.bearerCapability, _o.calledPartyID, _o.lata, _o.triggerCriteriaType, _o.calledPartyStationType, _o.chargeNumber, _o.callingPartyID, _o.chargePartyStationType, _o.tcm, _o.originalCalledPartyID, _o.redirectingPartyID, _o.redirectionInformation, _o.genericName, _o.aCGEncountered, _o.amp1, _o.amp2, _o.sap, _o.sTRConnection, _o.aMASequenceNumber, _o.extensionParameter, _o.cTRConnection, _o.rTPServiceIndicator, _o.genericAddressList, _o.triggerInformation, _o.callingGeodeticLocation);
    }


}

/**
 * @summary The Leading Root Component Types of TerminationAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TerminationAttemptArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("calledPartyID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("lata", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("triggerCriteriaType", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("calledPartyStationType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("callingPartyID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargePartyStationType", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("tcm", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("aCGEncountered", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("sap", true, $.hasTag(_TagClass.context, 81)),
    new $.ComponentSpec("sTRConnection", true, $.hasTag(_TagClass.context, 96)),
    new $.ComponentSpec("aMASequenceNumber", true, $.hasTag(_TagClass.context, 89)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("cTRConnection", true, $.hasTag(_TagClass.context, 141)),
    new $.ComponentSpec("rTPServiceIndicator", true, $.hasTag(_TagClass.context, 144)),
    new $.ComponentSpec("genericAddressList", true, $.hasTag(_TagClass.context, 107)),
    new $.ComponentSpec("triggerInformation", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("callingGeodeticLocation", true, $.hasTag(_TagClass.context, 162))
];

/**
 * @summary The Trailing Root Component Types of TerminationAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TerminationAttemptArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TerminationAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TerminationAttemptArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TerminationAttemptArg: $.ASN1Decoder<TerminationAttemptArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminationAttemptArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TerminationAttemptArg (el: _Element): TerminationAttemptArg {
    if (!_cached_decoder_for_TerminationAttemptArg) { _cached_decoder_for_TerminationAttemptArg = function (el: _Element): TerminationAttemptArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let calledPartyID: OPTIONAL<CalledPartyID>;
    let lata: OPTIONAL<Lata>;
    let triggerCriteriaType: OPTIONAL<TriggerCriteriaType>;
    let calledPartyStationType: OPTIONAL<CalledPartyStationType>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let callingPartyID: OPTIONAL<CallingPartyID>;
    let chargePartyStationType: OPTIONAL<ChargePartyStationType>;
    let tcm: OPTIONAL<Tcm>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let genericName: OPTIONAL<GenericName>;
    let aCGEncountered: OPTIONAL<ACGEncountered>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let sap: OPTIONAL<Sap>;
    let sTRConnection: OPTIONAL<STRConnection>;
    let aMASequenceNumber: OPTIONAL<AMASequenceNumber>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let cTRConnection: OPTIONAL<CTRConnection>;
    let rTPServiceIndicator: OPTIONAL<RTPServiceIndicator>;
    let genericAddressList: OPTIONAL<GenericAddressList>;
    let triggerInformation: OPTIONAL<TriggerInformation>;
    let callingGeodeticLocation: OPTIONAL<CallingGeodeticLocation>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); },
        "lata": (_el: _Element): void => { lata = _decode_Lata(_el); },
        "triggerCriteriaType": (_el: _Element): void => { triggerCriteriaType = _decode_TriggerCriteriaType(_el); },
        "calledPartyStationType": (_el: _Element): void => { calledPartyStationType = _decode_CalledPartyStationType(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = _decode_ChargeNumber(_el); },
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "chargePartyStationType": (_el: _Element): void => { chargePartyStationType = _decode_ChargePartyStationType(_el); },
        "tcm": (_el: _Element): void => { tcm = _decode_Tcm(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = _decode_OriginalCalledPartyID(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = _decode_RedirectingPartyID(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = _decode_RedirectionInformation(_el); },
        "genericName": (_el: _Element): void => { genericName = _decode_GenericName(_el); },
        "aCGEncountered": (_el: _Element): void => { aCGEncountered = _decode_ACGEncountered(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "sap": (_el: _Element): void => { sap = _decode_Sap(_el); },
        "sTRConnection": (_el: _Element): void => { sTRConnection = _decode_STRConnection(_el); },
        "aMASequenceNumber": (_el: _Element): void => { aMASequenceNumber = _decode_AMASequenceNumber(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "cTRConnection": (_el: _Element): void => { cTRConnection = _decode_CTRConnection(_el); },
        "rTPServiceIndicator": (_el: _Element): void => { rTPServiceIndicator = _decode_RTPServiceIndicator(_el); },
        "genericAddressList": (_el: _Element): void => { genericAddressList = _decode_GenericAddressList(_el); },
        "triggerInformation": (_el: _Element): void => { triggerInformation = _decode_TriggerInformation(_el); },
        "callingGeodeticLocation": (_el: _Element): void => { callingGeodeticLocation = _decode_CallingGeodeticLocation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TerminationAttemptArg,
        _extension_additions_list_spec_for_TerminationAttemptArg,
        _root_component_type_list_2_spec_for_TerminationAttemptArg,
        undefined,
    );
    return new TerminationAttemptArg(
        userID,
        bearerCapability,
        calledPartyID,
        lata,
        triggerCriteriaType,
        calledPartyStationType,
        chargeNumber,
        callingPartyID,
        chargePartyStationType,
        tcm,
        originalCalledPartyID,
        redirectingPartyID,
        redirectionInformation,
        genericName,
        aCGEncountered,
        amp1,
        amp2,
        sap,
        sTRConnection,
        aMASequenceNumber,
        extensionParameter,
        cTRConnection,
        rTPServiceIndicator,
        genericAddressList,
        triggerInformation,
        callingGeodeticLocation
    );
}; }
    return _cached_decoder_for_TerminationAttemptArg(el);
}

let _cached_encoder_for_TerminationAttemptArg: $.ASN1Encoder<TerminationAttemptArg> | null = null;

/**
 * @summary Encodes a(n) TerminationAttemptArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminationAttemptArg, encoded as an ASN.1 Element.
 */
export
function _encode_TerminationAttemptArg (value: TerminationAttemptArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TerminationAttemptArg) { _cached_encoder_for_TerminationAttemptArg = function (value: TerminationAttemptArg, elGetter: $.ASN1Encoder<TerminationAttemptArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.calledPartyID === undefined) ? undefined : _encode_CalledPartyID(value.calledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.lata === undefined) ? undefined : _encode_Lata(value.lata, $.BER)),
            /* IF_ABSENT  */ ((value.triggerCriteriaType === undefined) ? undefined : _encode_TriggerCriteriaType(value.triggerCriteriaType, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyStationType === undefined) ? undefined : _encode_CalledPartyStationType(value.calledPartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : _encode_ChargeNumber(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyID === undefined) ? undefined : _encode_CallingPartyID(value.callingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.chargePartyStationType === undefined) ? undefined : _encode_ChargePartyStationType(value.chargePartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.tcm === undefined) ? undefined : _encode_Tcm(value.tcm, $.BER)),
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : _encode_OriginalCalledPartyID(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : _encode_RedirectingPartyID(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : _encode_RedirectionInformation(value.redirectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.genericName === undefined) ? undefined : _encode_GenericName(value.genericName, $.BER)),
            /* IF_ABSENT  */ ((value.aCGEncountered === undefined) ? undefined : _encode_ACGEncountered(value.aCGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.sap === undefined) ? undefined : _encode_Sap(value.sap, $.BER)),
            /* IF_ABSENT  */ ((value.sTRConnection === undefined) ? undefined : _encode_STRConnection(value.sTRConnection, $.BER)),
            /* IF_ABSENT  */ ((value.aMASequenceNumber === undefined) ? undefined : _encode_AMASequenceNumber(value.aMASequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.cTRConnection === undefined) ? undefined : _encode_CTRConnection(value.cTRConnection, $.BER)),
            /* IF_ABSENT  */ ((value.rTPServiceIndicator === undefined) ? undefined : _encode_RTPServiceIndicator(value.rTPServiceIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.genericAddressList === undefined) ? undefined : _encode_GenericAddressList(value.genericAddressList, $.BER)),
            /* IF_ABSENT  */ ((value.triggerInformation === undefined) ? undefined : _encode_TriggerInformation(value.triggerInformation, $.BER)),
            /* IF_ABSENT  */ ((value.callingGeodeticLocation === undefined) ? undefined : _encode_CallingGeodeticLocation(value.callingGeodeticLocation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TerminationAttemptArg(value, elGetter);
}


/* eslint-enable */
