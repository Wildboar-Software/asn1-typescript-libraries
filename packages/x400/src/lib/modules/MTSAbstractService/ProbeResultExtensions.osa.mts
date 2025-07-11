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
} from '@wildboar/asn1';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
import { PrivateExtensions } from '../MTSAbstractService/PrivateExtensions.osa.mjs';
/**
 * @summary ProbeResultExtensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeResultExtensions EXTENSION ::= {PrivateExtensions, ...}
 * ```
 *
 * @constant
 * @type {EXTENSION[]}
 *
 */
export const ProbeResultExtensions: EXTENSION[] = [...PrivateExtensions];

/* eslint-enable */
