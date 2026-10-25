/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const ModifyResultType: typeof _enum_for_ModifyResultType = _enum_for_ModifyResultType;

/**
 * @summary ModifyResultType_modifyAcknowledge
 * @constant
 * @type {number}
 */
export
const ModifyResultType_modifyAcknowledge: _enum_for_ModifyResultType.modifyAcknowledge = ModifyResultType.modifyAcknowledge; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifyAcknowledge
 * @constant
 * @type {number}
 */
export
const modifyAcknowledge: _enum_for_ModifyResultType.modifyAcknowledge = ModifyResultType.modifyAcknowledge; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModifyResultType_modifyReject
 * @constant
 * @type {number}
 */
export
const ModifyResultType_modifyReject: _enum_for_ModifyResultType.modifyReject = ModifyResultType.modifyReject; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modifyReject
 * @constant
 * @type {number}
 */
export
const modifyReject: _enum_for_ModifyResultType.modifyReject = ModifyResultType.modifyReject; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_ModifyResultType(el: _Element): ModifyResultType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ModifyResultType.modifyAcknowledge: return ModifyResultType.modifyAcknowledge;
        case ModifyResultType.modifyReject: return ModifyResultType.modifyReject;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ModifyResultType.",
                el,
            );
    }
}

export
const _encode_ModifyResultType: $.ASN1Encoder<ModifyResultType> = $._encodeEnumerated as $.ASN1Encoder<ModifyResultType>;

/* eslint-enable */
