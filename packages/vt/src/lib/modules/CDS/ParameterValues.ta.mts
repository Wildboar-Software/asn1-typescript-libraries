/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
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
import { DimensionParamValues, _decode_DimensionParamValues, _encode_DimensionParamValues } from "../CDS/DimensionParamValues.ta.mjs";
import { CompoundRepertoireValue, _decode_CompoundRepertoireValue, _encode_CompoundRepertoireValue } from "../CDS/CompoundRepertoireValue.ta.mjs";
import { CompoundEmphasisValue, _decode_CompoundEmphasisValue, _encode_CompoundEmphasisValue } from "../CDS/CompoundEmphasisValue.ta.mjs";
import { CompoundColourValue, _decode_CompoundColourValue, _encode_CompoundColourValue } from "../CDS/CompoundColourValue.ta.mjs";
import { ParameterValues_access, _decode_ParameterValues_access, _encode_ParameterValues_access } from "../CDS/ParameterValues-access.ta.mjs";
import { BlockParamValues, _decode_BlockParamValues, _encode_BlockParamValues } from "../CDS/BlockParamValues.ta.mjs";
import { FieldParamValues, _decode_FieldParamValues, _encode_FieldParamValues } from "../CDS/FieldParamValues.ta.mjs";


/**
 * @summary ParameterValues
 * @description
 *
 * Selected values for one display object's VTE-parameters. Each
 * present component is a single accepted value consistent with the
 * offer. ISO/IEC 9041-1:1997 §12.3.3; ISO/IEC 9040:1997 §18.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues ::= SEQUENCE {
 *     dimension        [0]  IMPLICIT INTEGER OPTIONAL,
 *     xParam           [1]  IMPLICIT DimensionParamValues OPTIONAL,
 *     yParam           [2]  IMPLICIT DimensionParamValues OPTIONAL,
 *     zParam           [3]  IMPLICIT DimensionParamValues OPTIONAL,
 *     erasure          [4]  IMPLICIT BOOLEAN OPTIONAL,
 *     repertoire       [5]  IMPLICIT CompoundRepertoireValue OPTIONAL,
 *     emphasis         [6]  IMPLICIT CompoundEmphasisValue OPTIONAL,
 *     foreground       [7]  IMPLICIT CompoundColourValue OPTIONAL,
 *     background       [8]  IMPLICIT CompoundColourValue OPTIONAL,
 *     access           [9]  IMPLICIT INTEGER { wavar (0), waci (1), waca (2) } OPTIONAL,
 *     blockParams      [10] IMPLICIT BlockParamValues OPTIONAL,
 *     fieldParams      [11] IMPLICIT FieldParamValues OPTIONAL,
 *     rippleCapability [12] IMPLICIT BOOLEAN OPTIONAL -- true = "yes", false or absent = "no"
 * }
 * ```
 * 
 * @class
 */
export
class ParameterValues {
    constructor (
        /**
         * @summary `dimension`.
         * @description
         * Selected `dimensions`: 0 = one, 1 = two, 2 = three. Default
         * `"two"`. ISO/IEC 9040:1997 §18.1.
         * @public
         * @readonly
         */
        readonly dimension: OPTIONAL<INTEGER>,
        /**
         * @summary `xParam`.
         * @description
         * Selected X addressing parameters. ISO/IEC 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly xParam: OPTIONAL<DimensionParamValues>,
        /**
         * @summary `yParam`.
         * @description
         * Selected Y addressing parameters. Present only if
         * `dimensions` ≥ 2. ISO/IEC 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly yParam: OPTIONAL<DimensionParamValues>,
        /**
         * @summary `zParam`.
         * @description
         * Selected Z addressing parameters. Present only if
         * `dimensions` = 3. ISO/IEC 9040:1997 §18.2.3.
         * @public
         * @readonly
         */
        readonly zParam: OPTIONAL<DimensionParamValues>,
        /**
         * @summary `erasure`.
         * @description
         * Selected `erasure-capability`. `true` = `"yes"`; `false` or
         * absent = `"no"` (default). ISO/IEC 9040:1997 §18.1,
         * §19.4.1.4; ISO/IEC 9041-1:1997 §12.3.3.
         * @public
         * @readonly
         */
        readonly erasure: OPTIONAL<BOOLEAN>,
        /**
         * @summary `repertoire`.
         * @description
         * Selected repertoire-capability and assignment list. INTEGER
         * attribute values in DO updates are 1-based indexes into this
         * list. ISO/IEC 9040:1997 §18.2.4; ISO/IEC 9041-1:1997 §12.1.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<CompoundRepertoireValue>,
        /**
         * @summary `emphasis`.
         * @description
         * Selected DO-emphasis assignment list. ISO/IEC 9040:1997
         * §18.2.6, B.17.
         * @public
         * @readonly
         */
        readonly emphasis: OPTIONAL<CompoundEmphasisValue>,
        /**
         * @summary `foreground`.
         * @description
         * Selected foreground-colour capability and assignment list.
         * ISO/IEC 9040:1997 §18.2.5.
         * @public
         * @readonly
         */
        readonly foreground: OPTIONAL<CompoundColourValue>,
        /**
         * @summary `background`.
         * @description
         * Selected background-colour capability and assignment list.
         * ISO/IEC 9040:1997 §18.2.5.
         * @public
         * @readonly
         */
        readonly background: OPTIONAL<CompoundColourValue>,
        /**
         * @summary `access`.
         * @description
         * Selected DO-access: `wavar`(0), `waci`(1), or `waca`(2)
         * only. S-mode single DO is always WAVAR; A-mode uses WACI
         * and WACA (WAVAR does not exist). ISO/IEC 9040:1997 §8, §9.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<ParameterValues_access>,
        /**
         * @summary `blockParams`.
         * @description
         * Selected block-definition-capability and `b-bound`.
         * ISO/IEC 9040:1997 §18.2.1.
         * @public
         * @readonly
         */
        readonly blockParams: OPTIONAL<BlockParamValues>,
        /**
         * @summary `fieldParams`.
         * @description
         * Selected field-definition-capability and field bounds.
         * ISO/IEC 9040:1997 §18.2.2.
         * @public
         * @readonly
         */
        readonly fieldParams: OPTIONAL<FieldParamValues>,
        /**
         * @summary `rippleCapability`.
         * @description
         * Selected `ripple-capability`. `true` = `"yes"`; `false` or
         * absent = `"no"` (default). ISO/IEC 9040:1997 §10.10, §18.1;
         * ISO/IEC 9041-1:1997 §12.3.3.
         * @public
         * @readonly
         */
        readonly rippleCapability: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a ParameterValues
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterValues`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterValues`.
     * @returns {ParameterValues}
     */
    public static _from_object (_o: { [_K in keyof (ParameterValues)]: (ParameterValues)[_K] }): ParameterValues {
        return new ParameterValues(_o.dimension, _o.xParam, _o.yParam, _o.zParam, _o.erasure, _o.repertoire, _o.emphasis, _o.foreground, _o.background, _o.access, _o.blockParams, _o.fieldParams, _o.rippleCapability);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterValues: $.ComponentSpec[] = [
    new $.ComponentSpec("dimension", true, $.hasTag(_TagClass.context, 0)),
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
 * @summary The Trailing Root Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterValues: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterValues: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterValues: $.ASN1Decoder<ParameterValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues (el: _Element): ParameterValues {
    if (!_cached_decoder_for_ParameterValues) { _cached_decoder_for_ParameterValues = function (el: _Element): ParameterValues {
    let dimension: OPTIONAL<INTEGER>;
    let xParam: OPTIONAL<DimensionParamValues>;
    let yParam: OPTIONAL<DimensionParamValues>;
    let zParam: OPTIONAL<DimensionParamValues>;
    let erasure: OPTIONAL<BOOLEAN>;
    let repertoire: OPTIONAL<CompoundRepertoireValue>;
    let emphasis: OPTIONAL<CompoundEmphasisValue>;
    let foreground: OPTIONAL<CompoundColourValue>;
    let background: OPTIONAL<CompoundColourValue>;
    let access: OPTIONAL<ParameterValues_access>;
    let blockParams: OPTIONAL<BlockParamValues>;
    let fieldParams: OPTIONAL<FieldParamValues>;
    let rippleCapability: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "dimension": (_el: _Element): void => { dimension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "xParam": (_el: _Element): void => { xParam = $._decode_implicit<DimensionParamValues>(() => _decode_DimensionParamValues)(_el); },
        "yParam": (_el: _Element): void => { yParam = $._decode_implicit<DimensionParamValues>(() => _decode_DimensionParamValues)(_el); },
        "zParam": (_el: _Element): void => { zParam = $._decode_implicit<DimensionParamValues>(() => _decode_DimensionParamValues)(_el); },
        "erasure": (_el: _Element): void => { erasure = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<CompoundRepertoireValue>(() => _decode_CompoundRepertoireValue)(_el); },
        "emphasis": (_el: _Element): void => { emphasis = $._decode_implicit<CompoundEmphasisValue>(() => _decode_CompoundEmphasisValue)(_el); },
        "foreground": (_el: _Element): void => { foreground = $._decode_implicit<CompoundColourValue>(() => _decode_CompoundColourValue)(_el); },
        "background": (_el: _Element): void => { background = $._decode_implicit<CompoundColourValue>(() => _decode_CompoundColourValue)(_el); },
        "access": (_el: _Element): void => { access = $._decode_implicit<ParameterValues_access>(() => _decode_ParameterValues_access)(_el); },
        "blockParams": (_el: _Element): void => { blockParams = $._decode_implicit<BlockParamValues>(() => _decode_BlockParamValues)(_el); },
        "fieldParams": (_el: _Element): void => { fieldParams = $._decode_implicit<FieldParamValues>(() => _decode_FieldParamValues)(_el); },
        "rippleCapability": (_el: _Element): void => { rippleCapability = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterValues,
        _extension_additions_list_spec_for_ParameterValues,
        _root_component_type_list_2_spec_for_ParameterValues,
        undefined,
    );
    return new ParameterValues(
        dimension,
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
    return _cached_decoder_for_ParameterValues(el);
}

let _cached_encoder_for_ParameterValues: $.ASN1Encoder<ParameterValues> | null = null;

/**
 * @summary Encodes a(n) ParameterValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues (value: ParameterValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues) { _cached_encoder_for_ParameterValues = function (value: ParameterValues): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.dimension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.dimension, $.BER)),
            /* IF_ABSENT  */ ((value.xParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DimensionParamValues, $.BER)(value.xParam, $.BER)),
            /* IF_ABSENT  */ ((value.yParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_DimensionParamValues, $.BER)(value.yParam, $.BER)),
            /* IF_ABSENT  */ ((value.zParam === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_DimensionParamValues, $.BER)(value.zParam, $.BER)),
            /* IF_ABSENT  */ ((value.erasure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.erasure, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CompoundRepertoireValue, $.BER)(value.repertoire, $.BER)),
            /* IF_ABSENT  */ ((value.emphasis === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CompoundEmphasisValue, $.BER)(value.emphasis, $.BER)),
            /* IF_ABSENT  */ ((value.foreground === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CompoundColourValue, $.BER)(value.foreground, $.BER)),
            /* IF_ABSENT  */ ((value.background === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CompoundColourValue, $.BER)(value.background, $.BER)),
            /* IF_ABSENT  */ ((value.access === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ParameterValues_access, $.BER)(value.access, $.BER)),
            /* IF_ABSENT  */ ((value.blockParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_BlockParamValues, $.BER)(value.blockParams, $.BER)),
            /* IF_ABSENT  */ ((value.fieldParams === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_FieldParamValues, $.BER)(value.fieldParams, $.BER)),
            /* IF_ABSENT  */ ((value.rippleCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.rippleCapability, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterValues(value, elGetter);
}


/* eslint-enable */
