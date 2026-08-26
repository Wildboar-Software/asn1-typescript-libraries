/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_qt } from "../PKIX1Explicit-2009/id-qt.va.mjs";

/**
 * @summary id_qt_unotice
 * @description
 *
 * OID for the user-notice policy qualifier (`id-qt-unotice`) ([RFC 5280 §4.2.1.4](https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-qt-unotice  OBJECT IDENTIFIER ::= { id-qt 2 }
 * ```
 *
 * @constant
 */
export const id_qt_unotice: OBJECT_IDENTIFIER = _OID.fromParts([2], id_qt);

/* eslint-enable */
