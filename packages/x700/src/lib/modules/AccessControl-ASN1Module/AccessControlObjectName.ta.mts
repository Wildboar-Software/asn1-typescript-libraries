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
 * @summary AccessControlObjectName
 * @description
 *
 * Naming attribute of specializations of the `accessControl`
 * managed object class (rules, targets, initiators,
 * notification emitter, etc.). Matches EQUALITY,
 * SUBSTRINGS. ITU-T Rec. X.741 (04/95)
 * [§8.1.1.1.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * A.5.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AccessControlObjectName  ::=  GraphicString
 * ```
 */
export type AccessControlObjectName = GraphicString; // GraphicString


export const _decode_AccessControlObjectName = $._decodeGraphicString;


export const _encode_AccessControlObjectName = $._encodeGraphicString;


/* eslint-enable */
