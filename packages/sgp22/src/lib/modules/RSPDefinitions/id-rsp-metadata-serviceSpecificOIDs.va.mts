/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp_metadata } from "../RSPDefinitions/id-rsp-metadata.va.mjs";
// export { id_rsp_metadata } from "../RSPDefinitions/id-rsp-metadata.va.mjs";


/**
 * @summary id_rsp_metadata_serviceSpecificOIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-metadata-serviceSpecificOIDs OBJECT IDENTIFIER ::= { id-rsp-metadata serviceSpecificOIDs (1)}
 * ```
 * 
 * @constant
 */
export
const id_rsp_metadata_serviceSpecificOIDs: OBJECT_IDENTIFIER = _OID.fromParts([
    /* serviceSpecificOIDs */ 1,
], id_rsp_metadata);

/* eslint-enable */
