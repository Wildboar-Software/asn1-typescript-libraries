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
import { FiveGSInterworkingIndicator, _decode_FiveGSInterworkingIndicator, _encode_FiveGSInterworkingIndicator } from "../TS33128Payloads/FiveGSInterworkingIndicator.ta.mjs";
// export { FiveGSInterworkingIndicator, _decode_FiveGSInterworkingIndicator, _encode_FiveGSInterworkingIndicator } from "../TS33128Payloads/FiveGSInterworkingIndicator.ta.mjs";
import { FiveGSInterworkingWithoutN26, _decode_FiveGSInterworkingWithoutN26, _encode_FiveGSInterworkingWithoutN26 } from "../TS33128Payloads/FiveGSInterworkingWithoutN26.ta.mjs";
// export { FiveGSInterworkingWithoutN26, _decode_FiveGSInterworkingWithoutN26, _encode_FiveGSInterworkingWithoutN26 } from "../TS33128Payloads/FiveGSInterworkingWithoutN26.ta.mjs";
import { FiveGCNotRestrictedSupport, _decode_FiveGCNotRestrictedSupport, _encode_FiveGCNotRestrictedSupport } from "../TS33128Payloads/FiveGCNotRestrictedSupport.ta.mjs";
// export { FiveGCNotRestrictedSupport, _decode_FiveGCNotRestrictedSupport, _encode_FiveGCNotRestrictedSupport } from "../TS33128Payloads/FiveGCNotRestrictedSupport.ta.mjs";


/**
 * @summary FiveGSInterworkingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSInterworkingInfo ::= SEQUENCE
 * {
 *     fiveGSInterworkingIndicator  [1] FiveGSInterworkingIndicator,
 *     fiveGSInterworkingWithoutN26 [2] FiveGSInterworkingWithoutN26,
 *     fiveGCNotRestrictedSupport   [3] FiveGCNotRestrictedSupport
 * }
 * ```
 * 
 * @class
 */
export
class FiveGSInterworkingInfo {
    constructor (
        /**
         * @summary `fiveGSInterworkingIndicator`.
         * @public
         * @readonly
         */
        readonly fiveGSInterworkingIndicator: FiveGSInterworkingIndicator,
        /**
         * @summary `fiveGSInterworkingWithoutN26`.
         * @public
         * @readonly
         */
        readonly fiveGSInterworkingWithoutN26: FiveGSInterworkingWithoutN26,
        /**
         * @summary `fiveGCNotRestrictedSupport`.
         * @public
         * @readonly
         */
        readonly fiveGCNotRestrictedSupport: FiveGCNotRestrictedSupport
    ) {}

    /**
     * @summary Restructures an object into a FiveGSInterworkingInfo
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGSInterworkingInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGSInterworkingInfo`.
     * @returns {FiveGSInterworkingInfo}
     */
    public static _from_object (_o: { [_K in keyof (FiveGSInterworkingInfo)]: (FiveGSInterworkingInfo)[_K] }): FiveGSInterworkingInfo {
        return new FiveGSInterworkingInfo(_o.fiveGSInterworkingIndicator, _o.fiveGSInterworkingWithoutN26, _o.fiveGCNotRestrictedSupport);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGSInterworkingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGSInterworkingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGSInterworkingIndicator", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fiveGSInterworkingWithoutN26", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fiveGCNotRestrictedSupport", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FiveGSInterworkingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGSInterworkingInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGSInterworkingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGSInterworkingInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGSInterworkingInfo: $.ASN1Decoder<FiveGSInterworkingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSInterworkingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSInterworkingInfo (el: _Element): FiveGSInterworkingInfo {
    if (!_cached_decoder_for_FiveGSInterworkingInfo) { _cached_decoder_for_FiveGSInterworkingInfo = function (el: _Element): FiveGSInterworkingInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("FiveGSInterworkingInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "fiveGSInterworkingIndicator";
    sequence[1].name = "fiveGSInterworkingWithoutN26";
    sequence[2].name = "fiveGCNotRestrictedSupport";
    let fiveGSInterworkingIndicator!: FiveGSInterworkingIndicator;
    let fiveGSInterworkingWithoutN26!: FiveGSInterworkingWithoutN26;
    let fiveGCNotRestrictedSupport!: FiveGCNotRestrictedSupport;
    fiveGSInterworkingIndicator = $._decode_implicit<FiveGSInterworkingIndicator>(() => _decode_FiveGSInterworkingIndicator)(sequence[0]);
    fiveGSInterworkingWithoutN26 = $._decode_implicit<FiveGSInterworkingWithoutN26>(() => _decode_FiveGSInterworkingWithoutN26)(sequence[1]);
    fiveGCNotRestrictedSupport = $._decode_implicit<FiveGCNotRestrictedSupport>(() => _decode_FiveGCNotRestrictedSupport)(sequence[2]);
    return new FiveGSInterworkingInfo(
        fiveGSInterworkingIndicator,
        fiveGSInterworkingWithoutN26,
        fiveGCNotRestrictedSupport,

    );
}; }
    return _cached_decoder_for_FiveGSInterworkingInfo(el);
}

let _cached_encoder_for_FiveGSInterworkingInfo: $.ASN1Encoder<FiveGSInterworkingInfo> | null = null;

/**
 * @summary Encodes a(n) FiveGSInterworkingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSInterworkingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSInterworkingInfo (value: FiveGSInterworkingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSInterworkingInfo) { _cached_encoder_for_FiveGSInterworkingInfo = function (value: FiveGSInterworkingInfo, elGetter: $.ASN1Encoder<FiveGSInterworkingInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSInterworkingIndicator, $.BER)(value.fiveGSInterworkingIndicator, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_FiveGSInterworkingWithoutN26, $.BER)(value.fiveGSInterworkingWithoutN26, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_FiveGCNotRestrictedSupport, $.BER)(value.fiveGCNotRestrictedSupport, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FiveGSInterworkingInfo(value, elGetter);
}


/* eslint-enable */
