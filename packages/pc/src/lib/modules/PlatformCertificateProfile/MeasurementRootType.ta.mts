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
import * as $ from "asn1-ts/dist/functional.mjs";



/* START_OF_SYMBOL_DEFINITION _enum_for_MeasurementRootType */
/**
 * @summary MeasurementRootType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```@enum {number}
 */
export
enum _enum_for_MeasurementRootType {
    static_ = 0,
    dynamic = 1,
    nonHost = 2,
    hybrid = 3,
    physical = 4,
    virtual = 5,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType */
/**
 * @summary MeasurementRootType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```@enum {number}
 */
export
type MeasurementRootType = _enum_for_MeasurementRootType;
/* END_OF_SYMBOL_DEFINITION MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType */
/**
 * @summary MeasurementRootType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MeasurementRootType  ::=  ENUMERATED {
 *     static (0),
 *     dynamic (1),
 *     nonHost (2),
 *     hybrid (3),
 *     physical (4),
 *     virtual (5) }
 * ```@enum {number}
 */
export
const MeasurementRootType = _enum_for_MeasurementRootType;
/* END_OF_SYMBOL_DEFINITION MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_static_ */
/**
 * @summary MeasurementRootType_static_
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_static_: MeasurementRootType = MeasurementRootType.static_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_static_ */

/* START_OF_SYMBOL_DEFINITION static_ */
/**
 * @summary static_
 * @constant
 * @type {number}
 */
export
const static_: MeasurementRootType = MeasurementRootType.static_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION static_ */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_dynamic */
/**
 * @summary MeasurementRootType_dynamic
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_dynamic */

/* START_OF_SYMBOL_DEFINITION dynamic */
/**
 * @summary dynamic
 * @constant
 * @type {number}
 */
export
const dynamic: MeasurementRootType = MeasurementRootType.dynamic; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION dynamic */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_nonHost */
/**
 * @summary MeasurementRootType_nonHost
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_nonHost */

/* START_OF_SYMBOL_DEFINITION nonHost */
/**
 * @summary nonHost
 * @constant
 * @type {number}
 */
export
const nonHost: MeasurementRootType = MeasurementRootType.nonHost; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION nonHost */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_hybrid */
/**
 * @summary MeasurementRootType_hybrid
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_hybrid */

/* START_OF_SYMBOL_DEFINITION hybrid */
/**
 * @summary hybrid
 * @constant
 * @type {number}
 */
export
const hybrid: MeasurementRootType = MeasurementRootType.hybrid; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION hybrid */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_physical */
/**
 * @summary MeasurementRootType_physical
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_physical: MeasurementRootType = MeasurementRootType.physical; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_physical */

/* START_OF_SYMBOL_DEFINITION physical */
/**
 * @summary physical
 * @constant
 * @type {number}
 */
export
const physical: MeasurementRootType = MeasurementRootType.physical; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION physical */

/* START_OF_SYMBOL_DEFINITION MeasurementRootType_virtual */
/**
 * @summary MeasurementRootType_virtual
 * @constant
 * @type {number}
 */
export
const MeasurementRootType_virtual: MeasurementRootType = MeasurementRootType.virtual; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION MeasurementRootType_virtual */

/* START_OF_SYMBOL_DEFINITION virtual */
/**
 * @summary virtual
 * @constant
 * @type {number}
 */
export
const virtual: MeasurementRootType = MeasurementRootType.virtual; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION virtual */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MeasurementRootType */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION _decode_MeasurementRootType */
export const _decode_MeasurementRootType = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MeasurementRootType */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MeasurementRootType */

/* START_OF_SYMBOL_DEFINITION _encode_MeasurementRootType */
export const _encode_MeasurementRootType = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_MeasurementRootType */

/* eslint-enable */
