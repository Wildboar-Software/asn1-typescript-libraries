/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";
// export { id_contract } from "../IN-object-identifiers/id-contract.va.mjs";


/**
 * @summary id_inSsfToScfDpSpecific
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-inSsfToScfDpSpecific OBJECT IDENTIFIER ::= {id-contract inSsfToScfDpSpecific(4)}
 * ```
 * 
 * @constant
 */
export
const id_inSsfToScfDpSpecific: OBJECT_IDENTIFIER = _OID.fromParts([
    /* inSsfToScfDpSpecific */ 4,
], id_contract);

/* eslint-enable */
