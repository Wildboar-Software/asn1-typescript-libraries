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
import { type INTERACTIVE_OPERATION } from '../E-health-common/INTERACTIVE-OPERATION.oca.mjs';

/**
 * @summary SupportedOperationTypes
 * @description
 *
 * Extensible set of `INTERACTIVE-OPERATION` objects allowed in a
 * session. Empty in this module (`{...}`). Constrains
 * `E-setupRequest.operations` and `first`. ITU-T Rec. X.1080.1
 * (05/2018) §11.1.1, Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedOperationTypes INTERACTIVE-OPERATION ::= {...}
 * ```
 *
 * @constant
 * @type {INTERACTIVE_OPERATION[]}
 *
 */
export const SupportedOperationTypes: INTERACTIVE_OPERATION[] = [];

/* eslint-enable */
