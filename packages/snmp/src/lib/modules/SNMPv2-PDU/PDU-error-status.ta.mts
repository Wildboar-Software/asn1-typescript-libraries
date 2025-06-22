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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDU_error_status
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDU-error-status ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PDU_error_status = INTEGER;

/**
 * @summary PDU_error_status_noError
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
