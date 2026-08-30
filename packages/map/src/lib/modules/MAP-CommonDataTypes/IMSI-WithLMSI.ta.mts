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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";
// export { LMSI, _decode_LMSI, _encode_LMSI } from "../MAP-CommonDataTypes/LMSI.ta.mjs";


/**
 * @summary IMSI_WithLMSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSI-WithLMSI ::= SEQUENCE {
 *     imsi    IMSI,
 *     lmsi    LMSI,
 *     -- a special value 00000000 indicates that the LMSI is not in use
 *     ...}
 * ```
 * 
 * @class
 */
export
class IMSI_WithLMSI {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `lmsi`.
         * @public
         * @readonly
         */
        readonly lmsi: LMSI,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IMSI_WithLMSI
     * @description
     * 
     * This takes an `object` and converts it to a `IMSI_WithLMSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSI_WithLMSI`.
     * @returns {IMSI_WithLMSI}
     */
    public static _from_object (_o: { [_K in keyof (IMSI_WithLMSI)]: (IMSI_WithLMSI)[_K] }): IMSI_WithLMSI {
        return new IMSI_WithLMSI(_o.imsi, _o.lmsi, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IMSI_WithLMSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSI_WithLMSI: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("lmsi", false, $.hasTag(_TagClass.universal, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of IMSI_WithLMSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSI_WithLMSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSI_WithLMSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSI_WithLMSI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSI_WithLMSI: $.ASN1Decoder<IMSI_WithLMSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSI_WithLMSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSI_WithLMSI (el: _Element): IMSI_WithLMSI {
    if (!_cached_decoder_for_IMSI_WithLMSI) { _cached_decoder_for_IMSI_WithLMSI = function (el: _Element): IMSI_WithLMSI {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IMSI-WithLMSI contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "imsi";
    sequence[1].name = "lmsi";
    let imsi!: IMSI;
    let lmsi!: LMSI;
    imsi = _decode_IMSI(sequence[0]);
    lmsi = _decode_LMSI(sequence[1]);
    return new IMSI_WithLMSI(
        imsi,
        lmsi,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IMSI_WithLMSI(el);
}

let _cached_encoder_for_IMSI_WithLMSI: $.ASN1Encoder<IMSI_WithLMSI> | null = null;

/**
 * @summary Encodes a(n) IMSI_WithLMSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSI_WithLMSI, encoded as an ASN.1 Element.
 */
export
function _encode_IMSI_WithLMSI (value: IMSI_WithLMSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSI_WithLMSI) { _cached_encoder_for_IMSI_WithLMSI = function (value: IMSI_WithLMSI, elGetter: $.ASN1Encoder<IMSI_WithLMSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMSI(value.imsi, $.BER),
            /* REQUIRED   */ _encode_LMSI(value.lmsi, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSI_WithLMSI(value, elGetter);
}


/* eslint-enable */
