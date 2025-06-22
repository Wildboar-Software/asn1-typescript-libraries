/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_contract } from "../UsefulDefinitions/id-contract.va.mjs";
/**
 * @summary id_contract_shadowConsumer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-contract-shadowConsumer OBJECT IDENTIFIER ::= {id-contract 3}
 * ```
 *
 * @constant
 */
export const id_contract_shadowConsumer: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    id_contract
);

/* eslint-enable */
