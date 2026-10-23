/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary ds_UsefulDefinitions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ds-UsefulDefinitions OBJECT IDENTIFIER ::= {joint-iso-itu-t ds(5) module(1) usefulDefinitions(0) 3}
 * ```
 * 
 * @constant
 */
export
const ds_UsefulDefinitions: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ds */ 5,
    /* module */ 1,
    /* usefulDefinitions */ 0,
    3,
], joint_iso_itu_t);

/* eslint-enable */
