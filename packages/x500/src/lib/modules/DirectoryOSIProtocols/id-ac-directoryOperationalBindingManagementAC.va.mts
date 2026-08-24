/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_ac } from "../UsefulDefinitions/id-ac.va.mjs";
/**
 * @summary id_ac_directoryOperationalBindingManagementAC
 * @description
 *
 * {id-ac 3}. DOP application-context name. Only the Bind initiator
 * invokes DOP operations (OSI). Version negotiated on Bind constrains
 * all subsequent PDUs (unlike DAP/DSP). Currently one version.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ac-directoryOperationalBindingManagementAC OBJECT IDENTIFIER ::= {id-ac 3}
 * ```
 *
 * @constant
 */
export const id_ac_directoryOperationalBindingManagementAC: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    id_ac
);

/* eslint-enable */
