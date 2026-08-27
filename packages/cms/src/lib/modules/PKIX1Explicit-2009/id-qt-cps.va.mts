/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_qt } from "../PKIX1Explicit-2009/id-qt.va.mjs";

/**
 * @summary id_qt_cps
 * @description
 *
 * OID for the CPS policy qualifier (`id-qt-cps`) ([RFC 5280 §4.2.1.4](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-qt-cps      OBJECT IDENTIFIER ::= { id-qt 1 }
 * ```
 *
 * @constant
 */
export const id_qt_cps: OBJECT_IDENTIFIER = _OID.fromParts([1], id_qt);

/* eslint-enable */
