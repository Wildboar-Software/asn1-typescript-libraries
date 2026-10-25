/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CNOperatorSelectionEntity
 * @description
 *
 * This field defines which entity (UE or Network) has selected the Serving
 * Core Network in Network Sharing situations.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.9A.
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
 * This field defines which entity (UE or Network) has selected the Serving
 * Core Network in Network Sharing situations.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.9A.
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
 * This field defines which entity (UE or Network) has selected the Serving
 * Core Network in Network Sharing situations.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.9A.
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
const CNOperatorSelectionEntity_servCNSelectedbyUE = CNOperatorSelectionEntity.servCNSelectedbyUE satisfies CNOperatorSelectionEntity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servCNSelectedbyUE
 * @constant
 * @type {number}
 */
export
const servCNSelectedbyUE = CNOperatorSelectionEntity.servCNSelectedbyUE satisfies CNOperatorSelectionEntity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CNOperatorSelectionEntity_servCNSelectedbyNtw
 * @constant
 * @type {number}
 */
export
const CNOperatorSelectionEntity_servCNSelectedbyNtw = CNOperatorSelectionEntity.servCNSelectedbyNtw satisfies CNOperatorSelectionEntity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary servCNSelectedbyNtw
 * @constant
 * @type {number}
 */
export
const servCNSelectedbyNtw = CNOperatorSelectionEntity.servCNSelectedbyNtw satisfies CNOperatorSelectionEntity; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CNOperatorSelectionEntity: $.ASN1Decoder<CNOperatorSelectionEntity> = $._decodeEnumerated;

export
const _encode_CNOperatorSelectionEntity: $.ASN1Encoder<CNOperatorSelectionEntity> = $._encodeEnumerated;

/* eslint-enable */
