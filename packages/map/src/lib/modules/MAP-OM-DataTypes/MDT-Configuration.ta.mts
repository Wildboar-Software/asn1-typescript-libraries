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
import { JobType, _enum_for_JobType, JobType_immediate_MDT_only /* IMPORTED_LONG_ENUMERATION_ITEM */, immediate_MDT_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, JobType_logged_MDT_only /* IMPORTED_LONG_ENUMERATION_ITEM */, logged_MDT_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, JobType_trace_only /* IMPORTED_LONG_ENUMERATION_ITEM */, trace_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, JobType_immediate_MDT_and_trace /* IMPORTED_LONG_ENUMERATION_ITEM */, immediate_MDT_and_trace /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_JobType, _encode_JobType } from "../MAP-OM-DataTypes/JobType.ta.mjs";
// export { JobType, _enum_for_JobType, JobType_immediate_MDT_only /* IMPORTED_LONG_ENUMERATION_ITEM */, immediate_MDT_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, JobType_logged_MDT_only /* IMPORTED_LONG_ENUMERATION_ITEM */, logged_MDT_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, JobType_trace_only /* IMPORTED_LONG_ENUMERATION_ITEM */, trace_only /* IMPORTED_SHORT_ENUMERATION_ITEM */, JobType_immediate_MDT_and_trace /* IMPORTED_LONG_ENUMERATION_ITEM */, immediate_MDT_and_trace /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_JobType, _encode_JobType } from "../MAP-OM-DataTypes/JobType.ta.mjs";
import { AreaScope, _decode_AreaScope, _encode_AreaScope } from "../MAP-OM-DataTypes/AreaScope.ta.mjs";
// export { AreaScope, _decode_AreaScope, _encode_AreaScope } from "../MAP-OM-DataTypes/AreaScope.ta.mjs";
import { ListOfMeasurements, _decode_ListOfMeasurements, _encode_ListOfMeasurements } from "../MAP-OM-DataTypes/ListOfMeasurements.ta.mjs";
// export { ListOfMeasurements, _decode_ListOfMeasurements, _encode_ListOfMeasurements } from "../MAP-OM-DataTypes/ListOfMeasurements.ta.mjs";
import { ReportingTrigger, _decode_ReportingTrigger, _encode_ReportingTrigger } from "../MAP-OM-DataTypes/ReportingTrigger.ta.mjs";
// export { ReportingTrigger, _decode_ReportingTrigger, _encode_ReportingTrigger } from "../MAP-OM-DataTypes/ReportingTrigger.ta.mjs";
import { ReportInterval, _enum_for_ReportInterval, ReportInterval_umts250ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts250ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts500ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts500ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts1000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts1000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts2000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts2000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts3000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts3000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts4000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts4000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts6000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts6000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts8000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts8000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts12000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts12000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts16000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts16000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts20000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts20000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts24000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts24000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts28000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts28000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts32000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts32000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts64000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts64000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte120ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte120ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte240ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte240ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte480ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte480ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte640ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte640ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte1024ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte1024ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte2048ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte2048ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte5120ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte5120ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte10240ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte10240ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte1min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte1min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte6min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte6min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte12min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte12min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte30min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte30min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte60min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte60min /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportInterval, _encode_ReportInterval } from "../MAP-OM-DataTypes/ReportInterval.ta.mjs";
// export { ReportInterval, _enum_for_ReportInterval, ReportInterval_umts250ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts250ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts500ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts500ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts1000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts1000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts2000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts2000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts3000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts3000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts4000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts4000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts6000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts6000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts8000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts8000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts12000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts12000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts16000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts16000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts20000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts20000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts24000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts24000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts28000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts28000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts32000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts32000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_umts64000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, umts64000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte120ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte120ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte240ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte240ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte480ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte480ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte640ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte640ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte1024ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte1024ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte2048ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte2048ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte5120ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte5120ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte10240ms /* IMPORTED_LONG_ENUMERATION_ITEM */, lte10240ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte1min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte1min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte6min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte6min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte12min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte12min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte30min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte30min /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportInterval_lte60min /* IMPORTED_LONG_ENUMERATION_ITEM */, lte60min /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportInterval, _encode_ReportInterval } from "../MAP-OM-DataTypes/ReportInterval.ta.mjs";
import { ReportAmount, _enum_for_ReportAmount, ReportAmount_d1 /* IMPORTED_LONG_ENUMERATION_ITEM */, d1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d2 /* IMPORTED_LONG_ENUMERATION_ITEM */, d2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d4 /* IMPORTED_LONG_ENUMERATION_ITEM */, d4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d8 /* IMPORTED_LONG_ENUMERATION_ITEM */, d8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d16 /* IMPORTED_LONG_ENUMERATION_ITEM */, d16 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d32 /* IMPORTED_LONG_ENUMERATION_ITEM */, d32 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d64 /* IMPORTED_LONG_ENUMERATION_ITEM */, d64 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_infinity /* IMPORTED_LONG_ENUMERATION_ITEM */, infinity /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportAmount, _encode_ReportAmount } from "../MAP-OM-DataTypes/ReportAmount.ta.mjs";
// export { ReportAmount, _enum_for_ReportAmount, ReportAmount_d1 /* IMPORTED_LONG_ENUMERATION_ITEM */, d1 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d2 /* IMPORTED_LONG_ENUMERATION_ITEM */, d2 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d4 /* IMPORTED_LONG_ENUMERATION_ITEM */, d4 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d8 /* IMPORTED_LONG_ENUMERATION_ITEM */, d8 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d16 /* IMPORTED_LONG_ENUMERATION_ITEM */, d16 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d32 /* IMPORTED_LONG_ENUMERATION_ITEM */, d32 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_d64 /* IMPORTED_LONG_ENUMERATION_ITEM */, d64 /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReportAmount_infinity /* IMPORTED_LONG_ENUMERATION_ITEM */, infinity /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReportAmount, _encode_ReportAmount } from "../MAP-OM-DataTypes/ReportAmount.ta.mjs";
import { EventThresholdRSRP, _decode_EventThresholdRSRP, _encode_EventThresholdRSRP } from "../MAP-OM-DataTypes/EventThresholdRSRP.ta.mjs";
// export { EventThresholdRSRP, _decode_EventThresholdRSRP, _encode_EventThresholdRSRP } from "../MAP-OM-DataTypes/EventThresholdRSRP.ta.mjs";
import { EventThresholdRSRQ, _decode_EventThresholdRSRQ, _encode_EventThresholdRSRQ } from "../MAP-OM-DataTypes/EventThresholdRSRQ.ta.mjs";
// export { EventThresholdRSRQ, _decode_EventThresholdRSRQ, _encode_EventThresholdRSRQ } from "../MAP-OM-DataTypes/EventThresholdRSRQ.ta.mjs";
import { LoggingInterval, _enum_for_LoggingInterval, LoggingInterval_d1dot28 /* IMPORTED_LONG_ENUMERATION_ITEM */, d1dot28 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d2dot56 /* IMPORTED_LONG_ENUMERATION_ITEM */, d2dot56 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d5dot12 /* IMPORTED_LONG_ENUMERATION_ITEM */, d5dot12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d10dot24 /* IMPORTED_LONG_ENUMERATION_ITEM */, d10dot24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d20dot48 /* IMPORTED_LONG_ENUMERATION_ITEM */, d20dot48 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d30dot72 /* IMPORTED_LONG_ENUMERATION_ITEM */, d30dot72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d40dot96 /* IMPORTED_LONG_ENUMERATION_ITEM */, d40dot96 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d61dot44 /* IMPORTED_LONG_ENUMERATION_ITEM */, d61dot44 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LoggingInterval, _encode_LoggingInterval } from "../MAP-OM-DataTypes/LoggingInterval.ta.mjs";
// export { LoggingInterval, _enum_for_LoggingInterval, LoggingInterval_d1dot28 /* IMPORTED_LONG_ENUMERATION_ITEM */, d1dot28 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d2dot56 /* IMPORTED_LONG_ENUMERATION_ITEM */, d2dot56 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d5dot12 /* IMPORTED_LONG_ENUMERATION_ITEM */, d5dot12 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d10dot24 /* IMPORTED_LONG_ENUMERATION_ITEM */, d10dot24 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d20dot48 /* IMPORTED_LONG_ENUMERATION_ITEM */, d20dot48 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d30dot72 /* IMPORTED_LONG_ENUMERATION_ITEM */, d30dot72 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d40dot96 /* IMPORTED_LONG_ENUMERATION_ITEM */, d40dot96 /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingInterval_d61dot44 /* IMPORTED_LONG_ENUMERATION_ITEM */, d61dot44 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LoggingInterval, _encode_LoggingInterval } from "../MAP-OM-DataTypes/LoggingInterval.ta.mjs";
import { LoggingDuration, _enum_for_LoggingDuration, LoggingDuration_d600sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d600sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d1200sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d1200sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d2400sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d2400sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d3600sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d3600sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d5400sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d5400sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d7200sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d7200sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LoggingDuration, _encode_LoggingDuration } from "../MAP-OM-DataTypes/LoggingDuration.ta.mjs";
// export { LoggingDuration, _enum_for_LoggingDuration, LoggingDuration_d600sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d600sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d1200sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d1200sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d2400sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d2400sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d3600sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d3600sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d5400sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d5400sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, LoggingDuration_d7200sec /* IMPORTED_LONG_ENUMERATION_ITEM */, d7200sec /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_LoggingDuration, _encode_LoggingDuration } from "../MAP-OM-DataTypes/LoggingDuration.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { PeriodUMTS, _enum_for_PeriodUMTS, PeriodUMTS_d250ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d250ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d500ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d500ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d1000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d1000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d2000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d2000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d3000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d3000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d4000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d4000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d6000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d6000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d8000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d8000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d12000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d12000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d16000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d16000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d20000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d20000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d24000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d24000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d28000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d28000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d32000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d32000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d64000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d64000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodUMTS, _encode_PeriodUMTS } from "../MAP-OM-DataTypes/PeriodUMTS.ta.mjs";
// export { PeriodUMTS, _enum_for_PeriodUMTS, PeriodUMTS_d250ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d250ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d500ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d500ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d1000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d1000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d2000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d2000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d3000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d3000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d4000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d4000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d6000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d6000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d8000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d8000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d12000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d12000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d16000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d16000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d20000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d20000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d24000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d24000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d28000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d28000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d32000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d32000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodUMTS_d64000ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d64000ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodUMTS, _encode_PeriodUMTS } from "../MAP-OM-DataTypes/PeriodUMTS.ta.mjs";
import { PeriodLTE, _enum_for_PeriodLTE, PeriodLTE_d1024ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d1024ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d1280ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d1280ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d2048ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d2048ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d2560ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d2560ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d5120ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d5120ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d10240ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d10240ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d1min /* IMPORTED_LONG_ENUMERATION_ITEM */, d1min /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodLTE, _encode_PeriodLTE } from "../MAP-OM-DataTypes/PeriodLTE.ta.mjs";
// export { PeriodLTE, _enum_for_PeriodLTE, PeriodLTE_d1024ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d1024ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d1280ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d1280ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d2048ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d2048ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d2560ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d2560ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d5120ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d5120ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d10240ms /* IMPORTED_LONG_ENUMERATION_ITEM */, d10240ms /* IMPORTED_SHORT_ENUMERATION_ITEM */, PeriodLTE_d1min /* IMPORTED_LONG_ENUMERATION_ITEM */, d1min /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PeriodLTE, _encode_PeriodLTE } from "../MAP-OM-DataTypes/PeriodLTE.ta.mjs";
import { PositioningMethod, _decode_PositioningMethod, _encode_PositioningMethod } from "../MAP-OM-DataTypes/PositioningMethod.ta.mjs";
// export { PositioningMethod, _decode_PositioningMethod, _encode_PositioningMethod } from "../MAP-OM-DataTypes/PositioningMethod.ta.mjs";
import { MeasurementQuantity, _decode_MeasurementQuantity, _encode_MeasurementQuantity } from "../MAP-OM-DataTypes/MeasurementQuantity.ta.mjs";
// export { MeasurementQuantity, _decode_MeasurementQuantity, _encode_MeasurementQuantity } from "../MAP-OM-DataTypes/MeasurementQuantity.ta.mjs";
import { EventThreshold1F, _decode_EventThreshold1F, _encode_EventThreshold1F } from "../MAP-OM-DataTypes/EventThreshold1F.ta.mjs";
// export { EventThreshold1F, _decode_EventThreshold1F, _encode_EventThreshold1F } from "../MAP-OM-DataTypes/EventThreshold1F.ta.mjs";
import { EventThreshold1I, _decode_EventThreshold1I, _encode_EventThreshold1I } from "../MAP-OM-DataTypes/EventThreshold1I.ta.mjs";
// export { EventThreshold1I, _decode_EventThreshold1I, _encode_EventThreshold1I } from "../MAP-OM-DataTypes/EventThreshold1I.ta.mjs";
import { MDT_Allowed_PLMNId_List, _decode_MDT_Allowed_PLMNId_List, _encode_MDT_Allowed_PLMNId_List } from "../MAP-OM-DataTypes/MDT-Allowed-PLMNId-List.ta.mjs";
// export { MDT_Allowed_PLMNId_List, _decode_MDT_Allowed_PLMNId_List, _encode_MDT_Allowed_PLMNId_List } from "../MAP-OM-DataTypes/MDT-Allowed-PLMNId-List.ta.mjs";


/**
 * @summary MDT_Configuration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MDT-Configuration ::= SEQUENCE {
 *     jobType    JobType,
 *     areaScope    AreaScope    OPTIONAL,
 *     listOfMeasurements    ListOfMeasurements    OPTIONAL,
 *     reportingTrigger    [0] ReportingTrigger    OPTIONAL,
 *     reportInterval    ReportInterval    OPTIONAL,
 *     reportAmount    [1] ReportAmount    OPTIONAL,
 *     eventThresholdRSRP    EventThresholdRSRP    OPTIONAL,
 *     eventThresholdRSRQ    [2] EventThresholdRSRQ    OPTIONAL,
 *     loggingInterval    [3] LoggingInterval    OPTIONAL,
 *     loggingDuration    [4] LoggingDuration    OPTIONAL,
 *     extensionContainer    [5] ExtensionContainer    OPTIONAL,
 *     ...,
 *     measurementPeriodUMTS    [6] PeriodUMTS    OPTIONAL,
 *     measurementPeriodLTE    [7] PeriodLTE    OPTIONAL,
 *     collectionPeriodRRM-UMTS    [8] PeriodUMTS    OPTIONAL,
 *     collectionPeriodRRM-LTE    [9] PeriodLTE    OPTIONAL,
 *     positioningMethod    [10] PositioningMethod    OPTIONAL,
 *     measurementQuantity    [11] MeasurementQuantity    OPTIONAL,
 *     eventThreshold1F    [12] EventThreshold1F    OPTIONAL,
 *     eventThreshold1I    [13] EventThreshold1I    OPTIONAL,
 *     mdt-Allowed-PLMN-List    [14] MDT-Allowed-PLMNId-List    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MDT_Configuration {
    constructor (
        /**
         * @summary `jobType`.
         * @public
         * @readonly
         */
        readonly jobType: JobType,
        /**
         * @summary `areaScope`.
         * @public
         * @readonly
         */
        readonly areaScope: OPTIONAL<AreaScope>,
        /**
         * @summary `listOfMeasurements`.
         * @public
         * @readonly
         */
        readonly listOfMeasurements: OPTIONAL<ListOfMeasurements>,
        /**
         * @summary `reportingTrigger`.
         * @public
         * @readonly
         */
        readonly reportingTrigger: OPTIONAL<ReportingTrigger>,
        /**
         * @summary `reportInterval`.
         * @public
         * @readonly
         */
        readonly reportInterval: OPTIONAL<ReportInterval>,
        /**
         * @summary `reportAmount`.
         * @public
         * @readonly
         */
        readonly reportAmount: OPTIONAL<ReportAmount>,
        /**
         * @summary `eventThresholdRSRP`.
         * @public
         * @readonly
         */
        readonly eventThresholdRSRP: OPTIONAL<EventThresholdRSRP>,
        /**
         * @summary `eventThresholdRSRQ`.
         * @public
         * @readonly
         */
        readonly eventThresholdRSRQ: OPTIONAL<EventThresholdRSRQ>,
        /**
         * @summary `loggingInterval`.
         * @public
         * @readonly
         */
        readonly loggingInterval: OPTIONAL<LoggingInterval>,
        /**
         * @summary `loggingDuration`.
         * @public
         * @readonly
         */
        readonly loggingDuration: OPTIONAL<LoggingDuration>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `measurementPeriodUMTS`.
         * @public
         * @readonly
         */
        readonly measurementPeriodUMTS: OPTIONAL<PeriodUMTS>,
        /**
         * @summary `measurementPeriodLTE`.
         * @public
         * @readonly
         */
        readonly measurementPeriodLTE: OPTIONAL<PeriodLTE>,
        /**
         * @summary `collectionPeriodRRM_UMTS`.
         * @public
         * @readonly
         */
        readonly collectionPeriodRRM_UMTS: OPTIONAL<PeriodUMTS>,
        /**
         * @summary `collectionPeriodRRM_LTE`.
         * @public
         * @readonly
         */
        readonly collectionPeriodRRM_LTE: OPTIONAL<PeriodLTE>,
        /**
         * @summary `positioningMethod`.
         * @public
         * @readonly
         */
        readonly positioningMethod: OPTIONAL<PositioningMethod>,
        /**
         * @summary `measurementQuantity`.
         * @public
         * @readonly
         */
        readonly measurementQuantity: OPTIONAL<MeasurementQuantity>,
        /**
         * @summary `eventThreshold1F`.
         * @public
         * @readonly
         */
        readonly eventThreshold1F: OPTIONAL<EventThreshold1F>,
        /**
         * @summary `eventThreshold1I`.
         * @public
         * @readonly
         */
        readonly eventThreshold1I: OPTIONAL<EventThreshold1I>,
        /**
         * @summary `mdt_Allowed_PLMN_List`.
         * @public
         * @readonly
         */
        readonly mdt_Allowed_PLMN_List: OPTIONAL<MDT_Allowed_PLMNId_List>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MDT_Configuration
     * @description
     * 
     * This takes an `object` and converts it to a `MDT_Configuration`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MDT_Configuration`.
     * @returns {MDT_Configuration}
     */
    public static _from_object (_o: { [_K in keyof (MDT_Configuration)]: (MDT_Configuration)[_K] }): MDT_Configuration {
        return new MDT_Configuration(_o.jobType, _o.areaScope, _o.listOfMeasurements, _o.reportingTrigger, _o.reportInterval, _o.reportAmount, _o.eventThresholdRSRP, _o.eventThresholdRSRQ, _o.loggingInterval, _o.loggingDuration, _o.extensionContainer, _o.measurementPeriodUMTS, _o.measurementPeriodLTE, _o.collectionPeriodRRM_UMTS, _o.collectionPeriodRRM_LTE, _o.positioningMethod, _o.measurementQuantity, _o.eventThreshold1F, _o.eventThreshold1I, _o.mdt_Allowed_PLMN_List, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `jobType`
         * @public
         * @static
         */

    public static _enum_for_jobType = _enum_for_JobType;        /**
         * @summary The enum used as the type of the component `reportInterval`
         * @public
         * @static
         */

    public static _enum_for_reportInterval = _enum_for_ReportInterval;        /**
         * @summary The enum used as the type of the component `reportAmount`
         * @public
         * @static
         */

    public static _enum_for_reportAmount = _enum_for_ReportAmount;        /**
         * @summary The enum used as the type of the component `loggingInterval`
         * @public
         * @static
         */

    public static _enum_for_loggingInterval = _enum_for_LoggingInterval;        /**
         * @summary The enum used as the type of the component `loggingDuration`
         * @public
         * @static
         */

    public static _enum_for_loggingDuration = _enum_for_LoggingDuration;        /**
         * @summary The enum used as the type of the component `measurementPeriodUMTS`
         * @public
         * @static
         */

    public static _enum_for_measurementPeriodUMTS = _enum_for_PeriodUMTS;        /**
         * @summary The enum used as the type of the component `measurementPeriodLTE`
         * @public
         * @static
         */

    public static _enum_for_measurementPeriodLTE = _enum_for_PeriodLTE;        /**
         * @summary The enum used as the type of the component `collectionPeriodRRM_UMTS`
         * @public
         * @static
         */

    public static _enum_for_collectionPeriodRRM_UMTS = _enum_for_PeriodUMTS;        /**
         * @summary The enum used as the type of the component `collectionPeriodRRM_LTE`
         * @public
         * @static
         */

    public static _enum_for_collectionPeriodRRM_LTE = _enum_for_PeriodLTE;
}

/**
 * @summary The Leading Root Component Types of MDT_Configuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MDT_Configuration: $.ComponentSpec[] = [
    new $.ComponentSpec("jobType", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("areaScope", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("listOfMeasurements", true, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("reportingTrigger", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("reportInterval", true, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("reportAmount", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("eventThresholdRSRP", true, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("eventThresholdRSRQ", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("loggingInterval", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("loggingDuration", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 5), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MDT_Configuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MDT_Configuration: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MDT_Configuration
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MDT_Configuration: $.ComponentSpec[] = [
    new $.ComponentSpec("measurementPeriodUMTS", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("measurementPeriodLTE", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("collectionPeriodRRM-UMTS", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("collectionPeriodRRM-LTE", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("positioningMethod", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("measurementQuantity", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("eventThreshold1F", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("eventThreshold1I", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("mdt-Allowed-PLMN-List", true, $.hasTag(_TagClass.context, 14), undefined, undefined)
];

let _cached_decoder_for_MDT_Configuration: $.ASN1Decoder<MDT_Configuration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MDT_Configuration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MDT_Configuration (el: _Element): MDT_Configuration {
    if (!_cached_decoder_for_MDT_Configuration) { _cached_decoder_for_MDT_Configuration = function (el: _Element): MDT_Configuration {
    let jobType!: JobType;
    let areaScope: OPTIONAL<AreaScope>;
    let listOfMeasurements: OPTIONAL<ListOfMeasurements>;
    let reportingTrigger: OPTIONAL<ReportingTrigger>;
    let reportInterval: OPTIONAL<ReportInterval>;
    let reportAmount: OPTIONAL<ReportAmount>;
    let eventThresholdRSRP: OPTIONAL<EventThresholdRSRP>;
    let eventThresholdRSRQ: OPTIONAL<EventThresholdRSRQ>;
    let loggingInterval: OPTIONAL<LoggingInterval>;
    let loggingDuration: OPTIONAL<LoggingDuration>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let measurementPeriodUMTS: OPTIONAL<PeriodUMTS>;
    let measurementPeriodLTE: OPTIONAL<PeriodLTE>;
    let collectionPeriodRRM_UMTS: OPTIONAL<PeriodUMTS>;
    let collectionPeriodRRM_LTE: OPTIONAL<PeriodLTE>;
    let positioningMethod: OPTIONAL<PositioningMethod>;
    let measurementQuantity: OPTIONAL<MeasurementQuantity>;
    let eventThreshold1F: OPTIONAL<EventThreshold1F>;
    let eventThreshold1I: OPTIONAL<EventThreshold1I>;
    let mdt_Allowed_PLMN_List: OPTIONAL<MDT_Allowed_PLMNId_List>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "jobType": (_el: _Element): void => { jobType = _decode_JobType(_el); },
        "areaScope": (_el: _Element): void => { areaScope = _decode_AreaScope(_el); },
        "listOfMeasurements": (_el: _Element): void => { listOfMeasurements = _decode_ListOfMeasurements(_el); },
        "reportingTrigger": (_el: _Element): void => { reportingTrigger = $._decode_implicit<ReportingTrigger>(() => _decode_ReportingTrigger)(_el); },
        "reportInterval": (_el: _Element): void => { reportInterval = _decode_ReportInterval(_el); },
        "reportAmount": (_el: _Element): void => { reportAmount = $._decode_implicit<ReportAmount>(() => _decode_ReportAmount)(_el); },
        "eventThresholdRSRP": (_el: _Element): void => { eventThresholdRSRP = _decode_EventThresholdRSRP(_el); },
        "eventThresholdRSRQ": (_el: _Element): void => { eventThresholdRSRQ = $._decode_implicit<EventThresholdRSRQ>(() => _decode_EventThresholdRSRQ)(_el); },
        "loggingInterval": (_el: _Element): void => { loggingInterval = $._decode_implicit<LoggingInterval>(() => _decode_LoggingInterval)(_el); },
        "loggingDuration": (_el: _Element): void => { loggingDuration = $._decode_implicit<LoggingDuration>(() => _decode_LoggingDuration)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "measurementPeriodUMTS": (_el: _Element): void => { measurementPeriodUMTS = $._decode_implicit<PeriodUMTS>(() => _decode_PeriodUMTS)(_el); },
        "measurementPeriodLTE": (_el: _Element): void => { measurementPeriodLTE = $._decode_implicit<PeriodLTE>(() => _decode_PeriodLTE)(_el); },
        "collectionPeriodRRM-UMTS": (_el: _Element): void => { collectionPeriodRRM_UMTS = $._decode_implicit<PeriodUMTS>(() => _decode_PeriodUMTS)(_el); },
        "collectionPeriodRRM-LTE": (_el: _Element): void => { collectionPeriodRRM_LTE = $._decode_implicit<PeriodLTE>(() => _decode_PeriodLTE)(_el); },
        "positioningMethod": (_el: _Element): void => { positioningMethod = $._decode_implicit<PositioningMethod>(() => _decode_PositioningMethod)(_el); },
        "measurementQuantity": (_el: _Element): void => { measurementQuantity = $._decode_implicit<MeasurementQuantity>(() => _decode_MeasurementQuantity)(_el); },
        "eventThreshold1F": (_el: _Element): void => { eventThreshold1F = $._decode_implicit<EventThreshold1F>(() => _decode_EventThreshold1F)(_el); },
        "eventThreshold1I": (_el: _Element): void => { eventThreshold1I = $._decode_implicit<EventThreshold1I>(() => _decode_EventThreshold1I)(_el); },
        "mdt-Allowed-PLMN-List": (_el: _Element): void => { mdt_Allowed_PLMN_List = $._decode_implicit<MDT_Allowed_PLMNId_List>(() => _decode_MDT_Allowed_PLMNId_List)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MDT_Configuration,
        _extension_additions_list_spec_for_MDT_Configuration,
        _root_component_type_list_2_spec_for_MDT_Configuration,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MDT_Configuration(
        jobType,
        areaScope,
        listOfMeasurements,
        reportingTrigger,
        reportInterval,
        reportAmount,
        eventThresholdRSRP,
        eventThresholdRSRQ,
        loggingInterval,
        loggingDuration,
        extensionContainer,
        measurementPeriodUMTS,
        measurementPeriodLTE,
        collectionPeriodRRM_UMTS,
        collectionPeriodRRM_LTE,
        positioningMethod,
        measurementQuantity,
        eventThreshold1F,
        eventThreshold1I,
        mdt_Allowed_PLMN_List,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MDT_Configuration(el);
}

let _cached_encoder_for_MDT_Configuration: $.ASN1Encoder<MDT_Configuration> | null = null;

/**
 * @summary Encodes a(n) MDT_Configuration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MDT_Configuration, encoded as an ASN.1 Element.
 */
export
function _encode_MDT_Configuration (value: MDT_Configuration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MDT_Configuration) { _cached_encoder_for_MDT_Configuration = function (value: MDT_Configuration, elGetter: $.ASN1Encoder<MDT_Configuration>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_JobType(value.jobType, $.BER),
            /* IF_ABSENT  */ ((value.areaScope === undefined) ? undefined : _encode_AreaScope(value.areaScope, $.BER)),
            /* IF_ABSENT  */ ((value.listOfMeasurements === undefined) ? undefined : _encode_ListOfMeasurements(value.listOfMeasurements, $.BER)),
            /* IF_ABSENT  */ ((value.reportingTrigger === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ReportingTrigger, $.BER)(value.reportingTrigger, $.BER)),
            /* IF_ABSENT  */ ((value.reportInterval === undefined) ? undefined : _encode_ReportInterval(value.reportInterval, $.BER)),
            /* IF_ABSENT  */ ((value.reportAmount === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ReportAmount, $.BER)(value.reportAmount, $.BER)),
            /* IF_ABSENT  */ ((value.eventThresholdRSRP === undefined) ? undefined : _encode_EventThresholdRSRP(value.eventThresholdRSRP, $.BER)),
            /* IF_ABSENT  */ ((value.eventThresholdRSRQ === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EventThresholdRSRQ, $.BER)(value.eventThresholdRSRQ, $.BER)),
            /* IF_ABSENT  */ ((value.loggingInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_LoggingInterval, $.BER)(value.loggingInterval, $.BER)),
            /* IF_ABSENT  */ ((value.loggingDuration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_LoggingDuration, $.BER)(value.loggingDuration, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.measurementPeriodUMTS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PeriodUMTS, $.BER)(value.measurementPeriodUMTS, $.BER)),
            /* IF_ABSENT  */ ((value.measurementPeriodLTE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PeriodLTE, $.BER)(value.measurementPeriodLTE, $.BER)),
            /* IF_ABSENT  */ ((value.collectionPeriodRRM_UMTS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PeriodUMTS, $.BER)(value.collectionPeriodRRM_UMTS, $.BER)),
            /* IF_ABSENT  */ ((value.collectionPeriodRRM_LTE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_PeriodLTE, $.BER)(value.collectionPeriodRRM_LTE, $.BER)),
            /* IF_ABSENT  */ ((value.positioningMethod === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_PositioningMethod, $.BER)(value.positioningMethod, $.BER)),
            /* IF_ABSENT  */ ((value.measurementQuantity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_MeasurementQuantity, $.BER)(value.measurementQuantity, $.BER)),
            /* IF_ABSENT  */ ((value.eventThreshold1F === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_EventThreshold1F, $.BER)(value.eventThreshold1F, $.BER)),
            /* IF_ABSENT  */ ((value.eventThreshold1I === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_EventThreshold1I, $.BER)(value.eventThreshold1I, $.BER)),
            /* IF_ABSENT  */ ((value.mdt_Allowed_PLMN_List === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_MDT_Allowed_PLMNId_List, $.BER)(value.mdt_Allowed_PLMN_List, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MDT_Configuration(value, elGetter);
}


/* eslint-enable */
