/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_all
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-all                  OBJECT IDENTIFIER ::= {id-swb 20}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_all: OBJECT_IDENTIFIER = _OID.fromParts([
    20,
], id_swb);

/* eslint-enable */
