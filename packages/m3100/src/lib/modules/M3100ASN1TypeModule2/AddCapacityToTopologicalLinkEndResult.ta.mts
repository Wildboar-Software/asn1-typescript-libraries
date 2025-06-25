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
    NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta.mjs';

/**
 * @summary AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddCapacityToTopologicalLinkEndResult ::= SEQUENCE {
 *   resultingCapacity                    PointCapacity,
 *   resultingnetworkCTPs                 NWTPList,
 *   resultingProvisionedLinkEndCapacity  PointCapacity
 * }
 * ```
 *
 * @class
 */
export class AddCapacityToTopologicalLinkEndResult {
    constructor(
        /**
         * @summary `resultingCapacity`.
         * @public
         * @readonly
         */
        readonly resultingCapacity: PointCapacity,
        /**
         * @summary `resultingnetworkCTPs`.
         * @public
         * @readonly
         */
        readonly resultingnetworkCTPs: NWTPList,
        /**
         * @summary `resultingProvisionedLinkEndCapacity`.
         * @public
         * @readonly
         */
        readonly resultingProvisionedLinkEndCapacity: PointCapacity
    ) {}

    /**
     * @summary Restructures an object into a AddCapacityToTopologicalLinkEndResult
     * @description
     *
     * This takes an `object` and converts it to a `AddCapacityToTopologicalLinkEndResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddCapacityToTopologicalLinkEndResult`.
     * @returns {AddCapacityToTopologicalLinkEndResult}
     */
    public static _from_object(
        _o: {
            [_K in keyof AddCapacityToTopologicalLinkEndResult]: AddCapacityToTopologicalLinkEndResult[_K];
        }
    ): AddCapacityToTopologicalLinkEndResult {
        return new AddCapacityToTopologicalLinkEndResult(
            _o.resultingCapacity,
            _o.resultingnetworkCTPs,
            _o.resultingProvisionedLinkEndCapacity
        );
    }
}


/**
 * @summary The Leading Root Component Types of AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddCapacityToTopologicalLinkEndResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'resultingCapacity',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'resultingnetworkCTPs',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'resultingProvisionedLinkEndCapacity',
        false,
        $.hasAnyTag
    ),
];


/**
 * @summary The Trailing Root Component Types of AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddCapacityToTopologicalLinkEndResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AddCapacityToTopologicalLinkEndResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddCapacityToTopologicalLinkEndResult: $.ComponentSpec[] = [];


let _cached_decoder_for_AddCapacityToTopologicalLinkEndResult: $.ASN1Decoder<AddCapacityToTopologicalLinkEndResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddCapacityToTopologicalLinkEndResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddCapacityToTopologicalLinkEndResult} The decoded data structure.
 */
export function _decode_AddCapacityToTopologicalLinkEndResult(el: _Element): AddCapacityToTopologicalLinkEndResult {
    if (!_cached_decoder_for_AddCapacityToTopologicalLinkEndResult) {
        _cached_decoder_for_AddCapacityToTopologicalLinkEndResult = function (
            el: _Element
        ): AddCapacityToTopologicalLinkEndResult {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'AddCapacityToTopologicalLinkEndResult contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'resultingCapacity';
            sequence[1].name = 'resultingnetworkCTPs';
            sequence[2].name = 'resultingProvisionedLinkEndCapacity';
            let resultingCapacity!: PointCapacity;
            let resultingnetworkCTPs!: NWTPList;
            let resultingProvisionedLinkEndCapacity!: PointCapacity;
            resultingCapacity = _decode_PointCapacity(sequence[0]);
            resultingnetworkCTPs = _decode_NWTPList(sequence[1]);
            resultingProvisionedLinkEndCapacity = _decode_PointCapacity(
                sequence[2]
            );
            return new AddCapacityToTopologicalLinkEndResult(
                resultingCapacity,
                resultingnetworkCTPs,
                resultingProvisionedLinkEndCapacity
            );
        };
    }
    return _cached_decoder_for_AddCapacityToTopologicalLinkEndResult(el);
}


let _cached_encoder_for_AddCapacityToTopologicalLinkEndResult: $.ASN1Encoder<AddCapacityToTopologicalLinkEndResult> | null = null;


/**
 * @summary Encodes a(n) AddCapacityToTopologicalLinkEndResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddCapacityToTopologicalLinkEndResult, encoded as an ASN.1 Element.
 */
export function _encode_AddCapacityToTopologicalLinkEndResult(
    value: AddCapacityToTopologicalLinkEndResult,
    elGetter: $.ASN1Encoder<AddCapacityToTopologicalLinkEndResult>
): _Element {
    if (!_cached_encoder_for_AddCapacityToTopologicalLinkEndResult) {
        _cached_encoder_for_AddCapacityToTopologicalLinkEndResult = function (
            value: AddCapacityToTopologicalLinkEndResult        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PointCapacity(
                            value.resultingCapacity,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_NWTPList(
                            value.resultingnetworkCTPs,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_PointCapacity(
                            value.resultingProvisionedLinkEndCapacity,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AddCapacityToTopologicalLinkEndResult(
        value,
        elGetter
    );
}


/* eslint-enable */
