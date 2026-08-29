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
 * @summary InvokeId
 * @description
 *
 * Integer 1..MAX; the ASN.1 comment says it is used by other
 * modules. Distinct from the optional `invokId` on content
 * templates (`INTEGER (0..MAX)`). ITU-T Rec. X.1080.1 (05/2018)
 * Annex B.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvokeId  ::=  INTEGER (1..MAX)
 * ```
 */
export type InvokeId = INTEGER;




export const _decode_InvokeId = $._decodeInteger;




export const _encode_InvokeId = $._encodeInteger;


/* eslint-enable */
