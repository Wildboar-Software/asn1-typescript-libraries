/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_aca } from "../IN-CS3-object-identifiers/id-aca.va.mjs";
// export { id_aca } from "../IN-CS3-object-identifiers/id-aca.va.mjs";


/**
 * @summary id_aca_prescriptiveACI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-aca-prescriptiveACI OBJECT IDENTIFIER ::= {id-aca prescriptiveACI(4)}
 * ```
 * 
 * @constant
 */
export
const id_aca_prescriptiveACI: OBJECT_IDENTIFIER = _OID.fromParts([
    /* prescriptiveACI */ 4,
], id_aca);

/* eslint-enable */
