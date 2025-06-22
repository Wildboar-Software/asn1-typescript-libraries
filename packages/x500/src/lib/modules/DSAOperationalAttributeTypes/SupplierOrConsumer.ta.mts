/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
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
} from "../DistributedOperations/AccessPoint.ta.mjs";

/**
 * @summary SupplierOrConsumer
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierOrConsumer ::= SET {
 *   COMPONENTS OF              AccessPoint, -- supplier or consumer
 *   agreementID           [3]  OperationalBindingID,
 *   ... }
 * ```
 *
 * @class
 */
export class SupplierOrConsumer extends AccessPoint {
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
        override readonly protocolInformation: OPTIONAL<
            ProtocolInformation[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `agreementID`.
         * @public
         * @readonly
         */
        readonly agreementID: OperationalBindingID,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        override readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        super(ae_title, address, protocolInformation);
    }

    /**
     * @summary Restructures an object into a SupplierOrConsumer
     * @description
     *
     * This takes an `object` and converts it to a `SupplierOrConsumer`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupplierOrConsumer`.
     * @returns {SupplierOrConsumer}
     */
    public static override _from_object(
        _o: { [_K in keyof SupplierOrConsumer]: SupplierOrConsumer[_K] }
    ): SupplierOrConsumer {
        return new SupplierOrConsumer(
            _o.ae_title,
            _o.address,
            _o.protocolInformation,
            _o.agreementID,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SupplierOrConsumer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SupplierOrConsumer: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_AccessPoint,
    new $.ComponentSpec(
        "agreementID",
        false,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SupplierOrConsumer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SupplierOrConsumer: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_AccessPoint,
];

/**
 * @summary The Extension Addition Component Types of SupplierOrConsumer
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SupplierOrConsumer: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_AccessPoint,
];

let _cached_decoder_for_SupplierOrConsumer: $.ASN1Decoder<SupplierOrConsumer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupplierOrConsumer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupplierOrConsumer} The decoded data structure.
 */
export function _decode_SupplierOrConsumer(el: _Element) {
    if (!_cached_decoder_for_SupplierOrConsumer) {
        _cached_decoder_for_SupplierOrConsumer = function (
            el: _Element
        ): SupplierOrConsumer {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let address!: PresentationAddress;
            let protocolInformation: OPTIONAL<ProtocolInformation[]>;
            let agreementID!: OperationalBindingID;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
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
                agreementID: (_el: _Element): void => {
                    agreementID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SupplierOrConsumer,
                _extension_additions_list_spec_for_SupplierOrConsumer,
                _root_component_type_list_2_spec_for_SupplierOrConsumer,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SupplierOrConsumer(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                address,
                protocolInformation,
                agreementID,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_SupplierOrConsumer(el);
}

let _cached_encoder_for_SupplierOrConsumer: $.ASN1Encoder<SupplierOrConsumer> | null = null;

/**
 * @summary Encodes a(n) SupplierOrConsumer into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupplierOrConsumer, encoded as an ASN.1 Element.
 */
export function _encode_SupplierOrConsumer(
    value: SupplierOrConsumer,
    elGetter: $.ASN1Encoder<SupplierOrConsumer>
) {
    if (!_cached_encoder_for_SupplierOrConsumer) {
        _cached_encoder_for_SupplierOrConsumer = function (
            value: SupplierOrConsumer        ): _Element {
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
                                () => _encode_OperationalBindingID,
                                $.DER
                            )(value.agreementID, $.DER),
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
    return _cached_encoder_for_SupplierOrConsumer(value, elGetter);
}


/* eslint-enable */
