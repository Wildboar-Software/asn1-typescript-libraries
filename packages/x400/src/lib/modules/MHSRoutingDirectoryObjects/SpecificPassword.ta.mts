/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RoutingCollectiveName,
    _decode_RoutingCollectiveName,
    _encode_RoutingCollectiveName,
} from '../MHSRoutingDirectoryObjects/RoutingCollectiveName.ta.mjs';
import {
    Password,
    _decode_Password,
    _encode_Password,
} from '../MTSAbstractService/Password.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SpecificPassword */
/**
 * @summary SpecificPassword
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecificPassword ::= SET {
 *   routing-collective-name  RoutingCollectiveName,
 *   this-mta-password        [0]  Password,
 *   calling-mta-password     [1]  Password
 * }
 * ```
 *
 * @class
 */
export class SpecificPassword {
    constructor(
        /**
         * @summary `routing_collective_name`.
         * @public
         * @readonly
         */
        readonly routing_collective_name: RoutingCollectiveName,
        /**
         * @summary `this_mta_password`.
         * @public
         * @readonly
         */
        readonly this_mta_password: Password,
        /**
         * @summary `calling_mta_password`.
         * @public
         * @readonly
         */
        readonly calling_mta_password: Password
    ) {}

    /**
     * @summary Restructures an object into a SpecificPassword
     * @description
     *
     * This takes an `object` and converts it to a `SpecificPassword`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecificPassword`.
     * @returns {SpecificPassword}
     */
    public static _from_object(
        _o: { [_K in keyof SpecificPassword]: SpecificPassword[_K] }
    ): SpecificPassword {
        return new SpecificPassword(
            _o.routing_collective_name,
            _o.this_mta_password,
            _o.calling_mta_password
        );
    }
}
/* END_OF_SYMBOL_DEFINITION SpecificPassword */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecificPassword */
/**
 * @summary The Leading Root Component Types of SpecificPassword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SpecificPassword: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'routing-collective-name',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'this-mta-password',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'calling-mta-password',
        false,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecificPassword */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecificPassword */
/**
 * @summary The Trailing Root Component Types of SpecificPassword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SpecificPassword: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecificPassword */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecificPassword */
/**
 * @summary The Extension Addition Component Types of SpecificPassword
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SpecificPassword: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecificPassword */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificPassword */
let _cached_decoder_for_SpecificPassword: $.ASN1Decoder<SpecificPassword> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecificPassword */

/* START_OF_SYMBOL_DEFINITION _decode_SpecificPassword */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecificPassword
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecificPassword} The decoded data structure.
 */
export function _decode_SpecificPassword(el: _Element) {
    if (!_cached_decoder_for_SpecificPassword) {
        _cached_decoder_for_SpecificPassword = function (
            el: _Element
        ): SpecificPassword {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let routing_collective_name!: RoutingCollectiveName;
            let this_mta_password!: Password;
            let calling_mta_password!: Password;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'routing-collective-name': (_el: _Element): void => {
                    routing_collective_name = _decode_RoutingCollectiveName(
                        _el
                    );
                },
                'this-mta-password': (_el: _Element): void => {
                    this_mta_password = $._decode_explicit<Password>(
                        () => _decode_Password
                    )(_el);
                },
                'calling-mta-password': (_el: _Element): void => {
                    calling_mta_password = $._decode_explicit<Password>(
                        () => _decode_Password
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SpecificPassword,
                _extension_additions_list_spec_for_SpecificPassword,
                _root_component_type_list_2_spec_for_SpecificPassword,
                undefined
            );
            return new SpecificPassword /* SET_CONSTRUCTOR_CALL */(
                routing_collective_name,
                this_mta_password,
                calling_mta_password
            );
        };
    }
    return _cached_decoder_for_SpecificPassword(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecificPassword */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificPassword */
let _cached_encoder_for_SpecificPassword: $.ASN1Encoder<SpecificPassword> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecificPassword */

/* START_OF_SYMBOL_DEFINITION _encode_SpecificPassword */
/**
 * @summary Encodes a(n) SpecificPassword into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificPassword, encoded as an ASN.1 Element.
 */
export function _encode_SpecificPassword(
    value: SpecificPassword,
    elGetter: $.ASN1Encoder<SpecificPassword>
) {
    if (!_cached_encoder_for_SpecificPassword) {
        _cached_encoder_for_SpecificPassword = function (
            value: SpecificPassword        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_RoutingCollectiveName(
                            value.routing_collective_name,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_Password,
                            $.BER
                        )(value.this_mta_password, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_Password,
                            $.BER
                        )(value.calling_mta_password, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SpecificPassword(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecificPassword */

/* eslint-enable */
