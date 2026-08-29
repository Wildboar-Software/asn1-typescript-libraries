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
 * OID naming the voice options. On `INTERACTIVE-OPERATION`, the
 * `&Voice-options` type field may be present only if
 * `&requirements` is not `none`. ITU-T Rec. X.1080.1 (05/2018)
 * [§10.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I),
 * §11.1.1.
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
