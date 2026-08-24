/* eslint-disable */
import {
    IA5String,
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
 * @summary MTAName
 * @description
 *
 * `MTAName`. This argument identifies the MTA which created the report. It comprises an
 * MTA-name, a global-domain-identifier, and optionally a directory-name of an MHS
 * Message Transfer Agent (see A.1.3 of by the security policy in force. See ITU-T X.411
 * (1999), §8.3.1.2.1.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTAName  ::=  IA5String(SIZE (1..ub-mta-name-length))
 * ```
 */
export type MTAName = IA5String; // IA5String


export const _decode_MTAName = $._decodeIA5String;


export const _encode_MTAName = $._encodeIA5String;


/* eslint-enable */
