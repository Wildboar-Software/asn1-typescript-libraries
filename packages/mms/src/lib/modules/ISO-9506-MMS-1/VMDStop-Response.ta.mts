/* eslint-disable */
import {
    NULL,
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
 * @summary VMDStop_Response
 * @description
 * 
 * Confirmed Result(+) of VMDStop. No service-specific parameters. After
 * success: `&operationState` = `manual-intervention-required`; `&localControl`
 * undefined; `&logicalStatus` = `no-state-changes-allowed`; `&physicalStatus` =
 * `needs-commissioning`. Running Program Invocations are removed from running
 * (new state is a local matter). ISO 9506-1:2003 §10.9.1.2, §10.9.2 Table 29;
 * ISO 9506-2:2003 §10.9.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMDStop-Response  ::=  NULL
 * ```
 */
export
type VMDStop_Response = NULL; // NullType
export const _decode_VMDStop_Response = $._decodeNull;
export const _encode_VMDStop_Response = $._encodeNull;


/* eslint-enable */
