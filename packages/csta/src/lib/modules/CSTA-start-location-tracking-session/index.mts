/**
 * @description
 *
 * Start Location Tracking Session: create a session with collection vs
 * reporting criteria; `locCrossRefID` identifies it (ECMA-269 §28.1.7 /
 * §6.8.4.1, ECMA-285 §26.1.7).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./CollectionFilter.ta.mjs";
export {
    _enum_for_CollectionType,
    CollectionType,
    CollectionType_periodic,
    CollectionType_periodicWithUpdates,
    periodicWithUpdates,
    CollectionType_updatesOnly,
    updatesOnly,
    _decode_CollectionType,
    _encode_CollectionType,
} from "./CollectionType.ta.mjs";
export * from "./PIDProfile.ta.mjs";
export {
    _enum_for_ReportingType,
    ReportingType,
    ReportingType_immediate,
    immediate,
    ReportingType_periodic,
    ReportingType_count,
    count,
    _decode_ReportingType,
    _encode_ReportingType,
} from "./ReportingType.ta.mjs";
export * from "./startLocationTrackingSession.oa.mjs";
export * from "./StartLocationTrackingSessionArgument.ta.mjs";
export * from "./StartLocationTrackingSessionResult.ta.mjs";
