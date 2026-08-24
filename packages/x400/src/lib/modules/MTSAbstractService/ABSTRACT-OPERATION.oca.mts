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
import { type OPERATION } from '@wildboar/rose';
/**
 * @summary ABSTRACT_OPERATION
 * @description
 *
 * Information object class `ABSTRACT_OPERATION`. This clause defines the following
 * transfer-port abstract-operations: a) Message-transfer b) Probe-transfer c)
 * Report-transfer. 12.2.1.1 Message-transfer The Message-transfer abstract-operation
 * enables an MTA to transfer a message to another MTA. See ITU-T X.411 (1999), §12.2.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ABSTRACT-OPERATION ::= OPERATION
 * ```
 *
 * @interface
 */
export type ABSTRACT_OPERATION <Argument = any, Result = any> = OPERATION <Argument, Result>;

/* eslint-enable */
