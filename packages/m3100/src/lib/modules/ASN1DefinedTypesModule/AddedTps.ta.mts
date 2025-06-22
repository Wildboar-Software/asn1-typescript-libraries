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
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary AddedTps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddedTps ::= SEQUENCE {
 *   gtp       ObjectInstance,
 *   tpsAdded  SEQUENCE OF ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class AddedTps {
    constructor(
        /**
         * @summary `gtp`.
         * @public
         * @readonly
         */
        readonly gtp: ObjectInstance,
        /**
         * @summary `tpsAdded`.
         * @public
         * @readonly
         */
        readonly tpsAdded: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a AddedTps
     * @description
     *
     * This takes an `object` and converts it to a `AddedTps`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddedTps`.
     * @returns {AddedTps}
     */
    public static _from_object(
        _o: { [_K in keyof AddedTps]: AddedTps[_K] }
    ): AddedTps {
        return new AddedTps(_o.gtp, _o.tpsAdded);
    }
}


/**
 * @summary The Leading Root Component Types of AddedTps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddedTps: $.ComponentSpec[] = [
    new $.ComponentSpec('gtp', false, $.hasAnyTag),
    new $.ComponentSpec(
        'tpsAdded',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of AddedTps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddedTps: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddedTps
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddedTps: $.ComponentSpec[] = [];


let _cached_decoder_for_AddedTps: $.ASN1Decoder<AddedTps> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddedTps
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddedTps} The decoded data structure.
 */
export function _decode_AddedTps(el: _Element) {
    if (!_cached_decoder_for_AddedTps) {
        _cached_decoder_for_AddedTps = function (el: _Element): AddedTps {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'AddedTps contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'gtp';
            sequence[1].name = 'tpsAdded';
            let gtp!: ObjectInstance;
            let tpsAdded!: ObjectInstance[];
            gtp = _decode_ObjectInstance(sequence[0]);
            tpsAdded = $._decodeSequenceOf<ObjectInstance>(
                () => _decode_ObjectInstance
            )(sequence[1]);
            return new AddedTps(gtp, tpsAdded);
        };
    }
    return _cached_decoder_for_AddedTps(el);
}


let _cached_encoder_for_AddedTps: $.ASN1Encoder<AddedTps> | null = null;


/**
 * @summary Encodes a(n) AddedTps into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddedTps, encoded as an ASN.1 Element.
 */
export function _encode_AddedTps(
    value: AddedTps,
    elGetter: $.ASN1Encoder<AddedTps>
) {
    if (!_cached_encoder_for_AddedTps) {
        _cached_encoder_for_AddedTps = function (
            value: AddedTps        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.gtp,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.tpsAdded, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddedTps(value, elGetter);
}


/* eslint-enable */
