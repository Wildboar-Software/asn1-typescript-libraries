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
    PointCapacity,
    _decode_PointCapacity,
    _encode_PointCapacity,
} from '../M3100ASN1TypeModule2/PointCapacity.ta.mjs';
import {
    LinkConnectionList,
    _decode_LinkConnectionList,
    _encode_LinkConnectionList,
} from '../M3100ASN1TypeModule2/LinkConnectionList.ta.mjs';

/**
 * @summary RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveCapacityFromTopLinkEndResult ::= SEQUENCE {
 *   resultingCapacity         PointCapacity,
 *   resultingLinkConnections  LinkConnectionList
 * }
 * ```
 *
 * @class
 */
export class RemoveCapacityFromTopLinkEndResult {
    constructor(
        /**
         * @summary `resultingCapacity`.
         * @public
         * @readonly
         */
        readonly resultingCapacity: PointCapacity,
        /**
         * @summary `resultingLinkConnections`.
         * @public
         * @readonly
         */
        readonly resultingLinkConnections: LinkConnectionList
    ) {}

    /**
     * @summary Restructures an object into a RemoveCapacityFromTopLinkEndResult
     * @description
     *
     * This takes an `object` and converts it to a `RemoveCapacityFromTopLinkEndResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoveCapacityFromTopLinkEndResult`.
     * @returns {RemoveCapacityFromTopLinkEndResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof RemoveCapacityFromTopLinkEndResult]: RemoveCapacityFromTopLinkEndResult[_K];
        }
    ): RemoveCapacityFromTopLinkEndResult {
        return new RemoveCapacityFromTopLinkEndResult(
            _o.resultingCapacity,
            _o.resultingLinkConnections
        );
    }
}


/**
 * @summary The Leading Root Component Types of RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RemoveCapacityFromTopLinkEndResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'resultingCapacity',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'resultingLinkConnections',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RemoveCapacityFromTopLinkEndResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RemoveCapacityFromTopLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RemoveCapacityFromTopLinkEndResult: $.ComponentSpec[] = [];


let _cached_decoder_for_RemoveCapacityFromTopLinkEndResult: $.ASN1Decoder<RemoveCapacityFromTopLinkEndResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RemoveCapacityFromTopLinkEndResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveCapacityFromTopLinkEndResult} The decoded data structure.
 */
export function _decode_RemoveCapacityFromTopLinkEndResult(el: _Element) {
    if (!_cached_decoder_for_RemoveCapacityFromTopLinkEndResult) {
        _cached_decoder_for_RemoveCapacityFromTopLinkEndResult = function (
            el: _Element
        ): RemoveCapacityFromTopLinkEndResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    'RemoveCapacityFromTopLinkEndResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'resultingCapacity';
            sequence[1].name = 'resultingLinkConnections';
            let resultingCapacity!: PointCapacity;
            let resultingLinkConnections!: LinkConnectionList;
            resultingCapacity = _decode_PointCapacity(sequence[0]);
            resultingLinkConnections = _decode_LinkConnectionList(sequence[1]);
            return new RemoveCapacityFromTopLinkEndResult(
                resultingCapacity,
                resultingLinkConnections
            );
        };
    }
    return _cached_decoder_for_RemoveCapacityFromTopLinkEndResult(el);
}


let _cached_encoder_for_RemoveCapacityFromTopLinkEndResult: $.ASN1Encoder<RemoveCapacityFromTopLinkEndResult> | null = null;


/**
 * @summary Encodes a(n) RemoveCapacityFromTopLinkEndResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveCapacityFromTopLinkEndResult, encoded as an ASN.1 Element.
 */
export function _encode_RemoveCapacityFromTopLinkEndResult(
    value: RemoveCapacityFromTopLinkEndResult,
    elGetter: $.ASN1Encoder<RemoveCapacityFromTopLinkEndResult>
) {
    if (!_cached_encoder_for_RemoveCapacityFromTopLinkEndResult) {
        _cached_encoder_for_RemoveCapacityFromTopLinkEndResult = function (
            value: RemoveCapacityFromTopLinkEndResult        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PointCapacity(
                            value.resultingCapacity,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_LinkConnectionList(
                            value.resultingLinkConnections,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RemoveCapacityFromTopLinkEndResult(
        value,
        elGetter
    );
}


/* eslint-enable */
