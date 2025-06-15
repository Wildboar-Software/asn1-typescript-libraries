/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { AttributeType } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta.mjs";
import { id_pda } from "../PKIXqualified97/id-pda.va.mjs";


/**
 * @summary id_pda_dateOfBirth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-dateOfBirth          AttributeType ::= { id-pda 1 }
 * ```
 *
 * @constant
 */
export const id_pda_dateOfBirth: AttributeType = new _OID([1], id_pda);

/* eslint-enable */
