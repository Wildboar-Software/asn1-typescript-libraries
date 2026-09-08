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
import { Bridged, Bridged_correlatorData /* IMPORTED_LONG_NAMED_BIT */, Bridged_userData /* IMPORTED_LONG_NAMED_BIT */, Bridged_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Bridged_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Bridged_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Bridged_bridgedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, Bridged_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Bridged_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, Bridged_privateData /* IMPORTED_LONG_NAMED_BIT */, Bridged_locationinfoList /* IMPORTED_LONG_NAMED_BIT */, locationinfoList /* IMPORTED_SHORT_NAMED_BIT */, _decode_Bridged, _encode_Bridged } from "../CSTA-capability-exchange/Bridged.ta.mjs";
// export { Bridged, Bridged_correlatorData /* IMPORTED_LONG_NAMED_BIT */, Bridged_userData /* IMPORTED_LONG_NAMED_BIT */, Bridged_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Bridged_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Bridged_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Bridged_bridgedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, Bridged_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Bridged_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, Bridged_privateData /* IMPORTED_LONG_NAMED_BIT */, Bridged_locationinfoList /* IMPORTED_LONG_NAMED_BIT */, locationinfoList /* IMPORTED_SHORT_NAMED_BIT */, _decode_Bridged, _encode_Bridged } from "../CSTA-capability-exchange/Bridged.ta.mjs";
import { CallCleared, CallCleared_correlatorData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_userData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, CallCleared_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, CallCleared_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_privateData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, _decode_CallCleared, _encode_CallCleared } from "../CSTA-capability-exchange/CallCleared.ta.mjs";
// export { CallCleared, CallCleared_correlatorData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_userData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, CallCleared_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, CallCleared_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_privateData /* IMPORTED_LONG_NAMED_BIT */, CallCleared_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, _decode_CallCleared, _encode_CallCleared } from "../CSTA-capability-exchange/CallCleared.ta.mjs";
import { Conferenced, Conferenced_confereceConnectionsEndpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, confereceConnectionsEndpointDeviceID /* IMPORTED_SHORT_NAMED_BIT */, Conferenced_confereceConnectionsresultingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, confereceConnectionsresultingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Conferenced_userData /* IMPORTED_LONG_NAMED_BIT */, Conferenced_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Conferenced_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Conferenced_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Conferenced_bridgedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, Conferenced_lannguagePreferences /* IMPORTED_LONG_NAMED_BIT */, lannguagePreferences /* IMPORTED_SHORT_NAMED_BIT */, Conferenced_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Conferenced_privateData /* IMPORTED_LONG_NAMED_BIT */, Conferenced_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Conferenced, _encode_Conferenced } from "../CSTA-capability-exchange/Conferenced.ta.mjs";
// export { Conferenced, Conferenced_confereceConnectionsEndpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, confereceConnectionsEndpointDeviceID /* IMPORTED_SHORT_NAMED_BIT */, Conferenced_confereceConnectionsresultingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, confereceConnectionsresultingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Conferenced_userData /* IMPORTED_LONG_NAMED_BIT */, Conferenced_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Conferenced_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Conferenced_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Conferenced_bridgedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, Conferenced_lannguagePreferences /* IMPORTED_LONG_NAMED_BIT */, lannguagePreferences /* IMPORTED_SHORT_NAMED_BIT */, Conferenced_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Conferenced_privateData /* IMPORTED_LONG_NAMED_BIT */, Conferenced_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Conferenced, _encode_Conferenced } from "../CSTA-capability-exchange/Conferenced.ta.mjs";
import { ConnectionCleared, ConnectionCleared_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_userData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingInfo /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_numberUnitsNumberOfChargingUnits /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_numberUnitsTypeOfUnits /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_numberUnitsNumberOfCurrencyUnits /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_typeOfChargingInfoSubTotal /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_typeOfChargingInfoTotal /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierAThousandth /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierAHundredth /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierATenth /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierOne /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierTen /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierHundred /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierThousand /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_droppedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, droppedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ConnectionCleared_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_privateData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_ConnectionCleared, _encode_ConnectionCleared } from "../CSTA-capability-exchange/ConnectionCleared.ta.mjs";
// export { ConnectionCleared, ConnectionCleared_correlatorData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_userData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingInfo /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_numberUnitsNumberOfChargingUnits /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_numberUnitsTypeOfUnits /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_numberUnitsNumberOfCurrencyUnits /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_typeOfChargingInfoSubTotal /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_typeOfChargingInfoTotal /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierAThousandth /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierAHundredth /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierATenth /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierOne /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierTen /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierHundred /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_chargingMultiplierThousand /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_droppedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, droppedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ConnectionCleared_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_privateData /* IMPORTED_LONG_NAMED_BIT */, ConnectionCleared_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_ConnectionCleared, _encode_ConnectionCleared } from "../CSTA-capability-exchange/ConnectionCleared.ta.mjs";
import { Delivered, Delivered_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Delivered_userData /* IMPORTED_LONG_NAMED_BIT */, Delivered_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Delivered_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Delivered_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Delivered_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Delivered_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Delivered_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, Delivered_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Delivered_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Delivered_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Delivered_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Delivered_privateData /* IMPORTED_LONG_NAMED_BIT */, Delivered_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Delivered, _encode_Delivered } from "../CSTA-capability-exchange/Delivered.ta.mjs";
// export { Delivered, Delivered_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Delivered_userData /* IMPORTED_LONG_NAMED_BIT */, Delivered_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Delivered_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Delivered_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Delivered_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Delivered_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Delivered_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, Delivered_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Delivered_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Delivered_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Delivered_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Delivered_privateData /* IMPORTED_LONG_NAMED_BIT */, Delivered_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Delivered, _encode_Delivered } from "../CSTA-capability-exchange/Delivered.ta.mjs";
import { DigitsDialed, DigitsDialed_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_diallingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, diallingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, DigitsDialed_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_privateData /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_DigitsDialed, _encode_DigitsDialed } from "../CSTA-capability-exchange/DigitsDialed.ta.mjs";
// export { DigitsDialed, DigitsDialed_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_diallingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, diallingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, DigitsDialed_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_privateData /* IMPORTED_LONG_NAMED_BIT */, DigitsDialed_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_DigitsDialed, _encode_DigitsDialed } from "../CSTA-capability-exchange/DigitsDialed.ta.mjs";
import { Diverted, Diverted_callingDevice /* IMPORTED_LONG_NAMED_BIT */, callingDevice /* IMPORTED_SHORT_NAMED_BIT */, Diverted_calledDevice /* IMPORTED_LONG_NAMED_BIT */, Diverted_userData /* IMPORTED_LONG_NAMED_BIT */, Diverted_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Diverted_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Diverted_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Diverted_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, Diverted_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Diverted_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Diverted_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Diverted_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Diverted_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Diverted_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Diverted_privateData /* IMPORTED_LONG_NAMED_BIT */, Diverted_sendsDivertedToAll /* IMPORTED_LONG_NAMED_BIT */, sendsDivertedToAll /* IMPORTED_SHORT_NAMED_BIT */, Diverted_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Diverted, _encode_Diverted } from "../CSTA-capability-exchange/Diverted.ta.mjs";
// export { Diverted, Diverted_callingDevice /* IMPORTED_LONG_NAMED_BIT */, callingDevice /* IMPORTED_SHORT_NAMED_BIT */, Diverted_calledDevice /* IMPORTED_LONG_NAMED_BIT */, Diverted_userData /* IMPORTED_LONG_NAMED_BIT */, Diverted_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Diverted_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Diverted_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Diverted_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, Diverted_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Diverted_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Diverted_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Diverted_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Diverted_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Diverted_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Diverted_privateData /* IMPORTED_LONG_NAMED_BIT */, Diverted_sendsDivertedToAll /* IMPORTED_LONG_NAMED_BIT */, sendsDivertedToAll /* IMPORTED_SHORT_NAMED_BIT */, Diverted_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Diverted, _encode_Diverted } from "../CSTA-capability-exchange/Diverted.ta.mjs";
import { Established, Established_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Established_userData /* IMPORTED_LONG_NAMED_BIT */, Established_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Established_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Established_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Established_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Established_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Established_establishedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, establishedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Established_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Established_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Established_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Established_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Established_privateData /* IMPORTED_LONG_NAMED_BIT */, Established_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Established, _encode_Established } from "../CSTA-capability-exchange/Established.ta.mjs";
// export { Established, Established_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Established_userData /* IMPORTED_LONG_NAMED_BIT */, Established_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Established_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Established_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Established_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Established_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Established_establishedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, establishedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Established_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Established_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Established_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Established_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Established_privateData /* IMPORTED_LONG_NAMED_BIT */, Established_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Established, _encode_Established } from "../CSTA-capability-exchange/Established.ta.mjs";
import { Failed, Failed_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Failed_userData /* IMPORTED_LONG_NAMED_BIT */, Failed_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Failed_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Failed_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Failed_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Failed_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Failed_failedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, failedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Failed_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Failed_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Failed_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Failed_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Failed_privateData /* IMPORTED_LONG_NAMED_BIT */, Failed_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, Failed_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Failed, _encode_Failed } from "../CSTA-capability-exchange/Failed.ta.mjs";
// export { Failed, Failed_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Failed_userData /* IMPORTED_LONG_NAMED_BIT */, Failed_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Failed_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Failed_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Failed_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Failed_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Failed_failedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, failedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Failed_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Failed_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Failed_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Failed_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Failed_privateData /* IMPORTED_LONG_NAMED_BIT */, Failed_callIDOnly /* IMPORTED_LONG_NAMED_BIT */, Failed_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Failed, _encode_Failed } from "../CSTA-capability-exchange/Failed.ta.mjs";
import { Held, Held_correlatorData /* IMPORTED_LONG_NAMED_BIT */, Held_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Held_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Held_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Held_heldConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, heldConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Held_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, Held_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Held_privateData /* IMPORTED_LONG_NAMED_BIT */, Held_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Held, _encode_Held } from "../CSTA-capability-exchange/Held.ta.mjs";
// export { Held, Held_correlatorData /* IMPORTED_LONG_NAMED_BIT */, Held_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Held_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Held_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Held_heldConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, heldConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Held_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, Held_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Held_privateData /* IMPORTED_LONG_NAMED_BIT */, Held_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Held, _encode_Held } from "../CSTA-capability-exchange/Held.ta.mjs";
import { NetwCapsChanged, NetwCapsChanged_progressLocationUser /* IMPORTED_LONG_NAMED_BIT */, progressLocationUser /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPrivateServLocal /* IMPORTED_LONG_NAMED_BIT */, progressLocationPrivateServLocal /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPublicServLocal /* IMPORTED_LONG_NAMED_BIT */, progressLocationPublicServLocal /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationTransit /* IMPORTED_LONG_NAMED_BIT */, progressLocationTransit /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPublicServRemote /* IMPORTED_LONG_NAMED_BIT */, progressLocationPublicServRemote /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPrivateServRemote /* IMPORTED_LONG_NAMED_BIT */, progressLocationPrivateServRemote /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationLocal /* IMPORTED_LONG_NAMED_BIT */, progressLocationLocal /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationInternational /* IMPORTED_LONG_NAMED_BIT */, progressLocationInternational /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationNetwBeyondInterworking /* IMPORTED_LONG_NAMED_BIT */, progressLocationNetwBeyondInterworking /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationOther /* IMPORTED_LONG_NAMED_BIT */, progressLocationOther /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressDescriptionISDN /* IMPORTED_LONG_NAMED_BIT */, progressDescriptionISDN /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressDescriptionQSIG /* IMPORTED_LONG_NAMED_BIT */, progressDescriptionQSIG /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressDescriptionOther /* IMPORTED_LONG_NAMED_BIT */, progressDescriptionOther /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_userData /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkNonISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkNonISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkOther /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedParameter /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedBridged /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedCallCleared /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedConferenced /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedConnectionCleared /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedDelivered /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedDigitsDialed /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedDiverted /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedEstablished /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedFailed /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedHeld /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedNetwCapsChanged /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedNetwReached /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedOffered /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedOriginated /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedQueued /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedRetrieved /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedServiceInitiated /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedTransferred /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_outboundConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_NetwCapsChanged, _encode_NetwCapsChanged } from "../CSTA-capability-exchange/NetwCapsChanged.ta.mjs";
// export { NetwCapsChanged, NetwCapsChanged_progressLocationUser /* IMPORTED_LONG_NAMED_BIT */, progressLocationUser /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPrivateServLocal /* IMPORTED_LONG_NAMED_BIT */, progressLocationPrivateServLocal /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPublicServLocal /* IMPORTED_LONG_NAMED_BIT */, progressLocationPublicServLocal /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationTransit /* IMPORTED_LONG_NAMED_BIT */, progressLocationTransit /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPublicServRemote /* IMPORTED_LONG_NAMED_BIT */, progressLocationPublicServRemote /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationPrivateServRemote /* IMPORTED_LONG_NAMED_BIT */, progressLocationPrivateServRemote /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationLocal /* IMPORTED_LONG_NAMED_BIT */, progressLocationLocal /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationInternational /* IMPORTED_LONG_NAMED_BIT */, progressLocationInternational /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationNetwBeyondInterworking /* IMPORTED_LONG_NAMED_BIT */, progressLocationNetwBeyondInterworking /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressLocationOther /* IMPORTED_LONG_NAMED_BIT */, progressLocationOther /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressDescriptionISDN /* IMPORTED_LONG_NAMED_BIT */, progressDescriptionISDN /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressDescriptionQSIG /* IMPORTED_LONG_NAMED_BIT */, progressDescriptionQSIG /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_progressDescriptionOther /* IMPORTED_LONG_NAMED_BIT */, progressDescriptionOther /* IMPORTED_SHORT_NAMED_BIT */, NetwCapsChanged_userData /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkNonISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkNonISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_typeOfNetworkOther /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedParameter /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedBridged /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedCallCleared /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedConferenced /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedConnectionCleared /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedDelivered /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedDigitsDialed /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedDiverted /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedEstablished /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedFailed /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedHeld /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedNetwCapsChanged /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedNetwReached /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedOffered /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedOriginated /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedQueued /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedRetrieved /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedServiceInitiated /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_eventsProvidedTransferred /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_outboundConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_privateData /* IMPORTED_LONG_NAMED_BIT */, NetwCapsChanged_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_NetwCapsChanged, _encode_NetwCapsChanged } from "../CSTA-capability-exchange/NetwCapsChanged.ta.mjs";
import { NetwReached, NetwReached_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, NetwReached_userData /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkNonISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkNonISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkOther /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedParameter /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedBridged /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedCallCleared /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedConferenced /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedConnectionCleared /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedDelivered /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedDigitsDialed /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedDiverted /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedEstablished /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedFailed /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedHeld /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedNetwCapsChanged /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedNetwReached /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedOffered /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedOriginated /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedQueued /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedRetrieved /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedServiceInitiated /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedTransferred /* IMPORTED_LONG_NAMED_BIT */, NetwReached_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, NetwReached_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwReached_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwReached_outboundConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, NetwReached_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, NetwReached_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, NetwReached_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, NetwReached_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, NetwReached_privateData /* IMPORTED_LONG_NAMED_BIT */, NetwReached_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_NetwReached, _encode_NetwReached } from "../CSTA-capability-exchange/NetwReached.ta.mjs";
// export { NetwReached, NetwReached_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, NetwReached_userData /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkNonISDNPublic /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkNonISDNPrivate /* IMPORTED_LONG_NAMED_BIT */, NetwReached_typeOfNetworkOther /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedParameter /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedBridged /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedCallCleared /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedConferenced /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedConnectionCleared /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedDelivered /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedDigitsDialed /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedDiverted /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedEstablished /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedFailed /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedHeld /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedNetwCapsChanged /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedNetwReached /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedOffered /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedOriginated /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedQueued /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedRetrieved /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedServiceInitiated /* IMPORTED_LONG_NAMED_BIT */, NetwReached_eventsProvidedTransferred /* IMPORTED_LONG_NAMED_BIT */, NetwReached_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, NetwReached_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwReached_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, NetwReached_outboundConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, NetwReached_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, NetwReached_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, NetwReached_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, NetwReached_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, NetwReached_privateData /* IMPORTED_LONG_NAMED_BIT */, NetwReached_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_NetwReached, _encode_NetwReached } from "../CSTA-capability-exchange/NetwReached.ta.mjs";
import { Offered, Offered_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Offered_userData /* IMPORTED_LONG_NAMED_BIT */, Offered_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Offered_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Offered_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Offered_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Offered_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Offered_offeredConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, offeredConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Offered_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Offered_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Offered_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Offered_deciceHistory /* IMPORTED_LONG_NAMED_BIT */, deciceHistory /* IMPORTED_SHORT_NAMED_BIT */, Offered_privateData /* IMPORTED_LONG_NAMED_BIT */, Offered_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Offered, _encode_Offered } from "../CSTA-capability-exchange/Offered.ta.mjs";
// export { Offered, Offered_originatingNIDConnection /* IMPORTED_LONG_NAMED_BIT */, Offered_userData /* IMPORTED_LONG_NAMED_BIT */, Offered_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Offered_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Offered_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Offered_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Offered_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Offered_offeredConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, offeredConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Offered_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Offered_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Offered_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Offered_deciceHistory /* IMPORTED_LONG_NAMED_BIT */, deciceHistory /* IMPORTED_SHORT_NAMED_BIT */, Offered_privateData /* IMPORTED_LONG_NAMED_BIT */, Offered_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Offered, _encode_Offered } from "../CSTA-capability-exchange/Offered.ta.mjs";
import { Originated, Originated_originatingDevice /* IMPORTED_LONG_NAMED_BIT */, originatingDevice /* IMPORTED_SHORT_NAMED_BIT */, Originated_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Originated_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Originated_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Originated_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Originated_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Originated_originatedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, originatedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Originated_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Originated_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Originated_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Originated_privateData /* IMPORTED_LONG_NAMED_BIT */, Originated_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Originated, _encode_Originated } from "../CSTA-capability-exchange/Originated.ta.mjs";
// export { Originated, Originated_originatingDevice /* IMPORTED_LONG_NAMED_BIT */, originatingDevice /* IMPORTED_SHORT_NAMED_BIT */, Originated_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Originated_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Originated_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Originated_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Originated_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Originated_originatedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, originatedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Originated_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Originated_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Originated_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Originated_privateData /* IMPORTED_LONG_NAMED_BIT */, Originated_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Originated, _encode_Originated } from "../CSTA-capability-exchange/Originated.ta.mjs";
import { Queued, Queued_numberQueued /* IMPORTED_LONG_NAMED_BIT */, numberQueued /* IMPORTED_SHORT_NAMED_BIT */, Queued_callsInFront /* IMPORTED_LONG_NAMED_BIT */, callsInFront /* IMPORTED_SHORT_NAMED_BIT */, Queued_userData /* IMPORTED_LONG_NAMED_BIT */, Queued_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Queued_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Queued_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Queued_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Queued_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Queued_queuedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, queuedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Queued_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Queued_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Queued_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Queued_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Queued_privateData /* IMPORTED_LONG_NAMED_BIT */, Queued_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Queued, _encode_Queued } from "../CSTA-capability-exchange/Queued.ta.mjs";
// export { Queued, Queued_numberQueued /* IMPORTED_LONG_NAMED_BIT */, numberQueued /* IMPORTED_SHORT_NAMED_BIT */, Queued_callsInFront /* IMPORTED_LONG_NAMED_BIT */, callsInFront /* IMPORTED_SHORT_NAMED_BIT */, Queued_userData /* IMPORTED_LONG_NAMED_BIT */, Queued_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Queued_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, Queued_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, Queued_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Queued_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Queued_queuedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, queuedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Queued_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, Queued_messageInfo /* IMPORTED_LONG_NAMED_BIT */, Queued_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Queued_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Queued_privateData /* IMPORTED_LONG_NAMED_BIT */, Queued_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_Queued, _encode_Queued } from "../CSTA-capability-exchange/Queued.ta.mjs";
import { Retrieved, Retrieved_correlatorData /* IMPORTED_LONG_NAMED_BIT */, Retrieved_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Retrieved_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Retrieved_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Retrieved_retrievedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, retrievedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Retrieved_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, Retrieved_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Retrieved_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Retrieved_privateData /* IMPORTED_LONG_NAMED_BIT */, Retrieved_locationInfoLiist /* IMPORTED_LONG_NAMED_BIT */, locationInfoLiist /* IMPORTED_SHORT_NAMED_BIT */, _decode_Retrieved, _encode_Retrieved } from "../CSTA-capability-exchange/Retrieved.ta.mjs";
// export { Retrieved, Retrieved_correlatorData /* IMPORTED_LONG_NAMED_BIT */, Retrieved_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Retrieved_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Retrieved_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Retrieved_retrievedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, retrievedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Retrieved_callLinkageData /* IMPORTED_LONG_NAMED_BIT */, Retrieved_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Retrieved_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Retrieved_privateData /* IMPORTED_LONG_NAMED_BIT */, Retrieved_locationInfoLiist /* IMPORTED_LONG_NAMED_BIT */, locationInfoLiist /* IMPORTED_SHORT_NAMED_BIT */, _decode_Retrieved, _encode_Retrieved } from "../CSTA-capability-exchange/Retrieved.ta.mjs";
import { ServiceInitiated, ServiceInitiated_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_initiatedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, initiatedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ServiceInitiated_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_messageInfo /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_privateData /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_calledDevice /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_ServiceInitiated, _encode_ServiceInitiated } from "../CSTA-capability-exchange/ServiceInitiated.ta.mjs";
// export { ServiceInitiated, ServiceInitiated_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_initiatedConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, initiatedConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, ServiceInitiated_netwCallingDevice /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_netwCalledDevice /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_subjectOfCall /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_messageInfo /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_privateData /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_calledDevice /* IMPORTED_LONG_NAMED_BIT */, ServiceInitiated_locationInfoList /* IMPORTED_LONG_NAMED_BIT */, _decode_ServiceInitiated, _encode_ServiceInitiated } from "../CSTA-capability-exchange/ServiceInitiated.ta.mjs";
import { Transferred, Transferred_transferredConnectionsEndpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, transferredConnectionsEndpointDeviceID /* IMPORTED_SHORT_NAMED_BIT */, Transferred_transferredConnectionsResultingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, transferredConnectionsResultingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Transferred_userData /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingInfo /* IMPORTED_LONG_NAMED_BIT */, Transferred_numberUnitsNumberOfChargingUnits /* IMPORTED_LONG_NAMED_BIT */, Transferred_numberUnitsTypeOfUnits /* IMPORTED_LONG_NAMED_BIT */, Transferred_numberUnitsNumberOfCurrencyUnits /* IMPORTED_LONG_NAMED_BIT */, Transferred_typeOfChargingInfoSubTotal /* IMPORTED_LONG_NAMED_BIT */, Transferred_typeOfChargingInfoTotal /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierAThousandth /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierAHundredth /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierATenth /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierOne /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierTen /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierHundred /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierThousand /* IMPORTED_LONG_NAMED_BIT */, Transferred_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Transferred_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Transferred_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Transferred_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, Transferred_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Transferred_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Transferred_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_Transferred, _encode_Transferred } from "../CSTA-capability-exchange/Transferred.ta.mjs";
// export { Transferred, Transferred_transferredConnectionsEndpointDeviceID /* IMPORTED_LONG_NAMED_BIT */, transferredConnectionsEndpointDeviceID /* IMPORTED_SHORT_NAMED_BIT */, Transferred_transferredConnectionsResultingConnectionInfo /* IMPORTED_LONG_NAMED_BIT */, transferredConnectionsResultingConnectionInfo /* IMPORTED_SHORT_NAMED_BIT */, Transferred_userData /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingInfo /* IMPORTED_LONG_NAMED_BIT */, Transferred_numberUnitsNumberOfChargingUnits /* IMPORTED_LONG_NAMED_BIT */, Transferred_numberUnitsTypeOfUnits /* IMPORTED_LONG_NAMED_BIT */, Transferred_numberUnitsNumberOfCurrencyUnits /* IMPORTED_LONG_NAMED_BIT */, Transferred_typeOfChargingInfoSubTotal /* IMPORTED_LONG_NAMED_BIT */, Transferred_typeOfChargingInfoTotal /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierAThousandth /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierAHundredth /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierATenth /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierOne /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierTen /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierHundred /* IMPORTED_LONG_NAMED_BIT */, Transferred_chargingMultiplierThousand /* IMPORTED_LONG_NAMED_BIT */, Transferred_servicesPermitted /* IMPORTED_LONG_NAMED_BIT */, Transferred_mediaCallCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Transferred_callCharacteristics /* IMPORTED_LONG_NAMED_BIT */, Transferred_connectionInfo /* IMPORTED_LONG_NAMED_BIT */, Transferred_languagePreferences /* IMPORTED_LONG_NAMED_BIT */, Transferred_deviceHistory /* IMPORTED_LONG_NAMED_BIT */, Transferred_privateData /* IMPORTED_LONG_NAMED_BIT */, _decode_Transferred, _encode_Transferred } from "../CSTA-capability-exchange/Transferred.ta.mjs";


/**
 * @summary CallControlEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallControlEvtsList ::= SEQUENCE
 * {     bridged             [ 0] IMPLICIT     Bridged         OPTIONAL,
 *     callCleared             [ 1] IMPLICIT     CallCleared         OPTIONAL,
 *     conferenced             [ 2] IMPLICIT     Conferenced         OPTIONAL,
 *     connectionCleared         [ 3] IMPLICIT     ConnectionCleared     OPTIONAL,
 *     delivered             [ 4] IMPLICIT     Delivered         OPTIONAL,
 *     digitsDialed             [ 5] IMPLICIT     DigitsDialed         OPTIONAL,
 *     diverted             [ 6] IMPLICIT     Diverted         OPTIONAL,
 *     established             [ 7] IMPLICIT     Established         OPTIONAL,
 *     failed                 [ 8] IMPLICIT     Failed             OPTIONAL,
 *     held                 [ 9] IMPLICIT     Held             OPTIONAL,
 *     netwCapsChanged         [10] IMPLICIT     NetwCapsChanged     OPTIONAL,
 *     netwReached             [11] IMPLICIT     NetwReached         OPTIONAL,
 *     offered             [12] IMPLICIT     Offered         OPTIONAL,
 *     originated             [13] IMPLICIT     Originated         OPTIONAL,
 *     queued                 [14] IMPLICIT     Queued             OPTIONAL,
 *     retrieved             [15] IMPLICIT     Retrieved         OPTIONAL,
 *     serviceInitiated         [16] IMPLICIT     ServiceInitiated     OPTIONAL,
 *     transferred             [17] IMPLICIT     Transferred         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CallControlEvtsList {
    constructor (
        /**
         * @summary `bridged`.
         * @public
         * @readonly
         */
        readonly bridged: OPTIONAL<Bridged>,
        /**
         * @summary `callCleared`.
         * @public
         * @readonly
         */
        readonly callCleared: OPTIONAL<CallCleared>,
        /**
         * @summary `conferenced`.
         * @public
         * @readonly
         */
        readonly conferenced: OPTIONAL<Conferenced>,
        /**
         * @summary `connectionCleared`.
         * @public
         * @readonly
         */
        readonly connectionCleared: OPTIONAL<ConnectionCleared>,
        /**
         * @summary `delivered`.
         * @public
         * @readonly
         */
        readonly delivered: OPTIONAL<Delivered>,
        /**
         * @summary `digitsDialed`.
         * @public
         * @readonly
         */
        readonly digitsDialed: OPTIONAL<DigitsDialed>,
        /**
         * @summary `diverted`.
         * @public
         * @readonly
         */
        readonly diverted: OPTIONAL<Diverted>,
        /**
         * @summary `established`.
         * @public
         * @readonly
         */
        readonly established: OPTIONAL<Established>,
        /**
         * @summary `failed`.
         * @public
         * @readonly
         */
        readonly failed: OPTIONAL<Failed>,
        /**
         * @summary `held`.
         * @public
         * @readonly
         */
        readonly held: OPTIONAL<Held>,
        /**
         * @summary `netwCapsChanged`.
         * @public
         * @readonly
         */
        readonly netwCapsChanged: OPTIONAL<NetwCapsChanged>,
        /**
         * @summary `netwReached`.
         * @public
         * @readonly
         */
        readonly netwReached: OPTIONAL<NetwReached>,
        /**
         * @summary `offered`.
         * @public
         * @readonly
         */
        readonly offered: OPTIONAL<Offered>,
        /**
         * @summary `originated`.
         * @public
         * @readonly
         */
        readonly originated: OPTIONAL<Originated>,
        /**
         * @summary `queued`.
         * @public
         * @readonly
         */
        readonly queued: OPTIONAL<Queued>,
        /**
         * @summary `retrieved`.
         * @public
         * @readonly
         */
        readonly retrieved: OPTIONAL<Retrieved>,
        /**
         * @summary `serviceInitiated`.
         * @public
         * @readonly
         */
        readonly serviceInitiated: OPTIONAL<ServiceInitiated>,
        /**
         * @summary `transferred`.
         * @public
         * @readonly
         */
        readonly transferred: OPTIONAL<Transferred>
    ) {}

    /**
     * @summary Restructures an object into a CallControlEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `CallControlEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallControlEvtsList`.
     * @returns {CallControlEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (CallControlEvtsList)]: (CallControlEvtsList)[_K] }): CallControlEvtsList {
        return new CallControlEvtsList(_o.bridged, _o.callCleared, _o.conferenced, _o.connectionCleared, _o.delivered, _o.digitsDialed, _o.diverted, _o.established, _o.failed, _o.held, _o.netwCapsChanged, _o.netwReached, _o.offered, _o.originated, _o.queued, _o.retrieved, _o.serviceInitiated, _o.transferred);
    }


}

/**
 * @summary The Leading Root Component Types of CallControlEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallControlEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("bridged", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("callCleared", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("conferenced", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("connectionCleared", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("delivered", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("digitsDialed", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("diverted", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("established", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("failed", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("held", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("netwCapsChanged", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("netwReached", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("offered", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("originated", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("queued", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("retrieved", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("serviceInitiated", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("transferred", true, $.hasTag(_TagClass.context, 17), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CallControlEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallControlEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallControlEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallControlEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallControlEvtsList: $.ASN1Decoder<CallControlEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallControlEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallControlEvtsList (el: _Element): CallControlEvtsList {
    if (!_cached_decoder_for_CallControlEvtsList) { _cached_decoder_for_CallControlEvtsList = function (el: _Element): CallControlEvtsList {
    let bridged: OPTIONAL<Bridged>;
    let callCleared: OPTIONAL<CallCleared>;
    let conferenced: OPTIONAL<Conferenced>;
    let connectionCleared: OPTIONAL<ConnectionCleared>;
    let delivered: OPTIONAL<Delivered>;
    let digitsDialed: OPTIONAL<DigitsDialed>;
    let diverted: OPTIONAL<Diverted>;
    let established: OPTIONAL<Established>;
    let failed: OPTIONAL<Failed>;
    let held: OPTIONAL<Held>;
    let netwCapsChanged: OPTIONAL<NetwCapsChanged>;
    let netwReached: OPTIONAL<NetwReached>;
    let offered: OPTIONAL<Offered>;
    let originated: OPTIONAL<Originated>;
    let queued: OPTIONAL<Queued>;
    let retrieved: OPTIONAL<Retrieved>;
    let serviceInitiated: OPTIONAL<ServiceInitiated>;
    let transferred: OPTIONAL<Transferred>;
    const callbacks: $.DecodingMap = {
        "bridged": (_el: _Element): void => { bridged = $._decode_implicit<Bridged>(() => _decode_Bridged)(_el); },
        "callCleared": (_el: _Element): void => { callCleared = $._decode_implicit<CallCleared>(() => _decode_CallCleared)(_el); },
        "conferenced": (_el: _Element): void => { conferenced = $._decode_implicit<Conferenced>(() => _decode_Conferenced)(_el); },
        "connectionCleared": (_el: _Element): void => { connectionCleared = $._decode_implicit<ConnectionCleared>(() => _decode_ConnectionCleared)(_el); },
        "delivered": (_el: _Element): void => { delivered = $._decode_implicit<Delivered>(() => _decode_Delivered)(_el); },
        "digitsDialed": (_el: _Element): void => { digitsDialed = $._decode_implicit<DigitsDialed>(() => _decode_DigitsDialed)(_el); },
        "diverted": (_el: _Element): void => { diverted = $._decode_implicit<Diverted>(() => _decode_Diverted)(_el); },
        "established": (_el: _Element): void => { established = $._decode_implicit<Established>(() => _decode_Established)(_el); },
        "failed": (_el: _Element): void => { failed = $._decode_implicit<Failed>(() => _decode_Failed)(_el); },
        "held": (_el: _Element): void => { held = $._decode_implicit<Held>(() => _decode_Held)(_el); },
        "netwCapsChanged": (_el: _Element): void => { netwCapsChanged = $._decode_implicit<NetwCapsChanged>(() => _decode_NetwCapsChanged)(_el); },
        "netwReached": (_el: _Element): void => { netwReached = $._decode_implicit<NetwReached>(() => _decode_NetwReached)(_el); },
        "offered": (_el: _Element): void => { offered = $._decode_implicit<Offered>(() => _decode_Offered)(_el); },
        "originated": (_el: _Element): void => { originated = $._decode_implicit<Originated>(() => _decode_Originated)(_el); },
        "queued": (_el: _Element): void => { queued = $._decode_implicit<Queued>(() => _decode_Queued)(_el); },
        "retrieved": (_el: _Element): void => { retrieved = $._decode_implicit<Retrieved>(() => _decode_Retrieved)(_el); },
        "serviceInitiated": (_el: _Element): void => { serviceInitiated = $._decode_implicit<ServiceInitiated>(() => _decode_ServiceInitiated)(_el); },
        "transferred": (_el: _Element): void => { transferred = $._decode_implicit<Transferred>(() => _decode_Transferred)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallControlEvtsList,
        _extension_additions_list_spec_for_CallControlEvtsList,
        _root_component_type_list_2_spec_for_CallControlEvtsList,
        undefined,
    );
    return new CallControlEvtsList(
        bridged,
        callCleared,
        conferenced,
        connectionCleared,
        delivered,
        digitsDialed,
        diverted,
        established,
        failed,
        held,
        netwCapsChanged,
        netwReached,
        offered,
        originated,
        queued,
        retrieved,
        serviceInitiated,
        transferred
    );
}; }
    return _cached_decoder_for_CallControlEvtsList(el);
}

let _cached_encoder_for_CallControlEvtsList: $.ASN1Encoder<CallControlEvtsList> | null = null;

/**
 * @summary Encodes a(n) CallControlEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallControlEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_CallControlEvtsList (value: CallControlEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallControlEvtsList) { _cached_encoder_for_CallControlEvtsList = function (value: CallControlEvtsList, elGetter: $.ASN1Encoder<CallControlEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.bridged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Bridged, $.BER)(value.bridged, $.BER)),
            /* IF_ABSENT  */ ((value.callCleared === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallCleared, $.BER)(value.callCleared, $.BER)),
            /* IF_ABSENT  */ ((value.conferenced === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Conferenced, $.BER)(value.conferenced, $.BER)),
            /* IF_ABSENT  */ ((value.connectionCleared === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ConnectionCleared, $.BER)(value.connectionCleared, $.BER)),
            /* IF_ABSENT  */ ((value.delivered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Delivered, $.BER)(value.delivered, $.BER)),
            /* IF_ABSENT  */ ((value.digitsDialed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_DigitsDialed, $.BER)(value.digitsDialed, $.BER)),
            /* IF_ABSENT  */ ((value.diverted === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Diverted, $.BER)(value.diverted, $.BER)),
            /* IF_ABSENT  */ ((value.established === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Established, $.BER)(value.established, $.BER)),
            /* IF_ABSENT  */ ((value.failed === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_Failed, $.BER)(value.failed, $.BER)),
            /* IF_ABSENT  */ ((value.held === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_Held, $.BER)(value.held, $.BER)),
            /* IF_ABSENT  */ ((value.netwCapsChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_NetwCapsChanged, $.BER)(value.netwCapsChanged, $.BER)),
            /* IF_ABSENT  */ ((value.netwReached === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_NetwReached, $.BER)(value.netwReached, $.BER)),
            /* IF_ABSENT  */ ((value.offered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_Offered, $.BER)(value.offered, $.BER)),
            /* IF_ABSENT  */ ((value.originated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_Originated, $.BER)(value.originated, $.BER)),
            /* IF_ABSENT  */ ((value.queued === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Queued, $.BER)(value.queued, $.BER)),
            /* IF_ABSENT  */ ((value.retrieved === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_Retrieved, $.BER)(value.retrieved, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInitiated === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_ServiceInitiated, $.BER)(value.serviceInitiated, $.BER)),
            /* IF_ABSENT  */ ((value.transferred === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_Transferred, $.BER)(value.transferred, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallControlEvtsList(value, elGetter);
}


/* eslint-enable */
