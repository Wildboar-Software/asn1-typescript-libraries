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
 * @summary RegisteredAs
 * @description
 *
 * Registration object identifier of the represented template (always
 * assigned). Syntax of `registeredAs` on classes, name bindings,
 * attribute groups, actions, and notifications. ITU-T Rec. X.750
 * (10/96) [A.3.3](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegisteredAs  ::=  OBJECT IDENTIFIER
 * ```
 */
export type RegisteredAs = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_RegisteredAs = $._decodeObjectIdentifier;




export const _encode_RegisteredAs = $._encodeObjectIdentifier;


/* eslint-enable */
