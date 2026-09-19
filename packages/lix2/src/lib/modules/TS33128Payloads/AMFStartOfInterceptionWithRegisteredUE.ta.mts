/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AMFRegistrationResult, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult, _enum_for_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
// export { AMFRegistrationResult, _enum_for_AMFRegistrationResult, AMFRegistrationResult_threeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_nonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, nonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationResult_threeGPPAndNonThreeGPPAccess /* IMPORTED_LONG_ENUMERATION_ITEM */, threeGPPAndNonThreeGPPAccess /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFRegistrationResult, _encode_AMFRegistrationResult } from "../TS33128Payloads/AMFRegistrationResult.ta.mjs";
import { AMFRegistrationType, _decode_AMFRegistrationType, _encode_AMFRegistrationType, _enum_for_AMFRegistrationType } from "../TS33128Payloads/AMFRegistrationType.ta.mjs";
// export { AMFRegistrationType, _enum_for_AMFRegistrationType, AMFRegistrationType_initial /* IMPORTED_LONG_ENUMERATION_ITEM */, initial /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_mobility /* IMPORTED_LONG_ENUMERATION_ITEM */, mobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_periodic /* IMPORTED_LONG_ENUMERATION_ITEM */, periodic /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_sNPNOnboarding /* IMPORTED_LONG_ENUMERATION_ITEM */, sNPNOnboarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_disasterMobility /* IMPORTED_LONG_ENUMERATION_ITEM */, disasterMobility /* IMPORTED_SHORT_ENUMERATION_ITEM */, AMFRegistrationType_disasterInitial /* IMPORTED_LONG_ENUMERATION_ITEM */, disasterInitial /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AMFRegistrationType, _encode_AMFRegistrationType } from "../TS33128Payloads/AMFRegistrationType.ta.mjs";
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
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { SMSOverNASIndicator, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator, _enum_for_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
// export { SMSOverNASIndicator, _enum_for_SMSOverNASIndicator, SMSOverNASIndicator_sMSOverNASNotAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASNotAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMSOverNASIndicator_sMSOverNASAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, sMSOverNASAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMSOverNASIndicator, _encode_SMSOverNASIndicator } from "../TS33128Payloads/SMSOverNASIndicator.ta.mjs";
import { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
// export { EPS5GGUTI, _decode_EPS5GGUTI, _encode_EPS5GGUTI } from "../TS33128Payloads/EPS5GGUTI.ta.mjs";
import { EMM5GMMStatus, _decode_EMM5GMMStatus, _encode_EMM5GMMStatus } from "../TS33128Payloads/EMM5GMMStatus.ta.mjs";
// export { EMM5GMMStatus, _decode_EMM5GMMStatus, _encode_EMM5GMMStatus } from "../TS33128Payloads/EMM5GMMStatus.ta.mjs";
import { SORTransparentContainer, _decode_SORTransparentContainer, _encode_SORTransparentContainer } from "../TS33128Payloads/SORTransparentContainer.ta.mjs";
// export { SORTransparentContainer, _decode_SORTransparentContainer, _encode_SORTransparentContainer } from "../TS33128Payloads/SORTransparentContainer.ta.mjs";
import { UEPolicy, _decode_UEPolicy, _encode_UEPolicy } from "../TS33128Payloads/UEPolicy.ta.mjs";
// export { UEPolicy, _decode_UEPolicy, _encode_UEPolicy } from "../TS33128Payloads/UEPolicy.ta.mjs";
import { UnavailabilityPeriodDuration, _decode_UnavailabilityPeriodDuration, _encode_UnavailabilityPeriodDuration } from "../TS33128Payloads/UnavailabilityPeriodDuration.ta.mjs";
// export { UnavailabilityPeriodDuration, _decode_UnavailabilityPeriodDuration, _encode_UnavailabilityPeriodDuration } from "../TS33128Payloads/UnavailabilityPeriodDuration.ta.mjs";
import { FiveGSUpdateType, _decode_FiveGSUpdateType, _encode_FiveGSUpdateType } from "../TS33128Payloads/FiveGSUpdateType.ta.mjs";
// export { FiveGSUpdateType, _decode_FiveGSUpdateType, _encode_FiveGSUpdateType } from "../TS33128Payloads/FiveGSUpdateType.ta.mjs";
import { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
// export { UEAreaIndication, _decode_UEAreaIndication, _encode_UEAreaIndication } from "../TS33128Payloads/UEAreaIndication.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFStartOfInterceptionWithRegisteredUE ::= SEQUENCE
 * {
 *     registrationResult            [1] AMFRegistrationResult,
 *     registrationType              [2] AMFRegistrationType OPTIONAL,
 *     slice                         [3] Slice OPTIONAL,
 *     sUPI                          [4] SUPI,
 *     sUCI                          [5] SUCI OPTIONAL,
 *     pEI                           [6] PEI OPTIONAL,
 *     gPSI                          [7] GPSI OPTIONAL,
 *     gUTI                          [8] FiveGGUTI,
 *     location                      [9] Location OPTIONAL,
 *     non3GPPAccessEndpoint         [10] UEEndpointAddress OPTIONAL,
 *     timeOfRegistration            [11] Timestamp OPTIONAL,
 *     fiveGSTAIList                 [12] TAIList OPTIONAL,
 *     sMSOverNASIndicator           [13] SMSOverNASIndicator OPTIONAL,
 *     oldGUTI                       [14] EPS5GGUTI OPTIONAL,
 *     eMM5GRegStatus                [15] EMM5GMMStatus OPTIONAL,
 *     sORTransparentContainer       [16] SORTransparentContainer OPTIONAL,
 *     uEPolicy                      [17] UEPolicy OPTIONAL,
 *     unavailabilityPeriodDuration  [18] UnavailabilityPeriodDuration OPTIONAL,
 *     fiveGSUpdateType              [19] FiveGSUpdateType OPTIONAL,
 *     uEAreaIndication              [20] UEAreaIndication OPTIONAL,
 *     additionalUserIdentifiers     [21] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFStartOfInterceptionWithRegisteredUE {
    constructor (
        /**
         * @summary `registrationResult`.
         * @public
         * @readonly
         */
        readonly registrationResult: AMFRegistrationResult,
        /**
         * @summary `registrationType`.
         * @public
         * @readonly
         */
        readonly registrationType: OPTIONAL<AMFRegistrationType>,
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
         * @summary `timeOfRegistration`.
         * @public
         * @readonly
         */
        readonly timeOfRegistration: OPTIONAL<Timestamp>,
        /**
         * @summary `fiveGSTAIList`.
         * @public
         * @readonly
         */
        readonly fiveGSTAIList: OPTIONAL<TAIList>,
        /**
         * @summary `sMSOverNASIndicator`.
         * @public
         * @readonly
         */
        readonly sMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>,
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
         * @summary `sORTransparentContainer`.
         * @public
         * @readonly
         */
        readonly sORTransparentContainer: OPTIONAL<SORTransparentContainer>,
        /**
         * @summary `uEPolicy`.
         * @public
         * @readonly
         */
        readonly uEPolicy: OPTIONAL<UEPolicy>,
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
         * @summary `additionalUserIdentifiers`.
         * @public
         * @readonly
         */
        readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>
    ) {}

    /**
     * @summary Restructures an object into a AMFStartOfInterceptionWithRegisteredUE
     * @description
     * 
     * This takes an `object` and converts it to a `AMFStartOfInterceptionWithRegisteredUE`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFStartOfInterceptionWithRegisteredUE`.
     * @returns {AMFStartOfInterceptionWithRegisteredUE}
     */
    public static _from_object (_o: { [_K in keyof (AMFStartOfInterceptionWithRegisteredUE)]: (AMFStartOfInterceptionWithRegisteredUE)[_K] }): AMFStartOfInterceptionWithRegisteredUE {
        return new AMFStartOfInterceptionWithRegisteredUE(_o.registrationResult, _o.registrationType, _o.slice, _o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.non3GPPAccessEndpoint, _o.timeOfRegistration, _o.fiveGSTAIList, _o.sMSOverNASIndicator, _o.oldGUTI, _o.eMM5GRegStatus, _o.sORTransparentContainer, _o.uEPolicy, _o.unavailabilityPeriodDuration, _o.fiveGSUpdateType, _o.uEAreaIndication, _o.additionalUserIdentifiers);
    }

        /**
         * @summary The enum used as the type of the component `registrationResult`
         * @public
         * @static
         */

    public static _enum_for_registrationResult = _enum_for_AMFRegistrationResult;        /**
         * @summary The enum used as the type of the component `registrationType`
         * @public
         * @static
         */

    public static _enum_for_registrationType = _enum_for_AMFRegistrationType;        /**
         * @summary The enum used as the type of the component `sMSOverNASIndicator`
         * @public
         * @static
         */

    public static _enum_for_sMSOverNASIndicator = _enum_for_SMSOverNASIndicator;
}

/**
 * @summary The Leading Root Component Types of AMFStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFStartOfInterceptionWithRegisteredUE: $.ComponentSpec[] = [
    new $.ComponentSpec("registrationResult", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("registrationType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("slice", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("non3GPPAccessEndpoint", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("timeOfRegistration", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("fiveGSTAIList", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("sMSOverNASIndicator", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("oldGUTI", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("eMM5GRegStatus", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("sORTransparentContainer", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("uEPolicy", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("unavailabilityPeriodDuration", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("fiveGSUpdateType", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("uEAreaIndication", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 21))
];

/**
 * @summary The Trailing Root Component Types of AMFStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFStartOfInterceptionWithRegisteredUE: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFStartOfInterceptionWithRegisteredUE
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFStartOfInterceptionWithRegisteredUE: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFStartOfInterceptionWithRegisteredUE: $.ASN1Decoder<AMFStartOfInterceptionWithRegisteredUE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFStartOfInterceptionWithRegisteredUE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFStartOfInterceptionWithRegisteredUE (el: _Element): AMFStartOfInterceptionWithRegisteredUE {
    if (!_cached_decoder_for_AMFStartOfInterceptionWithRegisteredUE) { _cached_decoder_for_AMFStartOfInterceptionWithRegisteredUE = function (el: _Element): AMFStartOfInterceptionWithRegisteredUE {
    let registrationResult!: AMFRegistrationResult;
    let registrationType: OPTIONAL<AMFRegistrationType>;
    let slice: OPTIONAL<Slice>;
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI!: FiveGGUTI;
    let location: OPTIONAL<Location>;
    let non3GPPAccessEndpoint: OPTIONAL<UEEndpointAddress>;
    let timeOfRegistration: OPTIONAL<Timestamp>;
    let fiveGSTAIList: OPTIONAL<TAIList>;
    let sMSOverNASIndicator: OPTIONAL<SMSOverNASIndicator>;
    let oldGUTI: OPTIONAL<EPS5GGUTI>;
    let eMM5GRegStatus: OPTIONAL<EMM5GMMStatus>;
    let sORTransparentContainer: OPTIONAL<SORTransparentContainer>;
    let uEPolicy: OPTIONAL<UEPolicy>;
    let unavailabilityPeriodDuration: OPTIONAL<UnavailabilityPeriodDuration>;
    let fiveGSUpdateType: OPTIONAL<FiveGSUpdateType>;
    let uEAreaIndication: OPTIONAL<UEAreaIndication>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const callbacks: $.DecodingMap = {
        "registrationResult": (_el: _Element): void => { registrationResult = $._decode_implicit<AMFRegistrationResult>(() => _decode_AMFRegistrationResult)(_el); },
        "registrationType": (_el: _Element): void => { registrationType = $._decode_implicit<AMFRegistrationType>(() => _decode_AMFRegistrationType)(_el); },
        "slice": (_el: _Element): void => { slice = $._decode_implicit<Slice>(() => _decode_Slice)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "non3GPPAccessEndpoint": (_el: _Element): void => { non3GPPAccessEndpoint = $._decode_explicit<UEEndpointAddress>(() => _decode_UEEndpointAddress)(_el); },
        "timeOfRegistration": (_el: _Element): void => { timeOfRegistration = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "fiveGSTAIList": (_el: _Element): void => { fiveGSTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "sMSOverNASIndicator": (_el: _Element): void => { sMSOverNASIndicator = $._decode_implicit<SMSOverNASIndicator>(() => _decode_SMSOverNASIndicator)(_el); },
        "oldGUTI": (_el: _Element): void => { oldGUTI = $._decode_explicit<EPS5GGUTI>(() => _decode_EPS5GGUTI)(_el); },
        "eMM5GRegStatus": (_el: _Element): void => { eMM5GRegStatus = $._decode_implicit<EMM5GMMStatus>(() => _decode_EMM5GMMStatus)(_el); },
        "sORTransparentContainer": (_el: _Element): void => { sORTransparentContainer = $._decode_implicit<SORTransparentContainer>(() => _decode_SORTransparentContainer)(_el); },
        "uEPolicy": (_el: _Element): void => { uEPolicy = $._decode_implicit<UEPolicy>(() => _decode_UEPolicy)(_el); },
        "unavailabilityPeriodDuration": (_el: _Element): void => { unavailabilityPeriodDuration = $._decode_implicit<UnavailabilityPeriodDuration>(() => _decode_UnavailabilityPeriodDuration)(_el); },
        "fiveGSUpdateType": (_el: _Element): void => { fiveGSUpdateType = $._decode_implicit<FiveGSUpdateType>(() => _decode_FiveGSUpdateType)(_el); },
        "uEAreaIndication": (_el: _Element): void => { uEAreaIndication = $._decode_implicit<UEAreaIndication>(() => _decode_UEAreaIndication)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFStartOfInterceptionWithRegisteredUE,
        _extension_additions_list_spec_for_AMFStartOfInterceptionWithRegisteredUE,
        _root_component_type_list_2_spec_for_AMFStartOfInterceptionWithRegisteredUE,
        undefined,
    );
    return new AMFStartOfInterceptionWithRegisteredUE(
        registrationResult,
        registrationType,
        slice,
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        non3GPPAccessEndpoint,
        timeOfRegistration,
        fiveGSTAIList,
        sMSOverNASIndicator,
        oldGUTI,
        eMM5GRegStatus,
        sORTransparentContainer,
        uEPolicy,
        unavailabilityPeriodDuration,
        fiveGSUpdateType,
        uEAreaIndication,
        additionalUserIdentifiers
    );
}; }
    return _cached_decoder_for_AMFStartOfInterceptionWithRegisteredUE(el);
}

let _cached_encoder_for_AMFStartOfInterceptionWithRegisteredUE: $.ASN1Encoder<AMFStartOfInterceptionWithRegisteredUE> | null = null;

/**
 * @summary Encodes a(n) AMFStartOfInterceptionWithRegisteredUE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFStartOfInterceptionWithRegisteredUE, encoded as an ASN.1 Element.
 */
export
function _encode_AMFStartOfInterceptionWithRegisteredUE (value: AMFStartOfInterceptionWithRegisteredUE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFStartOfInterceptionWithRegisteredUE) { _cached_encoder_for_AMFStartOfInterceptionWithRegisteredUE = function (value: AMFStartOfInterceptionWithRegisteredUE, elGetter: $.ASN1Encoder<AMFStartOfInterceptionWithRegisteredUE>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AMFRegistrationResult, $.BER)(value.registrationResult, $.BER),
            /* IF_ABSENT  */ ((value.registrationType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AMFRegistrationType, $.BER)(value.registrationType, $.BER)),
            /* IF_ABSENT  */ ((value.slice === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_Slice, $.BER)(value.slice, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 4, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.sUCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.non3GPPAccessEndpoint === undefined) ? undefined : $._encode_explicit(_TagClass.context, 10, () => _encode_UEEndpointAddress, $.BER)(value.non3GPPAccessEndpoint, $.BER)),
            /* IF_ABSENT  */ ((value.timeOfRegistration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Timestamp, $.BER)(value.timeOfRegistration, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGSTAIList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_TAIList, $.BER)(value.fiveGSTAIList, $.BER)),
            /* IF_ABSENT  */ ((value.sMSOverNASIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SMSOverNASIndicator, $.BER)(value.sMSOverNASIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.oldGUTI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 14, () => _encode_EPS5GGUTI, $.BER)(value.oldGUTI, $.BER)),
            /* IF_ABSENT  */ ((value.eMM5GRegStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_EMM5GMMStatus, $.BER)(value.eMM5GRegStatus, $.BER)),
            /* IF_ABSENT  */ ((value.sORTransparentContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_SORTransparentContainer, $.BER)(value.sORTransparentContainer, $.BER)),
            /* IF_ABSENT  */ ((value.uEPolicy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_UEPolicy, $.BER)(value.uEPolicy, $.BER)),
            /* IF_ABSENT  */ ((value.unavailabilityPeriodDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_UnavailabilityPeriodDuration, $.BER)(value.unavailabilityPeriodDuration, $.BER)),
            /* IF_ABSENT  */ ((value.fiveGSUpdateType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_FiveGSUpdateType, $.BER)(value.fiveGSUpdateType, $.BER)),
            /* IF_ABSENT  */ ((value.uEAreaIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_UEAreaIndication, $.BER)(value.uEAreaIndication, $.BER)),
            /* IF_ABSENT  */ ((value.additionalUserIdentifiers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFStartOfInterceptionWithRegisteredUE(value, elGetter);
}


/* eslint-enable */
