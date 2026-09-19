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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EuiccCancelSessionSigned, _decode_EuiccCancelSessionSigned, _encode_EuiccCancelSessionSigned } from "../RSPDefinitions/EuiccCancelSessionSigned.ta.mjs";
// export { EuiccCancelSessionSigned, _decode_EuiccCancelSessionSigned, _encode_EuiccCancelSessionSigned } from "../RSPDefinitions/EuiccCancelSessionSigned.ta.mjs";


/**
 * @summary CancelSessionResponseOk
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelSessionResponseOk ::= SEQUENCE {
 *     euiccCancelSessionSigned EuiccCancelSessionSigned,     -- Signed information
 *     euiccCancelSessionSignature [APPLICATION 55] OCTET STRING    -- tag '5F37'
 * }
 * ```
 * 
 * @class
 */
export
class CancelSessionResponseOk {
    constructor (
        /**
         * @summary `euiccCancelSessionSigned`.
         * @public
         * @readonly
         */
        readonly euiccCancelSessionSigned: EuiccCancelSessionSigned,
        /**
         * @summary `euiccCancelSessionSignature`.
         * @public
         * @readonly
         */
        readonly euiccCancelSessionSignature: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a CancelSessionResponseOk
     * @description
     * 
     * This takes an `object` and converts it to a `CancelSessionResponseOk`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CancelSessionResponseOk`.
     * @returns {CancelSessionResponseOk}
     */
    public static _from_object (_o: { [_K in keyof (CancelSessionResponseOk)]: (CancelSessionResponseOk)[_K] }): CancelSessionResponseOk {
        return new CancelSessionResponseOk(_o.euiccCancelSessionSigned, _o.euiccCancelSessionSignature);
    }


}

/**
 * @summary The Leading Root Component Types of CancelSessionResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CancelSessionResponseOk: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccCancelSessionSigned", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("euiccCancelSessionSignature", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of CancelSessionResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CancelSessionResponseOk: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CancelSessionResponseOk
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CancelSessionResponseOk: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CancelSessionResponseOk: $.ASN1Decoder<CancelSessionResponseOk> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelSessionResponseOk
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelSessionResponseOk (el: _Element): CancelSessionResponseOk {
    if (!_cached_decoder_for_CancelSessionResponseOk) { _cached_decoder_for_CancelSessionResponseOk = function (el: _Element): CancelSessionResponseOk {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CancelSessionResponseOk contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccCancelSessionSigned";
    sequence[1].name = "euiccCancelSessionSignature";
    let euiccCancelSessionSigned!: EuiccCancelSessionSigned;
    let euiccCancelSessionSignature!: OCTET_STRING;
    euiccCancelSessionSigned = _decode_EuiccCancelSessionSigned(sequence[0]);
    euiccCancelSessionSignature = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new CancelSessionResponseOk(
        euiccCancelSessionSigned,
        euiccCancelSessionSignature,

    );
}; }
    return _cached_decoder_for_CancelSessionResponseOk(el);
}

let _cached_encoder_for_CancelSessionResponseOk: $.ASN1Encoder<CancelSessionResponseOk> | null = null;

/**
 * @summary Encodes a(n) CancelSessionResponseOk into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelSessionResponseOk, encoded as an ASN.1 Element.
 */
export
function _encode_CancelSessionResponseOk (value: CancelSessionResponseOk, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelSessionResponseOk) { _cached_encoder_for_CancelSessionResponseOk = function (value: CancelSessionResponseOk, elGetter: $.ASN1Encoder<CancelSessionResponseOk>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccCancelSessionSigned(value.euiccCancelSessionSigned, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccCancelSessionSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CancelSessionResponseOk(value, elGetter);
}


/* eslint-enable */
