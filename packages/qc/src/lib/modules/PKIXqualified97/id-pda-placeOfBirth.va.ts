/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { AttributeType } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta.js";
import { id_pda } from "../PKIXqualified97/id-pda.va.js";

/* START_OF_SYMBOL_DEFINITION id_pda_placeOfBirth */
/**
 * @summary id_pda_placeOfBirth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-placeOfBirth         AttributeType ::= { id-pda 2 }
 * ```
 *
 * @constant
 */
export const id_pda_placeOfBirth: AttributeType = new _OID([2], id_pda);
/* END_OF_SYMBOL_DEFINITION id_pda_placeOfBirth */

/* eslint-enable */
