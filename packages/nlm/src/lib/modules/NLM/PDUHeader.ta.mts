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
 * @summary PDUHeader
 * @description
 *
 * Encoded PDU header (1..255 octets). Base type of `PDUFormatErrorSyntax` and
 * of `PDUOtherErrorSyntax.header`. cLNS alarms use `OctetString`
 * (`notificationPDUHeader`), not this constrained type.
 * ITU-T Rec. X.283 (12/97)
 * [§6.2](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDUHeader  ::=  OCTET STRING(SIZE (1..255))
 * ```
 */
export type PDUHeader = OCTET_STRING; // OctetStringType




export const _decode_PDUHeader = $._decodeOctetString;




export const _encode_PDUHeader = $._encodeOctetString;


/* eslint-enable */
