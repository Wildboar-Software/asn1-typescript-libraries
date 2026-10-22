/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CNOperatorSelectionEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CNOperatorSelectionEntity  ::=  ENUMERATED {
 *    servCNSelectedbyUE     ( 0 ),
 *    servCNSelectedbyNtw    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CNOperatorSelectionEntity {
    servCNSelectedbyUE = 0,
    servCNSelectedbyNtw = 1,
}

/**
 * @summary CNOperatorSelectionEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CNOperatorSelectionEntity  ::=  ENUMERATED {
 *    servCNSelectedbyUE     ( 0 ),
 *    servCNSelectedbyNtw    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CNOperatorSelectionEntity = _enum_for_CNOperatorSelectionEntity;

/**
 * @summary CNOperatorSelectionEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CNOperatorSelectionEntity  ::=  ENUMERATED {
 *    servCNSelectedbyUE     ( 0 ),
 *    servCNSelectedbyNtw    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CNOperatorSelectionEntity = _enum_for_CNOperatorSelectionEntity;

/**
 * @summary CNOperatorSelectionEntity_servCNSelectedbyUE
 * @constant
 * @type {number}
 */
export
const CNOperatorSelectionEntity_servCNSelectedbyUE: CNOperatorSelectionEntity = CNOperatorSelectionEntity.servCNSelectedbyUE; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servCNSelectedbyUE
 * @constant
 * @type {number}
 */
export
const servCNSelectedbyUE: CNOperatorSelectionEntity = CNOperatorSelectionEntity.servCNSelectedbyUE; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CNOperatorSelectionEntity_servCNSelectedbyNtw
 * @constant
 * @type {number}
 */
export
const CNOperatorSelectionEntity_servCNSelectedbyNtw: CNOperatorSelectionEntity = CNOperatorSelectionEntity.servCNSelectedbyNtw; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servCNSelectedbyNtw
 * @constant
 * @type {number}
 */
export
const servCNSelectedbyNtw: CNOperatorSelectionEntity = CNOperatorSelectionEntity.servCNSelectedbyNtw; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CNOperatorSelectionEntity: $.ASN1Decoder<CNOperatorSelectionEntity> = $._decodeEnumerated;

export
const _encode_CNOperatorSelectionEntity: $.ASN1Encoder<CNOperatorSelectionEntity> = $._encodeEnumerated;

/* eslint-enable */
