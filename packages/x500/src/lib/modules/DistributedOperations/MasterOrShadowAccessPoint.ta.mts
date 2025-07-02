/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MasterOrShadowAccessPoint_category,
    MasterOrShadowAccessPoint_category_master /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_MasterOrShadowAccessPoint_category,
    _encode_MasterOrShadowAccessPoint_category,
    _enum_for_MasterOrShadowAccessPoint_category,
} from "../DistributedOperations/MasterOrShadowAccessPoint-category.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
} from "../SelectedAttributeTypes/PresentationAddress.ta.mjs";
import {
    ProtocolInformation,
    _decode_ProtocolInformation,
    _encode_ProtocolInformation,
} from "../SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import {
    AccessPoint,
    _root_component_type_list_1_spec_for_AccessPoint,
    _root_component_type_list_2_spec_for_AccessPoint,
    _extension_additions_list_spec_for_AccessPoint,
} from "./AccessPoint.ta.mjs";

/**
 * @summary MasterOrShadowAccessPoint
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MasterOrShadowAccessPoint ::= SET {
 *   COMPONENTS OF          AccessPoint,
 *   category          [3]  ENUMERATED {
 *     master            (0),
 *     shadow            (1),
 *     writeableCopy     (2),
 *     ... } DEFAULT master,
 *   chainingRequired  [5]  BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 */
export class MasterOrShadowAccessPoint extends AccessPoint {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        override readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        override readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        override readonly protocolInformation?: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category?: OPTIONAL<MasterOrShadowAccessPoint_category>,
        /**
         * @summary `chainingRequired`.
         * @public
         * @readonly
         */
        readonly chainingRequired?: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        override readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        super(
            ae_title,
            address,
            protocolInformation,
        );
    }

    /**
     * @summary Restructures an object into a MasterOrShadowAccessPoint
     * @description
     *
     * This takes an `object` and converts it to a `MasterOrShadowAccessPoint`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MasterOrShadowAccessPoint`.
     * @returns {MasterOrShadowAccessPoint}
     */
    public static override _from_object(
        _o: Partial<
            {
                [_K in keyof MasterOrShadowAccessPoint]: MasterOrShadowAccessPoint[_K];
            }
        >
    ): MasterOrShadowAccessPoint {
        return new MasterOrShadowAccessPoint(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.category,
            _o.chainingRequired,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `category`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_category(): MasterOrShadowAccessPoint_category {
        return MasterOrShadowAccessPoint_category_master;
    }
    /**
     * @summary Getter that returns the default value for `chainingRequired`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_chainingRequired(): BOOLEAN {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `category`
     * @public
     * @static
     */

    public static _enum_for_category = _enum_for_MasterOrShadowAccessPoint_category;
}

/**
 * @summary The Leading Root Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AccessPoint,
    new $.ComponentSpec(
        "category",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "chainingRequired",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
];

/**
 * @summary The Trailing Root Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MasterOrShadowAccessPoint
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MasterOrShadowAccessPoint: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_AccessPoint,
];

let _cached_decoder_for_MasterOrShadowAccessPoint: $.ASN1Decoder<MasterOrShadowAccessPoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MasterOrShadowAccessPoint
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MasterOrShadowAccessPoint} The decoded data structure.
 */
export function _decode_MasterOrShadowAccessPoint(el: _Element): MasterOrShadowAccessPoint {
    if (!_cached_decoder_for_MasterOrShadowAccessPoint) {
        _cached_decoder_for_MasterOrShadowAccessPoint = function (
            el: _Element
        ): MasterOrShadowAccessPoint {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let category: OPTIONAL<MasterOrShadowAccessPoint_category> =
                MasterOrShadowAccessPoint._default_value_for_category;
            let chainingRequired: OPTIONAL<BOOLEAN> =
                MasterOrShadowAccessPoint._default_value_for_chainingRequired;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                address: (_el: _Element): void => {
                    address = $._decode_explicit<PresentationAddress>(
                        () => _decode_PresentationAddress
                    )(_el);
                },
                protocolInformation: (_el: _Element): void => {
                    protocolInformation = $._decode_explicit<
                        ProtocolInformation[]
                    >(() =>
                        $._decodeSetOf<ProtocolInformation>(
                            () => _decode_ProtocolInformation
                        )
                    )(_el);
                },
                category: (_el: _Element): void => {
                    category = $._decode_explicit<MasterOrShadowAccessPoint_category>(
                        () => _decode_MasterOrShadowAccessPoint_category
                    )(_el);
                },
                chainingRequired: (_el: _Element): void => {
                    chainingRequired = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MasterOrShadowAccessPoint,
                _extension_additions_list_spec_for_MasterOrShadowAccessPoint,
                _root_component_type_list_2_spec_for_MasterOrShadowAccessPoint,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new MasterOrShadowAccessPoint(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                category,
                chainingRequired,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_MasterOrShadowAccessPoint(el);
}

let _cached_encoder_for_MasterOrShadowAccessPoint: $.ASN1Encoder<MasterOrShadowAccessPoint> | null = null;

/**
 * @summary Encodes a(n) MasterOrShadowAccessPoint into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MasterOrShadowAccessPoint, encoded as an ASN.1 Element.
 */
export function _encode_MasterOrShadowAccessPoint(
    value: MasterOrShadowAccessPoint,
    elGetter: $.ASN1Encoder<MasterOrShadowAccessPoint>
): _Element {
    if (!_cached_encoder_for_MasterOrShadowAccessPoint) {
        _cached_encoder_for_MasterOrShadowAccessPoint = function (
            value: MasterOrShadowAccessPoint        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_Name,
                                $.DER
                            )(value.ae_title, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                1,
                                () => _encode_PresentationAddress,
                                $.DER
                            )(value.address, $.DER),
                            /* IF_ABSENT  */ value.protocolInformation ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<ProtocolInformation>(
                                              () => _encode_ProtocolInformation,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.protocolInformation, $.DER),
                            /* IF_DEFAULT */ value.category === undefined ||
                            $.deepEq(
                                value.category,
                                MasterOrShadowAccessPoint._default_value_for_category
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          _encode_MasterOrShadowAccessPoint_category,
                                      $.DER
                                  )(value.category, $.DER),
                            /* IF_DEFAULT */ value.chainingRequired ===
                                undefined ||
                            $.deepEq(
                                value.chainingRequired,
                                MasterOrShadowAccessPoint._default_value_for_chainingRequired
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.chainingRequired, $.DER),
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
    return _cached_encoder_for_MasterOrShadowAccessPoint(value, elGetter);
}


/* eslint-enable */
