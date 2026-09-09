/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { id_rosObject } from "../CAP-object-identifiers/id-rosObject.va.mjs";
// export { id_rosObject } from "../CAP-object-identifiers/id-rosObject.va.mjs";


/**
 * @summary id_rosObject_gsmSRF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-gsmSRF                OBJECT IDENTIFIER ::= {id-rosObject 6}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_gsmSRF: OBJECT_IDENTIFIER = _OID.fromParts([
    6,
], id_rosObject);

/* eslint-enable */
