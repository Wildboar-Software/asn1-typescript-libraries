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
import { ParameterOffers_dimensionOffer, ParameterOffers_dimensionOffer_oneDimension /* IMPORTED_LONG_NAMED_BIT */, oneDimension /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_dimensionOffer_twoDimensions /* IMPORTED_LONG_NAMED_BIT */, twoDimensions /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_dimensionOffer_threeDimensions /* IMPORTED_LONG_NAMED_BIT */, threeDimensions /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_dimensionOffer, _encode_ParameterOffers_dimensionOffer } from "../CDS/ParameterOffers-dimensionOffer.ta.mjs";
// export { ParameterOffers_dimensionOffer, ParameterOffers_dimensionOffer_oneDimension /* IMPORTED_LONG_NAMED_BIT */, oneDimension /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_dimensionOffer_twoDimensions /* IMPORTED_LONG_NAMED_BIT */, twoDimensions /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_dimensionOffer_threeDimensions /* IMPORTED_LONG_NAMED_BIT */, threeDimensions /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_dimensionOffer, _encode_ParameterOffers_dimensionOffer } from "../CDS/ParameterOffers-dimensionOffer.ta.mjs";
import { DimensionParamOffer, _decode_DimensionParamOffer, _encode_DimensionParamOffer } from "../CDS/DimensionParamOffer.ta.mjs";
// export { DimensionParamOffer, _decode_DimensionParamOffer, _encode_DimensionParamOffer } from "../CDS/DimensionParamOffer.ta.mjs";
import { ParameterOffers_erasure, ParameterOffers_erasure_yes /* IMPORTED_LONG_NAMED_BIT */, ParameterOffers_erasure_no /* IMPORTED_LONG_NAMED_BIT */, _decode_ParameterOffers_erasure, _encode_ParameterOffers_erasure } from "../CDS/ParameterOffers-erasure.ta.mjs";
// export { ParameterOffers_erasure, ParameterOffers_erasure_yes /* IMPORTED_LONG_NAMED_BIT */, ParameterOffers_erasure_no /* IMPORTED_LONG_NAMED_BIT */, _decode_ParameterOffers_erasure, _encode_ParameterOffers_erasure } from "../CDS/ParameterOffers-erasure.ta.mjs";
import { CompoundRepertoireOffer, _decode_CompoundRepertoireOffer, _encode_CompoundRepertoireOffer } from "../CDS/CompoundRepertoireOffer.ta.mjs";
// export { CompoundRepertoireOffer, _decode_CompoundRepertoireOffer, _encode_CompoundRepertoireOffer } from "../CDS/CompoundRepertoireOffer.ta.mjs";
import { CompoundEmphasisOffer, _decode_CompoundEmphasisOffer, _encode_CompoundEmphasisOffer } from "../CDS/CompoundEmphasisOffer.ta.mjs";
// export { CompoundEmphasisOffer, _decode_CompoundEmphasisOffer, _encode_CompoundEmphasisOffer } from "../CDS/CompoundEmphasisOffer.ta.mjs";
import { CompoundColourOffer, _decode_CompoundColourOffer, _encode_CompoundColourOffer } from "../CDS/CompoundColourOffer.ta.mjs";
// export { CompoundColourOffer, _decode_CompoundColourOffer, _encode_CompoundColourOffer } from "../CDS/CompoundColourOffer.ta.mjs";
import { ParameterOffers_access, ParameterOffers_access_wavar /* IMPORTED_LONG_NAMED_BIT */, wavar /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_access_waci /* IMPORTED_LONG_NAMED_BIT */, waci /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_access_waca /* IMPORTED_LONG_NAMED_BIT */, waca /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_access, _encode_ParameterOffers_access } from "../CDS/ParameterOffers-access.ta.mjs";
// export { ParameterOffers_access, ParameterOffers_access_wavar /* IMPORTED_LONG_NAMED_BIT */, wavar /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_access_waci /* IMPORTED_LONG_NAMED_BIT */, waci /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_access_waca /* IMPORTED_LONG_NAMED_BIT */, waca /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_access, _encode_ParameterOffers_access } from "../CDS/ParameterOffers-access.ta.mjs";
import { BlockParamOffer, _decode_BlockParamOffer, _encode_BlockParamOffer } from "../CDS/BlockParamOffer.ta.mjs";
// export { BlockParamOffer, _decode_BlockParamOffer, _encode_BlockParamOffer } from "../CDS/BlockParamOffer.ta.mjs";
import { FieldParamOffer, _decode_FieldParamOffer, _encode_FieldParamOffer } from "../CDS/FieldParamOffer.ta.mjs";
// export { FieldParamOffer, _decode_FieldParamOffer, _encode_FieldParamOffer } from "../CDS/FieldParamOffer.ta.mjs";
import { ParameterOffers_rippleCapability, ParameterOffers_rippleCapability_yes /* IMPORTED_LONG_NAMED_BIT */, ParameterOffers_rippleCapability_no /* IMPORTED_LONG_NAMED_BIT */, _decode_ParameterOffers_rippleCapability, _encode_ParameterOffers_rippleCapability } from "../CDS/ParameterOffers-rippleCapability.ta.mjs";
// export { ParameterOffers_rippleCapability, ParameterOffers_rippleCapability_yes /* IMPORTED_LONG_NAMED_BIT */, ParameterOffers_rippleCapability_no /* IMPORTED_LONG_NAMED_BIT */, _decode_ParameterOffers_rippleCapability, _encode_ParameterOffers_rippleCapability } from "../CDS/ParameterOffers-rippleCapability.ta.mjs";


/**
 * @summary ParameterOffers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers ::= SEQUENCE {
 *     dimensionOffer      [0] IMPLICIT BIT STRING {
 *         oneDimension   (0),
 *         twoDimensions  (1),
 *         threeDimensions (2)
 *     } OPTIONAL,
 *     xParam              [1]  IMPLICIT DimensionParamOffer OPTIONAL,
 *     yParam              [2]  IMPLICIT DimensionParamOffer OPTIONAL,
 *     zParam              [3]  IMPLICIT DimensionParamOffer OPTIONAL,
 *     erasure             [4]  IMPLICIT BIT STRING { yes (0), no (1) } OPTIONAL,
 *     repertoire          [5]  IMPLICIT CompoundRepertoireOffer OPTIONAL,
 *     emphasis            [6]  IMPLICIT CompoundEmphasisOffer OPTIONAL,
 *     foreground          [7]  IMPLICIT CompoundColourOffer OPTIONAL,
 *     background          [8]  IMPLICIT CompoundColourOffer OPTIONAL,
 *     access              [9]  IMPLICIT BIT STRING {
 *         wavar (0),
 *         waci  (1),
 *         waca  (2)
 *     } OPTIONAL,
 *     blockParams         [10] IMPLICIT BlockParamOffer OPTIONAL,
 *     fieldParams         [11] IMPLICIT FieldParamOffer OPTIONAL,
 *     rippleCapability    [12] IMPLICIT BIT STRING { yes (0), no (1) } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers {
    constructor (
        /**
         * @summary `dimensionOffer`.
         * @public
         * @readonly
         */
        readonly dimensionOffer: OPTIONAL<ParameterOffers_dimensionOffer>,
        /**
         * @summary `xParam`.
         * @public
         * @readonly
         */
        readonly xParam: OPTIONAL<DimensionParamOffer>,
        /**
         * @summary `yParam`.
         * @public
         * @readonly
         */
        readonly yParam: OPTIONAL<DimensionParamOffer>,
        /**
         * @summary `zParam`.
         * @public
         * @readonly
         */
        readonly zParam: OPTIONAL<DimensionParamOffer>,
        /**
         * @summary `erasure`.
         * @public
         * @readonly
         */
        readonly erasure: OPTIONAL<ParameterOffers_erasure>,
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<CompoundRepertoireOffer>,
        /**
         * @summary `emphasis`.
         * @public
         * @readonly
         */
        readonly emphasis: OPTIONAL<CompoundEmphasisOffer>,
        /**
         * @summary `foreground`.
         * @public
         * @readonly
         */
        readonly foreground: OPTIONAL<CompoundColourOffer>,
        /**
         * @summary `background`.
         * @public
         * @readonly
         */
        readonly background: OPTIONAL<CompoundColourOffer>,
        /**
         * @summary `access`.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<ParameterOffers_access>,
        /**
         * @summary `blockParams`.
         * @public
         * @readonly
         */
        readonly blockParams: OPTIONAL<BlockParamOffer>,
        /**
         * @summary `fieldParams`.
         * @public
         * @readonly
         */
        readonly fieldParams: OPTIONAL<FieldParamOffer>,
        /**
         * @summary `rippleCapability`.
         * @public
         * @readonly
         */
        readonly rippleCapability: OPTIONAL<ParameterOffers_rippleCapability>
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers`.
     * @returns {ParameterOffers}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers)]: (ParameterOffers)[_K] }): ParameterOffers {
        return new ParameterOffers(_o.dimensionOffer, _o.xParam, _o.yParam, _o.zParam, _o.erasure, _o.repertoire, _o.emphasis, _o.foreground, _o.background, _o.access, _o.blockParams, _o.fieldParams, _o.rippleCapability);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers: $.ComponentSpec[] = [
    new $.ComponentSpec("dimensionOffer", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("xParam", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("yParam", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("zParam", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("erasure", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("repertoire", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("emphasis", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("foreground", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("background", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("access", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("blockParams", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("fieldParams", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("rippleCapability", true, $.hasTag(_TagClass.context, 12))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers: $.ASN1Decoder<ParameterOffers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers (el: _Element): ParameterOffers {
    if (!_cached_decoder_for_ParameterOffers) { _cached_decoder_for_ParameterOffers = function (el: _Element): ParameterOffers {
    let dimensionOffer: OPTIONAL<ParameterOffers_dimensionOffer>;
    let xParam: OPTIONAL<DimensionParamOffer>;
    let yParam: OPTIONAL<DimensionParamOffer>;
    let zParam: OPTIONAL<DimensionParamOffer>;
    let erasure: OPTIONAL<ParameterOffers_erasure>;
    let repertoire: OPTIONAL<CompoundRepertoireOffer>;
    let emphasis: OPTIONAL<CompoundEmphasisOffer>;
    let foreground: OPTIONAL<CompoundColourOffer>;
    let background: OPTIONAL<CompoundColourOffer>;
    let access: OPTIONAL<ParameterOffers_access>;
    let blockParams: OPTIONAL<BlockParamOffer>;
    let fieldParams: OPTIONAL<FieldParamOffer>;
    let rippleCapability: OPTIONAL<ParameterOffers_rippleCapability>;
    const callbacks: $.DecodingMap = {
        "dimensionOffer": (_el: _Element): void => { dimensionOffer = $._decode_implicit<ParameterOffers_dimensionOffer>(() => _decode_ParameterOffers_dimensionOffer)(_el); },
        "xParam": (_el: _Element): void => { xParam = $._decode_implicit<DimensionParamOffer>(() => _decode_DimensionParamOffer)(_el); },
        "yParam": (_el: _Element): void => { yParam = $._decode_implicit<DimensionParamOffer>(() => _decode_DimensionParamOffer)(_el); },
        "zParam": (_el: _Element): void => { zParam = $._decode_implicit<DimensionParamOffer>(() => _decode_DimensionParamOffer)(_el); },
        "erasure": (_el: _Element): void => { erasure = $._decode_implicit<ParameterOffers_erasure>(() => _decode_ParameterOffers_erasure)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<CompoundRepertoireOffer>(() => _decode_CompoundRepertoireOffer)(_el); },
        "emphasis": (_el: _Element): void => { emphasis = $._decode_implicit<CompoundEmphasisOffer>(() => _decode_CompoundEmphasisOffer)(_el); },
        "foreground": (_el: _Element): void => { foreground = $._decode_implicit<CompoundColourOffer>(() => _decode_CompoundColourOffer)(_el); },
        "background": (_el: _Element): void => { background = $._decode_implicit<CompoundColourOffer>(() => _decode_CompoundColourOffer)(_el); },
        "access": (_el: _Element): void => { access = $._decode_implicit<ParameterOffers_access>(() => _decode_ParameterOffers_access)(_el); },
        "blockParams": (_el: _Element): void => { blockParams = $._decode_implicit<BlockParamOffer>(() => _decode_BlockParamOffer)(_el); },
        "fieldParams": (_el: _Element): void => { fieldParams = $._decode_implicit<FieldParamOffer>(() => _decode_FieldParamOffer)(_el); },
        "rippleCapability": (_el: _Element): void => { rippleCapability = $._decode_implicit<ParameterOffers_rippleCapability>(() => _decode_ParameterOffers_rippleCapability)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterOffers,
        _extension_additions_list_spec_for_ParameterOffers,
        _root_component_type_list_2_spec_for_ParameterOffers,
        undefined,
    );
    return new ParameterOffers(
        dimensionOffer,
        xParam,
        yParam,
        zParam,
        erasure,
        repertoire,
        emphasis,
        foreground,
        background,
        access,
        blockParams,
        fieldParams,
        rippleCapability
    );
}; }
    return _cached_decoder_for_ParameterOffers(el);
}

let _cached_encoder_for_ParameterOffers: $.ASN1Encoder<ParameterOffers> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers (value: ParameterOffers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers) { _cached_encoder_for_ParameterOffers = function (value: ParameterOffers, elGetter: $.ASN1Encoder<ParameterOffers>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dimensionOffer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ParameterOffers_dimensionOffer, $.BER)(value.dimensionOffer, $.BER)),
            /* IF_ABSENT  */ ((value.xParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DimensionParamOffer, $.BER)(value.xParam, $.BER)),
            /* IF_ABSENT  */ ((value.yParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DimensionParamOffer, $.BER)(value.yParam, $.BER)),
            /* IF_ABSENT  */ ((value.zParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DimensionParamOffer, $.BER)(value.zParam, $.BER)),
            /* IF_ABSENT  */ ((value.erasure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ParameterOffers_erasure, $.BER)(value.erasure, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CompoundRepertoireOffer, $.BER)(value.repertoire, $.BER)),
            /* IF_ABSENT  */ ((value.emphasis === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CompoundEmphasisOffer, $.BER)(value.emphasis, $.BER)),
            /* IF_ABSENT  */ ((value.foreground === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CompoundColourOffer, $.BER)(value.foreground, $.BER)),
            /* IF_ABSENT  */ ((value.background === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CompoundColourOffer, $.BER)(value.background, $.BER)),
            /* IF_ABSENT  */ ((value.access === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ParameterOffers_access, $.BER)(value.access, $.BER)),
            /* IF_ABSENT  */ ((value.blockParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_BlockParamOffer, $.BER)(value.blockParams, $.BER)),
            /* IF_ABSENT  */ ((value.fieldParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_FieldParamOffer, $.BER)(value.fieldParams, $.BER)),
            /* IF_ABSENT  */ ((value.rippleCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ParameterOffers_rippleCapability, $.BER)(value.rippleCapability, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers(value, elGetter);
}


/* eslint-enable */
