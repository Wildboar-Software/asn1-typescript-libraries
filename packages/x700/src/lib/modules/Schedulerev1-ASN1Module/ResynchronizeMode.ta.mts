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
 * @summary ResynchronizeMode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResynchronizeMode  ::=  BOOLEAN
 * ```
 */
export type ResynchronizeMode = BOOLEAN; // BooleanType




export const _decode_ResynchronizeMode = $._decodeBoolean;




export const _encode_ResynchronizeMode = $._encodeBoolean;


/* eslint-enable */
