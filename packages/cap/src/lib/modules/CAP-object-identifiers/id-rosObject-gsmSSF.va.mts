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
 * @summary id_rosObject_gsmSSF
 * @description
 *
 * OID of the gsmSSF ROS object (`{id-rosObject 5}`).
 * (3GPP TS 29.078 V19.0.0 clause 5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-rosObject-gsmSSF                OBJECT IDENTIFIER ::= {id-rosObject 5}
 * ```
 * 
 * @constant
 */
export
const id_rosObject_gsmSSF: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], id_rosObject);

/* eslint-enable */
