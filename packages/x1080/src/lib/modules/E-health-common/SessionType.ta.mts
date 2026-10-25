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
 * @summary SessionType
 * @description
 *
 * OID allocated by the telebiometrics specification that defines
 * the session type. ITU-T Rec. X.1080.1 (05/2018)
 * [§11.1.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SessionType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type SessionType = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_SessionType: $.ASN1Decoder<_OID> = $._decodeObjectIdentifier;




export const _encode_SessionType: $.ASN1Encoder<_OID> = $._encodeObjectIdentifier;


/* eslint-enable */
