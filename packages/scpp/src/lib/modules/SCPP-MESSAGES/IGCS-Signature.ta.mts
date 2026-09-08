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



/**
 * @summary IGCS_Signature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IGCS-Signature ::= SEQUENCE {
 *   igcsID         INTEGER(0..65535),
 *   signatureData  OCTET STRING,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class IGCS_Signature {
    constructor (
        /**
         * @summary `igcsID`.
         * @public
         * @readonly
         */
        readonly igcsID: INTEGER,
        /**
         * @summary `signatureData`.
         * @public
         * @readonly
         */
        readonly signatureData: OCTET_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IGCS_Signature
     * @description
     * 
     * This takes an `object` and converts it to a `IGCS_Signature`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IGCS_Signature`.
     * @returns {IGCS_Signature}
     */
    public static _from_object (_o: { [_K in keyof (IGCS_Signature)]: (IGCS_Signature)[_K] }): IGCS_Signature {
        return new IGCS_Signature(_o.igcsID, _o.signatureData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IGCS_Signature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IGCS_Signature: $.ComponentSpec[] = [
    new $.ComponentSpec("igcsID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("signatureData", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of IGCS_Signature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IGCS_Signature: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IGCS_Signature
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IGCS_Signature: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IGCS_Signature: $.ASN1Decoder<IGCS_Signature> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IGCS_Signature
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IGCS_Signature (el: _Element): IGCS_Signature {
    if (!_cached_decoder_for_IGCS_Signature) { _cached_decoder_for_IGCS_Signature = function (el: _Element): IGCS_Signature {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IGCS-Signature contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "igcsID";
    sequence[1].name = "signatureData";
    let igcsID!: INTEGER;
    let signatureData!: OCTET_STRING;
    igcsID = $._decodeInteger(sequence[0]);
    signatureData = $._decodeOctetString(sequence[1]);
    return new IGCS_Signature(
        igcsID,
        signatureData,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IGCS_Signature(el);
}

let _cached_encoder_for_IGCS_Signature: $.ASN1Encoder<IGCS_Signature> | null = null;

/**
 * @summary Encodes a(n) IGCS_Signature into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IGCS_Signature, encoded as an ASN.1 Element.
 */
export
function _encode_IGCS_Signature (value: IGCS_Signature, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IGCS_Signature) { _cached_encoder_for_IGCS_Signature = function (value: IGCS_Signature, elGetter: $.ASN1Encoder<IGCS_Signature>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.igcsID, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.signatureData, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IGCS_Signature(value, elGetter);
}


/* eslint-enable */
