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
import { id_mod } from "../DFRObjectIdentifiers/id-mod.va.mjs";


/**
 * @summary id_mod_extension_attributes
 * @description
 *
 * DFRExtensionAttributes module. {id-mod 3}. ISO/IEC 10166-1:1991 Annex B.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mod-extension-attributes ID ::= {id-mod 3}
 * ```
 * 
 * @constant
 */
export
const id_mod_extension_attributes: ID = _OID.fromParts([
    3,
], id_mod);

/* eslint-enable */
