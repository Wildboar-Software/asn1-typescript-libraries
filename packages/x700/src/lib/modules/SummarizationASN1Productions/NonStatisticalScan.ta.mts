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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AttributeMeasure,
    _decode_AttributeMeasure,
    _encode_AttributeMeasure,
} from '../SummarizationASN1Productions/AttributeMeasure.ta.mjs';
/**
 * @summary NonStatisticalScan
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonStatisticalScan ::= SEQUENCE {
 *   objectInstance   ObjectInstance OPTIONAL,
 *   -- not present if suppress object instance suppression is on
 *   attributeValues  SET OF AttributeMeasure OPTIONAL
 *   -- not present if scan attribute identifier list is empty
 * }
 * ```
 *
 * @class
 */
export class NonStatisticalScan {
    constructor(
        /**
         * @summary `objectInstance`.
         * @public
         * @readonly
         */
        readonly objectInstance: OPTIONAL<ObjectInstance>,
        /**
         * @summary `attributeValues`.
         * @public
         * @readonly
         */
        readonly attributeValues: OPTIONAL<AttributeMeasure[]>
    ) {}

    /**
     * @summary Restructures an object into a NonStatisticalScan
     * @description
     *
     * This takes an `object` and converts it to a `NonStatisticalScan`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonStatisticalScan`.
     * @returns {NonStatisticalScan}
     */
    public static _from_object(
        _o: { [_K in keyof NonStatisticalScan]: NonStatisticalScan[_K] }
    ): NonStatisticalScan {
        return new NonStatisticalScan(_o.objectInstance, _o.attributeValues);
    }
}

/**
 * @summary The Leading Root Component Types of NonStatisticalScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonStatisticalScan: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'objectInstance',
        true,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'attributeValues',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of NonStatisticalScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonStatisticalScan: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NonStatisticalScan
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonStatisticalScan: $.ComponentSpec[] = [];

let _cached_decoder_for_NonStatisticalScan: $.ASN1Decoder<NonStatisticalScan> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonStatisticalScan
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonStatisticalScan} The decoded data structure.
 */
export function _decode_NonStatisticalScan(el: _Element) {
    if (!_cached_decoder_for_NonStatisticalScan) {
        _cached_decoder_for_NonStatisticalScan = function (
            el: _Element
        ): NonStatisticalScan {
            let objectInstance: OPTIONAL<ObjectInstance>;
            let attributeValues: OPTIONAL<AttributeMeasure[]>;
            const callbacks: $.DecodingMap = {
                objectInstance: (_el: _Element): void => {
                    objectInstance = _decode_ObjectInstance(_el);
                },
                attributeValues: (_el: _Element): void => {
                    attributeValues = $._decodeSetOf<AttributeMeasure>(
                        () => _decode_AttributeMeasure
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonStatisticalScan,
                _extension_additions_list_spec_for_NonStatisticalScan,
                _root_component_type_list_2_spec_for_NonStatisticalScan,
                undefined
            );
            return new NonStatisticalScan (
                objectInstance,
                attributeValues
            );
        };
    }
    return _cached_decoder_for_NonStatisticalScan(el);
}

let _cached_encoder_for_NonStatisticalScan: $.ASN1Encoder<NonStatisticalScan> | null = null;

/**
 * @summary Encodes a(n) NonStatisticalScan into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonStatisticalScan, encoded as an ASN.1 Element.
 */
export function _encode_NonStatisticalScan(
    value: NonStatisticalScan,
    elGetter: $.ASN1Encoder<NonStatisticalScan>
) {
    if (!_cached_encoder_for_NonStatisticalScan) {
        _cached_encoder_for_NonStatisticalScan = function (
            value: NonStatisticalScan        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.objectInstance === undefined
                            ? undefined
                            : _encode_ObjectInstance(
                                  value.objectInstance,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.attributeValues === undefined
                            ? undefined
                            : $._encodeSetOf<AttributeMeasure>(
                                  () => _encode_AttributeMeasure,
                                  $.BER
                              )(value.attributeValues, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonStatisticalScan(value, elGetter);
}


/* eslint-enable */
