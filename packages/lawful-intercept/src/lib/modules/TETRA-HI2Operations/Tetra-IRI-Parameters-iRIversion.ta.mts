/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Tetra_IRI_Parameters_iRIversion {
    /**
     * The only named HI2 parameter version in this module. The present document
     * does not define what version 0 handles. Absence of `iRIversion`, not this
     * value, means version 1.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     */
    version0 = 0,
}

/**
 * @summary Tetra_IRI_Parameters_iRIversion
 * @description
 * 
 * Version of HI2 parameters. The only named value is `version0(0)`, followed by
 * an extension marker. If `iRIversion` is absent from `Tetra-IRI-Parameters`,
 * version 1 is handled. The present document does not define further behaviour
 * for `version0`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.1, clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tetra-IRI-Parameters-iRIversion ::= ENUMERATED {
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
 * @description
 *
 * The only named HI2 parameter version in this module. The present document
 * does not define what version 0 handles. Absence of `iRIversion`, not this
 * value, means version 1.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const Tetra_IRI_Parameters_iRIversion_version0 = _enum_for_Tetra_IRI_Parameters_iRIversion.version0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version0
 * @description
 *
 * The only named HI2 parameter version in this module. The present document
 * does not define what version 0 handles. Absence of `iRIversion`, not this
 * value, means version 1.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * @constant
 * @type {number}
 */
export
const version0 = Tetra_IRI_Parameters_iRIversion_version0; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Tetra_IRI_Parameters_iRIversion: $.ASN1Decoder<Tetra_IRI_Parameters_iRIversion> = $._decodeEnumerated;
export const _encode_Tetra_IRI_Parameters_iRIversion: $.ASN1Encoder<Tetra_IRI_Parameters_iRIversion> = $._encodeEnumerated;


/* eslint-enable */
