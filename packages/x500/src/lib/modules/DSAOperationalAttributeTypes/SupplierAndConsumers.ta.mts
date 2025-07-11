/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta.mjs";
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
    _root_component_type_list_1_spec_for_AccessPoint,
    _root_component_type_list_2_spec_for_AccessPoint,
    _extension_additions_list_spec_for_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta.mjs";

/**
 * @summary SupplierAndConsumers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierAndConsumers ::= SET {
 *   COMPONENTS OF         AccessPoint, -- supplier
 *   consumers        [3]  SET OF AccessPoint,
 *   ... }
 * ```
 *
 */
export class SupplierAndConsumers implements AccessPoint {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name /* REPLICATED_COMPONENT */,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PresentationAddress /* REPLICATED_COMPONENT */,
        /**
         * @summary `protocolInformation`.
         * @public
         * @readonly
         */
        readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `consumers`.
         * @public
         * @readonly
         */
        readonly consumers: AccessPoint[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SupplierAndConsumers
     * @description
     *
     * This takes an `object` and converts it to a `SupplierAndConsumers`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplierAndConsumers`.
     * @returns {SupplierAndConsumers}
     */
    public static _from_object(
        _o: { [_K in keyof SupplierAndConsumers]: SupplierAndConsumers[_K] }
    ): SupplierAndConsumers {
        return new SupplierAndConsumers(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.consumers,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SupplierAndConsumers
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupplierAndConsumers: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AccessPoint,
    new $.ComponentSpec(
        "consumers",
        false,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SupplierAndConsumers
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupplierAndConsumers: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_AccessPoint,
];

/**
 * @summary The Extension Addition Component Types of SupplierAndConsumers
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupplierAndConsumers: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_AccessPoint,
];

let _cached_decoder_for_SupplierAndConsumers: $.ASN1Decoder<SupplierAndConsumers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplierAndConsumers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierAndConsumers} The decoded data structure.
 */
export function _decode_SupplierAndConsumers(el: _Element): SupplierAndConsumers {
    if (!_cached_decoder_for_SupplierAndConsumers) {
        _cached_decoder_for_SupplierAndConsumers = function (
            el: _Element
        ): SupplierAndConsumers {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let consumers!: AccessPoint[];
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
                consumers: (_el: _Element): void => {
                    consumers = $._decode_explicit<AccessPoint[]>(() =>
                        $._decodeSetOf<AccessPoint>(() => _decode_AccessPoint)
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupplierAndConsumers,
                _extension_additions_list_spec_for_SupplierAndConsumers,
                _root_component_type_list_2_spec_for_SupplierAndConsumers,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupplierAndConsumers(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                consumers,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupplierAndConsumers(el);
}

let _cached_encoder_for_SupplierAndConsumers: $.ASN1Encoder<SupplierAndConsumers> | null = null;

/**
 * @summary Encodes a(n) SupplierAndConsumers into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierAndConsumers, encoded as an ASN.1 Element.
 */
export function _encode_SupplierAndConsumers(
    value: SupplierAndConsumers,
    elGetter: $.ASN1Encoder<SupplierAndConsumers>
): _Element {
    if (!_cached_encoder_for_SupplierAndConsumers) {
        _cached_encoder_for_SupplierAndConsumers = function (
            value: SupplierAndConsumers        ): _Element {
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
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                3,
                                () =>
                                    $._encodeSetOf<AccessPoint>(
                                        () => _encode_AccessPoint,
                                        $.DER
                                    ),
                                $.DER
                            )(value.consumers, $.DER),
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
    return _cached_encoder_for_SupplierAndConsumers(value, elGetter);
}


/* eslint-enable */
