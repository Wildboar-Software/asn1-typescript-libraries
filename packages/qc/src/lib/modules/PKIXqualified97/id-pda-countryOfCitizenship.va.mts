/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import type { AttributeType } from "@wildboar/x500/InformationFramework";
import { id_pda } from "../PKIXqualified97/id-pda.va.mjs";

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
export const id_pda_countryOfCitizenship: AttributeType = _OID.fromParts([4], id_pda);

/* eslint-enable */
