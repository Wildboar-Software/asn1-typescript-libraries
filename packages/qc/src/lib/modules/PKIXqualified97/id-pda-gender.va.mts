/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import { id_pda } from "../PKIXqualified97/id-pda.va.mjs";


/**
 * @summary id_pda_gender
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-gender               AttributeType ::= { id-pda 3 }
 * ```
 *
 * @constant
 */
export const id_pda_gender: AttributeType = _OID.fromParts([3], id_pda);

/* eslint-enable */
