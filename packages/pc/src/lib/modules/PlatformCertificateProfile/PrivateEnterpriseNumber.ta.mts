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
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivateEnterpriseNumber
 * @description
 *
 * IANA Private Enterprise Number as an OID under `enterprise`
 * (`{ iso identified-organization dod internet private enterprise }`).
 * Assigned numbers:
 * http://www.iana.org/assignments/enterprise-numbers/enterprise-numbers
 * TCG Platform Certificate Profile v1.1 r19 §3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateEnterpriseNumber  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type PrivateEnterpriseNumber = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_PrivateEnterpriseNumber = $._decodeObjectIdentifier;


export const _encode_PrivateEnterpriseNumber = $._encodeObjectIdentifier;


/* eslint-enable */
