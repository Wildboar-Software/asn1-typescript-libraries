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
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { EESACRDetOrInit, _decode_EESACRDetOrInit, _encode_EESACRDetOrInit } from "../TS33128Payloads/EESACRDetOrInit.ta.mjs";
// export { EESACRDetOrInit, _decode_EESACRDetOrInit, _encode_EESACRDetOrInit } from "../TS33128Payloads/EESACRDetOrInit.ta.mjs";


/**
 * @summary EESAppContextRelocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESAppContextRelocation ::= SEQUENCE
 * {
 *     eECID              [1] UTF8String,
 *     gPSI               [2] GPSI OPTIONAL,
 *     eESACRDetOrInit    [3] EESACRDetOrInit
 * }
 * ```
 * 
 * @class
 */
export
class EESAppContextRelocation {
    constructor (
        /**
         * @summary `eECID`.
         * @public
         * @readonly
         */
        readonly eECID: UTF8String,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `eESACRDetOrInit`.
         * @public
         * @readonly
         */
        readonly eESACRDetOrInit: EESACRDetOrInit
    ) {}

    /**
     * @summary Restructures an object into a EESAppContextRelocation
     * @description
     * 
     * This takes an `object` and converts it to a `EESAppContextRelocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESAppContextRelocation`.
     * @returns {EESAppContextRelocation}
     */
    public static _from_object (_o: { [_K in keyof (EESAppContextRelocation)]: (EESAppContextRelocation)[_K] }): EESAppContextRelocation {
        return new EESAppContextRelocation(_o.eECID, _o.gPSI, _o.eESACRDetOrInit);
    }


}

/**
 * @summary The Leading Root Component Types of EESAppContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESAppContextRelocation: $.ComponentSpec[] = [
    new $.ComponentSpec("eECID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eESACRDetOrInit", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of EESAppContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESAppContextRelocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESAppContextRelocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESAppContextRelocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESAppContextRelocation: $.ASN1Decoder<EESAppContextRelocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESAppContextRelocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESAppContextRelocation (el: _Element): EESAppContextRelocation {
    if (!_cached_decoder_for_EESAppContextRelocation) { _cached_decoder_for_EESAppContextRelocation = function (el: _Element): EESAppContextRelocation {
    let eECID!: UTF8String;
    let gPSI: OPTIONAL<GPSI>;
    let eESACRDetOrInit!: EESACRDetOrInit;
    const callbacks: $.DecodingMap = {
        "eECID": (_el: _Element): void => { eECID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "eESACRDetOrInit": (_el: _Element): void => { eESACRDetOrInit = $._decode_explicit<EESACRDetOrInit>(() => _decode_EESACRDetOrInit)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESAppContextRelocation,
        _extension_additions_list_spec_for_EESAppContextRelocation,
        _root_component_type_list_2_spec_for_EESAppContextRelocation,
        undefined,
    );
    return new EESAppContextRelocation(
        eECID,
        gPSI,
        eESACRDetOrInit
    );
}; }
    return _cached_decoder_for_EESAppContextRelocation(el);
}

let _cached_encoder_for_EESAppContextRelocation: $.ASN1Encoder<EESAppContextRelocation> | null = null;

/**
 * @summary Encodes a(n) EESAppContextRelocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESAppContextRelocation, encoded as an ASN.1 Element.
 */
export
function _encode_EESAppContextRelocation (value: EESAppContextRelocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESAppContextRelocation) { _cached_encoder_for_EESAppContextRelocation = function (value: EESAppContextRelocation, elGetter: $.ASN1Encoder<EESAppContextRelocation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eECID, $.BER),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_EESACRDetOrInit, $.BER)(value.eESACRDetOrInit, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESAppContextRelocation(value, elGetter);
}


/* eslint-enable */
