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
import { KEY_IDENTIFIER } from "../CryptographicInformationFramework/KEY-IDENTIFIER.oca.mjs";
// export { KEY_IDENTIFIER } from "../CryptographicInformationFramework/KEY-IDENTIFIER.oca.mjs";
import { issuerAndSerialNumber } from "../CryptographicInformationFramework/issuerAndSerialNumber.oa.mjs";
// export { issuerAndSerialNumber } from "../CryptographicInformationFramework/issuerAndSerialNumber.oa.mjs";
import { issuerAndSerialNumberHash } from "../CryptographicInformationFramework/issuerAndSerialNumberHash.oa.mjs";
// export { issuerAndSerialNumberHash } from "../CryptographicInformationFramework/issuerAndSerialNumberHash.oa.mjs";
import { subjectKeyId } from "../CryptographicInformationFramework/subjectKeyId.oa.mjs";
// export { subjectKeyId } from "../CryptographicInformationFramework/subjectKeyId.oa.mjs";
import { subjectKeyHash } from "../CryptographicInformationFramework/subjectKeyHash.oa.mjs";
// export { subjectKeyHash } from "../CryptographicInformationFramework/subjectKeyHash.oa.mjs";
import { issuerKeyHash } from "../CryptographicInformationFramework/issuerKeyHash.oa.mjs";
// export { issuerKeyHash } from "../CryptographicInformationFramework/issuerKeyHash.oa.mjs";
import { issuerNameHash } from "../CryptographicInformationFramework/issuerNameHash.oa.mjs";
// export { issuerNameHash } from "../CryptographicInformationFramework/issuerNameHash.oa.mjs";
import { subjectNameHash } from "../CryptographicInformationFramework/subjectNameHash.oa.mjs";
// export { subjectNameHash } from "../CryptographicInformationFramework/subjectNameHash.oa.mjs";
import { pgp2KeyId } from "../CryptographicInformationFramework/pgp2KeyId.oa.mjs";
// export { pgp2KeyId } from "../CryptographicInformationFramework/pgp2KeyId.oa.mjs";
import { openPGPKeyId } from "../CryptographicInformationFramework/openPGPKeyId.oa.mjs";
// export { openPGPKeyId } from "../CryptographicInformationFramework/openPGPKeyId.oa.mjs";
import { certificateHolderReference } from "../CryptographicInformationFramework/certificateHolderReference.oa.mjs";
// export { certificateHolderReference } from "../CryptographicInformationFramework/certificateHolderReference.oa.mjs";


/**
 * @summary KeyIdentifiers
 * @description
 * 
 * The nine (extensible) identification methods for private keys and
 * certificates. ISO/IEC 7816-15:2016 §8.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeyIdentifiers KEY-IDENTIFIER ::= {
 *     issuerAndSerialNumber    
 *     | issuerAndSerialNumberHash
 *     | subjectKeyId             
 *     | subjectKeyHash           
 *     | issuerKeyHash            
 *     | issuerNameHash           
 *     | subjectNameHash          
 *     | pgp2KeyId                
 *     | openPGPKeyId             
 *     | certificateHolderReference,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @constant
 * @type {KEY_IDENTIFIER[]}
 * 
 */
export
const KeyIdentifiers: (KEY_IDENTIFIER)[] = [ issuerAndSerialNumber, issuerAndSerialNumberHash, subjectKeyId, subjectKeyHash, issuerKeyHash, issuerNameHash, subjectNameHash, pgp2KeyId, openPGPKeyId, certificateHolderReference, ];

/* eslint-enable */
