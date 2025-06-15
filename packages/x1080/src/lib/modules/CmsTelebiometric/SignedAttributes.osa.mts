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
} from 'asn1-ts';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import { contentType } from '../CmsTelebiometric/contentType.oa.mjs';
import { messageDigest } from '../CmsTelebiometric/messageDigest.oa.mjs';

/**
 * @summary SignedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedAttributes ATTRIBUTE ::= { contentType | messageDigest, ... }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const SignedAttributes: ATTRIBUTE[] = [contentType, messageDigest];

/* eslint-enable */
