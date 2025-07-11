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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    PremisesName,
    _decode_PremisesName,
    _encode_PremisesName,
} from '../X790ASN1Module/PremisesName.ta.mjs';
import {
    PremisesAddress,
    _decode_PremisesAddress,
    _encode_PremisesAddress,
} from '../X790ASN1Module/PremisesAddress.ta.mjs';

/**
 * @summary LocationAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LocationAddress ::= SEQUENCE {
 *   name     PremisesName,
 *   address  PremisesAddress,
 *   ...
 * }
 * ```
 *
 */
export class LocationAddress {
    constructor(
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: PremisesName,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: PremisesAddress,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocationAddress
     * @description
     *
     * This takes an `object` and converts it to a `LocationAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocationAddress`.
     * @returns {LocationAddress}
     */
    public static _from_object(
        _o: { [_K in keyof LocationAddress]: LocationAddress[_K] }
    ): LocationAddress {
        return new LocationAddress(
            _o.name,
            _o.address,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of LocationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LocationAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'name',
        false,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'address',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of LocationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LocationAddress: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of LocationAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LocationAddress: $.ComponentSpec[] = [];


let _cached_decoder_for_LocationAddress: $.ASN1Decoder<LocationAddress> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) LocationAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LocationAddress} The decoded data structure.
 */
export function _decode_LocationAddress(el: _Element): LocationAddress {
    if (!_cached_decoder_for_LocationAddress) {
        _cached_decoder_for_LocationAddress = function (
            el: _Element
        ): LocationAddress {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'LocationAddress contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'name';
            sequence[1].name = 'address';
            let name!: PremisesName;
            let address!: PremisesAddress;
            name = _decode_PremisesName(sequence[0]);
            address = _decode_PremisesAddress(sequence[1]);
            return new LocationAddress(name, address, sequence.slice(2));
        };
    }
    return _cached_decoder_for_LocationAddress(el);
}


let _cached_encoder_for_LocationAddress: $.ASN1Encoder<LocationAddress> | null = null;


/**
 * @summary Encodes a(n) LocationAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationAddress, encoded as an ASN.1 Element.
 */
export function _encode_LocationAddress(
    value: LocationAddress,
    elGetter: $.ASN1Encoder<LocationAddress>
): _Element {
    if (!_cached_encoder_for_LocationAddress) {
        _cached_encoder_for_LocationAddress = function (
            value: LocationAddress        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_PremisesName(
                                value.name,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_PremisesAddress(
                                value.address,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_LocationAddress(value, elGetter);
}


/* eslint-enable */
