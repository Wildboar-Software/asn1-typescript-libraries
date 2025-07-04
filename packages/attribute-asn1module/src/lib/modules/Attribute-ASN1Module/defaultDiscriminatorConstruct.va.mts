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
} from "@wildboar/asn1";
import { DiscriminatorConstruct, _decode_DiscriminatorConstruct, _encode_DiscriminatorConstruct } from "../Attribute-ASN1Module/DiscriminatorConstruct.ta.mjs";
import { _decode_FilterItem, _encode_FilterItem } from "@wildboar/cmip";
import { _decode_CMISFilter, _encode_CMISFilter } from "@wildboar/cmip";
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

/* eslint-enable */
