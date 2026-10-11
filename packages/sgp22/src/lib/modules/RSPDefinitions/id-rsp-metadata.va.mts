/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp } from "../RSPDefinitions/id-rsp.va.mjs";


/**
 * @summary id_rsp_metadata
 * @description
 * 
 * Metadata arc `{id-rsp metadata(3)}`. Parent of service-specific metadata
 * OIDs. SGP.22 v3.1 Annex H defines `id-rsp` but the metadata children in this
 * module are not in that annex.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-metadata OBJECT IDENTIFIER ::= { id-rsp metadata(3)}
 * ```
 * 
 * @constant
 */
export
const id_rsp_metadata: OBJECT_IDENTIFIER = _OID.fromParts([
    /* metadata */ 3,
], id_rsp);

/* eslint-enable */
