/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
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
const PDU_error_status_noError: PDU_error_status = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noError
 * @constant
 * @type {number}
 */
export
const noError: PDU_error_status = PDU_error_status_noError; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_tooBig: PDU_error_status = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_tooBig
 * @constant
 * @type {number}
 */
export
const tooBig: PDU_error_status = PDU_error_status_tooBig; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_noSuchName: PDU_error_status = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noSuchName
 * @constant
 * @type {number}
 */
export
const noSuchName: PDU_error_status = PDU_error_status_noSuchName; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_badValue: PDU_error_status = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_badValue
 * @constant
 * @type {number}
 */
export
const badValue: PDU_error_status = PDU_error_status_badValue; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_readOnly: PDU_error_status = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_readOnly
 * @constant
 * @type {number}
 */
export
const readOnly: PDU_error_status = PDU_error_status_readOnly; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_genErr: PDU_error_status = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_genErr
 * @constant
 * @type {number}
 */
export
const genErr: PDU_error_status = PDU_error_status_genErr; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_noAccess: PDU_error_status = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noAccess
 * @constant
 * @type {number}
 */
export
const noAccess: PDU_error_status = PDU_error_status_noAccess; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_wrongType: PDU_error_status = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongType
 * @constant
 * @type {number}
 */
export
const wrongType: PDU_error_status = PDU_error_status_wrongType; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_wrongLength: PDU_error_status = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongLength
 * @constant
 * @type {number}
 */
export
const wrongLength: PDU_error_status = PDU_error_status_wrongLength; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_wrongEncoding: PDU_error_status = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongEncoding
 * @constant
 * @type {number}
 */
export
const wrongEncoding: PDU_error_status = PDU_error_status_wrongEncoding; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_wrongValue: PDU_error_status = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_wrongValue
 * @constant
 * @type {number}
 */
export
const wrongValue: PDU_error_status = PDU_error_status_wrongValue; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_noCreation: PDU_error_status = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_noCreation
 * @constant
 * @type {number}
 */
export
const noCreation: PDU_error_status = PDU_error_status_noCreation; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_inconsistentValue: PDU_error_status = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_inconsistentValue
 * @constant
 * @type {number}
 */
export
const inconsistentValue: PDU_error_status = PDU_error_status_inconsistentValue; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_resourceUnavailable: PDU_error_status = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_resourceUnavailable
 * @constant
 * @type {number}
 */
export
const resourceUnavailable: PDU_error_status = PDU_error_status_resourceUnavailable; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_commitFailed: PDU_error_status = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_commitFailed
 * @constant
 * @type {number}
 */
export
const commitFailed: PDU_error_status = PDU_error_status_commitFailed; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_undoFailed: PDU_error_status = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_undoFailed
 * @constant
 * @type {number}
 */
export
const undoFailed: PDU_error_status = PDU_error_status_undoFailed; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_authorizationError: PDU_error_status = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_authorizationError
 * @constant
 * @type {number}
 */
export
const authorizationError: PDU_error_status = PDU_error_status_authorizationError; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_notWritable: PDU_error_status = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_notWritable
 * @constant
 * @type {number}
 */
export
const notWritable: PDU_error_status = PDU_error_status_notWritable; /* SHORT_NAMED_INTEGER_VALUE */

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
const PDU_error_status_inconsistentName: PDU_error_status = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PDU_error_status_inconsistentName
 * @constant
 * @type {number}
 */
export
const inconsistentName: PDU_error_status = PDU_error_status_inconsistentName; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PDU_error_status = $._decodeInteger;


export const _encode_PDU_error_status = $._encodeInteger;


/* eslint-enable */
