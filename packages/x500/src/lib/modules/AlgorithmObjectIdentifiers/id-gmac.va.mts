/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { ID } from "../AlgorithmObjectIdentifiers/ID.ta.mjs";
import { iso9797 } from "../AlgorithmObjectIdentifiers/iso9797.va.mjs";
/**
 * @summary id_gmac
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-gmac                 ID ::= { iso9797 part3(3) gmac(4) }
 * ```
 *
 * @constant
 */
export const id_gmac: ID = _OID.fromParts([/* part3 */ 3, /* gmac */ 4], iso9797);

/* eslint-enable */
