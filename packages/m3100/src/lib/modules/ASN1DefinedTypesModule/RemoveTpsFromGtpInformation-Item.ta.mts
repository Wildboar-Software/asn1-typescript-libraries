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

/**
 * @summary RemoveTpsFromGtpInformation_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromGtpInformation-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class RemoveTpsFromGtpInformation_Item {
    constructor(
        /**
         * @summary `fromGtp`.
         * @public
         * @readonly
         */
        readonly fromGtp: ObjectInstance,
        /**
         * @summary `tps`.
         * @public
         * @readonly
         */
        readonly tps: ObjectInstance[]
    ) {}

    /**
     * @summary Restructures an object into a RemoveTpsFromGtpInformation_Item
     * @description
     *
     * This takes an `object` and converts it to a `RemoveTpsFromGtpInformation_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveTpsFromGtpInformation_Item`.
     * @returns {RemoveTpsFromGtpInformation_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof RemoveTpsFromGtpInformation_Item]: RemoveTpsFromGtpInformation_Item[_K];
        }
    ): RemoveTpsFromGtpInformation_Item {
        return new RemoveTpsFromGtpInformation_Item(_o.fromGtp, _o.tps);
    }
}


/**
 * @summary The Leading Root Component Types of RemoveTpsFromGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RemoveTpsFromGtpInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('fromGtp', false, $.hasAnyTag),
    new $.ComponentSpec(
        'tps',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of RemoveTpsFromGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RemoveTpsFromGtpInformation_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RemoveTpsFromGtpInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RemoveTpsFromGtpInformation_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_RemoveTpsFromGtpInformation_Item: $.ASN1Decoder<RemoveTpsFromGtpInformation_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromGtpInformation_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromGtpInformation_Item} The decoded data structure.
 */
export function _decode_RemoveTpsFromGtpInformation_Item(el: _Element): RemoveTpsFromGtpInformation_Item {
    if (!_cached_decoder_for_RemoveTpsFromGtpInformation_Item) {
        _cached_decoder_for_RemoveTpsFromGtpInformation_Item = function (
            el: _Element
        ): RemoveTpsFromGtpInformation_Item {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RemoveTpsFromGtpInformation-Item contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'fromGtp';
            sequence[1].name = 'tps';
            let fromGtp!: ObjectInstance;
            let tps!: ObjectInstance[];
            fromGtp = _decode_ObjectInstance(sequence[0]);
            tps = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance)(
                sequence[1]
            );
            return new RemoveTpsFromGtpInformation_Item(fromGtp, tps);
        };
    }
    return _cached_decoder_for_RemoveTpsFromGtpInformation_Item(el);
}


let _cached_encoder_for_RemoveTpsFromGtpInformation_Item: $.ASN1Encoder<RemoveTpsFromGtpInformation_Item> | null = null;


/**
 * @summary Encodes a(n) RemoveTpsFromGtpInformation_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromGtpInformation_Item, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromGtpInformation_Item(
    value: RemoveTpsFromGtpInformation_Item,
    elGetter: $.ASN1Encoder<RemoveTpsFromGtpInformation_Item>
): _Element {
    if (!_cached_encoder_for_RemoveTpsFromGtpInformation_Item) {
        _cached_encoder_for_RemoveTpsFromGtpInformation_Item = function (
            value: RemoveTpsFromGtpInformation_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.fromGtp,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<ObjectInstance>(
                            () => _encode_ObjectInstance,
                            $.BER
                        )(value.tps, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RemoveTpsFromGtpInformation_Item(
        value,
        elGetter
    );
}


/* eslint-enable */
