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
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import { aa_CEKReference } from '../CmsTelebiometric/aa-CEKReference.oa.mjs';
import { aa_CEKMaxDecrypts } from '../CmsTelebiometric/aa-CEKMaxDecrypts.oa.mjs';
import { aa_KEKDerivationAlg } from '../CmsTelebiometric/aa-KEKDerivationAlg.oa.mjs';

/**
 * @summary UnauthAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnauthAttributes ATTRIBUTE ::= { aa-CEKReference | aa-CEKMaxDecrypts | aa-KEKDerivationAlg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const UnauthAttributes: ATTRIBUTE[] = [
    aa_CEKReference,
    aa_CEKMaxDecrypts,
    aa_KEKDerivationAlg,
];

/* eslint-enable */
