/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pkiAttributeType } from "../PKIS/pkiAttributeType.va.mjs";


/**
 * @summary pa_rl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pa-rl OBJECT IDENTIFIER ::= { pkiAttributeType (2) }
 * ```
 * 
 * @constant
 */
export
const pa_rl: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], pkiAttributeType);

/* eslint-enable */
