/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Tetra_IRI_Parameters_iRIversion {
    version0 = 0,
}

/**
 * @summary Tetra_IRI_Parameters_iRIversion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters-iRIversion ::= ENUMERATED
 * {
 *     version0(0),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Tetra_IRI_Parameters_iRIversion = _enum_for_Tetra_IRI_Parameters_iRIversion | ENUMERATED;

/**
 * @summary Tetra_IRI_Parameters_iRIversion_version0
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_iRIversion_version0: Tetra_IRI_Parameters_iRIversion = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version0
 * @constant
 * @type {number}
 */
export
const version0: Tetra_IRI_Parameters_iRIversion = Tetra_IRI_Parameters_iRIversion_version0; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Tetra_IRI_Parameters_iRIversion: $.ASN1Decoder<Tetra_IRI_Parameters_iRIversion> = $._decodeEnumerated;

export const _encode_Tetra_IRI_Parameters_iRIversion: $.ASN1Encoder<Tetra_IRI_Parameters_iRIversion> = $._encodeEnumerated;


/* eslint-enable */
