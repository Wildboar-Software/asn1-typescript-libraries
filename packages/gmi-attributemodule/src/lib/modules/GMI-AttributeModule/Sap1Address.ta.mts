/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
 * @summary Sap1Address
 * @description
 *
 * Selector this layer contributes to the address of a
 * `sap1`. That class is an (N)-SAP whose address depends
 * on the SAP address of the underlying layer. GDMO
 * MATCHES FOR EQUALITY. Registered as
 * `{joint-iso-ccitt ms(9) smi(3) part5(5) attribute(7)
 * sap1Address(8)}`. ITU-T Rec. X.723 (11/1993)
 * [§9.14](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §7.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sap1Address  ::=  INTEGER
 * ```
 */
export
type Sap1Address = INTEGER;




export const _decode_Sap1Address = $._decodeInteger;




export const _encode_Sap1Address = $._encodeInteger;


/* eslint-enable */
