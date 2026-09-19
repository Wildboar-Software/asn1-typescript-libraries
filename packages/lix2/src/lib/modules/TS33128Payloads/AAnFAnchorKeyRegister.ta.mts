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
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { KAKMA, _decode_KAKMA, _encode_KAKMA } from "../TS33128Payloads/KAKMA.ta.mjs";
// export { KAKMA, _decode_KAKMA, _encode_KAKMA } from "../TS33128Payloads/KAKMA.ta.mjs";


/**
 * @summary AAnFAnchorKeyRegister
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AAnFAnchorKeyRegister ::= SEQUENCE
 * {
 *     aKID                  [1] NAI,
 *     sUPI                  [2] SUPI,
 *     kAKMA                 [3] KAKMA OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AAnFAnchorKeyRegister {
    constructor (
        /**
         * @summary `aKID`.
         * @public
         * @readonly
         */
        readonly aKID: NAI,
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `kAKMA`.
         * @public
         * @readonly
         */
        readonly kAKMA: OPTIONAL<KAKMA>
    ) {}

    /**
     * @summary Restructures an object into a AAnFAnchorKeyRegister
     * @description
     * 
     * This takes an `object` and converts it to a `AAnFAnchorKeyRegister`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AAnFAnchorKeyRegister`.
     * @returns {AAnFAnchorKeyRegister}
     */
    public static _from_object (_o: { [_K in keyof (AAnFAnchorKeyRegister)]: (AAnFAnchorKeyRegister)[_K] }): AAnFAnchorKeyRegister {
        return new AAnFAnchorKeyRegister(_o.aKID, _o.sUPI, _o.kAKMA);
    }


}

/**
 * @summary The Leading Root Component Types of AAnFAnchorKeyRegister
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AAnFAnchorKeyRegister: $.ComponentSpec[] = [
    new $.ComponentSpec("aKID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("kAKMA", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AAnFAnchorKeyRegister
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AAnFAnchorKeyRegister: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AAnFAnchorKeyRegister
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AAnFAnchorKeyRegister: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AAnFAnchorKeyRegister: $.ASN1Decoder<AAnFAnchorKeyRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AAnFAnchorKeyRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AAnFAnchorKeyRegister (el: _Element): AAnFAnchorKeyRegister {
    if (!_cached_decoder_for_AAnFAnchorKeyRegister) { _cached_decoder_for_AAnFAnchorKeyRegister = function (el: _Element): AAnFAnchorKeyRegister {
    let aKID!: NAI;
    let sUPI!: SUPI;
    let kAKMA: OPTIONAL<KAKMA>;
    const callbacks: $.DecodingMap = {
        "aKID": (_el: _Element): void => { aKID = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "kAKMA": (_el: _Element): void => { kAKMA = $._decode_implicit<KAKMA>(() => _decode_KAKMA)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AAnFAnchorKeyRegister,
        _extension_additions_list_spec_for_AAnFAnchorKeyRegister,
        _root_component_type_list_2_spec_for_AAnFAnchorKeyRegister,
        undefined,
    );
    return new AAnFAnchorKeyRegister(
        aKID,
        sUPI,
        kAKMA
    );
}; }
    return _cached_decoder_for_AAnFAnchorKeyRegister(el);
}

let _cached_encoder_for_AAnFAnchorKeyRegister: $.ASN1Encoder<AAnFAnchorKeyRegister> | null = null;

/**
 * @summary Encodes a(n) AAnFAnchorKeyRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AAnFAnchorKeyRegister, encoded as an ASN.1 Element.
 */
export
function _encode_AAnFAnchorKeyRegister (value: AAnFAnchorKeyRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AAnFAnchorKeyRegister) { _cached_encoder_for_AAnFAnchorKeyRegister = function (value: AAnFAnchorKeyRegister, elGetter: $.ASN1Encoder<AAnFAnchorKeyRegister>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NAI, $.BER)(value.aKID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* IF_ABSENT  */ ((value.kAKMA === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_KAKMA, $.BER)(value.kAKMA, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AAnFAnchorKeyRegister(value, elGetter);
}


/* eslint-enable */
