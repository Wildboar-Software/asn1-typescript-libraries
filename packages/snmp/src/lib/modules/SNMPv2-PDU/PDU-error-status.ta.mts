/* eslint-disable */
import {
    type INTEGER,
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
 * @summary PDU_error_status
 * @description
 *
 * `error-status` INTEGER from `PDU`
 * ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3)).
 * Non-zero in a `Response-PDU` means an error prevented processing;
 * pair with `error-index` when identifying a binding
 * ([§4.1](https://datatracker.ietf.org/doc/html/rfc3416#section-4.1)).
 * Set-request validation codes are defined in
 * [§4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5).
 * `noSuchName`, `badValue`, and `readOnly` are retained for proxy
 * compatibility; generators MUST still handle them
 * ([§4.2.4](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * error-status INTEGER {
 *     noError(0),
 *     tooBig(1),
 *     noSuchName(2),      -- for proxy compatibility
 *     badValue(3),        -- for proxy compatibility
 *     readOnly(4),        -- for proxy compatibility
 *     genErr(5),
 *     noAccess(6),
 *     wrongType(7),
 *     wrongLength(8),
 *     wrongEncoding(9),
 *     wrongValue(10),
 *     noCreation(11),
 *     inconsistentValue(12),
 *     resourceUnavailable(13),
 *     commitFailed(14),
 *     undoFailed(15),
 *     authorizationError(16),
 *     notWritable(17),
 *     inconsistentName(18)
 * }
 * ```
 */
export
type PDU_error_status = INTEGER;

/**
 * @summary PDU_error_status_noError
 * @description
 *
 * Successful processing; typically with `error-index` 0 ([RFC 3416 §4.2.1](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.1) et seq.).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_noError = 0 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noError
 * @constant
 * @type {number}
 */
export
const noError = PDU_error_status_noError satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_tooBig
 * @description
 *
 * Generated Response would exceed local or originator max message size ([RFC 3416 §4.2.1](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.1), [§4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_tooBig = 1 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_tooBig
 * @constant
 * @type {number}
 */
export
const tooBig = PDU_error_status_tooBig satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noSuchName
 * @description
 *
 * Retained for proxy compatibility; command generators MUST handle it ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3), [§4.2.4](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.4)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_noSuchName = 2 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noSuchName
 * @constant
 * @type {number}
 */
export
const noSuchName = PDU_error_status_noSuchName satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_badValue
 * @description
 *
 * Retained for proxy compatibility; command generators MUST handle it ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3), [§4.2.4](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.4)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_badValue = 3 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_badValue
 * @constant
 * @type {number}
 */
export
const badValue = PDU_error_status_badValue satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_readOnly
 * @description
 *
 * Retained for proxy compatibility; command generators MUST handle it ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3), [§4.2.4](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.4)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_readOnly = 4 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_readOnly
 * @constant
 * @type {number}
 */
export
const readOnly = PDU_error_status_readOnly satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_genErr
 * @description
 *
 * Processing failed for a reason other than the specific codes listed for that operation ([RFC 3416 §4.2.1](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.1), [§4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_genErr = 5 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_genErr
 * @constant
 * @type {number}
 */
export
const genErr = PDU_error_status_genErr satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noAccess
 * @description
 *
 * Set: name is/would be denied by the MIB view ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (1)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_noAccess = 6 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noAccess
 * @constant
 * @type {number}
 */
export
const noAccess = PDU_error_status_noAccess satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongType
 * @description
 *
 * Set: value ASN.1 type inconsistent with variables sharing that OID prefix ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (3)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_wrongType = 7 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongType
 * @constant
 * @type {number}
 */
export
const wrongType = PDU_error_status_wrongType satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongLength
 * @description
 *
 * Set: value length inconsistent with variables sharing that OID prefix ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (4)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_wrongLength = 8 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongLength
 * @constant
 * @type {number}
 */
export
const wrongLength = PDU_error_status_wrongLength satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongEncoding
 * @description
 *
 * Set: value encoding inconsistent with its ASN.1 tag ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (5)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_wrongEncoding = 9 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongEncoding
 * @constant
 * @type {number}
 */
export
const wrongEncoding = PDU_error_status_wrongEncoding satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongValue
 * @description
 *
 * Set: value could under no circumstances be assigned ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (6)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_wrongValue = 10 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongValue
 * @constant
 * @type {number}
 */
export
const wrongValue = PDU_error_status_wrongValue satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noCreation
 * @description
 *
 * Set: variable does not exist and could not ever be created ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (7)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_noCreation = 11 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noCreation
 * @constant
 * @type {number}
 */
export
const noCreation = PDU_error_status_noCreation satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_inconsistentValue
 * @description
 *
 * Set: value could be held under other circumstances but not presently ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (10)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_inconsistentValue = 12 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_inconsistentValue
 * @constant
 * @type {number}
 */
export
const inconsistentValue = PDU_error_status_inconsistentValue satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_resourceUnavailable
 * @description
 *
 * Set: required resource presently unavailable ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (11)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_resourceUnavailable = 13 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_resourceUnavailable
 * @constant
 * @type {number}
 */
export
const resourceUnavailable = PDU_error_status_resourceUnavailable satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_commitFailed
 * @description
 *
 * Set: assignment failed after validation; other assignments undone ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_commitFailed = 14 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_commitFailed
 * @constant
 * @type {number}
 */
export
const commitFailed = PDU_error_status_commitFailed satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_undoFailed
 * @description
 *
 * Set: assignments could not all be undone; `error-index` set to zero ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_undoFailed = 15 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_undoFailed
 * @constant
 * @type {number}
 */
export
const undoFailed = PDU_error_status_undoFailed satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_authorizationError
 * @description
 *
 * `authorizationError(16)` in the `PDU` `error-status` ENUMERATION ([RFC 3416 §3](https://datatracker.ietf.org/doc/html/rfc3416#section-3)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_authorizationError = 16 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_authorizationError
 * @constant
 * @type {number}
 */
export
const authorizationError = PDU_error_status_authorizationError satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_notWritable
 * @description
 *
 * Set: no creatable/modifiable variable under that OID prefix, or exists but cannot be modified ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (2), (9)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_notWritable = 17 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_notWritable
 * @constant
 * @type {number}
 */
export
const notWritable = PDU_error_status_notWritable satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_inconsistentName
 * @description
 *
 * Set: variable does not exist and cannot be created under present circumstances ([RFC 3416 §4.2.5](https://datatracker.ietf.org/doc/html/rfc3416#section-4.2.5) (8)).
 *
 * @constant
 * @type {number}
 */
export
const PDU_error_status_inconsistentName = 18 satisfies PDU_error_status; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_inconsistentName
 * @constant
 * @type {number}
 */
export
const inconsistentName = PDU_error_status_inconsistentName satisfies PDU_error_status; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PDU_error_status = $._decodeInteger;


export const _encode_PDU_error_status = $._encodeInteger;


/* eslint-enable */
