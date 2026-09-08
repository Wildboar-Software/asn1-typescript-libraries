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
import { AcceptCall, AcceptCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_userData /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_privateData /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_AcceptCall, _encode_AcceptCall } from "../CSTA-capability-exchange/AcceptCall.ta.mjs";
// export { AcceptCall, AcceptCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_userData /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_privateData /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AcceptCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_AcceptCall, _encode_AcceptCall } from "../CSTA-capability-exchange/AcceptCall.ta.mjs";
import { AlternateCall, AlternateCall_alerting /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_hold /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_queued /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_connectionReservation /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionConsultOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionTransferOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionConferenceOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionUnrestricted /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_privateData /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, _decode_AlternateCall, _encode_AlternateCall } from "../CSTA-capability-exchange/AlternateCall.ta.mjs";
// export { AlternateCall, AlternateCall_alerting /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_hold /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_queued /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_connectionReservation /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionConsultOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionTransferOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionConferenceOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_consultOptionUnrestricted /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_privateData /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, AlternateCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, _decode_AlternateCall, _encode_AlternateCall } from "../CSTA-capability-exchange/AlternateCall.ta.mjs";
import { AnswerCall, AnswerCall_alerting /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_initiated /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_queued /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_userData /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_privateData /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_AnswerCall, _encode_AnswerCall } from "../CSTA-capability-exchange/AnswerCall.ta.mjs";
// export { AnswerCall, AnswerCall_alerting /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_initiated /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_queued /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_userData /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_privateData /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, AnswerCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_AnswerCall, _encode_AnswerCall } from "../CSTA-capability-exchange/AnswerCall.ta.mjs";
import { CallBack, CallBack_alerting /* IMPORTED_LONG_NAMED_BIT */, CallBack_null /* IMPORTED_LONG_NAMED_BIT */, CallBack_failed /* IMPORTED_LONG_NAMED_BIT */, CallBack_queued /* IMPORTED_LONG_NAMED_BIT */, CallBack_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, CallBack_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, CallBack_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, CallBack_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBack_targetDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, CallBack_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBack_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, CallBack_moreCallBacksNegAck /* IMPORTED_LONG_NAMED_BIT */, CallBack_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBack, _encode_CallBack } from "../CSTA-capability-exchange/CallBack.ta.mjs";
// export { CallBack, CallBack_alerting /* IMPORTED_LONG_NAMED_BIT */, CallBack_null /* IMPORTED_LONG_NAMED_BIT */, CallBack_failed /* IMPORTED_LONG_NAMED_BIT */, CallBack_queued /* IMPORTED_LONG_NAMED_BIT */, CallBack_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, CallBack_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, CallBack_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, CallBack_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBack_targetDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, CallBack_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBack_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, CallBack_moreCallBacksNegAck /* IMPORTED_LONG_NAMED_BIT */, CallBack_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBack, _encode_CallBack } from "../CSTA-capability-exchange/CallBack.ta.mjs";
import { CallBackMessage, CallBackMessage_alerting /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_null /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_failed /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_queued /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_targetDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_moreCallBacksNegAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackMessage, _encode_CallBackMessage } from "../CSTA-capability-exchange/CallBackMessage.ta.mjs";
// export { CallBackMessage, CallBackMessage_alerting /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_null /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_failed /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_queued /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_privateData /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_targetDeviceInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_moreCallBacksNegAck /* IMPORTED_LONG_NAMED_BIT */, CallBackMessage_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CallBackMessage, _encode_CallBackMessage } from "../CSTA-capability-exchange/CallBackMessage.ta.mjs";
import { CampOnCall, CampOnCall_privateData /* IMPORTED_LONG_NAMED_BIT */, CampOnCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CampOnCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, CampOnCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CampOnCall, _encode_CampOnCall } from "../CSTA-capability-exchange/CampOnCall.ta.mjs";
// export { CampOnCall, CampOnCall_privateData /* IMPORTED_LONG_NAMED_BIT */, CampOnCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, CampOnCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, CampOnCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_CampOnCall, _encode_CampOnCall } from "../CSTA-capability-exchange/CampOnCall.ta.mjs";
import { ClearCall, ClearCall_alerting /* IMPORTED_LONG_NAMED_BIT */, ClearCall_connected /* IMPORTED_LONG_NAMED_BIT */, ClearCall_failed /* IMPORTED_LONG_NAMED_BIT */, ClearCall_queued /* IMPORTED_LONG_NAMED_BIT */, ClearCall_initiated /* IMPORTED_LONG_NAMED_BIT */, ClearCall_hold /* IMPORTED_LONG_NAMED_BIT */, ClearCall_userData /* IMPORTED_LONG_NAMED_BIT */, ClearCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ClearCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ClearCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ClearCall_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, callIDOnly /* IMPORTED_SHORT_NAMED_BIT */, ClearCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, ClearCall_reason /* IMPORTED_LONG_NAMED_BIT */, _decode_ClearCall, _encode_ClearCall } from "../CSTA-capability-exchange/ClearCall.ta.mjs";
// export { ClearCall, ClearCall_alerting /* IMPORTED_LONG_NAMED_BIT */, ClearCall_connected /* IMPORTED_LONG_NAMED_BIT */, ClearCall_failed /* IMPORTED_LONG_NAMED_BIT */, ClearCall_queued /* IMPORTED_LONG_NAMED_BIT */, ClearCall_initiated /* IMPORTED_LONG_NAMED_BIT */, ClearCall_hold /* IMPORTED_LONG_NAMED_BIT */, ClearCall_userData /* IMPORTED_LONG_NAMED_BIT */, ClearCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ClearCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ClearCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ClearCall_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, callIDOnly /* IMPORTED_SHORT_NAMED_BIT */, ClearCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, ClearCall_reason /* IMPORTED_LONG_NAMED_BIT */, _decode_ClearCall, _encode_ClearCall } from "../CSTA-capability-exchange/ClearCall.ta.mjs";
import { ClearConnection, ClearConnection_alerting /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_connected /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_fail /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_queued /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_initiated /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_hold /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_userData /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_reason /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_privateData /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ClearConnection, _encode_ClearConnection } from "../CSTA-capability-exchange/ClearConnection.ta.mjs";
// export { ClearConnection, ClearConnection_alerting /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_connected /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_fail /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_queued /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_initiated /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_hold /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_userData /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_reason /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_privateData /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ClearConnection_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ClearConnection, _encode_ClearConnection } from "../CSTA-capability-exchange/ClearConnection.ta.mjs";
import { ConferenceCall, ConferenceCall_activeCallConnected /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_activeCallHold /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_heldCallConnected /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_heldCallHold /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_connectionParameterInAck /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_resultingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, resultingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ConferenceCall_conferenceCallOnfoInAck /* IMPORTED_LONG_NAMED_BIT */, conferenceCallOnfoInAck /* IMPORTED_SHORT_NAMED_BIT */, ConferenceCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_protectedAgainstClearing /* IMPORTED_LONG_NAMED_BIT */, protectedAgainstClearing /* IMPORTED_SHORT_NAMED_BIT */, ConferenceCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ConferenceCall, _encode_ConferenceCall } from "../CSTA-capability-exchange/ConferenceCall.ta.mjs";
// export { ConferenceCall, ConferenceCall_activeCallConnected /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_activeCallHold /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_heldCallConnected /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_heldCallHold /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_connectionParameterInAck /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_resultingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, resultingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ConferenceCall_conferenceCallOnfoInAck /* IMPORTED_LONG_NAMED_BIT */, conferenceCallOnfoInAck /* IMPORTED_SHORT_NAMED_BIT */, ConferenceCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_protectedAgainstClearing /* IMPORTED_LONG_NAMED_BIT */, protectedAgainstClearing /* IMPORTED_SHORT_NAMED_BIT */, ConferenceCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ConferenceCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ConferenceCall, _encode_ConferenceCall } from "../CSTA-capability-exchange/ConferenceCall.ta.mjs";
import { ConsultationCall, ConsultationCall_connectionReservation /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_authCode /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_userData /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_flowDirectionTransmit /* IMPORTED_LONG_NAMED_BIT */, flowDirectionTransmit /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_flowDirectionReceive /* IMPORTED_LONG_NAMED_BIT */, flowDirectionReceive /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_flowDirectionTransmitAndReceive /* IMPORTED_LONG_NAMED_BIT */, flowDirectionTransmitAndReceive /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_flowDirectionNone /* IMPORTED_LONG_NAMED_BIT */, flowDirectionNone /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_numberOfChannels /* IMPORTED_LONG_NAMED_BIT */, numberOfChannels /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_mediaSessionInfo /* IMPORTED_LONG_NAMED_BIT */, mediaSessionInfo /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_consultOptionConsultOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_consultOptionTransferOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_consultOptionConferenceOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_consultOptionUnrestricted /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_multiStage /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_supportsAdjustmentOfMediaCharacteristics /* IMPORTED_LONG_NAMED_BIT */, supportsAdjustmentOfMediaCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ConsultationCall, _encode_ConsultationCall } from "../CSTA-capability-exchange/ConsultationCall.ta.mjs";
// export { ConsultationCall, ConsultationCall_connectionReservation /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_authCode /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_userData /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_callingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_flowDirectionTransmit /* IMPORTED_LONG_NAMED_BIT */, flowDirectionTransmit /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_flowDirectionReceive /* IMPORTED_LONG_NAMED_BIT */, flowDirectionReceive /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_flowDirectionTransmitAndReceive /* IMPORTED_LONG_NAMED_BIT */, flowDirectionTransmitAndReceive /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_flowDirectionNone /* IMPORTED_LONG_NAMED_BIT */, flowDirectionNone /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_numberOfChannels /* IMPORTED_LONG_NAMED_BIT */, numberOfChannels /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_mediaSessionInfo /* IMPORTED_LONG_NAMED_BIT */, mediaSessionInfo /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_consultOptionConsultOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_consultOptionTransferOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_consultOptionConferenceOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_consultOptionUnrestricted /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_multiStage /* IMPORTED_LONG_NAMED_BIT */, ConsultationCall_supportsAdjustmentOfMediaCharacteristics /* IMPORTED_LONG_NAMED_BIT */, supportsAdjustmentOfMediaCharacteristics /* IMPORTED_SHORT_NAMED_BIT */, ConsultationCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ConsultationCall, _encode_ConsultationCall } from "../CSTA-capability-exchange/ConsultationCall.ta.mjs";
import { DeflectCall, DeflectCall_alerting /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_connected /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_failed /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_hold /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_queued /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_userData /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_reason /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_privateData /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_callCharacteristicsinRequest /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_multipleDeviceIDsInNewDestination /* IMPORTED_LONG_NAMED_BIT */, multipleDeviceIDsInNewDestination /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeflectCall, _encode_DeflectCall } from "../CSTA-capability-exchange/DeflectCall.ta.mjs";
// export { DeflectCall, DeflectCall_alerting /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_connected /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_failed /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_hold /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_queued /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_userData /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_reason /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_privateData /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_callCharacteristicsinRequest /* IMPORTED_LONG_NAMED_BIT */, DeflectCall_multipleDeviceIDsInNewDestination /* IMPORTED_LONG_NAMED_BIT */, multipleDeviceIDsInNewDestination /* IMPORTED_SHORT_NAMED_BIT */, _decode_DeflectCall, _encode_DeflectCall } from "../CSTA-capability-exchange/DeflectCall.ta.mjs";
import { DialDigits, DialDigits_correlatorData /* IMPORTED_LONG_NAMED_BIT */, DialDigits_privateData /* IMPORTED_LONG_NAMED_BIT */, DialDigits_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DialDigits_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DialDigits_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_DialDigits, _encode_DialDigits } from "../CSTA-capability-exchange/DialDigits.ta.mjs";
// export { DialDigits, DialDigits_correlatorData /* IMPORTED_LONG_NAMED_BIT */, DialDigits_privateData /* IMPORTED_LONG_NAMED_BIT */, DialDigits_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DialDigits_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DialDigits_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_DialDigits, _encode_DialDigits } from "../CSTA-capability-exchange/DialDigits.ta.mjs";
import { DirectedPickupCall, DirectedPickupCall_alerting /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_hold /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_queued /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_connected /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_userData /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_privateData /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_pickedCallInAck /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_pickedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_DirectedPickupCall, _encode_DirectedPickupCall } from "../CSTA-capability-exchange/DirectedPickupCall.ta.mjs";
// export { DirectedPickupCall, DirectedPickupCall_alerting /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_hold /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_queued /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_connected /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_userData /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_privateData /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_pickedCallInAck /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_pickedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, DirectedPickupCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_DirectedPickupCall, _encode_DirectedPickupCall } from "../CSTA-capability-exchange/DirectedPickupCall.ta.mjs";
import { GroupPickupCall, GroupPickupCall_alerting /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_connected /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_hold /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_queued /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_pickGroup /* IMPORTED_LONG_NAMED_BIT */, pickGroup /* IMPORTED_SHORT_NAMED_BIT */, GroupPickupCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_userData /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_privateData /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_pickedCallInAck /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_pickedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_GroupPickupCall, _encode_GroupPickupCall } from "../CSTA-capability-exchange/GroupPickupCall.ta.mjs";
// export { GroupPickupCall, GroupPickupCall_alerting /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_connected /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_hold /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_queued /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_pickGroup /* IMPORTED_LONG_NAMED_BIT */, pickGroup /* IMPORTED_SHORT_NAMED_BIT */, GroupPickupCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_userData /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_privateData /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_pickedCallInAck /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_pickedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_supportsOfferedModeOfAlerting /* IMPORTED_LONG_NAMED_BIT */, GroupPickupCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_GroupPickupCall, _encode_GroupPickupCall } from "../CSTA-capability-exchange/GroupPickupCall.ta.mjs";
import { HoldCall, HoldCall_connectionReservation /* IMPORTED_LONG_NAMED_BIT */, HoldCall_privateData /* IMPORTED_LONG_NAMED_BIT */, HoldCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, HoldCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, HoldCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_HoldCall, _encode_HoldCall } from "../CSTA-capability-exchange/HoldCall.ta.mjs";
// export { HoldCall, HoldCall_connectionReservation /* IMPORTED_LONG_NAMED_BIT */, HoldCall_privateData /* IMPORTED_LONG_NAMED_BIT */, HoldCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, HoldCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, HoldCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_HoldCall, _encode_HoldCall } from "../CSTA-capability-exchange/HoldCall.ta.mjs";
import { IntrudeCall, IntrudeCall_participationTypeSilent /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_participationTypeActive /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_userData /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_privateData /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_conferencedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_supportsConference /* IMPORTED_LONG_NAMED_BIT */, supportsConference /* IMPORTED_SHORT_NAMED_BIT */, IntrudeCall_supportsAlternate /* IMPORTED_LONG_NAMED_BIT */, supportsAlternate /* IMPORTED_SHORT_NAMED_BIT */, IntrudeCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_IntrudeCall, _encode_IntrudeCall } from "../CSTA-capability-exchange/IntrudeCall.ta.mjs";
// export { IntrudeCall, IntrudeCall_participationTypeSilent /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_participationTypeActive /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_userData /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_privateData /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_conferencedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, IntrudeCall_supportsConference /* IMPORTED_LONG_NAMED_BIT */, supportsConference /* IMPORTED_SHORT_NAMED_BIT */, IntrudeCall_supportsAlternate /* IMPORTED_LONG_NAMED_BIT */, supportsAlternate /* IMPORTED_SHORT_NAMED_BIT */, IntrudeCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_IntrudeCall, _encode_IntrudeCall } from "../CSTA-capability-exchange/IntrudeCall.ta.mjs";
import { JoinCall, JoinCall_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, JoinCall_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, JoinCall_participationTypeSilent /* IMPORTED_LONG_NAMED_BIT */, JoinCall_participationTypeActive /* IMPORTED_LONG_NAMED_BIT */, JoinCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, JoinCall_authCode /* IMPORTED_LONG_NAMED_BIT */, JoinCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, JoinCall_userData /* IMPORTED_LONG_NAMED_BIT */, JoinCall_conferencedCallInAck /* IMPORTED_LONG_NAMED_BIT */, conferencedCallInAck /* IMPORTED_SHORT_NAMED_BIT */, JoinCall_conferencedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, JoinCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, JoinCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, JoinCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, JoinCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, JoinCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_JoinCall, _encode_JoinCall } from "../CSTA-capability-exchange/JoinCall.ta.mjs";
// export { JoinCall, JoinCall_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, JoinCall_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, JoinCall_participationTypeSilent /* IMPORTED_LONG_NAMED_BIT */, JoinCall_participationTypeActive /* IMPORTED_LONG_NAMED_BIT */, JoinCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, JoinCall_authCode /* IMPORTED_LONG_NAMED_BIT */, JoinCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, JoinCall_userData /* IMPORTED_LONG_NAMED_BIT */, JoinCall_conferencedCallInAck /* IMPORTED_LONG_NAMED_BIT */, conferencedCallInAck /* IMPORTED_SHORT_NAMED_BIT */, JoinCall_conferencedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, JoinCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, JoinCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, JoinCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, JoinCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, JoinCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_JoinCall, _encode_JoinCall } from "../CSTA-capability-exchange/JoinCall.ta.mjs";
import { MakeCall, MakeCall_initiated /* IMPORTED_LONG_NAMED_BIT */, MakeCall_null /* IMPORTED_LONG_NAMED_BIT */, MakeCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, MakeCall_authCode /* IMPORTED_LONG_NAMED_BIT */, MakeCall_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, MakeCall_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, MakeCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, MakeCall_userData /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, MakeCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, MakeCall_privateData /* IMPORTED_LONG_NAMED_BIT */, MakeCall_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, MakeCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MakeCall_multiStage /* IMPORTED_LONG_NAMED_BIT */, MakeCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, MakeCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, MakeCall_offHook /* IMPORTED_LONG_NAMED_BIT */, offHook /* IMPORTED_SHORT_NAMED_BIT */, MakeCall_mediaCharacteristicsAdjustable /* IMPORTED_LONG_NAMED_BIT */, mediaCharacteristicsAdjustable /* IMPORTED_SHORT_NAMED_BIT */, MakeCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, MakeCall_reason /* IMPORTED_LONG_NAMED_BIT */, _decode_MakeCall, _encode_MakeCall } from "../CSTA-capability-exchange/MakeCall.ta.mjs";
// export { MakeCall, MakeCall_initiated /* IMPORTED_LONG_NAMED_BIT */, MakeCall_null /* IMPORTED_LONG_NAMED_BIT */, MakeCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, MakeCall_authCode /* IMPORTED_LONG_NAMED_BIT */, MakeCall_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, MakeCall_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, MakeCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, MakeCall_userData /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeCall_callingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, MakeCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, MakeCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, MakeCall_privateData /* IMPORTED_LONG_NAMED_BIT */, MakeCall_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, MakeCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MakeCall_multiStage /* IMPORTED_LONG_NAMED_BIT */, MakeCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, MakeCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, MakeCall_offHook /* IMPORTED_LONG_NAMED_BIT */, offHook /* IMPORTED_SHORT_NAMED_BIT */, MakeCall_mediaCharacteristicsAdjustable /* IMPORTED_LONG_NAMED_BIT */, mediaCharacteristicsAdjustable /* IMPORTED_SHORT_NAMED_BIT */, MakeCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, MakeCall_reason /* IMPORTED_LONG_NAMED_BIT */, _decode_MakeCall, _encode_MakeCall } from "../CSTA-capability-exchange/MakeCall.ta.mjs";
import { MakeConnection, MakeConnection_null /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_accountCode /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_authCode /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_correlatorData /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, connectionInfo /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_reason /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_maxDevices /* IMPORTED_LONG_NAMED_BIT */, maxDevices /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_startTime /* IMPORTED_LONG_NAMED_BIT */, startTime /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_duration /* IMPORTED_LONG_NAMED_BIT */, duration /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_privateData /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_mediaCharacteristicsinAck /* IMPORTED_LONG_NAMED_BIT */, mediaCharacteristicsinAck /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_promptingMode /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_mediaCharacteristicsAdjusted /* IMPORTED_LONG_NAMED_BIT */, mediaCharacteristicsAdjusted /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_ackModelMultistep /* IMPORTED_LONG_NAMED_BIT */, ackModelMultistep /* IMPORTED_SHORT_NAMED_BIT */, _decode_MakeConnection, _encode_MakeConnection } from "../CSTA-capability-exchange/MakeConnection.ta.mjs";
// export { MakeConnection, MakeConnection_null /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_accountCode /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_authCode /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_correlatorData /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, connectionInfo /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_reason /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_maxDevices /* IMPORTED_LONG_NAMED_BIT */, maxDevices /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_startTime /* IMPORTED_LONG_NAMED_BIT */, startTime /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_duration /* IMPORTED_LONG_NAMED_BIT */, duration /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_privateData /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_mediaCharacteristicsinAck /* IMPORTED_LONG_NAMED_BIT */, mediaCharacteristicsinAck /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_promptingMode /* IMPORTED_LONG_NAMED_BIT */, MakeConnection_mediaCharacteristicsAdjusted /* IMPORTED_LONG_NAMED_BIT */, mediaCharacteristicsAdjusted /* IMPORTED_SHORT_NAMED_BIT */, MakeConnection_ackModelMultistep /* IMPORTED_LONG_NAMED_BIT */, ackModelMultistep /* IMPORTED_SHORT_NAMED_BIT */, _decode_MakeConnection, _encode_MakeConnection } from "../CSTA-capability-exchange/MakeConnection.ta.mjs";
import { MakePredictiveCall, MakePredictiveCall_signallingDetection /* IMPORTED_LONG_NAMED_BIT */, signallingDetection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionCallDelivered /* IMPORTED_LONG_NAMED_BIT */, signallingConditionCallDelivered /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionCallEstablished /* IMPORTED_LONG_NAMED_BIT */, signallingConditionCallEstablished /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionActionDestinationDetection /* IMPORTED_LONG_NAMED_BIT */, signallingConditionActionDestinationDetection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionActionRemainConnected /* IMPORTED_LONG_NAMED_BIT */, signallingConditionActionRemainConnected /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationDetection /* IMPORTED_LONG_NAMED_BIT */, destinationDetection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationConditionHumanVoice /* IMPORTED_LONG_NAMED_BIT */, destinationConditionHumanVoice /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationConditionAnsweringMachine /* IMPORTED_LONG_NAMED_BIT */, destinationConditionAnsweringMachine /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationConditionFax /* IMPORTED_LONG_NAMED_BIT */, destinationConditionFax /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationActionClearConnection /* IMPORTED_LONG_NAMED_BIT */, destinationActionClearConnection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationActionRemainConnected /* IMPORTED_LONG_NAMED_BIT */, destinationActionRemainConnected /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_defaultActionClearConnection /* IMPORTED_LONG_NAMED_BIT */, defaultActionClearConnection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_defaultActionRemainConnected /* IMPORTED_LONG_NAMED_BIT */, defaultActionRemainConnected /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_authCode /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_alertTime /* IMPORTED_LONG_NAMED_BIT */, alertTime /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_userData /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_privateData /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_reservesCallingDevice /* IMPORTED_LONG_NAMED_BIT */, reservesCallingDevice /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_MakePredictiveCall, _encode_MakePredictiveCall } from "../CSTA-capability-exchange/MakePredictiveCall.ta.mjs";
// export { MakePredictiveCall, MakePredictiveCall_signallingDetection /* IMPORTED_LONG_NAMED_BIT */, signallingDetection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionCallDelivered /* IMPORTED_LONG_NAMED_BIT */, signallingConditionCallDelivered /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionCallEstablished /* IMPORTED_LONG_NAMED_BIT */, signallingConditionCallEstablished /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionActionDestinationDetection /* IMPORTED_LONG_NAMED_BIT */, signallingConditionActionDestinationDetection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_signallingConditionActionRemainConnected /* IMPORTED_LONG_NAMED_BIT */, signallingConditionActionRemainConnected /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationDetection /* IMPORTED_LONG_NAMED_BIT */, destinationDetection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationConditionHumanVoice /* IMPORTED_LONG_NAMED_BIT */, destinationConditionHumanVoice /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationConditionAnsweringMachine /* IMPORTED_LONG_NAMED_BIT */, destinationConditionAnsweringMachine /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationConditionFax /* IMPORTED_LONG_NAMED_BIT */, destinationConditionFax /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationActionClearConnection /* IMPORTED_LONG_NAMED_BIT */, destinationActionClearConnection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_destinationActionRemainConnected /* IMPORTED_LONG_NAMED_BIT */, destinationActionRemainConnected /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_defaultActionClearConnection /* IMPORTED_LONG_NAMED_BIT */, defaultActionClearConnection /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_defaultActionRemainConnected /* IMPORTED_LONG_NAMED_BIT */, defaultActionRemainConnected /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_accountCode /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_authCode /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_autoOriginatePrompt /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_autoOriginateDoNotPrompt /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_alertTime /* IMPORTED_LONG_NAMED_BIT */, alertTime /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_userData /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_privateData /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_initiatedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_supportsPrompting /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_promptingMode /* IMPORTED_LONG_NAMED_BIT */, MakePredictiveCall_reservesCallingDevice /* IMPORTED_LONG_NAMED_BIT */, reservesCallingDevice /* IMPORTED_SHORT_NAMED_BIT */, MakePredictiveCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_MakePredictiveCall, _encode_MakePredictiveCall } from "../CSTA-capability-exchange/MakePredictiveCall.ta.mjs";
import { ParkCall, ParkCall_hold /* IMPORTED_LONG_NAMED_BIT */, ParkCall_connected /* IMPORTED_LONG_NAMED_BIT */, ParkCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ParkCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, ParkCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ParkCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ParkCall_parkedToInAck /* IMPORTED_LONG_NAMED_BIT */, parkedToInAck /* IMPORTED_SHORT_NAMED_BIT */, ParkCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ParkCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ParkCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ParkCall, _encode_ParkCall } from "../CSTA-capability-exchange/ParkCall.ta.mjs";
// export { ParkCall, ParkCall_hold /* IMPORTED_LONG_NAMED_BIT */, ParkCall_connected /* IMPORTED_LONG_NAMED_BIT */, ParkCall_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ParkCall_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, ParkCall_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ParkCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ParkCall_parkedToInAck /* IMPORTED_LONG_NAMED_BIT */, parkedToInAck /* IMPORTED_SHORT_NAMED_BIT */, ParkCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ParkCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ParkCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ParkCall, _encode_ParkCall } from "../CSTA-capability-exchange/ParkCall.ta.mjs";
import { ReconnectCall, ReconnectCall_alerting /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_connected /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_fail /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_initiated /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_queued /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ReconnectCall, _encode_ReconnectCall } from "../CSTA-capability-exchange/ReconnectCall.ta.mjs";
// export { ReconnectCall, ReconnectCall_alerting /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_connected /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_fail /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_initiated /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_queued /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_privateData /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, ReconnectCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_ReconnectCall, _encode_ReconnectCall } from "../CSTA-capability-exchange/ReconnectCall.ta.mjs";
import { RetrieveCall, RetrieveCall_privateData /* IMPORTED_LONG_NAMED_BIT */, RetrieveCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, RetrieveCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, RetrieveCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_RetrieveCall, _encode_RetrieveCall } from "../CSTA-capability-exchange/RetrieveCall.ta.mjs";
// export { RetrieveCall, RetrieveCall_privateData /* IMPORTED_LONG_NAMED_BIT */, RetrieveCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, RetrieveCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, RetrieveCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_RetrieveCall, _encode_RetrieveCall } from "../CSTA-capability-exchange/RetrieveCall.ta.mjs";
import { SendMessage, SendMessage_accountCode /* IMPORTED_LONG_NAMED_BIT */, SendMessage_authCode /* IMPORTED_LONG_NAMED_BIT */, SendMessage_correlatorData /* IMPORTED_LONG_NAMED_BIT */, SendMessage_userData /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, SendMessage_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, SendMessage_privateData /* IMPORTED_LONG_NAMED_BIT */, SendMessage_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SendMessage, _encode_SendMessage } from "../CSTA-capability-exchange/SendMessage.ta.mjs";
// export { SendMessage, SendMessage_accountCode /* IMPORTED_LONG_NAMED_BIT */, SendMessage_authCode /* IMPORTED_LONG_NAMED_BIT */, SendMessage_correlatorData /* IMPORTED_LONG_NAMED_BIT */, SendMessage_userData /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsACDCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsLowPriorityCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsPriorityCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsHighPriorityCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsMaintenanceCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsDirectAgent /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsAssistCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsVoiceUnitCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsPrivateCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsPersonalCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsSensitiveCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsConfidentialCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_callCharacteristicsEncryptedCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, SendMessage_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, SendMessage_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, SendMessage_privateData /* IMPORTED_LONG_NAMED_BIT */, SendMessage_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, _decode_SendMessage, _encode_SendMessage } from "../CSTA-capability-exchange/SendMessage.ta.mjs";
import { SingleStepConference, SingleStepConference_participationTypeActive /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_participationTypeSilent /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_accountCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_authCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_correlatorData /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_userData /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_privateData /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_conferencedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SingleStepConference, _encode_SingleStepConference } from "../CSTA-capability-exchange/SingleStepConference.ta.mjs";
// export { SingleStepConference, SingleStepConference_participationTypeActive /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_participationTypeSilent /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_accountCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_authCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_correlatorData /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_userData /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_privateData /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_conferencedCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, SingleStepConference_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_SingleStepConference, _encode_SingleStepConference } from "../CSTA-capability-exchange/SingleStepConference.ta.mjs";
import { SingleStepTransfer, SingleStepTransfer_accountCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_authCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_correlatorData /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_userData /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_reason /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_privateData /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_connectionParameterInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_resultionConnectionInformation /* IMPORTED_LONG_NAMED_BIT */, resultionConnectionInformation /* IMPORTED_SHORT_NAMED_BIT */, SingleStepTransfer_transferredCollInfoInAck /* IMPORTED_LONG_NAMED_BIT */, transferredCollInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, SingleStepTransfer_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_multipleDevices /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_callCharacteristicsinRequest /* IMPORTED_LONG_NAMED_BIT */, _decode_SingleStepTransfer, _encode_SingleStepTransfer } from "../CSTA-capability-exchange/SingleStepTransfer.ta.mjs";
// export { SingleStepTransfer, SingleStepTransfer_accountCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_authCode /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_correlatorData /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_userData /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_reason /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_privateData /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_connectionParameterInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_resultionConnectionInformation /* IMPORTED_LONG_NAMED_BIT */, resultionConnectionInformation /* IMPORTED_SHORT_NAMED_BIT */, SingleStepTransfer_transferredCollInfoInAck /* IMPORTED_LONG_NAMED_BIT */, transferredCollInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, SingleStepTransfer_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_multipleDevices /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, SingleStepTransfer_callCharacteristicsinRequest /* IMPORTED_LONG_NAMED_BIT */, _decode_SingleStepTransfer, _encode_SingleStepTransfer } from "../CSTA-capability-exchange/SingleStepTransfer.ta.mjs";
import { TransferCall, TransferCall_activeCallConnected /* IMPORTED_LONG_NAMED_BIT */, TransferCall_activeCallHold /* IMPORTED_LONG_NAMED_BIT */, TransferCall_heldCallConnected /* IMPORTED_LONG_NAMED_BIT */, TransferCall_heldCallHold /* IMPORTED_LONG_NAMED_BIT */, TransferCall_privateData /* IMPORTED_LONG_NAMED_BIT */, TransferCall_connectionsParameterInAck /* IMPORTED_LONG_NAMED_BIT */, connectionsParameterInAck /* IMPORTED_SHORT_NAMED_BIT */, TransferCall_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, TransferCall_resultingConnectionInformation /* IMPORTED_LONG_NAMED_BIT */, resultingConnectionInformation /* IMPORTED_SHORT_NAMED_BIT */, TransferCall_transferredCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, transferredCallInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, TransferCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, TransferCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, TransferCall_multipleDevices /* IMPORTED_LONG_NAMED_BIT */, TransferCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_TransferCall, _encode_TransferCall } from "../CSTA-capability-exchange/TransferCall.ta.mjs";
// export { TransferCall, TransferCall_activeCallConnected /* IMPORTED_LONG_NAMED_BIT */, TransferCall_activeCallHold /* IMPORTED_LONG_NAMED_BIT */, TransferCall_heldCallConnected /* IMPORTED_LONG_NAMED_BIT */, TransferCall_heldCallHold /* IMPORTED_LONG_NAMED_BIT */, TransferCall_privateData /* IMPORTED_LONG_NAMED_BIT */, TransferCall_connectionsParameterInAck /* IMPORTED_LONG_NAMED_BIT */, connectionsParameterInAck /* IMPORTED_SHORT_NAMED_BIT */, TransferCall_endpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, TransferCall_resultingConnectionInformation /* IMPORTED_LONG_NAMED_BIT */, resultingConnectionInformation /* IMPORTED_SHORT_NAMED_BIT */, TransferCall_transferredCallInfoInAck /* IMPORTED_LONG_NAMED_BIT */, transferredCallInfoInAck /* IMPORTED_SHORT_NAMED_BIT */, TransferCall_privateDataInAck /* IMPORTED_LONG_NAMED_BIT */, TransferCall_deviceIDOnly /* IMPORTED_LONG_NAMED_BIT */, TransferCall_multipleDevices /* IMPORTED_LONG_NAMED_BIT */, TransferCall_ackModelMultiStep /* IMPORTED_LONG_NAMED_BIT */, _decode_TransferCall, _encode_TransferCall } from "../CSTA-capability-exchange/TransferCall.ta.mjs";


/**
 * @summary CallControlServList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallControlServList ::= SEQUENCE
 * {     acceptCall             [ 0] IMPLICIT AcceptCall             OPTIONAL,
 *     alternateCall             [ 1] IMPLICIT AlternateCall             OPTIONAL,
 *     answerCall             [ 2] IMPLICIT AnswerCall             OPTIONAL,
 *     callBack             [ 3] IMPLICIT CallBack                 OPTIONAL,
 *     callBackMessage         [ 4] IMPLICIT CallBackMessage             OPTIONAL,
 *     campOnCall             [ 5] IMPLICIT CampOnCall             OPTIONAL,
 *     clearCall             [ 6] IMPLICIT ClearCall             OPTIONAL,
 *     clearConnection         [ 7] IMPLICIT ClearConnection             OPTIONAL,
 *     conferenceCall             [ 8] IMPLICIT ConferenceCall             OPTIONAL,
 *     consultationCall         [ 9] IMPLICIT ConsultationCall             OPTIONAL,
 *     deflectCall             [10] IMPLICIT DeflectCall             OPTIONAL,
 *     dialDigits             [11] IMPLICIT DialDigits             OPTIONAL,
 *     directedPickupCall         [12] IMPLICIT DirectedPickupCall         OPTIONAL,
 *     groupPickupCall         [13] IMPLICIT GroupPickupCall             OPTIONAL,
 *     holdCall             [14] IMPLICIT HoldCall                 OPTIONAL,
 *     intrudeCall             [15] IMPLICIT IntrudeCall             OPTIONAL,
 *     joinCall             [16] IMPLICIT JoinCall                 OPTIONAL,
 *     makeCall             [17] IMPLICIT MakeCall                 OPTIONAL,
 *     makeConnection            [25] IMPLICIT MakeConnection            OPTIONAL,
 *     makePredictiveCall         [18] IMPLICIT MakePredictiveCall         OPTIONAL,
 *     parkCall             [19] IMPLICIT ParkCall                 OPTIONAL,
 *     reconnectCall             [20] IMPLICIT ReconnectCall             OPTIONAL,
 *     retrieveCall             [21] IMPLICIT RetrieveCall             OPTIONAL,
 *     sendMessage            [26] IMPLICIT SendMessage            OPTIONAL,
 *     singleStepConference         [22] IMPLICIT SingleStepConference         OPTIONAL,
 *     singleStepTransfer         [23] IMPLICIT SingleStepTransfer         OPTIONAL,
 *     transferCall             [24] IMPLICIT TransferCall             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallControlServList {
    constructor (
        /**
         * @summary `acceptCall`.
         * @public
         * @readonly
         */
        readonly acceptCall: OPTIONAL<AcceptCall>,
        /**
         * @summary `alternateCall`.
         * @public
         * @readonly
         */
        readonly alternateCall: OPTIONAL<AlternateCall>,
        /**
         * @summary `answerCall`.
         * @public
         * @readonly
         */
        readonly answerCall: OPTIONAL<AnswerCall>,
        /**
         * @summary `callBack`.
         * @public
         * @readonly
         */
        readonly callBack: OPTIONAL<CallBack>,
        /**
         * @summary `callBackMessage`.
         * @public
         * @readonly
         */
        readonly callBackMessage: OPTIONAL<CallBackMessage>,
        /**
         * @summary `campOnCall`.
         * @public
         * @readonly
         */
        readonly campOnCall: OPTIONAL<CampOnCall>,
        /**
         * @summary `clearCall`.
         * @public
         * @readonly
         */
        readonly clearCall: OPTIONAL<ClearCall>,
        /**
         * @summary `clearConnection`.
         * @public
         * @readonly
         */
        readonly clearConnection: OPTIONAL<ClearConnection>,
        /**
         * @summary `conferenceCall`.
         * @public
         * @readonly
         */
        readonly conferenceCall: OPTIONAL<ConferenceCall>,
        /**
         * @summary `consultationCall`.
         * @public
         * @readonly
         */
        readonly consultationCall: OPTIONAL<ConsultationCall>,
        /**
         * @summary `deflectCall`.
         * @public
         * @readonly
         */
        readonly deflectCall: OPTIONAL<DeflectCall>,
        /**
         * @summary `dialDigits`.
         * @public
         * @readonly
         */
        readonly dialDigits: OPTIONAL<DialDigits>,
        /**
         * @summary `directedPickupCall`.
         * @public
         * @readonly
         */
        readonly directedPickupCall: OPTIONAL<DirectedPickupCall>,
        /**
         * @summary `groupPickupCall`.
         * @public
         * @readonly
         */
        readonly groupPickupCall: OPTIONAL<GroupPickupCall>,
        /**
         * @summary `holdCall`.
         * @public
         * @readonly
         */
        readonly holdCall: OPTIONAL<HoldCall>,
        /**
         * @summary `intrudeCall`.
         * @public
         * @readonly
         */
        readonly intrudeCall: OPTIONAL<IntrudeCall>,
        /**
         * @summary `joinCall`.
         * @public
         * @readonly
         */
        readonly joinCall: OPTIONAL<JoinCall>,
        /**
         * @summary `makeCall`.
         * @public
         * @readonly
         */
        readonly makeCall: OPTIONAL<MakeCall>,
        /**
         * @summary `makeConnection`.
         * @public
         * @readonly
         */
        readonly makeConnection: OPTIONAL<MakeConnection>,
        /**
         * @summary `makePredictiveCall`.
         * @public
         * @readonly
         */
        readonly makePredictiveCall: OPTIONAL<MakePredictiveCall>,
        /**
         * @summary `parkCall`.
         * @public
         * @readonly
         */
        readonly parkCall: OPTIONAL<ParkCall>,
        /**
         * @summary `reconnectCall`.
         * @public
         * @readonly
         */
        readonly reconnectCall: OPTIONAL<ReconnectCall>,
        /**
         * @summary `retrieveCall`.
         * @public
         * @readonly
         */
        readonly retrieveCall: OPTIONAL<RetrieveCall>,
        /**
         * @summary `sendMessage`.
         * @public
         * @readonly
         */
        readonly sendMessage: OPTIONAL<SendMessage>,
        /**
         * @summary `singleStepConference`.
         * @public
         * @readonly
         */
        readonly singleStepConference: OPTIONAL<SingleStepConference>,
        /**
         * @summary `singleStepTransfer`.
         * @public
         * @readonly
         */
        readonly singleStepTransfer: OPTIONAL<SingleStepTransfer>,
        /**
         * @summary `transferCall`.
         * @public
         * @readonly
         */
        readonly transferCall: OPTIONAL<TransferCall>
    ) {}

    /**
     * @summary Restructures an object into a CallControlServList
     * @description
     * 
     * This takes an `object` and converts it to a `CallControlServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallControlServList`.
     * @returns {CallControlServList}
     */
    public static _from_object (_o: { [_K in keyof (CallControlServList)]: (CallControlServList)[_K] }): CallControlServList {
        return new CallControlServList(_o.acceptCall, _o.alternateCall, _o.answerCall, _o.callBack, _o.callBackMessage, _o.campOnCall, _o.clearCall, _o.clearConnection, _o.conferenceCall, _o.consultationCall, _o.deflectCall, _o.dialDigits, _o.directedPickupCall, _o.groupPickupCall, _o.holdCall, _o.intrudeCall, _o.joinCall, _o.makeCall, _o.makeConnection, _o.makePredictiveCall, _o.parkCall, _o.reconnectCall, _o.retrieveCall, _o.sendMessage, _o.singleStepConference, _o.singleStepTransfer, _o.transferCall);
    }


}

/**
 * @summary The Leading Root Component Types of CallControlServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallControlServList: $.ComponentSpec[] = [
    new $.ComponentSpec("acceptCall", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("alternateCall", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("answerCall", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("callBack", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("callBackMessage", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("campOnCall", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("clearCall", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("clearConnection", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("conferenceCall", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("consultationCall", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("deflectCall", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("dialDigits", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("directedPickupCall", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("groupPickupCall", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("holdCall", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("intrudeCall", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("joinCall", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("makeCall", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("makeConnection", true, $.hasTag(_TagClass.context, 25), undefined, undefined),
    new $.ComponentSpec("makePredictiveCall", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("parkCall", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("reconnectCall", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("retrieveCall", true, $.hasTag(_TagClass.context, 21), undefined, undefined),
    new $.ComponentSpec("sendMessage", true, $.hasTag(_TagClass.context, 26), undefined, undefined),
    new $.ComponentSpec("singleStepConference", true, $.hasTag(_TagClass.context, 22), undefined, undefined),
    new $.ComponentSpec("singleStepTransfer", true, $.hasTag(_TagClass.context, 23), undefined, undefined),
    new $.ComponentSpec("transferCall", true, $.hasTag(_TagClass.context, 24), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallControlServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallControlServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallControlServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallControlServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallControlServList: $.ASN1Decoder<CallControlServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallControlServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallControlServList (el: _Element): CallControlServList {
    if (!_cached_decoder_for_CallControlServList) { _cached_decoder_for_CallControlServList = function (el: _Element): CallControlServList {
    let acceptCall: OPTIONAL<AcceptCall>;
    let alternateCall: OPTIONAL<AlternateCall>;
    let answerCall: OPTIONAL<AnswerCall>;
    let callBack: OPTIONAL<CallBack>;
    let callBackMessage: OPTIONAL<CallBackMessage>;
    let campOnCall: OPTIONAL<CampOnCall>;
    let clearCall: OPTIONAL<ClearCall>;
    let clearConnection: OPTIONAL<ClearConnection>;
    let conferenceCall: OPTIONAL<ConferenceCall>;
    let consultationCall: OPTIONAL<ConsultationCall>;
    let deflectCall: OPTIONAL<DeflectCall>;
    let dialDigits: OPTIONAL<DialDigits>;
    let directedPickupCall: OPTIONAL<DirectedPickupCall>;
    let groupPickupCall: OPTIONAL<GroupPickupCall>;
    let holdCall: OPTIONAL<HoldCall>;
    let intrudeCall: OPTIONAL<IntrudeCall>;
    let joinCall: OPTIONAL<JoinCall>;
    let makeCall: OPTIONAL<MakeCall>;
    let makeConnection: OPTIONAL<MakeConnection>;
    let makePredictiveCall: OPTIONAL<MakePredictiveCall>;
    let parkCall: OPTIONAL<ParkCall>;
    let reconnectCall: OPTIONAL<ReconnectCall>;
    let retrieveCall: OPTIONAL<RetrieveCall>;
    let sendMessage: OPTIONAL<SendMessage>;
    let singleStepConference: OPTIONAL<SingleStepConference>;
    let singleStepTransfer: OPTIONAL<SingleStepTransfer>;
    let transferCall: OPTIONAL<TransferCall>;
    const callbacks: $.DecodingMap = {
        "acceptCall": (_el: _Element): void => { acceptCall = $._decode_implicit<AcceptCall>(() => _decode_AcceptCall)(_el); },
        "alternateCall": (_el: _Element): void => { alternateCall = $._decode_implicit<AlternateCall>(() => _decode_AlternateCall)(_el); },
        "answerCall": (_el: _Element): void => { answerCall = $._decode_implicit<AnswerCall>(() => _decode_AnswerCall)(_el); },
        "callBack": (_el: _Element): void => { callBack = $._decode_implicit<CallBack>(() => _decode_CallBack)(_el); },
        "callBackMessage": (_el: _Element): void => { callBackMessage = $._decode_implicit<CallBackMessage>(() => _decode_CallBackMessage)(_el); },
        "campOnCall": (_el: _Element): void => { campOnCall = $._decode_implicit<CampOnCall>(() => _decode_CampOnCall)(_el); },
        "clearCall": (_el: _Element): void => { clearCall = $._decode_implicit<ClearCall>(() => _decode_ClearCall)(_el); },
        "clearConnection": (_el: _Element): void => { clearConnection = $._decode_implicit<ClearConnection>(() => _decode_ClearConnection)(_el); },
        "conferenceCall": (_el: _Element): void => { conferenceCall = $._decode_implicit<ConferenceCall>(() => _decode_ConferenceCall)(_el); },
        "consultationCall": (_el: _Element): void => { consultationCall = $._decode_implicit<ConsultationCall>(() => _decode_ConsultationCall)(_el); },
        "deflectCall": (_el: _Element): void => { deflectCall = $._decode_implicit<DeflectCall>(() => _decode_DeflectCall)(_el); },
        "dialDigits": (_el: _Element): void => { dialDigits = $._decode_implicit<DialDigits>(() => _decode_DialDigits)(_el); },
        "directedPickupCall": (_el: _Element): void => { directedPickupCall = $._decode_implicit<DirectedPickupCall>(() => _decode_DirectedPickupCall)(_el); },
        "groupPickupCall": (_el: _Element): void => { groupPickupCall = $._decode_implicit<GroupPickupCall>(() => _decode_GroupPickupCall)(_el); },
        "holdCall": (_el: _Element): void => { holdCall = $._decode_implicit<HoldCall>(() => _decode_HoldCall)(_el); },
        "intrudeCall": (_el: _Element): void => { intrudeCall = $._decode_implicit<IntrudeCall>(() => _decode_IntrudeCall)(_el); },
        "joinCall": (_el: _Element): void => { joinCall = $._decode_implicit<JoinCall>(() => _decode_JoinCall)(_el); },
        "makeCall": (_el: _Element): void => { makeCall = $._decode_implicit<MakeCall>(() => _decode_MakeCall)(_el); },
        "makeConnection": (_el: _Element): void => { makeConnection = $._decode_implicit<MakeConnection>(() => _decode_MakeConnection)(_el); },
        "makePredictiveCall": (_el: _Element): void => { makePredictiveCall = $._decode_implicit<MakePredictiveCall>(() => _decode_MakePredictiveCall)(_el); },
        "parkCall": (_el: _Element): void => { parkCall = $._decode_implicit<ParkCall>(() => _decode_ParkCall)(_el); },
        "reconnectCall": (_el: _Element): void => { reconnectCall = $._decode_implicit<ReconnectCall>(() => _decode_ReconnectCall)(_el); },
        "retrieveCall": (_el: _Element): void => { retrieveCall = $._decode_implicit<RetrieveCall>(() => _decode_RetrieveCall)(_el); },
        "sendMessage": (_el: _Element): void => { sendMessage = $._decode_implicit<SendMessage>(() => _decode_SendMessage)(_el); },
        "singleStepConference": (_el: _Element): void => { singleStepConference = $._decode_implicit<SingleStepConference>(() => _decode_SingleStepConference)(_el); },
        "singleStepTransfer": (_el: _Element): void => { singleStepTransfer = $._decode_implicit<SingleStepTransfer>(() => _decode_SingleStepTransfer)(_el); },
        "transferCall": (_el: _Element): void => { transferCall = $._decode_implicit<TransferCall>(() => _decode_TransferCall)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallControlServList,
        _extension_additions_list_spec_for_CallControlServList,
        _root_component_type_list_2_spec_for_CallControlServList,
        undefined,
    );
    return new CallControlServList(
        acceptCall,
        alternateCall,
        answerCall,
        callBack,
        callBackMessage,
        campOnCall,
        clearCall,
        clearConnection,
        conferenceCall,
        consultationCall,
        deflectCall,
        dialDigits,
        directedPickupCall,
        groupPickupCall,
        holdCall,
        intrudeCall,
        joinCall,
        makeCall,
        makeConnection,
        makePredictiveCall,
        parkCall,
        reconnectCall,
        retrieveCall,
        sendMessage,
        singleStepConference,
        singleStepTransfer,
        transferCall
    );
}; }
    return _cached_decoder_for_CallControlServList(el);
}

let _cached_encoder_for_CallControlServList: $.ASN1Encoder<CallControlServList> | null = null;

/**
 * @summary Encodes a(n) CallControlServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallControlServList, encoded as an ASN.1 Element.
 */
export
function _encode_CallControlServList (value: CallControlServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallControlServList) { _cached_encoder_for_CallControlServList = function (value: CallControlServList, elGetter: $.ASN1Encoder<CallControlServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.acceptCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AcceptCall, $.BER)(value.acceptCall, $.BER)),
            /* IF_ABSENT  */ ((value.alternateCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AlternateCall, $.BER)(value.alternateCall, $.BER)),
            /* IF_ABSENT  */ ((value.answerCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AnswerCall, $.BER)(value.answerCall, $.BER)),
            /* IF_ABSENT  */ ((value.callBack === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CallBack, $.BER)(value.callBack, $.BER)),
            /* IF_ABSENT  */ ((value.callBackMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CallBackMessage, $.BER)(value.callBackMessage, $.BER)),
            /* IF_ABSENT  */ ((value.campOnCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CampOnCall, $.BER)(value.campOnCall, $.BER)),
            /* IF_ABSENT  */ ((value.clearCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ClearCall, $.BER)(value.clearCall, $.BER)),
            /* IF_ABSENT  */ ((value.clearConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ClearConnection, $.BER)(value.clearConnection, $.BER)),
            /* IF_ABSENT  */ ((value.conferenceCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ConferenceCall, $.BER)(value.conferenceCall, $.BER)),
            /* IF_ABSENT  */ ((value.consultationCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ConsultationCall, $.BER)(value.consultationCall, $.BER)),
            /* IF_ABSENT  */ ((value.deflectCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_DeflectCall, $.BER)(value.deflectCall, $.BER)),
            /* IF_ABSENT  */ ((value.dialDigits === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_DialDigits, $.BER)(value.dialDigits, $.BER)),
            /* IF_ABSENT  */ ((value.directedPickupCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_DirectedPickupCall, $.BER)(value.directedPickupCall, $.BER)),
            /* IF_ABSENT  */ ((value.groupPickupCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_GroupPickupCall, $.BER)(value.groupPickupCall, $.BER)),
            /* IF_ABSENT  */ ((value.holdCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_HoldCall, $.BER)(value.holdCall, $.BER)),
            /* IF_ABSENT  */ ((value.intrudeCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_IntrudeCall, $.BER)(value.intrudeCall, $.BER)),
            /* IF_ABSENT  */ ((value.joinCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_JoinCall, $.BER)(value.joinCall, $.BER)),
            /* IF_ABSENT  */ ((value.makeCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_MakeCall, $.BER)(value.makeCall, $.BER)),
            /* IF_ABSENT  */ ((value.makeConnection === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_MakeConnection, $.BER)(value.makeConnection, $.BER)),
            /* IF_ABSENT  */ ((value.makePredictiveCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_MakePredictiveCall, $.BER)(value.makePredictiveCall, $.BER)),
            /* IF_ABSENT  */ ((value.parkCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_ParkCall, $.BER)(value.parkCall, $.BER)),
            /* IF_ABSENT  */ ((value.reconnectCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_ReconnectCall, $.BER)(value.reconnectCall, $.BER)),
            /* IF_ABSENT  */ ((value.retrieveCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_RetrieveCall, $.BER)(value.retrieveCall, $.BER)),
            /* IF_ABSENT  */ ((value.sendMessage === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_SendMessage, $.BER)(value.sendMessage, $.BER)),
            /* IF_ABSENT  */ ((value.singleStepConference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_SingleStepConference, $.BER)(value.singleStepConference, $.BER)),
            /* IF_ABSENT  */ ((value.singleStepTransfer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_SingleStepTransfer, $.BER)(value.singleStepTransfer, $.BER)),
            /* IF_ABSENT  */ ((value.transferCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => _encode_TransferCall, $.BER)(value.transferCall, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallControlServList(value, elGetter);
}


/* eslint-enable */
