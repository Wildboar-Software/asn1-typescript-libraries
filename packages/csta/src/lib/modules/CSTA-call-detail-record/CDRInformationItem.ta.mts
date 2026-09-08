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
import { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
// export { TimeInfo, _decode_TimeInfo, _encode_TimeInfo } from "../CSTA-security/TimeInfo.ta.mjs";
import { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";
// export { CallingDeviceID, _decode_CallingDeviceID, _encode_CallingDeviceID } from "../CSTA-device-identifiers/CallingDeviceID.ta.mjs";
import { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";
// export { CalledDeviceID, _decode_CalledDeviceID, _encode_CalledDeviceID } from "../CSTA-device-identifiers/CalledDeviceID.ta.mjs";
import { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";
// export { AssociatedCallingDeviceID, _decode_AssociatedCallingDeviceID, _encode_AssociatedCallingDeviceID } from "../CSTA-device-identifiers/AssociatedCallingDeviceID.ta.mjs";
import { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";
// export { AssociatedCalledDeviceID, _decode_AssociatedCalledDeviceID, _encode_AssociatedCalledDeviceID } from "../CSTA-device-identifiers/AssociatedCalledDeviceID.ta.mjs";
import { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";
// export { NetworkCallingDeviceID, _decode_NetworkCallingDeviceID, _encode_NetworkCallingDeviceID } from "../CSTA-device-identifiers/NetworkCallingDeviceID.ta.mjs";
import { NetworkCalledDeviceID, _decode_NetworkCalledDeviceID, _encode_NetworkCalledDeviceID } from "../CSTA-device-identifiers/NetworkCalledDeviceID.ta.mjs";
// export { NetworkCalledDeviceID, _decode_NetworkCalledDeviceID, _encode_NetworkCalledDeviceID } from "../CSTA-device-identifiers/NetworkCalledDeviceID.ta.mjs";
import { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
// export { CallCharacteristics, CallCharacteristics_acdCall /* IMPORTED_LONG_NAMED_BIT */, acdCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_lowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, lowPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_priorityCall /* IMPORTED_LONG_NAMED_BIT */, priorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_highPriorityCall /* IMPORTED_LONG_NAMED_BIT */, highPriorityCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_maintainanceCall /* IMPORTED_LONG_NAMED_BIT */, maintainanceCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_directAgent /* IMPORTED_LONG_NAMED_BIT */, directAgent /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_assistCall /* IMPORTED_LONG_NAMED_BIT */, assistCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_voiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, voiceUnitCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_privateCall /* IMPORTED_LONG_NAMED_BIT */, privateCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_personalCall /* IMPORTED_LONG_NAMED_BIT */, personalCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_sensitiveCall /* IMPORTED_LONG_NAMED_BIT */, sensitiveCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_confidentialCall /* IMPORTED_LONG_NAMED_BIT */, confidentialCall /* IMPORTED_SHORT_NAMED_BIT */, CallCharacteristics_encryptedCall /* IMPORTED_LONG_NAMED_BIT */, encryptedCall /* IMPORTED_SHORT_NAMED_BIT */, _decode_CallCharacteristics, _encode_CallCharacteristics } from "../CSTA-call-control/CallCharacteristics.ta.mjs";
import { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
// export { MediaCallCharacteristics, _decode_MediaCallCharacteristics, _encode_MediaCallCharacteristics } from "../CSTA-media-services/MediaCallCharacteristics.ta.mjs";
import { ChargedDevice, _decode_ChargedDevice, _encode_ChargedDevice } from "../CSTA-call-detail-record/ChargedDevice.ta.mjs";
// export { ChargedDevice, _decode_ChargedDevice, _encode_ChargedDevice } from "../CSTA-call-detail-record/ChargedDevice.ta.mjs";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
// export { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";
import { NodeNumber, _decode_NodeNumber, _encode_NodeNumber } from "../CSTA-call-detail-record/NodeNumber.ta.mjs";
// export { NodeNumber, _decode_NodeNumber, _encode_NodeNumber } from "../CSTA-call-detail-record/NodeNumber.ta.mjs";
import { BillingID, _enum_for_BillingID, BillingID_normalCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, normalCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_reverseCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, reverseCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_creditCardCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, creditCardCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_callForwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, BillingID_callDeflection /* IMPORTED_LONG_ENUMERATION_ITEM */, callDeflection /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_callTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, callTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_BillingID, _encode_BillingID } from "../CSTA-call-detail-record/BillingID.ta.mjs";
// export { BillingID, _enum_for_BillingID, BillingID_normalCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, normalCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_reverseCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, reverseCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_creditCardCharging /* IMPORTED_LONG_ENUMERATION_ITEM */, creditCardCharging /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_callForwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, BillingID_callDeflection /* IMPORTED_LONG_ENUMERATION_ITEM */, callDeflection /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_callTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, callTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, BillingID_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_BillingID, _encode_BillingID } from "../CSTA-call-detail-record/BillingID.ta.mjs";
import { ChargingInfo, _decode_ChargingInfo, _encode_ChargingInfo } from "../CSTA-charge-info/ChargingInfo.ta.mjs";
// export { ChargingInfo, _decode_ChargingInfo, _encode_ChargingInfo } from "../CSTA-charge-info/ChargingInfo.ta.mjs";
import { SupplServiceInfo, SupplServiceInfo_normalCall /* IMPORTED_LONG_NAMED_BIT */, normalCall /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_transferCall /* IMPORTED_LONG_NAMED_BIT */, transferCall /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_callCompletion /* IMPORTED_LONG_NAMED_BIT */, callCompletion /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_callForwarding /* IMPORTED_LONG_NAMED_BIT */, SupplServiceInfo_callDiversion /* IMPORTED_LONG_NAMED_BIT */, callDiversion /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_conferencing /* IMPORTED_LONG_NAMED_BIT */, conferencing /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_intrusion /* IMPORTED_LONG_NAMED_BIT */, intrusion /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_userUserInfo /* IMPORTED_LONG_NAMED_BIT */, userUserInfo /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_other /* IMPORTED_LONG_NAMED_BIT */, _decode_SupplServiceInfo, _encode_SupplServiceInfo } from "../CSTA-call-detail-record/SupplServiceInfo.ta.mjs";
// export { SupplServiceInfo, SupplServiceInfo_normalCall /* IMPORTED_LONG_NAMED_BIT */, normalCall /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_consultationCall /* IMPORTED_LONG_NAMED_BIT */, consultationCall /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_transferCall /* IMPORTED_LONG_NAMED_BIT */, transferCall /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_callCompletion /* IMPORTED_LONG_NAMED_BIT */, callCompletion /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_callForwarding /* IMPORTED_LONG_NAMED_BIT */, SupplServiceInfo_callDiversion /* IMPORTED_LONG_NAMED_BIT */, callDiversion /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_conferencing /* IMPORTED_LONG_NAMED_BIT */, conferencing /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_intrusion /* IMPORTED_LONG_NAMED_BIT */, intrusion /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_userUserInfo /* IMPORTED_LONG_NAMED_BIT */, userUserInfo /* IMPORTED_SHORT_NAMED_BIT */, SupplServiceInfo_other /* IMPORTED_LONG_NAMED_BIT */, _decode_SupplServiceInfo, _encode_SupplServiceInfo } from "../CSTA-call-detail-record/SupplServiceInfo.ta.mjs";
import { ReasonForTerm, _enum_for_ReasonForTerm, ReasonForTerm_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_unsuccessfulCallAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, unsuccessfulCallAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_abnormalTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_callTransferred /* IMPORTED_LONG_ENUMERATION_ITEM */, callTransferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ReasonForTerm, _encode_ReasonForTerm } from "../CSTA-call-detail-record/ReasonForTerm.ta.mjs";
// export { ReasonForTerm, _enum_for_ReasonForTerm, ReasonForTerm_normalClearing /* IMPORTED_LONG_ENUMERATION_ITEM */, normalClearing /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_unsuccessfulCallAttempt /* IMPORTED_LONG_ENUMERATION_ITEM */, unsuccessfulCallAttempt /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_abnormalTermination /* IMPORTED_LONG_ENUMERATION_ITEM */, abnormalTermination /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_callTransferred /* IMPORTED_LONG_ENUMERATION_ITEM */, callTransferred /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReasonForTerm_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_ReasonForTerm, _encode_ReasonForTerm } from "../CSTA-call-detail-record/ReasonForTerm.ta.mjs";
import { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";
// export { AuthCode, _decode_AuthCode, _encode_AuthCode } from "../CSTA-device-feature-types/AuthCode.ta.mjs";
import { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";
// export { AccountInfo, _decode_AccountInfo, _encode_AccountInfo } from "../CSTA-device-feature-types/AccountInfo.ta.mjs";
import { DeviceCategory, _enum_for_DeviceCategory, DeviceCategory_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_group /* IMPORTED_LONG_ENUMERATION_ITEM */, group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_networkInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_routeingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, routeingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_station /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_voiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_genericInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, genericInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_listenerInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, listenerInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_dtmfInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptQueueInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptQueueInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_messageInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, messageInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_DeviceCategory, _encode_DeviceCategory } from "../CSTA-capability-exchange/DeviceCategory.ta.mjs";
// export { DeviceCategory, _enum_for_DeviceCategory, DeviceCategory_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_group /* IMPORTED_LONG_ENUMERATION_ITEM */, group /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_networkInterface /* IMPORTED_LONG_ENUMERATION_ITEM */, networkInterface /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_park /* IMPORTED_LONG_ENUMERATION_ITEM */, park /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_routeingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, routeingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_station /* IMPORTED_LONG_ENUMERATION_ITEM */, DeviceCategory_voiceUnit /* IMPORTED_LONG_ENUMERATION_ITEM */, voiceUnit /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_genericInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, genericInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_listenerInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, listenerInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_dtmfInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_promptQueueInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, promptQueueInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_messageInteractiveVoice /* IMPORTED_LONG_ENUMERATION_ITEM */, messageInteractiveVoice /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_conference /* IMPORTED_LONG_ENUMERATION_ITEM */, conference /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceCategory_other /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_DeviceCategory, _encode_DeviceCategory } from "../CSTA-capability-exchange/DeviceCategory.ta.mjs";
import { NamedDeviceTypes, _enum_for_NamedDeviceTypes, NamedDeviceTypes_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_acdGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, acdGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_button /* IMPORTED_LONG_ENUMERATION_ITEM */, button /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_buttonGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, buttonGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_conferenceBridge /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceBridge /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_line /* IMPORTED_LONG_ENUMERATION_ITEM */, line /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_lineGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, lineGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operator /* IMPORTED_LONG_ENUMERATION_ITEM */, operator /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operatorGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_parkingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, parkingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_station /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_stationGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, stationGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunk /* IMPORTED_LONG_ENUMERATION_ITEM */, trunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunkGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, trunkGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_other /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_otherGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, otherGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NamedDeviceTypes, _encode_NamedDeviceTypes } from "../CSTA-capability-exchange/NamedDeviceTypes.ta.mjs";
// export { NamedDeviceTypes, _enum_for_NamedDeviceTypes, NamedDeviceTypes_acd /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_acdGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, acdGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_button /* IMPORTED_LONG_ENUMERATION_ITEM */, button /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_buttonGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, buttonGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_conferenceBridge /* IMPORTED_LONG_ENUMERATION_ITEM */, conferenceBridge /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_line /* IMPORTED_LONG_ENUMERATION_ITEM */, line /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_lineGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, lineGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operator /* IMPORTED_LONG_ENUMERATION_ITEM */, operator /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_operatorGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, operatorGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_parkingDevice /* IMPORTED_LONG_ENUMERATION_ITEM */, parkingDevice /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_station /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_stationGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, stationGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunk /* IMPORTED_LONG_ENUMERATION_ITEM */, trunk /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_trunkGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, trunkGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, NamedDeviceTypes_other /* IMPORTED_LONG_ENUMERATION_ITEM */, NamedDeviceTypes_otherGroup /* IMPORTED_LONG_ENUMERATION_ITEM */, otherGroup /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_NamedDeviceTypes, _encode_NamedDeviceTypes } from "../CSTA-capability-exchange/NamedDeviceTypes.ta.mjs";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";
// export { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";


/**
 * @summary CDRInformationItem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CDRInformationItem ::= SEQUENCE
 * {     recordNumber             INTEGER (1..128)                 OPTIONAL,
 *     recordCreationTime         TimeInfo,
 *     callingDevice             CallingDeviceID                 OPTIONAL,
 *     calledDevice             CalledDeviceID                     OPTIONAL,
 *     associatedCallingDevice     AssociatedCallingDeviceID             OPTIONAL,
 *     associatedCalledDevice         AssociatedCalledDeviceID             OPTIONAL,
 *     networkCallingDevice         NetworkCallingDeviceID                 OPTIONAL,
 *     networkCalledDevice         NetworkCalledDeviceID                 OPTIONAL,
 *     callCharacteristics         [ 0] IMPLICIT     CallCharacteristics         OPTIONAL,
 *     mediaCallCharacteristics     [ 1] IMPLICIT     MediaCallCharacteristics     OPTIONAL,
 *     chargedDevice             [ 2] ChargedDevice                 OPTIONAL,
 *     recordedCall             ConnectionID                     OPTIONAL,
 *     nodeNumber             [ 3] IMPLICIT     NodeNumber             OPTIONAL,
 *     tariffTable             [ 4] IMPLICIT     INTEGER             OPTIONAL,
 *     connectionStart         [ 5] IMPLICIT     TimeInfo             OPTIONAL,
 *     connectionEnd             [ 6] IMPLICIT     TimeInfo             OPTIONAL,
 *     connectionDuration         [ 7] IMPLICIT     INTEGER             OPTIONAL,
 *     accessCode             [ 8] IMPLICIT     OCTET STRING             OPTIONAL,
 *     carrier             [ 9] IMPLICIT     INTEGER             OPTIONAL,
 *     selectedRoute             [10] IMPLICIT     INTEGER             OPTIONAL,
 *     billingID             [11] IMPLICIT     BillingID             OPTIONAL,
 *     chargingInfo             [12] IMPLICIT     ChargingInfo             OPTIONAL,
 *     supplServiceInfo         [13] IMPLICIT     SupplServiceInfo         OPTIONAL,
 *     reasonForTerm             [14] IMPLICIT     ReasonForTerm             OPTIONAL,
 *     authCode             [15] IMPLICIT     AuthCode             OPTIONAL,
 *     accountInfo             [16] IMPLICIT     AccountInfo             OPTIONAL,
 *     deviceCategory             [17] IMPLICIT     DeviceCategory             OPTIONAL,
 *     namedDeviceTypes         [18] IMPLICIT     NamedDeviceTypes         OPTIONAL,
 *     operatorDevice             [19] DeviceID                     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CDRInformationItem {
    constructor (
        /**
         * @summary `recordNumber`.
         * @public
         * @readonly
         */
        readonly recordNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `recordCreationTime`.
         * @public
         * @readonly
         */
        readonly recordCreationTime: TimeInfo,
        /**
         * @summary `callingDevice`.
         * @public
         * @readonly
         */
        readonly callingDevice: OPTIONAL<CallingDeviceID>,
        /**
         * @summary `calledDevice`.
         * @public
         * @readonly
         */
        readonly calledDevice: OPTIONAL<CalledDeviceID>,
        /**
         * @summary `associatedCallingDevice`.
         * @public
         * @readonly
         */
        readonly associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>,
        /**
         * @summary `associatedCalledDevice`.
         * @public
         * @readonly
         */
        readonly associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>,
        /**
         * @summary `networkCallingDevice`.
         * @public
         * @readonly
         */
        readonly networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>,
        /**
         * @summary `networkCalledDevice`.
         * @public
         * @readonly
         */
        readonly networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>,
        /**
         * @summary `callCharacteristics`.
         * @public
         * @readonly
         */
        readonly callCharacteristics: OPTIONAL<CallCharacteristics>,
        /**
         * @summary `mediaCallCharacteristics`.
         * @public
         * @readonly
         */
        readonly mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>,
        /**
         * @summary `chargedDevice`.
         * @public
         * @readonly
         */
        readonly chargedDevice: OPTIONAL<ChargedDevice>,
        /**
         * @summary `recordedCall`.
         * @public
         * @readonly
         */
        readonly recordedCall: OPTIONAL<ConnectionID>,
        /**
         * @summary `nodeNumber`.
         * @public
         * @readonly
         */
        readonly nodeNumber: OPTIONAL<NodeNumber>,
        /**
         * @summary `tariffTable`.
         * @public
         * @readonly
         */
        readonly tariffTable: OPTIONAL<INTEGER>,
        /**
         * @summary `connectionStart`.
         * @public
         * @readonly
         */
        readonly connectionStart: OPTIONAL<TimeInfo>,
        /**
         * @summary `connectionEnd`.
         * @public
         * @readonly
         */
        readonly connectionEnd: OPTIONAL<TimeInfo>,
        /**
         * @summary `connectionDuration`.
         * @public
         * @readonly
         */
        readonly connectionDuration: OPTIONAL<INTEGER>,
        /**
         * @summary `accessCode`.
         * @public
         * @readonly
         */
        readonly accessCode: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<INTEGER>,
        /**
         * @summary `selectedRoute`.
         * @public
         * @readonly
         */
        readonly selectedRoute: OPTIONAL<INTEGER>,
        /**
         * @summary `billingID`.
         * @public
         * @readonly
         */
        readonly billingID: OPTIONAL<BillingID>,
        /**
         * @summary `chargingInfo`.
         * @public
         * @readonly
         */
        readonly chargingInfo: OPTIONAL<ChargingInfo>,
        /**
         * @summary `supplServiceInfo`.
         * @public
         * @readonly
         */
        readonly supplServiceInfo: OPTIONAL<SupplServiceInfo>,
        /**
         * @summary `reasonForTerm`.
         * @public
         * @readonly
         */
        readonly reasonForTerm: OPTIONAL<ReasonForTerm>,
        /**
         * @summary `authCode`.
         * @public
         * @readonly
         */
        readonly authCode: OPTIONAL<AuthCode>,
        /**
         * @summary `accountInfo`.
         * @public
         * @readonly
         */
        readonly accountInfo: OPTIONAL<AccountInfo>,
        /**
         * @summary `deviceCategory`.
         * @public
         * @readonly
         */
        readonly deviceCategory: OPTIONAL<DeviceCategory>,
        /**
         * @summary `namedDeviceTypes`.
         * @public
         * @readonly
         */
        readonly namedDeviceTypes: OPTIONAL<NamedDeviceTypes>,
        /**
         * @summary `operatorDevice`.
         * @public
         * @readonly
         */
        readonly operatorDevice: OPTIONAL<DeviceID>
    ) {}

    /**
     * @summary Restructures an object into a CDRInformationItem
     * @description
     * 
     * This takes an `object` and converts it to a `CDRInformationItem`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CDRInformationItem`.
     * @returns {CDRInformationItem}
     */
    public static _from_object (_o: { [_K in keyof (CDRInformationItem)]: (CDRInformationItem)[_K] }): CDRInformationItem {
        return new CDRInformationItem(_o.recordNumber, _o.recordCreationTime, _o.callingDevice, _o.calledDevice, _o.associatedCallingDevice, _o.associatedCalledDevice, _o.networkCallingDevice, _o.networkCalledDevice, _o.callCharacteristics, _o.mediaCallCharacteristics, _o.chargedDevice, _o.recordedCall, _o.nodeNumber, _o.tariffTable, _o.connectionStart, _o.connectionEnd, _o.connectionDuration, _o.accessCode, _o.carrier, _o.selectedRoute, _o.billingID, _o.chargingInfo, _o.supplServiceInfo, _o.reasonForTerm, _o.authCode, _o.accountInfo, _o.deviceCategory, _o.namedDeviceTypes, _o.operatorDevice);
    }

        /**
         * @summary The enum used as the type of the component `billingID`
         * @public
         * @static
         */

    public static _enum_for_billingID = _enum_for_BillingID;        /**
         * @summary The enum used as the type of the component `reasonForTerm`
         * @public
         * @static
         */

    public static _enum_for_reasonForTerm = _enum_for_ReasonForTerm;        /**
         * @summary The enum used as the type of the component `deviceCategory`
         * @public
         * @static
         */

    public static _enum_for_deviceCategory = _enum_for_DeviceCategory;        /**
         * @summary The enum used as the type of the component `namedDeviceTypes`
         * @public
         * @static
         */

    public static _enum_for_namedDeviceTypes = _enum_for_NamedDeviceTypes;
}

/**
 * @summary The Leading Root Component Types of CDRInformationItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CDRInformationItem: $.ComponentSpec[] = [
    new $.ComponentSpec("recordNumber", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("recordCreationTime", false, $.hasTag(_TagClass.universal, 24), undefined, undefined),
    new $.ComponentSpec("callingDevice", true, $.hasTag(_TagClass.application, 1), undefined, undefined),
    new $.ComponentSpec("calledDevice", true, $.hasTag(_TagClass.application, 2), undefined, undefined),
    new $.ComponentSpec("associatedCallingDevice", true, $.hasTag(_TagClass.application, 5), undefined, undefined),
    new $.ComponentSpec("associatedCalledDevice", true, $.hasTag(_TagClass.application, 6), undefined, undefined),
    new $.ComponentSpec("networkCallingDevice", true, $.hasTag(_TagClass.application, 7), undefined, undefined),
    new $.ComponentSpec("networkCalledDevice", true, $.hasTag(_TagClass.application, 8), undefined, undefined),
    new $.ComponentSpec("callCharacteristics", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("mediaCallCharacteristics", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("chargedDevice", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("recordedCall", true, $.hasTag(_TagClass.application, 11), undefined, undefined),
    new $.ComponentSpec("nodeNumber", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("tariffTable", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("connectionStart", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("connectionEnd", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("connectionDuration", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("accessCode", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("selectedRoute", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("billingID", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("chargingInfo", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("supplServiceInfo", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("reasonForTerm", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("authCode", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("accountInfo", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("deviceCategory", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("namedDeviceTypes", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("operatorDevice", true, $.hasTag(_TagClass.context, 19), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CDRInformationItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CDRInformationItem: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CDRInformationItem
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CDRInformationItem: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CDRInformationItem: $.ASN1Decoder<CDRInformationItem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CDRInformationItem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CDRInformationItem (el: _Element): CDRInformationItem {
    if (!_cached_decoder_for_CDRInformationItem) { _cached_decoder_for_CDRInformationItem = function (el: _Element): CDRInformationItem {
    let recordNumber: OPTIONAL<INTEGER>;
    let recordCreationTime!: TimeInfo;
    let callingDevice: OPTIONAL<CallingDeviceID>;
    let calledDevice: OPTIONAL<CalledDeviceID>;
    let associatedCallingDevice: OPTIONAL<AssociatedCallingDeviceID>;
    let associatedCalledDevice: OPTIONAL<AssociatedCalledDeviceID>;
    let networkCallingDevice: OPTIONAL<NetworkCallingDeviceID>;
    let networkCalledDevice: OPTIONAL<NetworkCalledDeviceID>;
    let callCharacteristics: OPTIONAL<CallCharacteristics>;
    let mediaCallCharacteristics: OPTIONAL<MediaCallCharacteristics>;
    let chargedDevice: OPTIONAL<ChargedDevice>;
    let recordedCall: OPTIONAL<ConnectionID>;
    let nodeNumber: OPTIONAL<NodeNumber>;
    let tariffTable: OPTIONAL<INTEGER>;
    let connectionStart: OPTIONAL<TimeInfo>;
    let connectionEnd: OPTIONAL<TimeInfo>;
    let connectionDuration: OPTIONAL<INTEGER>;
    let accessCode: OPTIONAL<OCTET_STRING>;
    let carrier: OPTIONAL<INTEGER>;
    let selectedRoute: OPTIONAL<INTEGER>;
    let billingID: OPTIONAL<BillingID>;
    let chargingInfo: OPTIONAL<ChargingInfo>;
    let supplServiceInfo: OPTIONAL<SupplServiceInfo>;
    let reasonForTerm: OPTIONAL<ReasonForTerm>;
    let authCode: OPTIONAL<AuthCode>;
    let accountInfo: OPTIONAL<AccountInfo>;
    let deviceCategory: OPTIONAL<DeviceCategory>;
    let namedDeviceTypes: OPTIONAL<NamedDeviceTypes>;
    let operatorDevice: OPTIONAL<DeviceID>;
    const callbacks: $.DecodingMap = {
        "recordNumber": (_el: _Element): void => { recordNumber = $._decodeInteger(_el); },
        "recordCreationTime": (_el: _Element): void => { recordCreationTime = _decode_TimeInfo(_el); },
        "callingDevice": (_el: _Element): void => { callingDevice = _decode_CallingDeviceID(_el); },
        "calledDevice": (_el: _Element): void => { calledDevice = _decode_CalledDeviceID(_el); },
        "associatedCallingDevice": (_el: _Element): void => { associatedCallingDevice = _decode_AssociatedCallingDeviceID(_el); },
        "associatedCalledDevice": (_el: _Element): void => { associatedCalledDevice = _decode_AssociatedCalledDeviceID(_el); },
        "networkCallingDevice": (_el: _Element): void => { networkCallingDevice = _decode_NetworkCallingDeviceID(_el); },
        "networkCalledDevice": (_el: _Element): void => { networkCalledDevice = _decode_NetworkCalledDeviceID(_el); },
        "callCharacteristics": (_el: _Element): void => { callCharacteristics = $._decode_implicit<CallCharacteristics>(() => _decode_CallCharacteristics)(_el); },
        "mediaCallCharacteristics": (_el: _Element): void => { mediaCallCharacteristics = $._decode_implicit<MediaCallCharacteristics>(() => _decode_MediaCallCharacteristics)(_el); },
        "chargedDevice": (_el: _Element): void => { chargedDevice = $._decode_explicit<ChargedDevice>(() => _decode_ChargedDevice)(_el); },
        "recordedCall": (_el: _Element): void => { recordedCall = _decode_ConnectionID(_el); },
        "nodeNumber": (_el: _Element): void => { nodeNumber = $._decode_implicit<NodeNumber>(() => _decode_NodeNumber)(_el); },
        "tariffTable": (_el: _Element): void => { tariffTable = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "connectionStart": (_el: _Element): void => { connectionStart = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "connectionEnd": (_el: _Element): void => { connectionEnd = $._decode_implicit<TimeInfo>(() => _decode_TimeInfo)(_el); },
        "connectionDuration": (_el: _Element): void => { connectionDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "accessCode": (_el: _Element): void => { accessCode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "selectedRoute": (_el: _Element): void => { selectedRoute = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "billingID": (_el: _Element): void => { billingID = $._decode_implicit<BillingID>(() => _decode_BillingID)(_el); },
        "chargingInfo": (_el: _Element): void => { chargingInfo = $._decode_implicit<ChargingInfo>(() => _decode_ChargingInfo)(_el); },
        "supplServiceInfo": (_el: _Element): void => { supplServiceInfo = $._decode_implicit<SupplServiceInfo>(() => _decode_SupplServiceInfo)(_el); },
        "reasonForTerm": (_el: _Element): void => { reasonForTerm = $._decode_implicit<ReasonForTerm>(() => _decode_ReasonForTerm)(_el); },
        "authCode": (_el: _Element): void => { authCode = $._decode_implicit<AuthCode>(() => _decode_AuthCode)(_el); },
        "accountInfo": (_el: _Element): void => { accountInfo = $._decode_implicit<AccountInfo>(() => _decode_AccountInfo)(_el); },
        "deviceCategory": (_el: _Element): void => { deviceCategory = $._decode_implicit<DeviceCategory>(() => _decode_DeviceCategory)(_el); },
        "namedDeviceTypes": (_el: _Element): void => { namedDeviceTypes = $._decode_implicit<NamedDeviceTypes>(() => _decode_NamedDeviceTypes)(_el); },
        "operatorDevice": (_el: _Element): void => { operatorDevice = $._decode_explicit<DeviceID>(() => _decode_DeviceID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CDRInformationItem,
        _extension_additions_list_spec_for_CDRInformationItem,
        _root_component_type_list_2_spec_for_CDRInformationItem,
        undefined,
    );
    return new CDRInformationItem(
        recordNumber,
        recordCreationTime,
        callingDevice,
        calledDevice,
        associatedCallingDevice,
        associatedCalledDevice,
        networkCallingDevice,
        networkCalledDevice,
        callCharacteristics,
        mediaCallCharacteristics,
        chargedDevice,
        recordedCall,
        nodeNumber,
        tariffTable,
        connectionStart,
        connectionEnd,
        connectionDuration,
        accessCode,
        carrier,
        selectedRoute,
        billingID,
        chargingInfo,
        supplServiceInfo,
        reasonForTerm,
        authCode,
        accountInfo,
        deviceCategory,
        namedDeviceTypes,
        operatorDevice
    );
}; }
    return _cached_decoder_for_CDRInformationItem(el);
}

let _cached_encoder_for_CDRInformationItem: $.ASN1Encoder<CDRInformationItem> | null = null;

/**
 * @summary Encodes a(n) CDRInformationItem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CDRInformationItem, encoded as an ASN.1 Element.
 */
export
function _encode_CDRInformationItem (value: CDRInformationItem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CDRInformationItem) { _cached_encoder_for_CDRInformationItem = function (value: CDRInformationItem, elGetter: $.ASN1Encoder<CDRInformationItem>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.recordNumber === undefined) ? undefined : $._encodeInteger(value.recordNumber, $.BER)),
            /* REQUIRED   */ _encode_TimeInfo(value.recordCreationTime, $.BER),
            /* IF_ABSENT  */ ((value.callingDevice === undefined) ? undefined : _encode_CallingDeviceID(value.callingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.calledDevice === undefined) ? undefined : _encode_CalledDeviceID(value.calledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCallingDevice === undefined) ? undefined : _encode_AssociatedCallingDeviceID(value.associatedCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.associatedCalledDevice === undefined) ? undefined : _encode_AssociatedCalledDeviceID(value.associatedCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.networkCallingDevice === undefined) ? undefined : _encode_NetworkCallingDeviceID(value.networkCallingDevice, $.BER)),
            /* IF_ABSENT  */ ((value.networkCalledDevice === undefined) ? undefined : _encode_NetworkCalledDeviceID(value.networkCalledDevice, $.BER)),
            /* IF_ABSENT  */ ((value.callCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CallCharacteristics, $.BER)(value.callCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.mediaCallCharacteristics === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MediaCallCharacteristics, $.BER)(value.mediaCallCharacteristics, $.BER)),
            /* IF_ABSENT  */ ((value.chargedDevice === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ChargedDevice, $.BER)(value.chargedDevice, $.BER)),
            /* IF_ABSENT  */ ((value.recordedCall === undefined) ? undefined : _encode_ConnectionID(value.recordedCall, $.BER)),
            /* IF_ABSENT  */ ((value.nodeNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_NodeNumber, $.BER)(value.nodeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.tariffTable === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.tariffTable, $.BER)),
            /* IF_ABSENT  */ ((value.connectionStart === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TimeInfo, $.BER)(value.connectionStart, $.BER)),
            /* IF_ABSENT  */ ((value.connectionEnd === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TimeInfo, $.BER)(value.connectionEnd, $.BER)),
            /* IF_ABSENT  */ ((value.connectionDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.connectionDuration, $.BER)),
            /* IF_ABSENT  */ ((value.accessCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.accessCode, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.selectedRoute === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeInteger, $.BER)(value.selectedRoute, $.BER)),
            /* IF_ABSENT  */ ((value.billingID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_BillingID, $.BER)(value.billingID, $.BER)),
            /* IF_ABSENT  */ ((value.chargingInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ChargingInfo, $.BER)(value.chargingInfo, $.BER)),
            /* IF_ABSENT  */ ((value.supplServiceInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SupplServiceInfo, $.BER)(value.supplServiceInfo, $.BER)),
            /* IF_ABSENT  */ ((value.reasonForTerm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_ReasonForTerm, $.BER)(value.reasonForTerm, $.BER)),
            /* IF_ABSENT  */ ((value.authCode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_AuthCode, $.BER)(value.authCode, $.BER)),
            /* IF_ABSENT  */ ((value.accountInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_AccountInfo, $.BER)(value.accountInfo, $.BER)),
            /* IF_ABSENT  */ ((value.deviceCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_DeviceCategory, $.BER)(value.deviceCategory, $.BER)),
            /* IF_ABSENT  */ ((value.namedDeviceTypes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_NamedDeviceTypes, $.BER)(value.namedDeviceTypes, $.BER)),
            /* IF_ABSENT  */ ((value.operatorDevice === undefined) ? undefined : $._encode_explicit(_TagClass.context, 19, () => _encode_DeviceID, $.BER)(value.operatorDevice, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CDRInformationItem(value, elGetter);
}


/* eslint-enable */
