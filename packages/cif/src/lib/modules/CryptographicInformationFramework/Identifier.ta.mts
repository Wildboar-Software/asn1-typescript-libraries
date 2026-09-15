/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { cia_ub_identifier } from "../CryptographicInformationFramework/cia-ub-identifier.va.mjs";



/**
 * @summary Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identifier  ::=  OCTET STRING (SIZE (0..cia-ub-identifier))
 * ```
 */
export
type Identifier = OCTET_STRING; // OctetStringType
export const _decode_Identifier = (el: _Element): Identifier => {
    const value = $._decodeOctetString(el);
    if (value.length > cia_ub_identifier) {
        throw new ASN1SizeError("Identifier violates SIZE constraint");
    }
    return value;
};
export const _encode_Identifier = $._encodeOctetString;


/* eslint-enable */
