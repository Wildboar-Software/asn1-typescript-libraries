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
import { Bandwidth, _decode_Bandwidth, _encode_Bandwidth } from "../MAP-MS-DataTypes/Bandwidth.ta.mjs";
// export { Bandwidth, _decode_Bandwidth, _encode_Bandwidth } from "../MAP-MS-DataTypes/Bandwidth.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { BandwidthExt, _decode_BandwidthExt, _encode_BandwidthExt } from "../MAP-MS-DataTypes/BandwidthExt.ta.mjs";
// export { BandwidthExt, _decode_BandwidthExt, _encode_BandwidthExt } from "../MAP-MS-DataTypes/BandwidthExt.ta.mjs";


/**
 * @summary AMBR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMBR ::= SEQUENCE {
 *     max-RequestedBandwidth-UL    [0] Bandwidth,
 *     max-RequestedBandwidth-DL    [1] Bandwidth,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...,
 *     extended-Max-RequestedBandwidth-UL    [3] BandwidthExt    OPTIONAL,
 *     extended-Max-RequestedBandwidth-DL    [4] BandwidthExt    OPTIONAL
 *     -- extended-Max-RequestedBandwidth-UL/DL shall be populated according to the 
 *     -- description of the corresponding parameters in 3GPP TS 29.272 [144]
 * }
 * ```
 * 
 * @class
 */
export
class AMBR {
    constructor (
        /**
         * @summary `max_RequestedBandwidth_UL`.
         * @public
         * @readonly
         */
        readonly max_RequestedBandwidth_UL: Bandwidth,
        /**
         * @summary `max_RequestedBandwidth_DL`.
         * @public
         * @readonly
         */
        readonly max_RequestedBandwidth_DL: Bandwidth,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `extended_Max_RequestedBandwidth_UL`.
         * @public
         * @readonly
         */
        readonly extended_Max_RequestedBandwidth_UL: OPTIONAL<BandwidthExt>,
        /**
         * @summary `extended_Max_RequestedBandwidth_DL`.
         * @public
         * @readonly
         */
        readonly extended_Max_RequestedBandwidth_DL: OPTIONAL<BandwidthExt>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AMBR
     * @description
     * 
     * This takes an `object` and converts it to a `AMBR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMBR`.
     * @returns {AMBR}
     */
    public static _from_object (_o: { [_K in keyof (AMBR)]: (AMBR)[_K] }): AMBR {
        return new AMBR(_o.max_RequestedBandwidth_UL, _o.max_RequestedBandwidth_DL, _o.extensionContainer, _o.extended_Max_RequestedBandwidth_UL, _o.extended_Max_RequestedBandwidth_DL, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AMBR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMBR: $.ComponentSpec[] = [
    new $.ComponentSpec("max-RequestedBandwidth-UL", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("max-RequestedBandwidth-DL", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of AMBR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMBR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMBR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMBR: $.ComponentSpec[] = [
    new $.ComponentSpec("extended-Max-RequestedBandwidth-UL", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("extended-Max-RequestedBandwidth-DL", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

let _cached_decoder_for_AMBR: $.ASN1Decoder<AMBR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMBR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMBR (el: _Element): AMBR {
    if (!_cached_decoder_for_AMBR) { _cached_decoder_for_AMBR = function (el: _Element): AMBR {
    let max_RequestedBandwidth_UL!: Bandwidth;
    let max_RequestedBandwidth_DL!: Bandwidth;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let extended_Max_RequestedBandwidth_UL: OPTIONAL<BandwidthExt>;
    let extended_Max_RequestedBandwidth_DL: OPTIONAL<BandwidthExt>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "max-RequestedBandwidth-UL": (_el: _Element): void => { max_RequestedBandwidth_UL = $._decode_implicit<Bandwidth>(() => _decode_Bandwidth)(_el); },
        "max-RequestedBandwidth-DL": (_el: _Element): void => { max_RequestedBandwidth_DL = $._decode_implicit<Bandwidth>(() => _decode_Bandwidth)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "extended-Max-RequestedBandwidth-UL": (_el: _Element): void => { extended_Max_RequestedBandwidth_UL = $._decode_implicit<BandwidthExt>(() => _decode_BandwidthExt)(_el); },
        "extended-Max-RequestedBandwidth-DL": (_el: _Element): void => { extended_Max_RequestedBandwidth_DL = $._decode_implicit<BandwidthExt>(() => _decode_BandwidthExt)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMBR,
        _extension_additions_list_spec_for_AMBR,
        _root_component_type_list_2_spec_for_AMBR,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMBR(
        max_RequestedBandwidth_UL,
        max_RequestedBandwidth_DL,
        extensionContainer,
        extended_Max_RequestedBandwidth_UL,
        extended_Max_RequestedBandwidth_DL,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMBR(el);
}

let _cached_encoder_for_AMBR: $.ASN1Encoder<AMBR> | null = null;

/**
 * @summary Encodes a(n) AMBR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMBR, encoded as an ASN.1 Element.
 */
export
function _encode_AMBR (value: AMBR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMBR) { _cached_encoder_for_AMBR = function (value: AMBR, elGetter: $.ASN1Encoder<AMBR>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Bandwidth, $.BER)(value.max_RequestedBandwidth_UL, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Bandwidth, $.BER)(value.max_RequestedBandwidth_DL, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.extended_Max_RequestedBandwidth_UL === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_BandwidthExt, $.BER)(value.extended_Max_RequestedBandwidth_UL, $.BER)),
            /* IF_ABSENT  */ ((value.extended_Max_RequestedBandwidth_DL === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_BandwidthExt, $.BER)(value.extended_Max_RequestedBandwidth_DL, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMBR(value, elGetter);
}


/* eslint-enable */
