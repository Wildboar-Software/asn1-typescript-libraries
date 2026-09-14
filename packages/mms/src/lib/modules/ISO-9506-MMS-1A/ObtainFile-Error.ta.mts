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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ObtainFile_Error
 * @description
 *
 * File In Error on Result(-). Present when it is
 * necessary to distinguish whether a particular
 * error pertains to the source or destination
 * file. Normative Annex C.
 *
 * [ISO 9506-1:2003 Annex C, C.1.1.3.1]
 * [ISO 9506-2:2003 Annex C, C.2.3]
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObtainFile-Error  ::=  INTEGER {
 *     source-file            (0),
 *     destination-file       (1)
 * } (0..1)
 * ```
 */
export
type ObtainFile_Error = INTEGER;

/**
 * @summary ObtainFile_Error_source_file
 * @description
 *
 * SOURCE-FILE: the error pertains to the source
 * file.
 *
 * [ISO 9506-1:2003 Annex C, C.1.1.3.1]
 * @constant
 * @type {number}
 */
export
const ObtainFile_Error_source_file: ObtainFile_Error = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObtainFile_Error_source_file
 * @description
 *
 * SOURCE-FILE: the error pertains to the source
 * file.
 *
 * [ISO 9506-1:2003 Annex C, C.1.1.3.1]
 * @constant
 * @type {number}
 */
export
const source_file: ObtainFile_Error = ObtainFile_Error_source_file; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObtainFile_Error_destination_file
 * @description
 *
 * DESTINATION-FILE: the error pertains to the
 * destination file.
 *
 * [ISO 9506-1:2003 Annex C, C.1.1.3.1]
 * @constant
 * @type {number}
 */
export
const ObtainFile_Error_destination_file: ObtainFile_Error = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObtainFile_Error_destination_file
 * @description
 *
 * DESTINATION-FILE: the error pertains to the
 * destination file.
 *
 * [ISO 9506-1:2003 Annex C, C.1.1.3.1]
 * @constant
 * @type {number}
 */
export
const destination_file: ObtainFile_Error = ObtainFile_Error_destination_file; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ObtainFile_Error = $._decodeInteger;
export const _encode_ObtainFile_Error = $._encodeInteger;


/* eslint-enable */
