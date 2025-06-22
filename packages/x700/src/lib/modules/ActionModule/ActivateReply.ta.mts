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
    OperationalState,
    _enum_for_OperationalState,
    _decode_OperationalState,
    _encode_OperationalState,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/OperationalState.ta.mjs';
import {
    ActivateReply_responseCode,
    _decode_ActivateReply_responseCode,
    _encode_ActivateReply_responseCode,
} from '../ActionModule/ActivateReply-responseCode.ta.mjs';
import {
    ManagementExtension,
    _decode_ManagementExtension,
    _encode_ManagementExtension,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ManagementExtension.ta.mjs';
/**
 * @summary ActivateReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActivateReply ::= SEQUENCE {
 *   operationalStatus  [0]  OperationalState,
 *   responseCode
 *     [1]  INTEGER {successResponse(0), serviceProviderErrorResponse(1)},
 *   responseParams     [2]  SET OF ManagementExtension OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ActivateReply {
    constructor(
        /**
         * @summary `operationalStatus`.
         * @public
         * @readonly
         */
        readonly operationalStatus: OperationalState,
        /**
         * @summary `responseCode`.
         * @public
         * @readonly
         */
        readonly responseCode: ActivateReply_responseCode,
        /**
         * @summary `responseParams`.
         * @public
         * @readonly
         */
        readonly responseParams: OPTIONAL<ManagementExtension[]>
    ) {}

    /**
     * @summary Restructures an object into a ActivateReply
     * @description
     *
     * This takes an `object` and converts it to a `ActivateReply`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivateReply`.
     * @returns {ActivateReply}
     */
    public static _from_object(
        _o: { [_K in keyof ActivateReply]: ActivateReply[_K] }
    ): ActivateReply {
        return new ActivateReply(
            _o.operationalStatus,
            _o.responseCode,
            _o.responseParams
        );
    }

    /**
     * @summary The enum used as the type of the component `operationalStatus`
     * @public
     * @static
     */

    public static _enum_for_operationalStatus = _enum_for_OperationalState;
}

/**
 * @summary The Leading Root Component Types of ActivateReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActivateReply: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'operationalStatus',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'responseCode',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'responseParams',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of ActivateReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActivateReply: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ActivateReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActivateReply: $.ComponentSpec[] = [];

let _cached_decoder_for_ActivateReply: $.ASN1Decoder<ActivateReply> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivateReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActivateReply} The decoded data structure.
 */
export function _decode_ActivateReply(el: _Element) {
    if (!_cached_decoder_for_ActivateReply) {
        _cached_decoder_for_ActivateReply = function (
            el: _Element
        ): ActivateReply {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let operationalStatus!: OperationalState;
            let responseCode!: ActivateReply_responseCode;
            let responseParams: OPTIONAL<ManagementExtension[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                operationalStatus: (_el: _Element): void => {
                    operationalStatus = $._decode_explicit<OperationalState>(
                        () => _decode_OperationalState
                    )(_el);
                },
                responseCode: (_el: _Element): void => {
                    responseCode = $._decode_explicit<ActivateReply_responseCode>(
                        () => _decode_ActivateReply_responseCode
                    )(_el);
                },
                responseParams: (_el: _Element): void => {
                    responseParams = $._decode_explicit<ManagementExtension[]>(
                        () =>
                            $._decodeSetOf<ManagementExtension>(
                                () => _decode_ManagementExtension
                            )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ActivateReply,
                _extension_additions_list_spec_for_ActivateReply,
                _root_component_type_list_2_spec_for_ActivateReply,
                undefined
            );
            return new ActivateReply /* SEQUENCE_CONSTRUCTOR_CALL */(
                operationalStatus,
                responseCode,
                responseParams
            );
        };
    }
    return _cached_decoder_for_ActivateReply(el);
}

let _cached_encoder_for_ActivateReply: $.ASN1Encoder<ActivateReply> | null = null;

/**
 * @summary Encodes a(n) ActivateReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateReply, encoded as an ASN.1 Element.
 */
export function _encode_ActivateReply(
    value: ActivateReply,
    elGetter: $.ASN1Encoder<ActivateReply>
) {
    if (!_cached_encoder_for_ActivateReply) {
        _cached_encoder_for_ActivateReply = function (
            value: ActivateReply        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_OperationalState,
                            $.BER
                        )(value.operationalStatus, $.BER),
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            1,
                            () => _encode_ActivateReply_responseCode,
                            $.BER
                        )(value.responseCode, $.BER),
                        /* IF_ABSENT  */ value.responseParams === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSetOf<ManagementExtension>(
                                          () => _encode_ManagementExtension,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.responseParams, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ActivateReply(value, elGetter);
}


/* eslint-enable */
