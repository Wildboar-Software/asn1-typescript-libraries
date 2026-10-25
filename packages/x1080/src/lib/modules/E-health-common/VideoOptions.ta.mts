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
 * @summary VideoOptions
 * @description
 *
 * OID naming the video options. On `INTERACTIVE-OPERATION`, the
 * `&Video-options` type field may be present only for
 * `with-reverse-video-and-2-way-voice` or
 * `with-2-way-video-and-voice`. ITU-T Rec. X.1080.1 (05/2018)
 * [§10.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I),
 * §11.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideoOptions  ::=  OBJECT IDENTIFIER
 * ```
 */
export type VideoOptions = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_VideoOptions: $.ASN1Decoder<_OID> = $._decodeObjectIdentifier;




export const _encode_VideoOptions: $.ASN1Encoder<_OID> = $._encodeObjectIdentifier;


/* eslint-enable */
