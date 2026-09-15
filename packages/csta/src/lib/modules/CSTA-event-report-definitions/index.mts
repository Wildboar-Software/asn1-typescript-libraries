/**
 * @description
 *
 * ROSE operation `cSTAEventReport` (local code 21) that carries all CSTA
 * events. The cross-reference is `MonitorCrossRefID`; `EventSpecificInfo`
 * selects the event body. ECMA-285 §5.4 / §10.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 */
export * from "./CallAssociatedEvents.ta.mjs";
export * from "./CallControlEvents.ta.mjs";
export * from "./cSTAEventReport.oa.mjs";
export * from "./CSTAEventReportArgument.ta.mjs";
export * from "./DeviceMaintenanceEvents.ta.mjs";
export * from "./EventSpecificInfo.ta.mjs";
export * from "./LogicalDeviceFeatureEvents.ta.mjs";
export * from "./MediaAttachmentEvents.ta.mjs";
export * from "./PhysicalDeviceFeatureEvents.ta.mjs";
export * from "./VendorSpecEvents.ta.mjs";
export * from "./VoiceUnitEvents.ta.mjs";
