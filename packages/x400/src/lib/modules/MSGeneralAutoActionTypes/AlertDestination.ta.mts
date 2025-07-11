/* eslint-disable */
import {
    OPTIONAL,
    OCTET_STRING,
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary AlertDestination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlertDestination ::= SEQUENCE {
 *   alert-address    EXTERNAL,
 *   alert-qualifier  OCTET STRING OPTIONAL
 * }
 * ```
 *
 */
export class AlertDestination {
    constructor(
        /**
         * @summary `alert_address`.
         * @public
         * @readonly
         */
        readonly alert_address: EXTERNAL,
        /**
         * @summary `alert_qualifier`.
         * @public
         * @readonly
         */
        readonly alert_qualifier: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a AlertDestination
     * @description
     *
     * This takes an `object` and converts it to a `AlertDestination`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlertDestination`.
     * @returns {AlertDestination}
     */
    public static _from_object(
        _o: { [_K in keyof AlertDestination]: AlertDestination[_K] }
    ): AlertDestination {
        return new AlertDestination(_o.alert_address, _o.alert_qualifier);
    }
}

/**
 * @summary The Leading Root Component Types of AlertDestination
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlertDestination: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'alert-address',
        false,
        $.hasTag(_TagClass.universal, 8)
    ),
    new $.ComponentSpec(
        'alert-qualifier',
        true,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of AlertDestination
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlertDestination: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AlertDestination
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlertDestination: $.ComponentSpec[] = [];

let _cached_decoder_for_AlertDestination: $.ASN1Decoder<AlertDestination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlertDestination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlertDestination} The decoded data structure.
 */
export function _decode_AlertDestination(el: _Element): AlertDestination {
    if (!_cached_decoder_for_AlertDestination) {
        _cached_decoder_for_AlertDestination = function (
            el: _Element
        ): AlertDestination {
            let alert_address!: EXTERNAL;
            let alert_qualifier: OPTIONAL<OCTET_STRING>;
            const callbacks: $.DecodingMap = {
                'alert-address': (_el: _Element): void => {
                    alert_address = $._decodeExternal(_el);
                },
                'alert-qualifier': (_el: _Element): void => {
                    alert_qualifier = $._decodeOctetString(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlertDestination,
                _extension_additions_list_spec_for_AlertDestination,
                _root_component_type_list_2_spec_for_AlertDestination,
                undefined
            );
            return new AlertDestination (
                alert_address,
                alert_qualifier
            );
        };
    }
    return _cached_decoder_for_AlertDestination(el);
}

let _cached_encoder_for_AlertDestination: $.ASN1Encoder<AlertDestination> | null = null;

/**
 * @summary Encodes a(n) AlertDestination into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlertDestination, encoded as an ASN.1 Element.
 */
export function _encode_AlertDestination(
    value: AlertDestination,
    elGetter: $.ASN1Encoder<AlertDestination>
): _Element {
    if (!_cached_encoder_for_AlertDestination) {
        _cached_encoder_for_AlertDestination = function (
            value: AlertDestination        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeExternal(
                            value.alert_address,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.alert_qualifier === undefined
                            ? undefined
                            : $._encodeOctetString(
                                  value.alert_qualifier,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlertDestination(value, elGetter);
}


/* eslint-enable */
