/* eslint-disable */
import {
    GraphicString,
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
 * @summary CommunicationsEntityId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommunicationsEntityId  ::=  GraphicString
 * ```
 */
export type CommunicationsEntityId = GraphicString; // GraphicString




export const _decode_CommunicationsEntityId = $._decodeGraphicString;




export const _encode_CommunicationsEntityId = $._encodeGraphicString;


/* eslint-enable */
