/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_aca } from "../UsefulDefinitions/id-aca.va.mjs";
/**
 * @summary id_aca_accessControlScheme
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aca-accessControlScheme     OBJECT IDENTIFIER ::= {id-aca 1}
 * ```
 *
 * @constant
 */
export const id_aca_accessControlScheme: OBJECT_IDENTIFIER = _OID.fromParts(
    [1],
    id_aca
);

/* eslint-enable */
