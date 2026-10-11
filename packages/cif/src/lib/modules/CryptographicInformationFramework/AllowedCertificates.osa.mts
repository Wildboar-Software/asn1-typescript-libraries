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
import { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";


/**
 * @summary AllowedCertificates
 * @description
 * 
 * Open `CIO-OPAQUE` set for generic certificates. Empty here; profiles or PICS
 * fill it. ISO/IEC 7816-15:2016 §8.2.16.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedCertificates CIO-OPAQUE ::= {...}
 * ```
 * 
 * @constant
 * @type {CIO_OPAQUE[]}
 * 
 */
export
const AllowedCertificates: (CIO_OPAQUE)[] = [];

/* eslint-enable */
