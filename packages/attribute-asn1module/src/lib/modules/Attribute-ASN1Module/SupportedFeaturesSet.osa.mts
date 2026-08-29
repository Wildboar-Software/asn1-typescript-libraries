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
import { type DMI_SUPPORTEDFEATURES } from "../Attribute-ASN1Module/DMI-SUPPORTEDFEATURES.oca.mjs";
/**
 * @summary SupportedFeaturesSet
 * @description
 * 
 * Extensible object set of `DMI-SUPPORTEDFEATURES` values that may appear in
 * `SupportedFeatures`. Starts empty (`{...}`). ITU-T Rec. X.721 (02/92) Cor.4
 * §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedFeaturesSet DMI-SUPPORTEDFEATURES ::= {...}
 * ```
 * 
 * @constant
 * @type {DMI_SUPPORTEDFEATURES[]}
 * 
 */
export
const SupportedFeaturesSet: (DMI_SUPPORTEDFEATURES)[] = [];

/* eslint-enable */
