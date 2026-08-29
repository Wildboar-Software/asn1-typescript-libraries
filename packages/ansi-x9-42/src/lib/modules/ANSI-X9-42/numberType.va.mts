/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { ansi_X9_42 } from "../ANSI-X9-42/ansi-X9-42.va.mjs";

/**
 * @summary numberType
 * @description
 *
 * Arc for number-type OIDs (`{ ansi-X9-42 numberTypes(2) }`). Only a
 * public-key type is defined; the arc exists for extensibility and
 * alignment with related public-key standards. ANS X9.42-2003 §A.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * numberType OBJECT IDENTIFIER ::= { ansi-X9-42 numberTypes(2) }
 * ```
 *
 * @constant
 */
export const numberType: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* numberTypes */ 2],
    ansi_X9_42
);

/* eslint-enable */
