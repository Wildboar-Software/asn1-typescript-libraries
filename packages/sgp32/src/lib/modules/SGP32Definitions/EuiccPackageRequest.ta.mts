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
import { EuiccPackageSigned, _decode_EuiccPackageSigned, _encode_EuiccPackageSigned } from "../SGP32Definitions/EuiccPackageSigned.ta.mjs";
// export { EuiccPackageSigned, _decode_EuiccPackageSigned, _encode_EuiccPackageSigned } from "../SGP32Definitions/EuiccPackageSigned.ta.mjs";


/**
 * @summary EuiccPackageRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageRequest ::= [81] SEQUENCE { -- Tag ' BF51', #SupportedForPsmoV1.0.0#
 *     euiccPackageSigned EuiccPackageSigned,
 *     eimSignature [APPLICATION 55] OCTET STRING -- Tag '5F37'
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageRequest {
    constructor (
        /**
         * @summary `euiccPackageSigned`.
         * @public
         * @readonly
         */
        readonly euiccPackageSigned: EuiccPackageSigned,
        /**
         * @summary `eimSignature`.
         * @public
         * @readonly
         */
        readonly eimSignature: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a EuiccPackageRequest
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageRequest`.
     * @returns {EuiccPackageRequest}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageRequest)]: (EuiccPackageRequest)[_K] }): EuiccPackageRequest {
        return new EuiccPackageRequest(_o.euiccPackageSigned, _o.eimSignature);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccPackageSigned", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("eimSignature", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageRequest: $.ASN1Decoder<EuiccPackageRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageRequest (el: _Element): EuiccPackageRequest {
    if (!_cached_decoder_for_EuiccPackageRequest) { _cached_decoder_for_EuiccPackageRequest = $._decode_implicit<EuiccPackageRequest>(() => function (el: _Element): EuiccPackageRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EuiccPackageRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccPackageSigned";
    sequence[1].name = "eimSignature";
    let euiccPackageSigned!: EuiccPackageSigned;
    let eimSignature!: OCTET_STRING;
    euiccPackageSigned = _decode_EuiccPackageSigned(sequence[0]);
    eimSignature = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new EuiccPackageRequest(
        euiccPackageSigned,
        eimSignature,

    );
}); }
    return _cached_decoder_for_EuiccPackageRequest(el);
}

let _cached_encoder_for_EuiccPackageRequest: $.ASN1Encoder<EuiccPackageRequest> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageRequest (value: EuiccPackageRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageRequest) { _cached_encoder_for_EuiccPackageRequest = $._encode_implicit(_TagClass.context, 81, () => function (value: EuiccPackageRequest, elGetter: $.ASN1Encoder<EuiccPackageRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccPackageSigned(value.euiccPackageSigned, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.eimSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EuiccPackageRequest(value, elGetter);
}


/* eslint-enable */
