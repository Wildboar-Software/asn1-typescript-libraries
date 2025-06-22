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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Implicit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Implicit  ::=  BOOLEAN(TRUE)
 * ```
 */
export type Implicit = BOOLEAN; // BooleanType




export const _decode_Implicit = $._decodeBoolean;




export const _encode_Implicit = $._encodeBoolean;


/* eslint-enable */
