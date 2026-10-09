/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { pkiAttributeType } from "../PKIS/pkiAttributeType.va.mjs";


/**
 * @summary pa_sa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pa-sa OBJECT IDENTIFIER ::= { pkiAttributeType 1 }
 * ```
 * 
 * @constant
 */
export
const pa_sa: OBJECT_IDENTIFIER = _OID.fromParts([
    1,
], pkiAttributeType);

/* eslint-enable */
