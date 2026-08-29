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
import { type ATTRIBUTE } from '@wildboar/x500/InformationFramework';
import { aa_CEKReference } from '../CmsTelebiometric/aa-CEKReference.oa.mjs';
import { aa_CEKMaxDecrypts } from '../CmsTelebiometric/aa-CEKMaxDecrypts.oa.mjs';
import { aa_KEKDerivationAlg } from '../CmsTelebiometric/aa-KEKDerivationAlg.oa.mjs';

/**
 * @summary UnprotectedAttributes
 * @description
 *
 * Unprotected attributes on `EnvelopedData`: `aa-CEKReference`,
 * `aa-CEKMaxDecrypts`, `aa-KEKDerivationAlg`. Required if the
 * next message in that direction is expected to be
 * `ct-authEnvelopedData`; else may be absent. If high security,
 * `aa-CEKMaxDecrypts` should be 1 or omitted.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.3.1, B.3.4.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnprotectedAttributes ATTRIBUTE ::= { aa-CEKReference | aa-CEKMaxDecrypts | aa-KEKDerivationAlg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const UnprotectedAttributes: ATTRIBUTE[] = [
    aa_CEKReference,
    aa_CEKMaxDecrypts,
    aa_KEKDerivationAlg,
];

/* eslint-enable */
