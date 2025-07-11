/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supplierOrConsumerInformationMatch-AssertionType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class supplierOrConsumerInformationMatch_AssertionType {
    constructor(
        /**
         * @summary `ae_title`.
         * @public
         * @readonly
         */
        readonly ae_title: Name,
        /**
         * @summary `agreement_identifier`.
         * @public
         * @readonly
         */
        readonly agreement_identifier: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a supplierOrConsumerInformationMatch_AssertionType
     * @description
     *
     * This takes an `object` and converts it to a `supplierOrConsumerInformationMatch_AssertionType`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `supplierOrConsumerInformationMatch_AssertionType`.
     * @returns {supplierOrConsumerInformationMatch_AssertionType}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof supplierOrConsumerInformationMatch_AssertionType]: supplierOrConsumerInformationMatch_AssertionType[_K];
            }
        >
    ): supplierOrConsumerInformationMatch_AssertionType {
        return new supplierOrConsumerInformationMatch_AssertionType(
            _o.ae_title,
            _o.agreement_identifier
        );
    }
}

/**
 * @summary The Leading Root Component Types of supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_supplierOrConsumerInformationMatch_AssertionType: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "ae-title",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "agreement-identifier",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_supplierOrConsumerInformationMatch_AssertionType: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of supplierOrConsumerInformationMatch_AssertionType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_supplierOrConsumerInformationMatch_AssertionType: $.ComponentSpec[] = [];

let _cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType: $.ASN1Decoder<supplierOrConsumerInformationMatch_AssertionType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) supplierOrConsumerInformationMatch_AssertionType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {supplierOrConsumerInformationMatch_AssertionType} The decoded data structure.
 */
export function _decode_supplierOrConsumerInformationMatch_AssertionType(
    el: _Element
): supplierOrConsumerInformationMatch_AssertionType {
    if (!_cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType) {
        _cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType = function (
            el: _Element
        ): supplierOrConsumerInformationMatch_AssertionType {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let ae_title!: Name;
            let agreement_identifier!: INTEGER;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                "ae-title": (_el: _Element): void => {
                    ae_title = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                "agreement-identifier": (_el: _Element): void => {
                    agreement_identifier = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_supplierOrConsumerInformationMatch_AssertionType,
                _extension_additions_list_spec_for_supplierOrConsumerInformationMatch_AssertionType,
                _root_component_type_list_2_spec_for_supplierOrConsumerInformationMatch_AssertionType,
                undefined
            );
            return new supplierOrConsumerInformationMatch_AssertionType(
                /* SET_CONSTRUCTOR_CALL */ ae_title,
                agreement_identifier
            );
        };
    }
    return _cached_decoder_for_supplierOrConsumerInformationMatch_AssertionType(
        el
    );
}

let _cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType: $.ASN1Encoder<supplierOrConsumerInformationMatch_AssertionType> | null = null;

/**
 * @summary Encodes a(n) supplierOrConsumerInformationMatch_AssertionType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The supplierOrConsumerInformationMatch_AssertionType, encoded as an ASN.1 Element.
 */
export function _encode_supplierOrConsumerInformationMatch_AssertionType(
    value: supplierOrConsumerInformationMatch_AssertionType,
    elGetter: $.ASN1Encoder<supplierOrConsumerInformationMatch_AssertionType>
): _Element {
    if (!_cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType) {
        _cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType = function (
            value: supplierOrConsumerInformationMatch_AssertionType        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Name,
                            $.DER
                        )(value.ae_title, $.DER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            2,
                            () => $._encodeInteger,
                            $.DER
                        )(value.agreement_identifier, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_supplierOrConsumerInformationMatch_AssertionType(
        value,
        elGetter
    );
}


/* eslint-enable */
