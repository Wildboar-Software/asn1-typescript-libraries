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
// export { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";


/**
 * @summary AllowedOidDOs
 * @description
 * 
 * Open `CIO-OPAQUE` set for OID-identified data objects. Empty here; profiles
 * or PICS fill it. ISO/IEC 7816-15:2016 §8.8.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AllowedOidDOs CIO-OPAQUE ::= {...}
 * ```
 * 
 * @constant
 * @type {CIO_OPAQUE[]}
 * 
 */
export
const AllowedOidDOs: (CIO_OPAQUE)[] = [];

/* eslint-enable */
