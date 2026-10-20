/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RelationshipMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelationshipMode  ::=  ENUMERATED {
 *    trusted        ( 0 ),
 *    non-trusted    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RelationshipMode {
    trusted = 0,
    non_trusted = 1,
}

/**
 * @summary RelationshipMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelationshipMode  ::=  ENUMERATED {
 *    trusted        ( 0 ),
 *    non-trusted    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type RelationshipMode = _enum_for_RelationshipMode;

/**
 * @summary RelationshipMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelationshipMode  ::=  ENUMERATED {
 *    trusted        ( 0 ),
 *    non-trusted    ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const RelationshipMode = _enum_for_RelationshipMode;

/**
 * @summary RelationshipMode_trusted
 * @constant
 * @type {number}
 */
export
const RelationshipMode_trusted: RelationshipMode = RelationshipMode.trusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary trusted
 * @constant
 * @type {number}
 */
export
const trusted: RelationshipMode = RelationshipMode.trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RelationshipMode_non_trusted
 * @constant
 * @type {number}
 */
export
const RelationshipMode_non_trusted: RelationshipMode = RelationshipMode.non_trusted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary non_trusted
 * @constant
 * @type {number}
 */
export
const non_trusted: RelationshipMode = RelationshipMode.non_trusted; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RelationshipMode: $.ASN1Decoder<RelationshipMode> = $._decodeEnumerated;

export
const _encode_RelationshipMode: $.ASN1Encoder<RelationshipMode> = $._encodeEnumerated;

/* eslint-enable */
