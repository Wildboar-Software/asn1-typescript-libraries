/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Classification
 * @description
 *
 * Security classification. ACP 133 (June 1998),
 * paragraph 409.b, lists unclassified, restricted,
 * confidential, secret, and top secret in ascending
 * order. A top-secret clearance dominates the lower
 * clearances unless some other restriction applies.
 * `unmarked` is a syntax value; paragraph 409.b does
 * not place it in that order.
 *
 * `entryClassification` classifies the directory entry.
 * `nameClassification` classifies the entry's name.
 * `rIClassification` is the highest classification of
 * data a device may process.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.44](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.44)
 * and
 * [section 6.8](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.8).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_Classification = {
    unmarked: 0,
    unclassified: 1,
    restricted: 2,
    confidential: 3,
    secret: 4,
    top_secret: 5,
} as const;

export
type _enum_for_Classification =
    (typeof _enum_for_Classification)[keyof typeof _enum_for_Classification];

/**
 * @summary Classification
 * @description
 *
 * Security classification. ACP 133 (June 1998),
 * paragraph 409.b, lists unclassified, restricted,
 * confidential, secret, and top secret in ascending
 * order. A top-secret clearance dominates the lower
 * clearances unless some other restriction applies.
 * `unmarked` is a syntax value; paragraph 409.b does
 * not place it in that order.
 *
 * `entryClassification` classifies the directory entry.
 * `nameClassification` classifies the entry's name.
 * `rIClassification` is the highest classification of
 * data a device may process.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.44](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.44)
 * and
 * [section 6.8](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.8).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Classification = _enum_for_Classification;

/**
 * @summary Classification
 * @description
 *
 * Security classification. ACP 133 (June 1998),
 * paragraph 409.b, lists unclassified, restricted,
 * confidential, secret, and top secret in ascending
 * order. A top-secret clearance dominates the lower
 * clearances unless some other restriction applies.
 * `unmarked` is a syntax value; paragraph 409.b does
 * not place it in that order.
 *
 * `entryClassification` classifies the directory entry.
 * `nameClassification` classifies the entry's name.
 * `rIClassification` is the highest classification of
 * data a device may process.
 *
 * [draft-dally-acp133-and-ldap-01, section 3.44](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-3.44)
 * and
 * [section 6.8](https://datatracker.ietf.org/doc/html/draft-dally-acp133-and-ldap-01#section-6.8).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Classification  ::=  ENUMERATED {
 *     unmarked(0),
 *     unclassified(1),
 *     restricted(2),
 *     confidential(3),
 *     secret(4),
 *     top-secret(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Classification: typeof _enum_for_Classification = _enum_for_Classification;

/**
 * Not in the paragraph 409.b hierarchy.
 * @summary Classification_unmarked
 * @constant
 * @type {number}
 */
export
const Classification_unmarked: 0 = Classification.unmarked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Classification_unmarked}.
 * @summary unmarked
 * @constant
 * @type {number}
 */
export
const unmarked: 0 = Classification.unmarked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Lowest classification in paragraph 409.b.
 * @summary Classification_unclassified
 * @constant
 * @type {number}
 */
export
const Classification_unclassified: 1 = Classification.unclassified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Classification_unclassified}.
 * @summary unclassified
 * @constant
 * @type {number}
 */
export
const unclassified: 1 = Classification.unclassified; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Above unclassified and below confidential.
 * @summary Classification_restricted
 * @constant
 * @type {number}
 */
export
const Classification_restricted: 2 = Classification.restricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Classification_restricted}.
 * @summary restricted
 * @constant
 * @type {number}
 */
export
const restricted: 2 = Classification.restricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Above restricted and below secret.
 * @summary Classification_confidential
 * @constant
 * @type {number}
 */
export
const Classification_confidential: 3 = Classification.confidential; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Classification_confidential}.
 * @summary confidential
 * @constant
 * @type {number}
 */
export
const confidential: 3 = Classification.confidential; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Above confidential and below top secret.
 * @summary Classification_secret
 * @constant
 * @type {number}
 */
export
const Classification_secret: 4 = Classification.secret; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Classification_secret}.
 * @summary secret
 * @constant
 * @type {number}
 */
export
const secret: 4 = Classification.secret; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Dominates the lower classifications in paragraph 409.b.
 * @summary Classification_top_secret
 * @constant
 * @type {number}
 */
export
const Classification_top_secret: 5 = Classification.top_secret; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link Classification_top_secret}.
 * @summary top_secret
 * @constant
 * @type {number}
 */
export
const top_secret: 5 = Classification.top_secret; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Classification: $.ASN1Decoder<Classification> =
    $._decodeEnumerated as $.ASN1Decoder<Classification>;
export const _encode_Classification: $.ASN1Encoder<Classification> =
    $._encodeEnumerated as $.ASN1Encoder<Classification>;


/* eslint-enable */
