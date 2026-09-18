/**
 * @description
 *
 * Device-object VTE-parameters for VT negotiation (ISO/IEC 9041-1:1997
 * §12.5). Device objects are defined by ISO/IEC 9040:1997 §16, §23:
 * they model real-device mapping and link a display object to control
 * objects. ISO/IEC 9040 is the service (VTE model, DOs/COs/devices,
 * operations); ISO/IEC 9041-1 is the protocol (PDUs, mapping to
 * ACSE/Presentation). `Identifier`, `Offer`, and `Values` share names
 * with CDS and CSS; import those from `@wildboar/vt/DEV`.
 */
export * from "./Identifier-Item.ta.mjs";
export * from "./Identifier.ta.mjs";
export * from "./Offer-Item.ta.mjs";
export * from "./Offer.ta.mjs";
export * from "./ParameterIdents.ta.mjs";
export {
    type ParameterOffers_defaultCOPriority,
    ParameterOffers_defaultCOPriority_high,
    ParameterOffers_defaultCOPriority_normal,
    ParameterOffers_defaultCOPriority_urgent,
    _decode_ParameterOffers_defaultCOPriority,
    _encode_ParameterOffers_defaultCOPriority,
} from "./ParameterOffers-defaultCOPriority.ta.mjs";
export * from "./ParameterOffers-defaultCOinitialValue-Item.ta.mjs";
export * from "./ParameterOffers-defaultCOtrigger.ta.mjs";
export * from "./ParameterOffers-terminationEventList-Item-Item-eventId.ta.mjs";
export * from "./ParameterOffers-terminationEventList-Item-Item.ta.mjs";
export * from "./ParameterOffers-terminationLength-eventId.ta.mjs";
export * from "./ParameterOffers-terminationLength.ta.mjs";
export * from "./ParameterOffers-terminationTimeout-eventId.ta.mjs";
export * from "./ParameterOffers-terminationTimeout.ta.mjs";
export * from "./ParameterOffers.ta.mjs";
export {
    type ParameterValues_defaultCOPriority,
    ParameterValues_defaultCOPriority_high,
    ParameterValues_defaultCOPriority_normal,
    ParameterValues_defaultCOPriority_urgent,
    _decode_ParameterValues_defaultCOPriority,
    _encode_ParameterValues_defaultCOPriority,
} from "./ParameterValues-defaultCOPriority.ta.mjs";
export * from "./ParameterValues-defaultCOinitialValue.ta.mjs";
export * from "./ParameterValues-terminationEventList-Item-eventId.ta.mjs";
export * from "./ParameterValues-terminationEventList-Item.ta.mjs";
export * from "./ParameterValues-terminationLength-eventId.ta.mjs";
export * from "./ParameterValues-terminationLength.ta.mjs";
export * from "./ParameterValues-terminationTimeout-eventId.ta.mjs";
export * from "./ParameterValues-terminationTimeout.ta.mjs";
export * from "./ParameterValues.ta.mjs";
export * from "./TimeOffer-Item-range.ta.mjs";
export * from "./TimeOffer-Item-value.ta.mjs";
export * from "./TimeOffer-Item.ta.mjs";
export * from "./TimeOffer.ta.mjs";
export * from "./Values-Item.ta.mjs";
export * from "./Values.ta.mjs";
