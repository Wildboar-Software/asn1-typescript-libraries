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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary Identity
 * @description
 *
 * GraphicString identifying an entity: `identityOfCreator`,
 * `identityOfLastModifier`, or `ExecuteProgramReply.processOwner`.
 * ITU-T Rec. X.744 (10/96)
 * [§8.2.14](https://www.itu.int/rec/T-REC-X.744-199610-I),
 * §8.2.15, A.3.14, A.3.15, A.8.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identity  ::=  GraphicString
 * ```
 */
export type Identity = GraphicString; // GraphicString


export const _decode_Identity = $._decodeGraphicString;


export const _encode_Identity = $._encodeGraphicString;


/* eslint-enable */
