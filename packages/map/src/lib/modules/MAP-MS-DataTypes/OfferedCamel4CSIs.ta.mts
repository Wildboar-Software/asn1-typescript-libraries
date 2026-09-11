/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OfferedCamel4CSIs
 * @description
 *
 * Which CAMEL phase 4 CSIs are offered, as in 3GPP TS 23.078. A node supporting
 * CAMEL phase 4 shall mark all Camel4 CSIs it offers. Other bit values shall be
 * discarded. An IWF shall omit this parameter in Insert Subscriber Data. SIZE
 * (7..16). (3GPP TS 29.002 V19.1.0 clauses 7.6.3.36D, 8.8.1.3, and 17.7.1)
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OfferedCamel4CSIs  ::=  BIT STRING {    
 *     o-csi    (0),
 *     d-csi    (1),
 *     vt-csi    (2),
 *     t-csi    (3),
 *     mt-sms-csi    (4),
 *     mg-csi    (5),
 *     psi-enhancements    (6) 
 * } (SIZE (7..16))
 * ```
 */
export
type OfferedCamel4CSIs = BIT_STRING;

/**
 * @summary OfferedCamel4CSIs_o_csi
 * @description
 *
 * O-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const OfferedCamel4CSIs_o_csi: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary o_csi
 * @description
 *
 * O-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const o_csi: number = OfferedCamel4CSIs_o_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_d_csi
 * @description
 *
 * D-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const OfferedCamel4CSIs_d_csi: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary d_csi
 * @description
 *
 * D-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const d_csi: number = OfferedCamel4CSIs_d_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_vt_csi
 * @description
 *
 * VT-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const OfferedCamel4CSIs_vt_csi: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary vt_csi
 * @description
 *
 * VT-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const vt_csi: number = OfferedCamel4CSIs_vt_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_t_csi
 * @description
 *
 * T-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const OfferedCamel4CSIs_t_csi: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary t_csi
 * @description
 *
 * T-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const t_csi: number = OfferedCamel4CSIs_t_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_mt_sms_csi
 * @description
 *
 * MT-SMS-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002
 * V19.1.0 clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const OfferedCamel4CSIs_mt_sms_csi: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mt_sms_csi
 * @description
 *
 * MT-SMS-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002
 * V19.1.0 clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const mt_sms_csi: number = OfferedCamel4CSIs_mt_sms_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_mg_csi
 * @description
 *
 * MG-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const OfferedCamel4CSIs_mg_csi: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary mg_csi
 * @description
 *
 * MG-CSI of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS 29.002 V19.1.0
 * clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const mg_csi: number = OfferedCamel4CSIs_mg_csi; /* SHORT_NAMED_BIT */

/**
 * @summary OfferedCamel4CSIs_psi_enhancements
 * @description
 *
 * PSI enhancements of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const OfferedCamel4CSIs_psi_enhancements: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary psi_enhancements
 * @description
 *
 * PSI enhancements of CAMEL phase 4 is offered (3GPP TS 23.078). (3GPP TS
 * 29.002 V19.1.0 clauses 7.6.3.36D and 17.7.1)
 *
 * @constant
 */
export
const psi_enhancements: number = OfferedCamel4CSIs_psi_enhancements; /* SHORT_NAMED_BIT */

/**
 * @summary Decodes an ASN.1 element into a(n) OfferedCamel4CSIs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_OfferedCamel4CSIs = (el: _Element): OfferedCamel4CSIs => {
    const value = $._decodeBitString(el);
    if (value.length < 7 || value.length > 16) {
        throw new ASN1SizeError("OfferedCamel4CSIs violates SIZE constraint");
    }
    return value;
};

/**
 * @summary Encodes a(n) OfferedCamel4CSIs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OfferedCamel4CSIs, encoded as an ASN.1 Element.
 */
export const _encode_OfferedCamel4CSIs = $._encodeBitString;


/* eslint-enable */
