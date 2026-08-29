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
import { type CDTC_SIGNAL_TYPE } from '../TestCategories-ASN1Module/CDTC-SIGNAL-TYPE.oca.mjs';
/**
 * @summary SignalTypeSet
 * @description
 *
 * Extensible object set of `CDTC-SIGNAL-TYPE` information
 * objects that may appear as resource-boundary signals. Published
 * empty (`{...}`); implementations populate it. ITU-T Rec.
 * X.737 Cor.2 (02/00) [https://www.itu.int/rec/T-REC-X.737-200002-I].
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignalTypeSet CDTC-SIGNAL-TYPE ::= {...}
 * ```
 *
 * @constant
 * @type {CDTC_SIGNAL_TYPE[]}
 *
 */
export const SignalTypeSet: CDTC_SIGNAL_TYPE[] = [];

/* eslint-enable */
