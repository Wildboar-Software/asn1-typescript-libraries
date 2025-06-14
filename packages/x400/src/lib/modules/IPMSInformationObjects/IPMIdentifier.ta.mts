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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
import {
    LocalIPMIdentifier,
    _decode_LocalIPMIdentifier,
    _encode_LocalIPMIdentifier,
} from '../IPMSInformationObjects/LocalIPMIdentifier.ta.mjs';
/* START_OF_SYMBOL_DEFINITION IPMIdentifier */
/**
 * @summary IPMIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMIdentifier ::= [APPLICATION 11]  SET {
 *   user                      ORName OPTIONAL,
 *   user-relative-identifier  LocalIPMIdentifier
 * }
 * ```
 *
 * @class
 */
export class IPMIdentifier {
    constructor(
        /**
         * @summary `user`.
         * @public
         * @readonly
         */
        readonly user: OPTIONAL<ORName>,
        /**
         * @summary `user_relative_identifier`.
         * @public
         * @readonly
         */
        readonly user_relative_identifier: LocalIPMIdentifier
    ) {}

    /**
     * @summary Restructures an object into a IPMIdentifier
     * @description
     *
     * This takes an `object` and converts it to a `IPMIdentifier`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPMIdentifier`.
     * @returns {IPMIdentifier}
     */
    public static _from_object(
        _o: { [_K in keyof IPMIdentifier]: IPMIdentifier[_K] }
    ): IPMIdentifier {
        return new IPMIdentifier(_o.user, _o.user_relative_identifier);
    }
}
/* END_OF_SYMBOL_DEFINITION IPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMIdentifier */
/**
 * @summary The Leading Root Component Types of IPMIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IPMIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'user',
        true,
        $.hasTag(_TagClass.application, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'user-relative-identifier',
        false,
        $.hasTag(_TagClass.universal, 19),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_IPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMIdentifier */
/**
 * @summary The Trailing Root Component Types of IPMIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IPMIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_IPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMIdentifier */
/**
 * @summary The Extension Addition Component Types of IPMIdentifier
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IPMIdentifier: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_IPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMIdentifier */
let _cached_decoder_for_IPMIdentifier: $.ASN1Decoder<IPMIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_IPMIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMIdentifier} The decoded data structure.
 */
export function _decode_IPMIdentifier(el: _Element) {
    if (!_cached_decoder_for_IPMIdentifier) {
        _cached_decoder_for_IPMIdentifier = $._decode_implicit<IPMIdentifier>(
            () =>
                function (el: _Element): IPMIdentifier {
                    /* START_OF_SET_COMPONENT_DECLARATIONS */
                    let user: OPTIONAL<ORName>;
                    let user_relative_identifier!: LocalIPMIdentifier;
                    /* END_OF_SET_COMPONENT_DECLARATIONS */
                    /* START_OF_CALLBACKS_MAP */
                    const callbacks: $.DecodingMap = {
                        user: (_el: _Element): void => {
                            user = _decode_ORName(_el);
                        },
                        'user-relative-identifier': (_el: _Element): void => {
                            user_relative_identifier = _decode_LocalIPMIdentifier(
                                _el
                            );
                        },
                    };
                    /* END_OF_CALLBACKS_MAP */
                    $._parse_set(
                        el,
                        callbacks,
                        _root_component_type_list_1_spec_for_IPMIdentifier,
                        _extension_additions_list_spec_for_IPMIdentifier,
                        _root_component_type_list_2_spec_for_IPMIdentifier,
                        undefined
                    );
                    return new IPMIdentifier /* SET_CONSTRUCTOR_CALL */(
                        user,
                        user_relative_identifier
                    );
                }
        );
    }
    return _cached_decoder_for_IPMIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMIdentifier */
let _cached_encoder_for_IPMIdentifier: $.ASN1Encoder<IPMIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_IPMIdentifier */
/**
 * @summary Encodes a(n) IPMIdentifier into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_IPMIdentifier(
    value: IPMIdentifier,
    elGetter: $.ASN1Encoder<IPMIdentifier>
) {
    if (!_cached_encoder_for_IPMIdentifier) {
        _cached_encoder_for_IPMIdentifier = $._encode_implicit(
            _TagClass.application,
            11,
            () =>
                function (
                    value: IPMIdentifier                ): _Element {
                    return $._encodeSet(
                        ([] as (_Element | undefined)[])
                            .concat([
                                /* IF_ABSENT  */ value.user === undefined
                                    ? undefined
                                    : _encode_ORName(value.user, $.BER),
                                /* REQUIRED   */ _encode_LocalIPMIdentifier(
                                    value.user_relative_identifier,
                                    $.BER
                                ),
                            ])
                            .filter(
                                (c: _Element | undefined): c is _Element => !!c
                            ),
                        $.BER
                    );
                },
            $.BER
        );
    }
    return _cached_encoder_for_IPMIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMIdentifier */

/* eslint-enable */
