/* eslint-disable */
import {
    INTEGER,
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
 * @summary SequenceNumber
 * @description
 *
 * INTEGER sequence number of an MS entry (ITU-T X.413 (1999), §6.3). Assigned by the MS;
 * `0` may be a valid number depending on the MS — do not treat zero as 'none'.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SequenceNumber  ::=  INTEGER(0..ub-messages)
 * ```
 */
export type SequenceNumber = INTEGER;


export const _decode_SequenceNumber = $._decodeInteger;


export const _encode_SequenceNumber = $._encodeInteger;


/* eslint-enable */
