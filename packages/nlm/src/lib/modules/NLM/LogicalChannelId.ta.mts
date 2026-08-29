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
 * @summary LogicalChannelId
 * @description
 *
 * X.25 logical channel (1..4095; 12-bit). Syntax of `logicalChannel` and
 * `remoteLogicalChannel`; also PVC members of `logicalChannelAssignments`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LogicalChannelId  ::=  INTEGER(1..4095)
 * ```
 */
export type LogicalChannelId = INTEGER;




export const _decode_LogicalChannelId = $._decodeInteger;




export const _encode_LogicalChannelId = $._encodeInteger;


/* eslint-enable */
