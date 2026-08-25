/* eslint-disable */
import {
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
 * @summary AdditionalInformation
 * @description
 *
 * The specification of the contents of this argument is by bilateral agreement between
 * MDs. 12.2.1.3.2 Results The Report-transfer abstract-operation does not return a result.
 * See ITU-T X.411 (1999), §12.2.1.3.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdditionalInformation  ::=
 *   ADDITIONAL.
 *     &Type
 * ```
 */
export type AdditionalInformation = _Element; // ObjectClassFieldType


export const _decode_AdditionalInformation = $._decodeAny;


export const _encode_AdditionalInformation = $._encodeAny;


/* eslint-enable */
