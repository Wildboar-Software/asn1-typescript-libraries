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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    ToTermSpecifier,
    _decode_ToTermSpecifier,
    _encode_ToTermSpecifier,
} from '../ASN1DefinedTypesModule/ToTermSpecifier.ta.mjs';

/**
 * @summary AddLeg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddLeg ::= SEQUENCE {
 *   mpCrossConnection  ObjectInstance,
 *   legs               SET OF ToTermSpecifier
 * }
 * ```
 *
 */
export class AddLeg {
    constructor(
        /**
         * @summary `mpCrossConnection`.
         * @public
         * @readonly
         */
        readonly mpCrossConnection: ObjectInstance,
        /**
         * @summary `legs`.
         * @public
         * @readonly
         */
        readonly legs: ToTermSpecifier[]
    ) {}

    /**
     * @summary Restructures an object into a AddLeg
     * @description
     *
     * This takes an `object` and converts it to a `AddLeg`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddLeg`.
     * @returns {AddLeg}
     */
    public static _from_object(
        _o: { [_K in keyof AddLeg]: AddLeg[_K] }
    ): AddLeg {
        return new AddLeg(_o.mpCrossConnection, _o.legs);
    }
}


/**
 * @summary The Leading Root Component Types of AddLeg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddLeg: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'mpCrossConnection',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'legs',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of AddLeg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddLeg: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddLeg
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddLeg: $.ComponentSpec[] = [];


let _cached_decoder_for_AddLeg: $.ASN1Decoder<AddLeg> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddLeg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddLeg} The decoded data structure.
 */
export function _decode_AddLeg(el: _Element): AddLeg {
    if (!_cached_decoder_for_AddLeg) {
        _cached_decoder_for_AddLeg = function (el: _Element): AddLeg {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AddLeg contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'mpCrossConnection';
            sequence[1].name = 'legs';
            let mpCrossConnection!: ObjectInstance;
            let legs!: ToTermSpecifier[];
            mpCrossConnection = _decode_ObjectInstance(sequence[0]);
            legs = $._decodeSetOf<ToTermSpecifier>(
                () => _decode_ToTermSpecifier
            )(sequence[1]);
            return new AddLeg(mpCrossConnection, legs);
        };
    }
    return _cached_decoder_for_AddLeg(el);
}


let _cached_encoder_for_AddLeg: $.ASN1Encoder<AddLeg> | null = null;


/**
 * @summary Encodes a(n) AddLeg into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddLeg, encoded as an ASN.1 Element.
 */
export function _encode_AddLeg(value: AddLeg, elGetter: $.ASN1Encoder<AddLeg>): _Element {
    if (!_cached_encoder_for_AddLeg) {
        _cached_encoder_for_AddLeg = function (
            value: AddLeg        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.mpCrossConnection,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ToTermSpecifier>(
                            () => _encode_ToTermSpecifier,
                            $.BER
                        )(value.legs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddLeg(value, elGetter);
}


/* eslint-enable */
