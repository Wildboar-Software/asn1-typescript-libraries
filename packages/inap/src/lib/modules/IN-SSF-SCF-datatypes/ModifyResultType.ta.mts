/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ModifyResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyResultType  ::=  ENUMERATED {modifyAcknowledge(0), modifyReject(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ModifyResultType {
    modifyAcknowledge = 0,
    modifyReject = 1,
}

/**
 * @summary ModifyResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyResultType  ::=  ENUMERATED {modifyAcknowledge(0), modifyReject(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ModifyResultType = _enum_for_ModifyResultType;

/**
 * @summary ModifyResultType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyResultType  ::=  ENUMERATED {modifyAcknowledge(0), modifyReject(1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ModifyResultType = _enum_for_ModifyResultType;

/**
 * @summary ModifyResultType_modifyAcknowledge
 * @constant
 * @type {number}
 */
export
const ModifyResultType_modifyAcknowledge: ModifyResultType = ModifyResultType.modifyAcknowledge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifyAcknowledge
 * @constant
 * @type {number}
 */
export
const modifyAcknowledge: ModifyResultType = ModifyResultType.modifyAcknowledge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModifyResultType_modifyReject
 * @constant
 * @type {number}
 */
export
const ModifyResultType_modifyReject: ModifyResultType = ModifyResultType.modifyReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifyReject
 * @constant
 * @type {number}
 */
export
const modifyReject: ModifyResultType = ModifyResultType.modifyReject; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ModifyResultType: $.ASN1Decoder<ModifyResultType> = $._decodeEnumerated;

export
const _encode_ModifyResultType: $.ASN1Encoder<ModifyResultType> = $._encodeEnumerated;

/* eslint-enable */
