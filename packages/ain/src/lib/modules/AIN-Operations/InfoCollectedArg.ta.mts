/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
// export { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
// export { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
// export { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
import { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
// export { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
// export { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
import { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
// export { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
import { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
// export { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
import { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
// export { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
// export { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
import { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
// export { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
import { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
// export { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";
// export { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";
import { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../AIN-Parameters/CallingGeodeticLocation.ta.mjs";
// export { CallingGeodeticLocation, _decode_CallingGeodeticLocation, _encode_CallingGeodeticLocation } from "../AIN-Parameters/CallingGeodeticLocation.ta.mjs";
import { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";
// export { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";


/**
 * @summary InfoCollectedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoCollectedArg ::= SEQUENCE{
 *             userID    UserID,
 *             bearerCapability BearerCapability,
 *             chargeNumber ChargeNumber OPTIONAL,
 *             lata Lata OPTIONAL,
 *             carrier Carrier OPTIONAL,
 *             triggerCriteriaType TriggerCriteriaType OPTIONAL,
 *             callingPartyID CallingPartyID OPTIONAL,
 *             chargePartyStationType ChargePartyStationType OPTIONAL,
 *             accessCode AccessCode OPTIONAL,
 *             collectedAddressInfo CollectedAddressInfo OPTIONAL,
 *             collectedDigits CollectedDigits OPTIONAL,
 *             verticalServiceCode VerticalServiceCode OPTIONAL,
 *             tcm Tcm OPTIONAL,
 *             originalCalledPartyID OriginalCalledPartyID OPTIONAL,
 *             redirectingPartyID RedirectingPartyID OPTIONAL,
 *             redirectionInformation RedirectionInformation OPTIONAL,
 *             aCGEncountered ACGEncountered OPTIONAL,
 *             amp1                          Amp1 OPTIONAL,
 *             amp2                          Amp2 OPTIONAL,
 *             sap Sap OPTIONAL,
 *             genericAddressList GenericAddressList OPTIONAL,
 *             aMASequenceNumber AMASequenceNumber OPTIONAL,
 *             extensionParameter [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             prefix Prefix OPTIONAL,
 *             callingGeodeticLocation CallingGeodeticLocation OPTIONAL,
 *             triggerInformation TriggerInformation OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class InfoCollectedArg {
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
         * @summary `chargeNumber`.
         * @public
         * @readonly
         */
        readonly chargeNumber: OPTIONAL<ChargeNumber>,
        /**
         * @summary `lata`.
         * @public
         * @readonly
         */
        readonly lata: OPTIONAL<Lata>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `triggerCriteriaType`.
         * @public
         * @readonly
         */
        readonly triggerCriteriaType: OPTIONAL<TriggerCriteriaType>,
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
         * @summary `accessCode`.
         * @public
         * @readonly
         */
        readonly accessCode: OPTIONAL<AccessCode>,
        /**
         * @summary `collectedAddressInfo`.
         * @public
         * @readonly
         */
        readonly collectedAddressInfo: OPTIONAL<CollectedAddressInfo>,
        /**
         * @summary `collectedDigits`.
         * @public
         * @readonly
         */
        readonly collectedDigits: OPTIONAL<CollectedDigits>,
        /**
         * @summary `verticalServiceCode`.
         * @public
         * @readonly
         */
        readonly verticalServiceCode: OPTIONAL<VerticalServiceCode>,
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
         * @summary `genericAddressList`.
         * @public
         * @readonly
         */
        readonly genericAddressList: OPTIONAL<GenericAddressList>,
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
         * @summary `prefix`.
         * @public
         * @readonly
         */
        readonly prefix: OPTIONAL<Prefix>,
        /**
         * @summary `callingGeodeticLocation`.
         * @public
         * @readonly
         */
        readonly callingGeodeticLocation: OPTIONAL<CallingGeodeticLocation>,
        /**
         * @summary `triggerInformation`.
         * @public
         * @readonly
         */
        readonly triggerInformation: OPTIONAL<TriggerInformation>
    ) {}

    /**
     * @summary Restructures an object into a InfoCollectedArg
     * @description
     * 
     * This takes an `object` and converts it to a `InfoCollectedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InfoCollectedArg`.
     * @returns {InfoCollectedArg}
     */
    public static _from_object (_o: { [_K in keyof (InfoCollectedArg)]: (InfoCollectedArg)[_K] }): InfoCollectedArg {
        return new InfoCollectedArg(_o.userID, _o.bearerCapability, _o.chargeNumber, _o.lata, _o.carrier, _o.triggerCriteriaType, _o.callingPartyID, _o.chargePartyStationType, _o.accessCode, _o.collectedAddressInfo, _o.collectedDigits, _o.verticalServiceCode, _o.tcm, _o.originalCalledPartyID, _o.redirectingPartyID, _o.redirectionInformation, _o.aCGEncountered, _o.amp1, _o.amp2, _o.sap, _o.genericAddressList, _o.aMASequenceNumber, _o.extensionParameter, _o.prefix, _o.callingGeodeticLocation, _o.triggerInformation);
    }


}

/**
 * @summary The Leading Root Component Types of InfoCollectedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InfoCollectedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("lata", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("triggerCriteriaType", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("callingPartyID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargePartyStationType", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("accessCode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("collectedAddressInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("collectedDigits", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("verticalServiceCode", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("tcm", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("aCGEncountered", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("sap", true, $.hasTag(_TagClass.context, 81)),
    new $.ComponentSpec("genericAddressList", true, $.hasTag(_TagClass.context, 107)),
    new $.ComponentSpec("aMASequenceNumber", true, $.hasTag(_TagClass.context, 89)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("prefix", true, $.hasTag(_TagClass.context, 148)),
    new $.ComponentSpec("callingGeodeticLocation", true, $.hasTag(_TagClass.context, 162)),
    new $.ComponentSpec("triggerInformation", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of InfoCollectedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InfoCollectedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InfoCollectedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InfoCollectedArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InfoCollectedArg: $.ASN1Decoder<InfoCollectedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoCollectedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoCollectedArg (el: _Element): InfoCollectedArg {
    if (!_cached_decoder_for_InfoCollectedArg) { _cached_decoder_for_InfoCollectedArg = function (el: _Element): InfoCollectedArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let lata: OPTIONAL<Lata>;
    let carrier: OPTIONAL<Carrier>;
    let triggerCriteriaType: OPTIONAL<TriggerCriteriaType>;
    let callingPartyID: OPTIONAL<CallingPartyID>;
    let chargePartyStationType: OPTIONAL<ChargePartyStationType>;
    let accessCode: OPTIONAL<AccessCode>;
    let collectedAddressInfo: OPTIONAL<CollectedAddressInfo>;
    let collectedDigits: OPTIONAL<CollectedDigits>;
    let verticalServiceCode: OPTIONAL<VerticalServiceCode>;
    let tcm: OPTIONAL<Tcm>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let aCGEncountered: OPTIONAL<ACGEncountered>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let sap: OPTIONAL<Sap>;
    let genericAddressList: OPTIONAL<GenericAddressList>;
    let aMASequenceNumber: OPTIONAL<AMASequenceNumber>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let prefix: OPTIONAL<Prefix>;
    let callingGeodeticLocation: OPTIONAL<CallingGeodeticLocation>;
    let triggerInformation: OPTIONAL<TriggerInformation>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = _decode_ChargeNumber(_el); },
        "lata": (_el: _Element): void => { lata = _decode_Lata(_el); },
        "carrier": (_el: _Element): void => { carrier = _decode_Carrier(_el); },
        "triggerCriteriaType": (_el: _Element): void => { triggerCriteriaType = _decode_TriggerCriteriaType(_el); },
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "chargePartyStationType": (_el: _Element): void => { chargePartyStationType = _decode_ChargePartyStationType(_el); },
        "accessCode": (_el: _Element): void => { accessCode = _decode_AccessCode(_el); },
        "collectedAddressInfo": (_el: _Element): void => { collectedAddressInfo = _decode_CollectedAddressInfo(_el); },
        "collectedDigits": (_el: _Element): void => { collectedDigits = _decode_CollectedDigits(_el); },
        "verticalServiceCode": (_el: _Element): void => { verticalServiceCode = _decode_VerticalServiceCode(_el); },
        "tcm": (_el: _Element): void => { tcm = _decode_Tcm(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = _decode_OriginalCalledPartyID(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = _decode_RedirectingPartyID(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = _decode_RedirectionInformation(_el); },
        "aCGEncountered": (_el: _Element): void => { aCGEncountered = _decode_ACGEncountered(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "sap": (_el: _Element): void => { sap = _decode_Sap(_el); },
        "genericAddressList": (_el: _Element): void => { genericAddressList = _decode_GenericAddressList(_el); },
        "aMASequenceNumber": (_el: _Element): void => { aMASequenceNumber = _decode_AMASequenceNumber(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "prefix": (_el: _Element): void => { prefix = _decode_Prefix(_el); },
        "callingGeodeticLocation": (_el: _Element): void => { callingGeodeticLocation = _decode_CallingGeodeticLocation(_el); },
        "triggerInformation": (_el: _Element): void => { triggerInformation = _decode_TriggerInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InfoCollectedArg,
        _extension_additions_list_spec_for_InfoCollectedArg,
        _root_component_type_list_2_spec_for_InfoCollectedArg,
        undefined,
    );
    return new InfoCollectedArg(
        userID,
        bearerCapability,
        chargeNumber,
        lata,
        carrier,
        triggerCriteriaType,
        callingPartyID,
        chargePartyStationType,
        accessCode,
        collectedAddressInfo,
        collectedDigits,
        verticalServiceCode,
        tcm,
        originalCalledPartyID,
        redirectingPartyID,
        redirectionInformation,
        aCGEncountered,
        amp1,
        amp2,
        sap,
        genericAddressList,
        aMASequenceNumber,
        extensionParameter,
        prefix,
        callingGeodeticLocation,
        triggerInformation
    );
}; }
    return _cached_decoder_for_InfoCollectedArg(el);
}

let _cached_encoder_for_InfoCollectedArg: $.ASN1Encoder<InfoCollectedArg> | null = null;

/**
 * @summary Encodes a(n) InfoCollectedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoCollectedArg, encoded as an ASN.1 Element.
 */
export
function _encode_InfoCollectedArg (value: InfoCollectedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoCollectedArg) { _cached_encoder_for_InfoCollectedArg = function (value: InfoCollectedArg, elGetter: $.ASN1Encoder<InfoCollectedArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : _encode_ChargeNumber(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.lata === undefined) ? undefined : _encode_Lata(value.lata, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : _encode_Carrier(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.triggerCriteriaType === undefined) ? undefined : _encode_TriggerCriteriaType(value.triggerCriteriaType, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyID === undefined) ? undefined : _encode_CallingPartyID(value.callingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.chargePartyStationType === undefined) ? undefined : _encode_ChargePartyStationType(value.chargePartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.accessCode === undefined) ? undefined : _encode_AccessCode(value.accessCode, $.BER)),
            /* IF_ABSENT  */ ((value.collectedAddressInfo === undefined) ? undefined : _encode_CollectedAddressInfo(value.collectedAddressInfo, $.BER)),
            /* IF_ABSENT  */ ((value.collectedDigits === undefined) ? undefined : _encode_CollectedDigits(value.collectedDigits, $.BER)),
            /* IF_ABSENT  */ ((value.verticalServiceCode === undefined) ? undefined : _encode_VerticalServiceCode(value.verticalServiceCode, $.BER)),
            /* IF_ABSENT  */ ((value.tcm === undefined) ? undefined : _encode_Tcm(value.tcm, $.BER)),
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : _encode_OriginalCalledPartyID(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : _encode_RedirectingPartyID(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : _encode_RedirectionInformation(value.redirectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.aCGEncountered === undefined) ? undefined : _encode_ACGEncountered(value.aCGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.sap === undefined) ? undefined : _encode_Sap(value.sap, $.BER)),
            /* IF_ABSENT  */ ((value.genericAddressList === undefined) ? undefined : _encode_GenericAddressList(value.genericAddressList, $.BER)),
            /* IF_ABSENT  */ ((value.aMASequenceNumber === undefined) ? undefined : _encode_AMASequenceNumber(value.aMASequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.prefix === undefined) ? undefined : _encode_Prefix(value.prefix, $.BER)),
            /* IF_ABSENT  */ ((value.callingGeodeticLocation === undefined) ? undefined : _encode_CallingGeodeticLocation(value.callingGeodeticLocation, $.BER)),
            /* IF_ABSENT  */ ((value.triggerInformation === undefined) ? undefined : _encode_TriggerInformation(value.triggerInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InfoCollectedArg(value, elGetter);
}


/* eslint-enable */
