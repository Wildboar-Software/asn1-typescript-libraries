/* eslint-disable */
import { ObjectIdentifier as _OID } from "asn1-ts";
import { AttributeType } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta.js";
import { id_pda } from "../PKIXqualified97/id-pda.va.js";

/* START_OF_SYMBOL_DEFINITION id_pda_countryOfCitizenship */
/**
 * @summary id_pda_countryOfCitizenship
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pda-countryOfCitizenship AttributeType ::= { id-pda 4 }
 * ```
 *
 * @constant
 */
export const id_pda_countryOfCitizenship: AttributeType = new _OID([4], id_pda);
/* END_OF_SYMBOL_DEFINITION id_pda_countryOfCitizenship */

/* eslint-enable */
