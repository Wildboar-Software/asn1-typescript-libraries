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
import { PASSporTHeader, _decode_PASSporTHeader, _encode_PASSporTHeader } from "../TS33128Payloads/PASSporTHeader.ta.mjs";
// export { PASSporTHeader, _decode_PASSporTHeader, _encode_PASSporTHeader } from "../TS33128Payloads/PASSporTHeader.ta.mjs";
import { PASSporTPayload, _decode_PASSporTPayload, _encode_PASSporTPayload } from "../TS33128Payloads/PASSporTPayload.ta.mjs";
// export { PASSporTPayload, _decode_PASSporTPayload, _encode_PASSporTPayload } from "../TS33128Payloads/PASSporTPayload.ta.mjs";


/**
 * @summary PASSporT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PASSporT ::= SEQUENCE
 * {
 *     pASSporTHeader    [1] PASSporTHeader,
 *     pASSporTPayload   [2] PASSporTPayload,
 *     pASSporTSignature [3] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class PASSporT {
    constructor (
        /**
         * @summary `pASSporTHeader`.
         * @public
         * @readonly
         */
        readonly pASSporTHeader: PASSporTHeader,
        /**
         * @summary `pASSporTPayload`.
         * @public
         * @readonly
         */
        readonly pASSporTPayload: PASSporTPayload,
        /**
         * @summary `pASSporTSignature`.
         * @public
         * @readonly
         */
        readonly pASSporTSignature: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a PASSporT
     * @description
     * 
     * This takes an `object` and converts it to a `PASSporT`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PASSporT`.
     * @returns {PASSporT}
     */
    public static _from_object (_o: { [_K in keyof (PASSporT)]: (PASSporT)[_K] }): PASSporT {
        return new PASSporT(_o.pASSporTHeader, _o.pASSporTPayload, _o.pASSporTSignature);
    }


}

/**
 * @summary The Leading Root Component Types of PASSporT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PASSporT: $.ComponentSpec[] = [
    new $.ComponentSpec("pASSporTHeader", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pASSporTPayload", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pASSporTSignature", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PASSporT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PASSporT: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PASSporT
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PASSporT: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PASSporT: $.ASN1Decoder<PASSporT> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PASSporT
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PASSporT (el: _Element): PASSporT {
    if (!_cached_decoder_for_PASSporT) { _cached_decoder_for_PASSporT = function (el: _Element): PASSporT {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PASSporT contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pASSporTHeader";
    sequence[1].name = "pASSporTPayload";
    sequence[2].name = "pASSporTSignature";
    let pASSporTHeader!: PASSporTHeader;
    let pASSporTPayload!: PASSporTPayload;
    let pASSporTSignature!: OCTET_STRING;
    pASSporTHeader = $._decode_implicit<PASSporTHeader>(() => _decode_PASSporTHeader)(sequence[0]);
    pASSporTPayload = $._decode_implicit<PASSporTPayload>(() => _decode_PASSporTPayload)(sequence[1]);
    pASSporTSignature = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[2]);
    return new PASSporT(
        pASSporTHeader,
        pASSporTPayload,
        pASSporTSignature,

    );
}; }
    return _cached_decoder_for_PASSporT(el);
}

let _cached_encoder_for_PASSporT: $.ASN1Encoder<PASSporT> | null = null;

/**
 * @summary Encodes a(n) PASSporT into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PASSporT, encoded as an ASN.1 Element.
 */
export
function _encode_PASSporT (value: PASSporT, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PASSporT) { _cached_encoder_for_PASSporT = function (value: PASSporT, elGetter: $.ASN1Encoder<PASSporT>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PASSporTHeader, $.BER)(value.pASSporTHeader, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PASSporTPayload, $.BER)(value.pASSporTPayload, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.pASSporTSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PASSporT(value, elGetter);
}


/* eslint-enable */
