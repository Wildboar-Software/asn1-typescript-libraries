/**
 * @module
 * @description
 *
 * Dialogue Service Element APDUs. DSE correlates ROSE or ACSE exchanges that
 * are not tied to one network-layer connection (ECMA-165 §4.15, §6.6, §8.4,
 * §11.3.3.3 Table 33). X.680 edition, `dialogue-service-pdus-asn1-97(15)`.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 */
export * from "./DSE-Extension-Set.osa.mjs";
export * from "./DestinationDialogId.ta.mjs";
export * from "./DialogAbortPDU-abortChoice.ta.mjs";
export * from "./DialogAbortPDU.ta.mjs";
export * from "./DialogBeginPDU.ta.mjs";
export * from "./DialogContinuePDU.ta.mjs";
export * from "./DialogEndPDU.ta.mjs";
export * from "./DseAPDU.ta.mjs";
export * from "./OperationSet.osa.mjs";
export * from "./OriginationDialogId.ta.mjs";
export * from "./P-AbortCause.ta.mjs";
export * from "./RemoteOperationsPortion-Item.ta.mjs";
export * from "./RemoteOperationsPortion.ta.mjs";
export * from "./UserAbortInformation.ta.mjs";
