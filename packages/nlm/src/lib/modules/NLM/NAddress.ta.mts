/* eslint-disable */
import {
    OCTET_STRING,
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
 * @summary NAddress
 * @description
 *
 * Network address, up to 20 octets. Same abstract syntax as an NSAP; used for
 * NETs (`networkEntityTitles`), `remoteNSAPAddress`, and address-extension
 * attributes (null allowed, e.g. when used by X.233).
 * ITU-T Rec. X.283 (12/97)
 * [§5.4](https://www.itu.int/rec/T-REC-X.283-199712-I), §5.9, §5.11.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NAddress  ::=  OCTET STRING(SIZE (0..20))
 * ```
 */
export type NAddress = OCTET_STRING; // OctetStringType




export const _decode_NAddress = $._decodeOctetString;




export const _encode_NAddress = $._encodeOctetString;


/* eslint-enable */
