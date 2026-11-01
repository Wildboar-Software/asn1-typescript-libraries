/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { oc } from "../MIXERAddressMapping/oc.va.mjs";
// export { oc } from "../MIXERAddressMapping/oc.va.mjs";


/**
 * @summary oc_mixer_gateway
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oc-mixer-gateway OBJECT IDENTIFIER ::= {oc 4}
 * ```
 * 
 * @constant
 */
export
const oc_mixer_gateway: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], oc);

/* eslint-enable */
