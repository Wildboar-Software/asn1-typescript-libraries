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
 * @summary id_rosObject_gprsSSF
 * @description
 *
 * OID of the gprsSSF ROS object (`{id-rosObject 7}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-gprsSSF                OBJECT IDENTIFIER ::= {id-rosObject 7}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_gprsSSF: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], id_rosObject);

/* eslint-enable */
