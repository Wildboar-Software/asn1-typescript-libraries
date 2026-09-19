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
import { FiveGSGTPTunnels, _decode_FiveGSGTPTunnels, _encode_FiveGSGTPTunnels } from "../TS33128Payloads/FiveGSGTPTunnels.ta.mjs";
// export { FiveGSGTPTunnels, _decode_FiveGSGTPTunnels, _encode_FiveGSGTPTunnels } from "../TS33128Payloads/FiveGSGTPTunnels.ta.mjs";
import { EPSGTPTunnels, _decode_EPSGTPTunnels, _encode_EPSGTPTunnels } from "../TS33128Payloads/EPSGTPTunnels.ta.mjs";
// export { EPSGTPTunnels, _decode_EPSGTPTunnels, _encode_EPSGTPTunnels } from "../TS33128Payloads/EPSGTPTunnels.ta.mjs";


/**
 * @summary GTPTunnelInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GTPTunnelInfo ::= SEQUENCE
 * {
 *     fiveGSGTPTunnels [1] FiveGSGTPTunnels OPTIONAL,
 *     ePSGTPTunnels    [2] EPSGTPTunnels OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class GTPTunnelInfo {
    constructor (
        /**
         * @summary `fiveGSGTPTunnels`.
         * @public
         * @readonly
         */
        readonly fiveGSGTPTunnels: OPTIONAL<FiveGSGTPTunnels>,
        /**
         * @summary `ePSGTPTunnels`.
         * @public
         * @readonly
         */
        readonly ePSGTPTunnels: OPTIONAL<EPSGTPTunnels>
    ) {}

    /**
     * @summary Restructures an object into a GTPTunnelInfo
     * @description
     * 
     * This takes an `object` and converts it to a `GTPTunnelInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GTPTunnelInfo`.
     * @returns {GTPTunnelInfo}
     */
    public static _from_object (_o: { [_K in keyof (GTPTunnelInfo)]: (GTPTunnelInfo)[_K] }): GTPTunnelInfo {
        return new GTPTunnelInfo(_o.fiveGSGTPTunnels, _o.ePSGTPTunnels);
    }


}

/**
 * @summary The Leading Root Component Types of GTPTunnelInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GTPTunnelInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGSGTPTunnels", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ePSGTPTunnels", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GTPTunnelInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GTPTunnelInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GTPTunnelInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GTPTunnelInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GTPTunnelInfo: $.ASN1Decoder<GTPTunnelInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GTPTunnelInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GTPTunnelInfo (el: _Element): GTPTunnelInfo {
    if (!_cached_decoder_for_GTPTunnelInfo) { _cached_decoder_for_GTPTunnelInfo = function (el: _Element): GTPTunnelInfo {
    let fiveGSGTPTunnels: OPTIONAL<FiveGSGTPTunnels>;
    let ePSGTPTunnels: OPTIONAL<EPSGTPTunnels>;
    const callbacks: $.DecodingMap = {
        "fiveGSGTPTunnels": (_el: _Element): void => { fiveGSGTPTunnels = $._decode_implicit<FiveGSGTPTunnels>(() => _decode_FiveGSGTPTunnels)(_el); },
        "ePSGTPTunnels": (_el: _Element): void => { ePSGTPTunnels = $._decode_implicit<EPSGTPTunnels>(() => _decode_EPSGTPTunnels)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GTPTunnelInfo,
        _extension_additions_list_spec_for_GTPTunnelInfo,
        _root_component_type_list_2_spec_for_GTPTunnelInfo,
        undefined,
    );
    return new GTPTunnelInfo(
        fiveGSGTPTunnels,
        ePSGTPTunnels
    );
}; }
    return _cached_decoder_for_GTPTunnelInfo(el);
}

let _cached_encoder_for_GTPTunnelInfo: $.ASN1Encoder<GTPTunnelInfo> | null = null;

/**
 * @summary Encodes a(n) GTPTunnelInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GTPTunnelInfo, encoded as an ASN.1 Element.
 */
export
function _encode_GTPTunnelInfo (value: GTPTunnelInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GTPTunnelInfo) { _cached_encoder_for_GTPTunnelInfo = function (value: GTPTunnelInfo, elGetter: $.ASN1Encoder<GTPTunnelInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.fiveGSGTPTunnels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSGTPTunnels, $.BER)(value.fiveGSGTPTunnels, $.BER)),
            /* IF_ABSENT  */ ((value.ePSGTPTunnels === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EPSGTPTunnels, $.BER)(value.ePSGTPTunnels, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GTPTunnelInfo(value, elGetter);
}


/* eslint-enable */
