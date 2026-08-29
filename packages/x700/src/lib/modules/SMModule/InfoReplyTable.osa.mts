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
import { type INFO_REPLY_IDENTIFIER } from '../SMModule/INFO-REPLY-IDENTIFIER.oca.mjs';
/**
 * @summary InfoReplyTable
 * @description
 *
 * GDMO example support from X.722 Amendment 2 (not a
 * production SM function). Empty information-object set of
 * class `INFO-REPLY-IDENTIFIER`, to be filled by GDMO ACTION
 * and NOTIFICATION templates. ITU-T Rec. X.722 (01/92)/Amd.2
 * (08/97)
 * [item 4](https://www.itu.int/rec/T-REC-X.722-199708-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InfoReplyTable INFO-REPLY-IDENTIFIER ::= {...}
 * ```
 *
 * @constant
 * @type {INFO_REPLY_IDENTIFIER[]}
 *
 */
export const InfoReplyTable: INFO_REPLY_IDENTIFIER[] = [];

/* eslint-enable */
