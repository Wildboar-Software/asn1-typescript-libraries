/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary CancelRequestedByManager
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CancelRequestedByManager  ::=  BOOLEAN
 * ```
 */
export type CancelRequestedByManager = BOOLEAN; // BooleanType




export const _decode_CancelRequestedByManager = $._decodeBoolean;




export const _encode_CancelRequestedByManager = $._encodeBoolean;


/* eslint-enable */
