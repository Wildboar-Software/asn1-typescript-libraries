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
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary AUTO_ACTION_ERROR
 * @description
 *
 * Information object class `AUTO_ACTION_ERROR`. This general-attribute identifies the
 * auto-action-error which occurred when a registered auto-action was applied to an
 * entry. The attribute may be present only in entries of the Auto-action-log entry-class
 * (see 6.5.3). See ITU-T X.413 (1999), §11.2.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUTO-ACTION-ERROR ::= ABSTRACT-ERROR
 * ```
 *
 * @interface
 */
export type AUTO_ACTION_ERROR <Type = any> = ABSTRACT_ERROR <Type>;

/* eslint-enable */
