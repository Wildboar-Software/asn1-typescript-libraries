/* eslint-disable */
import { TYPE_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary FIELD_ID
 * @description
 *
 * `TYPE-IDENTIFIER` for finite-field objects (`&id` + `&Type`).
 * `FieldTypes` currently contains only `gfPrime` / `DomainParameters`.
 * ANS X9.42-2003 §A.1.
 *
 * @interface
 */
export type FIELD_ID = TYPE_IDENTIFIER;

/* eslint-enable */
