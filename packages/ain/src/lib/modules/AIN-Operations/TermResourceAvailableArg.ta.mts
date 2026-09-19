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
import { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
// export { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
// export { Lata, _decode_Lata, _encode_Lata } from "../AIN-Parameters/Lata.ta.mjs";
import { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
// export { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../AIN-Parameters/OriginalCalledPartyID.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
import { CalledPartyStationType, _decode_CalledPartyStationType, _encode_CalledPartyStationType } from "../AIN-Parameters/CalledPartyStationType.ta.mjs";
// export { CalledPartyStationType, _decode_CalledPartyStationType, _encode_CalledPartyStationType } from "../AIN-Parameters/CalledPartyStationType.ta.mjs";
import { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
// export { Sap, _decode_Sap, _encode_Sap } from "../AIN-Parameters/Sap.ta.mjs";
import { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
import { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
// export { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
import { STRConnection, _decode_STRConnection, _encode_STRConnection } from "../AIN-Parameters/STRConnection.ta.mjs";
// export { STRConnection, _decode_STRConnection, _encode_STRConnection } from "../AIN-Parameters/STRConnection.ta.mjs";
import { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
// export { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
import { CTRConnection, _decode_CTRConnection, _encode_CTRConnection } from "../AIN-Parameters/CTRConnection.ta.mjs";
// export { CTRConnection, _decode_CTRConnection, _encode_CTRConnection } from "../AIN-Parameters/CTRConnection.ta.mjs";
import { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";
// export { TriggerInformation, _decode_TriggerInformation, _encode_TriggerInformation } from "../AIN-Parameters/TriggerInformation.ta.mjs";


/**
 * @summary TermResourceAvailableArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermResourceAvailableArg ::= SEQUENCE{
 *             userID                         UserID,
 *             bearerCapability               BearerCapability,
 *             notificationIndicator          [111] IMPLICIT NotificationIndicator OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             calledPartyID                  CalledPartyID  OPTIONAL,
 *             lata                           Lata OPTIONAL,
 *             triggerCriteriaType            TriggerCriteriaType OPTIONAL,
 *             chargeNumber                   ChargeNumber OPTIONAL,
 *             callingPartyID                 CallingPartyID OPTIONAL,
 *             chargePartyStationType         ChargePartyStationType OPTIONAL,
 *             originalCalledPartyID          OriginalCalledPartyID OPTIONAL,
 *             redirectingPartyID             RedirectingPartyID OPTIONAL,
 *             redirectionInformation         RedirectionInformation  OPTIONAL,
 *             calledPartyStationType         CalledPartyStationType OPTIONAL,
 *             sap                            Sap OPTIONAL,
 *             genericName                    GenericName OPTIONAL,
 *             aCGEncountered                 ACGEncountered OPTIONAL,
 *             sTRConnection                  STRConnection OPTIONAL,
 *             aMASequenceNumber              AMASequenceNumber OPTIONAL,
 *             cTRConnection                  CTRConnection OPTIONAL,
 *             triggerInformation             TriggerInformation OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class TermResourceAvailableArg {
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
         * @summary `notificationIndicator`.
         * @public
         * @readonly
         */
        readonly notificationIndicator: OPTIONAL<NotificationIndicator>,
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
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
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
         * @summary `calledPartyStationType`.
         * @public
         * @readonly
         */
        readonly calledPartyStationType: OPTIONAL<CalledPartyStationType>,
        /**
         * @summary `sap`.
         * @public
         * @readonly
         */
        readonly sap: OPTIONAL<Sap>,
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
         * @summary `cTRConnection`.
         * @public
         * @readonly
         */
        readonly cTRConnection: OPTIONAL<CTRConnection>,
        /**
         * @summary `triggerInformation`.
         * @public
         * @readonly
         */
        readonly triggerInformation: OPTIONAL<TriggerInformation>
    ) {}

    /**
     * @summary Restructures an object into a TermResourceAvailableArg
     * @description
     * 
     * This takes an `object` and converts it to a `TermResourceAvailableArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermResourceAvailableArg`.
     * @returns {TermResourceAvailableArg}
     */
    public static _from_object (_o: { [_K in keyof (TermResourceAvailableArg)]: (TermResourceAvailableArg)[_K] }): TermResourceAvailableArg {
        return new TermResourceAvailableArg(_o.userID, _o.bearerCapability, _o.notificationIndicator, _o.amp1, _o.amp2, _o.extensionParameter, _o.calledPartyID, _o.lata, _o.triggerCriteriaType, _o.chargeNumber, _o.callingPartyID, _o.chargePartyStationType, _o.originalCalledPartyID, _o.redirectingPartyID, _o.redirectionInformation, _o.calledPartyStationType, _o.sap, _o.genericName, _o.aCGEncountered, _o.sTRConnection, _o.aMASequenceNumber, _o.cTRConnection, _o.triggerInformation);
    }


}

/**
 * @summary The Leading Root Component Types of TermResourceAvailableArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermResourceAvailableArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("notificationIndicator", true, $.hasTag(_TagClass.context, 111)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("calledPartyID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("lata", true, $.hasTag(_TagClass.context, 35)),
    new $.ComponentSpec("triggerCriteriaType", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("callingPartyID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargePartyStationType", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 36)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("calledPartyStationType", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("sap", true, $.hasTag(_TagClass.context, 81)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 33)),
    new $.ComponentSpec("aCGEncountered", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sTRConnection", true, $.hasTag(_TagClass.context, 96)),
    new $.ComponentSpec("aMASequenceNumber", true, $.hasTag(_TagClass.context, 89)),
    new $.ComponentSpec("cTRConnection", true, $.hasTag(_TagClass.context, 141)),
    new $.ComponentSpec("triggerInformation", true, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of TermResourceAvailableArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermResourceAvailableArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermResourceAvailableArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermResourceAvailableArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermResourceAvailableArg: $.ASN1Decoder<TermResourceAvailableArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermResourceAvailableArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermResourceAvailableArg (el: _Element): TermResourceAvailableArg {
    if (!_cached_decoder_for_TermResourceAvailableArg) { _cached_decoder_for_TermResourceAvailableArg = function (el: _Element): TermResourceAvailableArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let notificationIndicator: OPTIONAL<NotificationIndicator>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let calledPartyID: OPTIONAL<CalledPartyID>;
    let lata: OPTIONAL<Lata>;
    let triggerCriteriaType: OPTIONAL<TriggerCriteriaType>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let callingPartyID: OPTIONAL<CallingPartyID>;
    let chargePartyStationType: OPTIONAL<ChargePartyStationType>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let calledPartyStationType: OPTIONAL<CalledPartyStationType>;
    let sap: OPTIONAL<Sap>;
    let genericName: OPTIONAL<GenericName>;
    let aCGEncountered: OPTIONAL<ACGEncountered>;
    let sTRConnection: OPTIONAL<STRConnection>;
    let aMASequenceNumber: OPTIONAL<AMASequenceNumber>;
    let cTRConnection: OPTIONAL<CTRConnection>;
    let triggerInformation: OPTIONAL<TriggerInformation>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "notificationIndicator": (_el: _Element): void => { notificationIndicator = $._decode_implicit<NotificationIndicator>(() => _decode_NotificationIndicator)(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); },
        "lata": (_el: _Element): void => { lata = _decode_Lata(_el); },
        "triggerCriteriaType": (_el: _Element): void => { triggerCriteriaType = _decode_TriggerCriteriaType(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = _decode_ChargeNumber(_el); },
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "chargePartyStationType": (_el: _Element): void => { chargePartyStationType = _decode_ChargePartyStationType(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = _decode_OriginalCalledPartyID(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = _decode_RedirectingPartyID(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = _decode_RedirectionInformation(_el); },
        "calledPartyStationType": (_el: _Element): void => { calledPartyStationType = _decode_CalledPartyStationType(_el); },
        "sap": (_el: _Element): void => { sap = _decode_Sap(_el); },
        "genericName": (_el: _Element): void => { genericName = _decode_GenericName(_el); },
        "aCGEncountered": (_el: _Element): void => { aCGEncountered = _decode_ACGEncountered(_el); },
        "sTRConnection": (_el: _Element): void => { sTRConnection = _decode_STRConnection(_el); },
        "aMASequenceNumber": (_el: _Element): void => { aMASequenceNumber = _decode_AMASequenceNumber(_el); },
        "cTRConnection": (_el: _Element): void => { cTRConnection = _decode_CTRConnection(_el); },
        "triggerInformation": (_el: _Element): void => { triggerInformation = _decode_TriggerInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermResourceAvailableArg,
        _extension_additions_list_spec_for_TermResourceAvailableArg,
        _root_component_type_list_2_spec_for_TermResourceAvailableArg,
        undefined,
    );
    return new TermResourceAvailableArg(
        userID,
        bearerCapability,
        notificationIndicator,
        amp1,
        amp2,
        extensionParameter,
        calledPartyID,
        lata,
        triggerCriteriaType,
        chargeNumber,
        callingPartyID,
        chargePartyStationType,
        originalCalledPartyID,
        redirectingPartyID,
        redirectionInformation,
        calledPartyStationType,
        sap,
        genericName,
        aCGEncountered,
        sTRConnection,
        aMASequenceNumber,
        cTRConnection,
        triggerInformation
    );
}; }
    return _cached_decoder_for_TermResourceAvailableArg(el);
}

let _cached_encoder_for_TermResourceAvailableArg: $.ASN1Encoder<TermResourceAvailableArg> | null = null;

/**
 * @summary Encodes a(n) TermResourceAvailableArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermResourceAvailableArg, encoded as an ASN.1 Element.
 */
export
function _encode_TermResourceAvailableArg (value: TermResourceAvailableArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermResourceAvailableArg) { _cached_encoder_for_TermResourceAvailableArg = function (value: TermResourceAvailableArg, elGetter: $.ASN1Encoder<TermResourceAvailableArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.notificationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 111, () => _encode_NotificationIndicator, $.BER)(value.notificationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyID === undefined) ? undefined : _encode_CalledPartyID(value.calledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.lata === undefined) ? undefined : _encode_Lata(value.lata, $.BER)),
            /* IF_ABSENT  */ ((value.triggerCriteriaType === undefined) ? undefined : _encode_TriggerCriteriaType(value.triggerCriteriaType, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : _encode_ChargeNumber(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyID === undefined) ? undefined : _encode_CallingPartyID(value.callingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.chargePartyStationType === undefined) ? undefined : _encode_ChargePartyStationType(value.chargePartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : _encode_OriginalCalledPartyID(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : _encode_RedirectingPartyID(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : _encode_RedirectionInformation(value.redirectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyStationType === undefined) ? undefined : _encode_CalledPartyStationType(value.calledPartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.sap === undefined) ? undefined : _encode_Sap(value.sap, $.BER)),
            /* IF_ABSENT  */ ((value.genericName === undefined) ? undefined : _encode_GenericName(value.genericName, $.BER)),
            /* IF_ABSENT  */ ((value.aCGEncountered === undefined) ? undefined : _encode_ACGEncountered(value.aCGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.sTRConnection === undefined) ? undefined : _encode_STRConnection(value.sTRConnection, $.BER)),
            /* IF_ABSENT  */ ((value.aMASequenceNumber === undefined) ? undefined : _encode_AMASequenceNumber(value.aMASequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.cTRConnection === undefined) ? undefined : _encode_CTRConnection(value.cTRConnection, $.BER)),
            /* IF_ABSENT  */ ((value.triggerInformation === undefined) ? undefined : _encode_TriggerInformation(value.triggerInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TermResourceAvailableArg(value, elGetter);
}


/* eslint-enable */
