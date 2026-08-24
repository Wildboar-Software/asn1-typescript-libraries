/* eslint-disable */
import { TYPE_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary WRAPPED_PDU
 * @description
 *
 * TYPE-IDENTIFIER (`&id` → `&Type`) binding a PDU OID to its type.
 * Analogous to X.510 WRAPPED-PROT. X.509 2016 `pkiPmiWrapper(42)`
 * version 8 — older PKI/PMI PDU wrapper; not specified in X.510
 * (08/2020); superseded in function by the X.510 Wrapper.
 */
export type WRAPPED_PDU = TYPE_IDENTIFIER;

/* eslint-enable */
