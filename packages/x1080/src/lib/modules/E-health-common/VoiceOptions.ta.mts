/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary VoiceOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VoiceOptions  ::=  OBJECT IDENTIFIER
 * ```
 */
export type VoiceOptions = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_VoiceOptions = $._decodeObjectIdentifier;




export const _encode_VoiceOptions = $._encodeObjectIdentifier;


/* eslint-enable */
