/* eslint-disable */
import {
    OPTIONAL,
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
import { ParameterOffers_dimensionOffer, _decode_ParameterOffers_dimensionOffer, _encode_ParameterOffers_dimensionOffer } from "../CDS/ParameterOffers-dimensionOffer.ta.mjs";
import { DimensionParamOffer, _decode_DimensionParamOffer, _encode_DimensionParamOffer } from "../CDS/DimensionParamOffer.ta.mjs";
import { ParameterOffers_erasure, _decode_ParameterOffers_erasure, _encode_ParameterOffers_erasure } from "../CDS/ParameterOffers-erasure.ta.mjs";
import { CompoundRepertoireOffer, _decode_CompoundRepertoireOffer, _encode_CompoundRepertoireOffer } from "../CDS/CompoundRepertoireOffer.ta.mjs";
import { CompoundEmphasisOffer, _decode_CompoundEmphasisOffer, _encode_CompoundEmphasisOffer } from "../CDS/CompoundEmphasisOffer.ta.mjs";
import { CompoundColourOffer, _decode_CompoundColourOffer, _encode_CompoundColourOffer } from "../CDS/CompoundColourOffer.ta.mjs";
import { ParameterOffers_access, _decode_ParameterOffers_access, _encode_ParameterOffers_access } from "../CDS/ParameterOffers-access.ta.mjs";
import { BlockParamOffer, _decode_BlockParamOffer, _encode_BlockParamOffer } from "../CDS/BlockParamOffer.ta.mjs";
import { FieldParamOffer, _decode_FieldParamOffer, _encode_FieldParamOffer } from "../CDS/FieldParamOffer.ta.mjs";
import { ParameterOffers_rippleCapability, _decode_ParameterOffers_rippleCapability, _encode_ParameterOffers_rippleCapability } from "../CDS/ParameterOffers-rippleCapability.ta.mjs";


/**
 * @summary ParameterOffers
 * @description
 *
 * Offered values for one display object's VTE-parameters. BIT STRING
 * bits with value 1 are offered. Selected `ParameterValues` must be
 * consistent with these offers. ISO/IEC 9041-1:1997 §12.3.2;
 * ISO/IEC 9040:1997 §18.
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
         * @description
         * Offered `dimensions`: `oneDimension`(0), `twoDimensions`(1),
         * `threeDimensions`(2). Default `"two"`. ISO/IEC 9040:1997
         * §18.1.
         * @public
         * @readonly
         */
        readonly dimensionOffer: OPTIONAL<ParameterOffers_dimensionOffer>,
        /**
         * @summary `xParam`.
         * @description
         * Offered X addressing parameters (`bound`, `addressing`,
         * `absolute`, `window`). ISO/IEC 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly xParam: OPTIONAL<DimensionParamOffer>,
        /**
         * @summary `yParam`.
         * @description
         * Offered Y addressing parameters. Valid if `dimensions` ≥ 2.
         * ISO/IEC 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly yParam: OPTIONAL<DimensionParamOffer>,
        /**
         * @summary `zParam`.
         * @description
         * Offered Z addressing parameters. Valid if `dimensions` = 3.
         * ISO/IEC 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly zParam: OPTIONAL<DimensionParamOffer>,
        /**
         * @summary `erasure`.
         * @description
         * Offered `erasure-capability` (`yes`(0)/`no`(1); default
         * `"no"`). Controls ERASE. ISO/IEC 9040:1997 §18.1,
         * §19.4.1.4.
         * @public
         * @readonly
         */
        readonly erasure: OPTIONAL<ParameterOffers_erasure>,
        /**
         * @summary `repertoire`.
         * @description
         * Offered repertoire-capability and assignment-list slots
         * (slot 1 is the TEXT/REPEAT-TEXT/ERASE modal default).
         * ISO/IEC 9040:1997 §18.1, §18.2.4.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<CompoundRepertoireOffer>,
        /**
         * @summary `emphasis`.
         * @description
         * Offered DO-emphasis assignment list. Explicit modal default
         * is not defined in 9040. ISO/IEC 9040:1997 §18.2.6, B.17.
         * @public
         * @readonly
         */
        readonly emphasis: OPTIONAL<CompoundEmphasisOffer>,
        /**
         * @summary `foreground`.
         * @description
         * Offered foreground-colour capability and assignment list.
         * ISO/IEC 9040:1997 §18.1, §18.2.5.
         * @public
         * @readonly
         */
        readonly foreground: OPTIONAL<CompoundColourOffer>,
        /**
         * @summary `background`.
         * @description
         * Offered background-colour capability and assignment list.
         * ISO/IEC 9040:1997 §18.1, §18.2.5.
         * @public
         * @readonly
         */
        readonly background: OPTIONAL<CompoundColourOffer>,
        /**
         * @summary `access`.
         * @description
         * Offered DO-access. Only `wavar`(0), `waci`(1), `waca`(2);
         * a display object cannot have a combined access-rule. Only
         * `waci` and `waca` bits may be set together. ISO/IEC
         * 9040:1997 §8, §9; ISO/IEC 9041-1:1997 §12.3.2.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<ParameterOffers_access>,
        /**
         * @summary `blockParams`.
         * @description
         * Offered block-definition-capability and `b-bound`. Requires
         * Blocks FU. ISO/IEC 9040:1997 §10.7, §18.2.1.
         * @public
         * @readonly
         */
        readonly blockParams: OPTIONAL<BlockParamOffer>,
        /**
         * @summary `fieldParams`.
         * @description
         * Offered field-definition-capability and field bounds.
         * Requires Fields FU. ISO/IEC 9040:1997 §10.8, §18.2.2.
         * @public
         * @readonly
         */
        readonly fieldParams: OPTIONAL<FieldParamOffer>,
        /**
         * @summary `rippleCapability`.
         * @description
         * Offered `ripple-capability` (`yes`(0)/`no`(1); default
         * `"no"`). Requires Ripple FU. ISO/IEC 9040:1997 §10.10,
         * §18.1.
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
    if (!_cached_encoder_for_ParameterOffers) { _cached_encoder_for_ParameterOffers = function (value: ParameterOffers): _Element {
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
