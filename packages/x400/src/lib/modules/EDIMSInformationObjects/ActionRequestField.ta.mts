/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type ASN1Element as _Element,
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
 * @summary ActionRequestField
 * @description
 *
 * Defined in ITU-T X.435 (1999) (§8).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionRequestField  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ActionRequestField = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ActionRequestField: $.ASN1Decoder<_OID> = $._decodeObjectIdentifier;


export const _encode_ActionRequestField: $.ASN1Encoder<_OID> = $._encodeObjectIdentifier;


/* eslint-enable */
