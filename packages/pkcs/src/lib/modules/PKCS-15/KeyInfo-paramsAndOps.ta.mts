/* eslint-disable */
import { ASN1Element as _Element, OPTIONAL } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary KeyInfo_paramsAndOps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyInfo-paramsAndOps ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class KeyInfo_paramsAndOps<ParameterType, OperationsType> {
    constructor(
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: ParameterType,
        /**
         * @summary `supportedOperations`.
         * @public
         * @readonly
         */
        readonly supportedOperations: OPTIONAL<OperationsType>
    ) {}

    /**
     * @summary Restructures an object into a KeyInfo_paramsAndOps
     * @description
     *
     * This takes an `object` and converts it to a `KeyInfo_paramsAndOps`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyInfo_paramsAndOps`.
     * @returns {KeyInfo_paramsAndOps}
     */
    public static _from_object(
        _o: {
            [_K in keyof KeyInfo_paramsAndOps<any, any>]: KeyInfo_paramsAndOps<
                any,
                any
            >[_K];
        }
    ): KeyInfo_paramsAndOps<any, any> {
        return new KeyInfo_paramsAndOps(_o.parameters, _o.supportedOperations);
    }
}


/**
 * @summary The Leading Root Component Types of KeyInfo_paramsAndOps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [
    new $.ComponentSpec("parameters", false, $.hasAnyTag),
    new $.ComponentSpec(
        "supportedOperations",
        true,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of KeyInfo_paramsAndOps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of KeyInfo_paramsAndOps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyInfo_paramsAndOps: $.ComponentSpec[] = [];


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) KeyInfo_paramsAndOps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_KeyInfo_paramsAndOps<
    ParameterType,
    OperationsType
>(
    _decode_ParameterType: $.ASN1Decoder<ParameterType>,
    _decode_OperationsType: $.ASN1Decoder<OperationsType>
): $.ASN1Decoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>> {
    return function (
        el: _Element
    ): KeyInfo_paramsAndOps<ParameterType, OperationsType> {
        let parameters!: ParameterType;
        let supportedOperations: OPTIONAL<OperationsType>;
        const callbacks: $.DecodingMap = {
            parameters: (_el: _Element): void => {
                parameters = _decode_ParameterType(_el);
            },
            supportedOperations: (_el: _Element): void => {
                supportedOperations = _decode_OperationsType(_el);
            },
        };
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_KeyInfo_paramsAndOps,
            _extension_additions_list_spec_for_KeyInfo_paramsAndOps,
            _root_component_type_list_2_spec_for_KeyInfo_paramsAndOps,
            undefined
        );
        return new KeyInfo_paramsAndOps(
            parameters,
            supportedOperations
        );
    };
}


/**
 * @summary Returns a function that will encode a(n) KeyInfo_paramsAndOps into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) KeyInfo_paramsAndOps as an ASN.1 element.
 */
export function _get_encoder_for_KeyInfo_paramsAndOps<
    ParameterType,
    OperationsType
>(
    _encode_ParameterType: $.ASN1Encoder<ParameterType>,
    _encode_OperationsType: $.ASN1Encoder<OperationsType>
): $.ASN1Encoder<KeyInfo_paramsAndOps<ParameterType, OperationsType>> {
    return function (
        value: KeyInfo_paramsAndOps<ParameterType, OperationsType>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_ParameterType(
                        value.parameters,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.supportedOperations === undefined
                        ? undefined
                        : _encode_OperationsType(
                              value.supportedOperations,
                              $.BER
                          ),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}

/* eslint-enable */
