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
    RoutingCollectiveName,
    _decode_RoutingCollectiveName,
    _encode_RoutingCollectiveName,
} from '../MHSRoutingDirectoryObjects/RoutingCollectiveName.ta.mjs';
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta.mjs';
/**
 * @summary TargetRoutingCollective
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TargetRoutingCollective ::= SEQUENCE {
 *   target-routing-collective  [0]  RoutingCollectiveName,
 *   local-user-identifier
 *     [1]  UniversalOrBMPString{ub-local-user-identifier} OPTIONAL
 * }
 * ```
 *
 */
export class TargetRoutingCollective {
    constructor(
        /**
         * @summary `target_routing_collective`.
         * @public
         * @readonly
         */
        readonly target_routing_collective: RoutingCollectiveName,
        /**
         * @summary `local_user_identifier`.
         * @public
         * @readonly
         */
        readonly local_user_identifier: OPTIONAL<UniversalOrBMPString>
    ) {}

    /**
     * @summary Restructures an object into a TargetRoutingCollective
     * @description
     *
     * This takes an `object` and converts it to a `TargetRoutingCollective`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TargetRoutingCollective`.
     * @returns {TargetRoutingCollective}
     */
    public static _from_object(
        _o: {
            [_K in keyof TargetRoutingCollective]: TargetRoutingCollective[_K];
        }
    ): TargetRoutingCollective {
        return new TargetRoutingCollective(
            _o.target_routing_collective,
            _o.local_user_identifier
        );
    }
}

/**
 * @summary The Leading Root Component Types of TargetRoutingCollective
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TargetRoutingCollective: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'target-routing-collective',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'local-user-identifier',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of TargetRoutingCollective
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TargetRoutingCollective: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TargetRoutingCollective
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TargetRoutingCollective: $.ComponentSpec[] = [];

let _cached_decoder_for_TargetRoutingCollective: $.ASN1Decoder<TargetRoutingCollective> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetRoutingCollective
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TargetRoutingCollective} The decoded data structure.
 */
export function _decode_TargetRoutingCollective(el: _Element): TargetRoutingCollective {
    if (!_cached_decoder_for_TargetRoutingCollective) {
        _cached_decoder_for_TargetRoutingCollective = function (
            el: _Element
        ): TargetRoutingCollective {
            let target_routing_collective!: RoutingCollectiveName;
            let local_user_identifier: OPTIONAL<UniversalOrBMPString>;
            const callbacks: $.DecodingMap = {
                'target-routing-collective': (_el: _Element): void => {
                    target_routing_collective = $._decode_implicit<RoutingCollectiveName>(
                        () => _decode_RoutingCollectiveName
                    )(_el);
                },
                'local-user-identifier': (_el: _Element): void => {
                    local_user_identifier = $._decode_implicit<UniversalOrBMPString>(
                        () => _decode_UniversalOrBMPString
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TargetRoutingCollective,
                _extension_additions_list_spec_for_TargetRoutingCollective,
                _root_component_type_list_2_spec_for_TargetRoutingCollective,
                undefined
            );
            return new TargetRoutingCollective (
                target_routing_collective,
                local_user_identifier
            );
        };
    }
    return _cached_decoder_for_TargetRoutingCollective(el);
}

let _cached_encoder_for_TargetRoutingCollective: $.ASN1Encoder<TargetRoutingCollective> | null = null;

/**
 * @summary Encodes a(n) TargetRoutingCollective into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetRoutingCollective, encoded as an ASN.1 Element.
 */
export function _encode_TargetRoutingCollective(
    value: TargetRoutingCollective,
    elGetter: $.ASN1Encoder<TargetRoutingCollective>
): _Element {
    if (!_cached_encoder_for_TargetRoutingCollective) {
        _cached_encoder_for_TargetRoutingCollective = function (
            value: TargetRoutingCollective        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_RoutingCollectiveName,
                            $.BER
                        )(value.target_routing_collective, $.BER),
                        /* IF_ABSENT  */ value.local_user_identifier ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UniversalOrBMPString,
                                  $.BER
                              )(value.local_user_identifier, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TargetRoutingCollective(value, elGetter);
}


/* eslint-enable */
