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
import { EuiccPackageErrorDataSigned, _decode_EuiccPackageErrorDataSigned, _encode_EuiccPackageErrorDataSigned } from "../SGP32Definitions/EuiccPackageErrorDataSigned.ta.mjs";
// export { EuiccPackageErrorDataSigned, _decode_EuiccPackageErrorDataSigned, _encode_EuiccPackageErrorDataSigned } from "../SGP32Definitions/EuiccPackageErrorDataSigned.ta.mjs";


/**
 * @summary EuiccPackageErrorSigned
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageErrorSigned ::= SEQUENCE {
 *     euiccPackageErrorDataSigned EuiccPackageErrorDataSigned, 
 *     euiccSignEPE [APPLICATION 55] OCTET STRING -- Tag '5F37'
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageErrorSigned {
    constructor (
        /**
         * @summary `euiccPackageErrorDataSigned`.
         * @public
         * @readonly
         */
        readonly euiccPackageErrorDataSigned: EuiccPackageErrorDataSigned,
        /**
         * @summary `euiccSignEPE`.
         * @public
         * @readonly
         */
        readonly euiccSignEPE: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a EuiccPackageErrorSigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageErrorSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageErrorSigned`.
     * @returns {EuiccPackageErrorSigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageErrorSigned)]: (EuiccPackageErrorSigned)[_K] }): EuiccPackageErrorSigned {
        return new EuiccPackageErrorSigned(_o.euiccPackageErrorDataSigned, _o.euiccSignEPE);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageErrorSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageErrorSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccPackageErrorDataSigned", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("euiccSignEPE", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageErrorSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageErrorSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageErrorSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageErrorSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageErrorSigned: $.ASN1Decoder<EuiccPackageErrorSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageErrorSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageErrorSigned (el: _Element): EuiccPackageErrorSigned {
    if (!_cached_decoder_for_EuiccPackageErrorSigned) { _cached_decoder_for_EuiccPackageErrorSigned = function (el: _Element): EuiccPackageErrorSigned {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EuiccPackageErrorSigned contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccPackageErrorDataSigned";
    sequence[1].name = "euiccSignEPE";
    let euiccPackageErrorDataSigned!: EuiccPackageErrorDataSigned;
    let euiccSignEPE!: OCTET_STRING;
    euiccPackageErrorDataSigned = _decode_EuiccPackageErrorDataSigned(sequence[0]);
    euiccSignEPE = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new EuiccPackageErrorSigned(
        euiccPackageErrorDataSigned,
        euiccSignEPE,

    );
}; }
    return _cached_decoder_for_EuiccPackageErrorSigned(el);
}

let _cached_encoder_for_EuiccPackageErrorSigned: $.ASN1Encoder<EuiccPackageErrorSigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageErrorSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageErrorSigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageErrorSigned (value: EuiccPackageErrorSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageErrorSigned) { _cached_encoder_for_EuiccPackageErrorSigned = function (value: EuiccPackageErrorSigned, elGetter: $.ASN1Encoder<EuiccPackageErrorSigned>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccPackageErrorDataSigned(value.euiccPackageErrorDataSigned, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccSignEPE, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageErrorSigned(value, elGetter);
}


/* eslint-enable */
