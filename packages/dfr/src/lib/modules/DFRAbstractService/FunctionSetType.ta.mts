/* eslint-disable */
import {
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
 * @summary FunctionSetType
 * @description
 *
 * Installed usage type of the store, reported at bind. Group Create, Delete,
 * Copy, Move, Modify exist only in full-set. Group Read, List, Search exist in
 * pre-defined-store and full-set. ISO/IEC 10166-1:1991 §8.4. Violating the set
 * is `serviceError` function-set-violation.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionSetType  ::=  ENUMERATED {
 *     flat-store          (1),
 *     pre-defined-store   (2),
 *     full-set            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FunctionSetType {
    flat_store = 1,
    pre_defined_store = 2,
    full_set = 3,
}

/**
 * @summary FunctionSetType
 * @description
 *
 * Installed usage type of the store, reported at bind. Group Create, Delete,
 * Copy, Move, Modify exist only in full-set. Group Read, List, Search exist in
 * pre-defined-store and full-set. ISO/IEC 10166-1:1991 §8.4. Violating the set
 * is `serviceError` function-set-violation.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionSetType  ::=  ENUMERATED {
 *     flat-store          (1),
 *     pre-defined-store   (2),
 *     full-set            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FunctionSetType = _enum_for_FunctionSetType;

/**
 * @summary FunctionSetType
 * @description
 *
 * Installed usage type of the store, reported at bind. Group Create, Delete,
 * Copy, Move, Modify exist only in full-set. Group Read, List, Search exist in
 * pre-defined-store and full-set. ISO/IEC 10166-1:1991 §8.4. Violating the set
 * is `serviceError` function-set-violation.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FunctionSetType  ::=  ENUMERATED {
 *     flat-store          (1),
 *     pre-defined-store   (2),
 *     full-set            (3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FunctionSetType = _enum_for_FunctionSetType;

/**
 * @summary FunctionSetType_flat_store
 * @description
 *
 * Only the root group; no proper groups.
 * @constant
 * @type {number}
 */
export
const FunctionSetType_flat_store = FunctionSetType.flat_store; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary flat_store
 * @description
 *
 * Only the root group; no proper groups.
 * @constant
 * @type {number}
 */
export
const flat_store = FunctionSetType.flat_store; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FunctionSetType_pre_defined_store
 * @description
 *
 * Groups exist but users cannot create or delete groups.
 * @constant
 * @type {number}
 */
export
const FunctionSetType_pre_defined_store = FunctionSetType.pre_defined_store; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pre_defined_store
 * @description
 *
 * Groups exist but users cannot create or delete groups.
 * @constant
 * @type {number}
 */
export
const pre_defined_store = FunctionSetType.pre_defined_store; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FunctionSetType_full_set
 * @description
 *
 * Users may create, modify, and delete groups.
 * @constant
 * @type {number}
 */
export
const FunctionSetType_full_set = FunctionSetType.full_set; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary full_set
 * @description
 *
 * Users may create, modify, and delete groups.
 * @constant
 * @type {number}
 */
export
const full_set = FunctionSetType.full_set; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_FunctionSetType(el: _Element): FunctionSetType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case FunctionSetType.flat_store: return FunctionSetType.flat_store;
        case FunctionSetType.pre_defined_store: return FunctionSetType.pre_defined_store;
        case FunctionSetType.full_set: return FunctionSetType.full_set;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for FunctionSetType.",
                el,
            );
    }
}
export const _encode_FunctionSetType: $.ASN1Encoder<FunctionSetType> = $._encodeEnumerated as $.ASN1Encoder<FunctionSetType>;


/* eslint-enable */
