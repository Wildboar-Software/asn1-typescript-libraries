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
import { type DMI_EXTENSION } from "../Attribute-ASN1Module/DMI-EXTENSION.oca.mjs";
/**
 * @summary ManagementExtensionSet
 * @description
 * 
 * Extensible object set of `DMI-EXTENSION` values that may appear in
 * `ManagementExtension`. Starts empty (`{...}`); other modules add members.
 * ITU-T Rec. X.721 (02/92) Cor.4 §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManagementExtensionSet DMI-EXTENSION ::= {...}
 * ```
 * 
 * @constant
 * @type {DMI_EXTENSION[]}
 * 
 */
export
const ManagementExtensionSet: (DMI_EXTENSION)[] = [];

/* eslint-enable */
