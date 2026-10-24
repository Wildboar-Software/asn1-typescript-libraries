/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CreateOrRemoveIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateOrRemoveIndicator  ::=  ENUMERATED {create(0), remove(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CreateOrRemoveIndicator {
    create = 0,
    remove = 1,
}

/**
 * @summary CreateOrRemoveIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateOrRemoveIndicator  ::=  ENUMERATED {create(0), remove(1)}
 * ```
 * 
 * @enum {number}
 */
export
type CreateOrRemoveIndicator = _enum_for_CreateOrRemoveIndicator;

/**
 * @summary CreateOrRemoveIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateOrRemoveIndicator  ::=  ENUMERATED {create(0), remove(1)}
 * ```
 * 
 * @enum {number}
 */
export
const CreateOrRemoveIndicator = _enum_for_CreateOrRemoveIndicator;

/**
 * @summary CreateOrRemoveIndicator_create
 * @constant
 * @type {number}
 */
export
const CreateOrRemoveIndicator_create: CreateOrRemoveIndicator = CreateOrRemoveIndicator.create; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary create
 * @constant
 * @type {number}
 */
export
const create: CreateOrRemoveIndicator = CreateOrRemoveIndicator.create; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CreateOrRemoveIndicator_remove
 * @constant
 * @type {number}
 */
export
const CreateOrRemoveIndicator_remove: CreateOrRemoveIndicator = CreateOrRemoveIndicator.remove; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remove
 * @constant
 * @type {number}
 */
export
const remove: CreateOrRemoveIndicator = CreateOrRemoveIndicator.remove; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_CreateOrRemoveIndicator(el: _Element): CreateOrRemoveIndicator {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case CreateOrRemoveIndicator.create: return CreateOrRemoveIndicator.create;
        case CreateOrRemoveIndicator.remove: return CreateOrRemoveIndicator.remove;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for CreateOrRemoveIndicator.",
                el,
            );
    }
}

export
const _encode_CreateOrRemoveIndicator: $.ASN1Encoder<CreateOrRemoveIndicator> = $._encodeEnumerated as $.ASN1Encoder<CreateOrRemoveIndicator>;

/* eslint-enable */
