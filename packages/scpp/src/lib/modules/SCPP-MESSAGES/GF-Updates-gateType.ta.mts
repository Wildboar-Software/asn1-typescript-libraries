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
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GF_Updates_gateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GF-Updates-gateType ::= ENUMERATED {
 *     sgf(0),
 *     rgf(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GF_Updates_gateType {
    sgf = 0,
    rgf = 1,
}

/**
 * @summary GF_Updates_gateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GF-Updates-gateType ::= ENUMERATED {
 *     sgf(0),
 *     rgf(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type GF_Updates_gateType = _enum_for_GF_Updates_gateType;

/**
 * @summary GF_Updates_gateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GF-Updates-gateType ::= ENUMERATED {
 *     sgf(0),
 *     rgf(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const GF_Updates_gateType = _enum_for_GF_Updates_gateType;

/**
 * @summary GF_Updates_gateType_sgf
 * @constant
 * @type {number}
 */
export
const GF_Updates_gateType_sgf: GF_Updates_gateType = GF_Updates_gateType.sgf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgf
 * @constant
 * @type {number}
 */
export
const sgf: GF_Updates_gateType = GF_Updates_gateType.sgf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GF_Updates_gateType_rgf
 * @constant
 * @type {number}
 */
export
const GF_Updates_gateType_rgf: GF_Updates_gateType = GF_Updates_gateType.rgf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rgf
 * @constant
 * @type {number}
 */
export
const rgf: GF_Updates_gateType = GF_Updates_gateType.rgf; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_GF_Updates_gateType = $._decodeEnumerated;
export const _encode_GF_Updates_gateType = $._encodeEnumerated;


/* eslint-enable */
