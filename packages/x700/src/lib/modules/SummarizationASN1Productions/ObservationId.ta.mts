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
    ScanAttributeIdList,
    _decode_ScanAttributeIdList,
    _encode_ScanAttributeIdList,
} from '../SummarizationASN1Productions/ScanAttributeIdList.ta.mjs';
import {
    NumericAttributeIdArray,
    _decode_NumericAttributeIdArray,
    _encode_NumericAttributeIdArray,
} from '../SummarizationASN1Productions/NumericAttributeIdArray.ta.mjs';
/**
 * @summary ObservationId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObservationId ::= SEQUENCE {
 *   observedObject           ObjectInstance,
 *   scanAttributeIdList      ScanAttributeIdList OPTIONAL,
 *   numericAttributeIdArray  NumericAttributeIdArray OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ObservationId {
    constructor(
        /**
         * @summary `observedObject`.
         * @public
         * @readonly
         */
        readonly observedObject: ObjectInstance,
        /**
         * @summary `scanAttributeIdList`.
         * @public
         * @readonly
         */
        readonly scanAttributeIdList: OPTIONAL<ScanAttributeIdList>,
        /**
         * @summary `numericAttributeIdArray`.
         * @public
         * @readonly
         */
        readonly numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>
    ) {}

    /**
     * @summary Restructures an object into a ObservationId
     * @description
     *
     * This takes an `object` and converts it to a `ObservationId`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObservationId`.
     * @returns {ObservationId}
     */
    public static _from_object(
        _o: { [_K in keyof ObservationId]: ObservationId[_K] }
    ): ObservationId {
        return new ObservationId(
            _o.observedObject,
            _o.scanAttributeIdList,
            _o.numericAttributeIdArray
        );
    }
}

/**
 * @summary The Leading Root Component Types of ObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObservationId: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'observedObject',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'scanAttributeIdList',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'numericAttributeIdArray',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of ObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObservationId: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ObservationId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObservationId: $.ComponentSpec[] = [];

let _cached_decoder_for_ObservationId: $.ASN1Decoder<ObservationId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservationId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObservationId} The decoded data structure.
 */
export function _decode_ObservationId(el: _Element): ObservationId {
    if (!_cached_decoder_for_ObservationId) {
        _cached_decoder_for_ObservationId = function (
            el: _Element
        ): ObservationId {
            let observedObject!: ObjectInstance;
            let scanAttributeIdList: OPTIONAL<ScanAttributeIdList>;
            let numericAttributeIdArray: OPTIONAL<NumericAttributeIdArray>;
            const callbacks: $.DecodingMap = {
                observedObject: (_el: _Element): void => {
                    observedObject = _decode_ObjectInstance(_el);
                },
                scanAttributeIdList: (_el: _Element): void => {
                    scanAttributeIdList = _decode_ScanAttributeIdList(_el);
                },
                numericAttributeIdArray: (_el: _Element): void => {
                    numericAttributeIdArray = _decode_NumericAttributeIdArray(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObservationId,
                _extension_additions_list_spec_for_ObservationId,
                _root_component_type_list_2_spec_for_ObservationId,
                undefined
            );
            return new ObservationId (
                observedObject,
                scanAttributeIdList,
                numericAttributeIdArray
            );
        };
    }
    return _cached_decoder_for_ObservationId(el);
}

let _cached_encoder_for_ObservationId: $.ASN1Encoder<ObservationId> | null = null;

/**
 * @summary Encodes a(n) ObservationId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservationId, encoded as an ASN.1 Element.
 */
export function _encode_ObservationId(
    value: ObservationId,
    elGetter: $.ASN1Encoder<ObservationId>
): _Element {
    if (!_cached_encoder_for_ObservationId) {
        _cached_encoder_for_ObservationId = function (
            value: ObservationId        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ObjectInstance(
                            value.observedObject,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.scanAttributeIdList === undefined
                            ? undefined
                            : _encode_ScanAttributeIdList(
                                  value.scanAttributeIdList,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.numericAttributeIdArray ===
                        undefined
                            ? undefined
                            : _encode_NumericAttributeIdArray(
                                  value.numericAttributeIdArray,
                                  $.BER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ObservationId(value, elGetter);
}


/* eslint-enable */
