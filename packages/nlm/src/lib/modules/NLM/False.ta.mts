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
 * @summary False
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * False  ::=  BOOLEAN(FALSE)
 * ```
 */
export type False = BOOLEAN; // BooleanType




export const _decode_False = $._decodeBoolean;




export const _encode_False = $._encodeBoolean;


/* eslint-enable */
