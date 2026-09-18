/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { DimensionParamIdent, _decode_DimensionParamIdent, _encode_DimensionParamIdent } from "../CDS/DimensionParamIdent.ta.mjs";
// export { DimensionParamIdent, _decode_DimensionParamIdent, _encode_DimensionParamIdent } from "../CDS/DimensionParamIdent.ta.mjs";
import { CompoundRepertoireIdent, _decode_CompoundRepertoireIdent, _encode_CompoundRepertoireIdent } from "../CDS/CompoundRepertoireIdent.ta.mjs";
// export { CompoundRepertoireIdent, _decode_CompoundRepertoireIdent, _encode_CompoundRepertoireIdent } from "../CDS/CompoundRepertoireIdent.ta.mjs";
import { CompoundEmphasisIdent, _decode_CompoundEmphasisIdent, _encode_CompoundEmphasisIdent } from "../CDS/CompoundEmphasisIdent.ta.mjs";
// export { CompoundEmphasisIdent, _decode_CompoundEmphasisIdent, _encode_CompoundEmphasisIdent } from "../CDS/CompoundEmphasisIdent.ta.mjs";
import { CompoundColourIdent, _decode_CompoundColourIdent, _encode_CompoundColourIdent } from "../CDS/CompoundColourIdent.ta.mjs";
// export { CompoundColourIdent, _decode_CompoundColourIdent, _encode_CompoundColourIdent } from "../CDS/CompoundColourIdent.ta.mjs";
import { BlockParamIdent, _decode_BlockParamIdent, _encode_BlockParamIdent } from "../CDS/BlockParamIdent.ta.mjs";
// export { BlockParamIdent, _decode_BlockParamIdent, _encode_BlockParamIdent } from "../CDS/BlockParamIdent.ta.mjs";
import { FieldParamIdent, _decode_FieldParamIdent, _encode_FieldParamIdent } from "../CDS/FieldParamIdent.ta.mjs";
// export { FieldParamIdent, _decode_FieldParamIdent, _encode_FieldParamIdent } from "../CDS/FieldParamIdent.ta.mjs";


/**
 * @summary ParameterIdents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterIdents ::= SEQUENCE {
 *     dimensions       [0]  IMPLICIT NULL OPTIONAL,
 *     xParam           [1]  IMPLICIT DimensionParamIdent OPTIONAL,
 *     yParam           [2]  IMPLICIT DimensionParamIdent OPTIONAL,
 *     zParam           [3]  IMPLICIT DimensionParamIdent OPTIONAL,
 *     erasure          [4]  IMPLICIT NULL OPTIONAL,
 *     repertoire       [5]  IMPLICIT CompoundRepertoireIdent OPTIONAL,
 *     emphasis         [6]  IMPLICIT CompoundEmphasisIdent OPTIONAL,
 *     foreground       [7]  IMPLICIT CompoundColourIdent OPTIONAL,
 *     background       [8]  IMPLICIT CompoundColourIdent OPTIONAL,
 *     access           [9]  IMPLICIT NULL OPTIONAL,
 *     blockParams      [10] IMPLICIT BlockParamIdent OPTIONAL,
 *     fieldParams      [11] IMPLICIT FieldParamIdent OPTIONAL,
 *     rippleCapability [12] IMPLICIT NULL OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterIdents {
    constructor (
        /**
         * @summary `dimensions`.
         * @public
         * @readonly
         */
        readonly dimensions: OPTIONAL<NULL>,
        /**
         * @summary `xParam`.
         * @public
         * @readonly
         */
        readonly xParam: OPTIONAL<DimensionParamIdent>,
        /**
         * @summary `yParam`.
         * @public
         * @readonly
         */
        readonly yParam: OPTIONAL<DimensionParamIdent>,
        /**
         * @summary `zParam`.
         * @public
         * @readonly
         */
        readonly zParam: OPTIONAL<DimensionParamIdent>,
        /**
         * @summary `erasure`.
         * @public
         * @readonly
         */
        readonly erasure: OPTIONAL<NULL>,
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<CompoundRepertoireIdent>,
        /**
         * @summary `emphasis`.
         * @public
         * @readonly
         */
        readonly emphasis: OPTIONAL<CompoundEmphasisIdent>,
        /**
         * @summary `foreground`.
         * @public
         * @readonly
         */
        readonly foreground: OPTIONAL<CompoundColourIdent>,
        /**
         * @summary `background`.
         * @public
         * @readonly
         */
        readonly background: OPTIONAL<CompoundColourIdent>,
        /**
         * @summary `access`.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<NULL>,
        /**
         * @summary `blockParams`.
         * @public
         * @readonly
         */
        readonly blockParams: OPTIONAL<BlockParamIdent>,
        /**
         * @summary `fieldParams`.
         * @public
         * @readonly
         */
        readonly fieldParams: OPTIONAL<FieldParamIdent>,
        /**
         * @summary `rippleCapability`.
         * @public
         * @readonly
         */
        readonly rippleCapability: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a ParameterIdents
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterIdents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterIdents`.
     * @returns {ParameterIdents}
     */
    public static _from_object (_o: { [_K in keyof (ParameterIdents)]: (ParameterIdents)[_K] }): ParameterIdents {
        return new ParameterIdents(_o.dimensions, _o.xParam, _o.yParam, _o.zParam, _o.erasure, _o.repertoire, _o.emphasis, _o.foreground, _o.background, _o.access, _o.blockParams, _o.fieldParams, _o.rippleCapability);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterIdents: $.ComponentSpec[] = [
    new $.ComponentSpec("dimensions", true, $.hasTag(_TagClass.context, 0)),
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
 * @summary The Trailing Root Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterIdents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterIdents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterIdents: $.ASN1Decoder<ParameterIdents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterIdents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterIdents (el: _Element): ParameterIdents {
    if (!_cached_decoder_for_ParameterIdents) { _cached_decoder_for_ParameterIdents = function (el: _Element): ParameterIdents {
    let dimensions: OPTIONAL<NULL>;
    let xParam: OPTIONAL<DimensionParamIdent>;
    let yParam: OPTIONAL<DimensionParamIdent>;
    let zParam: OPTIONAL<DimensionParamIdent>;
    let erasure: OPTIONAL<NULL>;
    let repertoire: OPTIONAL<CompoundRepertoireIdent>;
    let emphasis: OPTIONAL<CompoundEmphasisIdent>;
    let foreground: OPTIONAL<CompoundColourIdent>;
    let background: OPTIONAL<CompoundColourIdent>;
    let access: OPTIONAL<NULL>;
    let blockParams: OPTIONAL<BlockParamIdent>;
    let fieldParams: OPTIONAL<FieldParamIdent>;
    let rippleCapability: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "dimensions": (_el: _Element): void => { dimensions = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "xParam": (_el: _Element): void => { xParam = $._decode_implicit<DimensionParamIdent>(() => _decode_DimensionParamIdent)(_el); },
        "yParam": (_el: _Element): void => { yParam = $._decode_implicit<DimensionParamIdent>(() => _decode_DimensionParamIdent)(_el); },
        "zParam": (_el: _Element): void => { zParam = $._decode_implicit<DimensionParamIdent>(() => _decode_DimensionParamIdent)(_el); },
        "erasure": (_el: _Element): void => { erasure = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<CompoundRepertoireIdent>(() => _decode_CompoundRepertoireIdent)(_el); },
        "emphasis": (_el: _Element): void => { emphasis = $._decode_implicit<CompoundEmphasisIdent>(() => _decode_CompoundEmphasisIdent)(_el); },
        "foreground": (_el: _Element): void => { foreground = $._decode_implicit<CompoundColourIdent>(() => _decode_CompoundColourIdent)(_el); },
        "background": (_el: _Element): void => { background = $._decode_implicit<CompoundColourIdent>(() => _decode_CompoundColourIdent)(_el); },
        "access": (_el: _Element): void => { access = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "blockParams": (_el: _Element): void => { blockParams = $._decode_implicit<BlockParamIdent>(() => _decode_BlockParamIdent)(_el); },
        "fieldParams": (_el: _Element): void => { fieldParams = $._decode_implicit<FieldParamIdent>(() => _decode_FieldParamIdent)(_el); },
        "rippleCapability": (_el: _Element): void => { rippleCapability = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterIdents,
        _extension_additions_list_spec_for_ParameterIdents,
        _root_component_type_list_2_spec_for_ParameterIdents,
        undefined,
    );
    return new ParameterIdents(
        dimensions,
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
    return _cached_decoder_for_ParameterIdents(el);
}

let _cached_encoder_for_ParameterIdents: $.ASN1Encoder<ParameterIdents> | null = null;

/**
 * @summary Encodes a(n) ParameterIdents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterIdents, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterIdents (value: ParameterIdents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterIdents) { _cached_encoder_for_ParameterIdents = function (value: ParameterIdents): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dimensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.dimensions, $.BER)),
            /* IF_ABSENT  */ ((value.xParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DimensionParamIdent, $.BER)(value.xParam, $.BER)),
            /* IF_ABSENT  */ ((value.yParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DimensionParamIdent, $.BER)(value.yParam, $.BER)),
            /* IF_ABSENT  */ ((value.zParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DimensionParamIdent, $.BER)(value.zParam, $.BER)),
            /* IF_ABSENT  */ ((value.erasure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.erasure, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CompoundRepertoireIdent, $.BER)(value.repertoire, $.BER)),
            /* IF_ABSENT  */ ((value.emphasis === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CompoundEmphasisIdent, $.BER)(value.emphasis, $.BER)),
            /* IF_ABSENT  */ ((value.foreground === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CompoundColourIdent, $.BER)(value.foreground, $.BER)),
            /* IF_ABSENT  */ ((value.background === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CompoundColourIdent, $.BER)(value.background, $.BER)),
            /* IF_ABSENT  */ ((value.access === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.access, $.BER)),
            /* IF_ABSENT  */ ((value.blockParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_BlockParamIdent, $.BER)(value.blockParams, $.BER)),
            /* IF_ABSENT  */ ((value.fieldParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_FieldParamIdent, $.BER)(value.fieldParams, $.BER)),
            /* IF_ABSENT  */ ((value.rippleCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.rippleCapability, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterIdents(value, elGetter);
}


/* eslint-enable */
