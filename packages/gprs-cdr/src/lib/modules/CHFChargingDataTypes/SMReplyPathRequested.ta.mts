/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMReplyPathRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMReplyPathRequested  ::=  ENUMERATED {
 *    noReplyPathSet    ( 0 ),
 *    replyPathSet      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMReplyPathRequested {
    noReplyPathSet = 0,
    replyPathSet = 1,
}

/**
 * @summary SMReplyPathRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMReplyPathRequested  ::=  ENUMERATED {
 *    noReplyPathSet    ( 0 ),
 *    replyPathSet      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type SMReplyPathRequested = _enum_for_SMReplyPathRequested;

/**
 * @summary SMReplyPathRequested
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMReplyPathRequested  ::=  ENUMERATED {
 *    noReplyPathSet    ( 0 ),
 *    replyPathSet      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const SMReplyPathRequested = _enum_for_SMReplyPathRequested;

/**
 * @summary SMReplyPathRequested_noReplyPathSet
 * @constant
 * @type {number}
 */
export
const SMReplyPathRequested_noReplyPathSet = SMReplyPathRequested.noReplyPathSet satisfies SMReplyPathRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noReplyPathSet
 * @constant
 * @type {number}
 */
export
const noReplyPathSet = SMReplyPathRequested.noReplyPathSet satisfies SMReplyPathRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMReplyPathRequested_replyPathSet
 * @constant
 * @type {number}
 */
export
const SMReplyPathRequested_replyPathSet = SMReplyPathRequested.replyPathSet satisfies SMReplyPathRequested; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary replyPathSet
 * @constant
 * @type {number}
 */
export
const replyPathSet = SMReplyPathRequested.replyPathSet satisfies SMReplyPathRequested; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SMReplyPathRequested: $.ASN1Decoder<SMReplyPathRequested> = $._decodeEnumerated;

export
const _encode_SMReplyPathRequested: $.ASN1Encoder<SMReplyPathRequested> = $._encodeEnumerated;

/* eslint-enable */
