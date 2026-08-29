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
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary InformationType
 * @description
 *
 * Type of information held in a
 * `communicationsInformationRecord` (and the mandatory type
 * of `communicationsInformation`). MATCHES FOR EQUALITY.
 * Registered as `{… attribute(7) informationType(5)}`. The
 * rec does not register specific type OIDs. ITU-T Rec. X.723
 * (11/93)
 * [§9.10](https://www.itu.int/rec/T-REC-X.723-199311-I), §13.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type InformationType = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_InformationType = $._decodeObjectIdentifier;




export const _encode_InformationType = $._encodeObjectIdentifier;


/* eslint-enable */
