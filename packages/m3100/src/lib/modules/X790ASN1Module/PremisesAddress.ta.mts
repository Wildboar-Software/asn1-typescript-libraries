/* eslint-disable */
import {
    GraphicString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary PremisesAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PremisesAddress ::= SEQUENCE {
 *   civicAddress  GraphicString(SIZE (0..64)),
 *   city          GraphicString(SIZE (0..64)),
 *   state         GraphicString(SIZE (0..64)),
 *   zip           GraphicString(SIZE (0..64)),
 *   ...
 * }
 * ```
 *
 * @class
 */
export class PremisesAddress {
    constructor(
        /**
         * @summary `civicAddress`.
         * @public
         * @readonly
         */
        readonly civicAddress: GraphicString,
        /**
         * @summary `city`.
         * @public
         * @readonly
         */
        readonly city: GraphicString,
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: GraphicString,
        /**
         * @summary `zip`.
         * @public
         * @readonly
         */
        readonly zip: GraphicString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PremisesAddress
     * @description
     *
     * This takes an `object` and converts it to a `PremisesAddress`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PremisesAddress`.
     * @returns {PremisesAddress}
     */
    public static _from_object(
        _o: { [_K in keyof PremisesAddress]: PremisesAddress[_K] }
    ): PremisesAddress {
        return new PremisesAddress(
            _o.civicAddress,
            _o.city,
            _o.state,
            _o.zip,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of PremisesAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PremisesAddress: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'civicAddress',
        false,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'city',
        false,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'state',
        false,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'zip',
        false,
        $.hasTag(_TagClass.universal, 25)
    ),
];


/**
 * @summary The Trailing Root Component Types of PremisesAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PremisesAddress: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PremisesAddress
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PremisesAddress: $.ComponentSpec[] = [];


let _cached_decoder_for_PremisesAddress: $.ASN1Decoder<PremisesAddress> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PremisesAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PremisesAddress} The decoded data structure.
 */
export function _decode_PremisesAddress(el: _Element) {
    if (!_cached_decoder_for_PremisesAddress) {
        _cached_decoder_for_PremisesAddress = function (
            el: _Element
        ): PremisesAddress {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 4) {
                throw new _ConstructionError(
                    'PremisesAddress contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'civicAddress';
            sequence[1].name = 'city';
            sequence[2].name = 'state';
            sequence[3].name = 'zip';
            let civicAddress!: GraphicString;
            let city!: GraphicString;
            let state!: GraphicString;
            let zip!: GraphicString;
            civicAddress = $._decodeGraphicString(sequence[0]);
            city = $._decodeGraphicString(sequence[1]);
            state = $._decodeGraphicString(sequence[2]);
            zip = $._decodeGraphicString(sequence[3]);
            return new PremisesAddress(
                civicAddress,
                city,
                state,
                zip,
                sequence.slice(4)
            );
        };
    }
    return _cached_decoder_for_PremisesAddress(el);
}


let _cached_encoder_for_PremisesAddress: $.ASN1Encoder<PremisesAddress> | null = null;


/**
 * @summary Encodes a(n) PremisesAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PremisesAddress, encoded as an ASN.1 Element.
 */
export function _encode_PremisesAddress(
    value: PremisesAddress,
    elGetter: $.ASN1Encoder<PremisesAddress>
) {
    if (!_cached_encoder_for_PremisesAddress) {
        _cached_encoder_for_PremisesAddress = function (
            value: PremisesAddress        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeGraphicString(
                                value.civicAddress,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeGraphicString(
                                value.city,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeGraphicString(
                                value.state,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeGraphicString(
                                value.zip,
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
    return _cached_encoder_for_PremisesAddress(value, elGetter);
}


/* eslint-enable */
