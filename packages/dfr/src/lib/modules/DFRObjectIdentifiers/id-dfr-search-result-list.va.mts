/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { ID, _decode_ID, _encode_ID } from "../DFRObjectIdentifiers/ID.ta.mjs";
import { id_dfr_oc } from "../DFRObjectIdentifiers/id-dfr-oc.va.mjs";


/**
 * @summary id_dfr_search_result_list
 * @description
 *
 * Search-result-list object class. {id-dfr-oc 4}. ISO/IEC 10166-1:1991 Annex
 * B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-dfr-search-result-list   ID ::= {id-dfr-oc 4}
 * ```
 * 
 * @constant
 */
export
const id_dfr_search_result_list: ID = _OID.fromParts([
    4,
], id_dfr_oc);

/* eslint-enable */
