/**
 * @packageDocumentation
 *
 * Binary encodings of ITU-T H.248.1 gateway control messages
 * (version 3, ITU-T Rec. H.248.1 (03/2013)).
 *
 * The protocol decomposes a media gateway into a media gateway (MG)
 * and a media gateway controller (MGC). The MGC manipulates
 * terminations inside contexts. The MG reports events and service
 * changes. Import from `@wildboar/h248`,
 * `@wildboar/h248/MEDIA-GATEWAY-CONTROL`, or
 * `@wildboar/h248/H238V1-SUPPORT`.
 */
export * from "./lib/modules/MEDIA-GATEWAY-CONTROL/index.mjs";
export * from "./lib/modules/H238V1-SUPPORT/index.mjs";
