/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFRegistrationType, _decode_AMFRegistrationType, _encode_AMFRegistrationType, _enum_for_AMFRegistrationType } from "../TS33128Payloads/AMFRegistrationType.ta.mjs";
// export { AMFRegistrationType, _enum_for_AMFRegistrationType, AMFRegistrationType_initial /* IMPORTED_LONG_ENUMERATION_ITEM */, initial /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_mobility /* IMPORTED_LONG_ENUMERATION_ITEM */, mobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_periodic /* IMPORTED_LONG_ENUMERATION_ITEM */, periodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_sNPNOnboarding /* IMPORTED_LONG_ENUMERATION_ITEM */, sNPNOnboarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_disasterMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, disasterMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_disasterInitial /* IMPORTED_LONG_ENUMERATION_ITEM */, disasterInitial /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFRegistrationType, _encode_AMFRegistrationType } from "../TS33128Payloads/AMFRegistrationType.ta.mjs";
import { AMFRegistrationResult, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult, _enum_for_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
// export { AMFRegistrationResult, _enum_for_AMFRegistrationResult, AMFRegistrationResult_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_threeGPPAndNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAndNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
import { Slice, _decode_Slice, _encode_Slice } from "../TS33128Payloads/Slice.ta.mjs";
// export { Slice, _decode_Slice, _encode_Slice } from "../TS33128Payloads/Slice.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
// export { UEEndpointAddress, _decode_UEEndpointAddress, _encode_UEEndpointAddress } from "../TS33128Payloads/UEEndpointAddress.ta.mjs";
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { SMSOverNASIndicator, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator, _enum_for_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
// export { SMSOverNASIndicator, _enum_for_SMSOverNASIndicator, SMSOverNASIndicator_sMSOverNASNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSOverNASIndicator_sMSOverNASAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
import { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
// export { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
import { EMM5GMMStatus, _decode_EMM5GMMStatus, _encode_EMM5GMMStatus } from "../TS33128Payloads/EMM5GMMStatus.ta.mjs";
// export { EMM5GMMStatus, _decode_EMM5GMMStatus, _encode_EMM5GMMStatus } from "../TS33128Payloads/EMM5GMMStatus.ta.mjs";
import { NonIMEISVPEI, _decode_NonIMEISVPEI, _encode_NonIMEISVPEI } from "../TS33128Payloads/NonIMEISVPEI.ta.mjs";
// export { NonIMEISVPEI, _decode_NonIMEISVPEI, _encode_NonIMEISVPEI } from "../TS33128Payloads/NonIMEISVPEI.ta.mjs";
import { MACRestrictionIndicator, _decode_MACRestrictionIndicator, _encode_MACRestrictionIndicator, _enum_for_MACRestrictionIndicator } from "../TS33128Payloads/MACRestrictionIndicator.ta.mjs";
// export { MACRestrictionIndicator, _enum_for_MACRestrictionIndicator, MACRestrictionIndicator_noResrictions /* IMPORTED_LONG_ENUMERATION_ITEM */, noResrictions /* IMPORTED_SHORT_ENUMERATION_ITEM */, MACRestrictionIndicator_mACAddressNotUseableAsEquipmentIdentifier /* IMPORTED_LONG_ENUMERATION_ITEM */, mACAddressNotUseableAsEquipmentIdentifier /* IMPORTED_SHORT_ENUMERATION_ITEM */, MACRestrictionIndicator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MACRestrictionIndicator, _encode_MACRestrictionIndicator } from "../TS33128Payloads/MACRestrictionIndicator.ta.mjs";
import { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
// export { PagingRestrictionIndicator, _decode_PagingRestrictionIndicator, _encode_PagingRestrictionIndicator } from "../TS33128Payloads/PagingRestrictionIndicator.ta.mjs";
import { RATType, _decode_RATType, _encode_RATType, _enum_for_RATType } from "../TS33128Payloads/RATType.ta.mjs";
// export { RATType, _enum_for_RATType, RATType_nR /* IMPORTED_LONG_ENUMERATION_ITEM */, nR /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, wLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_virtual /* IMPORTED_LONG_ENUMERATION_ITEM */, virtual /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wireline /* IMPORTED_LONG_ENUMERATION_ITEM */, wireline /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineCable /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineCable /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wirelineBBF /* IMPORTED_LONG_ENUMERATION_ITEM */, wirelineBBF /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEM /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEM /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRU /* IMPORTED_LONG_ENUMERATION_ITEM */, nRU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_eUTRAU /* IMPORTED_LONG_ENUMERATION_ITEM */, eUTRAU /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedN3GA /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedN3GA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_trustedWLAN /* IMPORTED_LONG_ENUMERATION_ITEM */, trustedWLAN /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_uTRA /* IMPORTED_LONG_ENUMERATION_ITEM */, uTRA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_gERA /* IMPORTED_LONG_ENUMERATION_ITEM */, gERA /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nRGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nROTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nROTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nRREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nRREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_wBEUTRANOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, wBEUTRANOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nBIOTOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, nBIOTOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMLEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMLEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMMEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMMEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMGEO /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMGEO /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_lTEMOTHERSAT /* IMPORTED_LONG_ENUMERATION_ITEM */, lTEMOTHERSAT /* IMPORTED_SHORT_ENUMERATION_ITEM */, RATType_nREREDCAP /* IMPORTED_LONG_ENUMERATION_ITEM */, nREREDCAP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RATType, _encode_RATType } from "../TS33128Payloads/RATType.ta.mjs";
import { RRCEstablishmentCause, _decode_RRCEstablishmentCause, _encode_RRCEstablishmentCause } from "../TS33128Payloads/RRCEstablishmentCause.ta.mjs";
// export { RRCEstablishmentCause, _decode_RRCEstablishmentCause, _encode_RRCEstablishmentCause } from "../TS33128Payloads/RRCEstablishmentCause.ta.mjs";
import { NGInformation, _decode_NGInformation, _encode_NGInformation } from "../TS33128Payloads/NGInformation.ta.mjs";
// export { NGInformation, _decode_NGInformation, _encode_NGInformation } from "../TS33128Payloads/NGInformation.ta.mjs";
import { NASTransportInitialInformation, _decode_NASTransportInitialInformation, _encode_NASTransportInitialInformation } from "../TS33128Payloads/NASTransportInitialInformation.ta.mjs";
// export { NASTransportInitialInformation, _decode_NASTransportInitialInformation, _encode_NASTransportInitialInformation } from "../TS33128Payloads/NASTransportInitialInformation.ta.mjs";
import { SORTransparentContainer, _decode_SORTransparentContainer, _encode_SORTransparentContainer } from "../TS33128Payloads/SORTransparentContainer.ta.mjs";
// export { SORTransparentContainer, _decode_SORTransparentContainer, _encode_SORTransparentContainer } from "../TS33128Payloads/SORTransparentContainer.ta.mjs";
import { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";
// export { PLMNList, _decode_PLMNList, _encode_PLMNList } from "../TS33128Payloads/PLMNList.ta.mjs";
import { FiveGMMCapability, _decode_FiveGMMCapability, _encode_FiveGMMCapability } from "../TS33128Payloads/FiveGMMCapability.ta.mjs";
// export { FiveGMMCapability, _decode_FiveGMMCapability, _encode_FiveGMMCapability } from "../TS33128Payloads/FiveGMMCapability.ta.mjs";
import { InitialRANUEContextSetup, _decode_InitialRANUEContextSetup, _encode_InitialRANUEContextSetup } from "../TS33128Payloads/InitialRANUEContextSetup.ta.mjs";
// export { InitialRANUEContextSetup, _decode_InitialRANUEContextSetup, _encode_InitialRANUEContextSetup } from "../TS33128Payloads/InitialRANUEContextSetup.ta.mjs";
import { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
// export { MUSIMUERequestType, _decode_MUSIMUERequestType, _encode_MUSIMUERequestType } from "../TS33128Payloads/MUSIMUERequestType.ta.mjs";
import { UnavailabilityPeriodDuration, _decode_UnavailabilityPeriodDuration, _encode_UnavailabilityPeriodDuration } from "../TS33128Payloads/UnavailabilityPeriodDuration.ta.mjs";
// export { UnavailabilityPeriodDuration, _decode_UnavailabilityPeriodDuration, _encode_UnavailabilityPeriodDuration } from "../TS33128Payloads/UnavailabilityPeriodDuration.ta.mjs";
import { FiveGSUpdateType, _decode_FiveGSUpdateType, _encode_FiveGSUpdateType } from "../TS33128Payloads/FiveGSUpdateType.ta.mjs";
// export { FiveGSUpdateType, _decode_FiveGSUpdateType, _encode_FiveGSUpdateType } from "../TS33128Payloads/FiveGSUpdateType.ta.mjs";
import { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
// export { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
import { EstablishmentCauseNon3GPPAccess, _decode_EstablishmentCauseNon3GPPAccess, _encode_EstablishmentCauseNon3GPPAccess } from "../TS33128Payloads/EstablishmentCauseNon3GPPAccess.ta.mjs";
// export { EstablishmentCauseNon3GPPAccess, _decode_EstablishmentCauseNon3GPPAccess, _encode_EstablishmentCauseNon3GPPAccess } from "../TS33128Payloads/EstablishmentCauseNon3GPPAccess.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFRegistration ::= SEQUENCE
 * {
 *     registrationType                [1] AMFRegistrationType,
 *     registrationResult              [2] AMFRegistrationResult,
 *     slice                           [3] Slice OPTIONAL,
 *     sUPI                            [4] SUPI,
 *     sUCI                            [5] SUCI OPTIONAL,
 *     pEI                             [6] PEI OPTIONAL,
 *     gPSI                            [7] GPSI OPTIONAL,
 *     gUTI                            [8] FiveGGUTI,
 *     location                        [9] Location OPTIONAL,
 *     non3GPPAccessEndpoint           [10] UEEndpointAddress OPTIONAL,
 *     fiveGSTAIList                   [11] TAIList OPTIONAL,
 *     sMSOverNasIndicator             [12] SMSOverNASIndicator OPTIONAL,
 *     oldGUTI                         [13] EPS5GGUTI OPTIONAL,
 *     eMM5GRegStatus                  [14] EMM5GMMStatus OPTIONAL,
 *     nonIMEISVPEI                    [15] NonIMEISVPEI OPTIONAL,
 *     mACRestIndicator                [16] MACRestrictionIndicator OPTIONAL,
 *     pagingRestrictionIndicator      [17] PagingRestrictionIndicator OPTIONAL,
 *     rATType                         [18] RATType OPTIONAL,
 *     rRCEstablishmentCause           [19] RRCEstablishmentCause OPTIONAL,
 *     deprecatedNGInformation         [20] NGInformation OPTIONAL,
 *     nASTransportInitialInformation  [21] NASTransportInitialInformation OPTIONAL,
 *     sORTransparentContainer         [22] SORTransparentContainer OPTIONAL,
 *     equivalentPLMNList              [23] PLMNList OPTIONAL,
 *     fiveGMMCapability               [24] FiveGMMCapability OPTIONAL,
 *     initialRANUEContextSetup        [25] InitialRANUEContextSetup OPTIONAL,
 *     mUSIMUERequestType              [26] MUSIMUERequestType OPTIONAL,
 *     unavailabilityPeriodDuration    [27] UnavailabilityPeriodDuration OPTIONAL,
 *     fiveGSUpdateType                [28] FiveGSUpdateType OPTIONAL,
 *     uEAreaIndication                [29] UEAreaIndication OPTIONAL,
 *     establishmentCauseNon3GPPAccess [30] EstablishmentCauseNon3GPPAccess OPTIONAL,
 *     additionalUserIdentifiers       [31] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFRegistration {
    constructor (
        /**
         * @summary `registrationType`.
         * @public
         * @readonly
         */
        readonly registrationType: AMFRegistrationType,
        /**
         * @summary `registrationResult`.
         * @public
         * @readonly
         */
        readonly registrationResult: AMFRegistrationResult,
        /**
         * @summary `slice`.
         * @public
         * @readonly
         */
        readonly slice: OPTIONAL<Slice>,
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `sUCI`.
         * @public
         * @readonly
         */
        readonly sUCI: OPTIONAL<SUCI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `gUTI`.
         * @public
         * @readonly
         */
        readonly gUTI: FiveGGUTI,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `non3GPPAccessEndpoint`.
         * @public
         * @readonly
         */
        readonly non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>,
        /**
         * @summary `fiveGSTAIList`.
         * @public
         * @readonly
         */
        readonly fiveGSTAIList: OPTIONAL<TAIList>,
        /**
         * @summary `sMSOverNasIndicator`.
         * @public
         * @readonly
         */
        readonly sMSOverNasIndicator: OPTIONAL<SMSOverNASIndicator>,
        /**
         * @summary `oldGUTI`.
         * @public
         * @readonly
         */
        readonly oldGUTI: OPTIONAL<EPS5GGUTI>,
        /**
         * @summary `eMM5GRegStatus`.
         * @public
         * @readonly
         */
        readonly eMM5GRegStatus: OPTIONAL<EMM5GMMStatus>,
        /**
         * @summary `nonIMEISVPEI`.
         * @public
         * @readonly
         */
        readonly nonIMEISVPEI: OPTIONAL<NonIMEISVPEI>,
        /**
         * @summary `mACRestIndicator`.
         * @public
         * @readonly
         */
        readonly mACRestIndicator: OPTIONAL<MACRestrictionIndicator>,
        /**
         * @summary `pagingRestrictionIndicator`.
         * @public
         * @readonly
         */
        readonly pagingRestrictionIndicator: OPTIONAL<PagingRestrictionIndicator>,
        /**
         * @summary `rATType`.
         * @public
         * @readonly
         */
        readonly rATType: OPTIONAL<RATType>,
        /**
         * @summary `rRCEstablishmentCause`.
         * @public
         * @readonly
         */
        readonly rRCEstablishmentCause: OPTIONAL<RRCEstablishmentCause>,
        /**
         * @summary `deprecatedNGInformation`.
         * @public
         * @readonly
         */
        readonly deprecatedNGInformation: OPTIONAL<NGInformation>,
        /**
         * @summary `nASTransportInitialInformation`.
         * @public
         * @readonly
         */
        readonly nASTransportInitialInformation: OPTIONAL<NASTransportInitialInformation>,
        /**
         * @summary `sORTransparentContainer`.
         * @public
         * @readonly
         */
        readonly sORTransparentContainer: OPTIONAL<SORTransparentContainer>,
        /**
         * @summary `equivalentPLMNList`.
         * @public
         * @readonly
         */
        readonly equivalentPLMNList: OPTIONAL<PLMNList>,
        /**
         * @summary `fiveGMMCapability`.
         * @public
         * @readonly
         */
        readonly fiveGMMCapability: OPTIONAL<FiveGMMCapability>,
        /**
         * @summary `initialRANUEContextSetup`.
         * @public
         * @readonly
         */
        readonly initialRANUEContextSetup: OPTIONAL<InitialRANUEContextSetup>,
        /**
         * @summary `mUSIMUERequestType`.
         * @public
         * @readonly
         */
        readonly mUSIMUERequestType: OPTIONAL<MUSIMUERequestType>,
        /**
         * @summary `unavailabilityPeriodDuration`.
         * @public
         * @readonly
         */
        readonly unavailabilityPeriodDuration: OPTIONAL<UnavailabilityPeriodDuration>,
        /**
         * @summary `fiveGSUpdateType`.
         * @public
         * @readonly
         */
        readonly fiveGSUpdateType: OPTIONAL<FiveGSUpdateType>,
        /**
         * @summary `uEAreaIndication`.
         * @public
         * @readonly
         */
        readonly uEAreaIndication: OPTIONAL<UEAreaIndication>,
        /**
         * @summary `establishmentCauseNon3GPPAccess`.
         * @public
         * @readonly
         */
        readonly establishmentCauseNon3GPPAccess: OPTIONAL<EstablishmentCauseNon3GPPAccess>,
        /**
         * @summary `additionalUserIdentifiers`.
         * @public
         * @readonly
         */
        readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>
    ) {}

    /**
     * @summary Restructures an object into a AMFRegistration
     * @description
     * 
     * This takes an `object` and converts it to a `AMFRegistration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFRegistration`.
     * @returns {AMFRegistration}
     */
    public static _from_object (_o: { [_K in keyof (AMFRegistration)]: (AMFRegistration)[_K] }): AMFRegistration {
        return new AMFRegistration(_o.registrationType, _o.registrationResult, _o.slice, _o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.non3GPPAccessEndpoint, _o.fiveGSTAIList, _o.sMSOverNasIndicator, _o.oldGUTI, _o.eMM5GRegStatus, _o.nonIMEISVPEI, _o.mACRestIndicator, _o.pagingRestrictionIndicator, _o.rATType, _o.rRCEstablishmentCause, _o.deprecatedNGInformation, _o.nASTransportInitialInformation, _o.sORTransparentContainer, _o.equivalentPLMNList, _o.fiveGMMCapability, _o.initialRANUEContextSetup, _o.mUSIMUERequestType, _o.unavailabilityPeriodDuration, _o.fiveGSUpdateType, _o.uEAreaIndication, _o.establishmentCauseNon3GPPAccess, _o.additionalUserIdentifiers);
    }

        /**
         * @summary The enum used as the type of the component `registrationType`
         * @public
         * @static
         */

    public static _enum_for_registrationType = _enum_for_AMFRegistrationType;        /**
         * @summary The enum used as the type of the component `registrationResult`
         * @public
         * @static
         */

    public static _enum_for_registrationResult = _enum_for_AMFRegistrationResult;        /**
         * @summary The enum used as the type of the component `sMSOverNasIndicator`
         * @public
         * @static
         */

    public static _enum_for_sMSOverNasIndicator = _enum_for_SMSOverNASIndicator;        /**
         * @summary The enum used as the type of the component `mACRestIndicator`
         * @public
         * @static
         */

    public static _enum_for_mACRestIndicator = _enum_for_MACRestrictionIndicator;        /**
         * @summary The enum used as the type of the component `rATType`
         * @public
         * @static
         */

    public static _enum_for_rATType = _enum_for_RATType;
}

/**
 * @summary The Leading Root Component Types of AMFRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFRegistration: $.ComponentSpec[] = [
    new $.ComponentSpec("registrationType", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("registrationResult", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("slice", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("fiveGSTAIList", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("sMSOverNasIndicator", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("oldGUTI", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("eMM5GRegStatus", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("nonIMEISVPEI", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("mACRestIndicator", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("pagingRestrictionIndicator", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("rATType", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("rRCEstablishmentCause", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("deprecatedNGInformation", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("nASTransportInitialInformation", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("sORTransparentContainer", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("equivalentPLMNList", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("fiveGMMCapability", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("initialRANUEContextSetup", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("mUSIMUERequestType", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("unavailabilityPeriodDuration", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("fiveGSUpdateType", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("uEAreaIndication", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("establishmentCauseNon3GPPAccess", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 31))
];

/**
 * @summary The Trailing Root Component Types of AMFRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFRegistration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFRegistration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFRegistration: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFRegistration: $.ASN1Decoder<AMFRegistration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFRegistration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFRegistration (el: _Element): AMFRegistration {
    if (!_cached_decoder_for_AMFRegistration) { _cached_decoder_for_AMFRegistration = function (el: _Element): AMFRegistration {
    let registrationType!: AMFRegistrationType;
    let registrationResult!: AMFRegistrationResult;
    let slice: OPTIONAL<Slice>;
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI!: FiveGGUTI;
    let location: OPTIONAL<Location>;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let fiveGSTAIList: OPTIONAL<TAIList>;
    let sMSOverNasIndicator: OPTIONAL<SMSOverNASIndicator>;
    let oldGUTI: OPTIONAL<EPS5GGUTI>;
    let eMM5GRegStatus: OPTIONAL<EMM5GMMStatus>;
    let nonIMEISVPEI: OPTIONAL<NonIMEISVPEI>;
    let mACRestIndicator: OPTIONAL<MACRestrictionIndicator>;
    let pagingRestrictionIndicator: OPTIONAL<PagingRestrictionIndicator>;
    let rATType: OPTIONAL<RATType>;
    let rRCEstablishmentCause: OPTIONAL<RRCEstablishmentCause>;
    let deprecatedNGInformation: OPTIONAL<NGInformation>;
    let nASTransportInitialInformation: OPTIONAL<NASTransportInitialInformation>;
    let sORTransparentContainer: OPTIONAL<SORTransparentContainer>;
    let equivalentPLMNList: OPTIONAL<PLMNList>;
    let fiveGMMCapability: OPTIONAL<FiveGMMCapability>;
    let initialRANUEContextSetup: OPTIONAL<InitialRANUEContextSetup>;
    let mUSIMUERequestType: OPTIONAL<MUSIMUERequestType>;
    let unavailabilityPeriodDuration: OPTIONAL<UnavailabilityPeriodDuration>;
    let fiveGSUpdateType: OPTIONAL<FiveGSUpdateType>;
    let uEAreaIndication: OPTIONAL<UEAreaIndication>;
    let establishmentCauseNon3GPPAccess: OPTIONAL<EstablishmentCauseNon3GPPAccess>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const callbacks: $.DecodingMap = {
        "registrationType": (_el: _Element): void => { registrationType = $._decode_implicit<AMFRegistrationType>(() => _decode_AMFRegistrationType)(_el); },
        "registrationResult": (_el: _Element): void => { registrationResult = $._decode_implicit<AMFRegistrationResult>(() => _decode_AMFRegistrationResult)(_el); },
        "slice": (_el: _Element): void => { slice = $._decode_implicit<Slice>(() => _decode_Slice)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "fiveGSTAIList": (_el: _Element): void => { fiveGSTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "sMSOverNasIndicator": (_el: _Element): void => { sMSOverNasIndicator = $._decode_implicit<SMSOverNASIndicator>(() => _decode_SMSOverNASIndicator)(_el); },
        "oldGUTI": (_el: _Element): void => { oldGUTI = $._decode_explicit<EPS5GGUTI>(() => _decode_EPS5GGUTI)(_el); },
        "eMM5GRegStatus": (_el: _Element): void => { eMM5GRegStatus = $._decode_implicit<EMM5GMMStatus>(() => _decode_EMM5GMMStatus)(_el); },
        "nonIMEISVPEI": (_el: _Element): void => { nonIMEISVPEI = $._decode_explicit<NonIMEISVPEI>(() => _decode_NonIMEISVPEI)(_el); },
        "mACRestIndicator": (_el: _Element): void => { mACRestIndicator = $._decode_implicit<MACRestrictionIndicator>(() => _decode_MACRestrictionIndicator)(_el); },
        "pagingRestrictionIndicator": (_el: _Element): void => { pagingRestrictionIndicator = $._decode_implicit<PagingRestrictionIndicator>(() => _decode_PagingRestrictionIndicator)(_el); },
        "rATType": (_el: _Element): void => { rATType = $._decode_implicit<RATType>(() => _decode_RATType)(_el); },
        "rRCEstablishmentCause": (_el: _Element): void => { rRCEstablishmentCause = $._decode_explicit<RRCEstablishmentCause>(() => _decode_RRCEstablishmentCause)(_el); },
        "deprecatedNGInformation": (_el: _Element): void => { deprecatedNGInformation = $._decode_implicit<NGInformation>(() => _decode_NGInformation)(_el); },
        "nASTransportInitialInformation": (_el: _Element): void => { nASTransportInitialInformation = $._decode_implicit<NASTransportInitialInformation>(() => _decode_NASTransportInitialInformation)(_el); },
        "sORTransparentContainer": (_el: _Element): void => { sORTransparentContainer = $._decode_implicit<SORTransparentContainer>(() => _decode_SORTransparentContainer)(_el); },
        "equivalentPLMNList": (_el: _Element): void => { equivalentPLMNList = $._decode_implicit<PLMNList>(() => _decode_PLMNList)(_el); },
        "fiveGMMCapability": (_el: _Element): void => { fiveGMMCapability = $._decode_implicit<FiveGMMCapability>(() => _decode_FiveGMMCapability)(_el); },
        "initialRANUEContextSetup": (_el: _Element): void => { initialRANUEContextSetup = $._decode_implicit<InitialRANUEContextSetup>(() => _decode_InitialRANUEContextSetup)(_el); },
        "mUSIMUERequestType": (_el: _Element): void => { mUSIMUERequestType = $._decode_implicit<MUSIMUERequestType>(() => _decode_MUSIMUERequestType)(_el); },
        "unavailabilityPeriodDuration": (_el: _Element): void => { unavailabilityPeriodDuration = $._decode_implicit<UnavailabilityPeriodDuration>(() => _decode_UnavailabilityPeriodDuration)(_el); },
        "fiveGSUpdateType": (_el: _Element): void => { fiveGSUpdateType = $._decode_implicit<FiveGSUpdateType>(() => _decode_FiveGSUpdateType)(_el); },
        "uEAreaIndication": (_el: _Element): void => { uEAreaIndication = $._decode_implicit<UEAreaIndication>(() => _decode_UEAreaIndication)(_el); },
        "establishmentCauseNon3GPPAccess": (_el: _Element): void => { establishmentCauseNon3GPPAccess = $._decode_implicit<EstablishmentCauseNon3GPPAccess>(() => _decode_EstablishmentCauseNon3GPPAccess)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFRegistration,
        _extension_additions_list_spec_for_AMFRegistration,
        _root_component_type_list_2_spec_for_AMFRegistration,
        undefined,
    );
    return new AMFRegistration(
        registrationType,
        registrationResult,
        slice,
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        non3GPPAccessEndpoint,
        fiveGSTAIList,
        sMSOverNasIndicator,
        oldGUTI,
        eMM5GRegStatus,
        nonIMEISVPEI,
        mACRestIndicator,
        pagingRestrictionIndicator,
        rATType,
        rRCEstablishmentCause,
        deprecatedNGInformation,
        nASTransportInitialInformation,
        sORTransparentContainer,
        equivalentPLMNList,
        fiveGMMCapability,
        initialRANUEContextSetup,
        mUSIMUERequestType,
        unavailabilityPeriodDuration,
        fiveGSUpdateType,
        uEAreaIndication,
        establishmentCauseNon3GPPAccess,
        additionalUserIdentifiers
    );
}; }
    return _cached_decoder_for_AMFRegistration(el);
}

let _cached_encoder_for_AMFRegistration: $.ASN1Encoder<AMFRegistration> | null = null;

/**
 * @summary Encodes a(n) AMFRegistration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFRegistration, encoded as an ASN.1 Element.
 */
export
function _encode_AMFRegistration (value: AMFRegistration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFRegistration) { _cached_encoder_for_AMFRegistration = function (value: AMFRegistration, elGetter: $.ASN1Encoder<AMFRegistration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFRegistrationType, $.BER)(value.registrationType, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_AMFRegistrationResult, $.BER)(value.registrationResult, $.BER),
            /* IF_ABSENT  */ ((value.slice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Slice, $.BER)(value.slice, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.non3GPPAccessEndpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGSTAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_TAIList, $.BER)(value.fiveGSTAIList, $.BER)),
            /* IF_ABSENT  */ ((value.sMSOverNasIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SMSOverNASIndicator, $.BER)(value.sMSOverNasIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.oldGUTI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 13, () => _encode_EPS5GGUTI, $.BER)(value.oldGUTI, $.BER)),
            /* IF_ABSENT  */ ((value.eMM5GRegStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_EMM5GMMStatus, $.BER)(value.eMM5GRegStatus, $.BER)),
            /* IF_ABSENT  */ ((value.nonIMEISVPEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 15, () => _encode_NonIMEISVPEI, $.BER)(value.nonIMEISVPEI, $.BER)),
            /* IF_ABSENT  */ ((value.mACRestIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_MACRestrictionIndicator, $.BER)(value.mACRestIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.pagingRestrictionIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_PagingRestrictionIndicator, $.BER)(value.pagingRestrictionIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.rATType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_RATType, $.BER)(value.rATType, $.BER)),
            /* IF_ABSENT  */ ((value.rRCEstablishmentCause === undefined) ? undefined : $._encode_explicit(_TagClass.context, 19, () => _encode_RRCEstablishmentCause, $.BER)(value.rRCEstablishmentCause, $.BER)),
            /* IF_ABSENT  */ ((value.deprecatedNGInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_NGInformation, $.BER)(value.deprecatedNGInformation, $.BER)),
            /* IF_ABSENT  */ ((value.nASTransportInitialInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_NASTransportInitialInformation, $.BER)(value.nASTransportInitialInformation, $.BER)),
            /* IF_ABSENT  */ ((value.sORTransparentContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_SORTransparentContainer, $.BER)(value.sORTransparentContainer, $.BER)),
            /* IF_ABSENT  */ ((value.equivalentPLMNList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_PLMNList, $.BER)(value.equivalentPLMNList, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGMMCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_FiveGMMCapability, $.BER)(value.fiveGMMCapability, $.BER)),
            /* IF_ABSENT  */ ((value.initialRANUEContextSetup === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_InitialRANUEContextSetup, $.BER)(value.initialRANUEContextSetup, $.BER)),
            /* IF_ABSENT  */ ((value.mUSIMUERequestType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_MUSIMUERequestType, $.BER)(value.mUSIMUERequestType, $.BER)),
            /* IF_ABSENT  */ ((value.unavailabilityPeriodDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_UnavailabilityPeriodDuration, $.BER)(value.unavailabilityPeriodDuration, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGSUpdateType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_FiveGSUpdateType, $.BER)(value.fiveGSUpdateType, $.BER)),
            /* IF_ABSENT  */ ((value.uEAreaIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_UEAreaIndication, $.BER)(value.uEAreaIndication, $.BER)),
            /* IF_ABSENT  */ ((value.establishmentCauseNon3GPPAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_EstablishmentCauseNon3GPPAccess, $.BER)(value.establishmentCauseNon3GPPAccess, $.BER)),
            /* IF_ABSENT  */ ((value.additionalUserIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFRegistration(value, elGetter);
}


/* eslint-enable */
