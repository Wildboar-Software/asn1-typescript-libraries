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
 * @summary DefaultIndex
 * @description
 *
 * Syntax of `defaultIndex` (`{schedAtt 14}`). Index applied
 * when none of the independent `schedulingData` intervals are
 * valid, and when an interval scheduler is deleted,
 * suspended, or outside its duration. Default 0. Present if
 * the multi-scheduler instance provides interval scheduling.
 * ITU-T Rec. X.746 (02/00)
 * [§8.3.13](https://www.itu.int/rec/T-REC-X.746-200002-I),
 * 8.2.10, A.1.11, A.4.0.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultIndex  ::=  INTEGER
 * ```
 */
export type DefaultIndex = INTEGER;




export const _decode_DefaultIndex = $._decodeInteger;




export const _encode_DefaultIndex = $._encodeInteger;


/* eslint-enable */
