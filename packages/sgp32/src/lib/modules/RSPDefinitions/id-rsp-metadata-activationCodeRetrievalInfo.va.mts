/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_rsp_metadata_serviceSpecificOIDs } from "../RSPDefinitions/id-rsp-metadata-serviceSpecificOIDs.va.mjs";
// export { id_rsp_metadata_serviceSpecificOIDs } from "../RSPDefinitions/id-rsp-metadata-serviceSpecificOIDs.va.mjs";


/**
 * @summary id_rsp_metadata_activationCodeRetrievalInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rsp-metadata-activationCodeRetrievalInfo OBJECT IDENTIFIER ::= { id-rsp-metadata-serviceSpecificOIDs activationCodeRetrievalInfo (1)}
 * ```
 * 
 * @constant
 */
export
const id_rsp_metadata_activationCodeRetrievalInfo: OBJECT_IDENTIFIER = _OID.fromParts([
    /* activationCodeRetrievalInfo */ 1,
], id_rsp_metadata_serviceSpecificOIDs);

/* eslint-enable */
