/**
 * Internet Facsimile Protocol (IFP) and UDPTL PDUs from ITU-T Rec.
 * T.38 (11/2015): real-time Group 3 facsimile over IP. Emitting and
 * receiving gateways demodulate T.30 from the PSTN and exchange
 * these packets over TCP (TPKT, IETF RFC 1006) or UDP (UDPTL or
 * RTP). Annex A specifies PER BASIC-ALIGNED; the generated codecs
 * in this package use BER.
 *
 * Syntax is the 2002 module (ASN.1 version 2) with version-3
 * extension enumerations for V.8, V.34, and V.33. ITU-T Rec. T.38
 * (11/2015) <https://www.itu.int/rec/T-REC-T.38-201511-I>.
 *
 * @module
 */
export * from "./lib/modules/T38/Data-Field-Item-field-type.ta.mjs";
export * from "./lib/modules/T38/Data-Field-Item.ta.mjs";
export * from "./lib/modules/T38/Data-Field.ta.mjs";
export * from "./lib/modules/T38/IFPPacket.ta.mjs";
export * from "./lib/modules/T38/Type-of-msg-t30-data.ta.mjs";
export * from "./lib/modules/T38/Type-of-msg-t30-indicator.ta.mjs";
export * from "./lib/modules/T38/Type-of-msg.ta.mjs";
export * from "./lib/modules/T38/UDPTLPacket-error-recovery-fec-info.ta.mjs";
export * from "./lib/modules/T38/UDPTLPacket-error-recovery.ta.mjs";
export * from "./lib/modules/T38/UDPTLPacket.ta.mjs";
