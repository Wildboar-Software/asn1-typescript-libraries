/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
/**
 * @summary id_ac_shadowConsumerInitiatedAsynchronousAC
 * @description
 *
 * {id-ac 9}. Same ops as `shadowConsumerInitiatedAC`; ROS mode is
 * asynchronous. Optional if the DSA already supports the sync
 * consumer-initiated AC.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-shadowConsumerInitiatedAsynchronousAC   OBJECT IDENTIFIER ::= {id-ac 9}
 * ```
 *
 * @constant
 */
export const id_ac_shadowConsumerInitiatedAsynchronousAC: OBJECT_IDENTIFIER = _OID.fromParts(
    [9],
    id_ac
);

/* eslint-enable */
