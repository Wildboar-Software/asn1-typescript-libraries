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
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary ActionResponse
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionResponse ::= SEQUENCE {
 *   -- at least one component shall be present
 *   success        [0]  SET OF ObjectInstance OPTIONAL,
 *   failed         [1]  SET OF ObjectInstance OPTIONAL,
 *   indeterminate  [2]  SET OF ObjectInstance OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ActionResponse {
    constructor(
        /**
         * @summary `success`.
         * @public
         * @readonly
         */
        readonly success: OPTIONAL<ObjectInstance[]>,
        /**
         * @summary `failed`.
         * @public
         * @readonly
         */
        readonly failed: OPTIONAL<ObjectInstance[]>,
        /**
         * @summary `indeterminate`.
         * @public
         * @readonly
         */
        readonly indeterminate: OPTIONAL<ObjectInstance[]>
    ) {}

    /**
     * @summary Restructures an object into a ActionResponse
     * @description
     *
     * This takes an `object` and converts it to a `ActionResponse`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActionResponse`.
     * @returns {ActionResponse}
     */
    public static _from_object(
        _o: { [_K in keyof ActionResponse]: ActionResponse[_K] }
    ): ActionResponse {
        return new ActionResponse(_o.success, _o.failed, _o.indeterminate);
    }
}

/**
 * @summary The Leading Root Component Types of ActionResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionResponse: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'success',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'failed',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'indeterminate',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ActionResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionResponse: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ActionResponse
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionResponse: $.ComponentSpec[] = [];

let _cached_decoder_for_ActionResponse: $.ASN1Decoder<ActionResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActionResponse
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionResponse} The decoded data structure.
 */
export function _decode_ActionResponse(el: _Element) {
    if (!_cached_decoder_for_ActionResponse) {
        _cached_decoder_for_ActionResponse = function (
            el: _Element
        ): ActionResponse {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let success: OPTIONAL<ObjectInstance[]>;
            let failed: OPTIONAL<ObjectInstance[]>;
            let indeterminate: OPTIONAL<ObjectInstance[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                success: (_el: _Element): void => {
                    success = $._decode_implicit<ObjectInstance[]>(() =>
                        $._decodeSetOf<ObjectInstance>(
                            () => _decode_ObjectInstance
                        )
                    )(_el);
                },
                failed: (_el: _Element): void => {
                    failed = $._decode_implicit<ObjectInstance[]>(() =>
                        $._decodeSetOf<ObjectInstance>(
                            () => _decode_ObjectInstance
                        )
                    )(_el);
                },
                indeterminate: (_el: _Element): void => {
                    indeterminate = $._decode_implicit<ObjectInstance[]>(() =>
                        $._decodeSetOf<ObjectInstance>(
                            () => _decode_ObjectInstance
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ActionResponse,
                _extension_additions_list_spec_for_ActionResponse,
                _root_component_type_list_2_spec_for_ActionResponse,
                undefined
            );
            return new ActionResponse /* SEQUENCE_CONSTRUCTOR_CALL */(
                success,
                failed,
                indeterminate
            );
        };
    }
    return _cached_decoder_for_ActionResponse(el);
}

let _cached_encoder_for_ActionResponse: $.ASN1Encoder<ActionResponse> | null = null;

/**
 * @summary Encodes a(n) ActionResponse into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionResponse, encoded as an ASN.1 Element.
 */
export function _encode_ActionResponse(
    value: ActionResponse,
    elGetter: $.ASN1Encoder<ActionResponse>
) {
    if (!_cached_encoder_for_ActionResponse) {
        _cached_encoder_for_ActionResponse = function (
            value: ActionResponse        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.success === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      $._encodeSetOf<ObjectInstance>(
                                          () => _encode_ObjectInstance,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.success, $.BER),
                        /* IF_ABSENT  */ value.failed === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ObjectInstance>(
                                          () => _encode_ObjectInstance,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.failed, $.BER),
                        /* IF_ABSENT  */ value.indeterminate === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<ObjectInstance>(
                                          () => _encode_ObjectInstance,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.indeterminate, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ActionResponse(value, elGetter);
}


/* eslint-enable */
