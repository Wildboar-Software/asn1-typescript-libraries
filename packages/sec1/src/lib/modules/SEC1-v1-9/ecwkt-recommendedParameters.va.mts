/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { secg_scheme } from "../SEC1-v1-9/secg-scheme.va.mjs";
/**
 * @summary ecwkt_recommendedParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecwkt-recommendedParameters OBJECT IDENTIFIER ::= {secg-scheme 9}
 * ```
 * 
 * @constant
 */
export
const ecwkt_recommendedParameters: OBJECT_IDENTIFIER = _OID.fromParts([
    9,
], secg_scheme);

/* eslint-enable */
