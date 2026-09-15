/**
 * @description
 *
 * Get Location Tracking Capabilities: supported collection and reporting
 * options for a device or group (ECMA-269 §28.1.10, ECMA-285 §26.1.10).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./getLocationTrackingCapabilities.oa.mjs";
export * from "./GetLocationTrackingCapabilitiesArgument.ta.mjs";
export * from "./GetLocationTrackingCapabilitiesResult-collectionFilterDefault.ta.mjs";
export {
    _enum_for_GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
    GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
    GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodic,
    GetLocationTrackingCapabilitiesResult_collectionTypeDefault_updatesOnly,
    updatesOnly,
    GetLocationTrackingCapabilitiesResult_collectionTypeDefault_periodicWithUpdates,
    periodicWithUpdates,
    _decode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
    _encode_GetLocationTrackingCapabilitiesResult_collectionTypeDefault,
} from "./GetLocationTrackingCapabilitiesResult-collectionTypeDefault.ta.mjs";
export {
    _enum_for_GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
    GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
    GetLocationTrackingCapabilitiesResult_reportingTypeDefault_immediate,
    immediate,
    GetLocationTrackingCapabilitiesResult_reportingTypeDefault_periodic,
    GetLocationTrackingCapabilitiesResult_reportingTypeDefault_count,
    count,
    _decode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
    _encode_GetLocationTrackingCapabilitiesResult_reportingTypeDefault,
} from "./GetLocationTrackingCapabilitiesResult-reportingTypeDefault.ta.mjs";
export * from "./GetLocationTrackingCapabilitiesResult.ta.mjs";
