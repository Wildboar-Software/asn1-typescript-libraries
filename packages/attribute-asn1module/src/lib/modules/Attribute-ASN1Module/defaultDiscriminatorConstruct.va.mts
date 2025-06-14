/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import { DiscriminatorConstruct, _decode_DiscriminatorConstruct, _encode_DiscriminatorConstruct } from "../Attribute-ASN1Module/DiscriminatorConstruct.ta.mjs";
import { _decode_FilterItem, _encode_FilterItem } from "@wildboar/cmip/src/lib/modules/CMIP-1/FilterItem.ta.mjs";
import { _decode_CMISFilter, _encode_CMISFilter } from "@wildboar/cmip/src/lib/modules/CMIP-1/CMISFilter.ta.mjs";
/* START_OF_SYMBOL_DEFINITION defaultDiscriminatorConstruct */
/**
 * @summary defaultDiscriminatorConstruct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * defaultDiscriminatorConstruct DiscriminatorConstruct ::= and:{}
 * ```
 *
 * @constant
 */
export
const defaultDiscriminatorConstruct: DiscriminatorConstruct = { and: [] };
/* END_OF_SYMBOL_DEFINITION defaultDiscriminatorConstruct */

/* eslint-enable */
