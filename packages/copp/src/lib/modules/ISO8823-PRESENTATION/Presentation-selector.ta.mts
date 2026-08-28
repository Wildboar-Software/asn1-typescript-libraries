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
 * @summary Presentation_selector
 * @description
 *
 * Presentation-address component that distinguishes PSAPs at a session
 * address (X.226 §3.3; X.216 §10.2.1.1–10.2.1.3). Session-address parts
 * travel as SSAP addresses, not in PPDU SS-user data (X.226 Tables 1–3).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-selector  ::=  OCTET STRING(SIZE (1..4, ..., 5..MAX))
 * ```
 */
export type Presentation_selector = OCTET_STRING; // OctetStringType




export const _decode_Presentation_selector = $._decodeOctetString;




export const _encode_Presentation_selector = $._encodeOctetString;


/* eslint-enable */
