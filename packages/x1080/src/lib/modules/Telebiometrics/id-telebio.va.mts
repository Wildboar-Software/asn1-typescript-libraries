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
} from '@wildboar/asn1';


/**
 * @summary id_telebio
 * @description
 *
 * Root arc `{joint-iso-itu-t(2) telebiometrics(42)}` for telebiometrics
 * work. OID-IRI `"/Telebiometrics"`. ITU-T X.1080.1 (05/2018) §7.1,
 * Annex A; X.1082 Amd.1 §12.1.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 * https://www.itu.int/rec/T-REC-X.1082-200711-I!Amd1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-telebio     OBJECT IDENTIFIER ::= { joint-iso-itu-t(2) telebiometrics(42) }
 * ```
 *
 * @constant
 */
export const id_telebio: OBJECT_IDENTIFIER = _OID.fromParts([
    /* joint-iso-itu-t */ 2,
    /* telebiometrics */ 42,
]);

/* eslint-enable */
