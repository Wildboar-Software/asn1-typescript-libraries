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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeOfDay
 * @description
 *
 * Time as 4 or 6 octets. First four octets are milliseconds since midnight
 * (bits 28–31 of that 32-bit field are zero). Six-octet form appends days since
 * 1984-01-01 (day 0). Four-octet form has no date. Granularity of the
 * millisecond field is stated in the PICS (ISO 9506-2:2003 §7.5.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeOfDay  ::=  OCTET STRING (SIZE(4|6))
 * ```
 */
export
type TimeOfDay = OCTET_STRING; // OctetStringType
export const _decode_TimeOfDay = (el: _Element): TimeOfDay => {
    const value = $._decodeOctetString(el);
    if (value.length !== 4 && value.length !== 6) {
        throw new ASN1SizeError("TimeOfDay violates SIZE constraint");
    }
    return value;
};
export const _encode_TimeOfDay = $._encodeOctetString;


/* eslint-enable */
