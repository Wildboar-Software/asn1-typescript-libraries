/**
 * @description
 *
 * CCSDS Space Link Extension (SLE) transfer-service ASN.1.
 *
 * Identical assignments such as `TimeoutPeriod` live in `src/lib/shared` and
 * are re-exported by each service module that repeats them. Names that are
 * not the same type, such as `GvcId` and `Notification`, stay in their own
 * modules, so each ASN.1 module is published as its own entrypoint.
 */
export {};
