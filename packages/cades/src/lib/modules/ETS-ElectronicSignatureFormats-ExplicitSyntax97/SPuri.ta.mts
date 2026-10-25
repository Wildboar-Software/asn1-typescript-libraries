/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SPuri
 * @description
 *
 * Web URI or URL of the signature policy. Qualifier type for
 * `id-spq-ets-uri`. ETSI TS 101 733 V2.2.1 (2013-04) §5.8.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SPuri  ::=  IA5String
 * ```
 */
export
type SPuri = IA5String; // IA5String


export const _decode_SPuri: $.ASN1Decoder<string> = $._decodeIA5String;


export const _encode_SPuri: $.ASN1Encoder<string> = $._encodeIA5String;


/* eslint-enable */
