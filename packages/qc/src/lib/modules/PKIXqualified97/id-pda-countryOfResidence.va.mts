/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { AttributeType } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta.mjs";
import { id_pda } from "../PKIXqualified97/id-pda.va.mjs";


/**
 * @summary id_pda_countryOfResidence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-countryOfResidence   AttributeType ::= { id-pda 5 }
 * ```
 *
 * @constant
 */
export const id_pda_countryOfResidence: AttributeType = new _OID([5], id_pda);

/* eslint-enable */
