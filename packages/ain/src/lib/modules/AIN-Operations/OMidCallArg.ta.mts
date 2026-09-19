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
import { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
// export { TriggerCriteriaType, _decode_TriggerCriteriaType, _encode_TriggerCriteriaType } from "../AIN-Parameters/TriggerCriteriaType.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
// export { PointInCall, _decode_PointInCall, _encode_PointInCall } from "../AIN-Parameters/PointInCall.ta.mjs";
import { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
// export { CcID, _decode_CcID, _encode_CcID } from "../AIN-Parameters/CcID.ta.mjs";
import { FeatureActivatorID, _decode_FeatureActivatorID, _encode_FeatureActivatorID } from "../AIN-Parameters/FeatureActivatorID.ta.mjs";
// export { FeatureActivatorID, _decode_FeatureActivatorID, _encode_FeatureActivatorID } from "../AIN-Parameters/FeatureActivatorID.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { CallingPartyBGID, _decode_CallingPartyBGID, _encode_CallingPartyBGID } from "../AIN-Parameters/CallingPartyBGID.ta.mjs";
// export { CallingPartyBGID, _decode_CallingPartyBGID, _encode_CallingPartyBGID } from "../AIN-Parameters/CallingPartyBGID.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
// export { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
import { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
// export { CollectedAddressInfo, _decode_CollectedAddressInfo, _encode_CollectedAddressInfo } from "../AIN-Parameters/CollectedAddressInfo.ta.mjs";
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
// export { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
import { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
// export { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
import { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
// export { ACGEncountered, _decode_ACGEncountered, _encode_ACGEncountered } from "../AIN-Parameters/ACGEncountered.ta.mjs";
import { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
// export { NotificationIndicator, _decode_NotificationIndicator, _encode_NotificationIndicator } from "../AIN-Parameters/NotificationIndicator.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary OMidCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OMidCallArg ::= SEQUENCE{
 *             userID                         UserID,
 *             bearerCapability               BearerCapability,
 *             triggerCriteriaType            TriggerCriteriaType OPTIONAL,
 *             legID                          LegID OPTIONAL,
 *             pointInCall                    PointInCall OPTIONAL,
 *             ccID                           CcID OPTIONAL,
 *             featureActivatorID             FeatureActivatorID OPTIONAL,
 *             chargeNumber                   ChargeNumber OPTIONAL,
 *             callingPartyID                 CallingPartyID OPTIONAL,
 *             callingPartyBGID               CallingPartyBGID OPTIONAL,
 *             chargePartyStationType         ChargePartyStationType OPTIONAL,
 *             carrier                        Carrier OPTIONAL,
 *             accessCode                     AccessCode OPTIONAL,
 *             collectedAddressInfo           CollectedAddressInfo OPTIONAL,
 *             collectedDigits                CollectedDigits OPTIONAL,
 *             verticalServiceCode            VerticalServiceCode OPTIONAL,
 *             aCGEncountered                 ACGEncountered OPTIONAL,
 *             notificationIndicator          [111] IMPLICIT NotificationIndicator OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class OMidCallArg {
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
         * @summary `triggerCriteriaType`.
         * @public
         * @readonly
         */
        readonly triggerCriteriaType: OPTIONAL<TriggerCriteriaType>,
        /**
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `pointInCall`.
         * @public
         * @readonly
         */
        readonly pointInCall: OPTIONAL<PointInCall>,
        /**
         * @summary `ccID`.
         * @public
         * @readonly
         */
        readonly ccID: OPTIONAL<CcID>,
        /**
         * @summary `featureActivatorID`.
         * @public
         * @readonly
         */
        readonly featureActivatorID: OPTIONAL<FeatureActivatorID>,
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
         * @summary `callingPartyBGID`.
         * @public
         * @readonly
         */
        readonly callingPartyBGID: OPTIONAL<CallingPartyBGID>,
        /**
         * @summary `chargePartyStationType`.
         * @public
         * @readonly
         */
        readonly chargePartyStationType: OPTIONAL<ChargePartyStationType>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
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
         * @summary `aCGEncountered`.
         * @public
         * @readonly
         */
        readonly aCGEncountered: OPTIONAL<ACGEncountered>,
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
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a OMidCallArg
     * @description
     * 
     * This takes an `object` and converts it to a `OMidCallArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OMidCallArg`.
     * @returns {OMidCallArg}
     */
    public static _from_object (_o: { [_K in keyof (OMidCallArg)]: (OMidCallArg)[_K] }): OMidCallArg {
        return new OMidCallArg(_o.userID, _o.bearerCapability, _o.triggerCriteriaType, _o.legID, _o.pointInCall, _o.ccID, _o.featureActivatorID, _o.chargeNumber, _o.callingPartyID, _o.callingPartyBGID, _o.chargePartyStationType, _o.carrier, _o.accessCode, _o.collectedAddressInfo, _o.collectedDigits, _o.verticalServiceCode, _o.aCGEncountered, _o.notificationIndicator, _o.amp1, _o.amp2, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of OMidCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OMidCallArg: $.ComponentSpec[] = [
    new $.ComponentSpec("userID", false, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("triggerCriteriaType", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("pointInCall", true, $.hasTag(_TagClass.context, 135)),
    new $.ComponentSpec("ccID", true, $.hasTag(_TagClass.context, 133)),
    new $.ComponentSpec("featureActivatorID", true, $.hasTag(_TagClass.context, 136)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("callingPartyID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("callingPartyBGID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("chargePartyStationType", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("accessCode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("collectedAddressInfo", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("collectedDigits", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("verticalServiceCode", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("aCGEncountered", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("notificationIndicator", true, $.hasTag(_TagClass.context, 111)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of OMidCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OMidCallArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OMidCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OMidCallArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OMidCallArg: $.ASN1Decoder<OMidCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OMidCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OMidCallArg (el: _Element): OMidCallArg {
    if (!_cached_decoder_for_OMidCallArg) { _cached_decoder_for_OMidCallArg = function (el: _Element): OMidCallArg {
    let userID!: UserID;
    let bearerCapability!: BearerCapability;
    let triggerCriteriaType: OPTIONAL<TriggerCriteriaType>;
    let legID: OPTIONAL<LegID>;
    let pointInCall: OPTIONAL<PointInCall>;
    let ccID: OPTIONAL<CcID>;
    let featureActivatorID: OPTIONAL<FeatureActivatorID>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let callingPartyID: OPTIONAL<CallingPartyID>;
    let callingPartyBGID: OPTIONAL<CallingPartyBGID>;
    let chargePartyStationType: OPTIONAL<ChargePartyStationType>;
    let carrier: OPTIONAL<Carrier>;
    let accessCode: OPTIONAL<AccessCode>;
    let collectedAddressInfo: OPTIONAL<CollectedAddressInfo>;
    let collectedDigits: OPTIONAL<CollectedDigits>;
    let verticalServiceCode: OPTIONAL<VerticalServiceCode>;
    let aCGEncountered: OPTIONAL<ACGEncountered>;
    let notificationIndicator: OPTIONAL<NotificationIndicator>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "triggerCriteriaType": (_el: _Element): void => { triggerCriteriaType = _decode_TriggerCriteriaType(_el); },
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "pointInCall": (_el: _Element): void => { pointInCall = _decode_PointInCall(_el); },
        "ccID": (_el: _Element): void => { ccID = _decode_CcID(_el); },
        "featureActivatorID": (_el: _Element): void => { featureActivatorID = _decode_FeatureActivatorID(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = _decode_ChargeNumber(_el); },
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "callingPartyBGID": (_el: _Element): void => { callingPartyBGID = _decode_CallingPartyBGID(_el); },
        "chargePartyStationType": (_el: _Element): void => { chargePartyStationType = _decode_ChargePartyStationType(_el); },
        "carrier": (_el: _Element): void => { carrier = _decode_Carrier(_el); },
        "accessCode": (_el: _Element): void => { accessCode = _decode_AccessCode(_el); },
        "collectedAddressInfo": (_el: _Element): void => { collectedAddressInfo = _decode_CollectedAddressInfo(_el); },
        "collectedDigits": (_el: _Element): void => { collectedDigits = _decode_CollectedDigits(_el); },
        "verticalServiceCode": (_el: _Element): void => { verticalServiceCode = _decode_VerticalServiceCode(_el); },
        "aCGEncountered": (_el: _Element): void => { aCGEncountered = _decode_ACGEncountered(_el); },
        "notificationIndicator": (_el: _Element): void => { notificationIndicator = $._decode_implicit<NotificationIndicator>(() => _decode_NotificationIndicator)(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OMidCallArg,
        _extension_additions_list_spec_for_OMidCallArg,
        _root_component_type_list_2_spec_for_OMidCallArg,
        undefined,
    );
    return new OMidCallArg(
        userID,
        bearerCapability,
        triggerCriteriaType,
        legID,
        pointInCall,
        ccID,
        featureActivatorID,
        chargeNumber,
        callingPartyID,
        callingPartyBGID,
        chargePartyStationType,
        carrier,
        accessCode,
        collectedAddressInfo,
        collectedDigits,
        verticalServiceCode,
        aCGEncountered,
        notificationIndicator,
        amp1,
        amp2,
        extensionParameter
    );
}; }
    return _cached_decoder_for_OMidCallArg(el);
}

let _cached_encoder_for_OMidCallArg: $.ASN1Encoder<OMidCallArg> | null = null;

/**
 * @summary Encodes a(n) OMidCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OMidCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_OMidCallArg (value: OMidCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OMidCallArg) { _cached_encoder_for_OMidCallArg = function (value: OMidCallArg, elGetter: $.ASN1Encoder<OMidCallArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_UserID(value.userID, $.BER),
            /* REQUIRED   */ _encode_BearerCapability(value.bearerCapability, $.BER),
            /* IF_ABSENT  */ ((value.triggerCriteriaType === undefined) ? undefined : _encode_TriggerCriteriaType(value.triggerCriteriaType, $.BER)),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : _encode_LegID(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.pointInCall === undefined) ? undefined : _encode_PointInCall(value.pointInCall, $.BER)),
            /* IF_ABSENT  */ ((value.ccID === undefined) ? undefined : _encode_CcID(value.ccID, $.BER)),
            /* IF_ABSENT  */ ((value.featureActivatorID === undefined) ? undefined : _encode_FeatureActivatorID(value.featureActivatorID, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : _encode_ChargeNumber(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyID === undefined) ? undefined : _encode_CallingPartyID(value.callingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyBGID === undefined) ? undefined : _encode_CallingPartyBGID(value.callingPartyBGID, $.BER)),
            /* IF_ABSENT  */ ((value.chargePartyStationType === undefined) ? undefined : _encode_ChargePartyStationType(value.chargePartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : _encode_Carrier(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.accessCode === undefined) ? undefined : _encode_AccessCode(value.accessCode, $.BER)),
            /* IF_ABSENT  */ ((value.collectedAddressInfo === undefined) ? undefined : _encode_CollectedAddressInfo(value.collectedAddressInfo, $.BER)),
            /* IF_ABSENT  */ ((value.collectedDigits === undefined) ? undefined : _encode_CollectedDigits(value.collectedDigits, $.BER)),
            /* IF_ABSENT  */ ((value.verticalServiceCode === undefined) ? undefined : _encode_VerticalServiceCode(value.verticalServiceCode, $.BER)),
            /* IF_ABSENT  */ ((value.aCGEncountered === undefined) ? undefined : _encode_ACGEncountered(value.aCGEncountered, $.BER)),
            /* IF_ABSENT  */ ((value.notificationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 111, () => _encode_NotificationIndicator, $.BER)(value.notificationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OMidCallArg(value, elGetter);
}


/* eslint-enable */
