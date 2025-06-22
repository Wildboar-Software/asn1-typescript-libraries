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
} from 'asn1-ts';


/**
 * @summary id_signedDataACBio
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-signedDataACBio OBJECT IDENTIFIER ::= {iso(1) standard(0) acbio(24761) contentType(2) signedDataACBio(1)}
 * ```
 *
 * @constant
 */
export const id_signedDataACBio: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* standard */ 0,
    /* acbio */ 24761,
    /* contentType */ 2,
    /* signedDataACBio */ 1,
]);

/* eslint-enable */
