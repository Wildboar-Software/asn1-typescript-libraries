/* eslint-disable */
import {
    GraphicString,
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
 * @summary SapId
 * @description
 *
 * Naming attribute of both `sap1` and `sap2`. `sap1` is
 * an (N)-SAP whose address depends on the underlying
 * layer; named under `communicationsEntity`. `sap2` is
 * independent of the underlying SAP address; named under
 * `subsystem`. GDMO MATCHES FOR EQUALITY. Registered as
 * `{joint-iso-ccitt ms(9) smi(3) part5(5) attribute(7)
 * sapId(10)}`. ITU-T Rec. X.723 (11/1993)
 * [§9.16](https://www.itu.int/rec/T-REC-X.723-199311-I),
 * §7.6, §7.7, §8.5, §8.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SapId  ::=  GraphicString
 * ```
 */
export
type SapId = GraphicString; // GraphicString




export const _decode_SapId = $._decodeGraphicString;




export const _encode_SapId = $._encodeGraphicString;


/* eslint-enable */
