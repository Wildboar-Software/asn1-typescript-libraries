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
import { ID, _decode_ID, _encode_ID } from "../DFRProtocolObjectIdentifiers/ID.ta.mjs";
// export { ID, _decode_ID, _encode_ID } from "../DFRProtocolObjectIdentifiers/ID.ta.mjs";
import { id_as } from "../DFRProtocolObjectIdentifiers/id-as.va.mjs";
// export { id_as } from "../DFRProtocolObjectIdentifiers/id-as.va.mjs";


/**
 * @summary id_as_dfr_ext_attr
 * @description
 *
 * Extension-attribute abstract syntax. {id-as 2}. ISO/IEC 10166-2:1991 Annex
 * A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-as-dfr-ext-attr   ID ::= {id-as 2}
 * ```
 * 
 * @constant
 */
export
const id_as_dfr_ext_attr: ID = _OID.fromParts([
    2,
], id_as);

/* eslint-enable */
