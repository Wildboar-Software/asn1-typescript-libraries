/* eslint-disable */
import { TYPE_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary FIELD_ID
 * @description
 *
 * Information object class for finite-field kinds. ANSI
 * X9.62-1998 §6.1 defines `FIELD-ID ::= TYPE-IDENTIFIER`
 * (ISO/IEC 8824-2:1995 Annex A). Each object pairs an OID
 * (`&id`) with a parameter type (`&Type`).
 */
export type FIELD_ID<Type> = TYPE_IDENTIFIER<Type>;

/* eslint-enable */
