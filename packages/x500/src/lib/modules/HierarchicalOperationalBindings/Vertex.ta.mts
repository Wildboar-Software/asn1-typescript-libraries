/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MasterAndShadowAccessPoints,
    _decode_MasterAndShadowAccessPoints,
    _encode_MasterAndShadowAccessPoints,
} from "../DistributedOperations/MasterAndShadowAccessPoints.ta.mjs";
import {
    SubentryInfo,
    _decode_SubentryInfo,
    _encode_SubentryInfo,
} from "../HierarchicalOperationalBindings/SubentryInfo.ta.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import {
    RelativeDistinguishedName,
    _decode_RelativeDistinguishedName,
    _encode_RelativeDistinguishedName,
} from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
/**
 * @summary Vertex
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Vertex ::= SEQUENCE {
 *   rdn           [0]  RelativeDistinguishedName,
 *   admPointInfo  [1]  SET SIZE (1..MAX) OF Attribute{{SupportedAttributes}} OPTIONAL,
 *   subentries    [2]  SET SIZE (1..MAX) OF SubentryInfo OPTIONAL,
 *   accessPoints  [3]  MasterAndShadowAccessPoints OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class Vertex {
    constructor(
        /**
         * @summary `rdn`.
         * @public
         * @readonly
         */
        readonly rdn: RelativeDistinguishedName,
        /**
         * @summary `admPointInfo`.
         * @public
         * @readonly
         */
        readonly admPointInfo: OPTIONAL<Attribute[]>,
        /**
         * @summary `subentries`.
         * @public
         * @readonly
         */
        readonly subentries: OPTIONAL<SubentryInfo[]>,
        /**
         * @summary `accessPoints`.
         * @public
         * @readonly
         */
        readonly accessPoints: OPTIONAL<MasterAndShadowAccessPoints>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Vertex
     * @description
     *
     * This takes an `object` and converts it to a `Vertex`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Vertex`.
     * @returns {Vertex}
     */
    public static _from_object(
        _o: { [_K in keyof Vertex]: Vertex[_K] }
    ): Vertex {
        return new Vertex(
            _o.rdn,
            _o.admPointInfo,
            _o.subentries,
            _o.accessPoints,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of Vertex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Vertex: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "rdn",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "admPointInfo",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "subentries",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "accessPoints",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of Vertex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Vertex: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Vertex
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Vertex: $.ComponentSpec[] = [];

let _cached_decoder_for_Vertex: $.ASN1Decoder<Vertex> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Vertex
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Vertex} The decoded data structure.
 */
export function _decode_Vertex(el: _Element): Vertex {
    if (!_cached_decoder_for_Vertex) {
        _cached_decoder_for_Vertex = function (el: _Element): Vertex {
            let rdn!: RelativeDistinguishedName;
            let admPointInfo: OPTIONAL<Attribute[]>;
            let subentries: OPTIONAL<SubentryInfo[]>;
            let accessPoints: OPTIONAL<MasterAndShadowAccessPoints>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                rdn: (_el: _Element): void => {
                    rdn = $._decode_explicit<RelativeDistinguishedName>(
                        () => _decode_RelativeDistinguishedName
                    )(_el);
                },
                admPointInfo: (_el: _Element): void => {
                    admPointInfo = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSetOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
                subentries: (_el: _Element): void => {
                    subentries = $._decode_explicit<SubentryInfo[]>(() =>
                        $._decodeSetOf<SubentryInfo>(() => _decode_SubentryInfo)
                    )(_el);
                },
                accessPoints: (_el: _Element): void => {
                    accessPoints = $._decode_explicit<MasterAndShadowAccessPoints>(
                        () => _decode_MasterAndShadowAccessPoints
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Vertex,
                _extension_additions_list_spec_for_Vertex,
                _root_component_type_list_2_spec_for_Vertex,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new Vertex(
                rdn,
                admPointInfo,
                subentries,
                accessPoints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_Vertex(el);
}

let _cached_encoder_for_Vertex: $.ASN1Encoder<Vertex> | null = null;

/**
 * @summary Encodes a(n) Vertex into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Vertex, encoded as an ASN.1 Element.
 */
export function _encode_Vertex(value: Vertex, elGetter: $.ASN1Encoder<Vertex>): _Element {
    if (!_cached_encoder_for_Vertex) {
        _cached_encoder_for_Vertex = function (
            value: Vertex        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_RelativeDistinguishedName,
                                $.DER
                            )(value.rdn, $.DER),
                            /* IF_ABSENT  */ value.admPointInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.admPointInfo, $.DER),
                            /* IF_ABSENT  */ value.subentries === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<SubentryInfo>(
                                              () => _encode_SubentryInfo,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.subentries, $.DER),
                            /* IF_ABSENT  */ value.accessPoints === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_MasterAndShadowAccessPoints,
                                      $.DER
                                  )(value.accessPoints, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Vertex(value, elGetter);
}


/* eslint-enable */
